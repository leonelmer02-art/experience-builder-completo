/** @jsx jsx */
import { React, jsx, type AllWidgetSettingProps } from "jimu-core";
import {
  MapWidgetSelector,
  SettingRow,
} from "jimu-ui/advanced/setting-components";

export default class Setting extends React.PureComponent<
  AllWidgetSettingProps<any>,
  any
> {
  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  render() {
    return (
      <div style={{ padding: "12px", minHeight: "120px" }}>
        <SettingRow label="Selecciona el widget de mapa" />
        <SettingRow>
          <MapWidgetSelector
            onSelect={this.onMapWidgetSelected}
            useMapWidgetIds={this.props.useMapWidgetIds}
          />
        </SettingRow>
        <div style={{ marginTop: "12px", color: "#6c757d" }}>
          Selecciona un widget de mapa para habilitar el análisis de puntos.
        </div>
      </div>
    );
  }
}
