/**
 * rme-settings – Global RoomMind settings page (orchestrator).
 * Owns all state, loads/saves settings, delegates rendering to sub-components
 * wrapped in ha-expansion-panel accordion sections.
 */
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type {
  HomeAssistant,
  GlobalSettings,
  RoomConfig,
  NotificationTarget,
  CompressorGroup,
  SharedHeatSource,
} from "../types";
import { localize } from "../utils/localize";
import { fireSaveStatus } from "../utils/events";
import { VACATION_SENTINEL } from "../utils/constants";
import "./settings/rme-settings-panel";
import "./settings/rme-settings-general";
import "./settings/rme-settings-sensors";
import "./settings/rme-settings-control";
import "./settings/rme-settings-presence";
import "./settings/rme-settings-vacation";
import "./settings/rme-settings-valve";
import "./settings/rme-settings-compressor";
import "./settings/rme-settings-shared-heat";
import "./settings/rme-settings-coil-dry";
import "./settings/rme-settings-mold";
import "./settings/rme-settings-notifications";
import "./settings/rme-settings-learning";
import "./settings/rme-settings-reset";

@customElement("rme-settings")
export class RsSettings extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public rooms: Record<string, RoomConfig> = {};

  @state() private _groupByFloor = false;
  @state() private _climateControlActive = true;
  @state() private _learningDisabledRooms: string[] = [];
  @state() private _outdoorTempSensor = "";
  @state() private _outdoorHumiditySensor = "";
  @state() private _outdoorCoolingMin = 16;
  @state() private _outdoorHeatingMax = 22;
  @state() private _controlMode: "mpc" | "bangbang" = "mpc";
  @state() private _comfortWeight = 70;
  @state() private _weatherEntity = "";
  @state() private _outdoorUnavailableNotify = true;
  @state() private _predictionEnabled = true;
  @state() private _vacationActive = false;
  @state() private _vacationTemp = 15;
  @state() private _vacationUntil = "";
  @state() private _presenceEnabled = false;
  @state() private _presencePersons: string[] = [];
  @state() private _presenceAwayAction: "eco" | "off" = "eco";
  @state() private _presenceClearsOverride = false;
  @state() private _scheduleOffAction: "eco" | "off" = "eco";
  @state() private _valveProtectionEnabled = false;
  @state() private _valveProtectionInterval = 7;
  @state() private _moldDetectionEnabled = false;
  @state() private _moldHumidityThreshold = 70;
  @state() private _moldSustainedMinutes = 30;
  @state() private _moldNotificationCooldown = 60;
  @state() private _moldNotificationsEnabled = true;
  @state() private _moldNotificationTargets: NotificationTarget[] = [];
  @state() private _moldPreventionEnabled = false;
  @state() private _moldPreventionIntensity: "light" | "medium" | "strong" = "medium";
  @state() private _moldPreventionNotify = false;
  @state() private _compressorGroups: CompressorGroup[] = [];
  @state() private _sharedHeatSources: SharedHeatSource[] = [];
  @state() private _coilDryEnabled = false;
  @state() private _coilDryMinutes = 20;
  @state() private _coilDryMode: "fan_only" | "dry" = "fan_only";
  @state() private _coilDryFanMode = "low";
  @state() private _coilDryMinCoolingMinutes = 10;
  @state() private _coilDryDrainMinutes = 0;
  @state() private _boostAppliedAt: Record<string, number> = {};
  @state() private _loaded = false;

  private _saveDebounce?: ReturnType<typeof setTimeout>;

  connectedCallback() {
    super.connectedCallback();
    this._loadSettings();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._saveDebounce) clearTimeout(this._saveDebounce);
  }

  private async _loadSettings() {
    try {
      const result = await this.hass.callWS<{ settings: GlobalSettings }>({
        type: "roommind_eklabs/settings/get",
      });
      const s = result.settings;
      this._groupByFloor = s.group_by_floor ?? false;
      this._climateControlActive = s.climate_control_active ?? true;
      this._learningDisabledRooms = s.learning_disabled_rooms ?? [];
      this._outdoorTempSensor = s.outdoor_temp_sensor ?? "";
      this._outdoorHumiditySensor = s.outdoor_humidity_sensor ?? "";
      this._outdoorCoolingMin = s.outdoor_cooling_min ?? 16;
      this._outdoorHeatingMax = s.outdoor_heating_max ?? 22;
      this._controlMode = s.control_mode ?? "mpc";
      this._comfortWeight = s.comfort_weight ?? 70;
      this._weatherEntity = s.weather_entity ?? "";
      this._outdoorUnavailableNotify = s.outdoor_unavailable_notify ?? true;
      this._predictionEnabled = s.prediction_enabled ?? true;
      const vUntil = s.vacation_until;
      this._vacationActive = !!(vUntil && vUntil > Date.now() / 1000);
      this._vacationTemp = s.vacation_temp ?? 15;
      if (vUntil && vUntil > Date.now() / 1000 && vUntil < VACATION_SENTINEL) {
        this._vacationUntil = this._tsToDatetimeLocal(vUntil);
      } else {
        this._vacationUntil = "";
      }
      this._presenceEnabled = s.presence_enabled ?? false;
      this._presencePersons = s.presence_persons ?? [];
      this._presenceAwayAction = s.presence_away_action ?? "eco";
      this._presenceClearsOverride = s.presence_clears_override ?? false;
      this._scheduleOffAction = s.schedule_off_action ?? "eco";
      this._valveProtectionEnabled = s.valve_protection_enabled ?? false;
      this._valveProtectionInterval = s.valve_protection_interval_days ?? 7;
      this._moldDetectionEnabled = s.mold_detection_enabled ?? false;
      this._moldHumidityThreshold = s.mold_humidity_threshold ?? 70;
      this._moldSustainedMinutes = s.mold_sustained_minutes ?? 30;
      this._moldNotificationCooldown = s.mold_notification_cooldown ?? 60;
      this._moldNotificationsEnabled = s.mold_notifications_enabled ?? true;
      this._moldNotificationTargets = s.mold_notification_targets ?? [];
      this._moldPreventionEnabled = s.mold_prevention_enabled ?? false;
      this._moldPreventionIntensity = s.mold_prevention_intensity ?? "medium";
      this._moldPreventionNotify = s.mold_prevention_notify_enabled ?? false;
      this._compressorGroups = s.compressor_groups ?? [];
      this._sharedHeatSources = s.shared_heat_sources ?? [];
      this._coilDryEnabled = s.coil_dry_enabled ?? false;
      this._coilDryMinutes = s.coil_dry_minutes ?? 20;
      this._coilDryMode = s.coil_dry_mode ?? "fan_only";
      this._coilDryFanMode = s.coil_dry_fan_mode ?? "low";
      this._coilDryMinCoolingMinutes = s.coil_dry_min_cooling_minutes ?? 10;
      this._coilDryDrainMinutes = s.coil_dry_drain_minutes ?? 0;
      this._boostAppliedAt = s.boost_applied_at ?? {};
    } catch (err) {
      // eslint-disable-next-line no-console
      console.debug("[RoomMind] loadSettings:", err);
    } finally {
      this._loaded = true;
    }
  }

  protected render() {
    if (!this._loaded) {
      return html`<div class="loading">${localize("panel.loading", this.hass.language)}</div>`;
    }

    const l = this.hass.language;

    return html`
      <rme-settings-panel
        icon="mdi:power"
        .heading=${localize("settings.general_title", l)}
        .intro=${localize("settings.intro.general", l)}
      >
        <rme-settings-general
          .hass=${this.hass}
          .groupByFloor=${this._groupByFloor}
          .climateControlActive=${this._climateControlActive}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-general>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:thermometer"
        .heading=${localize("settings.sensors_title", l)}
        .intro=${localize("settings.intro.sensors", l)}
      >
        <rme-settings-sensors
          .hass=${this.hass}
          .outdoorTempSensor=${this._outdoorTempSensor}
          .outdoorHumiditySensor=${this._outdoorHumiditySensor}
          .weatherEntity=${this._weatherEntity}
          .outdoorUnavailableNotify=${this._outdoorUnavailableNotify}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-sensors>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:tune-variant"
        .heading=${localize("settings.control_title", l)}
        .intro=${localize("settings.intro.control", l)}
      >
        <rme-settings-control
          .hass=${this.hass}
          .controlMode=${this._controlMode}
          .comfortWeight=${this._comfortWeight}
          .outdoorCoolingMin=${this._outdoorCoolingMin}
          .outdoorHeatingMax=${this._outdoorHeatingMax}
          .predictionEnabled=${this._predictionEnabled}
          .scheduleOffAction=${this._scheduleOffAction}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-control>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:home-account"
        .heading=${localize("presence.title", l)}
        .intro=${localize("settings.intro.presence", l)}
      >
        <rme-settings-presence
          .hass=${this.hass}
          .presenceEnabled=${this._presenceEnabled}
          .presencePersons=${this._presencePersons}
          .presenceAwayAction=${this._presenceAwayAction}
          .presenceClearsOverride=${this._presenceClearsOverride}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-presence>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:airplane"
        .heading=${localize("vacation.title", l)}
        .intro=${localize("settings.intro.vacation", l)}
      >
        <rme-settings-vacation
          .hass=${this.hass}
          .vacationActive=${this._vacationActive}
          .vacationTemp=${this._vacationTemp}
          .vacationUntil=${this._vacationUntil}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-vacation>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:shield-refresh"
        .heading=${localize("valve_protection.title", l)}
        .intro=${localize("settings.intro.valve", l)}
      >
        <rme-settings-valve
          .hass=${this.hass}
          .valveProtectionEnabled=${this._valveProtectionEnabled}
          .valveProtectionInterval=${this._valveProtectionInterval}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-valve>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:heat-pump-outline"
        .heading=${localize("compressor.title", l)}
        .intro=${localize("settings.intro.compressor", l)}
      >
        <rme-settings-compressor
          .hass=${this.hass}
          .compressorGroups=${this._compressorGroups}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-compressor>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:radiator"
        heading="Whole-house heating"
        intro="Use central gas heat for broad demand, then let room heaters trim rooms that remain cold."
      >
        <rme-settings-shared-heat
          .hass=${this.hass}
          .rooms=${this.rooms}
          .sharedHeatSources=${this._sharedHeatSources}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-shared-heat>
      </rme-settings-panel>

      <rme-settings-panel .heading=${localize("coil_dry.title", l)} icon="mdi:air-filter">
        <rme-settings-coil-dry
          .hass=${this.hass}
          .coilDryEnabled=${this._coilDryEnabled}
          .coilDryMinutes=${this._coilDryMinutes}
          .coilDryMode=${this._coilDryMode}
          .coilDryFanMode=${this._coilDryFanMode}
          .coilDryMinCoolingMinutes=${this._coilDryMinCoolingMinutes}
          .coilDryDrainMinutes=${this._coilDryDrainMinutes}
          .availableFanModes=${this._availableAcFanModes()}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-coil-dry>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:water-alert"
        .heading=${localize("mold.title", l)}
        .intro=${localize("settings.intro.mold", l)}
      >
        <rme-settings-mold
          .hass=${this.hass}
          .moldDetectionEnabled=${this._moldDetectionEnabled}
          .moldHumidityThreshold=${this._moldHumidityThreshold}
          .moldSustainedMinutes=${this._moldSustainedMinutes}
          .moldPreventionEnabled=${this._moldPreventionEnabled}
          .moldPreventionIntensity=${this._moldPreventionIntensity}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-mold>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:bell-outline"
        .heading=${localize("notifications.title", l)}
        .intro=${localize("settings.intro.notifications", l)}
        .badge=${localize("badge.beta", l)}
        .badgeHint=${localize("badge.beta_hint", l)}
      >
        <rme-settings-notifications
          .hass=${this.hass}
          .notificationsEnabled=${this._moldNotificationsEnabled}
          .notificationTargets=${this._moldNotificationTargets}
          .notificationCooldown=${this._moldNotificationCooldown}
          .moldPreventionEnabled=${this._moldPreventionEnabled}
          .moldPreventionNotify=${this._moldPreventionNotify}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-notifications>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:brain"
        .heading=${localize("settings.learning_title", l)}
        .intro=${localize("settings.intro.learning", l)}
      >
        <rme-settings-learning
          .hass=${this.hass}
          .rooms=${this.rooms}
          .learningDisabledRooms=${this._learningDisabledRooms}
          .boostAppliedAt=${this._boostAppliedAt}
          .roomsLive=${Object.fromEntries(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- HA room data includes untyped live state
            Object.entries(this.rooms).map(([id, r]) => [id, (r as any).live ?? {}]),
          )}
          @setting-changed=${this._onSettingChanged}
          @boost-applied=${this._onBoostApplied}
        ></rme-settings-learning>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:restart"
        .heading=${localize("settings.reset_title", l)}
        .intro=${localize("settings.intro.reset", l)}
      >
        <rme-settings-reset .hass=${this.hass} .rooms=${this.rooms}></rme-settings-reset>
      </rme-settings-panel>
    `;
  }

  private _onBoostApplied(e: CustomEvent<{ area_id: string; n_observations: number }>) {
    const { area_id, n_observations } = e.detail;
    this._boostAppliedAt = { ...this._boostAppliedAt, [area_id]: n_observations };
  }

  private _onSettingChanged(e: CustomEvent<{ key: string; value: unknown }>) {
    const { key, value } = e.detail;
    (this as Record<string, unknown>)[`_${key}`] = value;
    this._autoSave();
  }

  /**
   * Union of fan_modes across every configured AC entity.
   *
   * The global setting has no single device to read fan_modes from, so show
   * the speeds the user's actual hardware reports instead of a guessed list.
   */
  private _availableAcFanModes(): string[] {
    const modes = new Set<string>();
    for (const room of Object.values(this.rooms ?? {})) {
      for (const dev of room.devices ?? []) {
        if (dev.type !== "ac") continue;
        const st = this.hass?.states?.[dev.entity_id];
        for (const fm of (st?.attributes?.fan_modes ?? []) as string[]) modes.add(fm);
      }
    }
    return [...modes].sort();
  }

  private _tsToDatetimeLocal(ts: number): string {
    const d = new Date(ts * 1000);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  private _autoSave() {
    if (this._saveDebounce) clearTimeout(this._saveDebounce);
    this._saveDebounce = setTimeout(() => this._doSave(), 500);
  }

  private async _doSave() {
    fireSaveStatus(this, "saving");

    try {
      await this.hass.callWS({
        type: "roommind_eklabs/settings/save",
        group_by_floor: this._groupByFloor,
        climate_control_active: this._climateControlActive,
        learning_disabled_rooms: this._learningDisabledRooms,
        outdoor_temp_sensor: this._outdoorTempSensor,
        outdoor_humidity_sensor: this._outdoorHumiditySensor,
        outdoor_cooling_min: this._outdoorCoolingMin,
        outdoor_heating_max: this._outdoorHeatingMax,
        control_mode: this._controlMode,
        comfort_weight: this._comfortWeight,
        weather_entity: this._weatherEntity,
        outdoor_unavailable_notify: this._outdoorUnavailableNotify,
        prediction_enabled: this._predictionEnabled,
        vacation_temp: this._vacationTemp,
        vacation_until: this._vacationActive
          ? this._vacationUntil
            ? new Date(this._vacationUntil).getTime() / 1000
            : VACATION_SENTINEL
          : null,
        presence_enabled: this._presenceEnabled,
        presence_persons: this._presencePersons.filter((p) => p),
        presence_away_action: this._presenceAwayAction,
        presence_clears_override: this._presenceClearsOverride,
        schedule_off_action: this._scheduleOffAction,
        valve_protection_enabled: this._valveProtectionEnabled,
        valve_protection_interval_days: this._valveProtectionInterval,
        compressor_groups: this._compressorGroups.filter((g) => g.members.length > 0),
        shared_heat_sources: this._sharedHeatSources.filter(
          (source) => source.entity_id && source.rooms.length > 0,
        ),
        coil_dry_enabled: this._coilDryEnabled,
        coil_dry_minutes: this._coilDryMinutes,
        coil_dry_mode: this._coilDryMode,
        coil_dry_fan_mode: this._coilDryFanMode,
        coil_dry_min_cooling_minutes: this._coilDryMinCoolingMinutes,
        coil_dry_drain_minutes: this._coilDryDrainMinutes,
        mold_detection_enabled: this._moldDetectionEnabled,
        mold_humidity_threshold: this._moldHumidityThreshold,
        mold_sustained_minutes: this._moldSustainedMinutes,
        mold_notification_cooldown: this._moldNotificationCooldown,
        mold_notifications_enabled: this._moldNotificationsEnabled,
        mold_notification_targets: this._moldNotificationTargets.filter((t) => t.entity_id),
        mold_prevention_enabled: this._moldPreventionEnabled,
        mold_prevention_intensity: this._moldPreventionIntensity,
        mold_prevention_notify_enabled: this._moldPreventionNotify,
        mold_prevention_notify_targets: this._moldPreventionNotify
          ? this._moldNotificationTargets.filter((t) => t.entity_id)
          : [],
      });
      fireSaveStatus(this, "saved");
    } catch {
      fireSaveStatus(this, "error");
    }
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0 16px;
    }

    .loading {
      padding: 80px 16px;
      text-align: center;
      color: var(--secondary-text-color);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "rme-settings": RsSettings;
  }
}
