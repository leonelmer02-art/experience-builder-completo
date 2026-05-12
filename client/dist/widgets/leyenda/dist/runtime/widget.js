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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/leyenda/src/runtime/style.css":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/leyenda/src/runtime/style.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
.custom-legend-container::-webkit-scrollbar {
  width: 6px;
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
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/leyenda/src/runtime/style.css"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB,0BAAA;AACA;EACE,eAAA;EACA,gBAAA;EACA,gCAAA;AAEF;;AACA;EACE,+CAAA;AAEF;;AACA,oEAAA;AACA;EACE,0BAAA,EAAA,yBAAA;EACA,6BAAA,EAAA,gDAAA;EACA,8BAAA;AAEF;;AACA,4EAAA;AACA;EACE,0BAAA;EACA,4BAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,2BAAA;AAEF;;AACA,cAAA;AACA;EACE,sBAAA;EACA,uBAAA;AAEF;;AACA,0EAAA;AACA;EACE,0BAAA;EACA,qBAAA,EAAA,yBAAA;EACA,kCAAA;AAEF;;AACA,+BAAA;AACA;EACE,oBAAA;EACA,6BAAA;AAEF;;AACA,oBAAA;AACA;EACE,oBAAA;EACA,qBAAA;AAEF;;AACA,uCAAA;AACA;EACE,oBAAA;AAEF;;AACA,2BAAA;AACA;EACE,oBAAA;EACA,qBAAA;AAEF;;AACA,aAAA;AACA;EACE,oBAAA;EACA,qBAAA;AAEF;;AACA,sBAAA;AACA;EACE,UAAA;AAEF;;AACA;EACE,uBAAA;AAEF;;AACA;EACE,mBAAA;EACA,mBAAA;AAEF;;AACA;EACE,mBAAA;AAEF","sourcesContent":["@charset \"UTF-8\";\n/* 🔥 CONTENEDOR GENERAL */\n.custom-legend-container {\n  font-size: 12px;\n  line-height: 1.2;\n  transition: box-shadow 0.2s ease;\n}\n\n.custom-legend-container:hover {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n/* 🔥 CADA CAPA es la clasificacion o el simbolo segun sea la capa */\n.custom-legend-container .esri-legend__layer {\n  margin-top: 0px !important; /* 🔥 separación arriba */\n  margin-bottom: 0px !important; /* separa capas entre sí baja la sigiente capa */\n  padding-bottom: 2px !important;\n}\n\n/* 🔥 SERVICIOS (agrupadores) aqui es todo el contenido de cada simgologia */\n.custom-legend-container .esri-legend__service {\n  margin-top: 6px !important;\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n  padding-left: 6px !important;\n  padding-bottom: 0px !important;\n  padding-top: 0px !important;\n}\n\n/* 🔥 GRUPOS */\n.custom-legend-container .esri-legend__group-layer {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n/* 🔥 TÍTULO DE clasificacion o atributo que se clasifica (SIN FONDO YA) */\n.custom-legend-container .esri-legend__layer-caption {\n  margin-top: 0px !important;\n  padding: 0 !important; /* 🔥 más espacio abajo */\n  background: transparent !important;\n}\n\n/* 🔥 CUERPO DE LA SIMBOLOGÍA */\n.custom-legend-container .esri-legend__layer-body {\n  margin: 0 !important;\n  padding: 0 0 0 4px !important;\n}\n\n/* 🔥 CADA SÍMBOLO */\n.custom-legend-container .esri-legend__symbol {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 ITEMS DE TABLA (MUY IMPORTANTE) */\n.custom-legend-container .esri-legend__layer-table {\n  margin: 0 !important;\n}\n\n/* 🔥 FILAS DE LA LEYENDA */\n.custom-legend-container .esri-legend__layer-row {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 TEXTO */\n.custom-legend-container .esri-legend__label {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* 🔥 SCROLL MODERNO */\n.custom-legend-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.custom-legend-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.custom-legend-container::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 10px;\n}\n\n.custom-legend-container::-webkit-scrollbar-thumb:hover {\n  background: #9e9e9e;\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/leyenda/src/runtime/style.css":
/*!***************************************************************!*\
  !*** ./your-extensions/widgets/leyenda/src/runtime/style.css ***!
  \***************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/leyenda/src/runtime/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/leyenda/icon.svg":
/*!**************************************************!*\
  !*** ./your-extensions/widgets/leyenda/icon.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 20\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M3 5 1.5 2 0 5zm16.318-2c.377 0 .682.224.682.5s-.305.5-.682.5H5.682C5.305 4 5 3.776 5 3.5s.305-.5.682-.5zM20 9.5c0-.276-.305-.5-.682-.5H5.682C5.305 9 5 9.224 5 9.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m0 6c0-.276-.305-.5-.682-.5H5.682c-.377 0-.682.224-.682.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5m-17 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M3 8v3H0V8z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/leyenda/src/config.ts":
/*!*******************************************************!*\
  !*** ./your-extensions/widgets/leyenda/src/config.ts ***!
  \*******************************************************/
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

/***/ "./your-extensions/widgets/leyenda/src/runtime/lib/style.ts":
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/leyenda/src/runtime/lib/style.ts ***!
  \******************************************************************/
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

/***/ "./your-extensions/widgets/leyenda/src/runtime/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/leyenda/src/runtime/translations/default.ts ***!
  \*****************************************************************************/
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

/***/ "./your-extensions/widgets/leyenda/src/version-manager.ts":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/leyenda/src/version-manager.ts ***!
  \****************************************************************/
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
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/leyenda/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadStatus: () => (/* binding */ LoadStatus),
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/leyenda/src/config.ts");
/* harmony import */ var _lib_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/style */ "./your-extensions/widgets/leyenda/src/runtime/lib/style.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/leyenda/src/runtime/translations/default.ts");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icon.svg */ "./your-extensions/widgets/leyenda/icon.svg");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _version_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../version-manager */ "./your-extensions/widgets/leyenda/src/version-manager.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./your-extensions/widgets/leyenda/src/runtime/style.css");
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
                checkbox.onchange = () => {
                    if (layer) {
                        layer.visible = checkbox.checked;
                    }
                };
                // =========================
                // 🔽 FLECHA COLAPSABLE
                // =========================
                const arrow = document.createElement("span");
                arrow.innerHTML = "▼";
                arrow.style.cursor = "pointer";
                arrow.style.fontSize = "10px";
                arrow.style.userSelect = "none";
                let isOpen = true;
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
                    background: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    padding: "10px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                } },
                loadingContent,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "6px 8px",
                        marginBottom: "6px",
                        borderBottom: "1px solid #e5e5e5",
                    } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            color: "#333",
                        } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: "25px" } }, "\uD83D\uDDFA\uFE0F"),
                        "Capas y Simbolog\u00EDa"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: "12px", color: "#888" } })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: this.legendContainerRef, className: "custom-legend-container", style: {
                        flex: 1,
                        overflowY: "auto",
                        padding: "6px 6px 6px 4px",
                        borderRadius: "8px",
                        background: "#fafafa",
                        border: "1px solid #e6e6e6",
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
                    } }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { position: "absolute", display: "none" }, ref: this.mapContainerRef }, "mapContainer"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { position: "absolute", display: "none" } }, dataSourceContent),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9sZXllbmRhL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK0hBQStILFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxzQkFBc0Isc0JBQXNCLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxVQUFVLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsc0JBQXNCLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLFdBQVcsTUFBTSxX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UUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQ2xELGlCQUFpQixDQUNkO2dCQUVOLCtDQUFDLDBEQUFtQixJQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUNoQyxZQUFZLFFBQ1osV0FBVyxRQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUN2QixDQUNFLENBQ1AsQ0FBQztRQUNKLENBQUM7UUFFRCxPQUFPLENBQ0wsd0RBQ0UsR0FBRyxFQUFFLG9EQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQ3RELFNBQVMsRUFBQyxhQUFhLElBRXRCLE9BQU8sQ0FDSixDQUNQLENBQUM7SUFDSixDQUFDOztBQXRlTSxxQkFBYyxHQUFHLDREQUFjLENBQUM7aUVBbEJwQixNQUFNO0FBMmZuQixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sZXllbmRhL3NyYy9ydW50aW1lL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xleWVuZGEvc3JjL3J1bnRpbWUvc3R5bGUuY3NzP2NkNWUiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGV5ZW5kYS9pY29uLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGV5ZW5kYS9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sZXllbmRhL3NyYy9ydW50aW1lL2xpYi9zdHlsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGV5ZW5kYS9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGV5ZW5kYS9zcmMvdmVyc2lvbi1tYW5hZ2VyLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sZXllbmRhL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIPCflKUgQ09OVEVORURPUiBHRU5FUkFMICovXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlO1xufVxuXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLyog8J+UpSBDQURBIENBUEEgZXMgbGEgY2xhc2lmaWNhY2lvbiBvIGVsIHNpbWJvbG8gc2VndW4gc2VhIGxhIGNhcGEgKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7IC8qIPCflKUgc2VwYXJhY2nDs24gYXJyaWJhICovXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50OyAvKiBzZXBhcmEgY2FwYXMgZW50cmUgc8OtIGJhamEgbGEgc2lnaWVudGUgY2FwYSAqL1xuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIPCflKUgU0VSVklDSU9TIChhZ3J1cGFkb3JlcykgYXF1aSBlcyB0b2RvIGVsIGNvbnRlbmlkbyBkZSBjYWRhIHNpbWdvbG9naWEgKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX3NlcnZpY2Uge1xuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLyog8J+UpSBHUlVQT1MgKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2dyb3VwLWxheWVyIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIPCflKUgVMONVFVMTyBERSBjbGFzaWZpY2FjaW9uIG8gYXRyaWJ1dG8gcXVlIHNlIGNsYXNpZmljYSAoU0lOIEZPTkRPIFlBKSAqL1xuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXItY2FwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IC8qIPCflKUgbcOhcyBlc3BhY2lvIGFiYWpvICovXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIPCflKUgQ1VFUlBPIERFIExBIFNJTUJPTE9Hw41BICovXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1ib2R5IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMCAwIDRweCAhaW1wb3J0YW50O1xufVxuXG4vKiDwn5SlIENBREEgU8ONTUJPTE8gKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX3N5bWJvbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8qIPCflKUgSVRFTVMgREUgVEFCTEEgKE1VWSBJTVBPUlRBTlRFKSAqL1xuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXItdGFibGUge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLyog8J+UpSBGSUxBUyBERSBMQSBMRVlFTkRBICovXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1yb3cge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4vKiDwn5SlIFRFWFRPICovXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYWJlbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8qIPCflKUgU0NST0xMIE1PREVSTk8gKi9cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzllOWU5ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xleWVuZGEvc3JjL3J1bnRpbWUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUFoQiwwQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFFRjs7QUFDQTtFQUNFLCtDQUFBO0FBRUY7O0FBQ0Esb0VBQUE7QUFDQTtFQUNFLDBCQUFBLEVBQUEseUJBQUE7RUFDQSw2QkFBQSxFQUFBLGdEQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFDQSw0RUFBQTtBQUNBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQ0EsY0FBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBLDBFQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLHFCQUFBLEVBQUEseUJBQUE7RUFDQSxrQ0FBQTtBQUVGOztBQUNBLCtCQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0Esb0JBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQSx1Q0FBQTtBQUNBO0VBQ0Usb0JBQUE7QUFFRjs7QUFDQSwyQkFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBLGFBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQSxzQkFBQTtBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDwn5SlIENPTlRFTkVET1IgR0VORVJBTCAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxufVxcblxcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuXFxuLyog8J+UpSBDQURBIENBUEEgZXMgbGEgY2xhc2lmaWNhY2lvbiBvIGVsIHNpbWJvbG8gc2VndW4gc2VhIGxhIGNhcGEgKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllciB7XFxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDsgLyog8J+UpSBzZXBhcmFjacOzbiBhcnJpYmEgKi9cXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50OyAvKiBzZXBhcmEgY2FwYXMgZW50cmUgc8OtIGJhamEgbGEgc2lnaWVudGUgY2FwYSAqL1xcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIFNFUlZJQ0lPUyAoYWdydXBhZG9yZXMpIGFxdWkgZXMgdG9kbyBlbCBjb250ZW5pZG8gZGUgY2FkYSBzaW1nb2xvZ2lhICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fc2VydmljZSB7XFxuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIEdSVVBPUyAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2dyb3VwLWxheWVyIHtcXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLyog8J+UpSBUw41UVUxPIERFIGNsYXNpZmljYWNpb24gbyBhdHJpYnV0byBxdWUgc2UgY2xhc2lmaWNhIChTSU4gRk9ORE8gWUEpICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXItY2FwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgLyog8J+UpSBtw6FzIGVzcGFjaW8gYWJham8gKi9cXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgQ1VFUlBPIERFIExBIFNJTUJPTE9Hw41BICovXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXItYm9keSB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgMCAwIDRweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIENBREEgU8ONTUJPTE8gKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19zeW1ib2wge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgSVRFTVMgREUgVEFCTEEgKE1VWSBJTVBPUlRBTlRFKSAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyLXRhYmxlIHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiDwn5SlIEZJTEFTIERFIExBIExFWUVOREEgKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1yb3cge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIPCflKUgVEVYVE8gKi9cXG4uY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYWJlbCB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLyog8J+UpSBTQ1JPTEwgTU9ERVJOTyAqL1xcbi5jdXN0b20tbGVnZW5kLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG59XFxuXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjOWU5ZTllO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zIDUgMS41IDIgMCA1em0xNi4zMTgtMmMuMzc3IDAgLjY4Mi4yMjQuNjgyLjVzLS4zMDUuNS0uNjgyLjVINS42ODJDNS4zMDUgNCA1IDMuNzc2IDUgMy41cy4zMDUtLjUuNjgyLS41ek0yMCA5LjVjMC0uMjc2LS4zMDUtLjUtLjY4Mi0uNUg1LjY4MkM1LjMwNSA5IDUgOS4yMjQgNSA5LjVzLjMwNS41LjY4Mi41aDEzLjYzNmMuMzc3IDAgLjY4Mi0uMjI0LjY4Mi0uNW0wIDZjMC0uMjc2LS4zMDUtLjUtLjY4Mi0uNUg1LjY4MmMtLjM3NyAwLS42ODIuMjI0LS42ODIuNXMuMzA1LjUuNjgyLjVoMTMuNjM2Yy4zNzcgMCAuNjgyLS4yMjQuNjgyLS41bS0xNyAwYTEuNSAxLjUgMCAxIDAtMyAwIDEuNSAxLjUgMCAwIDAgMyAwTTMgOHYzSDBWOHpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHR5cGUgeyBJbW11dGFibGVPYmplY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgQmFja2dyb3VuZFN0eWxlIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmV4cG9ydCBlbnVtIEVMZWdlbmRNb2RlIHtcclxuICBTaG93VmlzaWJsZSA9ICdzaG93LXZpc2libGUnLFxyXG4gIFNob3dXaXRoaW5FeHRlbnQgPSAnc2hvdy13aXRoaW4tZXh0ZW50JyxcclxuICBTaG93QWxsID0gJ3Nob3ctYWxsJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlIHtcclxuICB1c2VDdXN0b206IGJvb2xlYW5cclxuICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kU3R5bGVcclxuICBmb250Q29sb3I6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgc2hvd0Jhc2VNYXA/OiBib29sZWFuXHJcbiAgY2FyZFN0eWxlPzogYm9vbGVhblxyXG4gIGNhcmRMYXlvdXQ/OiAnYXV0bycgfCAnc2lkZS1ieS1zaWRlJyB8ICdzdGFjaydcclxuICBsZWdlbmRNb2RlPzogRUxlZ2VuZE1vZGVcclxuICByZXNwZWN0TGF5ZXJEZWZpbml0aW9uRXhwPzogYm9vbGVhblxyXG4gIHN0eWxlOiBTdHlsZVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcbiIsImltcG9ydCB7IHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgY3NzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHN0eWxlVXRpbHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgdHlwZSB7IFN0eWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcywgc3R5bGU6IFN0eWxlKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgY29uc3QgZmlsbFN0eWxlQ3NzID0gc3R5bGVVdGlscy50b0NTU1N0eWxlKHsgYmFja2dyb3VuZDogc3R5bGUuYmFja2dyb3VuZCB9KSBhcyBhbnlcclxuICBkZWxldGUgZmlsbFN0eWxlQ3NzLmJhY2tncm91bmRDb2xvclxyXG4gIGNvbnN0IGZvbnRDb2xvciA9IHN0eWxlLmZvbnRDb2xvciB8fCB0aGVtZS5hcmNnaXMud2lkZ2V0cy5sZWdlbmQudmFyaWFudHM/LmRlZmF1bHQ/LnJvb3Q/LmNvbG9yXHJcbiAgY29uc3Qgcm9vdCA9IHN0eWxlLmJhY2tncm91bmQ/LmNvbG9yIHx8IHRoZW1lLnN5cy5jb2xvci5zdXJmYWNlLnBhcGVyXHJcbiAgY29uc3QgY2FyZFJvb3QgPSB0aGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5wYXBlclxyXG4gIC8vIGNvbnN0IGNhcmRDYXJvdXNlbCA9IHRoZW1lLnN1cmZhY2VzWzFdLmJnO1xyXG4gIC8vIGNvbnN0IGNhcmRDYXB0aW9uID0gdGhlbWUuc3VyZmFjZXNbMV0uYmc7XHJcblxyXG4gIHJldHVybiBjc3NgXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC53aWRnZXQtbGVnZW5kIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMzJweDtcclxuICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmFyY2dpcy53aWRnZXRzLmxlZ2VuZC52YXJpYW50cz8uY2FyZD8ucm9vdD8uYmd9OyovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cm9vdH07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJHtmaWxsU3R5bGVDc3N9XHJcbiAgICAgIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTI6ICR7Zm9udENvbG9yfTtcclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICR7Zm9udENvbG9yfTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmVzcmktbGVnZW5kLS1jYXJkIHtcclxuICAgICAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZF9fY2Fyb3VzZWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC5lc3JpLXdpZGdldC5lc3JpLXdpZGdldC0tcGFuZWwge1xyXG4gICAgICAgIC5lc3JpLWxlZ2VuZF9fbGF5ZXIge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmVzcmktbGVnZW5kLS1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogJHtmb250Q29sb3J9O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVzcmktbGVnZW5kLS1jYXJkLmVzcmktbGVnZW5kLS1zdGFja2Vke1xyXG4gICAgICAvKlxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICovXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZF9fc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiB1bnNldDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXNyaS1sZWdlbmQtLWNhcmRfX2Nhcm91c2VsLWluZGljYXRvci1jb250YWluZXIge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIGNvbG9yOiAke2ZvbnRDb2xvcn07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXNyaS1sZWdlbmQtLWNhcmRfX3NlcnZpY2UtY2FwdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIGNvbG9yOiAke2ZvbnRDb2xvcn07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZC5lc3JpLXdpZGdldHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NhcmRSb290fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogLmVzcmktbGVnZW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLm5ldXRyYWxbMjAwXX07XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUuYmxhY2t9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLXdpZGdldF9faGVhZGluZyB7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUuYmxhY2t9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXNyaS1sZWdlbmQtLWNhcmQuZXNyaS13aWRnZXR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS5uZXV0cmFsWzQwMF19O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLmJsYWNrfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXNyaS1sZWdlbmQtLWNhcmRfX3NlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFsyMDBdfTtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS5ibGFja31cclxuICAgICAgfVxyXG5cclxuICAgICAgLmVzcmktbGVnZW5kLS1jYXJkX19jYXJvdXNlbC1pbmRpY2F0b3ItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLm5ldXRyYWxbNDAwXX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZF9fc2VydmljZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lc3JpLWxlZ2VuZC0tY2FyZF9fc2VydmljZS1jYXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5yZWYucGFsZXR0ZS5uZXV0cmFsWzQwMF19O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLmJsYWNrfTtcclxuICAgICAgfSAqL1xyXG5cclxuICAgICAgLypcclxuICAgICAgLmVzcmktbGVnZW5kLS1jYXJkX19jYXJvdXNlbC1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucmVmLnBhbGV0dGUubmV1dHJhbFsxMjAwXX07XHJcbiAgICAgIH1cclxuICAgICAgKi9cclxuXHQnLmN1c3RvbS1sZWdlbmQtY29udGFpbmVyIC5lc3JpLWxlZ2VuZF9fbGF5ZXInOiB7XHJcbiAgbWFyZ2luQm90dG9tOiAnNHB4ICFpbXBvcnRhbnQnXHJcbn0sXHJcbicuY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19sYXllci1jYXB0aW9uJzoge1xyXG4gIGZvbnRTaXplOiAnMTJweCAhaW1wb3J0YW50JyxcclxuICBtYXJnaW5Cb3R0b206ICcycHggIWltcG9ydGFudCdcclxufSxcclxuJy5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX3N5bWJvbCc6IHtcclxuICBtYXJnaW5Cb3R0b206ICcycHggIWltcG9ydGFudCdcclxufSxcclxuJy5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX3NlcnZpY2UnOiB7XHJcbiAgbWFyZ2luQm90dG9tOiAnNnB4ICFpbXBvcnRhbnQnXHJcbn0sXHJcbicuY3VzdG9tLWxlZ2VuZC1jb250YWluZXIgLmVzcmktbGVnZW5kX19ncm91cC1sYXllcic6IHtcclxuICBtYXJnaW5Cb3R0b206ICc0cHggIWltcG9ydGFudCdcclxufSxcclxuJy5jdXN0b20tbGVnZW5kLWNvbnRhaW5lciAuZXNyaS1sZWdlbmRfX2xheWVyLWJvZHknOiB7XHJcbiAgbWFyZ2luTGVmdDogJzZweCAhaW1wb3J0YW50J1xyXG59XHJcblxyXG5cclxuICAgIH1cclxuICBgXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogXCJDYXBhcyB5IFNpbWJvbG9naWFcIixcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBCYXNlVmVyc2lvbk1hbmFnZXJcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuL2NvbmZpZydcclxuXHJcbmNsYXNzIFZlcnNpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVZlcnNpb25NYW5hZ2VyIHtcclxuICB2ZXJzaW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgdmVyc2lvbjogJzEuMTcuMCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXBkYXRlIHJlc3BlY3RMYXllckRlZmluaXRpb25FeHAgb3B0aW9uJyxcclxuICAgICAgdXBncmFkZXI6IChvbGRDb25maWc6IElNQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gb2xkQ29uZmlnLnNldCgncmVzcGVjdExheWVyRGVmaW5pdGlvbkV4cCcsIGZhbHNlKVxyXG4gICAgICAgIHJldHVybiBuZXdDb25maWdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZlcnNpb25NYW5hZ2VyID0gbmV3IFZlcnNpb25NYW5hZ2VyKClcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LFxyXG4gIGpzeCxcclxuICB0eXBlIEFsbFdpZGdldFByb3BzLFxyXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXHJcbiAgUmVhY3RSZXNpemVEZXRlY3RvcixcclxuICB0eXBlIE1hcERhdGFTb3VyY2UsXHJcbiAgRGF0YVNvdXJjZVR5cGVzLFxyXG59IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxyXG4gIHR5cGUgSmltdU1hcFZpZXcsXHJcbn0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcbmltcG9ydCB7IFdpZGdldFBsYWNlaG9sZGVyLCBGaWxsVHlwZSB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IEVMZWdlbmRNb2RlLCB0eXBlIElNQ29uZmlnLCB0eXBlIFN0eWxlIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsZSB9IGZyb20gXCIuL2xpYi9zdHlsZVwiO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcbmltcG9ydCBsZWdlbmRJY29uIGZyb20gXCIuLi8uLi9pY29uLnN2Z1wiO1xyXG5pbXBvcnQgeyB2ZXJzaW9uTWFuYWdlciB9IGZyb20gXCIuLi92ZXJzaW9uLW1hbmFnZXJcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBlbnVtIExvYWRTdGF0dXMge1xyXG4gIFBlbmRpbmcgPSBcIlBlbmRpbmdcIixcclxuICBGdWxmaWxsZWQgPSBcIkZ1bGZpbGxlZFwiLFxyXG4gIFJlamVjdGVkID0gXCJSZWplY3RlZFwiLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFByb3BzIGV4dGVuZHMgQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcclxuICBsb2FkU3RhdHVzOiBMb2FkU3RhdHVzO1xyXG4gIHdpZGdldEtleTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gIFdpZGdldFByb3BzLFxyXG4gIFdpZGdldFN0YXRlXHJcbj4ge1xyXG4gIHByaXZhdGUgZGF0YVNvdXJjZTogTWFwRGF0YVNvdXJjZTtcclxuICBwcml2YXRlIG1hcFZpZXc6IF9fZXNyaS5NYXBWaWV3O1xyXG4gIHByaXZhdGUgc2NlbmVWaWV3OiBfX2VzcmkuU2NlbmVWaWV3O1xyXG4gIHByaXZhdGUgTWFwVmlldzogdHlwZW9mIF9fZXNyaS5NYXBWaWV3O1xyXG4gIHByaXZhdGUgU2NlbmVWaWV3OiB0eXBlb2YgX19lc3JpLlNjZW5lVmlldztcclxuICBwcml2YXRlIGxlZ2VuZDogX19lc3JpLkxlZ2VuZDtcclxuICBwcml2YXRlIExlZ2VuZDogdHlwZW9mIF9fZXNyaS5MZWdlbmQ7XHJcbiAgcHJpdmF0ZSBjdXJyZW50V2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIGFjdGl2ZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldztcclxuXHJcbiAgbGVnZW5kV3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBsZWdlbmRDb250YWluZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgbWFwQ29udGFpbmVyUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICBzdGF0aWMgdmVyc2lvbk1hbmFnZXIgPSB2ZXJzaW9uTWFuYWdlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxvYWRTdGF0dXM6IExvYWRTdGF0dXMuUGVuZGluZyxcclxuICAgICAgd2lkZ2V0S2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8gMi4gRGVzdHJ1aW1vcyBsYSB2aXN0YSBkZWwgbWFwYS9lc2NlbmFcclxuICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcclxuXHJcbiAgICAvLyAzLiBEZXN0cnVpbW9zIGxhIGxleWVuZGFcclxuICAgIHRoaXMuZGVzdHJveUxlZ2VuZCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKFxyXG4gICAgcHJldlByb3BzOiBSZWFkb25seTxXaWRnZXRQcm9wcz4sXHJcbiAgICBwcmV2U3RhdGU6IFJlYWRvbmx5PFdpZGdldFN0YXRlPixcclxuICAgIHNuYXBzaG90PzogYW55LFxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gVGhpcyBvcHRpb24gbmVlZHMgdG8gcmVmcmVzaCB0aGUgbGVnZW5kIHRvIHRha2UgZWZmZWN0XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcgIT09IHByZXZQcm9wcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZGdldEtleTogTWF0aC5yYW5kb20oKSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVZpZXdCeURhdGFTb3VyY2UoXHJcbiAgICBkYXRhU291cmNlOiBNYXBEYXRhU291cmNlLFxyXG4gICk6IFByb21pc2U8X19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5sb2FkVmlld01vZHVsZXMoZGF0YVNvdXJjZSkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8X19lc3JpLk1hcFZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlV2ViTWFwVmlldyh0aGlzLk1hcFZpZXcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8X19lc3JpLlNjZW5lVmlldz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVTY2VuZVZpZXcodGhpcy5TY2VuZVZpZXcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihudWxsKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlV2ViTWFwVmlldyA9IChNYXBWaWV3LCByZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcclxuICAgIGNvbnN0IG1hcFZpZXdPcHRpb246IF9fZXNyaS5NYXBWaWV3UHJvcGVydGllcyA9IHtcclxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UubWFwLFxyXG4gICAgICBjb250YWluZXI6IHRoaXMubWFwQ29udGFpbmVyUmVmLmN1cnJlbnQsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5tYXBWaWV3ID0gbmV3IE1hcFZpZXcobWFwVmlld09wdGlvbik7XHJcbiAgICB0aGlzLm1hcFZpZXcud2hlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5tYXBWaWV3KTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVTY2VuZVZpZXcgPSAoU2NlbmVWaWV3LCByZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcclxuICAgIGNvbnN0IG1hcFZpZXdPcHRpb246IF9fZXNyaS5TY2VuZVZpZXdQcm9wZXJ0aWVzID0ge1xyXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5tYXAsXHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5tYXBDb250YWluZXJSZWYuY3VycmVudCxcclxuICAgIH07XHJcbiAgICB0aGlzLnNjZW5lVmlldyA9IG5ldyB0aGlzLlNjZW5lVmlldyhtYXBWaWV3T3B0aW9uKTtcclxuICAgIHRoaXMuc2NlbmVWaWV3LndoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuc2NlbmVWaWV3KTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBkZXN0cm95VmlldygpIHtcclxuICAgIHRoaXMubWFwVmlldyAmJiAhdGhpcy5tYXBWaWV3LmRlc3Ryb3llZCAmJiB0aGlzLm1hcFZpZXcuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5zY2VuZVZpZXcgJiYgIXRoaXMuc2NlbmVWaWV3LmRlc3Ryb3llZCAmJiB0aGlzLnNjZW5lVmlldy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBsb2FkVmlld01vZHVsZXMgPSBhc3luYyAoXHJcbiAgICBkYXRhU291cmNlOiBNYXBEYXRhU291cmNlLFxyXG4gICk6IFByb21pc2U8dHlwZW9mIF9fZXNyaS5NYXBWaWV3IHwgdHlwZW9mIF9fZXNyaS5TY2VuZVZpZXc+ID0+IHtcclxuICAgIGlmIChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHtcclxuICAgICAgaWYgKHRoaXMuTWFwVmlldykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLk1hcFZpZXc7XHJcbiAgICAgIH1cclxuICAgICAgW3RoaXMuTWFwVmlld10gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcImVzcmkvdmlld3MvTWFwVmlld1wiXSk7XHJcbiAgICAgIHJldHVybiB0aGlzLk1hcFZpZXc7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7XHJcbiAgICAgIGlmICh0aGlzLlNjZW5lVmlldykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlNjZW5lVmlldztcclxuICAgICAgfVxyXG4gICAgICBbdGhpcy5TY2VuZVZpZXddID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXCJlc3JpL3ZpZXdzL1NjZW5lVmlld1wiXSk7XHJcbiAgICAgIHJldHVybiB0aGlzLlNjZW5lVmlldztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IobnVsbCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRlc3Ryb3lMZWdlbmQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmxlZ2VuZCAmJiAhdGhpcy5sZWdlbmQuZGVzdHJveWVkICYmIHRoaXMubGVnZW5kLmRlc3Ryb3koKTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVMZWdlbmQgPSBhc3luYyAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3KSA9PiB7XHJcbiAgICB0aGlzLmFjdGl2ZVZpZXcgPSB2aWV3O1xyXG5cclxuICAgIGlmICghdGhpcy5MZWdlbmQpIHtcclxuICAgICAgW3RoaXMuTGVnZW5kXSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1wiZXNyaS93aWRnZXRzL0xlZ2VuZFwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdmlldy53aGVuKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3lMZWdlbmQoKTtcclxuXHJcbiAgICAvLyBMaW1waWFtb3MgZWwgY29udGVuZWRvciBmw61zaWNvIHBhcmEgZXZpdGFyIHJlc2lkdW9zXHJcbiAgICBpZiAodGhpcy5sZWdlbmRDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLmxlZ2VuZENvbnRhaW5lclJlZi5jdXJyZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMubGVnZW5kQ29udGFpbmVyUmVmLmN1cnJlbnQ/LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5sZWdlbmQgPSBuZXcgdGhpcy5MZWdlbmQoe1xyXG4gICAgICB2aWV3OiB2aWV3LFxyXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29uZmlnTGVnZW5kKCk7XHJcblxyXG4gICAgLy8g8J+UpSBlc3BlcmFyIGEgcXVlIHJlbmRlcmljZSBsYSBsZXllbmRhXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hZGRDaGVja2JveFRvTGVnZW5kKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbmZpZ0xlZ2VuZCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xyXG4gICAgICBjb25zdCBiYXNlbWFwTGVnZW5kVmlzaWJsZSA9IHRoaXMucHJvcHMuY29uZmlnLnNob3dCYXNlTWFwO1xyXG5cclxuICAgICAgdGhpcy5sZWdlbmQuc3R5bGUgPSB0aGlzLmNhbGN1bGF0ZVN0eWxlKCk7XHJcbiAgICAgIHRoaXMubGVnZW5kLmJhc2VtYXBMZWdlbmRWaXNpYmxlID0gYmFzZW1hcExlZ2VuZFZpc2libGU7XHJcblxyXG4gICAgICAvLyDwn5SlIENMQVZFOiBtYW50ZW5lciB0b2RhcyBsYXMgY2FwYXMgdmlzaWJsZXMgZW4gbGEgbGV5ZW5kYVxyXG4gICAgICB0aGlzLmxlZ2VuZC5yZXNwZWN0TGF5ZXJWaXNpYmlsaXR5ID0gZmFsc2U7XHJcblxyXG4gICAgICBjb25zdCBsZWdlbmRNb2RlID0gdGhpcy5wcm9wcy5jb25maWcubGVnZW5kTW9kZTtcclxuXHJcbiAgICAgIGlmIChsZWdlbmRNb2RlID09PSBFTGVnZW5kTW9kZS5TaG93V2l0aGluRXh0ZW50KSB7XHJcbiAgICAgICAgdGhpcy5sZWdlbmQuaGlkZUxheWVyc05vdEluQ3VycmVudFZpZXcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBhZGRDaGVja2JveFRvTGVnZW5kID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5sZWdlbmRDb250YWluZXJSZWYuY3VycmVudDtcclxuICAgIGlmICghY29udGFpbmVyIHx8ICF0aGlzLmFjdGl2ZVZpZXcpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsYXllcnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5lc3JpLWxlZ2VuZF9fc2VydmljZVwiKTtcclxuXHJcbiAgICBsYXllcnMuZm9yRWFjaCgobGF5ZXJOb2RlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGxheWVyTm9kZS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcclxuICAgICAgICBcIi5lc3JpLWxlZ2VuZF9fc2VydmljZS1sYWJlbFwiLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKCF0aXRsZUVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgIC8vIGV2aXRhciBkdXBsaWNhZG9zXHJcbiAgICAgIGlmICh0aXRsZUVsZW1lbnQuZGF0YXNldC5oYXNDb250cm9scyA9PT0gXCJ0cnVlXCIpIHJldHVybjtcclxuICAgICAgdGl0bGVFbGVtZW50LmRhdGFzZXQuaGFzQ29udHJvbHMgPSBcInRydWVcIjtcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyVGl0bGUgPSB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKTtcclxuXHJcbiAgICAgIC8vIPCflKUgQ0FQQSBSRUFMXHJcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5hY3RpdmVWaWV3Lm1hcC5hbGxMYXllcnMuZmluZChcclxuICAgICAgICAobCkgPT4gbC50aXRsZSA9PT0gbGF5ZXJUaXRsZSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIPCflKUgQk9EWSAoc2ltYm9sb2fDrWEgcXVlIHNlIHZhIGEgY29sYXBzYXIpXHJcbiAgICAgIGNvbnN0IGJvZHkgPSBsYXllck5vZGUucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgXCIuZXNyaS1sZWdlbmRfX2xheWVyLWJvZHksIC5lc3JpLWxlZ2VuZF9fbGF5ZXItdGFibGVcIixcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8g8J+UpSBDT05URU5FRE9SIElaUVVJRVJET1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGNvbnN0IGNvbnRyb2xzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnRyb2xzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgIGNvbnRyb2xzV3JhcHBlci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgY29udHJvbHNXcmFwcGVyLnN0eWxlLmdhcCA9IFwiNHB4XCI7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIOKchSBDSEVDS0JPWFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gbGF5ZXIgPyBsYXllci52aXNpYmxlIDogdHJ1ZTtcclxuXHJcbiAgICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyDwn5S9IEZMRUNIQSBDT0xBUFNBQkxFXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCLilrxcIjtcclxuICAgICAgYXJyb3cuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgIGFycm93LnN0eWxlLmZvbnRTaXplID0gXCIxMHB4XCI7XHJcbiAgICAgIGFycm93LnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgIGxldCBpc09wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgYXJyb3cub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaXNPcGVuID0gIWlzT3BlbjtcclxuXHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgIGJvZHkuc3R5bGUuZGlzcGxheSA9IGlzT3BlbiA/IFwiXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFycm93LmlubmVySFRNTCA9IGlzT3BlbiA/IFwi4pa8XCIgOiBcIuKWtlwiO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyDwn5SnIEVOU0FNQkxFXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgY29udHJvbHNXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgY29udHJvbHNXcmFwcGVyLmFwcGVuZENoaWxkKGFycm93KTtcclxuXHJcbiAgICAgIC8vIPCflKUgSEFDRVIgRkxFWCBFTCBUSVRMRVxyXG4gICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiZmxleC1zdGFydFwiO1xyXG4gICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuZ2FwID0gXCI2cHhcIjtcclxuXHJcbiAgICAgIC8vIPCflKUgVEVYVE8gT1JJR0lOQUxcclxuICAgICAgY29uc3QgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgdGV4dFNwYW4uaW5uZXJUZXh0ID0gbGF5ZXJUaXRsZTtcclxuXHJcbiAgICAgIC8vIPCflKUgTElNUElBUiBZIFJFQ09OU1RSVUlSXHJcbiAgICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udHJvbHNXcmFwcGVyKTtcclxuICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNhbGN1bGF0ZVN0eWxlID0gKCkgPT4ge1xyXG4gICAgbGV0IHN0eWxlO1xyXG4gICAgY29uc3QgY3VycmVudFdpZHRoID0gdGhpcy5jdXJyZW50V2lkdGggfHwgMTAwMDAwOyAvLyB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb25maWcuY2FyZFN0eWxlKSB7XHJcbiAgICAgICAgbGV0IGxheW91dDtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5jb25maWcuY2FyZExheW91dCB8fFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuY2FyZExheW91dCA9PT0gXCJhdXRvXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50V2lkdGggPD0gNjAwKSB7XHJcbiAgICAgICAgICAgIGxheW91dCA9IFwic3RhY2tcIjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxheW91dCA9IFwic2lkZS1ieS1zaWRlXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxheW91dCA9IHRoaXMucHJvcHMuY29uZmlnLmNhcmRMYXlvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgICAgdHlwZTogXCJjYXJkXCIgYXMgY29uc3QsXHJcbiAgICAgICAgICBsYXlvdXQ6IGxheW91dCxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0eWxlID0gXCJjbGFzc2ljXCI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0eWxlID0gXCJjbGFzc2ljXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3R5bGU7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RGVmYXVsdFN0eWxlQ29uZmlnKCk6IFN0eWxlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZUN1c3RvbTogZmFsc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBjb2xvcjogXCJcIixcclxuICAgICAgICBmaWxsVHlwZTogRmlsbFR5cGUuRklMTCxcclxuICAgICAgfSxcclxuICAgICAgZm9udENvbG9yOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFN0eWxlQ29uZmlnKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLnN0eWxlICYmIHRoaXMucHJvcHMuY29uZmlnLnN0eWxlLnVzZUN1c3RvbSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb25maWcuc3R5bGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0U3R5bGVDb25maWcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQWN0aXZlVmlld0NoYW5nZSA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGlmIChqaW11TWFwVmlldyAmJiBqaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlTGVnZW5kKGppbXVNYXBWaWV3LnZpZXcpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRTdGF0dXM6IExvYWRTdGF0dXMuRnVsZmlsbGVkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveUxlZ2VuZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uRGF0YVNvdXJjZUNyZWF0ZWQgPSAoZGF0YVNvdXJjZSk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVZpZXdCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcclxuICAgICAgLnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVMZWdlbmQodmlldyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGxvYWRTdGF0dXM6IExvYWRTdGF0dXMuRnVsZmlsbGVkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cclxuICBvbkNyZWF0ZURhdGFTb3VyY2VGYWlsZWQgPSAoZXJyb3IpOiB2b2lkID0+IHt9O1xyXG5cclxuICBvblJlc2l6ZSA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xyXG4gICAgdGhpcy5jdXJyZW50V2lkdGggPSB3aWR0aDtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCAmJiB0aGlzLnByb3BzLmNvbmZpZy5jYXJkTGF5b3V0ID09PSBcImF1dG9cIikge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY3VsYXRlU3R5bGUoKTtcclxuICAgICAgdGhpcy5sZWdlbmQuc3R5bGUgPSBzdHlsZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB1c2VNYXBXaWRnZXQgPVxyXG4gICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXTtcclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2UgPVxyXG4gICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICYmIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF07XHJcblxyXG4gICAgbGV0IGNvbnRlbnQgPSBudWxsO1xyXG4gICAgbGV0IGRhdGFTb3VyY2VDb250ZW50ID0gbnVsbDtcclxuXHJcbiAgICBpZiAodXNlTWFwV2lkZ2V0KSB7XHJcbiAgICAgIGRhdGFTb3VyY2VDb250ZW50ID0gKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMub25BY3RpdmVWaWV3Q2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgZGF0YVNvdXJjZUNvbnRlbnQgPSAoXHJcbiAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcclxuICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2V9XHJcbiAgICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXt0aGlzLm9uRGF0YVNvdXJjZUNyZWF0ZWR9XHJcbiAgICAgICAgICBvbkNyZWF0ZURhdGFTb3VyY2VGYWlsZWQ9e3RoaXMub25DcmVhdGVEYXRhU291cmNlRmFpbGVkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1c2VNYXBXaWRnZXQgJiYgIXVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgdGhpcy5kZXN0cm95TGVnZW5kKCk7XHJcbiAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtbGVnZW5kXCI+XHJcbiAgICAgICAgICA8V2lkZ2V0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgaWNvbj17bGVnZW5kSWNvbn1cclxuICAgICAgICAgICAgYXV0b0ZsaXBcclxuICAgICAgICAgICAgbWVzc2FnZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgIGlkOiBcIl93aWRnZXRMYWJlbFwiLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuX3dpZGdldExhYmVsLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGxvYWRpbmdDb250ZW50ID0gbnVsbDtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZFN0YXR1cyA9PT0gTG9hZFN0YXR1cy5QZW5kaW5nKSB7XHJcbiAgICAgICAgbG9hZGluZ0NvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImppbXUtc2Vjb25kYXJ5LWxvYWRpbmdcIiAvPjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHdpbmRvdy5qaW11Q29uZmlnLmlzSW5CdWlsZGVyKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdMZWdlbmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGVudCA9IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e3RoaXMuc3RhdGUud2lkZ2V0S2V5fVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmxlZ2VuZFdyYXBwZXJSZWZ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMTUpXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmdDb250ZW50fVxyXG5cclxuICAgICAgICAgIHsvKiDwn5SlIFTDjVRVTE8gTUVKT1JBRE8gKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjZweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2U1ZTVlNVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogSVpRVUlFUkRBOiBJQ09OTyArIFRFWFRPICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGdhcDogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIgfX0+8J+Xuu+4jzwvc3Bhbj5cclxuICAgICAgICAgICAgICBDYXBhcyB5IFNpbWJvbG9nw61hXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIERFUkVDSEE6IE9QQ0lPTkFMIChhY2Npb25lcyBmdXR1cmFzKSAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGNvbG9yOiBcIiM4ODhcIiB9fT5cclxuICAgICAgICAgICAgICB7LyogcHVlZGVzIHBvbmVyIGJvdG9uZXMgZGVzcHXDqXMgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIPCflKUgQ09OVEVORURPUiBDT04gU0NST0xMICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e3RoaXMubGVnZW5kQ29udGFpbmVyUmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbGVnZW5kLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDZweCA2cHggNHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZhZmFmYVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2U2ZTZlNlwiLFxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5tYXBDb250YWluZXJSZWZ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIG1hcENvbnRhaW5lclxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICB7ZGF0YVNvdXJjZUNvbnRlbnR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8UmVhY3RSZXNpemVEZXRlY3RvclxyXG4gICAgICAgICAgICB0YXJnZXRSZWY9e3RoaXMubGVnZW5kV3JhcHBlclJlZn1cclxuICAgICAgICAgICAgaGFuZGxlSGVpZ2h0XHJcbiAgICAgICAgICAgIGhhbmRsZVdpZHRoXHJcbiAgICAgICAgICAgIG9uUmVzaXplPXt0aGlzLm9uUmVzaXplfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY3NzPXtnZXRTdHlsZSh0aGlzLnByb3BzLnRoZW1lLCB0aGlzLmdldFN0eWxlQ29uZmlnKCkpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=