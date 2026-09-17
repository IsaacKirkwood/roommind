"""Whole-house heat-source planning.

Shared sources differ from ordinary RoomMind devices: one furnace command
changes the thermal input of several rooms at once.  This module keeps that
decision global and returns a per-room local-heater allowance for trimming.
It deliberately contains no Home Assistant service calls so policy remains
deterministic and straightforward to test.
"""

from __future__ import annotations

from dataclasses import dataclass
from time import monotonic

from ..const import (
    DEFAULT_SHARED_HEAT_AGGREGATE_POWER_THRESHOLD,
    DEFAULT_SHARED_HEAT_LOCAL_GRACE_MINUTES,
    DEFAULT_SHARED_HEAT_LOCAL_TRIM_DELTA,
    DEFAULT_SHARED_HEAT_MIN_OFF_MINUTES,
    DEFAULT_SHARED_HEAT_MIN_REQUESTING_ROOMS,
    DEFAULT_SHARED_HEAT_MIN_RUN_MINUTES,
    DEFAULT_SHARED_HEAT_OCCUPANCY_HOLD_MINUTES,
    DEFAULT_SHARED_HEAT_START_DELTA,
    DEFAULT_SHARED_HEAT_STOP_DELTA,
    MODE_HEATING,
)


@dataclass(frozen=True)
class RoomHeatDemand:
    """Heating demand produced by one room controller."""

    area_id: str
    mode: str
    current_temp: float | None
    target_temp: float | None
    power_fraction: float = 0.0
    enabled: bool = True

    @property
    def delta(self) -> float:
        """Positive target shortfall in degrees Celsius."""
        if self.current_temp is None or self.target_temp is None:
            return 0.0
        return max(0.0, self.target_temp - self.current_temp)

    @property
    def requesting(self) -> bool:
        """Whether this room is making an actionable heat request."""
        return self.enabled and self.mode == MODE_HEATING and self.power_fraction > 0.0 and self.delta > 0.0


@dataclass(frozen=True)
class SharedHeatSourceConfig:
    """Validated runtime configuration for one shared source."""

    id: str
    name: str
    entity_id: str
    rooms: tuple[str, ...]
    min_requesting_rooms: int = DEFAULT_SHARED_HEAT_MIN_REQUESTING_ROOMS
    aggregate_power_threshold: float = DEFAULT_SHARED_HEAT_AGGREGATE_POWER_THRESHOLD
    start_delta: float = DEFAULT_SHARED_HEAT_START_DELTA
    stop_delta: float = DEFAULT_SHARED_HEAT_STOP_DELTA
    local_trim_delta: float = DEFAULT_SHARED_HEAT_LOCAL_TRIM_DELTA
    local_grace_seconds: float = DEFAULT_SHARED_HEAT_LOCAL_GRACE_MINUTES * 60
    min_run_seconds: float = DEFAULT_SHARED_HEAT_MIN_RUN_MINUTES * 60
    min_off_seconds: float = DEFAULT_SHARED_HEAT_MIN_OFF_MINUTES * 60
    require_occupancy: bool = False
    occupancy_entities: tuple[str, ...] = ()
    media_player_entities: tuple[str, ...] = ()
    occupancy_hold_seconds: float = DEFAULT_SHARED_HEAT_OCCUPANCY_HOLD_MINUTES * 60
    target_temperature: float | None = None
    thermostat_enabled: bool = True
    temperature_sensors: tuple[str, ...] = ()
    temperature_offsets: dict[str, float] | None = None
    enabled: bool = True

    @classmethod
    def from_dict(cls, raw: dict) -> SharedHeatSourceConfig:
        """Build a runtime config from persisted settings."""
        return cls(
            id=str(raw["id"]),
            name=str(raw.get("name", "")),
            entity_id=str(raw.get("entity_id", "")),
            rooms=tuple(str(area_id) for area_id in raw.get("rooms", [])),
            min_requesting_rooms=max(
                1,
                int(raw.get("min_requesting_rooms", DEFAULT_SHARED_HEAT_MIN_REQUESTING_ROOMS)),
            ),
            aggregate_power_threshold=max(
                0.0,
                float(raw.get("aggregate_power_threshold", DEFAULT_SHARED_HEAT_AGGREGATE_POWER_THRESHOLD)),
            ),
            start_delta=max(0.0, float(raw.get("start_delta", DEFAULT_SHARED_HEAT_START_DELTA))),
            stop_delta=max(0.0, float(raw.get("stop_delta", DEFAULT_SHARED_HEAT_STOP_DELTA))),
            local_trim_delta=max(
                0.0,
                float(raw.get("local_trim_delta", DEFAULT_SHARED_HEAT_LOCAL_TRIM_DELTA)),
            ),
            local_grace_seconds=max(
                0.0,
                float(raw.get("local_grace_minutes", DEFAULT_SHARED_HEAT_LOCAL_GRACE_MINUTES)) * 60,
            ),
            min_run_seconds=max(
                0.0,
                float(raw.get("min_run_minutes", DEFAULT_SHARED_HEAT_MIN_RUN_MINUTES)) * 60,
            ),
            min_off_seconds=max(
                0.0,
                float(raw.get("min_off_minutes", DEFAULT_SHARED_HEAT_MIN_OFF_MINUTES)) * 60,
            ),
            require_occupancy=bool(raw.get("require_occupancy", False)),
            occupancy_entities=tuple(str(entity_id) for entity_id in raw.get("occupancy_entities", [])),
            media_player_entities=tuple(str(entity_id) for entity_id in raw.get("media_player_entities", [])),
            occupancy_hold_seconds=max(
                0.0,
                float(raw.get("occupancy_hold_minutes", DEFAULT_SHARED_HEAT_OCCUPANCY_HOLD_MINUTES)) * 60,
            ),
            target_temperature=(
                float(raw["target_temperature"]) if "target_temperature" in raw else None
            ),
            thermostat_enabled=bool(raw.get("thermostat_enabled", True)),
            temperature_sensors=tuple(str(entity_id) for entity_id in raw.get("temperature_sensors", [])),
            temperature_offsets={
                str(entity_id): float(offset)
                for entity_id, offset in raw.get("temperature_offsets", {}).items()
            },
            enabled=bool(raw.get("enabled", True)),
        )


@dataclass
class SharedHeatSourceState:
    """Runtime state retained across coordinator updates."""

    active: bool = False
    on_since: float | None = None
    off_since: float | None = None
    last_occupied: float | None = None


@dataclass(frozen=True)
class SharedHeatSourcePlan:
    """One source decision and its effect on participating rooms."""

    source_id: str
    entity_id: str
    active: bool
    transition: str
    reason: str
    requesting_rooms: tuple[str, ...]
    local_heat_allowed: frozenset[str]
    shared_heat_rooms: frozenset[str]
    aggregate_power: float
    max_delta: float
    occupancy_eligible: bool


class SharedHeatSourceManager:
    """Aggregate room demand and arbitrate whole-house heat sources."""

    def __init__(self) -> None:
        self._configs: dict[str, SharedHeatSourceConfig] = {}
        self._states: dict[str, SharedHeatSourceState] = {}

    def load_sources(self, sources: list[dict]) -> None:
        """Load settings while preserving runtime state for unchanged IDs."""
        configs: dict[str, SharedHeatSourceConfig] = {}
        for raw in sources:
            config = SharedHeatSourceConfig.from_dict(raw)
            configs[config.id] = config
            self._states.setdefault(config.id, SharedHeatSourceState())
        self._states = {source_id: self._states[source_id] for source_id in configs}
        self._configs = configs

    def evaluate(
        self,
        source_id: str,
        demands: list[RoomHeatDemand],
        *,
        now: float | None = None,
        occupied_now: bool = False,
        shared_current_temp: float | None = None,
    ) -> SharedHeatSourcePlan:
        """Return and record the next plan for one source."""
        timestamp = monotonic() if now is None else now
        config = self._configs[source_id]
        state = self._states[source_id]
        if occupied_now:
            state.last_occupied = timestamp
        occupancy_eligible = not config.require_occupancy or (
            state.last_occupied is not None
            and timestamp - state.last_occupied <= config.occupancy_hold_seconds
        )
        demand_by_room = {d.area_id: d for d in demands}
        participating = [demand_by_room[area_id] for area_id in config.rooms if area_id in demand_by_room]
        requesting = [d for d in participating if d.requesting]
        aggregate_power = sum(min(1.0, max(0.0, d.power_fraction)) for d in requesting)
        max_delta = max((d.delta for d in requesting), default=0.0)

        if shared_current_temp is not None and config.target_temperature is not None:
            max_delta = max(0.0, config.target_temperature - shared_current_temp)
            start_requested = (
                config.thermostat_enabled and occupancy_eligible and max_delta >= config.start_delta
            )
            stop_requested = (
                not config.thermostat_enabled
                or not occupancy_eligible
                or shared_current_temp >= config.target_temperature - config.stop_delta
            )
        else:
            enough_rooms = len(requesting) >= config.min_requesting_rooms
            enough_power = aggregate_power >= config.aggregate_power_threshold
            enough_delta = max_delta >= config.start_delta
            start_requested = occupancy_eligible and bool(requesting) and enough_delta and (enough_rooms or enough_power)
            stop_requested = not occupancy_eligible or not requesting or all(
                d.delta <= config.stop_delta for d in requesting
            )

        transition = "none"
        reason = "no aggregate demand"
        if not config.enabled or not config.entity_id or not config.rooms:
            if state.active:
                state.active = False
                state.on_since = None
                state.off_since = timestamp
                transition = "stop"
            reason = "source disabled or incomplete"
        elif state.active:
            run_elapsed = timestamp - state.on_since if state.on_since is not None else config.min_run_seconds
            if stop_requested and run_elapsed >= config.min_run_seconds:
                state.active = False
                state.on_since = None
                state.off_since = timestamp
                transition = "stop"
                if not config.thermostat_enabled:
                    reason = "whole-house thermostat off"
                elif not occupancy_eligible:
                    reason = "occupancy gate clear"
                elif shared_current_temp is not None:
                    reason = "whole-house target satisfied"
                else:
                    reason = "all participating rooms satisfied"
            elif stop_requested:
                reason = "minimum run time"
            else:
                reason = f"serving {len(requesting)} room request(s)"
        elif start_requested:
            off_elapsed = timestamp - state.off_since if state.off_since is not None else config.min_off_seconds
            if off_elapsed >= config.min_off_seconds:
                state.active = True
                state.on_since = timestamp
                state.off_since = None
                transition = "start"
                reason = f"aggregate demand from {len(requesting)} room(s)"
            else:
                reason = "minimum off time"
        elif requesting:
            reason = "demand below shared-source threshold"

        local_allowed: set[str] = set()
        if not state.active or not occupancy_eligible:
            local_allowed.update(d.area_id for d in requesting)
        else:
            active_elapsed = timestamp - state.on_since if state.on_since is not None else 0.0
            if active_elapsed >= config.local_grace_seconds:
                local_allowed.update(d.area_id for d in requesting if d.delta >= config.local_trim_delta)

        return SharedHeatSourcePlan(
            source_id=config.id,
            entity_id=config.entity_id,
            active=state.active,
            transition=transition,
            reason=reason,
            requesting_rooms=tuple(d.area_id for d in requesting),
            local_heat_allowed=frozenset(local_allowed),
            shared_heat_rooms=frozenset(config.rooms) if state.active else frozenset(),
            aggregate_power=round(aggregate_power, 3),
            max_delta=round(max_delta, 3),
            occupancy_eligible=occupancy_eligible,
        )

    def get_configs(self) -> dict[str, SharedHeatSourceConfig]:
        """Return loaded configurations by ID."""
        return dict(self._configs)

    def get_state(self, source_id: str) -> SharedHeatSourceState | None:
        """Return runtime state for diagnostics."""
        return self._states.get(source_id)
