"""Coordinator tests for whole-house heating sources."""

from unittest.mock import ANY, AsyncMock, call

import pytest
from homeassistant.const import UnitOfTemperature
from homeassistant.core import State

from .conftest import _create_coordinator


def _source(entity_id: str = "switch.gas_heating") -> dict:
    return {
        "id": "gas",
        "name": "Whole house gas heating",
        "entity_id": entity_id,
        "rooms": ["isaac", "jacob"],
        "min_requesting_rooms": 2,
        "aggregate_power_threshold": 1.2,
        "start_delta": 0.5,
        "stop_delta": 0.2,
        "local_grace_minutes": 15,
        "local_trim_delta": 1.0,
        "min_run_minutes": 15,
        "min_off_minutes": 10,
        "comfort_temperature": 20.0,
    }


def _room_state(area_id: str) -> dict:
    return {
        "area_id": area_id,
        "current_temp": 18.0,
        "heat_target": 21.0,
        "requested_mode": "heating",
        "requested_power_fraction": 0.8,
        "force_off": False,
        "window_open": False,
    }


@pytest.mark.asyncio
async def test_shared_heat_starts_switch_from_aggregate_demand(hass, mock_config_entry):
    coordinator = _create_coordinator(hass, mock_config_entry)
    coordinator._shared_heat_manager.load_sources([_source()])
    hass.services.async_call = AsyncMock()
    states = {"isaac": _room_state("isaac"), "jacob": _room_state("jacob")}

    await coordinator._async_control_shared_heat_sources(states)

    hass.services.async_call.assert_awaited_once_with(
        "switch", "turn_on", {"entity_id": "switch.gas_heating"}, blocking=True, context=ANY
    )
    assert coordinator._shared_heat_rooms == {"isaac", "jacob"}
    assert coordinator._local_heat_allowed == set()
    assert states["isaac"]["shared_heat_active"] is True


@pytest.mark.asyncio
async def test_shared_heat_climate_uses_hvac_mode(hass, mock_config_entry):
    coordinator = _create_coordinator(hass, mock_config_entry)
    coordinator._shared_heat_manager.load_sources([_source("climate.gas_heating")])
    hass.services.async_call = AsyncMock()

    await coordinator._async_control_shared_heat_sources(
        {"isaac": _room_state("isaac"), "jacob": _room_state("jacob")}
    )

    assert hass.services.async_call.await_args == call(
        "climate",
        "set_hvac_mode",
        {"entity_id": "climate.gas_heating", "hvac_mode": "heat"},
        blocking=True,
        context=ANY,
    )


@pytest.mark.asyncio
async def test_shared_heat_averages_calibrated_temperature_sensors(hass, mock_config_entry):
    coordinator = _create_coordinator(hass, mock_config_entry)
    hass.config.units.temperature_unit = UnitOfTemperature.CELSIUS
    source = _source()
    source.update(
        {
            "target_temperature": 18.0,
            "comfort_temperature": 18.0,
            "temperature_sensors": ["sensor.office", "sensor.bedroom"],
            "temperature_offsets": {"sensor.office": -5.0},
            "min_run_minutes": 0,
        }
    )
    coordinator._shared_heat_manager.load_sources([source])
    states = {
        "sensor.office": State("sensor.office", "22", {"unit_of_measurement": "°C"}),
        "sensor.bedroom": State("sensor.bedroom", "17", {"unit_of_measurement": "°C"}),
    }
    hass.states.get.side_effect = states.get
    hass.services.async_call = AsyncMock()

    await coordinator._async_control_shared_heat_sources(
        {"isaac": _room_state("isaac"), "jacob": _room_state("jacob")}
    )

    plan = coordinator._shared_heat_plans[0]
    assert plan["current_temperature"] == 17.0
    assert plan["target_temperature"] == 18.0
    assert plan["active"] is True


@pytest.mark.asyncio
async def test_shared_heat_schedule_selects_comfort_when_on(hass, mock_config_entry):
    coordinator = _create_coordinator(hass, mock_config_entry)
    source = _source()
    source.update(
        {
            "schedule_entity": "schedule.whole_house_comfort",
            "comfort_temperature": 20.0,
            "eco_temperature": 16.0,
        }
    )
    coordinator._shared_heat_manager.load_sources([source])
    hass.states.get.side_effect = {
        "schedule.whole_house_comfort": State("schedule.whole_house_comfort", "on"),
    }.get
    hass.services.async_call = AsyncMock()

    await coordinator._async_control_shared_heat_sources(
        {"isaac": _room_state("isaac"), "jacob": _room_state("jacob")}
    )

    plan = coordinator._shared_heat_plans[0]
    assert plan["preset_mode"] == "comfort"
    assert plan["schedule_active"] is True
    assert plan["target_temperature"] == 20.0
