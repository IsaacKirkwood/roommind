"""Tests for whole-house plant safety and mode planning."""

from custom_components.roommind_eklabs.managers.whole_house_plant_manager import (
    MODE_COOL,
    MODE_OFF,
    MODE_VENTILATE,
    WholeHousePlantConfig,
    WholeHousePlantManager,
    dew_point_celsius,
    wet_bulb_celsius,
)


def _evaluate(manager, **overrides):
    values = {
        "indoor_temperature": 27.0,
        "indoor_humidity": 50.0,
        "outdoor_temperature": 22.0,
        "outdoor_humidity": 40.0,
        "home_occupied": True,
        "area_occupied": True,
        "heating_active": False,
        "ventilation_requested": False,
        "reported_mode": MODE_OFF,
        "feedback_available": True,
        "feedback_age_seconds": 0,
        "now": 1000,
    }
    values.update(overrides)
    return manager.evaluate(**values)


def test_evaporative_cooling_starts_from_temperature_demand():
    manager = WholeHousePlantManager(WholeHousePlantConfig("climate.magiqtouch_zone_1"))
    plan = _evaluate(manager)
    assert plan.mode == MODE_COOL
    assert plan.cooling_allowed is True


def test_hot_dry_air_uses_wet_bulb_advantage():
    manager = WholeHousePlantManager(WholeHousePlantConfig("climate.magiqtouch_zone_1"))
    plan = _evaluate(
        manager,
        indoor_temperature=28.0,
        outdoor_temperature=32.0,
        outdoor_humidity=20.0,
    )
    assert wet_bulb_celsius(32.0, 20.0) < 20.0
    assert plan.mode == MODE_COOL


def test_heating_interlock_blocks_cooling():
    manager = WholeHousePlantManager(WholeHousePlantConfig("climate.magiqtouch_zone_1"))
    plan = _evaluate(manager, heating_active=True)
    assert plan.mode == MODE_OFF
    assert plan.reason == "heating interlock"


def test_evaporative_cooling_blocks_high_humidity_but_allows_fresh_air():
    manager = WholeHousePlantManager(WholeHousePlantConfig("climate.magiqtouch_zone_1"))
    plan = _evaluate(manager, outdoor_humidity=90.0, ventilation_requested=True)
    assert plan.mode == MODE_VENTILATE
    assert plan.cooling_allowed is False


def test_refrigerated_cooling_has_dew_point_guard():
    config = WholeHousePlantConfig("climate.plant", cooling_type="refrigerated", cooling_target=18.0)
    manager = WholeHousePlantManager(config)
    plan = _evaluate(manager, indoor_temperature=25.0, indoor_humidity=80.0)
    assert dew_point_celsius(25.0, 80.0) > 21.0
    assert plan.mode == MODE_OFF
    assert plan.reason == "dew-point protection"


def test_nobody_home_blocks_cooling_and_ventilation():
    manager = WholeHousePlantManager(WholeHousePlantConfig("climate.plant"))
    plan = _evaluate(manager, home_occupied=False, ventilation_requested=True)
    assert plan.mode == MODE_OFF
    assert plan.ventilation_allowed is False


def test_stale_feedback_fails_closed():
    manager = WholeHousePlantManager(WholeHousePlantConfig("climate.plant"))
    plan = _evaluate(manager, feedback_age_seconds=181)
    assert plan.mode == MODE_OFF
    assert plan.fault == "plant feedback stale"


def test_command_mismatch_becomes_fault_after_timeout():
    manager = WholeHousePlantManager(WholeHousePlantConfig("climate.plant", feedback_timeout_seconds=120))
    _evaluate(manager, now=1000)
    pending = _evaluate(manager, reported_mode=MODE_OFF, now=1010)
    faulted = _evaluate(manager, reported_mode=MODE_OFF, now=1131)
    assert pending.fault is None
    assert faulted.mode == MODE_OFF
    assert faulted.fault == "plant failed to follow command"


def test_maximum_runtime_stops_plant():
    manager = WholeHousePlantManager(WholeHousePlantConfig("climate.plant", max_continuous_runtime_minutes=10))
    _evaluate(manager, now=1000)
    plan = _evaluate(manager, reported_mode=MODE_COOL, now=1601)
    assert plan.mode == MODE_OFF
    assert plan.fault == "maximum runtime exceeded"
