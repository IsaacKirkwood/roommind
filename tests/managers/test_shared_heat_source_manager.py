"""Tests for whole-house heat-source planning."""

from custom_components.roommind_eklabs.const import MODE_HEATING, MODE_IDLE
from custom_components.roommind_eklabs.managers.shared_heat_source_manager import (
    RoomHeatDemand,
    SharedHeatSourceManager,
)


def _source(**overrides):
    source = {
        "id": "gas",
        "name": "Whole-house gas",
        "entity_id": "climate.gas",
        "rooms": ["isaac", "jacob", "living"],
        "min_requesting_rooms": 2,
        "aggregate_power_threshold": 1.2,
        "start_delta": 0.5,
        "stop_delta": 0.2,
        "local_trim_delta": 1.0,
        "local_grace_minutes": 15,
        "min_run_minutes": 15,
        "min_off_minutes": 10,
    }
    source.update(overrides)
    return source


def _demand(area_id, *, temp=18.0, target=20.0, power=1.0, mode=MODE_HEATING, enabled=True):
    return RoomHeatDemand(area_id, mode, temp, target, power, enabled)


def test_starts_for_two_requesting_rooms():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source()])

    plan = manager.evaluate("gas", [_demand("isaac"), _demand("jacob"), _demand("living", mode=MODE_IDLE)], now=1000)

    assert plan.active is True
    assert plan.transition == "start"
    assert plan.requesting_rooms == ("isaac", "jacob")
    assert plan.shared_heat_rooms == frozenset({"isaac", "jacob", "living"})
    assert plan.local_heat_allowed == frozenset()


def test_single_mild_room_uses_local_heat_only():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source()])

    plan = manager.evaluate("gas", [_demand("isaac", temp=19.2, target=20.0, power=0.5)], now=1000)

    assert plan.active is False
    assert plan.local_heat_allowed == frozenset({"isaac"})
    assert plan.reason == "demand below shared-source threshold"


def test_single_large_demand_can_cross_aggregate_threshold():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source(aggregate_power_threshold=0.8)])

    plan = manager.evaluate("gas", [_demand("isaac", power=0.9)], now=1000)

    assert plan.active is True
    assert plan.transition == "start"


def test_grace_period_blocks_local_heat_then_allows_cold_room_trim():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source()])
    demands = [_demand("isaac", temp=17.0), _demand("jacob", temp=19.4)]

    started = manager.evaluate("gas", demands, now=1000)
    during_grace = manager.evaluate("gas", demands, now=1000 + 14 * 60)
    after_grace = manager.evaluate("gas", demands, now=1000 + 15 * 60)

    assert started.local_heat_allowed == frozenset()
    assert during_grace.local_heat_allowed == frozenset()
    assert after_grace.local_heat_allowed == frozenset({"isaac"})


def test_minimum_run_holds_source_after_demand_clears():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source()])
    manager.evaluate("gas", [_demand("isaac"), _demand("jacob")], now=1000)

    held = manager.evaluate("gas", [], now=1000 + 5 * 60)
    stopped = manager.evaluate("gas", [], now=1000 + 15 * 60)

    assert held.active is True
    assert held.reason == "minimum run time"
    assert stopped.active is False
    assert stopped.transition == "stop"


def test_minimum_off_blocks_restart_and_keeps_local_heat_available():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source(min_run_minutes=0)])
    manager.evaluate("gas", [_demand("isaac"), _demand("jacob")], now=1000)
    manager.evaluate("gas", [], now=1010)

    blocked = manager.evaluate("gas", [_demand("isaac"), _demand("jacob")], now=1020)
    restarted = manager.evaluate("gas", [_demand("isaac"), _demand("jacob")], now=1010 + 10 * 60)

    assert blocked.active is False
    assert blocked.reason == "minimum off time"
    assert blocked.local_heat_allowed == frozenset({"isaac", "jacob"})
    assert restarted.active is True
    assert restarted.transition == "start"


def test_unknown_and_disabled_rooms_do_not_contribute():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source()])

    plan = manager.evaluate(
        "gas",
        [
            _demand("isaac", enabled=False),
            _demand("unknown"),
            _demand("jacob", temp=None),
        ],
        now=1000,
    )

    assert plan.active is False
    assert plan.requesting_rooms == ()


def test_disabled_source_stops_immediately():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source()])
    manager.evaluate("gas", [_demand("isaac"), _demand("jacob")], now=1000)
    manager.load_sources([_source(enabled=False)])

    plan = manager.evaluate("gas", [_demand("isaac"), _demand("jacob")], now=1010)

    assert plan.active is False
    assert plan.transition == "stop"
    assert plan.reason == "source disabled or incomplete"


def test_reload_preserves_runtime_state():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source()])
    manager.evaluate("gas", [_demand("isaac"), _demand("jacob")], now=1000)
    manager.load_sources([_source(local_trim_delta=1.5)])

    plan = manager.evaluate("gas", [_demand("isaac"), _demand("jacob")], now=1010)

    assert plan.active is True
    assert plan.transition == "none"


def test_removed_source_drops_runtime_state():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source()])
    manager.load_sources([])

    assert manager.get_configs() == {}
    assert manager.get_state("gas") is None


def test_occupancy_gate_uses_hold_then_falls_back_to_local_heat():
    manager = SharedHeatSourceManager()
    manager.load_sources(
        [_source(require_occupancy=True, occupancy_hold_minutes=20, min_run_minutes=0)]
    )
    demands = [_demand("isaac"), _demand("jacob")]

    blocked = manager.evaluate("gas", demands, now=1000, occupied_now=False)
    started = manager.evaluate("gas", demands, now=1010, occupied_now=True)
    held = manager.evaluate("gas", demands, now=1010 + 19 * 60, occupied_now=False)
    stopped = manager.evaluate("gas", demands, now=1010 + 21 * 60, occupied_now=False)

    assert blocked.active is False
    assert blocked.local_heat_allowed == frozenset({"isaac", "jacob"})
    assert started.active is True
    assert started.occupancy_eligible is True
    assert held.active is True
    assert stopped.active is False
    assert stopped.reason == "occupancy gate clear"
    assert stopped.local_heat_allowed == frozenset({"isaac", "jacob"})


def test_occupancy_loss_allows_local_heat_during_minimum_gas_run():
    manager = SharedHeatSourceManager()
    manager.load_sources([_source(require_occupancy=True, occupancy_hold_minutes=0)])
    demands = [_demand("isaac"), _demand("jacob")]
    manager.evaluate("gas", demands, now=1000, occupied_now=True)

    held = manager.evaluate("gas", demands, now=1010, occupied_now=False)

    assert held.active is True
    assert held.reason == "minimum run time"
    assert held.occupancy_eligible is False
    assert held.local_heat_allowed == frozenset({"isaac", "jacob"})
