System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/analizar-punto/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */


class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            jimuMapView: null,
            resultados: [],
            analisisActivo: false,
            drawActivo: false,
            statusMessage: "",
            ciudadMessage: "",
            ciudadColor: "",
            sectorMessage: null,
            predioMessage: null,
            informacionAdicionalMessage: null,
            vialidadMessage: null,
        };
        this.active = false;
        this.clickHandle = null;
        this.drawAction = null;
        this.pointGraphic = null;
        this.onMapClick = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.active)
                return;
            const mapView = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
            if (!mapView) {
                this.setState({ statusMessage: "No se ha detectado la vista de mapa." });
                return;
            }
            const point = event.mapPoint;
            yield this.queryPoint(point);
        });
    }
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
        var _a;
        const mapView = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
        if (mapView && this.pointGraphic) {
            mapView.graphics.remove(this.pointGraphic);
            this.pointGraphic = null;
        }
    }
    getFeatureLayers(layers) {
        const featureLayers = [];
        for (const layer of layers.toArray()) {
            if (layer.type === "feature") {
                featureLayers.push(layer);
            }
            else if (layer.type === "group" && layer.layers) {
                featureLayers.push(...this.getFeatureLayers(layer.layers));
            }
        }
        return featureLayers;
    }
    startPointDraw() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const mapView = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
            if (!mapView) {
                this.setState({ statusMessage: "No se ha detectado la vista de mapa." });
                return;
            }
            const [SketchViewModel] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                "esri/widgets/Sketch/SketchViewModel",
            ]);
            this.removeDrawAction();
            this.removePointGraphic();
            const sketchViewModel = new SketchViewModel({
                view: mapView,
                layer: mapView.graphics,
            });
            sketchViewModel.create("point");
            sketchViewModel.on("create", (event) => {
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
        });
    }
    queryPoint(point) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const mapView = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
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
                    const res = yield layer.queryFeatures(query);
                    if (res.features.length > 0) {
                        resultados.push({
                            capa: layer.title || "Capa sin nombre",
                            atributos: res.features[0].attributes,
                        });
                    }
                }
                catch (error) {
                    console.warn(`Error consultando capa ${layer.title}:`, error);
                }
            }
            const statusMessage = resultados.length > 0
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
                if (title.includes("ciudad cercana") &&
                    !title.includes("influencia") &&
                    !title.includes("sector") &&
                    !title.includes("sectores")) {
                    ciudadLayer = layer;
                }
                else if (title.includes("influencia") &&
                    title.includes("ciudad cercana")) {
                    influenciaLayer = layer;
                }
                else if (title.includes("sectores") &&
                    title.includes("ciudad cercana")) {
                    sectoresLayer = layer;
                }
                else if (title.includes("subcentros") &&
                    !title.includes("influencia")) {
                    subcentrosLayer = layer;
                }
                else if (title.includes("subcentros 800")) {
                    influenciaSubcentrosLayer = layer;
                }
                else if (title.includes("estructura vial")) {
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
                    const res = yield ciudadLayer.queryFeatures(query);
                    if (res.features.length > 0) {
                        let predioMessage = null;
                        let predioLayer = null;
                        let zonificacionLayer = null;
                        for (const layer of layers) {
                            if (layer.title &&
                                layer.title.toLowerCase().includes("zonificación secundaria")) {
                                zonificacionLayer = layer;
                                break;
                            }
                        }
                        for (const layer of layers) {
                            if (layer.title &&
                                layer.title.toLowerCase().includes("predio urbano ciudad cercana")) {
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
                                const resPredio = yield predioLayer.queryFeatures(queryPredio);
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
                                            const resZona = yield zonificacionLayer.queryFeatures(queryZona);
                                            if (resZona.features.length > 0) {
                                                const zonaAttributes = resZona.features[0].attributes || {};
                                                const categoriaField = zonificacionLayer.fields.find((field) => field.name === "categria");
                                                const usoSueloField = zonificacionLayer.fields.find((field) => field.name === "uso_suelo");
                                                const categoriaValue = zonaAttributes.categria;
                                                const usoSueloValue = zonaAttributes.uso_suelo;
                                                /* ===== DOMINIO CATEGORIA ===== */
                                                if (categoriaField &&
                                                    categoriaField.domain &&
                                                    categoriaField.domain.codedValues) {
                                                    const domainMatch = categoriaField.domain.codedValues.find((cv) => cv.code === categoriaValue);
                                                    clasificacionGeneral = domainMatch
                                                        ? domainMatch.name
                                                        : categoriaValue || "N/A";
                                                }
                                                else {
                                                    clasificacionGeneral = categoriaValue || "N/A";
                                                }
                                                /* ===== DOMINIO USO SUELO ===== */
                                                if (usoSueloField &&
                                                    usoSueloField.domain &&
                                                    usoSueloField.domain.codedValues) {
                                                    const domainMatch = usoSueloField.domain.codedValues.find((cv) => cv.code === usoSueloValue);
                                                    usoSuelo = domainMatch
                                                        ? domainMatch.name
                                                        : usoSueloValue || "N/A";
                                                }
                                                else {
                                                    usoSuelo = usoSueloValue || "N/A";
                                                }
                                            }
                                        }
                                        catch (error) {
                                            console.warn(`Error consultando capa de Zonificación Secundaria:`, error);
                                        }
                                    }
                                    predioMessage = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "El Pin Fue Colocado en un Predio Urbano Correspondiente a Ciudad Cercana"),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                                fontWeight: "bold",
                                                textAlign: "center",
                                                marginTop: "8px",
                                            } }, "Informaci\u00F3n del Predio"),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                                padding: "10px",
                                                backgroundColor: "#f1ffee",
                                                borderRadius: "6px",
                                                border: "1px solid #c9ddff",
                                            } },
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Clasificaci\u00F3n General del Uso de Suelo:"),
                                                clasificacionGeneral),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Uso de Suelo Autorizado:"),
                                                " ",
                                                usoSuelo),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Clave Catastral Original:"),
                                                " ",
                                                cveCat),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Clave Catastral Est\u00E1ndar: "),
                                                " ",
                                                cveStd),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Folio Real Electr\u00F3nico: "),
                                                folio),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Tipo de Tenencia:"),
                                                tipoTen),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Clasificaci\u00F3n de la Tenencia: "),
                                                clasTen),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Tipo de Asentamiento Humano: "),
                                                tipoAsen),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Nombre del Asentamiento Humano: "),
                                                nomAh))));
                                }
                                else {
                                    predioMessage =
                                        "El Pin No Fue Colocado sobre un Predio Urbano de Ciudad Cercana";
                                }
                            }
                            catch (error) {
                                console.warn(`Error consultando capa de predio urbano:`, error);
                                predioMessage = "Error al consultar la capa de predio urbano.";
                            }
                        }
                        else {
                            predioMessage =
                                "No se encontró la capa de predio urbano ciudad cercana.";
                        }
                        let sectorMessage = null;
                        let informacionAdicionalMessage = null;
                        let vialidadMessage = null;
                        if (sectoresLayer) {
                            const querySector = sectoresLayer.createQuery();
                            querySector.geometry = point;
                            querySector.spatialRelationship = "intersects";
                            querySector.outFields = ["*"];
                            querySector.returnGeometry = false;
                            try {
                                const resSector = yield sectoresLayer.queryFeatures(querySector);
                                if (resSector.features.length > 0) {
                                    const attributes = resSector.features[0].attributes || {};
                                    const fieldKey = Object.keys(attributes).find((key) => key.toLowerCase().includes("sector") &&
                                        key.toLowerCase().includes("ciudad"));
                                    const fallbackKey = Object.keys(attributes).find((key) => key.toLowerCase().includes("sector"));
                                    const sector = (fieldKey && attributes[fieldKey]) ||
                                        (fallbackKey && attributes[fallbackKey]) ||
                                        "";
                                    const descuentoLicencias = attributes.licencias || "N/A";
                                    const descuentoTraslacion = attributes.traslacion || "N/A";
                                    const descuentoPredial = attributes.predial || "N/A";
                                    if (sector) {
                                        sectorMessage = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                "El Pin se Encuentra en el ",
                                                sector),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                    marginTop: "8px",
                                                } }, "Incentivos Aplicables"),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                "Porcentaje Descuento en Licencias de Construcci\u00F3n:",
                                                " ",
                                                descuentoLicencias),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                "Porcentaje Descuento en Traslaci\u00F3n de Dominio:",
                                                " ",
                                                descuentoTraslacion),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                "Porcentaje Descuento en Predial: ",
                                                descuentoPredial)));
                                    }
                                }
                            }
                            catch (error) {
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
                                const resSub = yield subcentrosLayer.queryFeatures(querySub);
                                if (resSub.features.length > 0) {
                                    const subAttributes = resSub.features[0].attributes || {};
                                    const nombreSubcentro = subAttributes.nombre || "N/A";
                                    informacionAdicionalMessage = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                                fontWeight: "bold",
                                                textAlign: "center",
                                                marginBottom: "8px",
                                            } }, "Subcentros Urbanos"),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "Se Encuentra Dentro de un Subcentro Urbano de Acuerdo al PDU2040 S\u00E9ptima Actualizaci\u00F3n"),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: "8px" } },
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Nombre:"),
                                            " ",
                                            nombreSubcentro)));
                                }
                                else {
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
                                            const resInfSub = yield influenciaSubcentrosLayer.queryFeatures(queryInfSub);
                                            if (resInfSub.features.length > 0) {
                                                const infAttributes = resInfSub.features[0].attributes || {};
                                                const identificador = infAttributes.identificador || "N/A";
                                                informacionAdicionalMessage = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                                            fontWeight: "bold",
                                                            textAlign: "center",
                                                            marginBottom: "8px",
                                                        } }, "Subcentros Urbanos"),
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, "Se Encuentra Dentro del \u00C1rea de Influencia de 800m de un Subcentro Urbano de Acuerdo al PDU2040 S\u00E9ptima Actualizaci\u00F3n"),
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: "8px" } },
                                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Nombre:"),
                                                        " ",
                                                        identificador)));
                                            }
                                        }
                                        catch (error) {
                                            console.warn(`Error consultando área de influencia subcentros:`, error);
                                        }
                                    }
                                }
                            }
                            catch (error) {
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
                                const resVialidad = yield vialidadesLayer.queryFeatures(queryVialidad);
                                if (resVialidad.features.length > 0) {
                                    let vialidadCercana = null;
                                    let menorDistancia = Infinity;
                                    const [geometryEngine] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                                        "esri/geometry/geometryEngine",
                                    ]);
                                    for (const feature of resVialidad.features) {
                                        const distance = geometryEngine.distance(point, feature.geometry, "meters");
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
                                        vialidadMessage = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                    marginBottom: "8px",
                                                } }, "Estructura Vial M\u00E1s Cercana"),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Nombre:"),
                                                " ",
                                                nombreVialidad),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: "6px" } },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Distancia aproximada:"),
                                                " ",
                                                menorDistancia.toFixed(2),
                                                " metros"),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Jerarqu\u00EDa Vial:"),
                                                " ",
                                                JerarquíaVial),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Identificador de Secci\u00F3n:"),
                                                " ",
                                                nvoIdScn),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Ancho de la Secci\u00F3n:"),
                                                " ",
                                                scnActual),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "N\u00FAmero de Sentidos:"),
                                                " ",
                                                nSntds),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "N\u00FAmero de Carriles Centrales:"),
                                                " ",
                                                nCrrlsCen),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "N\u00FAmero de Carriles Laterales:"),
                                                " ",
                                                nCrrlsLat),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Ancho de Carril:"),
                                                " ",
                                                anchoCarril),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Ruta Troncal:"),
                                                " ",
                                                rtTroncal)));
                                    }
                                }
                            }
                            catch (error) {
                                console.warn("Error consultando vialidad cercana:", error);
                            }
                        }
                        this.setState({
                            ciudadMessage: "El Pin Colocado se Encuentra Dentro del Polígono de Ciudad Cercana",
                            ciudadColor: "green",
                            sectorMessage,
                            predioMessage,
                            informacionAdicionalMessage,
                            vialidadMessage,
                        });
                    }
                    else if (influenciaLayer) {
                        const queryInf = influenciaLayer.createQuery();
                        queryInf.geometry = point;
                        queryInf.spatialRelationship = "intersects";
                        queryInf.outFields = ["*"];
                        queryInf.returnGeometry = false;
                        try {
                            const resInf = yield influenciaLayer.queryFeatures(queryInf);
                            if (resInf.features.length > 0) {
                                this.setState({
                                    ciudadMessage: "El Pin Colocado No se Encuentra Dentro del Polígono de Ciudad Cercana, Pero se Encuentra Dentro de los 400 Metros del Área de Influencia",
                                    ciudadColor: "orange",
                                    sectorMessage: null,
                                    predioMessage: "",
                                });
                            }
                            else {
                                this.setState({
                                    ciudadMessage: "El Pin Colocado No se Encuentra Dentro del Polígono de Ciudad Cercana",
                                    ciudadColor: "red",
                                    sectorMessage: null,
                                    predioMessage: "",
                                });
                            }
                        }
                        catch (error) {
                            console.warn(`Error consultando capa de área de influencia:`, error);
                            this.setState({
                                ciudadMessage: "Error al consultar la capa de área de influencia.",
                                ciudadColor: "orange",
                                sectorMessage: null,
                                predioMessage: "",
                            });
                        }
                    }
                    else {
                        this.setState({
                            ciudadMessage: "El Pin Colocado No se Encuentra Dentro del Polígono de Ciudad Cercana",
                            ciudadColor: "red",
                            sectorMessage: "",
                            predioMessage: "",
                        });
                    }
                }
                catch (error) {
                    console.warn(`Error consultando capa de ciudad cercana:`, error);
                    this.setState({
                        ciudadMessage: "Error al consultar la capa de ciudad cercana.",
                        ciudadColor: "orange",
                        sectorMessage: null,
                        predioMessage: "",
                    });
                }
            }
            else {
                this.setState({
                    ciudadMessage: "No se encontró la capa de polígono de ciudad cercana.",
                    ciudadColor: "orange",
                    sectorMessage: null,
                    predioMessage: "",
                });
            }
        });
    }
    render() {
        var _a;
        const mapWidgetId = (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0];
        const showNoMapMessage = !mapWidgetId;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                padding: "12px",
                height: "100%",
                overflowY: "auto",
                overflowX: "hidden",
                boxSizing: "border-box",
            } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "18px",
                    flexWrap: "nowrap",
                } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => this.startPointDraw(), style: {
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
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.25)";
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.transform = "translateY(0px)";
                        e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.18)";
                    } }, "\uD83D\uDCCD Agregar y Analizar Punto")),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: "16px" } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: mapWidgetId, onActiveViewChange: (jmv) => {
                        if (jmv) {
                            this.setState({ jimuMapView: jmv });
                            if (!this.clickHandle) {
                                this.clickHandle = jmv.view.on("click", this.onMapClick);
                            }
                        }
                        else {
                            this.removeClickHandler();
                        }
                    } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: "16px", color: "#6c757d" } }, this.state.statusMessage),
            this.state.ciudadMessage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    marginTop: "8px",
                    padding: "8px",
                    backgroundColor: this.state.ciudadColor,
                    color: "#fff",
                    borderRadius: "4px",
                } }, this.state.ciudadMessage)),
            this.state.predioMessage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    marginTop: "8px",
                    padding: "8px",
                    backgroundColor: "#f1ffee",
                    color: "#000",
                    borderRadius: "4px",
                } }, this.state.predioMessage)),
            this.state.sectorMessage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    marginTop: "8px",
                    padding: "8px",
                    backgroundColor: "#f1ffee",
                    color: "#000000",
                    borderRadius: "4px",
                } }, this.state.sectorMessage)),
            this.state.informacionAdicionalMessage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    marginTop: "8px",
                    padding: "10px",
                    backgroundColor: "#f1ffee",
                    color: "#000000",
                    borderRadius: "8px",
                    border: "1px solid #ffe69c",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                } }, this.state.informacionAdicionalMessage)),
            this.state.vialidadMessage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    marginTop: "8px",
                    padding: "10px",
                    backgroundColor: "#f1ffee",
                    color: "#000000",
                    borderRadius: "8px",
                    border: "1px solid #b6d4fe",
                    boxShadow: "0 2px 6px #00000014",
                } }, this.state.vialidadMessage)),
            showNoMapMessage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: "16px", color: "#6c757d" } }, "Selecciona el widget de mapa en la configuraci\u00F3n del widget para que pueda analizar puntos."))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hbmFsaXphci1wdW50by9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUM2QztBQUt2QztBQUVOLE1BQU0sTUFBTyxTQUFRLDRDQUFLLENBQUMsYUFHekM7SUFIRDs7UUFJRSxVQUFLLEdBQUc7WUFDTixXQUFXLEVBQUUsSUFBSTtZQUNqQixVQUFVLEVBQUUsRUFBRTtZQUNkLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsYUFBYSxFQUFFLElBQWlDO1lBQ2hELGFBQWEsRUFBRSxJQUF1QjtZQUN0QywyQkFBMkIsRUFBRSxJQUF1QjtZQUNwRCxlQUFlLEVBQUUsSUFBdUI7U0FDekMsQ0FBQztRQUVGLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixnQkFBVyxHQUFRLElBQUksQ0FBQztRQUN4QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVEsSUFBSSxDQUFD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b0JBQ25CLE1BQU0sRUFBRSxtQkFBbUI7b0JBQzNCLFNBQVMsRUFBRSw0QkFBNEI7aUJBQ3hDLElBRUEsSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FDbkMsQ0FDUDtZQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLENBQzdCLHdEQUNFLEtBQUssRUFBRTtvQkFDTCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsT0FBTyxFQUFFLE1BQU07b0JBQ2YsZUFBZSxFQUFFLFNBQVM7b0JBQzFCLEtBQUssRUFBRSxTQUFTO29CQUNoQixZQUFZLEVBQUUsS0FBSztvQkFDbkIsTUFBTSxFQUFFLG1CQUFtQjtvQkFDM0IsU0FBUyxFQUFFLHFCQUFxQjtpQkFDakMsSUFFQSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FDdkIsQ0FDUDtZQUVBLGdCQUFnQixJQUFJLENBQ25CLHdEQUFLLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSx1R0FHN0MsQ0FDUCxDQUNHLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUNPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hbmFsaXphci1wdW50by9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHtcclxuICBKaW11TWFwVmlld0NvbXBvbmVudCxcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIHR5cGUgSmltdU1hcFZpZXcsXHJcbn0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gIEFsbFdpZGdldFByb3BzPGFueT4sXHJcbiAgYW55XHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgamltdU1hcFZpZXc6IG51bGwsXHJcbiAgICByZXN1bHRhZG9zOiBbXSxcclxuICAgIGFuYWxpc2lzQWN0aXZvOiBmYWxzZSxcclxuICAgIGRyYXdBY3Rpdm86IGZhbHNlLFxyXG4gICAgc3RhdHVzTWVzc2FnZTogXCJcIixcclxuICAgIGNpdWRhZE1lc3NhZ2U6IFwiXCIsXHJcbiAgICBjaXVkYWRDb2xvcjogXCJcIixcclxuICAgIHNlY3Rvck1lc3NhZ2U6IG51bGwgYXMgUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCxcclxuICAgIHByZWRpb01lc3NhZ2U6IG51bGwgYXMgUmVhY3QuUmVhY3ROb2RlLFxyXG4gICAgaW5mb3JtYWNpb25BZGljaW9uYWxNZXNzYWdlOiBudWxsIGFzIFJlYWN0LlJlYWN0Tm9kZSxcclxuICAgIHZpYWxpZGFkTWVzc2FnZTogbnVsbCBhcyBSZWFjdC5SZWFjdE5vZGUsXHJcbiAgfTtcclxuXHJcbiAgYWN0aXZlID0gZmFsc2U7XHJcbiAgY2xpY2tIYW5kbGU6IGFueSA9IG51bGw7XHJcbiAgZHJhd0FjdGlvbjogYW55ID0gbnVsbDtcclxuICBwb2ludEdyYXBoaWM6IGFueSA9IG51bGw7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5yZW1vdmVDbGlja0hhbmRsZXIoKTtcclxuICAgIHRoaXMucmVtb3ZlRHJhd0FjdGlvbigpO1xyXG4gICAgdGhpcy5yZW1vdmVQb2ludEdyYXBoaWMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNsaWNrSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLmNsaWNrSGFuZGxlKSB7XHJcbiAgICAgIHRoaXMuY2xpY2tIYW5kbGUucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuY2xpY2tIYW5kbGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRHJhd0FjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmRyYXdBY3Rpb24pIHtcclxuICAgICAgdGhpcy5kcmF3QWN0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5kcmF3QWN0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVBvaW50R3JhcGhpYygpIHtcclxuICAgIGNvbnN0IG1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xyXG4gICAgaWYgKG1hcFZpZXcgJiYgdGhpcy5wb2ludEdyYXBoaWMpIHtcclxuICAgICAgbWFwVmlldy5ncmFwaGljcy5yZW1vdmUodGhpcy5wb2ludEdyYXBoaWMpO1xyXG4gICAgICB0aGlzLnBvaW50R3JhcGhpYyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRGZWF0dXJlTGF5ZXJzKGxheWVyczogYW55KTogYW55W10ge1xyXG4gICAgY29uc3QgZmVhdHVyZUxheWVycyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzLnRvQXJyYXkoKSkge1xyXG4gICAgICBpZiAobGF5ZXIudHlwZSA9PT0gXCJmZWF0dXJlXCIpIHtcclxuICAgICAgICBmZWF0dXJlTGF5ZXJzLnB1c2gobGF5ZXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxheWVyLnR5cGUgPT09IFwiZ3JvdXBcIiAmJiBsYXllci5sYXllcnMpIHtcclxuICAgICAgICBmZWF0dXJlTGF5ZXJzLnB1c2goLi4udGhpcy5nZXRGZWF0dXJlTGF5ZXJzKGxheWVyLmxheWVycykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZlYXR1cmVMYXllcnM7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzdGFydFBvaW50RHJhdygpIHtcclxuICAgIGNvbnN0IG1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xyXG4gICAgaWYgKCFtYXBWaWV3KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXNNZXNzYWdlOiBcIk5vIHNlIGhhIGRldGVjdGFkbyBsYSB2aXN0YSBkZSBtYXBhLlwiIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW1NrZXRjaFZpZXdNb2RlbF0gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgXCJlc3JpL3dpZGdldHMvU2tldGNoL1NrZXRjaFZpZXdNb2RlbFwiLFxyXG4gICAgXSk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVEcmF3QWN0aW9uKCk7XHJcbiAgICB0aGlzLnJlbW92ZVBvaW50R3JhcGhpYygpO1xyXG5cclxuICAgIGNvbnN0IHNrZXRjaFZpZXdNb2RlbCA9IG5ldyBTa2V0Y2hWaWV3TW9kZWwoe1xyXG4gICAgICB2aWV3OiBtYXBWaWV3LFxyXG4gICAgICBsYXllcjogbWFwVmlldy5ncmFwaGljcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHNrZXRjaFZpZXdNb2RlbC5jcmVhdGUoXCJwb2ludFwiKTtcclxuXHJcbiAgICBza2V0Y2hWaWV3TW9kZWwub24oXCJjcmVhdGVcIiwgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgICB0aGlzLnBvaW50R3JhcGhpYyA9IGV2ZW50LmdyYXBoaWM7XHJcbiAgICAgICAgdGhpcy5wb2ludEdyYXBoaWMuc3ltYm9sID0ge1xyXG4gICAgICAgICAgdHlwZTogXCJzaW1wbGUtbWFya2VyXCIsXHJcbiAgICAgICAgICBzdHlsZTogXCJkaWFtb25kXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCIjZmY1NzIyXCIsXHJcbiAgICAgICAgICBzaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGRyYXdBY3Rpdm86IGZhbHNlLFxyXG4gICAgICAgICAgc3RhdHVzTWVzc2FnZTogXCJBbmFsaXphbmRvIGluZm9ybWFjacOzbiBkZWwgcHVudG8gc2VsZWNjaW9uYWRvLi4uXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5xdWVyeVBvaW50KGV2ZW50LmdyYXBoaWMuZ2VvbWV0cnkpO1xyXG4gICAgICAgIHNrZXRjaFZpZXdNb2RlbC5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZHJhd0FjdGlvbiA9IHNrZXRjaFZpZXdNb2RlbDtcclxuICB9XHJcblxyXG4gIGFzeW5jIHF1ZXJ5UG9pbnQocG9pbnQ6IGFueSkge1xyXG4gICAgY29uc3QgbWFwVmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XHJcbiAgICBpZiAoIW1hcFZpZXcpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1c01lc3NhZ2U6IFwiTm8gc2UgaGEgZGV0ZWN0YWRvIGxhIHZpc3RhIGRlIG1hcGEuXCIgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHRhZG9zID0gW107XHJcbiAgICBjb25zdCBsYXllcnMgPSB0aGlzLmdldEZlYXR1cmVMYXllcnMobWFwVmlldy5tYXAubGF5ZXJzKTtcclxuXHJcbiAgICBpZiAobGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICByZXN1bHRhZG9zOiBbXSxcclxuICAgICAgICBzdGF0dXNNZXNzYWdlOiBcIk5vIGhheSBjYXBhcyBkZSBlbnRpZGFkZXMgY29uZmlndXJhZGFzIGVuIGVzdGUgbWFwYS5cIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xyXG4gICAgICBjb25zdCBxdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KCk7XHJcbiAgICAgIHF1ZXJ5Lmdlb21ldHJ5ID0gcG9pbnQ7XHJcbiAgICAgIHF1ZXJ5LnNwYXRpYWxSZWxhdGlvbnNoaXAgPSBcImludGVyc2VjdHNcIjtcclxuICAgICAgcXVlcnkub3V0RmllbGRzID0gW1wiKlwiXTtcclxuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcbiAgICAgICAgaWYgKHJlcy5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICByZXN1bHRhZG9zLnB1c2goe1xyXG4gICAgICAgICAgICBjYXBhOiBsYXllci50aXRsZSB8fCBcIkNhcGEgc2luIG5vbWJyZVwiLFxyXG4gICAgICAgICAgICBhdHJpYnV0b3M6IHJlcy5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgY29uc3VsdGFuZG8gY2FwYSAke2xheWVyLnRpdGxlfTpgLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0dXNNZXNzYWdlID1cclxuICAgICAgcmVzdWx0YWRvcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBgU2UgZW5jb250cmFyb24gJHtyZXN1bHRhZG9zLmxlbmd0aH0gY2FwYShzKSBjb24gaW5mb3JtYWNpw7NuLmBcclxuICAgICAgICA6IFwiTm8gc2UgZW5jb250csOzIGluZm9ybWFjacOzbiBlbiBsYXMgY2FwYXMgY29uc3VsdGFkYXMuXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHJlc3VsdGFkb3MsXHJcbiAgICAgIHN0YXR1c01lc3NhZ2UsXHJcbiAgICAgIGNpdWRhZE1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgIGNpdWRhZENvbG9yOiBcIlwiLFxyXG4gICAgICBzZWN0b3JNZXNzYWdlOiBudWxsLFxyXG4gICAgICBwcmVkaW9NZXNzYWdlOiBudWxsLFxyXG4gICAgICBpbmZvcm1hY2lvbkFkaWNpb25hbE1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIHZpYWxpZGFkTWVzc2FnZTogbnVsbCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFZlcmlmaWNhY2nDs24gZXNwZWPDrWZpY2EgcGFyYSBsYSBjYXBhIGRlIGNpdWRhZCBjZXJjYW5hLCDDoXJlYSBkZSBpbmZsdWVuY2lhIHkgc2VjdG9yZXNcclxuICAgIGxldCBjaXVkYWRMYXllciA9IG51bGw7XHJcbiAgICBsZXQgaW5mbHVlbmNpYUxheWVyID0gbnVsbDtcclxuICAgIGxldCBzZWN0b3Jlc0xheWVyID0gbnVsbDtcclxuICAgIGxldCBzdWJjZW50cm9zTGF5ZXIgPSBudWxsO1xyXG4gICAgbGV0IGluZmx1ZW5jaWFTdWJjZW50cm9zTGF5ZXIgPSBudWxsO1xyXG4gICAgbGV0IHZpYWxpZGFkZXNMYXllciA9IG51bGw7XHJcblxyXG4gICAgZm9yIChjb25zdCBsYXllciBvZiBsYXllcnMpIHtcclxuICAgICAgY29uc3QgdGl0bGUgPSBsYXllci50aXRsZSA/IGxheWVyLnRpdGxlLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGl0bGUuaW5jbHVkZXMoXCJjaXVkYWQgY2VyY2FuYVwiKSAmJlxyXG4gICAgICAgICF0aXRsZS5pbmNsdWRlcyhcImluZmx1ZW5jaWFcIikgJiZcclxuICAgICAgICAhdGl0bGUuaW5jbHVkZXMoXCJzZWN0b3JcIikgJiZcclxuICAgICAgICAhdGl0bGUuaW5jbHVkZXMoXCJzZWN0b3Jlc1wiKVxyXG4gICAgICApIHtcclxuICAgICAgICBjaXVkYWRMYXllciA9IGxheWVyO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRpdGxlLmluY2x1ZGVzKFwiaW5mbHVlbmNpYVwiKSAmJlxyXG4gICAgICAgIHRpdGxlLmluY2x1ZGVzKFwiY2l1ZGFkIGNlcmNhbmFcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgaW5mbHVlbmNpYUxheWVyID0gbGF5ZXI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGl0bGUuaW5jbHVkZXMoXCJzZWN0b3Jlc1wiKSAmJlxyXG4gICAgICAgIHRpdGxlLmluY2x1ZGVzKFwiY2l1ZGFkIGNlcmNhbmFcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2VjdG9yZXNMYXllciA9IGxheWVyO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRpdGxlLmluY2x1ZGVzKFwic3ViY2VudHJvc1wiKSAmJlxyXG4gICAgICAgICF0aXRsZS5pbmNsdWRlcyhcImluZmx1ZW5jaWFcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3ViY2VudHJvc0xheWVyID0gbGF5ZXI7XHJcbiAgICAgIH0gZWxzZSBpZiAodGl0bGUuaW5jbHVkZXMoXCJzdWJjZW50cm9zIDgwMFwiKSkge1xyXG4gICAgICAgIGluZmx1ZW5jaWFTdWJjZW50cm9zTGF5ZXIgPSBsYXllcjtcclxuICAgICAgfSBlbHNlIGlmICh0aXRsZS5pbmNsdWRlcyhcImVzdHJ1Y3R1cmEgdmlhbFwiKSkge1xyXG4gICAgICAgIHZpYWxpZGFkZXNMYXllciA9IGxheWVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNpdWRhZExheWVyKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gY2l1ZGFkTGF5ZXIuY3JlYXRlUXVlcnkoKTtcclxuICAgICAgcXVlcnkuZ2VvbWV0cnkgPSBwb2ludDtcclxuICAgICAgcXVlcnkuc3BhdGlhbFJlbGF0aW9uc2hpcCA9IFwiaW50ZXJzZWN0c1wiO1xyXG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbXCIqXCJdO1xyXG4gICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IGZhbHNlO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaXVkYWRMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICBpZiAocmVzLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxldCBwcmVkaW9NZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgbGV0IHByZWRpb0xheWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICBsZXQgem9uaWZpY2FjaW9uTGF5ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBsYXllci50aXRsZSAmJlxyXG4gICAgICAgICAgICAgIGxheWVyLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJ6b25pZmljYWNpw7NuIHNlY3VuZGFyaWFcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgem9uaWZpY2FjaW9uTGF5ZXIgPSBsYXllcjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBsYXllci50aXRsZSAmJlxyXG4gICAgICAgICAgICAgIGxheWVyLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJwcmVkaW8gdXJiYW5vIGNpdWRhZCBjZXJjYW5hXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHByZWRpb0xheWVyID0gbGF5ZXI7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAocHJlZGlvTGF5ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQcmVkaW8gPSBwcmVkaW9MYXllci5jcmVhdGVRdWVyeSgpO1xyXG4gICAgICAgICAgICBxdWVyeVByZWRpby5nZW9tZXRyeSA9IHBvaW50O1xyXG4gICAgICAgICAgICBxdWVyeVByZWRpby5zcGF0aWFsUmVsYXRpb25zaGlwID0gXCJpbnRlcnNlY3RzXCI7XHJcbiAgICAgICAgICAgIHF1ZXJ5UHJlZGlvLm91dEZpZWxkcyA9IFtcIipcIl07XHJcbiAgICAgICAgICAgIHF1ZXJ5UHJlZGlvLnJldHVybkdlb21ldHJ5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc1ByZWRpbyA9IGF3YWl0IHByZWRpb0xheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnlQcmVkaW8pO1xyXG4gICAgICAgICAgICAgIGlmIChyZXNQcmVkaW8uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZGlvQXR0cmlidXRlcyA9IHJlc1ByZWRpby5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ZlQ2F0ID0gcHJlZGlvQXR0cmlidXRlcy5jdmVfY2F0IHx8IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdmVTdGQgPSBwcmVkaW9BdHRyaWJ1dGVzLmN2ZV9zdGQgfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGlvID0gcHJlZGlvQXR0cmlidXRlcy5mb2xpbyB8fCBcIk4vQVwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlwb1RlbiA9IHByZWRpb0F0dHJpYnV0ZXMudGlwb190ZW4gfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNUZW4gPSBwcmVkaW9BdHRyaWJ1dGVzLmNsYXNfdGVuIHx8IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXBvQXNlbiA9IHByZWRpb0F0dHJpYnV0ZXMudGlwb19hc2VuIHx8IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub21BaCA9IHByZWRpb0F0dHJpYnV0ZXMubm9tX2FoIHx8IFwiTi9BXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNsYXNpZmljYWNpb25HZW5lcmFsID0gXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgIGxldCB1c29TdWVsbyA9IFwiTi9BXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHpvbmlmaWNhY2lvbkxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5Wm9uYSA9IHpvbmlmaWNhY2lvbkxheWVyLmNyZWF0ZVF1ZXJ5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVpvbmEuZ2VvbWV0cnkgPSBwb2ludDtcclxuICAgICAgICAgICAgICAgICAgcXVlcnlab25hLnNwYXRpYWxSZWxhdGlvbnNoaXAgPSBcImludGVyc2VjdHNcIjtcclxuICAgICAgICAgICAgICAgICAgcXVlcnlab25hLm91dEZpZWxkcyA9IFtcIipcIl07XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5Wm9uYS5yZXR1cm5HZW9tZXRyeSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNab25hID1cclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHpvbmlmaWNhY2lvbkxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnlab25hKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1pvbmEuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgem9uYUF0dHJpYnV0ZXMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNab25hLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmlhRmllbGQgPSB6b25pZmljYWNpb25MYXllci5maWVsZHMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkOiBhbnkpID0+IGZpZWxkLm5hbWUgPT09IFwiY2F0ZWdyaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNvU3VlbG9GaWVsZCA9IHpvbmlmaWNhY2lvbkxheWVyLmZpZWxkcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmllbGQ6IGFueSkgPT4gZmllbGQubmFtZSA9PT0gXCJ1c29fc3VlbG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmlhVmFsdWUgPSB6b25hQXR0cmlidXRlcy5jYXRlZ3JpYTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzb1N1ZWxvVmFsdWUgPSB6b25hQXR0cmlidXRlcy51c29fc3VlbG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLyogPT09PT0gRE9NSU5JTyBDQVRFR09SSUEgPT09PT0gKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYUZpZWxkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYUZpZWxkLmRvbWFpbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWFGaWVsZC5kb21haW4uY29kZWRWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb21haW5NYXRjaCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhRmllbGQuZG9tYWluLmNvZGVkVmFsdWVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3Y6IGFueSkgPT4gY3YuY29kZSA9PT0gY2F0ZWdvcmlhVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNpZmljYWNpb25HZW5lcmFsID0gZG9tYWluTWF0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvbWFpbk1hdGNoLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNhdGVnb3JpYVZhbHVlIHx8IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzaWZpY2FjaW9uR2VuZXJhbCA9IGNhdGVnb3JpYVZhbHVlIHx8IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLyogPT09PT0gRE9NSU5JTyBVU08gU1VFTE8gPT09PT0gKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzb1N1ZWxvRmllbGQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNvU3VlbG9GaWVsZC5kb21haW4gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNvU3VlbG9GaWVsZC5kb21haW4uY29kZWRWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb21haW5NYXRjaCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNvU3VlbG9GaWVsZC5kb21haW4uY29kZWRWYWx1ZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdjogYW55KSA9PiBjdi5jb2RlID09PSB1c29TdWVsb1ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c29TdWVsbyA9IGRvbWFpbk1hdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb21haW5NYXRjaC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1c29TdWVsb1ZhbHVlIHx8IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c29TdWVsbyA9IHVzb1N1ZWxvVmFsdWUgfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgYEVycm9yIGNvbnN1bHRhbmRvIGNhcGEgZGUgWm9uaWZpY2FjacOzbiBTZWN1bmRhcmlhOmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHJlZGlvTWVzc2FnZSA9IChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgRWwgUGluIEZ1ZSBDb2xvY2FkbyBlbiB1biBQcmVkaW8gVXJiYW5vIENvcnJlc3BvbmRpZW50ZSBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBDaXVkYWQgQ2VyY2FuYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYWNpw7NuIGRlbCBQcmVkaW9cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWZmZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjOWRkZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DbGFzaWZpY2FjacOzbiBHZW5lcmFsIGRlbCBVc28gZGUgU3VlbG86PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbGFzaWZpY2FjaW9uR2VuZXJhbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Vc28gZGUgU3VlbG8gQXV0b3JpemFkbzo8L3N0cm9uZz4ge3Vzb1N1ZWxvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNsYXZlIENhdGFzdHJhbCBPcmlnaW5hbDo8L3N0cm9uZz4ge2N2ZUNhdH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DbGF2ZSBDYXRhc3RyYWwgRXN0w6FuZGFyOiA8L3N0cm9uZz4ge2N2ZVN0ZH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Gb2xpbyBSZWFsIEVsZWN0csOzbmljbzogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xpb31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaXBvIGRlIFRlbmVuY2lhOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGlwb1Rlbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DbGFzaWZpY2FjacOzbiBkZSBsYSBUZW5lbmNpYTogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbGFzVGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpcG8gZGUgQXNlbnRhbWllbnRvIEh1bWFubzogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXBvQXNlbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ob21icmUgZGVsIEFzZW50YW1pZW50byBIdW1hbm86IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bm9tQWh9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmVkaW9NZXNzYWdlID1cclxuICAgICAgICAgICAgICAgICAgXCJFbCBQaW4gTm8gRnVlIENvbG9jYWRvIHNvYnJlIHVuIFByZWRpbyBVcmJhbm8gZGUgQ2l1ZGFkIENlcmNhbmFcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBjb25zdWx0YW5kbyBjYXBhIGRlIHByZWRpbyB1cmJhbm86YCwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgIHByZWRpb01lc3NhZ2UgPSBcIkVycm9yIGFsIGNvbnN1bHRhciBsYSBjYXBhIGRlIHByZWRpbyB1cmJhbm8uXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByZWRpb01lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgIFwiTm8gc2UgZW5jb250csOzIGxhIGNhcGEgZGUgcHJlZGlvIHVyYmFubyBjaXVkYWQgY2VyY2FuYS5cIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsZXQgc2VjdG9yTWVzc2FnZTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICBsZXQgaW5mb3JtYWNpb25BZGljaW9uYWxNZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgbGV0IHZpYWxpZGFkTWVzc2FnZTogUmVhY3QuUmVhY3ROb2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICBpZiAoc2VjdG9yZXNMYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVNlY3RvciA9IHNlY3RvcmVzTGF5ZXIuY3JlYXRlUXVlcnkoKTtcclxuICAgICAgICAgICAgcXVlcnlTZWN0b3IuZ2VvbWV0cnkgPSBwb2ludDtcclxuICAgICAgICAgICAgcXVlcnlTZWN0b3Iuc3BhdGlhbFJlbGF0aW9uc2hpcCA9IFwiaW50ZXJzZWN0c1wiO1xyXG4gICAgICAgICAgICBxdWVyeVNlY3Rvci5vdXRGaWVsZHMgPSBbXCIqXCJdO1xyXG4gICAgICAgICAgICBxdWVyeVNlY3Rvci5yZXR1cm5HZW9tZXRyeSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNTZWN0b3IgPSBhd2FpdCBzZWN0b3Jlc0xheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnlTZWN0b3IpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXNTZWN0b3IuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHJlc1NlY3Rvci5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRLZXkgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAoa2V5KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic2VjdG9yXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAga2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJjaXVkYWRcIiksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrS2V5ID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZmluZCgoa2V5KSA9PlxyXG4gICAgICAgICAgICAgICAgICBrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInNlY3RvclwiKSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdG9yID1cclxuICAgICAgICAgICAgICAgICAgKGZpZWxkS2V5ICYmIGF0dHJpYnV0ZXNbZmllbGRLZXldKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoZmFsbGJhY2tLZXkgJiYgYXR0cmlidXRlc1tmYWxsYmFja0tleV0pIHx8XHJcbiAgICAgICAgICAgICAgICAgIFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3VlbnRvTGljZW5jaWFzID0gYXR0cmlidXRlcy5saWNlbmNpYXMgfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2N1ZW50b1RyYXNsYWNpb24gPSBhdHRyaWJ1dGVzLnRyYXNsYWNpb24gfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2N1ZW50b1ByZWRpYWwgPSBhdHRyaWJ1dGVzLnByZWRpYWwgfHwgXCJOL0FcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNlY3Rvck1lc3NhZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RWwgUGluIHNlIEVuY3VlbnRyYSBlbiBlbCB7c2VjdG9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluY2VudGl2b3MgQXBsaWNhYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3JjZW50YWplIERlc2N1ZW50byBlbiBMaWNlbmNpYXMgZGUgQ29uc3RydWNjacOzbjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjdWVudG9MaWNlbmNpYXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvcmNlbnRhamUgRGVzY3VlbnRvIGVuIFRyYXNsYWNpw7NuIGRlIERvbWluaW86e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3VlbnRvVHJhc2xhY2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9yY2VudGFqZSBEZXNjdWVudG8gZW4gUHJlZGlhbDoge2Rlc2N1ZW50b1ByZWRpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBjb25zdWx0YW5kbyBjYXBhIGRlIHNlY3RvcmVzOmAsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAvKiA9PT09PSAgU1VCQ0VOVFJPUyA9PT09PT09PT09PT0gKi9cclxuICAgICAgICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gICAgICAgICAgaWYgKHN1YmNlbnRyb3NMYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVN1YiA9IHN1YmNlbnRyb3NMYXllci5jcmVhdGVRdWVyeSgpO1xyXG5cclxuICAgICAgICAgICAgcXVlcnlTdWIuZ2VvbWV0cnkgPSBwb2ludDtcclxuICAgICAgICAgICAgcXVlcnlTdWIuc3BhdGlhbFJlbGF0aW9uc2hpcCA9IFwiaW50ZXJzZWN0c1wiO1xyXG4gICAgICAgICAgICBxdWVyeVN1Yi5vdXRGaWVsZHMgPSBbXCIqXCJdO1xyXG4gICAgICAgICAgICBxdWVyeVN1Yi5yZXR1cm5HZW9tZXRyeSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNTdWIgPSBhd2FpdCBzdWJjZW50cm9zTGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeVN1Yik7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChyZXNTdWIuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViQXR0cmlidXRlcyA9IHJlc1N1Yi5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vbWJyZVN1YmNlbnRybyA9IHN1YkF0dHJpYnV0ZXMubm9tYnJlIHx8IFwiTi9BXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5mb3JtYWNpb25BZGljaW9uYWxNZXNzYWdlID0gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3ViY2VudHJvcyBVcmJhbm9zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZSBFbmN1ZW50cmEgRGVudHJvIGRlIHVuIFN1YmNlbnRybyBVcmJhbm8gZGUgQWN1ZXJkbyBhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgUERVMjA0MCBTw6lwdGltYSBBY3R1YWxpemFjacOzblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI4cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm9tYnJlOjwvc3Ryb25nPiB7bm9tYnJlU3ViY2VudHJvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAgICAgICAvKiA9PT09PSDDgVJFQSBERSBJTkZMVUVOQ0lBIFNVQkNFTlRST1MgPT09PT09PSAqL1xyXG4gICAgICAgICAgICAgICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5mbHVlbmNpYVN1YmNlbnRyb3NMYXllcikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUluZlN1YiA9IGluZmx1ZW5jaWFTdWJjZW50cm9zTGF5ZXIuY3JlYXRlUXVlcnkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5SW5mU3ViLmdlb21ldHJ5ID0gcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5SW5mU3ViLnNwYXRpYWxSZWxhdGlvbnNoaXAgPSBcImludGVyc2VjdHNcIjtcclxuICAgICAgICAgICAgICAgICAgcXVlcnlJbmZTdWIub3V0RmllbGRzID0gW1wiKlwiXTtcclxuICAgICAgICAgICAgICAgICAgcXVlcnlJbmZTdWIucmV0dXJuR2VvbWV0cnkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzSW5mU3ViID1cclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGluZmx1ZW5jaWFTdWJjZW50cm9zTGF5ZXIucXVlcnlGZWF0dXJlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlJbmZTdWIsXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzSW5mU3ViLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZkF0dHJpYnV0ZXMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNJbmZTdWIuZmVhdHVyZXNbMF0uYXR0cmlidXRlcyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZGVudGlmaWNhZG9yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mQXR0cmlidXRlcy5pZGVudGlmaWNhZG9yIHx8IFwiTi9BXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYWNpb25BZGljaW9uYWxNZXNzYWdlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3ViY2VudHJvcyBVcmJhbm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZSBFbmN1ZW50cmEgRGVudHJvIGRlbCDDgXJlYSBkZSBJbmZsdWVuY2lhIGRlIDgwMG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlIHVuIFN1YmNlbnRybyBVcmJhbm8gZGUgQWN1ZXJkbyBhbCBQRFUyMDQwIFPDqXB0aW1hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3R1YWxpemFjacOzblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI4cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm9tYnJlOjwvc3Ryb25nPiB7aWRlbnRpZmljYWRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgY29uc3VsdGFuZG8gw6FyZWEgZGUgaW5mbHVlbmNpYSBzdWJjZW50cm9zOmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgY29uc3VsdGFuZG8gY2FwYSBkZSBzdWJjZW50cm9zOmAsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgICAgICAvKiA9PT09PSBWSUFMSURBRCBNw4FTIENFUkNBTkEgPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gICAgICAgICAgaWYgKHZpYWxpZGFkZXNMYXllcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5VmlhbGlkYWQgPSB2aWFsaWRhZGVzTGF5ZXIuY3JlYXRlUXVlcnkoKTtcclxuXHJcbiAgICAgICAgICAgICAgcXVlcnlWaWFsaWRhZC5nZW9tZXRyeSA9IHBvaW50O1xyXG5cclxuICAgICAgICAgICAgICBxdWVyeVZpYWxpZGFkLmRpc3RhbmNlID0gMTAwO1xyXG5cclxuICAgICAgICAgICAgICBxdWVyeVZpYWxpZGFkLnVuaXRzID0gXCJtZXRlcnNcIjtcclxuXHJcbiAgICAgICAgICAgICAgcXVlcnlWaWFsaWRhZC5zcGF0aWFsUmVsYXRpb25zaGlwID0gXCJpbnRlcnNlY3RzXCI7XHJcblxyXG4gICAgICAgICAgICAgIHF1ZXJ5VmlhbGlkYWQucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBxdWVyeVZpYWxpZGFkLm91dEZpZWxkcyA9IFtcIipcIl07XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc1ZpYWxpZGFkID1cclxuICAgICAgICAgICAgICAgIGF3YWl0IHZpYWxpZGFkZXNMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5VmlhbGlkYWQpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocmVzVmlhbGlkYWQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpYWxpZGFkQ2VyY2FuYSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1lbm9yRGlzdGFuY2lhID0gSW5maW5pdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgW2dlb21ldHJ5RW5naW5lXSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICAgICAgICAgICBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIixcclxuICAgICAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmVhdHVyZSBvZiByZXNWaWFsaWRhZC5mZWF0dXJlcykge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGdlb21ldHJ5RW5naW5lLmRpc3RhbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZXRlcnNcIixcclxuICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSAhPT0gbnVsbCAmJiBkaXN0YW5jZSA8IG1lbm9yRGlzdGFuY2lhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVub3JEaXN0YW5jaWEgPSBkaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICB2aWFsaWRhZENlcmNhbmEgPSBmZWF0dXJlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZpYWxpZGFkQ2VyY2FuYSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBhdHRycyA9IHZpYWxpZGFkQ2VyY2FuYS5hdHRyaWJ1dGVzIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3Qgbm9tYnJlVmlhbGlkYWQgPSBhdHRycy5ub21fdmlhbCB8fCBcIk4vQVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgICAgICAgICAgICAgLyogPT09PT0gVFJBRFVDQ0nDk04gTUFOVUFMIEpFUkFSUVXDjUEgVklBTCA9PT09PT09PT09PT09PSAqL1xyXG4gICAgICAgICAgICAgICAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgamVyYXJxdWlhVmFsdWUgPSBOdW1iZXIoYXR0cnMuanJxX3ZpYWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IEplcmFycXXDrWFWaWFsID0gXCJOL0FcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoamVyYXJxdWlhVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICBKZXJhcnF1w61hVmlhbCA9IFwiUmVnaW9uYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICBKZXJhcnF1w61hVmlhbCA9IFwiQXJ0ZXJpYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICBKZXJhcnF1w61hVmlhbCA9IFwiUHJpbWFyaWFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICBKZXJhcnF1w61hVmlhbCA9IFwiU2VjdW5kYXJpYVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgIEplcmFycXXDrWFWaWFsID0gXCJSZWdpb25hbCBQcm9wdWVzdGFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICBKZXJhcnF1w61hVmlhbCA9IFwiQXJ0ZXJpYWwgUHJvcHVlc3RhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgSmVyYXJxdcOtYVZpYWwgPSBcIlByaW1hcmlhIFByb3B1ZXN0YVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgIEplcmFycXXDrWFWaWFsID0gXCJTZWN1bmRhcmlhIFByb3B1ZXN0YVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICBKZXJhcnF1w61hVmlhbCA9IGF0dHJzLmpycV92aWFsIHx8IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG52b0lkU2NuID0gYXR0cnMubnZvX2lkX3NjbiB8fCBcIk4vQVwiO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzY25BY3R1YWwgPSBhdHRycy5zY25fYWN0dWFsIHx8IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5TbnRkcyA9IGF0dHJzLm5fc250ZHMgfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbkNycmxzQ2VuID0gYXR0cnMubl9jcnJsc19jZW4gfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbkNycmxzTGF0ID0gYXR0cnMubl9jcnJsc19sYXQgfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgYW5jaG9DYXJyaWwgPSBhdHRycy5hbmNob19jYXJyaWwgfHwgXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcnRUcm9uY2FsID0gYXR0cnMucnRfdHJvbmNhbCB8fCBcIk4vQVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdmlhbGlkYWRNZXNzYWdlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXN0cnVjdHVyYSBWaWFsIE3DoXMgQ2VyY2FuYVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ob21icmU6PC9zdHJvbmc+IHtub21icmVWaWFsaWRhZH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRpc3RhbmNpYSBhcHJveGltYWRhOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbm9yRGlzdGFuY2lhLnRvRml4ZWQoMil9IG1ldHJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5KZXJhcnF1w61hIFZpYWw6PC9zdHJvbmc+IHtKZXJhcnF1w61hVmlhbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5JZGVudGlmaWNhZG9yIGRlIFNlY2Npw7NuOjwvc3Ryb25nPiB7bnZvSWRTY259XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFuY2hvIGRlIGxhIFNlY2Npw7NuOjwvc3Ryb25nPiB7c2NuQWN0dWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ow7ptZXJvIGRlIFNlbnRpZG9zOjwvc3Ryb25nPiB7blNudGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ow7ptZXJvIGRlIENhcnJpbGVzIENlbnRyYWxlczo8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuQ3JybHNDZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk7Dum1lcm8gZGUgQ2FycmlsZXMgTGF0ZXJhbGVzOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge25DcnJsc0xhdH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QW5jaG8gZGUgQ2FycmlsOjwvc3Ryb25nPiB7YW5jaG9DYXJyaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlJ1dGEgVHJvbmNhbDo8L3N0cm9uZz4ge3J0VHJvbmNhbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJFcnJvciBjb25zdWx0YW5kbyB2aWFsaWRhZCBjZXJjYW5hOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2l1ZGFkTWVzc2FnZTpcclxuICAgICAgICAgICAgICBcIkVsIFBpbiBDb2xvY2FkbyBzZSBFbmN1ZW50cmEgRGVudHJvIGRlbCBQb2zDrWdvbm8gZGUgQ2l1ZGFkIENlcmNhbmFcIixcclxuICAgICAgICAgICAgY2l1ZGFkQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgc2VjdG9yTWVzc2FnZSxcclxuICAgICAgICAgICAgcHJlZGlvTWVzc2FnZSxcclxuICAgICAgICAgICAgaW5mb3JtYWNpb25BZGljaW9uYWxNZXNzYWdlLFxyXG4gICAgICAgICAgICB2aWFsaWRhZE1lc3NhZ2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGluZmx1ZW5jaWFMYXllcikge1xyXG4gICAgICAgICAgY29uc3QgcXVlcnlJbmYgPSBpbmZsdWVuY2lhTGF5ZXIuY3JlYXRlUXVlcnkoKTtcclxuICAgICAgICAgIHF1ZXJ5SW5mLmdlb21ldHJ5ID0gcG9pbnQ7XHJcbiAgICAgICAgICBxdWVyeUluZi5zcGF0aWFsUmVsYXRpb25zaGlwID0gXCJpbnRlcnNlY3RzXCI7XHJcbiAgICAgICAgICBxdWVyeUluZi5vdXRGaWVsZHMgPSBbXCIqXCJdO1xyXG4gICAgICAgICAgcXVlcnlJbmYucmV0dXJuR2VvbWV0cnkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNJbmYgPSBhd2FpdCBpbmZsdWVuY2lhTGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeUluZik7XHJcbiAgICAgICAgICAgIGlmIChyZXNJbmYuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2l1ZGFkTWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgXCJFbCBQaW4gQ29sb2NhZG8gTm8gc2UgRW5jdWVudHJhIERlbnRybyBkZWwgUG9sw61nb25vIGRlIENpdWRhZCBDZXJjYW5hLCBQZXJvIHNlIEVuY3VlbnRyYSBEZW50cm8gZGUgbG9zIDQwMCBNZXRyb3MgZGVsIMOBcmVhIGRlIEluZmx1ZW5jaWFcIixcclxuICAgICAgICAgICAgICAgIGNpdWRhZENvbG9yOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgc2VjdG9yTWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByZWRpb01lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjaXVkYWRNZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICBcIkVsIFBpbiBDb2xvY2FkbyBObyBzZSBFbmN1ZW50cmEgRGVudHJvIGRlbCBQb2zDrWdvbm8gZGUgQ2l1ZGFkIENlcmNhbmFcIixcclxuICAgICAgICAgICAgICAgIGNpdWRhZENvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgc2VjdG9yTWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByZWRpb01lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICBgRXJyb3IgY29uc3VsdGFuZG8gY2FwYSBkZSDDoXJlYSBkZSBpbmZsdWVuY2lhOmAsXHJcbiAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGNpdWRhZE1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICBcIkVycm9yIGFsIGNvbnN1bHRhciBsYSBjYXBhIGRlIMOhcmVhIGRlIGluZmx1ZW5jaWEuXCIsXHJcbiAgICAgICAgICAgICAgY2l1ZGFkQ29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgc2VjdG9yTWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICBwcmVkaW9NZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNpdWRhZE1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgXCJFbCBQaW4gQ29sb2NhZG8gTm8gc2UgRW5jdWVudHJhIERlbnRybyBkZWwgUG9sw61nb25vIGRlIENpdWRhZCBDZXJjYW5hXCIsXHJcbiAgICAgICAgICAgIGNpdWRhZENvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICBzZWN0b3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBwcmVkaW9NZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgY29uc3VsdGFuZG8gY2FwYSBkZSBjaXVkYWQgY2VyY2FuYTpgLCBlcnJvcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjaXVkYWRNZXNzYWdlOiBcIkVycm9yIGFsIGNvbnN1bHRhciBsYSBjYXBhIGRlIGNpdWRhZCBjZXJjYW5hLlwiLFxyXG4gICAgICAgICAgY2l1ZGFkQ29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICBzZWN0b3JNZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgcHJlZGlvTWVzc2FnZTogXCJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY2l1ZGFkTWVzc2FnZTogXCJObyBzZSBlbmNvbnRyw7MgbGEgY2FwYSBkZSBwb2zDrWdvbm8gZGUgY2l1ZGFkIGNlcmNhbmEuXCIsXHJcbiAgICAgICAgY2l1ZGFkQ29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgc2VjdG9yTWVzc2FnZTogbnVsbCxcclxuICAgICAgICBwcmVkaW9NZXNzYWdlOiBcIlwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWFwQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgbWFwVmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XHJcbiAgICBpZiAoIW1hcFZpZXcpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1c01lc3NhZ2U6IFwiTm8gc2UgaGEgZGV0ZWN0YWRvIGxhIHZpc3RhIGRlIG1hcGEuXCIgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBvaW50ID0gZXZlbnQubWFwUG9pbnQ7XHJcbiAgICBhd2FpdCB0aGlzLnF1ZXJ5UG9pbnQocG9pbnQpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IG1hcFdpZGdldElkID0gdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXTtcclxuICAgIGNvbnN0IHNob3dOb01hcE1lc3NhZ2UgPSAhbWFwV2lkZ2V0SWQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjEycHhcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGdhcDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxOHB4XCIsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogQk9Uw5NOIEFHUkVHQVIgUFVOVE8gKi99XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhcnRQb2ludERyYXcoKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweCAxOHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMxOTg3NTRcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxOTg3NTQsICMxNTczNDcpXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBnYXA6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgM3B4IDhweCByZ2JhKDAsMCwwLDAuMTgpXCIsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4ycyBlYXNlLWluLW91dFwiLFxyXG4gICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0ycHgpXCI7XHJcbiAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiMCA2cHggMTRweCByZ2JhKDAsMCwwLDAuMjUpXCI7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDBweClcIjtcclxuICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCIwIDNweCA4cHggcmdiYSgwLDAsMCwwLjE4KVwiO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDwn5ONIEFncmVnYXIgeSBBbmFsaXphciBQdW50b1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE2cHhcIiB9fT5cclxuICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17bWFwV2lkZ2V0SWR9XHJcbiAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoam12KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgamltdU1hcFZpZXc6IGptdiB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbGlja0hhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrSGFuZGxlID0gam12LnZpZXcub24oXCJjbGlja1wiLCB0aGlzLm9uTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNsaWNrSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE2cHhcIiwgY29sb3I6IFwiIzZjNzU3ZFwiIH19PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc3RhdHVzTWVzc2FnZX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuY2l1ZGFkTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNpdWRhZENvbG9yLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNpdWRhZE1lc3NhZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5wcmVkaW9NZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZmZlZVwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByZWRpb01lc3NhZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWN0b3JNZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZmZlZVwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlY3Rvck1lc3NhZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pbmZvcm1hY2lvbkFkaWNpb25hbE1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCI4cHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZmZlZVwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZmZlNjljXCIsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMDgpXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluZm9ybWFjaW9uQWRpY2lvbmFsTWVzc2FnZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnZpYWxpZGFkTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmZmVlXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNiNmQ0ZmVcIixcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggNnB4ICMwMDAwMDAxNFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS52aWFsaWRhZE1lc3NhZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c2hvd05vTWFwTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNnB4XCIsIGNvbG9yOiBcIiM2Yzc1N2RcIiB9fT5cclxuICAgICAgICAgICAgU2VsZWNjaW9uYSBlbCB3aWRnZXQgZGUgbWFwYSBlbiBsYSBjb25maWd1cmFjacOzbiBkZWwgd2lkZ2V0IHBhcmEgcXVlXHJcbiAgICAgICAgICAgIHB1ZWRhIGFuYWxpemFyIHB1bnRvcy5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9