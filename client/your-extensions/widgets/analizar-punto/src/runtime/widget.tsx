/** @jsx jsx */
import { React, jsx, type AllWidgetProps } from "jimu-core";
import {
  JimuMapViewComponent,
  loadArcGISJSAPIModules,
  type JimuMapView,
} from "jimu-arcgis";

export default class Widget extends React.PureComponent<
  AllWidgetProps<any>,
  any
> {
  state = {
    jimuMapView: null,
    resultados: [],
    analisisActivo: false,
    drawActivo: false,
    statusMessage: "",
    ciudadMessage: "",
    ciudadColor: "",
    sectorMessage: null as React.ReactElement | null,
    predioMessage: null as React.ReactNode,
    informacionAdicionalMessage: null as React.ReactNode,
    vialidadMessage: null as React.ReactNode,
  };

  active = false;
  clickHandle: any = null;
  drawAction: any = null;
  pointGraphic: any = null;

  componentWillUnmount() {
    this.removeClickHandler();
    this.removeDrawAction();
    this.removePointGraphic();
  }

  removeClickHandler() {
    if (this.clickHandle) {
      this.clickHandle.remove();
      this.clickHandle = null;
    }
  }

  removeDrawAction() {
    if (this.drawAction) {
      this.drawAction.destroy();
      this.drawAction = null;
    }
  }

  removePointGraphic() {
    const mapView = this.state.jimuMapView?.view;
    if (mapView && this.pointGraphic) {
      mapView.graphics.remove(this.pointGraphic);
      this.pointGraphic = null;
    }
  }

  getFeatureLayers(layers: any): any[] {
    const featureLayers = [];

    for (const layer of layers.toArray()) {
      if (layer.type === "feature") {
        featureLayers.push(layer);
      } else if (layer.type === "group" && layer.layers) {
        featureLayers.push(...this.getFeatureLayers(layer.layers));
      }
    }

    return featureLayers;
  }

  async startPointDraw() {
    const mapView = this.state.jimuMapView?.view;
    if (!mapView) {
      this.setState({ statusMessage: "No se ha detectado la vista de mapa." });
      return;
    }

    const [SketchViewModel] = await loadArcGISJSAPIModules([
      "esri/widgets/Sketch/SketchViewModel",
    ]);

    this.removeDrawAction();
    this.removePointGraphic();

    const sketchViewModel = new SketchViewModel({
      view: mapView,
      layer: mapView.graphics,
    });

    sketchViewModel.create("point");

    sketchViewModel.on("create", (event: any) => {
      if (event.state === "complete") {
        this.pointGraphic = event.graphic;
        this.pointGraphic.symbol = {
          type: "simple-marker",
          style: "diamond",
          color: "#ff5722",
          size: "16px",
          outline: {
            color: "#ffffff",
            width: 2,
          },
        };
        this.setState({
          drawActivo: false,
          statusMessage: "Analizando información del punto seleccionado...",
        });
        this.queryPoint(event.graphic.geometry);
        sketchViewModel.destroy();
      }
    });

    this.drawAction = sketchViewModel;
  }

  async queryPoint(point: any) {
    const mapView = this.state.jimuMapView?.view;
    if (!mapView) {
      this.setState({ statusMessage: "No se ha detectado la vista de mapa." });
      return;
    }

    const resultados = [];
    const layers = this.getFeatureLayers(mapView.map.layers);

    if (layers.length === 0) {
      this.setState({
        resultados: [],
        statusMessage: "No hay capas de entidades configuradas en este mapa.",
      });
      return;
    }

    for (const layer of layers) {
      const query = layer.createQuery();
      query.geometry = point;
      query.spatialRelationship = "intersects";
      query.outFields = ["*"];
      query.returnGeometry = false;

      try {
        const res = await layer.queryFeatures(query);
        if (res.features.length > 0) {
          resultados.push({
            capa: layer.title || "Capa sin nombre",
            atributos: res.features[0].attributes,
          });
        }
      } catch (error) {
        console.warn(`Error consultando capa ${layer.title}:`, error);
      }
    }

    const statusMessage =
      resultados.length > 0
        ? `Se encontraron ${resultados.length} capa(s) con información.`
        : "No se encontró información en las capas consultadas.";

    this.setState({
      resultados,
      statusMessage,
      ciudadMessage: "",
      ciudadColor: "",
      sectorMessage: null,
      predioMessage: null,
      informacionAdicionalMessage: null,
      vialidadMessage: null,
    });

    // Verificación específica para la capa de ciudad cercana, área de influencia y sectores
    let ciudadLayer = null;
    let influenciaLayer = null;
    let sectoresLayer = null;
    let subcentrosLayer = null;
    let influenciaSubcentrosLayer = null;
    let vialidadesLayer = null;

    for (const layer of layers) {
      const title = layer.title ? layer.title.toLowerCase() : "";
      if (
        title.includes("ciudad cercana") &&
        !title.includes("influencia") &&
        !title.includes("sector") &&
        !title.includes("sectores")
      ) {
        ciudadLayer = layer;
      } else if (
        title.includes("influencia") &&
        title.includes("ciudad cercana")
      ) {
        influenciaLayer = layer;
      } else if (
        title.includes("sectores") &&
        title.includes("ciudad cercana")
      ) {
        sectoresLayer = layer;
      } else if (
        title.includes("subcentros") &&
        !title.includes("influencia")
      ) {
        subcentrosLayer = layer;
      } else if (title.includes("subcentros 800")) {
        influenciaSubcentrosLayer = layer;
      } else if (title.includes("estructura vial")) {
        vialidadesLayer = layer;
      }
    }

    if (ciudadLayer) {
      const query = ciudadLayer.createQuery();
      query.geometry = point;
      query.spatialRelationship = "intersects";
      query.outFields = ["*"];
      query.returnGeometry = false;

      try {
        const res = await ciudadLayer.queryFeatures(query);
        if (res.features.length > 0) {
          let predioMessage: React.ReactNode = null;
          let predioLayer = null;

          let zonificacionLayer = null;

          for (const layer of layers) {
            if (
              layer.title &&
              layer.title.toLowerCase().includes("zonificación secundaria")
            ) {
              zonificacionLayer = layer;
              break;
            }
          }

          for (const layer of layers) {
            if (
              layer.title &&
              layer.title.toLowerCase().includes("predio urbano ciudad cercana")
            ) {
              predioLayer = layer;
              break;
            }
          }

          if (predioLayer) {
            const queryPredio = predioLayer.createQuery();
            queryPredio.geometry = point;
            queryPredio.spatialRelationship = "intersects";
            queryPredio.outFields = ["*"];
            queryPredio.returnGeometry = false;

            try {
              const resPredio = await predioLayer.queryFeatures(queryPredio);
              if (resPredio.features.length > 0) {
                const predioAttributes = resPredio.features[0].attributes || {};
                const cveCat = predioAttributes.cve_cat || "N/A";
                const cveStd = predioAttributes.cve_std || "N/A";
                const folio = predioAttributes.folio || "N/A";
                const tipoTen = predioAttributes.tipo_ten || "N/A";
                const clasTen = predioAttributes.clas_ten || "N/A";
                const tipoAsen = predioAttributes.tipo_asen || "N/A";
                const nomAh = predioAttributes.nom_ah || "N/A";

                let clasificacionGeneral = "N/A";
                let usoSuelo = "N/A";

                if (zonificacionLayer) {
                  const queryZona = zonificacionLayer.createQuery();

                  queryZona.geometry = point;
                  queryZona.spatialRelationship = "intersects";
                  queryZona.outFields = ["*"];
                  queryZona.returnGeometry = false;

                  try {
                    const resZona =
                      await zonificacionLayer.queryFeatures(queryZona);

                    if (resZona.features.length > 0) {
                      const zonaAttributes =
                        resZona.features[0].attributes || {};

                      const categoriaField = zonificacionLayer.fields.find(
                        (field: any) => field.name === "categria",
                      );

                      const usoSueloField = zonificacionLayer.fields.find(
                        (field: any) => field.name === "uso_suelo",
                      );

                      const categoriaValue = zonaAttributes.categria;
                      const usoSueloValue = zonaAttributes.uso_suelo;

                      /* ===== DOMINIO CATEGORIA ===== */

                      if (
                        categoriaField &&
                        categoriaField.domain &&
                        categoriaField.domain.codedValues
                      ) {
                        const domainMatch =
                          categoriaField.domain.codedValues.find(
                            (cv: any) => cv.code === categoriaValue,
                          );

                        clasificacionGeneral = domainMatch
                          ? domainMatch.name
                          : categoriaValue || "N/A";
                      } else {
                        clasificacionGeneral = categoriaValue || "N/A";
                      }

                      /* ===== DOMINIO USO SUELO ===== */

                      if (
                        usoSueloField &&
                        usoSueloField.domain &&
                        usoSueloField.domain.codedValues
                      ) {
                        const domainMatch =
                          usoSueloField.domain.codedValues.find(
                            (cv: any) => cv.code === usoSueloValue,
                          );

                        usoSuelo = domainMatch
                          ? domainMatch.name
                          : usoSueloValue || "N/A";
                      } else {
                        usoSuelo = usoSueloValue || "N/A";
                      }
                    }
                  } catch (error) {
                    console.warn(
                      `Error consultando capa de Zonificación Secundaria:`,
                      error,
                    );
                  }
                }

                predioMessage = (
                  <div>
                    <div>
                      El Pin Fue Colocado en un Predio Urbano Correspondiente a
                      Ciudad Cercana
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "8px",
                      }}
                    >
                      Información del Predio
                    </div>
                    <div
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        padding: "10px",
                        backgroundColor: "#f1ffee",
                        borderRadius: "6px",
                        border: "1px solid #c9ddff",
                      }}
                    >
                      <div>
                        <strong>Clasificación General del Uso de Suelo:</strong>
                        {clasificacionGeneral}
                      </div>
                      <div>
                        <strong>Uso de Suelo Autorizado:</strong> {usoSuelo}
                      </div>
                      <div>
                        <strong>Clave Catastral Original:</strong> {cveCat}
                      </div>
                      <div>
                        <strong>Clave Catastral Estándar: </strong> {cveStd}
                      </div>
                      <div>
                        <strong>Folio Real Electrónico: </strong>
                        {folio}
                      </div>
                      <div>
                        <strong>Tipo de Tenencia:</strong>
                        {tipoTen}
                      </div>
                      <div>
                        <strong>Clasificación de la Tenencia: </strong>
                        {clasTen}
                      </div>
                      <div>
                        <strong>Tipo de Asentamiento Humano: </strong>
                        {tipoAsen}
                      </div>
                      <div>
                        <strong>Nombre del Asentamiento Humano: </strong>
                        {nomAh}
                      </div>
                    </div>
                  </div>
                );
              } else {
                predioMessage =
                  "El Pin No Fue Colocado sobre un Predio Urbano de Ciudad Cercana";
              }
            } catch (error) {
              console.warn(`Error consultando capa de predio urbano:`, error);
              predioMessage = "Error al consultar la capa de predio urbano.";
            }
          } else {
            predioMessage =
              "No se encontró la capa de predio urbano ciudad cercana.";
          }

          let sectorMessage: React.ReactElement | null = null;
          let informacionAdicionalMessage: React.ReactNode = null;
          let vialidadMessage: React.ReactNode = null;

          if (sectoresLayer) {
            const querySector = sectoresLayer.createQuery();
            querySector.geometry = point;
            querySector.spatialRelationship = "intersects";
            querySector.outFields = ["*"];
            querySector.returnGeometry = false;

            try {
              const resSector = await sectoresLayer.queryFeatures(querySector);
              if (resSector.features.length > 0) {
                const attributes = resSector.features[0].attributes || {};
                const fieldKey = Object.keys(attributes).find(
                  (key) =>
                    key.toLowerCase().includes("sector") &&
                    key.toLowerCase().includes("ciudad"),
                );

                const fallbackKey = Object.keys(attributes).find((key) =>
                  key.toLowerCase().includes("sector"),
                );

                const sector =
                  (fieldKey && attributes[fieldKey]) ||
                  (fallbackKey && attributes[fallbackKey]) ||
                  "";

                const descuentoLicencias = attributes.licencias || "N/A";
                const descuentoTraslacion = attributes.traslacion || "N/A";
                const descuentoPredial = attributes.predial || "N/A";

                if (sector) {
                  sectorMessage = (
                    <div>
                      <div>El Pin se Encuentra en el {sector}</div>
                      <div
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          marginTop: "8px",
                        }}
                      >
                        Incentivos Aplicables
                      </div>
                      <div>
                        Porcentaje Descuento en Licencias de Construcción:{" "}
                        {descuentoLicencias}
                      </div>
                      <div>
                        Porcentaje Descuento en Traslación de Dominio:{" "}
                        {descuentoTraslacion}
                      </div>
                      <div>
                        Porcentaje Descuento en Predial: {descuentoPredial}
                      </div>
                    </div>
                  );
                }
              }
            } catch (error) {
              console.warn(`Error consultando capa de sectores:`, error);
            }
          }

          /* ===================================================== */
          /* =====  SUBCENTROS ============ */
          /* ===================================================== */

          if (subcentrosLayer) {
            const querySub = subcentrosLayer.createQuery();

            querySub.geometry = point;
            querySub.spatialRelationship = "intersects";
            querySub.outFields = ["*"];
            querySub.returnGeometry = false;

            try {
              const resSub = await subcentrosLayer.queryFeatures(querySub);

              if (resSub.features.length > 0) {
                const subAttributes = resSub.features[0].attributes || {};

                const nombreSubcentro = subAttributes.nombre || "N/A";

                informacionAdicionalMessage = (
                  <div>
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: "8px",
                      }}
                    >
                      Subcentros Urbanos
                    </div>

                    <div>
                      Se Encuentra Dentro de un Subcentro Urbano de Acuerdo al
                      PDU2040 Séptima Actualización
                    </div>

                    <div style={{ marginTop: "8px" }}>
                      <strong>Nombre:</strong> {nombreSubcentro}
                    </div>
                  </div>
                );
              } else {
                /* ============================================ */
                /* ===== ÁREA DE INFLUENCIA SUBCENTROS ======= */
                /* ============================================ */

                if (influenciaSubcentrosLayer) {
                  const queryInfSub = influenciaSubcentrosLayer.createQuery();

                  queryInfSub.geometry = point;
                  queryInfSub.spatialRelationship = "intersects";
                  queryInfSub.outFields = ["*"];
                  queryInfSub.returnGeometry = false;

                  try {
                    const resInfSub =
                      await influenciaSubcentrosLayer.queryFeatures(
                        queryInfSub,
                      );

                    if (resInfSub.features.length > 0) {
                      const infAttributes =
                        resInfSub.features[0].attributes || {};

                      const identificador =
                        infAttributes.identificador || "N/A";

                      informacionAdicionalMessage = (
                        <div>
                          <div
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                              marginBottom: "8px",
                            }}
                          >
                            Subcentros Urbanos
                          </div>

                          <div>
                            Se Encuentra Dentro del Área de Influencia de 800m
                            de un Subcentro Urbano de Acuerdo al PDU2040 Séptima
                            Actualización
                          </div>

                          <div style={{ marginTop: "8px" }}>
                            <strong>Nombre:</strong> {identificador}
                          </div>
                        </div>
                      );
                    }
                  } catch (error) {
                    console.warn(
                      `Error consultando área de influencia subcentros:`,
                      error,
                    );
                  }
                }
              }
            } catch (error) {
              console.warn(`Error consultando capa de subcentros:`, error);
            }
          }

          /* ===================================================== */
          /* ===== VIALIDAD MÁS CERCANA ========================== */
          /* ===================================================== */

          if (vialidadesLayer) {
            try {
              const queryVialidad = vialidadesLayer.createQuery();

              queryVialidad.geometry = point;

              queryVialidad.distance = 100;

              queryVialidad.units = "meters";

              queryVialidad.spatialRelationship = "intersects";

              queryVialidad.returnGeometry = true;

              queryVialidad.outFields = ["*"];

              const resVialidad =
                await vialidadesLayer.queryFeatures(queryVialidad);

              if (resVialidad.features.length > 0) {
                let vialidadCercana = null;

                let menorDistancia = Infinity;

                const [geometryEngine] = await loadArcGISJSAPIModules([
                  "esri/geometry/geometryEngine",
                ]);

                for (const feature of resVialidad.features) {
                  const distance = geometryEngine.distance(
                    point,
                    feature.geometry,
                    "meters",
                  );

                  if (distance !== null && distance < menorDistancia) {
                    menorDistancia = distance;
                    vialidadCercana = feature;
                  }
                }

                if (vialidadCercana) {
                  const attrs = vialidadCercana.attributes || {};

                  const nombreVialidad = attrs.nom_vial || "N/A";

                  /* ===================================================== */
                  /* ===== TRADUCCIÓN MANUAL JERARQUÍA VIAL ============== */
                  /* ===================================================== */

                  const jerarquiaValue = Number(attrs.jrq_vial);

                  let JerarquíaVial = "N/A";

                  switch (jerarquiaValue) {
                    case 1:
                      JerarquíaVial = "Regional";
                      break;

                    case 2:
                      JerarquíaVial = "Arterial";
                      break;

                    case 3:
                      JerarquíaVial = "Primaria";
                      break;

                    case 4:
                      JerarquíaVial = "Secundaria";
                      break;

                    case 5:
                      JerarquíaVial = "Regional Propuesta";
                      break;

                    case 6:
                      JerarquíaVial = "Arterial Propuesta";
                      break;

                    case 7:
                      JerarquíaVial = "Primaria Propuesta";
                      break;

                    case 8:
                      JerarquíaVial = "Secundaria Propuesta";
                      break;

                    default:
                      JerarquíaVial = attrs.jrq_vial || "N/A";
                  }

                  const nvoIdScn = attrs.nvo_id_scn || "N/A";
                  const scnActual = attrs.scn_actual || "N/A";
                  const nSntds = attrs.n_sntds || "N/A";
                  const nCrrlsCen = attrs.n_crrls_cen || "N/A";
                  const nCrrlsLat = attrs.n_crrls_lat || "N/A";
                  const anchoCarril = attrs.ancho_carril || "N/A";
                  const rtTroncal = attrs.rt_troncal || "N/A";

                  vialidadMessage = (
                    <div>
                      <div
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          marginBottom: "8px",
                        }}
                      >
                        Estructura Vial Más Cercana
                      </div>

                      <div>
                        <strong>Nombre:</strong> {nombreVialidad}
                      </div>

                      <div style={{ marginTop: "6px" }}>
                        <strong>Distancia aproximada:</strong>{" "}
                        {menorDistancia.toFixed(2)} metros
                      </div>

                      <div>
                        <strong>Jerarquía Vial:</strong> {JerarquíaVial}
                      </div>
                      <div>
                        <strong>Identificador de Sección:</strong> {nvoIdScn}
                      </div>

                      <div>
                        <strong>Ancho de la Sección:</strong> {scnActual}
                      </div>

                      <div>
                        <strong>Número de Sentidos:</strong> {nSntds}
                      </div>

                      <div>
                        <strong>Número de Carriles Centrales:</strong>{" "}
                        {nCrrlsCen}
                      </div>

                      <div>
                        <strong>Número de Carriles Laterales:</strong>{" "}
                        {nCrrlsLat}
                      </div>

                      <div>
                        <strong>Ancho de Carril:</strong> {anchoCarril}
                      </div>

                      <div>
                        <strong>Ruta Troncal:</strong> {rtTroncal}
                      </div>
                    </div>
                  );
                }
              }
            } catch (error) {
              console.warn("Error consultando vialidad cercana:", error);
            }
          }

          this.setState({
            ciudadMessage:
              "El Pin Colocado se Encuentra Dentro del Polígono de Ciudad Cercana",
            ciudadColor: "green",
            sectorMessage,
            predioMessage,
            informacionAdicionalMessage,
            vialidadMessage,
          });
        } else if (influenciaLayer) {
          const queryInf = influenciaLayer.createQuery();
          queryInf.geometry = point;
          queryInf.spatialRelationship = "intersects";
          queryInf.outFields = ["*"];
          queryInf.returnGeometry = false;

          try {
            const resInf = await influenciaLayer.queryFeatures(queryInf);
            if (resInf.features.length > 0) {
              this.setState({
                ciudadMessage:
                  "El Pin Colocado No se Encuentra Dentro del Polígono de Ciudad Cercana, Pero se Encuentra Dentro de los 400 Metros del Área de Influencia",
                ciudadColor: "orange",
                sectorMessage: null,
                predioMessage: "",
              });
            } else {
              this.setState({
                ciudadMessage:
                  "El Pin Colocado No se Encuentra Dentro del Polígono de Ciudad Cercana",
                ciudadColor: "red",
                sectorMessage: null,
                predioMessage: "",
              });
            }
          } catch (error) {
            console.warn(
              `Error consultando capa de área de influencia:`,
              error,
            );
            this.setState({
              ciudadMessage:
                "Error al consultar la capa de área de influencia.",
              ciudadColor: "orange",
              sectorMessage: null,
              predioMessage: "",
            });
          }
        } else {
          this.setState({
            ciudadMessage:
              "El Pin Colocado No se Encuentra Dentro del Polígono de Ciudad Cercana",
            ciudadColor: "red",
            sectorMessage: "",
            predioMessage: "",
          });
        }
      } catch (error) {
        console.warn(`Error consultando capa de ciudad cercana:`, error);
        this.setState({
          ciudadMessage: "Error al consultar la capa de ciudad cercana.",
          ciudadColor: "orange",
          sectorMessage: null,
          predioMessage: "",
        });
      }
    } else {
      this.setState({
        ciudadMessage: "No se encontró la capa de polígono de ciudad cercana.",
        ciudadColor: "orange",
        sectorMessage: null,
        predioMessage: "",
      });
    }
  }

  onMapClick = async (event: any) => {
    if (!this.active) return;
    const mapView = this.state.jimuMapView?.view;
    if (!mapView) {
      this.setState({ statusMessage: "No se ha detectado la vista de mapa." });
      return;
    }
    const point = event.mapPoint;
    await this.queryPoint(point);
  };

  render() {
    const mapWidgetId = this.props.useMapWidgetIds?.[0];
    const showNoMapMessage = !mapWidgetId;

    return (
      <div
        style={{
          padding: "12px",
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            marginBottom: "18px",
            flexWrap: "nowrap",
          }}
        >
          {/* BOTÓN AGREGAR PUNTO */}
          <button
            onClick={() => this.startPointDraw()}
            style={{
              cursor: "pointer",
              padding: "12px 18px",
              borderRadius: "10px",
              border: "1px solid #198754",
              background: "linear-gradient(135deg, #198754, #157347)",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.18)",
              transition: "all 0.2s ease-in-out",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.18)";
            }}
          >
            📍 Agregar y Analizar Punto
          </button>
        </div>

        <div style={{ marginTop: "16px" }}>
          <JimuMapViewComponent
            useMapWidgetId={mapWidgetId}
            onActiveViewChange={(jmv: JimuMapView) => {
              if (jmv) {
                this.setState({ jimuMapView: jmv });
                if (!this.clickHandle) {
                  this.clickHandle = jmv.view.on("click", this.onMapClick);
                }
              } else {
                this.removeClickHandler();
              }
            }}
          />
        </div>

        <div style={{ marginTop: "16px", color: "#6c757d" }}>
          {this.state.statusMessage}
        </div>

        {this.state.ciudadMessage && (
          <div
            style={{
              marginTop: "8px",
              padding: "8px",
              backgroundColor: this.state.ciudadColor,
              color: "#fff",
              borderRadius: "4px",
            }}
          >
            {this.state.ciudadMessage}
          </div>
        )}

        {this.state.predioMessage && (
          <div
            style={{
              marginTop: "8px",
              padding: "8px",
              backgroundColor: "#f1ffee",
              color: "#000",
              borderRadius: "4px",
            }}
          >
            {this.state.predioMessage}
          </div>
        )}

        {this.state.sectorMessage && (
          <div
            style={{
              marginTop: "8px",
              padding: "8px",
              backgroundColor: "#f1ffee",
              color: "#000000",
              borderRadius: "4px",
            }}
          >
            {this.state.sectorMessage}
          </div>
        )}

        {this.state.informacionAdicionalMessage && (
          <div
            style={{
              marginTop: "8px",
              padding: "10px",
              backgroundColor: "#f1ffee",
              color: "#000000",
              borderRadius: "8px",
              border: "1px solid #ffe69c",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            {this.state.informacionAdicionalMessage}
          </div>
        )}

        {this.state.vialidadMessage && (
          <div
            style={{
              marginTop: "8px",
              padding: "10px",
              backgroundColor: "#f1ffee",
              color: "#000000",
              borderRadius: "8px",
              border: "1px solid #b6d4fe",
              boxShadow: "0 2px 6px #00000014",
            }}
          >
            {this.state.vialidadMessage}
          </div>
        )}

        {showNoMapMessage && (
          <div style={{ marginTop: "16px", color: "#6c757d" }}>
            Selecciona el widget de mapa en la configuración del widget para que
            pueda analizar puntos.
          </div>
        )}
      </div>
    );
  }
}