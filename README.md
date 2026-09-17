# RoomMind - EKLabs Fork

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2026.5%2B-blue.svg)](https://www.home-assistant.io/)
[![License](https://img.shields.io/github/license/IsaacKirkwood/roommind_eklabs)](https://github.com/IsaacKirkwood/roommind_eklabs/blob/main/LICENSE)
[![Tests](https://github.com/IsaacKirkwood/roommind_eklabs/actions/workflows/ci.yml/badge.svg)](https://github.com/IsaacKirkwood/roommind_eklabs/actions/workflows/ci.yml)
![Coverage](https://raw.githubusercontent.com/IsaacKirkwood/roommind_eklabs/python-coverage-comment-action-data/badge.svg)
[![GitHub Release](https://img.shields.io/github/v/release/IsaacKirkwood/roommind_eklabs)](https://github.com/IsaacKirkwood/roommind_eklabs/releases/latest)

**Room-by-room and whole-house climate control for Home Assistant**, with self-learning thermal models, proportional device control, central plant coordination, and a dedicated management panel.

> [!IMPORTANT]
> This is an experimental community fork of [RoomMind](https://github.com/snazzybean/roommind), originally created by [SnazzyBean](https://github.com/snazzybean). It is not the official upstream release. The EKLabs changes are being developed through an AI-assisted "vibe coding" workflow: ideas and implementations are produced collaboratively with coding agents, then reviewed and exercised with automated tests. Treat new releases as enthusiast software and keep a working Home Assistant backup.

![Dashboard](docs/images/page-dashboard.png)

## Features

### EKLabs additions

- **Whole-House Gas Heating** - A central heat source can maintain a configurable house target while local room heaters provide targeted trim heating.
- **Corrected Sensor Averaging** - Combine multiple temperature sensors into the whole-house reading and apply a correction to each sensor independently.
- **Occupancy-Led Plant Control** - Gate whole-house operation using household presence, downstairs presence sensors, and active media players.
- **Whole-House Comfort Schedule** - Switch the central heating target between Comfort and Eco using a Home Assistant schedule helper.
- **Single-Zone Evaporative Cooling** - Initial MagIQtouch plant controller for whole-house cooling and fresh-air operation, with weather, wet-bulb, humidity, runtime, feedback, presence, and gas-heating interlocks.
- **Independent Room Learning** - Shared gas heat is exposed separately to each room's thermal model so central heating does not masquerade as local heater output.

### Original RoomMind capabilities

- **Self-Learning MPC** - Per-room thermal model (Extended Kalman Filter) that learns your home's heating/cooling behavior over time. Automatic fallback to on/off control while learning.
- **Proportional Valve Control** - TRVs receive calculated setpoints instead of simple on/off, producing smoother temperature curves with less overshoot.
- **Solar Gain Awareness** - Estimates solar irradiance from sun position and weather data. The model learns each room's solar response and reduces unnecessary heating.
- **Multi-Scheduler** - Multiple `schedule.*` entities per room with selector switching via `input_boolean` or `input_number`.
- **Manual Override** - Boost, eco, or custom temperature with configurable duration and instant UI feedback.
- **Presence Detection** - Link `person.*`, `device_tracker.*`, `binary_sensor.*`, or `input_boolean.*` entities globally or per room. Eco temperature is used when all assigned persons are away.
- **Ignore Presence per Room** - Rooms can opt out of presence detection to always follow their schedule.
- **Vacation Mode** - Global setback temperature with end date for all rooms.
- **Window/Door Pause** - Pauses climate control when windows or doors are open, with configurable open/close delays.
- **Mold Risk Detection & Prevention** - Surface humidity estimation using the DIN 4108-2 method. Configurable notifications and automatic temperature raise to prevent mold growth.
- **Automatic Blind/Cover Shading** - Smart cover deployment based on predicted solar overheating. Includes night close, manual override detection, and cover schedules.
- **Valve Protection** - Periodic cycling of idle TRV valves to prevent seizing and calcification.
- **Heat Source Orchestration** - Rooms with both TRVs and ACs automatically route heating demand to the most efficient device based on temperature gap and outdoor conditions.
- **Compressor Group Protection** - Define groups of climate devices sharing an outdoor compressor. Enforces minimum run and off times to prevent short-cycling.
- **Fan-only & Setback Idle Modes** - AC and heat pump devices can switch to fan-only or setback mode instead of turning off, keeping air circulation or low-load operation active.
- **Per-Device Setpoint Mode** - Choose proportional (boost setpoint) or direct (exact target) control per device for optimal results with different hardware.
- **Separate Heat/Cool Targets** - Independent comfort and eco temperatures for heating and cooling in auto mode, creating a natural dead-band.
- **Per-Room Climate Toggle** - Disable climate control for individual rooms while keeping other rooms active.
- **Outdoor Areas** - Mark rooms as outdoor (e.g. balcony) to disable climate control while keeping monitoring.
- **Analytics Dashboard** - Temperature charts with heating power, solar irradiance, and model predictions over 24h to 90 days.
- **Mobile Ready** - Responsive layout with HA-native toolbar for the companion app.
- **Multilingual** - English and German, auto-detected from your HA language setting.

## Installation

[![Open your Home Assistant instance and add the EKLabs fork to HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=IsaacKirkwood&repository=roommind_eklabs&category=integration)

### HACS (Recommended)

1. Open HACS in Home Assistant.
2. Add `https://github.com/IsaacKirkwood/roommind_eklabs` as a custom integration repository, or use the button above.
3. Install **RoomMind - EKLabs Fork**.
4. Restart Home Assistant.
5. Go to **Settings > Devices & Services > Add Integration > RoomMind - EKLabs Fork**.

The fork uses the `roommind_eklabs` integration domain and can be installed alongside upstream RoomMind while you evaluate it. Do not point both integrations at the same climate devices for active control.

### Manual

1. Copy `custom_components/roommind_eklabs/` to your `config/custom_components/` directory
2. Restart Home Assistant
3. Go to **Settings > Devices & Services > Add Integration > RoomMind - EKLabs Fork**

## Quick Start

After installation, RoomMind appears as a panel in the HA sidebar.

1. **Open RoomMind** from the sidebar - you'll see all your HA areas as room cards
2. **Click a room card** to open the detail view
3. **Add devices** - assign at least one thermostat or AC (`climate.*` entity)
4. **Add a temperature sensor** (optional but recommended) - enables Full Control with proportional valve control
5. **Add a schedule** - create a `schedule.*` helper in HA and assign it
6. **Set temperatures** - configure comfort (schedule on) and eco (schedule off) temperatures

RoomMind starts controlling immediately. If MPC is enabled (default), the thermal model begins learning in the background.

## Analytics

![Analytics](docs/images/page-analytics.png)

Select a room and time range (24h / 7d / 30d / 90d / custom) to view temperature history, heating/cooling power, solar irradiance, and model predictions. Export as CSV or diagnostics report.

## How It Works

### Target Temperature Priority

```
Manual Override > Vacation > Presence Away > Schedule Block > Comfort / Eco  (+Mold Delta)
```

### Full Control vs. Managed Mode

An external temperature sensor is really where RoomMind starts to shine. It is the single most impactful addition for any room, unlocking the full potential of the thermal model, MPC optimization, and proportional device control.

| | Full Control | Managed Mode |
|---|---|---|
| **When** | External temperature sensor assigned | No external sensor |
| **How** | RoomMind decides heating/cooling/idle | Device self-regulates |
| **Setpoints** | Proportional boost (e.g. 28°C to force heating at 80% power) | Exact target sent to device |
| **Thermal model** | EKF learns room behavior, MPC optimizes | No learning, no optimization |

In **Full Control**, RoomMind dynamically calculates device setpoints based on MPC power output. Instead of sending 22°C to a TRV or AC, it might send 28°C to force the device to heat at full capacity. This solves common issues where devices with inaccurate internal sensors or built-in deadbands refuse to turn on. Each room shows its current mode ("Full Control" or "Managed") in the detail view.

### MPC Climate Control

The Extended Kalman Filter observes temperature changes and learns each room's heat loss rate, heating/cooling power, and solar responsiveness. Once calibrated (prediction accuracy < 0.5 C), the MPC optimizer plans ahead and calculates proportional power for smoother control.

Until calibrated (~60 idle + ~20 active samples), RoomMind falls back to simple on/off control with hysteresis.

For a more detailed explanation of the `Priority` slider, device types, setpoint modes, idle behavior, and smart source selection, see the [Control and Device Guide](docs/control-and-devices.md).

## Entities Created

| Entity | Description |
|--------|-------------|
| `sensor.roommind_{area_id}_target_temp` | Current target temperature |
| `sensor.roommind_{area_id}_mode` | Current mode: `idle`, `heating`, or `cooling` |
| `climate.roommind_{area_id}_override` | Manual override climate entity (controllable from dashboards, automations, voice) |
| `switch.roommind_vacation` | Global vacation mode toggle |
| `switch.roommind_{area_id}_cover_auto` | Per-room automatic cover control toggle |
| `binary_sensor.roommind_{area_id}_cover_paused` | On when manual cover override is detected |

These can be used in HA automations, dashboards, or other integrations.

## Troubleshooting

**MPC shows "learning" for a long time** - The model needs ~60 idle and ~20 heating/cooling observations. This can take a few days for rooms that heat rarely. Check progress in the Analytics tab.

**Room not heating/cooling when expected** - Check outdoor gating thresholds in Settings > Control. Default: no cooling below 16 C, no heating above 22 C.

**Thermal model seems wrong after room changes** - If you've changed insulation, radiators, or moved sensors, reset the model in Settings > Reset Thermal Data.

**Frontend not updating after update** - Hard-refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows/Linux).

## Requirements

- **Home Assistant** 2026.5+
- At least one HA area with a `climate.*` entity
- Optional: temperature sensor, humidity sensor, window sensors, weather entity, schedule helpers, person entities

No cloud services required - everything runs locally.

## Credits and Project Lineage

RoomMind was designed and built by [SnazzyBean](https://github.com/snazzybean). The original project's architecture, thermal modelling, MPC control, frontend, documentation, and the majority of this codebase come from [snazzybean/roommind](https://github.com/snazzybean/roommind). That work made this fork possible.

The EKLabs fork is maintained by [IsaacKirkwood](https://github.com/IsaacKirkwood) for whole-house HVAC experiments and a specific Home Assistant installation. Upstream remains the best destination for the original supported project. Consider [supporting the original author on Ko-fi](https://ko-fi.com/Y8Y31VP2VK).

### Development disclosure

EKLabs updates are vibe coded with AI coding agents under human direction. This includes design discussion, implementation, tests, documentation, and release preparation. Changes are reviewed with automated tests and targeted runtime checks, but AI assistance does not guarantee correctness. Climate control can affect comfort, energy use, and equipment operation, so review settings carefully, retain native equipment safeties, and avoid treating RoomMind as a safety system.

Contributions are welcome. Please identify whether a report concerns upstream RoomMind behavior or an EKLabs-only feature, and disclose materially AI-generated contributions so they can receive the appropriate review.

## Feedback & Contributing

- **EKLabs bug reports** - [Open an issue](https://github.com/IsaacKirkwood/roommind_eklabs/issues)
- **Feature requests and ideas** - [Start a discussion](https://github.com/IsaacKirkwood/roommind_eklabs/discussions)
- **Questions and usage help** - [Ask in Discussions](https://github.com/IsaacKirkwood/roommind_eklabs/discussions)
- **Releases** - [View EKLabs releases](https://github.com/IsaacKirkwood/roommind_eklabs/releases)
- **Upstream project** - [Visit the original RoomMind repository](https://github.com/snazzybean/roommind)
