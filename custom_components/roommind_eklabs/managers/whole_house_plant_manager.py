"""Safety-first planning for whole-house heating, cooling, and ventilation plants."""

from __future__ import annotations

from dataclasses import dataclass
from math import atan, log, sqrt
from time import monotonic

MODE_OFF = "off"
MODE_HEAT = "heat"
MODE_COOL = "cool"
MODE_VENTILATE = "fan_only"


def dew_point_celsius(temperature: float, humidity: float) -> float:
    """Return dew point using the Magnus approximation."""
    bounded_rh = min(100.0, max(1.0, humidity))
    alpha = log(bounded_rh / 100.0) + (17.62 * temperature) / (243.12 + temperature)
    return 243.12 * alpha / (17.62 - alpha)


def wet_bulb_celsius(temperature: float, humidity: float) -> float:
    """Estimate outdoor wet-bulb temperature using the Stull approximation."""
    bounded_rh = min(100.0, max(1.0, humidity))
    return (
        temperature * atan(0.151977 * sqrt(bounded_rh + 8.313659))
        + atan(temperature + bounded_rh)
        - atan(bounded_rh - 1.676331)
        + 0.00391838 * bounded_rh**1.5 * atan(0.023101 * bounded_rh)
        - 4.686035
    )


@dataclass(frozen=True)
class WholeHousePlantConfig:
    """Runtime safety and comfort configuration for one central plant."""

    entity_id: str
    cooling_type: str = "evaporative"
    cooling_target: float = 24.0
    cooling_start_delta: float = 0.5
    cooling_stop_delta: float = 0.2
    minimum_outdoor_cooling_temp: float = 18.0
    evaporative_max_outdoor_humidity: float = 80.0
    evaporative_min_indoor_outdoor_delta: float = 1.0
    refrigerated_dew_point_margin: float = 2.0
    max_continuous_runtime_minutes: int = 240
    feedback_timeout_seconds: int = 120
    stale_after_seconds: int = 180
    require_home_presence: bool = True
    require_occupancy: bool = True


@dataclass
class WholeHousePlantState:
    """State retained between evaluations."""

    commanded_mode: str = MODE_OFF
    mode_since: float | None = None
    mismatch_since: float | None = None


@dataclass(frozen=True)
class WholeHousePlantPlan:
    """One deterministic plant decision."""

    mode: str
    transition: bool
    reason: str
    fault: str | None
    cooling_allowed: bool
    ventilation_allowed: bool


class WholeHousePlantManager:
    """Resolve plant mode with interlocks, environmental limits, and feedback."""

    def __init__(self, config: WholeHousePlantConfig) -> None:
        self.config = config
        self.state = WholeHousePlantState()

    def evaluate(
        self,
        *,
        indoor_temperature: float | None,
        indoor_humidity: float | None,
        outdoor_temperature: float | None,
        outdoor_humidity: float | None,
        home_occupied: bool,
        area_occupied: bool,
        heating_active: bool,
        ventilation_requested: bool,
        reported_mode: str | None,
        feedback_available: bool,
        feedback_age_seconds: float,
        now: float | None = None,
    ) -> WholeHousePlantPlan:
        """Return the next safe operating mode."""
        timestamp = monotonic() if now is None else now
        fault = self._feedback_fault(timestamp, reported_mode, feedback_available, feedback_age_seconds)
        eligible = (not self.config.require_home_presence or home_occupied) and (
            not self.config.require_occupancy or area_occupied
        )
        cooling_allowed, cooling_reason = self._cooling_allowed(
            indoor_temperature,
            indoor_humidity,
            outdoor_temperature,
            outdoor_humidity,
        )
        ventilation_allowed = eligible and feedback_available and not fault

        desired = MODE_OFF
        reason = "idle"
        if fault:
            reason = fault
        elif heating_active:
            reason = "heating interlock"
        elif not eligible:
            reason = "occupancy gate clear"
        elif self._runtime_exceeded(timestamp):
            fault = "maximum runtime exceeded"
            reason = fault
        elif cooling_allowed and indoor_temperature is not None:
            if self.state.commanded_mode == MODE_COOL:
                cooling_demand = indoor_temperature > self.config.cooling_target + self.config.cooling_stop_delta
            else:
                cooling_demand = indoor_temperature >= self.config.cooling_target + self.config.cooling_start_delta
            if cooling_demand:
                desired = MODE_COOL
                reason = "whole-house cooling demand"
            elif ventilation_requested and ventilation_allowed:
                desired = MODE_VENTILATE
                reason = "fresh-air request"
            else:
                reason = "cooling target satisfied"
        elif ventilation_requested and ventilation_allowed:
            desired = MODE_VENTILATE
            reason = f"fresh-air request; cooling blocked: {cooling_reason}"
        else:
            reason = cooling_reason

        transition = desired != self.state.commanded_mode
        if transition:
            self.state.commanded_mode = desired
            self.state.mode_since = timestamp if desired != MODE_OFF else None
            self.state.mismatch_since = None

        return WholeHousePlantPlan(
            mode=desired,
            transition=transition,
            reason=reason,
            fault=fault,
            cooling_allowed=cooling_allowed,
            ventilation_allowed=ventilation_allowed,
        )

    def _cooling_allowed(
        self,
        indoor_temp: float | None,
        indoor_humidity: float | None,
        outdoor_temp: float | None,
        outdoor_humidity: float | None,
    ) -> tuple[bool, str]:
        if indoor_temp is None or outdoor_temp is None:
            return False, "waiting for temperature data"
        if outdoor_temp < self.config.minimum_outdoor_cooling_temp:
            return False, "outdoor cooling lockout"
        if self.config.cooling_type == "evaporative":
            if outdoor_humidity is None:
                return False, "waiting for outdoor humidity"
            if outdoor_humidity > self.config.evaporative_max_outdoor_humidity:
                return False, "outdoor humidity too high for evaporative cooling"
            wet_bulb = wet_bulb_celsius(outdoor_temp, outdoor_humidity)
            if indoor_temp - wet_bulb < self.config.evaporative_min_indoor_outdoor_delta:
                return False, "insufficient evaporative cooling advantage"
        elif self.config.cooling_type == "refrigerated":
            if indoor_humidity is None:
                return False, "waiting for indoor humidity"
            dew_point = dew_point_celsius(indoor_temp, indoor_humidity)
            if self.config.cooling_target < dew_point + self.config.refrigerated_dew_point_margin:
                return False, "dew-point protection"
        return True, "cooling available"

    def _runtime_exceeded(self, now: float) -> bool:
        return bool(
            self.state.commanded_mode != MODE_OFF
            and self.state.mode_since is not None
            and now - self.state.mode_since >= self.config.max_continuous_runtime_minutes * 60
        )

    def _feedback_fault(
        self,
        now: float,
        reported_mode: str | None,
        available: bool,
        age_seconds: float,
    ) -> str | None:
        if not available:
            return "plant unavailable"
        if age_seconds > self.config.stale_after_seconds:
            return "plant feedback stale"
        if self.state.commanded_mode == MODE_OFF:
            self.state.mismatch_since = None
            return None
        if reported_mode == self.state.commanded_mode:
            self.state.mismatch_since = None
            return None
        if self.state.mismatch_since is None:
            self.state.mismatch_since = now
            return None
        if now - self.state.mismatch_since >= self.config.feedback_timeout_seconds:
            return "plant failed to follow command"
        return None
