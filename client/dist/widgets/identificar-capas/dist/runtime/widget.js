System.register(["jimu-core","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/identificar-capas/src/runtime/translations/default.ts":
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/identificar-capas/src/runtime/translations/default.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Identificar Capas'
});


/***/ }),

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

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/identificar-capas/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadStatus: () => (/* binding */ LoadStatus),
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/identificar-capas/src/runtime/translations/default.ts");
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




var LoadStatus;
(function (LoadStatus) {
    LoadStatus["Pending"] = "Pending";
    LoadStatus["Fulfilled"] = "Fulfilled";
    LoadStatus["Rejected"] = "Rejected";
})(LoadStatus || (LoadStatus = {}));
class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.createWebMapView = (MapView, resolve, reject) => {
            this.destroyView();
            const mapViewOption = {
                map: this.dataSource.map,
                container: document.createElement("div"),
            };
            this.mapView = new MapView(mapViewOption);
            this.mapView.when(() => {
                resolve(this.mapView);
            }, (error) => reject(error));
        };
        this.createSceneView = (SceneView, resolve, reject) => {
            this.destroyView();
            const mapViewOption = {
                map: this.dataSource.map,
                container: document.createElement("div"),
            };
            this.sceneView = new this.SceneView(mapViewOption);
            this.sceneView.when(() => {
                resolve(this.sceneView);
            }, (error) => reject(error));
        };
        this.loadViewModules = (dataSource) => __awaiter(this, void 0, void 0, function* () {
            if (dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WebMap) {
                if (this.MapView) {
                    return this.MapView;
                }
                [this.MapView] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(["esri/views/MapView"]);
                return this.MapView;
            }
            else if (dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WebScene) {
                if (this.SceneView) {
                    return this.SceneView;
                }
                [this.SceneView] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(["esri/views/SceneView"]);
                return this.SceneView;
            }
            else {
                return Promise.reject(new Error(null));
            }
        });
        this.onActiveViewChange = (jimuMapView) => {
            if (jimuMapView && jimuMapView.view) {
                console.log("Vista de mapa cambiada, configurando identificación");
                this.activeView = jimuMapView.view;
                this.setupClickHandler();
                this.setState({
                    loadStatus: LoadStatus.Fulfilled,
                });
            }
            else {
                console.log("Vista de mapa removida");
                this.removeClickHandler();
            }
        };
        this.onDataSourceCreated = (dataSource) => {
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
        this.onCreateDataSourceFailed = (error) => {
            console.error("Error creando fuente de datos:", error);
        };
        this.setupClickHandler = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.activeView) {
                console.log("No hay vista activa para configurar click handler");
                return;
            }
            console.log("Configurando click handler para identificación");
            // Cargar módulos necesarios
            const [Query] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(["esri/tasks/support/Query"]);
            this.clickHandle = this.activeView.on("click", (event) => __awaiter(this, void 0, void 0, function* () {
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
                            const result = yield layer.queryFeatures(query);
                            const features = result.features || [];
                            console.log(`Encontradas ${features.length} features en ${layer.title}`);
                            if (features.length > 0) {
                                results.push({
                                    layerName: layer.title,
                                    features: features.map((feature) => ({
                                        layerName: layer.title,
                                        displayFieldName: layer.displayField,
                                        feature: feature,
                                        attributes: feature.attributes,
                                    })),
                                });
                            }
                        }
                        catch (error) {
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
                }
                catch (error) {
                    console.error("Error en identificación:", error);
                    this.setState({ isIdentifying: false });
                }
            }));
            console.log("Click handler configurado correctamente");
        });
        this.removeClickHandler = () => {
            if (this.clickHandle) {
                this.clickHandle.remove();
                this.clickHandle = null;
            }
        };
        this.formatValue = (value) => {
            if (value === null || value === undefined) {
                return "N/A";
            }
            if (typeof value === "object") {
                return "[Objeto]";
            }
            return String(value);
        };
        this.clearResults = () => {
            this.setState({
                identifiedFeatures: [],
                hasAttemptedIdentify: false,
            });
        };
        this.renderFeatureInfo = (feature, index) => {
            const attributes = feature.attributes || {};
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: index, style: {
                    background: "#f8f9fa",
                    border: "1px solid #e9ecef",
                    borderRadius: "6px",
                    padding: "12px",
                    marginBottom: "8px",
                } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                        fontWeight: "bold",
                        color: "#495057",
                        marginBottom: "8px",
                        fontSize: "14px",
                    } }, feature.layerName || "Capa sin nombre"),
                Object.entries(attributes).map(([key, value]) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: key, style: {
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px 0",
                        borderBottom: "1px solid #f1f3f4",
                        fontSize: "13px",
                    } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontWeight: "500", color: "#6c757d" } },
                        key,
                        ":"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: "#495057", textAlign: "right" } }, this.formatValue(value)))))));
        };
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
    createViewByDataSource(dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.loadViewModules(dataSource).then(() => __awaiter(this, void 0, void 0, function* () {
                if (dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WebMap) {
                    return yield new Promise((resolve, reject) => {
                        this.createWebMapView(this.MapView, resolve, reject);
                    });
                }
                else if (dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WebScene) {
                    return new Promise((resolve, reject) => {
                        this.createSceneView(this.SceneView, resolve, reject);
                    });
                }
                else {
                    return Promise.reject(new Error(null));
                }
            }));
        });
    }
    destroyView() {
        this.mapView && !this.mapView.destroyed && this.mapView.destroy();
        this.sceneView && !this.sceneView.destroyed && this.sceneView.destroy();
    }
    render() {
        var _a, _b;
        const useMapWidget = this.props.useMapWidgetIds && this.props.useMapWidgetIds[0];
        const useDataSource = this.props.useDataSources && this.props.useDataSources[0];
        let content = null;
        let dataSourceContent = null;
        if (useMapWidget) {
            dataSourceContent = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.onActiveViewChange }));
        }
        else if (useDataSource) {
            dataSourceContent = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDataSource, onDataSourceCreated: this.onDataSourceCreated, onCreateDataSourceFailed: this.onCreateDataSourceFailed }));
        }
        if (!useMapWidget && !useDataSource) {
            content = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-legend" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.WidgetPlaceholder, { icon: null, autoFlip: true, message: (_b = this.props.intl) === null || _b === void 0 ? void 0 : _b.formatMessage({
                        id: "_widgetLabel",
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"]._widgetLabel,
                    }), widgetId: this.props.id })));
        }
        else {
            let loadingContent = null;
            if (this.state.loadStatus === LoadStatus.Pending ||
                this.state.isIdentifying) {
                loadingContent = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        color: "#6c757d",
                    } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginRight: "8px" } }, this.state.isIdentifying
                        ? "🔍 Identificando..."
                        : "⏳ Cargando...")));
            }
            content = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "#ffffff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                        padding: "12px 16px",
                        background: "#f8f9fa",
                        borderBottom: "1px solid #e9ecef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontWeight: "600",
                            color: "#495057",
                            fontSize: "16px",
                        } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: "18px" } }, "\uD83D\uDD0D"),
                        "Identificar Capas"),
                    this.state.identifiedFeatures.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: this.clearResults, style: {
                            background: "#dc3545",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            padding: "4px 8px",
                            fontSize: "12px",
                            cursor: "pointer",
                        } }, "Limpiar"))),
                this.state.identifiedFeatures.length === 0 &&
                    !this.state.isIdentifying && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                        padding: "16px",
                        textAlign: "center",
                        color: "#6c757d",
                        fontSize: "14px",
                    } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: "8px" } }, "\uD83D\uDCCD Haz clic en el mapa para identificar capas"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: "12px", color: "#adb5bd" } }, "Se mostrar\u00E1n los atributos de las features encontradas"))),
                this.state.identifiedFeatures.length === 0 &&
                    !this.state.isIdentifying &&
                    this.state.hasAttemptedIdentify && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                        padding: "16px",
                        textAlign: "center",
                        color: "#6c757d",
                        fontSize: "14px",
                        borderTop: "1px solid #e9ecef",
                    } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: "8px" } }, "\uD83D\uDD0D No se encontraron features en esta ubicaci\u00F3n"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: "12px", color: "#adb5bd" } }, "Intenta hacer clic en otra \u00E1rea del mapa"))),
                this.state.identifiedFeatures.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                        flex: 1,
                        overflowY: "auto",
                        padding: "16px",
                        scrollbarWidth: "thin",
                        scrollbarColor: "#c1c1c1 transparent",
                    } }, this.state.identifiedFeatures.map((layerResult, layerIndex) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: layerIndex, style: { marginBottom: "16px" } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                            fontWeight: "600",
                            color: "#495057",
                            marginBottom: "8px",
                            padding: "8px 12px",
                            background: "#e9ecef",
                            borderRadius: "4px",
                            fontSize: "14px",
                        } },
                        "\uD83D\uDDC2\uFE0F ",
                        layerResult.layerName),
                    layerResult.features.map((feature, featureIndex) => this.renderFeatureInfo(feature, `${layerIndex}-${featureIndex}`))))))),
                loadingContent,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "none" } }, dataSourceContent)));
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: null, className: "jimu-widget", style: {
                width: "100%",
                height: "100%",
            } }, content));
    }
}
Widget.versionManager = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pZGVudGlmaWNhci1jYXBhcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsbUJBQW1CO0NBQ2xDOzs7Ozs7Ozs7Ozs7QUNGRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFRSTtBQUtFO0FBQ3VCO0FBRVM7QUFFckQsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3BCLGlDQUFtQjtJQUNuQixxQ0FBdUI7SUFDdkIsbUNBQXFCO0FBQ3ZCLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjtBQVlELE1BQXFCLE1BQU8sU0FBUSw0Q0FBSyxDQUFDLGFBR3pDO0lBV0MsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBaUNmLHFCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsTUFBTSxhQUFhLEdBQTZCO2dCQUM5QyxHQUFHLEVB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SyxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7b0JBQ25ELHdEQUNFLEtBQUssRUFBRTs0QkFDTCxVQUFVLEVBQUUsS0FBSzs0QkFDakIsS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLFlBQVksRUFBRSxLQUFLOzRCQUNuQixPQUFPLEVBQUUsVUFBVTs0QkFDbkIsVUFBVSxFQUFFLFNBQVM7NEJBQ3JCLFlBQVksRUFBRSxLQUFLOzRCQUNuQixRQUFRLEVBQUUsTUFBTTt5QkFDakI7O3dCQUVJLFdBQVcsQ0FBQyxTQUFTLENBQ3RCO29CQUVMLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FDcEIsT0FBTyxFQUNQLEdBQUcsVUFBVSxJQUFJLFlBQVksRUFBRSxDQUNoQyxDQUNGLENBQ0csQ0FDUCxDQUFDLENBQ0UsQ0FDUDtnQkFHQSxjQUFjO2dCQUdmLHdEQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBRyxpQkFBaUIsQ0FBTyxDQUN0RCxDQUNQLENBQUM7UUFDSixDQUFDO1FBRUQsT0FBTyxDQUNMLHdEQUNFLEdBQUcsRUFBRSxJQUFJLEVBQ1QsU0FBUyxFQUFDLGFBQWEsRUFDdkIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxNQUFNO2FBQ2YsSUFFQSxPQUFPLENBQ0osQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7QUF2Zk0scUJBQWMsR0FBRyxJQUFJLENBQUM7aUVBWlYsTUFBTTtBQXNnQm5CLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2lkZW50aWZpY2FyLWNhcGFzL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaWRlbnRpZmljYXItY2FwYXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnSWRlbnRpZmljYXIgQ2FwYXMnXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICBqc3gsXHJcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcclxuICBEYXRhU291cmNlQ29tcG9uZW50LFxyXG4gIHR5cGUgTWFwRGF0YVNvdXJjZSxcclxuICBEYXRhU291cmNlVHlwZXMsXHJcbn0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXHJcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXHJcbiAgdHlwZSBKaW11TWFwVmlldyxcclxufSBmcm9tIFwiamltdS1hcmNnaXNcIjtcclxuaW1wb3J0IHsgV2lkZ2V0UGxhY2Vob2xkZXIgfSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcblxyXG5leHBvcnQgZW51bSBMb2FkU3RhdHVzIHtcclxuICBQZW5kaW5nID0gXCJQZW5kaW5nXCIsXHJcbiAgRnVsZmlsbGVkID0gXCJGdWxmaWxsZWRcIixcclxuICBSZWplY3RlZCA9IFwiUmVqZWN0ZWRcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRQcm9wcyBleHRlbmRzIEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRTdGF0ZSB7XHJcbiAgbG9hZFN0YXR1czogTG9hZFN0YXR1cztcclxuICB3aWRnZXRLZXk6IG51bWJlcjtcclxuICBpZGVudGlmaWVkRmVhdHVyZXM6IGFueVtdO1xyXG4gIGlzSWRlbnRpZnlpbmc6IGJvb2xlYW47XHJcbiAgaGFzQXR0ZW1wdGVkSWRlbnRpZnk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbiAgV2lkZ2V0UHJvcHMsXHJcbiAgV2lkZ2V0U3RhdGVcclxuPiB7XHJcbiAgcHJpdmF0ZSBkYXRhU291cmNlOiBNYXBEYXRhU291cmNlO1xyXG4gIHByaXZhdGUgbWFwVmlldzogX19lc3JpLk1hcFZpZXc7XHJcbiAgcHJpdmF0ZSBzY2VuZVZpZXc6IF9fZXNyaS5TY2VuZVZpZXc7XHJcbiAgcHJpdmF0ZSBNYXBWaWV3OiB0eXBlb2YgX19lc3JpLk1hcFZpZXc7XHJcbiAgcHJpdmF0ZSBTY2VuZVZpZXc6IHR5cGVvZiBfX2VzcmkuU2NlbmVWaWV3O1xyXG4gIHByaXZhdGUgYWN0aXZlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3O1xyXG4gIHByaXZhdGUgY2xpY2tIYW5kbGU6IF9fZXNyaS5IYW5kbGU7XHJcblxyXG4gIHN0YXRpYyB2ZXJzaW9uTWFuYWdlciA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsb2FkU3RhdHVzOiBMb2FkU3RhdHVzLlBlbmRpbmcsXHJcbiAgICAgIHdpZGdldEtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgaWRlbnRpZmllZEZlYXR1cmVzOiBbXSxcclxuICAgICAgaXNJZGVudGlmeWluZzogZmFsc2UsXHJcbiAgICAgIGhhc0F0dGVtcHRlZElkZW50aWZ5OiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcclxuICAgIHRoaXMucmVtb3ZlQ2xpY2tIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVWaWV3QnlEYXRhU291cmNlKFxyXG4gICAgZGF0YVNvdXJjZTogTWFwRGF0YVNvdXJjZSxcclxuICApOiBQcm9taXNlPF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldz4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubG9hZFZpZXdNb2R1bGVzKGRhdGFTb3VyY2UpLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoZGF0YVNvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPF9fZXNyaS5NYXBWaWV3PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZVdlYk1hcFZpZXcodGhpcy5NYXBWaWV3LCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPF9fZXNyaS5TY2VuZVZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlU2NlbmVWaWV3KHRoaXMuU2NlbmVWaWV3LCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobnVsbCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVdlYk1hcFZpZXcgPSAoTWFwVmlldywgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB0aGlzLmRlc3Ryb3lWaWV3KCk7XHJcbiAgICBjb25zdCBtYXBWaWV3T3B0aW9uOiBfX2VzcmkuTWFwVmlld1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLm1hcCxcclxuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgfTtcclxuICAgIHRoaXMubWFwVmlldyA9IG5ldyBNYXBWaWV3KG1hcFZpZXdPcHRpb24pO1xyXG4gICAgdGhpcy5tYXBWaWV3LndoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMubWFwVmlldyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlU2NlbmVWaWV3ID0gKFNjZW5lVmlldywgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB0aGlzLmRlc3Ryb3lWaWV3KCk7XHJcbiAgICBjb25zdCBtYXBWaWV3T3B0aW9uOiBfX2VzcmkuU2NlbmVWaWV3UHJvcGVydGllcyA9IHtcclxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UubWFwLFxyXG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zY2VuZVZpZXcgPSBuZXcgdGhpcy5TY2VuZVZpZXcobWFwVmlld09wdGlvbik7XHJcbiAgICB0aGlzLnNjZW5lVmlldy53aGVuKFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLnNjZW5lVmlldyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgZGVzdHJveVZpZXcoKSB7XHJcbiAgICB0aGlzLm1hcFZpZXcgJiYgIXRoaXMubWFwVmlldy5kZXN0cm95ZWQgJiYgdGhpcy5tYXBWaWV3LmRlc3Ryb3koKTtcclxuICAgIHRoaXMuc2NlbmVWaWV3ICYmICF0aGlzLnNjZW5lVmlldy5kZXN0cm95ZWQgJiYgdGhpcy5zY2VuZVZpZXcuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFZpZXdNb2R1bGVzID0gYXN5bmMgKFxyXG4gICAgZGF0YVNvdXJjZTogTWFwRGF0YVNvdXJjZSxcclxuICApOiBQcm9taXNlPHR5cGVvZiBfX2VzcmkuTWFwVmlldyB8IHR5cGVvZiBfX2VzcmkuU2NlbmVWaWV3PiA9PiB7XHJcbiAgICBpZiAoZGF0YVNvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB7XHJcbiAgICAgIGlmICh0aGlzLk1hcFZpZXcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5NYXBWaWV3O1xyXG4gICAgICB9XHJcbiAgICAgIFt0aGlzLk1hcFZpZXddID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXCJlc3JpL3ZpZXdzL01hcFZpZXdcIl0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5NYXBWaWV3O1xyXG4gICAgfSBlbHNlIGlmIChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkge1xyXG4gICAgICBpZiAodGhpcy5TY2VuZVZpZXcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5TY2VuZVZpZXc7XHJcbiAgICAgIH1cclxuICAgICAgW3RoaXMuU2NlbmVWaWV3XSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1wiZXNyaS92aWV3cy9TY2VuZVZpZXdcIl0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5TY2VuZVZpZXc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKG51bGwpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcgJiYgamltdU1hcFZpZXcudmlldykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlZpc3RhIGRlIG1hcGEgY2FtYmlhZGEsIGNvbmZpZ3VyYW5kbyBpZGVudGlmaWNhY2nDs25cIik7XHJcbiAgICAgIHRoaXMuYWN0aXZlVmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XHJcbiAgICAgIHRoaXMuc2V0dXBDbGlja0hhbmRsZXIoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZFN0YXR1czogTG9hZFN0YXR1cy5GdWxmaWxsZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJWaXN0YSBkZSBtYXBhIHJlbW92aWRhXCIpO1xyXG4gICAgICB0aGlzLnJlbW92ZUNsaWNrSGFuZGxlcigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uRGF0YVNvdXJjZUNyZWF0ZWQgPSAoZGF0YVNvdXJjZSk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIHRoaXMuY3JlYXRlVmlld0J5RGF0YVNvdXJjZShkYXRhU291cmNlKVxyXG4gICAgICAudGhlbigodmlldykgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy5zZXR1cENsaWNrSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZFN0YXR1czogTG9hZFN0YXR1cy5GdWxmaWxsZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25DcmVhdGVEYXRhU291cmNlRmFpbGVkID0gKGVycm9yKTogdm9pZCA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYW5kbyBmdWVudGUgZGUgZGF0b3M6XCIsIGVycm9yKTtcclxuICB9O1xyXG5cclxuICBzZXR1cENsaWNrSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghdGhpcy5hY3RpdmVWaWV3KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gaGF5IHZpc3RhIGFjdGl2YSBwYXJhIGNvbmZpZ3VyYXIgY2xpY2sgaGFuZGxlclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ29uZmlndXJhbmRvIGNsaWNrIGhhbmRsZXIgcGFyYSBpZGVudGlmaWNhY2nDs25cIik7XHJcblxyXG4gICAgLy8gQ2FyZ2FyIG3Ds2R1bG9zIG5lY2VzYXJpb3NcclxuICAgIGNvbnN0IFtRdWVyeV0gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcImVzcmkvdGFza3Mvc3VwcG9ydC9RdWVyeVwiXSk7XHJcblxyXG4gICAgdGhpcy5jbGlja0hhbmRsZSA9IHRoaXMuYWN0aXZlVmlldy5vbihcImNsaWNrXCIsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNsaWMgZGV0ZWN0YWRvIGVuIGVsIG1hcGE6XCIsIGV2ZW50Lm1hcFBvaW50KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNJZGVudGlmeWluZzogdHJ1ZSxcclxuICAgICAgICBpZGVudGlmaWVkRmVhdHVyZXM6IFtdLFxyXG4gICAgICAgIGhhc0F0dGVtcHRlZElkZW50aWZ5OiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDcmVhciBxdWVyeSBwYXJhIGlkZW50aWZpY2FyIGZlYXR1cmVzIGNlcmNhIGRlbCBwdW50byBjbGljYWRvXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgICBxdWVyeS5nZW9tZXRyeSA9IGV2ZW50Lm1hcFBvaW50O1xyXG4gICAgICAgIHF1ZXJ5LmRpc3RhbmNlID0gMTA7IC8vIDEwIG1ldHJvcyBkZSB0b2xlcmFuY2lhXHJcbiAgICAgICAgcXVlcnkudW5pdHMgPSBcIm1ldGVyc1wiO1xyXG4gICAgICAgIHF1ZXJ5LnNwYXRpYWxSZWxhdGlvbnNoaXAgPSBcImludGVyc2VjdHNcIjtcclxuICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IGZhbHNlO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtcIipcIl07XHJcblxyXG4gICAgICAgIC8vIE9idGVuZXIgdG9kYXMgbGFzIGNhcGFzIGRlIGZlYXR1cmVzIHZpc2libGVzXHJcbiAgICAgICAgY29uc3QgZmVhdHVyZUxheWVycyA9IHRoaXMuYWN0aXZlVmlldy5tYXAuYWxsTGF5ZXJzXHJcbiAgICAgICAgICAuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIudmlzaWJsZSlcclxuICAgICAgICAgIC5maWx0ZXIoKGxheWVyKSA9PiBsYXllci50eXBlID09PSBcImZlYXR1cmVcIilcclxuICAgICAgICAgIC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FwYXMgZGUgZmVhdHVyZXMgZW5jb250cmFkYXM6XCIsIGZlYXR1cmVMYXllcnMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gQ29uc3VsdGFyIGNhZGEgY2FwYSBkZSBmZWF0dXJlc1xyXG4gICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgZmVhdHVyZUxheWVycykge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25zdWx0YW5kbyBjYXBhOlwiLCBsYXllci50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAobGF5ZXIgYXMgYW55KS5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICAgICAgY29uc3QgZmVhdHVyZXMgPSByZXN1bHQuZmVhdHVyZXMgfHwgW107XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICBgRW5jb250cmFkYXMgJHtmZWF0dXJlcy5sZW5ndGh9IGZlYXR1cmVzIGVuICR7bGF5ZXIudGl0bGV9YCxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGxheWVyTmFtZTogbGF5ZXIudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMubWFwKChmZWF0dXJlOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIGxheWVyTmFtZTogbGF5ZXIudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlGaWVsZE5hbWU6IChsYXllciBhcyBhbnkpLmRpc3BsYXlGaWVsZCxcclxuICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcclxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogZmVhdHVyZS5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEVycm9yIGNvbnN1bHRhbmRvIGNhcGEgJHtsYXllci50aXRsZX06YCwgZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHRhZG9zIGZpbmFsZXM6XCIsIHJlc3VsdHMubGVuZ3RoLCBcImNhcGFzIGNvbiBkYXRvc1wiKTtcclxuXHJcbiAgICAgICAgLy8gU2kgbm8gc2UgZW5jb250cmFyb24gcmVzdWx0YWRvcywgbW9zdHJhciBtZW5zYWplXHJcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNlIGVuY29udHJhcm9uIGZlYXR1cmVzIGVuIGVsIHB1bnRvIGNsaWNhZG9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlkZW50aWZpZWRGZWF0dXJlczogcmVzdWx0cyxcclxuICAgICAgICAgIGlzSWRlbnRpZnlpbmc6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBlbiBpZGVudGlmaWNhY2nDs246XCIsIGVycm9yKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNJZGVudGlmeWluZzogZmFsc2UgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ2xpY2sgaGFuZGxlciBjb25maWd1cmFkbyBjb3JyZWN0YW1lbnRlXCIpO1xyXG4gIH07XHJcblxyXG4gIHJlbW92ZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmNsaWNrSGFuZGxlKSB7XHJcbiAgICAgIHRoaXMuY2xpY2tIYW5kbGUucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuY2xpY2tIYW5kbGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZvcm1hdFZhbHVlID0gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIFwiTi9BXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHJldHVybiBcIltPYmpldG9dXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjbGVhclJlc3VsdHMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaWRlbnRpZmllZEZlYXR1cmVzOiBbXSxcclxuICAgICAgaGFzQXR0ZW1wdGVkSWRlbnRpZnk6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRmVhdHVyZUluZm8gPSAoZmVhdHVyZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBmZWF0dXJlLmF0dHJpYnV0ZXMgfHwge307XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2Y4ZjlmYVwiLFxyXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTllY2VmXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjEycHhcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0OTUwNTdcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtmZWF0dXJlLmxheWVyTmFtZSB8fCBcIkNhcGEgc2luIG5vbWJyZVwifVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7T2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4IDBcIixcclxuICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmMWYzZjRcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNTAwXCIsIGNvbG9yOiBcIiM2Yzc1N2RcIiB9fT57a2V5fTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM0OTUwNTdcIiwgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAge3RoaXMuZm9ybWF0VmFsdWUodmFsdWUpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHVzZU1hcFdpZGdldCA9XHJcbiAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdO1xyXG4gICAgY29uc3QgdXNlRGF0YVNvdXJjZSA9XHJcbiAgICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1swXTtcclxuXHJcbiAgICBsZXQgY29udGVudCA9IG51bGw7XHJcbiAgICBsZXQgZGF0YVNvdXJjZUNvbnRlbnQgPSBudWxsO1xyXG5cclxuICAgIGlmICh1c2VNYXBXaWRnZXQpIHtcclxuICAgICAgZGF0YVNvdXJjZUNvbnRlbnQgPSAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICBkYXRhU291cmNlQ29udGVudCA9IChcclxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxyXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cclxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3RoaXMub25EYXRhU291cmNlQ3JlYXRlZH1cclxuICAgICAgICAgIG9uQ3JlYXRlRGF0YVNvdXJjZUZhaWxlZD17dGhpcy5vbkNyZWF0ZURhdGFTb3VyY2VGYWlsZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXVzZU1hcFdpZGdldCAmJiAhdXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWxlZ2VuZFwiPlxyXG4gICAgICAgICAgPFdpZGdldFBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgIGljb249e251bGx9XHJcbiAgICAgICAgICAgIGF1dG9GbGlwXHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e3RoaXMucHJvcHMuaW50bD8uZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgaWQ6IFwiX3dpZGdldExhYmVsXCIsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5fd2lkZ2V0TGFiZWwsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgbG9hZGluZ0NvbnRlbnQgPSBudWxsO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkU3RhdHVzID09PSBMb2FkU3RhdHVzLlBlbmRpbmcgfHxcclxuICAgICAgICB0aGlzLnN0YXRlLmlzSWRlbnRpZnlpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgbG9hZGluZ0NvbnRlbnQgPSAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjNmM3NTdkXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNJZGVudGlmeWluZ1xyXG4gICAgICAgICAgICAgICAgPyBcIvCflI0gSWRlbnRpZmljYW5kby4uLlwiXHJcbiAgICAgICAgICAgICAgICA6IFwi4o+zIENhcmdhbmRvLi4uXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGVudCA9IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIEhlYWRlciAqL31cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEycHggMTZweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2Y4ZjlmYVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2U5ZWNlZlwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGdhcDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNDk1MDU3XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT7wn5SNPC9zcGFuPlxyXG4gICAgICAgICAgICAgIElkZW50aWZpY2FyIENhcGFzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaWRlbnRpZmllZEZlYXR1cmVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xlYXJSZXN1bHRzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZGMzNTQ1XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTGltcGlhclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEluc3RydWN0aW9ucyAqL31cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmlkZW50aWZpZWRGZWF0dXJlcy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUuaXNJZGVudGlmeWluZyAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzZjNzU3ZFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjhweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDwn5ONIEhheiBjbGljIGVuIGVsIG1hcGEgcGFyYSBpZGVudGlmaWNhciBjYXBhc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiwgY29sb3I6IFwiI2FkYjViZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBTZSBtb3N0cmFyw6FuIGxvcyBhdHJpYnV0b3MgZGUgbGFzIGZlYXR1cmVzIGVuY29udHJhZGFzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7LyogTm8gcmVzdWx0cyBtZXNzYWdlIC0gc2hvdyBhZnRlciBmaXJzdCBjbGljayAqL31cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmlkZW50aWZpZWRGZWF0dXJlcy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUuaXNJZGVudGlmeWluZyAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmhhc0F0dGVtcHRlZElkZW50aWZ5ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNmM3NTdkXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZTllY2VmXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjhweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDwn5SNIE5vIHNlIGVuY29udHJhcm9uIGZlYXR1cmVzIGVuIGVzdGEgdWJpY2FjacOzblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiwgY29sb3I6IFwiI2FkYjViZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBJbnRlbnRhIGhhY2VyIGNsaWMgZW4gb3RyYSDDoXJlYSBkZWwgbWFwYVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgey8qIFJlc3VsdHMgKi99XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pZGVudGlmaWVkRmVhdHVyZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiBcInRoaW5cIixcclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhckNvbG9yOiBcIiNjMWMxYzEgdHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaWRlbnRpZmllZEZlYXR1cmVzLm1hcCgobGF5ZXJSZXN1bHQsIGxheWVySW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsYXllckluZGV4fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNDk1MDU3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNlOWVjZWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg8J+Xgu+4jyB7bGF5ZXJSZXN1bHQubGF5ZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtsYXllclJlc3VsdC5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGZlYXR1cmVJbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZlYXR1cmVJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGAke2xheWVySW5kZXh9LSR7ZmVhdHVyZUluZGV4fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgey8qIExvYWRpbmcgb3ZlcmxheSAqL31cclxuICAgICAgICAgIHtsb2FkaW5nQ29udGVudH1cclxuXHJcbiAgICAgICAgICB7LyogSGlkZGVuIGRhdGEgc291cmNlICovfVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT57ZGF0YVNvdXJjZUNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNzcz17bnVsbH1cclxuICAgICAgICBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=