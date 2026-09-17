"""Coordinator tests for the single-zone whole-house plant."""

from unittest.mock import ANY, AsyncMock

import pytest
from homeassistant.const import UnitOfTemperature
from homeassistant.core import State

from .conftest import _create_coordinator


def _settings(**overrides) -> dict:
    plant = {
        "enabled": True,
        "entity_id": "climate.magiqtouch_zone_1",
        "cooling_target": 24.0,
        "temperature_sensors": ["sensor.living_temperature"],
        "temperature_offsets": {"sensor.living_temperature": -1.0},
        "home_presence_entities": ["person.isaac"],
        "occupancy_entities": ["binary_sensor.downstairs_presence"],
    }
    plant.update(overrides)
    return {"whole_house_plant": plant}


@pytest.mark.asyncio
async def test_plant_commands_evaporative_cooling(hass, mock_config_entry):
    coordinator = _create_coordinator(hass, mock_config_entry)
    coordinator.outdoor_temp_effective = 22.0
    coordinator.outdoor_humidity = 40.0
    hass.config.units.temperature_unit = UnitOfTemperature.CELSIUS
    states = {
        "climate.magiqtouch_zone_1": State("climate.magiqtouch_zone_1", "off"),
        "sensor.living_temperature": State("sensor.living_temperature", "28", {"unit_of_measurement": "°C"}),
        "person.isaac": State("person.isaac", "home"),
        "binary_sensor.downstairs_presence": State("binary_sensor.downstairs_presence", "on"),
    }
    hass.states.get.side_effect = states.get
    hass.services.async_call = AsyncMock()

    await coordinator._async_control_whole_house_plant({}, _settings())

    hass.services.async_call.assert_awaited_once_with(
        "climate",
        "set_hvac_mode",
        {"entity_id": "climate.magiqtouch_zone_1", "hvac_mode": "cool"},
        blocking=True,
        context=ANY,
    )
    assert coordinator._whole_house_plant_live["current_temperature"] == 27.0
    assert coordinator._whole_house_plant_live["mode"] == "cool"


@pytest.mark.asyncio
async def test_plant_uses_fan_only_for_fresh_air(hass, mock_config_entry):
    coordinator = _create_coordinator(hass, mock_config_entry)
    coordinator.outdoor_temp_effective = 16.0
    coordinator.outdoor_humidity = 40.0
    hass.config.units.temperature_unit = UnitOfTemperature.CELSIUS
    states = {
        "climate.magiqtouch_zone_1": State("climate.magiqtouch_zone_1", "off"),
        "sensor.living_temperature": State("sensor.living_temperature", "22", {"unit_of_measurement": "°C"}),
        "person.isaac": State("person.isaac", "home"),
        "binary_sensor.downstairs_presence": State("binary_sensor.downstairs_presence", "on"),
        "input_boolean.fresh_air": State("input_boolean.fresh_air", "on"),
    }
    hass.states.get.side_effect = states.get
    hass.services.async_call = AsyncMock()

    await coordinator._async_control_whole_house_plant(
        {}, _settings(ventilation_request_entities=["input_boolean.fresh_air"])
    )

    assert hass.services.async_call.await_args.args[2]["hvac_mode"] == "fan_only"


@pytest.mark.asyncio
async def test_active_gas_heat_interlocks_cooling(hass, mock_config_entry):
    coordinator = _create_coordinator(hass, mock_config_entry)
    coordinator.outdoor_temp_effective = 22.0
    coordinator.outdoor_humidity = 40.0
    coordinator._shared_heat_plans = [{"active": True}]
    hass.config.units.temperature_unit = UnitOfTemperature.CELSIUS
    states = {
        "climate.magiqtouch_zone_1": State("climate.magiqtouch_zone_1", "off"),
        "sensor.living_temperature": State("sensor.living_temperature", "28", {"unit_of_measurement": "°C"}),
        "person.isaac": State("person.isaac", "home"),
        "binary_sensor.downstairs_presence": State("binary_sensor.downstairs_presence", "on"),
    }
    hass.states.get.side_effect = states.get
    hass.services.async_call = AsyncMock()

    await coordinator._async_control_whole_house_plant({}, _settings())

    hass.services.async_call.assert_not_awaited()
    assert coordinator._whole_house_plant_live["mode"] == "off"
    assert coordinator._whole_house_plant_live["reason"] == "heating interlock"
