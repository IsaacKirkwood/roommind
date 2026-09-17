import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant, SharedHeatSource } from "../types";
import { inputStyles } from "../styles/input-styles";

@customElement("rme-whole-house-card")
export class RmeWholeHouseCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public source!: SharedHeatSource;

  static styles = [
    inputStyles,
    css`
      ha-card {
        padding: 18px;
        border-radius: 8px;
      }
      .top,
      .temperatures,
      .mode {
        display: flex;
        align-items: center;
      }
      .top {
        justify-content: space-between;
        gap: 16px;
      }
      .identity {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }
      .identity ha-icon {
        color: var(--warning-color, #ff9800);
        --mdc-icon-size: 28px;
      }
      h3 {
        margin: 0;
        font-size: 18px;
        letter-spacing: 0;
      }
      .status {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin-top: 3px;
      }
      .current {
        font-size: 28px;
        white-space: nowrap;
      }
      .current small {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .body {
        display: grid;
        grid-template-columns: minmax(220px, 1fr) minmax(280px, 1.4fr);
        gap: 20px;
        margin-top: 18px;
      }
      .mode {
        gap: 8px;
      }
      .mode button {
        border: 1px solid var(--divider-color);
        background: transparent;
        color: var(--primary-text-color);
        min-height: 40px;
        padding: 0 16px;
        cursor: pointer;
        font: inherit;
      }
      .mode button:first-child {
        border-radius: 6px 0 0 6px;
      }
      .mode button:last-child {
        border-radius: 0 6px 6px 0;
        margin-left: -9px;
      }
      .mode button[active] {
        background: var(--primary-color);
        color: var(--text-primary-color, white);
        border-color: var(--primary-color);
      }
      .temperatures {
        gap: 12px;
      }
      ha-textfield {
        width: 100%;
      }
      .off {
        opacity: 0.65;
      }
      @media (max-width: 700px) {
        .body {
          grid-template-columns: 1fr;
        }
        .temperatures {
          align-items: stretch;
        }
      }
    `,
  ];

  render() {
    if (!this.source) return nothing;
    const live = this.source.live;
    const current = live?.current_temperature;
    const enabled = this.source.thermostat_enabled ?? true;
    return html`
      <ha-card class=${enabled ? "" : "off"}>
        <div class="top">
          <div class="identity">
            <ha-icon icon="mdi:home-thermometer"></ha-icon>
            <div>
              <h3>${this.source.name || "Whole House"}</h3>
              <div class="status">${enabled ? live?.reason || "Ready" : "Heating off"}</div>
            </div>
          </div>
          <div class="current">
            ${typeof current === "number" ? current.toFixed(1) : "--"}<small> °C</small>
          </div>
        </div>
        <div class="body">
          <div class="mode">
            <button
              ?active=${enabled && this.source.preset_mode !== "eco"}
              @click=${() => this._mode("comfort")}
            >
              Comfort
            </button>
            <button
              ?active=${enabled && this.source.preset_mode === "eco"}
              @click=${() => this._mode("eco")}
            >
              Eco
            </button>
            <ha-icon-button
              label=${enabled ? "Turn whole-house heating off" : "Turn whole-house heating on"}
              icon=${enabled ? "mdi:power" : "mdi:power-off"}
              @click=${() => this._change({ thermostat_enabled: !enabled })}
            ></ha-icon-button>
          </div>
          <div class="temperatures">
            <ha-textfield
              type="number"
              min="5"
              max="30"
              step="0.5"
              label="Comfort"
              suffix="°C"
              .value=${String(this.source.comfort_temperature ?? this.source.target_temperature ?? 18)}
              @change=${(e: Event) => this._temperature("comfort_temperature", e)}
            ></ha-textfield>
            <ha-textfield
              type="number"
              min="5"
              max="30"
              step="0.5"
              label="Eco"
              suffix="°C"
              .value=${String(this.source.eco_temperature ?? 16)}
              @change=${(e: Event) => this._temperature("eco_temperature", e)}
            ></ha-textfield>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _mode(preset_mode: "comfort" | "eco") {
    this._change({ preset_mode, thermostat_enabled: true });
  }

  private _temperature(field: "comfort_temperature" | "eco_temperature", event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isFinite(value)) this._change({ [field]: value });
  }

  private _change(changes: Partial<SharedHeatSource>) {
    this.dispatchEvent(
      new CustomEvent("whole-house-changed", {
        detail: { source: { ...this.source, ...changes } },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rme-whole-house-card": RmeWholeHouseCard;
  }
}
