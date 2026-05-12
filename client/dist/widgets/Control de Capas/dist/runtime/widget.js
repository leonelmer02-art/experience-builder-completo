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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Control de Capas/src/runtime/style.css":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Control de Capas/src/runtime/style.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* 🔥 CONTENEDOR GENERAL */
.custom-legend-container {
  font-size: 12px;
  line-height: 1.2;
  transition: box-shadow 0.2s ease;
}

.custom-legend-container:hover {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* 🔥 CADA CAPA es la clasificacion o el simbolo segun sea la capa */
.custom-legend-container .esri-legend__layer {
  margin-top: 0px !important; /* 🔥 separación arriba */
  margin-bottom: 0px !important; /* separa capas entre sí baja la sigiente capa */
  padding-bottom: 2px !important;
}

/* 🔥 SERVICIOS (agrupadores) aqui es todo el contenido de cada simgologia */
.custom-legend-container .esri-legend__service {
  margin-top: 6px !important;
  margin-right: 0px !important;
  margin-left: 0px !important;
  padding-left: 6px !important;
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}

/* 🔥 GRUPOS */
.custom-legend-container .esri-legend__group-layer {
  margin: 0px !important;
  padding: 0px !important;
}

/* 🔥 TÍTULO DE clasificacion o atributo que se clasifica (SIN FONDO YA) */
.custom-legend-container .esri-legend__layer-caption {
  margin-top: 0px !important;
  padding: 0 !important; /* 🔥 más espacio abajo */
  background: transparent !important;
}

/* 🔥 CUERPO DE LA SIMBOLOGÍA */
.custom-legend-container .esri-legend__layer-body {
  margin: 0 !important;
  padding: 0 0 0 4px !important;
}

/* 🔥 CADA SÍMBOLO */
.custom-legend-container .esri-legend__symbol {
  margin: 0 !important;
  padding: 0 !important;
}

/* 🔥 ITEMS DE TABLA (MUY IMPORTANTE) */
.custom-legend-container .esri-legend__layer-table {
  margin: 0 !important;
}

/* 🔥 FILAS DE LA LEYENDA */
.custom-legend-container .esri-legend__layer-row {
  margin: 0 !important;
  padding: 0 !important;
}

/* 🔥 TEXTO */
.custom-legend-container .esri-legend__label {
  margin: 0 !important;
  padding: 0 !important;
}

/* 🔥 SCROLL MODERNO */
.custom-legend-container {
  scrollbar-width: auto;
  scrollbar-color: #c1c1c1 transparent;
}

.custom-legend-container::-webkit-scrollbar {
  width: 12px;
}

.custom-legend-container::-webkit-scrollbar-track {
  background: transparent;
}

.custom-legend-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.custom-legend-container::-webkit-scrollbar-thumb:hover {
  background: #9e9e9e;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/Control%20de%20Capas/src/runtime/style.css","webpack://./your-extensions/widgets/Control de Capas/src/runtime/style.css"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB,0BAAA;AACA;EACE,eAAA;EACA,gBAAA;EACA,gCAAA;ADEF;;ACCA;EACE,+CAAA;ADEF;;ACCA,oEAAA;AACA;EACE,0BAAA,EAAA,yBAAA;EACA,6BAAA,EAAA,gDAAA;EACA,8BAAA;ADEF;;ACCA,4EAAA;AACA;EACE,0BAAA;EACA,4BAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,2BAAA;ADEF;;ACCA,cAAA;AACA;EACE,sBAAA;EACA,uBAAA;ADEF;;ACCA,0EAAA;AACA;EACE,0BAAA;EACA,qBAAA,EAAA,yBAAA;EACA,kCAAA;ADEF;;ACCA,+BAAA;AACA;EACE,oBAAA;EACA,6BAAA;ADEF;;ACCA,oBAAA;AACA;EACE,oBAAA;EACA,qBAAA;ADEF;;ACCA,uCAAA;AACA;EACE,oBAAA;ADEF;;ACCA,2BAAA;AACA;EACE,oBAAA;EACA,qBAAA;ADEF;;ACCA,aAAA;AACA;EACE,oBAAA;EACA,qBAAA;ADEF;;ACCA,sBAAA;AACA;EACE,qBAAA;EACA,oCAAA;ADEF;;ACCA;EACE,WAAA;ADEF;;ACCA;EACE,uBAAA;ADEF;;ACCA;EACE,mBAAA;EACA,mBAAA;ADEF;;ACCA;EACE,mBAAA;ADEF","sourcesContent":["@charset \"UTF-8\";\n/* 🔥 CONTENEDOR GENERAL */\n.custom-legend-container {\n  font-size: 12px;\n  line-height: 1.2;\n  transition: box-shadow 0.2s ease;\n}\n\n.custom-legend-container:hover {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n/* 🔥 CADA CAPA es la clasificacion o el simbolo segun sea la capa */\n.custom-legend-container .esri-legend__layer {\n  margin-top: 0px !important; /* 🔥 separación arriba */\n  margin-bottom: 0px !important; /* separa capas entre sí baja la sigiente capa */\n  padding-bottom: 2px !important;\n}\n\n/* 🔥 SERVICIOS (agrupadores) aqui es todo el contenido de cada simgologia */\n.custom-legend-container .esri-legend__service {\n  margin-top: 6px !important;\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n  padding-left: 6px !important;\n  padding-bottom: 0px !important;\n  padding-top: 0px !important;\n}\n\n/* 🔥 GRUPOS */\n.custom-legend-container .esri-legend__group-layer {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n/* 🔥 TÍTULO DE clasificacion o atributo que se clasifica (SIN FONDO YA) */\n.custom-legend-container .esri-legend__layer-caption {\n  margin-top: 0px !important;\n  padding: 0 !important; /* 🔥 más espacio abajo */\n  background: transparent !important;\n}\n\n/* 🔥 CUERPO DE LA SIMBOLOGÍA */\n.custom-legend-container .esri-legend__layer-body {\n  margin: 0 !important;\n  padding: 0 0 0 4px !important;\n}\n\n/* 🔥 CADA SÍMBOLO */\n.custom-legend-container .esri-legend__symbol {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 ITEMS DE TABLA (MUY IMPORTANTE) */\n.custom-legend-container .esri-legend__layer-table {\n  margin: 0 !important;\n}\n\n/* 🔥 FILAS DE LA LEYENDA */\n.custom-legend-container .esri-legend__layer-row {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 TEXTO */\n.custom-legend-container .esri-legend__label {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 SCROLL MODERNO */\n.custom-legend-container {\n  scrollbar-width: auto;\n  scrollbar-color: #c1c1c1 transparent;\n}\n\n.custom-legend-container::-webkit-scrollbar {\n  width: 12px;\n}\n\n.custom-legend-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.custom-legend-container::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 10px;\n}\n\n.custom-legend-container::-webkit-scrollbar-thumb:hover {\n  background: #9e9e9e;\n}","@charset \"UTF-8\";\n/* 🔥 CONTENEDOR GENERAL */\n.custom-legend-container {\n  font-size: 12px;\n  line-height: 1.2;\n  transition: box-shadow 0.2s ease;\n}\n\n.custom-legend-container:hover {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n/* 🔥 CADA CAPA es la clasificacion o el simbolo segun sea la capa */\n.custom-legend-container .esri-legend__layer {\n  margin-top: 0px !important; /* 🔥 separación arriba */\n  margin-bottom: 0px !important; /* separa capas entre sí baja la sigiente capa */\n  padding-bottom: 2px !important;\n}\n\n/* 🔥 SERVICIOS (agrupadores) aqui es todo el contenido de cada simgologia */\n.custom-legend-container .esri-legend__service {\n  margin-top: 6px !important;\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n  padding-left: 6px !important;\n  padding-bottom: 0px !important;\n  padding-top: 0px !important;\n}\n\n/* 🔥 GRUPOS */\n.custom-legend-container .esri-legend__group-layer {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n/* 🔥 TÍTULO DE clasificacion o atributo que se clasifica (SIN FONDO YA) */\n.custom-legend-container .esri-legend__layer-caption {\n  margin-top: 0px !important;\n  padding: 0 !important; /* 🔥 más espacio abajo */\n  background: transparent !important;\n}\n\n/* 🔥 CUERPO DE LA SIMBOLOGÍA */\n.custom-legend-container .esri-legend__layer-body {\n  margin: 0 !important;\n  padding: 0 0 0 4px !important;\n}\n\n/* 🔥 CADA SÍMBOLO */\n.custom-legend-container .esri-legend__symbol {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 ITEMS DE TABLA (MUY IMPORTANTE) */\n.custom-legend-container .esri-legend__layer-table {\n  margin: 0 !important;\n}\n\n/* 🔥 FILAS DE LA LEYENDA */\n.custom-legend-container .esri-legend__layer-row {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 TEXTO */\n.custom-legend-container .esri-legend__label {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 SCROLL MODERNO */\n.custom-legend-container {\n  scrollbar-width: auto;\n  scrollbar-color: #c1c1c1 transparent;\n}\n\n.custom-legend-container::-webkit-scrollbar {\n  width: 12px;\n}\n\n.custom-legend-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.custom-legend-container::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 10px;\n}\n\n.custom-legend-container::-webkit-scrollbar-thumb:hover {\n  background: #9e9e9e;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./your-extensions/widgets/Control de Capas/src/runtime/style.css":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/runtime/style.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Control de Capas/src/runtime/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./your-extensions/widgets/Control de Capas/icon.svg":
/*!***********************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/icon.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 20\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M3 5 1.5 2 0 5zm16.318-2c.377 0 .682.224.682.5s-.305.5-.682.5H5.682C5.305 4 5 3.776 5 3.5s.305-.5.682-.5zM20 9.5c0-.276-.305-.5-.682-.5H5.682C5.305 9 5 9.224 5 9.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m0 6c0-.276-.305-.5-.682-.5H5.682c-.377 0-.682.224-.682.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m-17 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M3 8v3H0V8z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/Control de Capas/src/config.ts":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/config.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ELegendMode: () => (/* binding */ ELegendMode)
/* harmony export */ });
var ELegendMode;
(function (ELegendMode) {
    ELegendMode["ShowVisible"] = "show-visible";
    ELegendMode["ShowWithinExtent"] = "show-within-extent";
    ELegendMode["ShowAll"] = "show-all";
})(ELegendMode || (ELegendMode = {}));


/***/ }),

/***/ "./your-extensions/widgets/Control de Capas/src/runtime/lib/style.ts":
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/runtime/lib/style.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


function getStyle(theme, style) {
    var _a, _b, _c, _d, _e, _f, _g;
    const fillStyleCss = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle({ background: style.background });
    delete fillStyleCss.backgroundColor;
    const fontColor = style.fontColor || ((_c = (_b = (_a = theme.arcgis.widgets.legend.variants) === null || _a === void 0 ? void 0 : _a.default) === null || _b === void 0 ? void 0 : _b.root) === null || _c === void 0 ? void 0 : _c.color);
    const root = ((_d = style.background) === null || _d === void 0 ? void 0 : _d.color) || theme.sys.color.surface.paper;
    const cardRoot = theme.sys.color.surface.paper;
    // const cardCarousel = theme.surfaces[1].bg;
    // const cardCaption = theme.surfaces[1].bg;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${(_g = (_f = (_e = theme.arcgis.widgets.legend.variants) === null || _e === void 0 ? void 0 : _e.card) === null || _f === void 0 ? void 0 : _f.root) === null || _g === void 0 ? void 0 : _g.bg};*/
      background-color: ${root};
      position: relative;
      ${fillStyleCss}
      --calcite-color-text-2: ${fontColor};

      .esri-legend {
        background-color: transparent;
        color: ${fontColor};
        height: 100%;
        .esri-legend--card {
          .esri-legend--card__carousel {
            height: 100%;
            width: 100%;
            max-height: unset;
          }
        }
      }

      .esri-legend.esri-widget.esri-widget--panel {
        .esri-legend__layer {
          overflow-x: hidden;
        }
      }

      .esri-legend--card {
        background-color: transparent;
        color: ${fontColor};
        height: 100%;
      }

      .esri-legend--card.esri-legend--stacked{
      /*
        position: absolute;
        height: 100%;
        width: 100%;
      */
        flex-direction: column;
        justify-content: space-between;
      }

      .esri-legend--card__section {
        width: 100%;
        height: unset;
        margin-bottom: 32px;
      }

      .esri-legend--card__carousel-indicator-container {
        order: 1;
        color: ${fontColor};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        color: ${fontColor};
      }

      .esri-legend--card.esri-widget{
        background-color: ${cardRoot};
      }

      /* .esri-legend {
        background-color: ${theme.ref.palette.neutral[200]};
        color: ${theme.ref.palette.black}
      }

      .esri-widget__heading {
        color: ${theme.ref.palette.black};
      }

      .esri-legend--card.esri-widget{
        background-color: ${theme.ref.palette.neutral[400]};
        color: ${theme.ref.palette.black}
      }

      .esri-legend--card__section {
        width: 100%;
        background-color: ${theme.ref.palette.neutral[200]};
        color: ${theme.ref.palette.black}
      }

      .esri-legend--card__carousel-indicator-container {
        background-color: ${theme.ref.palette.neutral[400]};
      }

      .esri-legend--card__service {
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        background-color: ${theme.ref.palette.neutral[400]};
        color: ${theme.ref.palette.black};
      } */

      /*
      .esri-legend--card__carousel-indicator {
        background-color: ${theme.ref.palette.neutral[1200]};
      }
      */
	'.custom-legend-container .esri-legend__layer': {
  marginBottom: '4px !important'
},
'.custom-legend-container .esri-legend__layer-caption': {
  fontSize: '12px !important',
  marginBottom: '2px !important'
},
'.custom-legend-container .esri-legend__symbol': {
  marginBottom: '2px !important'
},
'.custom-legend-container .esri-legend__service': {
  marginBottom: '6px !important'
},
'.custom-legend-container .esri-legend__group-layer': {
  marginBottom: '4px !important'
},
'.custom-legend-container .esri-legend__layer-body': {
  marginLeft: '6px !important'
}


    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/Control de Capas/src/runtime/translations/default.ts":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/runtime/translations/default.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: "Capas y Simbologia",
});


/***/ }),

/***/ "./your-extensions/widgets/Control de Capas/src/version-manager.ts":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/version-manager.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   versionManager: () => (/* binding */ versionManager)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class VersionManager extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.BaseVersionManager {
    constructor() {
        super(...arguments);
        this.versions = [
            {
                version: '1.17.0',
                description: 'Update respectLayerDefinitionExp option',
                upgrader: (oldConfig) => {
                    const newConfig = oldConfig.set('respectLayerDefinitionExp', false);
                    return newConfig;
                }
            }
        ];
    }
}
const versionManager = new VersionManager();


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadStatus: () => (/* binding */ LoadStatus),
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/Control de Capas/src/config.ts");
/* harmony import */ var _lib_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/style */ "./your-extensions/widgets/Control de Capas/src/runtime/lib/style.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/Control de Capas/src/runtime/translations/default.ts");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icon.svg */ "./your-extensions/widgets/Control de Capas/icon.svg");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _version_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../version-manager */ "./your-extensions/widgets/Control de Capas/src/version-manager.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./your-extensions/widgets/Control de Capas/src/runtime/style.css");
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
        this.legendWrapperRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.legendContainerRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.mapContainerRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.createWebMapView = (MapView, resolve, reject) => {
            this.destroyView();
            const mapViewOption = {
                map: this.dataSource.map,
                container: this.mapContainerRef.current,
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
                container: this.mapContainerRef.current,
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
        this.destroyLegend = () => {
            this.legend && !this.legend.destroyed && this.legend.destroy();
        };
        this.createLegend = (view) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            this.activeView = view;
            if (!this.Legend) {
                [this.Legend] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(["esri/widgets/Legend"]);
            }
            yield view.when();
            this.destroyLegend();
            // Limpiamos el contenedor físico para evitar residuos
            if (this.legendContainerRef.current) {
                this.legendContainerRef.current.innerHTML = "";
            }
            const container = document.createElement("div");
            (_a = this.legendContainerRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(container);
            this.legend = new this.Legend({
                view: view,
                container: container,
            });
            this.configLegend();
            // 🔥 esperar a que renderice la leyenda
            setTimeout(() => {
                this.addCheckboxToLegend();
            }, 500);
        });
        this.configLegend = () => {
            if (this.legend) {
                const basemapLegendVisible = this.props.config.showBaseMap;
                this.legend.style = this.calculateStyle();
                this.legend.basemapLegendVisible = basemapLegendVisible;
                // 🔥 CLAVE: mantener todas las capas visibles en la leyenda
                this.legend.respectLayerVisibility = false;
                const legendMode = this.props.config.legendMode;
                if (legendMode === _config__WEBPACK_IMPORTED_MODULE_3__.ELegendMode.ShowWithinExtent) {
                    this.legend.hideLayersNotInCurrentView = true;
                }
            }
        };
        this.addCheckboxToLegend = () => {
            const container = this.legendContainerRef.current;
            if (!container || !this.activeView)
                return;
            const layers = container.querySelectorAll(".esri-legend__service");
            layers.forEach((layerNode) => {
                const titleElement = layerNode.querySelector(".esri-legend__service-label");
                if (!titleElement)
                    return;
                // evitar duplicados
                if (titleElement.dataset.hasControls === "true")
                    return;
                titleElement.dataset.hasControls = "true";
                const layerTitle = titleElement.innerText.trim();
                // 🔥 CAPA REAL
                const layer = this.activeView.map.allLayers.find((l) => l.title === layerTitle);
                // 🔥 BODY (simbología que se va a colapsar)
                const body = layerNode.querySelector(".esri-legend__layer-body, .esri-legend__layer-table");
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
        this.calculateStyle = () => {
            let style;
            const currentWidth = this.currentWidth || 100000; // window.innerWidth;
            if (this.legend) {
                if (this.props.config.cardStyle) {
                    let layout;
                    if (!this.props.config.cardLayout ||
                        this.props.config.cardLayout === "auto") {
                        if (currentWidth <= 600) {
                            layout = "stack";
                        }
                        else {
                            layout = "side-by-side";
                        }
                    }
                    else {
                        layout = this.props.config.cardLayout;
                    }
                    style = {
                        type: "card",
                        layout: layout,
                    };
                }
                else {
                    style = "classic";
                }
            }
            else {
                style = "classic";
            }
            return style;
        };
        this.onActiveViewChange = (jimuMapView) => {
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
            }
            else {
                this.destroyLegend();
            }
        };
        this.onDataSourceCreated = (dataSource) => {
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
        this.onCreateDataSourceFailed = (error) => { };
        this.onResize = ({ width, height }) => {
            this.currentWidth = width;
            if (this.legend && this.props.config.cardLayout === "auto") {
                const style = this.calculateStyle();
                this.legend.style = style;
            }
        };
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        // This option needs to refresh the legend to take effect
        if (this.props.config !== prevProps.config) {
            this.setState({ widgetKey: Math.random() });
        }
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
    getDefaultStyleConfig() {
        return {
            useCustom: false,
            background: {
                color: "",
                fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.FillType.FILL,
            },
            fontColor: "",
        };
    }
    getStyleConfig() {
        if (this.props.config.style && this.props.config.style.useCustom) {
            return this.props.config.style;
        }
        else {
            return this.getDefaultStyleConfig();
        }
    }
    render() {
        var _a;
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
            this.destroyLegend();
            content = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-legend" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.WidgetPlaceholder, { icon: (_icon_svg__WEBPACK_IMPORTED_MODULE_6___default()), autoFlip: true, message: this.props.intl.formatMessage({
                        id: "_widgetLabel",
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"]._widgetLabel,
                    }), widgetId: this.props.id })));
        }
        else {
            let loadingContent = null;
            if (this.state.loadStatus === LoadStatus.Pending) {
                loadingContent = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "jimu-secondary-loading" });
            }
            if (window.jimuConfig.isInBuilder) {
                this.configLegend();
            }
            content = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: this.state.widgetKey, ref: this.legendWrapperRef, style: {
                    background: "transparent",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    padding: "10px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                } },
                loadingContent,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: this.legendContainerRef, className: "custom-legend-container", style: {
                        flex: 1,
                        overflowY: "auto",
                        padding: "6px 6px 6px 4px",
                        borderRadius: "8px",
                        background: "#fafafa",
                        border: "1px solid #e6e6e6",
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
                    } }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: this.mapContainerRef, style: { display: "none" } }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "none" } }, dataSourceContent),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactResizeDetector, { targetRef: this.legendWrapperRef, handleHeight: true, handleWidth: true, onResize: this.onResize })));
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,_lib_style__WEBPACK_IMPORTED_MODULE_4__.getStyle)(this.props.theme, this.getStyleConfig()), className: "jimu-widget" }, content));
    }
}
Widget.versionManager = _version_manager__WEBPACK_IMPORTED_MODULE_7__.versionManager;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9Db250cm9sIGRlIENhcGFzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seU5BQXlOLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxzQkFBc0Isc0JBQXNCLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxVQUFVLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsc0JBQXNCLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxN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QUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0NvbnRyb2wgZGUgQ2FwYXMvc3JjL3J1bnRpbWUvc3R5bGUuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQ29udHJvbCBkZSBDYXBhcy9zcmMvcnVudGltZS9zdHlsZS5jc3M/M2UyYyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9Db250cm9sIGRlIENhcGFzL2ljb24uc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9Db250cm9sIGRlIENhcGFzL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0NvbnRyb2wgZGUgQ2FwYXMvc3JjL3J1bnRpbWUvbGliL3N0eWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9Db250cm9sIGRlIENhcGFzL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9Db250cm9sIGRlIENhcGFzL3NyYy92ZXJzaW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0NvbnRyb2wgZGUgQ2FwYXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyog8J+UpSBDT05URU5FRE9SIEdFTkVSQUwgKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2U7XG59XG5cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4vKiDwn5SlIENBREEgQ0FQQSBlcyBsYSBjbGFzaWZpY2FjaW9uIG8gZWwgc2ltYm9sbyBzZWd1biBzZWEgbGEgY2FwYSAqL1xuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXIge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDsgLyog8J+UpSBzZXBhcmFjacOzbiBhcnJpYmEgKi9cbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7IC8qIHNlcGFyYSBjYXBhcyBlbnRyZSBzw60gYmFqYSBsYSBzaWdpZW50ZSBjYXBhICovXG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLyog8J+UpSBTRVJWSUNJT1MgKGFncnVwYWRvcmVzKSBhcXVpIGVzIHRvZG8gZWwgY29udGVuaWRvIGRlIGNhZGEgc2ltZ29sb2dpYSAqL1xuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fc2VydmljZSB7XG4gIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4vKiDwn5SlIEdSVVBPUyAqL1xuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fZ3JvdXAtbGF5ZXIge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLyog8J+UpSBUw41UVUxPIERFIGNsYXNpZmljYWNpb24gbyBhdHJpYnV0byBxdWUgc2UgY2xhc2lmaWNhIChTSU4gRk9ORE8gWUEpICovXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1jYXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgLyog8J+UpSBtw6FzIGVzcGFjaW8gYWJham8gKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyog8J+UpSBDVUVSUE8gREUgTEEgU0lNQk9MT0fDjUEgKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyLWJvZHkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAwIDAgNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIPCflKUgQ0FEQSBTw41NQk9MTyAqL1xuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fc3ltYm9sIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLyog8J+UpSBJVEVNUyBERSBUQUJMQSAoTVVZIElNUE9SVEFOVEUpICovXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci10YWJsZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4vKiDwn5SlIEZJTEFTIERFIExBIExFWUVOREEgKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyLXJvdyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8qIPCflKUgVEVYVE8gKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xhYmVsIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLyog8J+UpSBTQ1JPTEwgTU9ERVJOTyAqL1xuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBhdXRvO1xuICBzY3JvbGxiYXItY29sb3I6ICNjMWMxYzEgdHJhbnNwYXJlbnQ7XG59XG5cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTJweDtcbn1cblxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2MxYzFjMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5ZTllOWU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9Db250cm9sJTIwZGUlMjBDYXBhcy9zcmMvcnVudGltZS9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0NvbnRyb2wgZGUgQ2FwYXMvc3JjL3J1bnRpbWUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQiwwQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QURFRjs7QUNDQTtFQUNFLCtDQUFBO0FERUY7O0FDQ0Esb0VBQUE7QUFDQTtFQUNFLDBCQUFBLEVBQUEseUJBQUE7RUFDQSw2QkFBQSxFQUFBLGdEQUFBO0VBQ0EsOEJBQUE7QURFRjs7QUNDQSw0RUFBQTtBQUNBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FERUY7O0FDQ0EsY0FBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBREVGOztBQ0NBLDBFQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLHFCQUFBLEVBQUEseUJBQUE7RUFDQSxrQ0FBQTtBREVGOztBQ0NBLCtCQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0FERUY7O0FDQ0Esb0JBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QURFRjs7QUNDQSx1Q0FBQTtBQUNBO0VBQ0Usb0JBQUE7QURFRjs7QUNDQSwyQkFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBREVGOztBQ0NBLGFBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QURFRjs7QUNDQSxzQkFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtBREVGOztBQ0NBO0VBQ0UsV0FBQTtBREVGOztBQ0NBO0VBQ0UsdUJBQUE7QURFRjs7QUNDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QURFRjs7QUNDQTtFQUNFLG1CQUFBO0FERUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDwn5SlIENPTlRFTkVET1IgR0VORVJBTCAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxufVxcblxcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuXFxuLyog8J+UpSBDQURBIENBUEEgZXMgbGEgY2xhc2lmaWNhY2lvbiBvIGVsIHNpbWJvbG8gc2VndW4gc2VhIGxhIGNhcGEgKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllciB7XFxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDsgLyog8J+UpSBzZXBhcmFjacOzbiBhcnJpYmEgKi9cXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50OyAvKiBzZXBhcmEgY2FwYXMgZW50cmUgc8OtIGJhamEgbGEgc2lnaWVudGUgY2FwYSAqL1xcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIFNFUlZJQ0lPUyAoYWdydXBhZG9yZXMpIGFxdWkgZXMgdG9kbyBlbCBjb250ZW5pZG8gZGUgY2FkYSBzaW1nb2xvZ2lhICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fc2VydmljZSB7XFxuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIEdSVVBPUyAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2dyb3VwLWxheWVyIHtcXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLyog8J+UpSBUw41UVUxPIERFIGNsYXNpZmljYWNpb24gbyBhdHJpYnV0byBxdWUgc2UgY2xhc2lmaWNhIChTSU4gRk9ORE8gWUEpICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXItY2FwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgLyog8J+UpSBtw6FzIGVzcGFjaW8gYWJham8gKi9cXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgQ1VFUlBPIERFIExBIFNJTUJPTE9Hw41BICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXItYm9keSB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgMCAwIDRweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIENBREEgU8ONTUJPTE8gKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19zeW1ib2wge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgSVRFTVMgREUgVEFCTEEgKE1VWSBJTVBPUlRBTlRFKSAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyLXRhYmxlIHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIEZJTEFTIERFIExBIExFWUVOREEgKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1yb3cge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgVEVYVE8gKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYWJlbCB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLyog8J+UpSBTQ1JPTEwgTU9ERVJOTyAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciB7XFxuICBzY3JvbGxiYXItd2lkdGg6IGF1dG87XFxuICBzY3JvbGxiYXItY29sb3I6ICNjMWMxYzEgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEycHg7XFxufVxcblxcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogI2MxYzFjMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzllOWU5ZTtcXG59XCIsXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIPCflKUgQ09OVEVORURPUiBHRU5FUkFMICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZTtcXG59XFxuXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbn1cXG5cXG4vKiDwn5SlIENBREEgQ0FQQSBlcyBsYSBjbGFzaWZpY2FjaW9uIG8gZWwgc2ltYm9sbyBzZWd1biBzZWEgbGEgY2FwYSAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyIHtcXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50OyAvKiDwn5SlIHNlcGFyYWNpw7NuIGFycmliYSAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7IC8qIHNlcGFyYSBjYXBhcyBlbnRyZSBzw60gYmFqYSBsYSBzaWdpZW50ZSBjYXBhICovXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgU0VSVklDSU9TIChhZ3J1cGFkb3JlcykgYXF1aSBlcyB0b2RvIGVsIGNvbnRlbmlkbyBkZSBjYWRhIHNpbWdvbG9naWEgKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19zZXJ2aWNlIHtcXG4gIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgR1JVUE9TICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fZ3JvdXAtbGF5ZXIge1xcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIFTDjVRVTE8gREUgY2xhc2lmaWNhY2lvbiBvIGF0cmlidXRvIHF1ZSBzZSBjbGFzaWZpY2EgKFNJTiBGT05ETyBZQSkgKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1jYXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50OyAvKiDwn5SlIG3DoXMgZXNwYWNpbyBhYmFqbyAqL1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuXFxuLyog8J+UpSBDVUVSUE8gREUgTEEgU0lNQk9MT0fDjUEgKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1ib2R5IHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAwIDAgNHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgQ0FEQSBTw41NQk9MTyAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX3N5bWJvbCB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLyog8J+UpSBJVEVNUyBERSBUQUJMQSAoTVVZIElNUE9SVEFOVEUpICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXItdGFibGUge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgRklMQVMgREUgTEEgTEVZRU5EQSAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyLXJvdyB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLyog8J+UpSBURVhUTyAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xhYmVsIHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIFNDUk9MTCBNT0RFUk5PICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIHtcXG4gIHNjcm9sbGJhci13aWR0aDogYXV0bztcXG4gIHNjcm9sbGJhci1jb2xvcjogI2MxYzFjMSB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTJweDtcXG59XFxuXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjOWU5ZTllO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zIDUgMS41IDIgMCA1em0xNi4zMTgtMmMuMzc3IDAgLjY4Mi4yMjQuNjgyLjVzLS4zMDUuNS0uNjgyLjVINS42ODJDNS4zMDUgNCA1IDMuNzc2IDUgMy41cy4zMDUtLjUuNjgyLS41ek0yMCA5LjVjMC0uMjc2LS4zMDUtLjUtLjY4Mi0uNUg1LjY4MkM1LjMwNSA5IDUgOS4yMjQgNSA5LjVzLjMwNS41LjY4Mi41aDEzLjYzNmMuMzc3IDAgLjY4Mi0uMjI0LjY4Mi0uNW0wIDZjMC0uMjc2LS4zMDUtLjUtLjY4Mi0uNUg1LjY4MmMtLjM3NyAwLS42ODIuMjI0LS42ODIuNXMuMzA1LjUuNjgyLjVoMTMuNjM2Yy4zNzcgMCAuNjgyLS4yMjQuNjgyLS41bS0xNyAwYTEuNSAxLjUgMCAxIDAtMyAwIDEuNSAxLjUgMCAwIDAgMyAwTTMgOHYzSDBWOHpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHR5cGUgeyBJbW11dGFibGVPYmplY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgQmFja2dyb3VuZFN0eWxlIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmV4cG9ydCBlbnVtIEVMZWdlbmRNb2RlIHtcclxuICBTaG93VmlzaWJsZSA9ICdzaG93LXZpc2libGUnLFxyXG4gIFNob3dXaXRoaW5FeHRlbnQgPSAnc2hvdy13aXRoaW4tZXh0ZW50JyxcclxuICBTaG93QWxsID0gJ3Nob3ctYWxsJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlIHtcclxuICB1c2VDdXN0b206IGJvb2xlYW5cclxuICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kU3R5bGVcclxuICBmb250Q29sb3I6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgc2hvd0Jhc2VNYXA/OiBib29sZWFuXHJcbiAgY2FyZFN0eWxlPzogYm9vbGVhblxyXG4gIGNhcmRMYXlvdXQ/OiAnYXV0bycgfCAnc2lkZS1ieS1zaWRlJyB8ICdzdGFjaydcclxuICBsZWdlbmRNb2RlPzogRUxlZ2VuZE1vZGVcclxuICByZXNwZWN0TGF5ZXJEZWZpbml0aW9uRXhwPzogYm9vbGVhblxyXG4gIHN0eWxlOiBTdHlsZVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcbiIsImltcG9ydCB7IHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgY3NzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHN0eWxlVXRpbHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgdHlwZSB7IFN0eWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcywgc3R5bGU6IFN0eWxlKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgY29uc3QgZmlsbFN0eWxlQ3NzID0gc3R5bGVVdGlscy50b0NTU1N0eWxlKHsgYmFja2dyb3VuZDogc3R5bGUuYmFja2dyb3VuZCB9KSBhcyBhbnlcclxuICBkZWxldGUgZmlsbFN0eWxlQ3NzLmJhY2tncm91bmRDb2xvclxyXG4gIGNvbnN0IGZvbnRDb2xvciA9IHN0eWxlLmZvbnRDb2xvciB8fCB0aGVtZS5hcmNnaXMud2lkZ2V0cy5sZWdlbmQudmFyaWFudHM/LmRlZmF1bHQ/LnJvb3Q/LmNvbG9yXHJcbiAgY29uc3Qgcm9vdCA9IHN0eWxlLmJhY2tncm91bmQ/LmNvbG9yIHx8IHRoZW1lLnN5cy5jb2xvci5zdXJmYWNlLnBhcGVyXHJcbiAgY29uc3QgY2FyZFJvb3QgPSB0aGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5wYXBlclxyXG4gIC8vIGNvbnN0IGNhcmRDYXJvdXNlbCA9IHRoZW1lLnN1cmZhY2VzWzFdLmJnO1xyXG4gIC8vIGNvbnN0IGNhcmRDYXB0aW9uID0gdGhlbWUuc3VyZmFjZXNbMV0uYmc7XHJcblxyXG4gIHJldHVybiBjc3NgXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC53aWRnZXQtbGVnZW5kIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMzJweDtcclxuICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmFyY2dpcy53aWRnZXRzLmxlZ2VuZC52YXJpYW50cz8uY2FyZD8ucm9vdD8uYmd9OyovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cm9vdH07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJHtmaWxsU3R5bGVDc3N9XHJcbiAgICAgIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTI6ICR7Zm9udENvbG9yfTtcclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICR7Zm9udENvbG9yfTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmVzcmktbGVnZW5kLS1jYXJkIHtcclxuICAgICAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZF9fY2Fyb3VzZWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC5lc3JpLXdpZGdldC5lc3JpLXdpZGdldC0tcGFuZWwge1xyXG4gICAgICAgIC5lc3JpLWxlZ2VuZF9fbGF5ZXIge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmVzcmktbGVnZW5kLS1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogJHtmb250Q29sb3J9O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVzcmktbGVnZW5kLS1jYXJkLmVzcmktbGVnZW5kLS1zdGFja2Vke1xyXG4gICAgICAvKlxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICovXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZF9fc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiB1bnNldDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXNyaS1sZWdlbmQtLWNhcmRfX2Nhcm91c2VsLWluZGljYXRvci1jb250YWluZXIge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIGNvbG9yOiAke2ZvbnRDb2xvcn07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXNyaS1sZWdlbmQtLWNhcmRfX3NlcnZpY2UtY2FwdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIGNvbG9yOiAke2ZvbnRDb2xvcn07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZC5lc3JpLXdpZGdldHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NhcmRSb290fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogLmVzcmktbGVnZW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLm5ldXRyYWxbMjAwXX07XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUuYmxhY2t9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLXdpZGdldF9faGVhZGluZyB7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUuYmxhY2t9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXNyaS1sZWdlbmQtLWNhcmQuZXNyaS13aWRnZXR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS5uZXV0cmFsWzQwMF19O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLmJsYWNrfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXNyaS1sZWdlbmQtLWNhcmRfX3NlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFsyMDBdfTtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS5ibGFja31cclxuICAgICAgfVxyXG5cclxuICAgICAgLmVzcmktbGVnZW5kLS1jYXJkX19jYXJvdXNlbC1pbmRpY2F0b3ItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLm5ldXRyYWxbNDAwXX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZF9fc2VydmljZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZF9fc2VydmljZS1jYXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS5uZXV0cmFsWzQwMF19O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLmJsYWNrfTtcclxuICAgICAgfSAqL1xyXG5cclxuICAgICAgLypcclxuICAgICAgLmVzcmktbGVnZW5kLS1jYXJkX19jYXJvdXNlbC1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFsxMjAwXX07XHJcbiAgICAgIH1cclxuICAgICAgKi9cclxuXHQnLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXInOiB7XHJcbiAgbWFyZ2luQm90dG9tOiAnNHB4ICFpbXBvcnRhbnQnXHJcbn0sXHJcbicuY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1jYXB0aW9uJzoge1xyXG4gIGZvbnRTaXplOiAnMTJweCAhaW1wb3J0YW50JyxcclxuICBtYXJnaW5Cb3R0b206ICcycHggIWltcG9ydGFudCdcclxufSxcclxuJy5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX3N5bWJvbCc6IHtcclxuICBtYXJnaW5Cb3R0b206ICcycHggIWltcG9ydGFudCdcclxufSxcclxuJy5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX3NlcnZpY2UnOiB7XHJcbiAgbWFyZ2luQm90dG9tOiAnNnB4ICFpbXBvcnRhbnQnXHJcbn0sXHJcbicuY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19ncm91cC1sYXllcic6IHtcclxuICBtYXJnaW5Cb3R0b206ICc0cHggIWltcG9ydGFudCdcclxufSxcclxuJy5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyLWJvZHknOiB7XHJcbiAgbWFyZ2luTGVmdDogJzZweCAhaW1wb3J0YW50J1xyXG59XHJcblxyXG5cclxuICAgIH1cclxuICBgXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogXCJDYXBhcyB5IFNpbWJvbG9naWFcIixcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBCYXNlVmVyc2lvbk1hbmFnZXJcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuL2NvbmZpZydcclxuXHJcbmNsYXNzIFZlcnNpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVZlcnNpb25NYW5hZ2VyIHtcclxuICB2ZXJzaW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgdmVyc2lvbjogJzEuMTcuMCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXBkYXRlIHJlc3BlY3RMYXllckRlZmluaXRpb25FeHAgb3B0aW9uJyxcclxuICAgICAgdXBncmFkZXI6IChvbGRDb25maWc6IElNQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gb2xkQ29uZmlnLnNldCgncmVzcGVjdExheWVyRGVmaW5pdGlvbkV4cCcsIGZhbHNlKVxyXG4gICAgICAgIHJldHVybiBuZXdDb25maWdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZlcnNpb25NYW5hZ2VyID0gbmV3IFZlcnNpb25NYW5hZ2VyKClcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LFxyXG4gIGpzeCxcclxuICB0eXBlIEFsbFdpZGdldFByb3BzLFxyXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXHJcbiAgUmVhY3RSZXNpemVEZXRlY3RvcixcclxuICB0eXBlIE1hcERhdGFTb3VyY2UsXHJcbiAgRGF0YVNvdXJjZVR5cGVzLFxyXG59IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxyXG4gIHR5cGUgSmltdU1hcFZpZXcsXHJcbn0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcbmltcG9ydCB7IFdpZGdldFBsYWNlaG9sZGVyLCBGaWxsVHlwZSB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IEVMZWdlbmRNb2RlLCB0eXBlIElNQ29uZmlnLCB0eXBlIFN0eWxlIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsZSB9IGZyb20gXCIuL2xpYi9zdHlsZVwiO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcbmltcG9ydCBsZWdlbmRJY29uIGZyb20gXCIuLi8uLi9pY29uLnN2Z1wiO1xyXG5pbXBvcnQgeyB2ZXJzaW9uTWFuYWdlciB9IGZyb20gXCIuLi92ZXJzaW9uLW1hbmFnZXJcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBlbnVtIExvYWRTdGF0dXMge1xyXG4gIFBlbmRpbmcgPSBcIlBlbmRpbmdcIixcclxuICBGdWxmaWxsZWQgPSBcIkZ1bGZpbGxlZFwiLFxyXG4gIFJlamVjdGVkID0gXCJSZWplY3RlZFwiLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFByb3BzIGV4dGVuZHMgQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcclxuICBsb2FkU3RhdHVzOiBMb2FkU3RhdHVzO1xyXG4gIHdpZGdldEtleTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gIFdpZGdldFByb3BzLFxyXG4gIFdpZGdldFN0YXRlXHJcbj4ge1xyXG4gIHByaXZhdGUgZGF0YVNvdXJjZTogTWFwRGF0YVNvdXJjZTtcclxuICBwcml2YXRlIG1hcFZpZXc6IF9fZXNyaS5NYXBWaWV3O1xyXG4gIHByaXZhdGUgc2NlbmVWaWV3OiBfX2VzcmkuU2NlbmVWaWV3O1xyXG4gIHByaXZhdGUgTWFwVmlldzogdHlwZW9mIF9fZXNyaS5NYXBWaWV3O1xyXG4gIHByaXZhdGUgU2NlbmVWaWV3OiB0eXBlb2YgX19lc3JpLlNjZW5lVmlldztcclxuICBwcml2YXRlIGxlZ2VuZDogX19lc3JpLkxlZ2VuZDtcclxuICBwcml2YXRlIExlZ2VuZDogdHlwZW9mIF9fZXNyaS5MZWdlbmQ7XHJcbiAgcHJpdmF0ZSBjdXJyZW50V2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIGFjdGl2ZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldztcclxuXHJcbiAgbGVnZW5kV3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBsZWdlbmRDb250YWluZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgbWFwQ29udGFpbmVyUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICBzdGF0aWMgdmVyc2lvbk1hbmFnZXIgPSB2ZXJzaW9uTWFuYWdlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxvYWRTdGF0dXM6IExvYWRTdGF0dXMuUGVuZGluZyxcclxuICAgICAgd2lkZ2V0S2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8gMi4gRGVzdHJ1aW1vcyBsYSB2aXN0YSBkZWwgbWFwYS9lc2NlbmFcclxuICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcclxuXHJcbiAgICAvLyAzLiBEZXN0cnVpbW9zIGxhIGxleWVuZGFcclxuICAgIHRoaXMuZGVzdHJveUxlZ2VuZCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKFxyXG4gICAgcHJldlByb3BzOiBSZWFkb25seTxXaWRnZXRQcm9wcz4sXHJcbiAgICBwcmV2U3RhdGU6IFJlYWRvbmx5PFdpZGdldFN0YXRlPixcclxuICAgIHNuYXBzaG90PzogYW55LFxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gVGhpcyBvcHRpb24gbmVlZHMgdG8gcmVmcmVzaCB0aGUgbGVnZW5kIHRvIHRha2UgZWZmZWN0XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcgIT09IHByZXZQcm9wcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZGdldEtleTogTWF0aC5yYW5kb20oKSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVZpZXdCeURhdGFTb3VyY2UoXHJcbiAgICBkYXRhU291cmNlOiBNYXBEYXRhU291cmNlLFxyXG4gICk6IFByb21pc2U8X19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5sb2FkVmlld01vZHVsZXMoZGF0YVNvdXJjZSkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8X19lc3JpLk1hcFZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlV2ViTWFwVmlldyh0aGlzLk1hcFZpZXcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8X19lc3JpLlNjZW5lVmlldz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVTY2VuZVZpZXcodGhpcy5TY2VuZVZpZXcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihudWxsKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlV2ViTWFwVmlldyA9IChNYXBWaWV3LCByZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcclxuICAgIGNvbnN0IG1hcFZpZXdPcHRpb246IF9fZXNyaS5NYXBWaWV3UHJvcGVydGllcyA9IHtcclxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UubWFwLFxyXG4gICAgICBjb250YWluZXI6IHRoaXMubWFwQ29udGFpbmVyUmVmLmN1cnJlbnQsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5tYXBWaWV3ID0gbmV3IE1hcFZpZXcobWFwVmlld09wdGlvbik7XHJcbiAgICB0aGlzLm1hcFZpZXcud2hlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5tYXBWaWV3KTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVTY2VuZVZpZXcgPSAoU2NlbmVWaWV3LCByZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcclxuICAgIGNvbnN0IG1hcFZpZXdPcHRpb246IF9fZXNyaS5TY2VuZVZpZXdQcm9wZXJ0aWVzID0ge1xyXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5tYXAsXHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5tYXBDb250YWluZXJSZWYuY3VycmVudCxcclxuICAgIH07XHJcbiAgICB0aGlzLnNjZW5lVmlldyA9IG5ldyB0aGlzLlNjZW5lVmlldyhtYXBWaWV3T3B0aW9uKTtcclxuICAgIHRoaXMuc2NlbmVWaWV3LndoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuc2NlbmVWaWV3KTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBkZXN0cm95VmlldygpIHtcclxuICAgIHRoaXMubWFwVmlldyAmJiAhdGhpcy5tYXBWaWV3LmRlc3Ryb3llZCAmJiB0aGlzLm1hcFZpZXcuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5zY2VuZVZpZXcgJiYgIXRoaXMuc2NlbmVWaWV3LmRlc3Ryb3llZCAmJiB0aGlzLnNjZW5lVmlldy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBsb2FkVmlld01vZHVsZXMgPSBhc3luYyAoXHJcbiAgICBkYXRhU291cmNlOiBNYXBEYXRhU291cmNlLFxyXG4gICk6IFByb21pc2U8dHlwZW9mIF9fZXNyaS5NYXBWaWV3IHwgdHlwZW9mIF9fZXNyaS5TY2VuZVZpZXc+ID0+IHtcclxuICAgIGlmIChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHtcclxuICAgICAgaWYgKHRoaXMuTWFwVmlldykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLk1hcFZpZXc7XHJcbiAgICAgIH1cclxuICAgICAgW3RoaXMuTWFwVmlld10gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcImVzcmkvdmlld3MvTWFwVmlld1wiXSk7XHJcbiAgICAgIHJldHVybiB0aGlzLk1hcFZpZXc7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7XHJcbiAgICAgIGlmICh0aGlzLlNjZW5lVmlldykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlNjZW5lVmlldztcclxuICAgICAgfVxyXG4gICAgICBbdGhpcy5TY2VuZVZpZXddID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXCJlc3JpL3ZpZXdzL1NjZW5lVmlld1wiXSk7XHJcbiAgICAgIHJldHVybiB0aGlzLlNjZW5lVmlldztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobnVsbCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRlc3Ryb3lMZWdlbmQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmxlZ2VuZCAmJiAhdGhpcy5sZWdlbmQuZGVzdHJveWVkICYmIHRoaXMubGVnZW5kLmRlc3Ryb3koKTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVMZWdlbmQgPSBhc3luYyAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3KSA9PiB7XHJcbiAgICB0aGlzLmFjdGl2ZVZpZXcgPSB2aWV3O1xyXG5cclxuICAgIGlmICghdGhpcy5MZWdlbmQpIHtcclxuICAgICAgW3RoaXMuTGVnZW5kXSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1wiZXNyaS93aWRnZXRzL0xlZ2VuZFwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdmlldy53aGVuKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3lMZWdlbmQoKTtcclxuXHJcbiAgICAvLyBMaW1waWFtb3MgZWwgY29udGVuZWRvciBmw61zaWNvIHBhcmEgZXZpdGFyIHJlc2lkdW9zXHJcbiAgICBpZiAodGhpcy5sZWdlbmRDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLmxlZ2VuZENvbnRhaW5lclJlZi5jdXJyZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMubGVnZW5kQ29udGFpbmVyUmVmLmN1cnJlbnQ/LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5sZWdlbmQgPSBuZXcgdGhpcy5MZWdlbmQoe1xyXG4gICAgICB2aWV3OiB2aWV3LFxyXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29uZmlnTGVnZW5kKCk7XHJcblxyXG4gICAgLy8g8J+UpSBlc3BlcmFyIGEgcXVlIHJlbmRlcmljZSBsYSBsZXllbmRhXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hZGRDaGVja2JveFRvTGVnZW5kKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbmZpZ0xlZ2VuZCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xyXG4gICAgICBjb25zdCBiYXNlbWFwTGVnZW5kVmlzaWJsZSA9IHRoaXMucHJvcHMuY29uZmlnLnNob3dCYXNlTWFwO1xyXG5cclxuICAgICAgdGhpcy5sZWdlbmQuc3R5bGUgPSB0aGlzLmNhbGN1bGF0ZVN0eWxlKCk7XHJcbiAgICAgIHRoaXMubGVnZW5kLmJhc2VtYXBMZWdlbmRWaXNpYmxlID0gYmFzZW1hcExlZ2VuZFZpc2libGU7XHJcblxyXG4gICAgICAvLyDwn5SlIENMQVZFOiBtYW50ZW5lciB0b2RhcyBsYXMgY2FwYXMgdmlzaWJsZXMgZW4gbGEgbGV5ZW5kYVxyXG4gICAgICB0aGlzLmxlZ2VuZC5yZXNwZWN0TGF5ZXJWaXNpYmlsaXR5ID0gZmFsc2U7XHJcblxyXG4gICAgICBjb25zdCBsZWdlbmRNb2RlID0gdGhpcy5wcm9wcy5jb25maWcubGVnZW5kTW9kZTtcclxuXHJcbiAgICAgIGlmIChsZWdlbmRNb2RlID09PSBFTGVnZW5kTW9kZS5TaG93V2l0aGluRXh0ZW50KSB7XHJcbiAgICAgICAgdGhpcy5sZWdlbmQuaGlkZUxheWVyc05vdEluQ3VycmVudFZpZXcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYWRkQ2hlY2tib3hUb0xlZ2VuZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMubGVnZW5kQ29udGFpbmVyUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoIWNvbnRhaW5lciB8fCAhdGhpcy5hY3RpdmVWaWV3KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbGF5ZXJzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXNyaS1sZWdlbmRfX3NlcnZpY2VcIik7XHJcblxyXG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyTm9kZSkgPT4ge1xyXG4gICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBsYXllck5vZGUucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgXCIuZXNyaS1sZWdlbmRfX3NlcnZpY2UtbGFiZWxcIixcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghdGl0bGVFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAvLyBldml0YXIgZHVwbGljYWRvc1xyXG4gICAgICBpZiAodGl0bGVFbGVtZW50LmRhdGFzZXQuaGFzQ29udHJvbHMgPT09IFwidHJ1ZVwiKSByZXR1cm47XHJcbiAgICAgIHRpdGxlRWxlbWVudC5kYXRhc2V0Lmhhc0NvbnRyb2xzID0gXCJ0cnVlXCI7XHJcblxyXG4gICAgICBjb25zdCBsYXllclRpdGxlID0gdGl0bGVFbGVtZW50LmlubmVyVGV4dC50cmltKCk7XHJcblxyXG4gICAgICAvLyDwn5SlIENBUEEgUkVBTFxyXG4gICAgICBjb25zdCBsYXllciA9IHRoaXMuYWN0aXZlVmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgKGwpID0+IGwudGl0bGUgPT09IGxheWVyVGl0bGUsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyDwn5SlIEJPRFkgKHNpbWJvbG9nw61hIHF1ZSBzZSB2YSBhIGNvbGFwc2FyKVxyXG4gICAgICBjb25zdCBib2R5ID0gbGF5ZXJOb2RlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgIFwiLmVzcmktbGVnZW5kX19sYXllci1ib2R5LCAuZXNyaS1sZWdlbmRfX2xheWVyLXRhYmxlXCIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIPCflKUgQ09OVEVORURPUiBJWlFVSUVSRE9cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBjb25zdCBjb250cm9sc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb250cm9sc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICBjb250cm9sc1dyYXBwZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgIGNvbnRyb2xzV3JhcHBlci5zdHlsZS5nYXAgPSBcIjRweFwiO1xyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyDinIUgQ0hFQ0tCT1hcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGxheWVyID8gbGF5ZXIudmlzaWJsZSA6IHRydWU7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIPCflL0gRkxFQ0hBIENPTEFQU0FCTEVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBhcnJvdy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgYXJyb3cuc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgICAgYXJyb3cuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgbGV0IGlzT3BlbiA9IGxheWVyID8gbGF5ZXIudmlzaWJsZSA6IHRydWU7XHJcbiAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgYm9keS5zdHlsZS5kaXNwbGF5ID0gaXNPcGVuID8gXCJcIiA6IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGFycm93LmlubmVySFRNTCA9IGlzT3BlbiA/IFwi4pa8XCIgOiBcIuKWtlwiO1xyXG5cclxuICAgICAgY2hlY2tib3gub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgICBsYXllci52aXNpYmxlID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNPcGVuID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgYm9keS5zdHlsZS5kaXNwbGF5ID0gaXNPcGVuID8gXCJcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBpc09wZW4gPyBcIuKWvFwiIDogXCLilrZcIjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGFycm93Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlzT3BlbiA9ICFpc09wZW47XHJcblxyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICBib2R5LnN0eWxlLmRpc3BsYXkgPSBpc09wZW4gPyBcIlwiIDogXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBpc09wZW4gPyBcIuKWvFwiIDogXCLilrZcIjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8g8J+UpyBFTlNBTUJMRVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGNvbnRyb2xzV3JhcHBlci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgIGNvbnRyb2xzV3JhcHBlci5hcHBlbmRDaGlsZChhcnJvdyk7XHJcblxyXG4gICAgICAvLyDwn5SlIEhBQ0VSIEZMRVggRUwgVElUTEVcclxuICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImZsZXgtc3RhcnRcIjtcclxuICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmdhcCA9IFwiNnB4XCI7XHJcblxyXG4gICAgICAvLyDwn5SlIFRFWFRPIE9SSUdJTkFMXHJcbiAgICAgIGNvbnN0IHRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHRleHRTcGFuLmlubmVyVGV4dCA9IGxheWVyVGl0bGU7XHJcblxyXG4gICAgICAvLyDwn5SlIExJTVBJQVIgWSBSRUNPTlNUUlVJUlxyXG4gICAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRyb2xzV3JhcHBlcik7XHJcbiAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjYWxjdWxhdGVTdHlsZSA9ICgpID0+IHtcclxuICAgIGxldCBzdHlsZTtcclxuICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHRoaXMuY3VycmVudFdpZHRoIHx8IDEwMDAwMDsgLy8gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBpZiAodGhpcy5sZWdlbmQpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLmNhcmRTdHlsZSkge1xyXG4gICAgICAgIGxldCBsYXlvdXQ7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMuY29uZmlnLmNhcmRMYXlvdXQgfHxcclxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmNhcmRMYXlvdXQgPT09IFwiYXV0b1wiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFdpZHRoIDw9IDYwMCkge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSBcInN0YWNrXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSBcInNpZGUtYnktc2lkZVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsYXlvdXQgPSB0aGlzLnByb3BzLmNvbmZpZy5jYXJkTGF5b3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHlsZSA9IHtcclxuICAgICAgICAgIHR5cGU6IFwiY2FyZFwiIGFzIGNvbnN0LFxyXG4gICAgICAgICAgbGF5b3V0OiBsYXlvdXQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHlsZSA9IFwiY2xhc3NpY1wiO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZSA9IFwiY2xhc3NpY1wiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH07XHJcblxyXG4gIGdldERlZmF1bHRTdHlsZUNvbmZpZygpOiBTdHlsZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VDdXN0b206IGZhbHNlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgY29sb3I6IFwiXCIsXHJcbiAgICAgICAgZmlsbFR5cGU6IEZpbGxUeXBlLkZJTEwsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvbnRDb2xvcjogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdHlsZUNvbmZpZygpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5zdHlsZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5zdHlsZS51c2VDdXN0b20pIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29uZmlnLnN0eWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdFN0eWxlQ29uZmlnKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcgJiYgamltdU1hcFZpZXcudmlldykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUxlZ2VuZChqaW11TWFwVmlldy52aWV3KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkU3RhdHVzOiBMb2FkU3RhdHVzLkZ1bGZpbGxlZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRlc3Ryb3lMZWdlbmQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkRhdGFTb3VyY2VDcmVhdGVkID0gKGRhdGFTb3VyY2UpOiB2b2lkID0+IHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVWaWV3QnlEYXRhU291cmNlKGRhdGFTb3VyY2UpXHJcbiAgICAgIC50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTGVnZW5kKHZpZXcpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsb2FkU3RhdHVzOiBMb2FkU3RhdHVzLkZ1bGZpbGxlZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXHJcbiAgb25DcmVhdGVEYXRhU291cmNlRmFpbGVkID0gKGVycm9yKTogdm9pZCA9PiB7fTtcclxuXHJcbiAgb25SZXNpemUgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcclxuICAgIHRoaXMuY3VycmVudFdpZHRoID0gd2lkdGg7XHJcbiAgICBpZiAodGhpcy5sZWdlbmQgJiYgdGhpcy5wcm9wcy5jb25maWcuY2FyZExheW91dCA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGN1bGF0ZVN0eWxlKCk7XHJcbiAgICAgIHRoaXMubGVnZW5kLnN0eWxlID0gc3R5bGU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXNlTWFwV2lkZ2V0ID1cclxuICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF07XHJcbiAgICBjb25zdCB1c2VEYXRhU291cmNlID1cclxuICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAmJiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdO1xyXG5cclxuICAgIGxldCBjb250ZW50ID0gbnVsbDtcclxuICAgIGxldCBkYXRhU291cmNlQ29udGVudCA9IG51bGw7XHJcblxyXG4gICAgaWYgKHVzZU1hcFdpZGdldCkge1xyXG4gICAgICBkYXRhU291cmNlQ29udGVudCA9IChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VEYXRhU291cmNlKSB7XHJcbiAgICAgIGRhdGFTb3VyY2VDb250ZW50ID0gKFxyXG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxyXG4gICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17dGhpcy5vbkRhdGFTb3VyY2VDcmVhdGVkfVxyXG4gICAgICAgICAgb25DcmVhdGVEYXRhU291cmNlRmFpbGVkPXt0aGlzLm9uQ3JlYXRlRGF0YVNvdXJjZUZhaWxlZH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXNlTWFwV2lkZ2V0ICYmICF1c2VEYXRhU291cmNlKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveUxlZ2VuZCgpO1xyXG4gICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWxlZ2VuZFwiPlxyXG4gICAgICAgICAgPFdpZGdldFBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgIGljb249e2xlZ2VuZEljb259XHJcbiAgICAgICAgICAgIGF1dG9GbGlwXHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICBpZDogXCJfd2lkZ2V0TGFiZWxcIixcclxuICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLl93aWRnZXRMYWJlbCxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBsb2FkaW5nQ29udGVudCA9IG51bGw7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRTdGF0dXMgPT09IExvYWRTdGF0dXMuUGVuZGluZykge1xyXG4gICAgICAgIGxvYWRpbmdDb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJqaW11LXNlY29uZGFyeS1sb2FkaW5nXCIgLz47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh3aW5kb3cuamltdUNvbmZpZy5pc0luQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnTGVnZW5kKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXt0aGlzLnN0YXRlLndpZGdldEtleX1cclxuICAgICAgICAgIHJlZj17dGhpcy5sZWdlbmRXcmFwcGVyUmVmfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xNSlcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmdDb250ZW50fVxyXG5cclxuICAgICAgICAgIHsvKiDwn5SlIENPTlRFTkVET1IgU0lNQk9MT0fDjUEgLSBPQ1VQQSBUT0RPIEVMIEVTUEFDSU8gKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5sZWdlbmRDb250YWluZXJSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1sZWdlbmQtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggNnB4IDZweCA0cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZmFmYWZhXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTZlNmU2XCIsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcImluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDUpXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIHsvKiDwn5SlIE1BUEEgT0NVTFRPIC0gRlVOQ0lPTkEgRU4gQkFDS0dST1VORCAqL31cclxuICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLm1hcENvbnRhaW5lclJlZn0gc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0gLz5cclxuXHJcbiAgICAgICAgICB7Lyog8J+UpSBEYXRhU291cmNlIC0gb2N1bHRvIHBlcm8gZW4gZWwgbWlzbW8gY29udGVuZWRvciAqL31cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+e2RhdGFTb3VyY2VDb250ZW50fTwvZGl2PlxyXG5cclxuICAgICAgICAgIDxSZWFjdFJlc2l6ZURldGVjdG9yXHJcbiAgICAgICAgICAgIHRhcmdldFJlZj17dGhpcy5sZWdlbmRXcmFwcGVyUmVmfVxyXG4gICAgICAgICAgICBoYW5kbGVIZWlnaHRcclxuICAgICAgICAgICAgaGFuZGxlV2lkdGhcclxuICAgICAgICAgICAgb25SZXNpemU9e3RoaXMub25SZXNpemV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjc3M9e2dldFN0eWxlKHRoaXMucHJvcHMudGhlbWUsIHRoaXMuZ2V0U3R5bGVDb25maWcoKSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiamltdS13aWRnZXRcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==