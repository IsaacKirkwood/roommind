import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant, WholeHousePlant } from "../../types";
import { inputStyles } from "../../styles/input-styles";

@customElement("rme-settings-whole-house-plant")
export class RmeSettingsWholeHousePlant extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public plant!: WholeHousePlant;

  static styles = [
    inputStyles,
    css`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .wide {
        grid-column: 1 / -1;
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 12px;
        margin: 4px 0 12px;
      }
      .row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 120px auto;
        gap: 8px;
        align-items: center;
        min-height: 42px;
      }
      ha-entity-picker,
      ha-textfield {
        width: 100%;
      }
      @media (max-width: 600px) {
        .grid {
          grid-template-columns: 1fr;
        }
        .wide {
          grid-column: auto;
        }
      }
    `,
  ];

  render() {
    const p = this.plant;
    return html`<div class="grid">
      <ha-formfield label="Enable whole-house evaporative cooling">
        <ha-checkbox
          .checked=${p.enabled}
          @change=${(e: Event) => this._set("enabled", (e.target as HTMLInputElement).checked)}
        ></ha-checkbox>
      </ha-formfield>
      <div>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${p.entity_id}
          .includeDomains=${["climate"]}
          label="MagIQtouch Zone 1"
          @value-changed=${(e: CustomEvent) => this._set("entity_id", e.detail?.value ?? "")}
        ></ha-entity-picker>
        <div class="hint">
          One whole-house zone. Cool runs evaporative cooling; fan only supplies fresh air.
        </div>
      </div>
      ${this._number("Cooling target", "cooling_target", "°C", 16, 35, 0.5)}
      ${this._number("Start above target", "cooling_start_delta", "°C", 0.1, 5, 0.1)}
      ${this._number("Stop above target", "cooling_stop_delta", "°C", 0, 5, 0.1)}
      ${this._number("Minimum outdoor temperature", "minimum_outdoor_cooling_temp", "°C", 0, 40, 0.5)}
      ${this._number("Maximum outdoor humidity", "evaporative_max_outdoor_humidity", "%", 10, 100, 1)}
      ${this._number("Minimum indoor/outdoor advantage", "evaporative_min_indoor_outdoor_delta", "°C", 0, 15, 0.5)}
      ${this._number("Maximum continuous run", "max_continuous_runtime_minutes", "min", 15, 720, 15)}
      <ha-formfield label="Require someone home"
        ><ha-checkbox
          .checked=${p.require_home_presence}
          @change=${(e: Event) => this._set("require_home_presence", (e.target as HTMLInputElement).checked)}
        ></ha-checkbox
      ></ha-formfield>
      <ha-formfield label="Require downstairs occupancy"
        ><ha-checkbox
          .checked=${p.require_occupancy}
          @change=${(e: Event) => this._set("require_occupancy", (e.target as HTMLInputElement).checked)}
        ></ha-checkbox
      ></ha-formfield>
      <div>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${p.indoor_humidity_sensor}
          .includeDomains=${["sensor"]}
          label="Indoor humidity sensor"
          @value-changed=${(e: CustomEvent) => this._set("indoor_humidity_sensor", e.detail?.value ?? "")}
        ></ha-entity-picker>
      </div>
      ${this._picker("Add temperature sensor", "temperature_sensors", ["sensor"])}
      <div class="wide">${p.temperature_sensors.map((id) => this._temperatureRow(id))}</div>
      ${this._picker("Add household member", "home_presence_entities", ["person"])}
      ${this._picker("Add downstairs presence sensor", "occupancy_entities", ["binary_sensor"])}
      ${this._picker("Add downstairs Apple TV", "media_player_entities", ["media_player"])}
      ${this._picker("Add fresh-air request", "ventilation_request_entities", ["binary_sensor", "input_boolean"])}
      <div class="wide hint">
        Cooling is blocked while gas heat is active, when nobody is home, when downstairs is clear,
        or when outdoor conditions make evaporative cooling ineffective. Fresh-air requests use
        fan-only mode.
      </div>
    </div>`;
  }

  private _number(
    label: string,
    key: keyof WholeHousePlant,
    suffix: string,
    min: number,
    max: number,
    step: number,
  ) {
    return html`<ha-textfield
      type="number"
      label=${label}
      suffix=${suffix}
      min=${String(min)}
      max=${String(max)}
      step=${String(step)}
      .value=${String(this.plant[key])}
      @change=${(e: Event) => this._set(key, Number((e.target as HTMLInputElement).value))}
    ></ha-textfield>`;
  }
  private _picker(
    label: string,
    key:
      | "temperature_sensors"
      | "home_presence_entities"
      | "occupancy_entities"
      | "media_player_entities"
      | "ventilation_request_entities",
    domains: string[],
  ) {
    const entities = this.plant[key] ?? [];
    return html`<div>
      <ha-entity-picker
        .hass=${this.hass}
        .value=${""}
        .includeDomains=${domains}
        label=${label}
        @value-changed=${(e: CustomEvent) => {
        const id = e.detail?.value;
        if (id) this._set(key, [...new Set([...entities, id])]);
      }}
      ></ha-entity-picker>
      ${entities.map(
        (id) =>
          html`<div class="row">
            <span>${this.hass.states[id]?.attributes?.friendly_name ?? id}</span><span></span>
            <ha-icon-button
              label="Remove"
              .path=${"M19,13H5V11H19V13Z"}
              @click=${() =>
          this._set(
            key,
            entities.filter((x) => x !== id),
          )}
            ></ha-icon-button>
          </div>`,
      )}
    </div>`;
  }
  private _temperatureRow(id: string) {
    const offset = this.plant.temperature_offsets[id] ?? 0;
    return html`<div class="row">
      <span>${this.hass.states[id]?.attributes?.friendly_name ?? id}</span>
      <ha-textfield
        type="number"
        label="Correction"
        suffix="°C"
        min="-20"
        max="20"
        step="0.1"
        .value=${String(offset)}
        @change=${(e: Event) => this._set("temperature_offsets", { ...this.plant.temperature_offsets, [id]: Number((e.target as HTMLInputElement).value) })}
      ></ha-textfield>
      <ha-icon-button
        label="Remove"
        .path=${"M19,13H5V11H19V13Z"}
        @click=${() => {
        const offsets = { ...this.plant.temperature_offsets };
        delete offsets[id];
        this._fire({
          ...this.plant,
          temperature_sensors: this.plant.temperature_sensors.filter((x) => x !== id),
          temperature_offsets: offsets,
        });
      }}
      ></ha-icon-button>
    </div>`;
  }
  private _set(key: keyof WholeHousePlant, value: unknown) {
    this._fire({ ...this.plant, [key]: value });
  }
  private _fire(value: WholeHousePlant) {
    this.dispatchEvent(
      new CustomEvent("setting-changed", {
        detail: { key: "wholeHousePlant", value },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rme-settings-whole-house-plant": RmeSettingsWholeHousePlant;
  }
}
