/** @jsx jsx */
import {
  React,
  jsx,
  type AllWidgetProps,
  DataSourceComponent,
  type MapDataSource,
  DataSourceTypes,
} from "jimu-core";
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  type JimuMapView,
} from "jimu-arcgis";
import { WidgetPlaceholder } from "jimu-ui";
import type { IMConfig } from "../config";
import defaultMessages from "./translations/default";

export enum LoadStatus {
  Pending = "Pending",
  Fulfilled = "Fulfilled",
  Rejected = "Rejected",
}

export interface WidgetProps extends AllWidgetProps<IMConfig> {}

export interface WidgetState {
  loadStatus: LoadStatus;
  widgetKey: number;
  identifiedFeatures: any[];
  isIdentifying: boolean;
  hasAttemptedIdentify: boolean;
}

export default class Widget extends React.PureComponent<
  WidgetProps,
  WidgetState
> {
  private dataSource: MapDataSource;
  private mapView: __esri.MapView;
  private sceneView: __esri.SceneView;
  private MapView: typeof __esri.MapView;
  private SceneView: typeof __esri.SceneView;
  private activeView: __esri.MapView | __esri.SceneView;
  private clickHandle: __esri.Handle;

  static versionManager = null;

  constructor(props) {
    super(props);
    this.state = {
      loadStatus: LoadStatus.Pending,
      widgetKey: Math.random(),
      identifiedFeatures: [],
      isIdentifying: false,
      hasAttemptedIdentify: false,
    };
  }

  componentWillUnmount() {
    this.destroyView();
    this.removeClickHandler();
  }

  async createViewByDataSource(
    dataSource: MapDataSource,
  ): Promise<__esri.MapView | __esri.SceneView> {
    return await this.loadViewModules(dataSource).then(async () => {
      if (dataSource.type === DataSourceTypes.WebMap) {
        return await new Promise<__esri.MapView>((resolve, reject) => {
          this.createWebMapView(this.MapView, resolve, reject);
        });
      } else if (dataSource.type === DataSourceTypes.WebScene) {
        return new Promise<__esri.SceneView>((resolve, reject) => {
          this.createSceneView(this.SceneView, resolve, reject);
        });
      } else {
        return Promise.reject(new Error(null));
      }
    });
  }

  createWebMapView = (MapView, resolve, reject) => {
    this.destroyView();
    const mapViewOption: __esri.MapViewProperties = {
      map: this.dataSource.map,
      container: document.createElement("div"),
    };
    this.mapView = new MapView(mapViewOption);
    this.mapView.when(
      () => {
        resolve(this.mapView);
      },
      (error) => reject(error),
    );
  };

  createSceneView = (SceneView, resolve, reject) => {
    this.destroyView();
    const mapViewOption: __esri.SceneViewProperties = {
      map: this.dataSource.map,
      container: document.createElement("div"),
    };
    this.sceneView = new this.SceneView(mapViewOption);
    this.sceneView.when(
      () => {
        resolve(this.sceneView);
      },
      (error) => reject(error),
    );
  };

  destroyView() {
    this.mapView && !this.mapView.destroyed && this.mapView.destroy();
    this.sceneView && !this.sceneView.destroyed && this.sceneView.destroy();
  }

  loadViewModules = async (
    dataSource: MapDataSource,
  ): Promise<typeof __esri.MapView | typeof __esri.SceneView> => {
    if (dataSource.type === DataSourceTypes.WebMap) {
      if (this.MapView) {
        return this.MapView;
      }
      [this.MapView] = await loadArcGISJSAPIModules(["esri/views/MapView"]);
      return this.MapView;
    } else if (dataSource.type === DataSourceTypes.WebScene) {
      if (this.SceneView) {
        return this.SceneView;
      }
      [this.SceneView] = await loadArcGISJSAPIModules(["esri/views/SceneView"]);
      return this.SceneView;
    } else {
      return Promise.reject(new Error(null));
    }
  };

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (jimuMapView && jimuMapView.view) {
      console.log("Vista de mapa cambiada, configurando identificación");
      this.activeView = jimuMapView.view;
      this.setupClickHandler();
      this.setState({
        loadStatus: LoadStatus.Fulfilled,
      });
    } else {
      console.log("Vista de mapa removida");
      this.removeClickHandler();
    }
  };

  onDataSourceCreated = (dataSource): void => {
    this.dataSource = dataSource;
    this.createViewByDataSource(dataSource)
      .then((view) => {
        this.activeView = view;
        this.setupClickHandler();
        this.setState({
          loadStatus: LoadStatus.Fulfilled,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  onCreateDataSourceFailed = (error): void => {
    console.error("Error creando fuente de datos:", error);
  };

  setupClickHandler = async () => {
    if (!this.activeView) {
      console.log("No hay vista activa para configurar click handler");
      return;
    }

    console.log("Configurando click handler para identificación");

    // Cargar módulos necesarios
    const [Query] = await loadArcGISJSAPIModules(["esri/tasks/support/Query"]);

    this.clickHandle = this.activeView.on("click", async (event) => {
      console.log("Clic detectado en el mapa:", event.mapPoint);
      this.setState({
        isIdentifying: true,
        identifiedFeatures: [],
        hasAttemptedIdentify: true,
      });

      try {
        const results = [];

        // Crear query para identificar features cerca del punto clicado
        const query = new Query();
        query.geometry = event.mapPoint;
        query.distance = 10; // 10 metros de tolerancia
        query.units = "meters";
        query.spatialRelationship = "intersects";
        query.returnGeometry = false;
        query.outFields = ["*"];

        // Obtener todas las capas de features visibles
        const featureLayers = this.activeView.map.allLayers
          .filter((layer) => layer.visible)
          .filter((layer) => layer.type === "feature")
          .toArray();

        console.log("Capas de features encontradas:", featureLayers.length);

        // Consultar cada capa de features
        for (const layer of featureLayers) {
          try {
            console.log("Consultando capa:", layer.title);

            const result = await (layer as any).queryFeatures(query);
            const features = result.features || [];

            console.log(
              `Encontradas ${features.length} features en ${layer.title}`,
            );

            if (features.length > 0) {
              results.push({
                layerName: layer.title,
                features: features.map((feature: any) => ({
                  layerName: layer.title,
                  displayFieldName: (layer as any).displayField,
                  feature: feature,
                  attributes: feature.attributes,
                })),
              });
            }
          } catch (error) {
            console.warn(`Error consultando capa ${layer.title}:`, error);
          }
        }

        console.log("Resultados finales:", results.length, "capas con datos");

        // Si no se encontraron resultados, mostrar mensaje
        if (results.length === 0) {
          console.log("No se encontraron features en el punto clicado");
        }

        this.setState({
          identifiedFeatures: results,
          isIdentifying: false,
        });
      } catch (error) {
        console.error("Error en identificación:", error);
        this.setState({ isIdentifying: false });
      }
    });

    console.log("Click handler configurado correctamente");
  };

  removeClickHandler = () => {
    if (this.clickHandle) {
      this.clickHandle.remove();
      this.clickHandle = null;
    }
  };

  formatValue = (value: any): string => {
    if (value === null || value === undefined) {
      return "N/A";
    }
    if (typeof value === "object") {
      return "[Objeto]";
    }
    return String(value);
  };

  clearResults = () => {
    this.setState({
      identifiedFeatures: [],
      hasAttemptedIdentify: false,
    });
  };

  renderFeatureInfo = (feature, index) => {
    const attributes = feature.attributes || {};

    return (
      <div
        key={index}
        style={{
          background: "#f8f9fa",
          border: "1px solid #e9ecef",
          borderRadius: "6px",
          padding: "12px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            color: "#495057",
            marginBottom: "8px",
            fontSize: "14px",
          }}
        >
          {feature.layerName || "Capa sin nombre"}
        </div>

        {Object.entries(attributes).map(([key, value]) => (
          <div
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "4px 0",
              borderBottom: "1px solid #f1f3f4",
              fontSize: "13px",
            }}
          >
            <span style={{ fontWeight: "500", color: "#6c757d" }}>{key}:</span>
            <span style={{ color: "#495057", textAlign: "right" }}>
              {this.formatValue(value)}
            </span>
          </div>
        ))}
      </div>
    );
  };

  render() {
    const useMapWidget =
      this.props.useMapWidgetIds && this.props.useMapWidgetIds[0];
    const useDataSource =
      this.props.useDataSources && this.props.useDataSources[0];

    let content = null;
    let dataSourceContent = null;

    if (useMapWidget) {
      dataSourceContent = (
        <JimuMapViewComponent
          useMapWidgetId={this.props.useMapWidgetIds?.[0]}
          onActiveViewChange={this.onActiveViewChange}
        />
      );
    } else if (useDataSource) {
      dataSourceContent = (
        <DataSourceComponent
          useDataSource={useDataSource}
          onDataSourceCreated={this.onDataSourceCreated}
          onCreateDataSourceFailed={this.onCreateDataSourceFailed}
        />
      );
    }

    if (!useMapWidget && !useDataSource) {
      content = (
        <div className="widget-legend">
          <WidgetPlaceholder
            icon={null}
            autoFlip
            message={this.props.intl?.formatMessage({
              id: "_widgetLabel",
              defaultMessage: defaultMessages._widgetLabel,
            })}
            widgetId={this.props.id}
          />
        </div>
      );
    } else {
      let loadingContent = null;
      if (
        this.state.loadStatus === LoadStatus.Pending ||
        this.state.isIdentifying
      ) {
        loadingContent = (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              color: "#6c757d",
            }}
          >
            <div style={{ marginRight: "8px" }}>
              {this.state.isIdentifying
                ? "🔍 Identificando..."
                : "⏳ Cargando..."}
            </div>
          </div>
        );
      }

      content = (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px 16px",
              background: "#f8f9fa",
              borderBottom: "1px solid #e9ecef",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "600",
                color: "#495057",
                fontSize: "16px",
              }}
            >
              <span style={{ fontSize: "18px" }}>🔍</span>
              Identificar Capas
            </div>

            {this.state.identifiedFeatures.length > 0 && (
              <button
                onClick={this.clearResults}
                style={{
                  background: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Instructions */}
          {this.state.identifiedFeatures.length === 0 &&
            !this.state.isIdentifying && (
              <div
                style={{
                  padding: "16px",
                  textAlign: "center",
                  color: "#6c757d",
                  fontSize: "14px",
                }}
              >
                <div style={{ marginBottom: "8px" }}>
                  📍 Haz clic en el mapa para identificar capas
                </div>
                <div style={{ fontSize: "12px", color: "#adb5bd" }}>
                  Se mostrarán los atributos de las features encontradas
                </div>
              </div>
            )}

          {/* No results message - show after first click */}
          {this.state.identifiedFeatures.length === 0 &&
            !this.state.isIdentifying &&
            this.state.hasAttemptedIdentify && (
              <div
                style={{
                  padding: "16px",
                  textAlign: "center",
                  color: "#6c757d",
                  fontSize: "14px",
                  borderTop: "1px solid #e9ecef",
                }}
              >
                <div style={{ marginBottom: "8px" }}>
                  🔍 No se encontraron features en esta ubicación
                </div>
                <div style={{ fontSize: "12px", color: "#adb5bd" }}>
                  Intenta hacer clic en otra área del mapa
                </div>
              </div>
            )}

          {/* Results */}
          {this.state.identifiedFeatures.length > 0 && (
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px",
                scrollbarWidth: "thin",
                scrollbarColor: "#c1c1c1 transparent",
              }}
            >
              {this.state.identifiedFeatures.map((layerResult, layerIndex) => (
                <div key={layerIndex} style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#495057",
                      marginBottom: "8px",
                      padding: "8px 12px",
                      background: "#e9ecef",
                      borderRadius: "4px",
                      fontSize: "14px",
                    }}
                  >
                    🗂️ {layerResult.layerName}
                  </div>

                  {layerResult.features.map((feature, featureIndex) =>
                    this.renderFeatureInfo(
                      feature,
                      `${layerIndex}-${featureIndex}`,
                    ),
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Loading overlay */}
          {loadingContent}

          {/* Hidden data source */}
          <div style={{ display: "none" }}>{dataSourceContent}</div>
        </div>
      );
    }

    return (
      <div
        css={null}
        className="jimu-widget"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {content}
      </div>
    );
  }
}
