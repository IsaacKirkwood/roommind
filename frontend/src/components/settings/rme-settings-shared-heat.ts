import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant, RoomConfig, SharedHeatSource } from "../../types";
import { inputStyles } from "../../styles/input-styles";

@customElement("rme-settings-shared-heat")
export class RsSettingsSharedHeat extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public rooms: Record<string, RoomConfig> = {};
  @property({ type: Array }) public sharedHeatSources: SharedHeatSource[] = [];

  static styles = [
    inputStyles,
    css`
      .source {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-top: 12px;
      }
      .rooms {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 8px;
        margin-top: 8px;
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 12px;
        margin-top: 4px;
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 12px;
      }
      .entity-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: center;
        min-height: 40px;
        gap: 8px;
      }
      .temperature-row {
        grid-template-columns: minmax(0, 1fr) 120px auto;
      }
      ha-textfield,
      ha-entity-picker {
        width: 100%;
      }
      @media (max-width: 600px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ];

  render() {
    return html`
      ${this.sharedHeatSources.map((source, index) => this._renderSource(source, index))}
      <ha-button @click=${this._add}
        ><ha-icon icon="mdi:plus" slot="icon"></ha-icon>Add whole-house heater</ha-button
      >
    `;
  }

  private _renderSource(source: SharedHeatSource, index: number) {
    return html`<div class="source">
      <ha-textfield
        label="Name"
        .value=${source.name}
        @change=${(e: Event) => this._set(index, "name", (e.target as HTMLInputElement).value)}
      ></ha-textfield>
      <div class="grid">
        <div>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${source.entity_id}
            .includeDomains=${["climate", "switch"]}
            label="Heating device"
            @value-changed=${(e: CustomEvent) => this._set(index, "entity_id", e.detail?.value ?? "")}
          ></ha-entity-picker>
          <div class="hint">Choose the Shelly switch or its climate wrapper.</div>
        </div>
        <ha-formfield label="Whole-house thermostat enabled">
          <ha-checkbox
            .checked=${source.thermostat_enabled ?? true}
            @change=${(e: Event) =>
              this._set(index, "thermostat_enabled", (e.target as HTMLInputElement).checked)}
          ></ha-checkbox>
        </ha-formfield>
        <ha-textfield
          type="number"
          min="5"
          max="30"
          step="0.5"
          label="Whole-house target"
          suffix="°C"
          .value=${String(source.target_temperature ?? 18)}
          @change=${(e: Event) => this._number(index, "target_temperature", e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="1"
          step="1"
          label="Rooms needed to start"
          .value=${String(source.min_requesting_rooms)}
          @change=${(e: Event) => this._number(index, "min_requesting_rooms", e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          step="0.1"
          label="Combined demand to start"
          .value=${String(source.aggregate_power_threshold)}
          @change=${(e: Event) => this._number(index, "aggregate_power_threshold", e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          step="1"
          label="Gas-first grace"
          suffix="min"
          .value=${String(source.local_grace_minutes)}
          @change=${(e: Event) => this._number(index, "local_grace_minutes", e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          step="0.1"
          label="Local trim starts below target"
          suffix="°C"
          .value=${String(source.local_trim_delta)}
          @change=${(e: Event) => this._number(index, "local_trim_delta", e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          step="1"
          label="Minimum gas run"
          suffix="min"
          .value=${String(source.min_run_minutes)}
          @change=${(e: Event) => this._number(index, "min_run_minutes", e)}
        ></ha-textfield>
      </div>
      <div class="hint">Rooms heated by this device</div>
      <div class="rooms">
        ${Object.entries(this.rooms).map(
          ([id, room]) =>
            html` <ha-formfield .label=${(room as RoomConfig & { name?: string }).name || id}>
              <ha-checkbox
                .checked=${source.rooms.includes(id)}
                @change=${(e: Event) => this._room(index, id, (e.target as HTMLInputElement).checked)}
              ></ha-checkbox>
            </ha-formfield>`,
        )}
      </div>
      <div class="grid">
        <div>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${""}
            .includeDomains=${["sensor"]}
            label="Add temperature sensor"
            @value-changed=${(e: CustomEvent) => this._addTemperatureSensor(index, e.detail?.value)}
          ></ha-entity-picker>
          ${this._renderTemperatureSensors(source, index)}
        </div>
        <div>
          <div class="hint">Temperature inputs are averaged. Add a correction for sensors that read high or low.</div>
        </div>
      </div>
      <div class="grid">
        <ha-formfield label="Require someone to be home">
          <ha-checkbox
            .checked=${source.require_home_presence ?? false}
            @change=${(e: Event) =>
              this._set(index, "require_home_presence", (e.target as HTMLInputElement).checked)}
          ></ha-checkbox>
        </ha-formfield>
        <div>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${""}
            .includeDomains=${["person"]}
            label="Add household member"
            @value-changed=${(e: CustomEvent) =>
              this._addEntity(index, "home_presence_entities", e.detail?.value)}
          ></ha-entity-picker>
          ${this._renderEntities(index, "home_presence_entities", source.home_presence_entities ?? [])}
        </div>
        <ha-formfield label="Only use gas when downstairs is occupied">
          <ha-checkbox
            .checked=${source.require_occupancy ?? false}
            @change=${(e: Event) =>
              this._set(index, "require_occupancy", (e.target as HTMLInputElement).checked)}
          ></ha-checkbox>
        </ha-formfield>
        <ha-textfield
          type="number"
          min="0"
          max="240"
          step="1"
          label="Occupancy hold"
          suffix="min"
          .value=${String(source.occupancy_hold_minutes ?? 20)}
          @change=${(e: Event) => this._number(index, "occupancy_hold_minutes", e)}
        ></ha-textfield>
        <div>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${""}
            .includeDomains=${["binary_sensor"]}
            label="Add presence sensor"
            @value-changed=${(e: CustomEvent) =>
              this._addEntity(index, "occupancy_entities", e.detail?.value)}
          ></ha-entity-picker>
          ${this._renderEntities(index, "occupancy_entities", source.occupancy_entities ?? [])}
        </div>
        <div>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${""}
            .includeDomains=${["media_player"]}
            label="Add Apple TV"
            @value-changed=${(e: CustomEvent) =>
              this._addEntity(index, "media_player_entities", e.detail?.value)}
          ></ha-entity-picker>
          ${this._renderEntities(index, "media_player_entities", source.media_player_entities ?? [])}
        </div>
      </div>
      <div class="hint">
        Presence or an active media player enables whole-house gas heating. Bedroom heating remains available when downstairs is clear.
      </div>
      <div class="actions">
        <ha-button @click=${() => this._fire(this.sharedHeatSources.filter((_, i) => i !== index))}
          >Remove</ha-button
        >
      </div>
    </div>`;
  }

  private _set(
    index: number,
    field: keyof SharedHeatSource,
    value: SharedHeatSource[keyof SharedHeatSource],
  ) {
    const updated = [...this.sharedHeatSources];
    updated[index] = { ...updated[index], [field]: value };
    this._fire(updated);
  }
  private _number(index: number, field: keyof SharedHeatSource, event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isFinite(value)) this._set(index, field, value);
  }
  private _room(index: number, roomId: string, checked: boolean) {
    const rooms = checked
      ? [...new Set([...this.sharedHeatSources[index].rooms, roomId])]
      : this.sharedHeatSources[index].rooms.filter((id) => id !== roomId);
    this._set(index, "rooms", rooms);
  }
  private _addEntity(
    index: number,
    field: "occupancy_entities" | "media_player_entities" | "home_presence_entities",
    entityId?: string,
  ) {
    if (!entityId) return;
    const entities = [...new Set([...(this.sharedHeatSources[index][field] ?? []), entityId])];
    this._set(index, field, entities);
  }
  private _renderEntities(
    index: number,
    field: "occupancy_entities" | "media_player_entities" | "home_presence_entities",
    entities: string[],
  ) {
    return entities.map(
      (entityId) => html`<div class="entity-row">
        ${this.hass.states[entityId]?.attributes?.friendly_name ?? entityId}
        <ha-icon-button
          label="Remove"
          .path=${"M19,13H5V11H19V13Z"}
          @click=${() => this._set(index, field, entities.filter((id) => id !== entityId))}
        ></ha-icon-button>
      </div>`,
    );
  }
  private _addTemperatureSensor(index: number, entityId?: string) {
    if (!entityId) return;
    const source = this.sharedHeatSources[index];
    const sensors = [...new Set([...(source.temperature_sensors ?? []), entityId])];
    const updated = [...this.sharedHeatSources];
    updated[index] = {
      ...source,
      temperature_sensors: sensors,
      temperature_offsets: { ...(source.temperature_offsets ?? {}), [entityId]: source.temperature_offsets?.[entityId] ?? 0 },
    };
    this._fire(updated);
  }
  private _setTemperatureOffset(index: number, entityId: string, event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (!Number.isFinite(value)) return;
    const source = this.sharedHeatSources[index];
    this._set(index, "temperature_offsets", {
      ...(source.temperature_offsets ?? {}),
      [entityId]: value,
    });
  }
  private _removeTemperatureSensor(index: number, entityId: string) {
    const source = this.sharedHeatSources[index];
    const offsets = { ...(source.temperature_offsets ?? {}) };
    delete offsets[entityId];
    const updated = [...this.sharedHeatSources];
    updated[index] = {
      ...source,
      temperature_sensors: (source.temperature_sensors ?? []).filter((id) => id !== entityId),
      temperature_offsets: offsets,
    };
    this._fire(updated);
  }
  private _renderTemperatureSensors(source: SharedHeatSource, index: number) {
    return (source.temperature_sensors ?? []).map(
      (entityId) => html`<div class="entity-row temperature-row">
        <span>${this.hass.states[entityId]?.attributes?.friendly_name ?? entityId}</span>
        <ha-textfield
          type="number"
          min="-20"
          max="20"
          step="0.1"
          label="Correction"
          suffix="°C"
          .value=${String(source.temperature_offsets?.[entityId] ?? 0)}
          @change=${(e: Event) => this._setTemperatureOffset(index, entityId, e)}
        ></ha-textfield>
        <ha-icon-button
          label="Remove"
          .path=${"M19,13H5V11H19V13Z"}
          @click=${() => this._removeTemperatureSensor(index, entityId)}
        ></ha-icon-button>
      </div>`,
    );
  }
  private _add() {
    this._fire([
      ...this.sharedHeatSources,
      {
        id: self.crypto?.randomUUID?.() ?? String(Date.now()),
        name: "Whole house gas heating",
        entity_id: "",
        rooms: [],
        enabled: true,
        min_requesting_rooms: 2,
        aggregate_power_threshold: 1.2,
        start_delta: 0.5,
        stop_delta: 0.2,
        local_trim_delta: 1.0,
        local_grace_minutes: 15,
        min_run_minutes: 15,
        min_off_minutes: 10,
        require_occupancy: false,
        occupancy_entities: [],
        media_player_entities: [],
        occupancy_hold_minutes: 20,
        target_temperature: 18,
        thermostat_enabled: true,
        temperature_sensors: [],
        temperature_offsets: {},
        require_home_presence: false,
        home_presence_entities: [],
      },
    ]);
  }
  private _fire(value: SharedHeatSource[]) {
    this.dispatchEvent(
      new CustomEvent("setting-changed", {
        detail: { key: "sharedHeatSources", value },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rme-settings-shared-heat": RsSettingsSharedHeat;
  }
}
