/** @jsx jsx */
import {
  React,
  jsx,
  type AllWidgetProps,
  DataSourceComponent,
  ReactResizeDetector,
  type MapDataSource,
  DataSourceTypes,
} from "jimu-core";
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  type JimuMapView,
} from "jimu-arcgis";
import { WidgetPlaceholder, FillType } from "jimu-ui";
import { ELegendMode, type IMConfig, type Style } from "../config";
import { getStyle } from "./lib/style";
import defaultMessages from "./translations/default";
import legendIcon from "../../icon.svg";
import { versionManager } from "../version-manager";
import "./style.css";

export enum LoadStatus {
  Pending = "Pending",
  Fulfilled = "Fulfilled",
  Rejected = "Rejected",
}

export interface WidgetProps extends AllWidgetProps<IMConfig> {}

export interface WidgetState {
  loadStatus: LoadStatus;
  widgetKey: number;
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
  private legend: __esri.Legend;
  private Legend: typeof __esri.Legend;
  private currentWidth: number;
  private activeView: __esri.MapView | __esri.SceneView;

  legendWrapperRef = React.createRef<HTMLDivElement>();
  legendContainerRef = React.createRef<HTMLDivElement>();
  mapContainerRef = React.createRef<HTMLDivElement>();

  static versionManager = versionManager;

  constructor(props) {
    super(props);
    this.state = {
      loadStatus: LoadStatus.Pending,
      widgetKey: Math.random(),
    };
  }

  componentWillUnmount() {
    // 2. Destruimos la vista del mapa/escena
    this.destroyView();

    // 3. Destruimos la leyenda
    this.destroyLegend();
  }

  componentDidUpdate(
    prevProps: Readonly<WidgetProps>,
    prevState: Readonly<WidgetState>,
    snapshot?: any,
  ): void {
    // This option needs to refresh the legend to take effect
    if (this.props.config !== prevProps.config) {
      this.setState({ widgetKey: Math.random() });
    }
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
      container: this.mapContainerRef.current,
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
      container: this.mapContainerRef.current,
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

  destroyLegend = () => {
    this.legend && !this.legend.destroyed && this.legend.destroy();
  };

  createLegend = async (view: __esri.MapView | __esri.SceneView) => {
    this.activeView = view;

    if (!this.Legend) {
      [this.Legend] = await loadArcGISJSAPIModules(["esri/widgets/Legend"]);
    }

    await view.when();
    this.destroyLegend();

    // Limpiamos el contenedor físico para evitar residuos
    if (this.legendContainerRef.current) {
      this.legendContainerRef.current.innerHTML = "";
    }

    const container = document.createElement("div");
    this.legendContainerRef.current?.appendChild(container);

    this.legend = new this.Legend({
      view: view,
      container: container,
    });

    this.configLegend();

    // 🔥 esperar a que renderice la leyenda
    setTimeout(() => {
      this.addCheckboxToLegend();
    }, 500);
  };

  configLegend = () => {
    if (this.legend) {
      const basemapLegendVisible = this.props.config.showBaseMap;

      this.legend.style = this.calculateStyle();
      this.legend.basemapLegendVisible = basemapLegendVisible;

      // 🔥 CLAVE: mantener todas las capas visibles en la leyenda
      this.legend.respectLayerVisibility = false;

      const legendMode = this.props.config.legendMode;

      if (legendMode === ELegendMode.ShowWithinExtent) {
        this.legend.hideLayersNotInCurrentView = true;
      }
    }
  };

  addCheckboxToLegend = () => {
    const container = this.legendContainerRef.current;
    if (!container || !this.activeView) return;

    const layers = container.querySelectorAll(".esri-legend__service");

    layers.forEach((layerNode) => {
      const titleElement = layerNode.querySelector<HTMLElement>(
        ".esri-legend__service-label",
      );

      if (!titleElement) return;

      // evitar duplicados
      if (titleElement.dataset.hasControls === "true") return;
      titleElement.dataset.hasControls = "true";

      const layerTitle = titleElement.innerText.trim();

      // 🔥 CAPA REAL
      const layer = this.activeView.map.allLayers.find(
        (l) => l.title === layerTitle,
      );

      // 🔥 BODY (simbología que se va a colapsar)
      const body = layerNode.querySelector<HTMLElement>(
        ".esri-legend__layer-body, .esri-legend__layer-table",
      );

      // =========================
      // 🔥 CONTENEDOR IZQUIERDO
      // =========================
      const controlsWrapper = document.createElement("div");
      controlsWrapper.style.display = "flex";
      controlsWrapper.style.alignItems = "center";
      controlsWrapper.style.gap = "4px";

      // =========================
      // ✅ CHECKBOX
      // =========================
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = layer ? layer.visible : true;

      // =========================
      // 🔽 FLECHA COLAPSABLE
      // =========================
      const arrow = document.createElement("span");
      arrow.style.cursor = "pointer";
      arrow.style.fontSize = "10px";
      arrow.style.userSelect = "none";

      let isOpen = layer ? layer.visible : true;
      if (body) {
        body.style.display = isOpen ? "" : "none";
      }
      arrow.innerHTML = isOpen ? "▼" : "▶";

      checkbox.onchange = () => {
        if (layer) {
          layer.visible = checkbox.checked;
        }
        isOpen = checkbox.checked;
        if (body) {
          body.style.display = isOpen ? "" : "none";
        }
        arrow.innerHTML = isOpen ? "▼" : "▶";
      };

      arrow.onclick = (e) => {
        e.stopPropagation();

        isOpen = !isOpen;

        if (body) {
          body.style.display = isOpen ? "" : "none";
        }

        arrow.innerHTML = isOpen ? "▼" : "▶";
      };

      // =========================
      // 🔧 ENSAMBLE
      // =========================
      controlsWrapper.appendChild(checkbox);
      controlsWrapper.appendChild(arrow);

      // 🔥 HACER FLEX EL TITLE
      titleElement.style.display = "flex";
      titleElement.style.alignItems = "center";
      titleElement.style.justifyContent = "flex-start";
      titleElement.style.gap = "6px";

      // 🔥 TEXTO ORIGINAL
      const textSpan = document.createElement("span");
      textSpan.innerText = layerTitle;

      // 🔥 LIMPIAR Y RECONSTRUIR
      titleElement.innerHTML = "";
      titleElement.appendChild(controlsWrapper);
      titleElement.appendChild(textSpan);
    });
  };

  calculateStyle = () => {
    let style;
    const currentWidth = this.currentWidth || 100000; // window.innerWidth;
    if (this.legend) {
      if (this.props.config.cardStyle) {
        let layout;
        if (
          !this.props.config.cardLayout ||
          this.props.config.cardLayout === "auto"
        ) {
          if (currentWidth <= 600) {
            layout = "stack";
          } else {
            layout = "side-by-side";
          }
        } else {
          layout = this.props.config.cardLayout;
        }
        style = {
          type: "card" as const,
          layout: layout,
        };
      } else {
        style = "classic";
      }
    } else {
      style = "classic";
    }
    return style;
  };

  getDefaultStyleConfig(): Style {
    return {
      useCustom: false,
      background: {
        color: "",
        fillType: FillType.FILL,
      },
      fontColor: "",
    };
  }

  getStyleConfig() {
    if (this.props.config.style && this.props.config.style.useCustom) {
      return this.props.config.style;
    } else {
      return this.getDefaultStyleConfig();
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (jimuMapView && jimuMapView.view) {
      this.createLegend(jimuMapView.view)
        .then(() => {
          this.setState({
            loadStatus: LoadStatus.Fulfilled,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      this.destroyLegend();
    }
  };

  onDataSourceCreated = (dataSource): void => {
    this.dataSource = dataSource;

    this.createViewByDataSource(dataSource)
      .then((view) => {
        return this.createLegend(view);
      })
      .then(() => {
        this.setState({
          loadStatus: LoadStatus.Fulfilled,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCreateDataSourceFailed = (error): void => {};

  onResize = ({ width, height }) => {
    this.currentWidth = width;
    if (this.legend && this.props.config.cardLayout === "auto") {
      const style = this.calculateStyle();
      this.legend.style = style;
    }
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
      this.destroyLegend();
      content = (
        <div className="widget-legend">
          <WidgetPlaceholder
            icon={legendIcon}
            autoFlip
            message={this.props.intl.formatMessage({
              id: "_widgetLabel",
              defaultMessage: defaultMessages._widgetLabel,
            })}
            widgetId={this.props.id}
          />
        </div>
      );
    } else {
      let loadingContent = null;
      if (this.state.loadStatus === LoadStatus.Pending) {
        loadingContent = <div className="jimu-secondary-loading" />;
      }

      if (window.jimuConfig.isInBuilder) {
        this.configLegend();
      }

      content = (
        <div
          key={this.state.widgetKey}
          ref={this.legendWrapperRef}
          style={{
            background: "transparent",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            padding: "10px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {loadingContent}

          {/* 🔥 CONTENEDOR SIMBOLOGÍA - OCUPA TODO EL ESPACIO */}
          <div
            ref={this.legendContainerRef}
            className="custom-legend-container"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "6px 6px 6px 4px",
              borderRadius: "8px",
              background: "#fafafa",
              border: "1px solid #e6e6e6",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
            }}
          />

          {/* 🔥 MAPA OCULTO - FUNCIONA EN BACKGROUND */}
          <div ref={this.mapContainerRef} style={{ display: "none" }} />

          {/* 🔥 DataSource - oculto pero en el mismo contenedor */}
          <div style={{ display: "none" }}>{dataSourceContent}</div>

          <ReactResizeDetector
            targetRef={this.legendWrapperRef}
            handleHeight
            handleWidth
            onResize={this.onResize}
          />
        </div>
      );
    }

    return (
      <div
        css={getStyle(this.props.theme, this.getStyleConfig())}
        className="jimu-widget"
      >
        {content}
      </div>
    );
  }
}
