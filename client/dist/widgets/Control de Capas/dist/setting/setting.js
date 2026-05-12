System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui/basic/color-picker","jimu-layouts/layout-runtime"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-ui/lib/icons/uppercase.svg":
/*!*****************************************!*\
  !*** ./jimu-ui/lib/icons/uppercase.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\"><path fill=\"#000\" fill-rule=\"nonzero\" d=\"m6.828.535 4.966 11.01A.323.323 0 0 1 11.5 12a.78.78 0 0 1-.707-.455L9.182 8H2.818l-1.611 3.545A.78.78 0 0 1 .5 12a.323.323 0 0 1-.294-.456L5.172.535a.909.909 0 0 1 1.656 0M6 1 3.272 7h5.456z\"></path></svg>"

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

/***/ "./your-extensions/widgets/Control de Capas/src/setting/components/group-radios.tsx":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/setting/components/group-radios.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/Control de Capas/src/setting/translations/default.ts");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/** @jsx jsx */




const RadioItem = (props) => {
    const { onRadioChange, checked, itemId, name } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"], jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.defaultMessages);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 legend-tools" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "legend-tools-item card-style-radio" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'd-flex align-items-center', style: { cursor: 'pointer', fontWeight: 'normal' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { id: itemId, name: name, className: 'mr-1', onChange: (e) => {
                        onRadioChange(e);
                    }, checked: checked }),
                translate(itemId)))));
};
const GroupRadios = (props) => {
    const { itemsIds, itemsOptions, value, onChange, name } = props;
    const radiosContent = itemsIds.map((radioItemProps, index) => {
        const itemProps = {
            itemId: itemsIds[index],
            checked: value === itemsOptions[index],
            onRadioChange: () => { onChange(itemsOptions[index]); },
            name: name
        };
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(RadioItem, Object.assign({ key: index }, itemProps));
    });
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "card-layout-content pl-2", role: "radiogroup", css: groupRadioStyles }, radiosContent));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupRadios);
const groupRadioStyles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .legend-tools:last-child {
    .legend-tools-item {
      margin-bottom: -0.5rem;
    }
  }
`;


/***/ }),

/***/ "./your-extensions/widgets/Control de Capas/src/setting/lib/style.ts":
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/setting/lib/style.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getStyle(theme) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .widget-setting-legend{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${theme.ref.palette.neutral[1000]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .card-layout-content{
        width: 100%;
      }

      .legend-tools{
        .legend-tools-item{
          display: flex;
          margin-bottom: 8px;
        }
      }

      .advanced-setting-row .jimu-widget-setting--row-label {
        color: #c5c5c5;
        font-size: 0.875rem;
      }

      .map-selector-section .component-map-selector .form-control{
        width: 100%;
      }

      .jimu-builder--background-setting .background-image {
        display: none;
      }

      .jimu-builder--background-setting .background-image-fill-type {
        display: none;
      }
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/Control de Capas/src/setting/translations/default.ts":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/Control de Capas/src/setting/translations/default.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    sourceDescript: 'A web map or web scene, or any combination of the two.',
    showBaseMap: 'Show basemap legends',
    cardStyle: 'Use card style',
    showAllLegends: 'Show all layers',
    showWithinExtent: 'Show visible layers within current map extent',
    showVisible: 'Show visible layers',
    legendMode: 'Legend mode',
    respectLayerDefinitionExp: 'Respect layer filter settings'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-layouts/layout-runtime":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

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
  !*** ./your-extensions/widgets/Control de Capas/src/setting/setting.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLayout: () => (/* binding */ CardLayout),
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/Control de Capas/src/config.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/Control de Capas/src/setting/translations/default.ts");
/* harmony import */ var _lib_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/style */ "./your-extensions/widgets/Control de Capas/src/setting/lib/style.ts");
/* harmony import */ var _components_group_radios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/group-radios */ "./your-extensions/widgets/Control de Capas/src/setting/components/group-radios.tsx");
/** @jsx jsx */









const textIcon = __webpack_require__(/*! jimu-ui/lib/icons/uppercase.svg */ "./jimu-ui/lib/icons/uppercase.svg");
const allDefaultMessages = Object.assign({}, _translations_default__WEBPACK_IMPORTED_MODULE_6__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
var CardLayout;
(function (CardLayout) {
    CardLayout["Auto"] = "auto";
    CardLayout["SideBySide"] = "side-by-side";
    CardLayout["Stack"] = "stack";
})(CardLayout || (CardLayout = {}));
class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.supportedDsTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WebMap,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WebScene
        ]);
        this.getPortUrl = () => {
            const portUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
            return portUrl;
        };
        this.onOptionsChanged = (checked, name) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set(name, checked)
            });
            if (name === 'cardStyle') {
                this.setState({
                    cardStyle: checked
                });
            }
        };
        this.onCardLayoutChange = (cardLayout) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('cardLayout', cardLayout)
            });
            this.setState({
                cardLayoutValue: cardLayout
            });
        };
        this.onLegendModeChange = (legendMode) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('legendMode', legendMode)
            });
            this.setState({
                legendMode: legendMode
            });
        };
        this.onToggleUseDataEnabled = (useDataSourcesEnabled) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSourcesEnabled
            });
        };
        this.onDataSourceChange = (useDataSources) => {
            if (!useDataSources) {
                return;
            }
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: useDataSources
            });
        };
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetIds
            });
        };
        this.onUseCustomStyleChanged = (checked) => {
            // const style = this.props.config.style ? Immutable(this.props.config.style) : Immutable({} as Style);
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['style', 'useCustom'], checked)
            });
        };
        this.onFontStyleChanged = (color) => {
            // const style = this.props.config.style ? Immutable(this.props.config.style) : Immutable({} as Style);
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['style', 'fontColor'], color)
            });
        };
        this.onBackgroundStyleChange = (backgroundColor) => {
            var _a, _b, _c;
            const bg = {
                color: backgroundColor,
                fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FILL
            };
            let background = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)((_c = (_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.background) !== null && _c !== void 0 ? _c : {});
            for (const key in bg) {
                switch (key) {
                    case 'fillType':
                        if (background.fillType !== bg[key]) {
                            background = background.set('fillType', bg[key]);
                        }
                        break;
                    case 'color':
                        background = background.set('color', bg[key]);
                        break;
                    case 'image':
                        background = background.set('image', bg[key]);
                        break;
                }
            }
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['style', 'background'], background)
            });
        };
        const { cardLayout = CardLayout.Auto, cardStyle = false, legendMode = _config__WEBPACK_IMPORTED_MODULE_5__.ELegendMode.ShowVisible } = this.props.config;
        this.state = {
            cardStyle: cardStyle,
            cardLayoutValue: cardLayout,
            legendMode: legendMode
        };
        // Save respectLayerDefinitionExp option in the config to 'true' if it's not defined
        // if (this.props.config.respectLayerDefinitionExp === undefined) {
        //   this.props.onSettingChange({
        //     id: this.props.id,
        //     config: this.props.config.set('respectLayerDefinitionExp', true)
        //   })
        // }
    }
    translate(stringId) {
        return this.props.intl.formatMessage({
            id: stringId,
            defaultMessage: allDefaultMessages[stringId]
        });
    }
    getFormattedMessage(stringId) {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: stringId, defaultMessage: allDefaultMessages[stringId] });
    }
    getDefaultStyleConfig() {
        return {
            useCustom: false,
            background: {
                color: '',
                fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FILL
            },
            fontColor: ''
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
        var _a, _b, _c, _d, _e;
        let cardLayoutContent = null;
        if (this.state.cardStyle) {
            cardLayoutContent = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", role: "radiogroup" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_group_radios__WEBPACK_IMPORTED_MODULE_8__["default"], { value: this.state.cardLayoutValue, name: this.translate('cardStyle'), onChange: this.onCardLayoutChange, itemsIds: ['auto', 'sideBySide', 'stack'], itemsOptions: Object.values(CardLayout) })));
        }
        const legendModeContent = (
        // The itemsIds and itemsOptions should stay the same order
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", role: "radiogroup" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginLeft: '-0.5rem' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_group_radios__WEBPACK_IMPORTED_MODULE_8__["default"], { name: this.translate('legendMode'), value: this.state.legendMode, onChange: this.onLegendModeChange, itemsIds: ['showVisible', 'showWithinExtent'], itemsOptions: Object.values(_config__WEBPACK_IMPORTED_MODULE_5__.ELegendMode) }))));
        let displayStyleContent;
        if ((_a = this.props.config.style) === null || _a === void 0 ? void 0 : _a.useCustom) {
            displayStyleContent = 'block';
        }
        else {
            displayStyleContent = 'none';
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,_lib_style__WEBPACK_IMPORTED_MODULE_7__.getStyle)(this.props.theme) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-legend" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "map-selector-section", role: "group" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.getFormattedMessage('selectMapWidget') }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.translate('legendMode'), role: "group", "aria-label": this.translate('legendMode') }, legendModeContent),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.translate('options'), role: "group", "aria-label": this.translate('options') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { tag: 'label', label: this.getFormattedMessage('showBaseMap') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { className: "can-x-switch", checked: (this.props.config && this.props.config.showBaseMap) || false, "data-key": "showBaseMap", onChange: (evt) => {
                                this.onOptionsChanged(evt.target.checked, 'showBaseMap');
                            } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { tag: 'label', label: this.getFormattedMessage('cardStyle') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { className: "can-x-switch", checked: (this.props.config && this.props.config.cardStyle) || false, "data-key": "cardStyle", onChange: (evt) => {
                                this.onOptionsChanged(evt.target.checked, 'cardStyle');
                            } })),
                    cardLayoutContent),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { className: "advanced-setting-row", tag: 'label', label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "advance", defaultMessage: "Advanced" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { className: "can-x-switch", checked: this.getStyleConfig().useCustom || false, "data-key": "showBaseMap", onChange: (evt) => {
                                this.onUseCustomStyleChanged(evt.target.checked);
                            } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-4", style: { display: displayStyleContent } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "font", defaultMessage: "Font" }) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ThemeColorPicker, { icon: textIcon, type: "with-icon", specificTheme: this.props.theme2, value: this.getStyleConfig().fontColor ||
                                    ((_d = (_c = (_b = this.props.theme2.arcgis.widgets.legend.variants) === null || _b === void 0 ? void 0 : _b.default) === null || _c === void 0 ? void 0 : _c.root) === null || _d === void 0 ? void 0 : _d.color) ||
                                    '', onChange: this.onFontStyleChanged, "aria-label": this.translate('fontColor') })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "background", defaultMessage: "Background" }) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ThemeColorPicker, { specificTheme: this.props.theme2, value: ((_e = this.getStyleConfig().background) === null || _e === void 0 ? void 0 : _e.color) ||
                                    this.props.theme2.sys.color.surface.paper ||
                                    '', onChange: this.onBackgroundStyleChange, "aria-label": this.translate('backgroundColor') })))))));
    }
}
Setting.mapExtraStateProps = (state) => {
    return {
        dsJsons: state.appStateInBuilder.appConfig.dataSources
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9Db250cm9sIGRlIENhcGFzL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNHQSxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsMkNBQTRCO0lBQzVCLHNEQUF1QztJQUN2QyxtQ0FBb0I7QUFDdEIsQ0FBQyxFQUpXLFdBQVcsS0FBWCxXQUFXLFFBSXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BELGVBQWU7QUFDbUM7QUFDWjtBQUNlO0FBQzhCO0FBaUJuRixNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtJQUMxQyxNQUFNLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSztJQUN0RCxNQUFNLFNBQVMsR0FBRyw0Q0FBSyxDQUFDLGNBQWMsQ0FBQyw2REFBZSxFQUFFLHdFQUFrQixDQUFDO0lBQzNFLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsb0JBQW9CO1FBQ2pDLHdEQUFLLFNBQVMsRUFBQyxvQ0FBb0M7WUFDakQsK0NBQUMsMENBQUssSUFBQyxTQUFTLEVBQUMsMkJBQTJCLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO2dCQUM3RiwrQ0FBQywwQ0FBSyxJQUNKLEVBQUUsRUFBRSxNQUFNLEVBQ1YsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUMsTUFBTSxFQUNoQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3QkFDZCxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNsQixDQUFDLEVBQ0QsT0FBTyxFQUFFLE9BQU8sR0FDaEI7Z0JBQ0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUNaLENBQ0osQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVELE1B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QyxDQUNTO3dCQUNiLCtDQUFDLDJFQUFVLElBQ1QsS0FBSyxFQUNILCtDQUFDLHVEQUFnQixJQUNmLEVBQUUsRUFBQyxZQUFZLEVBQ2YsY0FBYyxFQUFDLFlBQVksR0FDM0I7NEJBR0osK0NBQUMsd0VBQWdCLElBQ2YsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNoQyxLQUFLLEVBQ0gsV0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFVBQVUsMENBQUUsS0FBSztvQ0FDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSztvQ0FDekMsRUFBRSxFQUVKLFFBQVEsRUFBRSxJQUFJLENBQUMsdUJBQXVCLGdCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEdBQzdDLENBQ1MsQ0FDVCxDQUNTLENBQ2IsQ0FDRixDQUNQO0lBQ0gsQ0FBQzs7QUExVU0sMEJBQWtCLEdBQUcsQ0FBQyxLQUFjLEVBQWMsRUFBRTtJQUN6RCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsV0FBVztLQUN2RDtBQUNILENBQUM7aUVBYmtCLE9BQU87QUFzVnBCLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvbGliL2ljb25zL3VwcGVyY2FzZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0NvbnRyb2wgZGUgQ2FwYXMvc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQ29udHJvbCBkZSBDYXBhcy9zcmMvc2V0dGluZy9jb21wb25lbnRzL2dyb3VwLXJhZGlvcy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0NvbnRyb2wgZGUgQ2FwYXMvc3JjL3NldHRpbmcvbGliL3N0eWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9Db250cm9sIGRlIENhcGFzL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQ29udHJvbCBkZSBDYXBhcy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMiAxMlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJub256ZXJvXFxcIiBkPVxcXCJtNi44MjguNTM1IDQuOTY2IDExLjAxQS4zMjMuMzIzIDAgMCAxIDExLjUgMTJhLjc4Ljc4IDAgMCAxLS43MDctLjQ1NUw5LjE4MiA4SDIuODE4bC0xLjYxMSAzLjU0NUEuNzguNzggMCAwIDEgLjUgMTJhLjMyMy4zMjMgMCAwIDEtLjI5NC0uNDU2TDUuMTcyLjUzNWEuOTA5LjkwOSAwIDAgMSAxLjY1NiAwTTYgMSAzLjI3MiA3aDUuNDU2elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHR5cGUgeyBJbW11dGFibGVPYmplY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgQmFja2dyb3VuZFN0eWxlIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmV4cG9ydCBlbnVtIEVMZWdlbmRNb2RlIHtcclxuICBTaG93VmlzaWJsZSA9ICdzaG93LXZpc2libGUnLFxyXG4gIFNob3dXaXRoaW5FeHRlbnQgPSAnc2hvdy13aXRoaW4tZXh0ZW50JyxcclxuICBTaG93QWxsID0gJ3Nob3ctYWxsJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlIHtcclxuICB1c2VDdXN0b206IGJvb2xlYW5cclxuICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kU3R5bGVcclxuICBmb250Q29sb3I6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgc2hvd0Jhc2VNYXA/OiBib29sZWFuXHJcbiAgY2FyZFN0eWxlPzogYm9vbGVhblxyXG4gIGNhcmRMYXlvdXQ/OiAnYXV0bycgfCAnc2lkZS1ieS1zaWRlJyB8ICdzdGFjaydcclxuICBsZWdlbmRNb2RlPzogRUxlZ2VuZE1vZGVcclxuICByZXNwZWN0TGF5ZXJEZWZpbml0aW9uRXhwPzogYm9vbGVhblxyXG4gIHN0eWxlOiBTdHlsZVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwgY3NzLCBob29rcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBMYWJlbCwgUmFkaW8gfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgYXMgamltdUxheW91dE1lc3NhZ2VzIH0gZnJvbSAnamltdS1sYXlvdXRzL2xheW91dC1ydW50aW1lJ1xyXG5cclxuaW50ZXJmYWNlIFJhZGlvSXRlbVByb3BzIHtcclxuICBvblJhZGlvQ2hhbmdlOiAoZXZ0OiBhbnkpID0+IGFueVxyXG4gIGNoZWNrZWQ6IGJvb2xlYW5cclxuICBpdGVtSWQ6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR3JvdXBSYWRpb3NQcm9wcyB7XHJcbiAgaXRlbXNJZHM6IHN0cmluZ1tdXHJcbiAgaXRlbXNPcHRpb25zOiBzdHJpbmdbXVxyXG4gIHZhbHVlOiBzdHJpbmdcclxuICBvbkNoYW5nZTogKGV2dDogYW55KSA9PiBhbnlcclxuICBuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgUmFkaW9JdGVtID0gKHByb3BzOiBSYWRpb0l0ZW1Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgb25SYWRpb0NoYW5nZSwgY2hlY2tlZCwgaXRlbUlkLCBuYW1lIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcywgamltdUxheW91dE1lc3NhZ2VzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGxlZ2VuZC10b29sc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC10b29scy1pdGVtIGNhcmQtc3R5bGUtcmFkaW9cIj5cclxuICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgaWQ9e2l0ZW1JZH1cclxuICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtci0xJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBvblJhZGlvQ2hhbmdlKGUpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RyYW5zbGF0ZShpdGVtSWQpfVxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBHcm91cFJhZGlvcyA9IChwcm9wczogR3JvdXBSYWRpb3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXNJZHMsIGl0ZW1zT3B0aW9ucywgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHJhZGlvc0NvbnRlbnQgPSBpdGVtc0lkcy5tYXAoKHJhZGlvSXRlbVByb3BzLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbVByb3BzOiBSYWRpb0l0ZW1Qcm9wcyA9IHtcclxuICAgICAgaXRlbUlkOiBpdGVtc0lkc1tpbmRleF0sXHJcbiAgICAgIGNoZWNrZWQ6IHZhbHVlID09PSBpdGVtc09wdGlvbnNbaW5kZXhdLFxyXG4gICAgICBvblJhZGlvQ2hhbmdlOiAoKSA9PiB7IG9uQ2hhbmdlKGl0ZW1zT3B0aW9uc1tpbmRleF0pIH0sXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICAgIHJldHVybiA8UmFkaW9JdGVtIGtleT17aW5kZXh9IHsuLi5pdGVtUHJvcHN9ID48L1JhZGlvSXRlbT5cclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGF5b3V0LWNvbnRlbnQgcGwtMlwiIHJvbGU9XCJyYWRpb2dyb3VwXCIgY3NzPXtncm91cFJhZGlvU3R5bGVzfT5cclxuICAgICAge3JhZGlvc0NvbnRlbnR9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwUmFkaW9zXHJcblxyXG5jb25zdCBncm91cFJhZGlvU3R5bGVzID0gY3NzYFxyXG4gIC5sZWdlbmQtdG9vbHM6bGFzdC1jaGlsZCB7XHJcbiAgICAubGVnZW5kLXRvb2xzLWl0ZW0ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG4iLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzIHtcclxuICByZXR1cm4gY3NzYFxyXG4gICAgLndpZGdldC1zZXR0aW5nLWxlZ2VuZHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICAgIC5zb3VyY2UtZGVzY3JpcHQge1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnJlZi5wYWxldHRlLm5ldXRyYWxbMTAwMF19O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAud2VibWFwLXRodW1ibmFpbHtcclxuICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICBib3JkZXI6ICR7cG9saXNoZWQucmVtKDIpfSBzb2xpZCBpbml0aWFsO1xyXG4gICAgICAgIGltZywgZGl2e1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1sYXlvdXQtY29udGVudHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxlZ2VuZC10b29sc3tcclxuICAgICAgICAubGVnZW5kLXRvb2xzLWl0ZW17XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLXNldHRpbmctcm93IC5qaW11LXdpZGdldC1zZXR0aW5nLS1yb3ctbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjYzVjNWM1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXAtc2VsZWN0b3Itc2VjdGlvbiAuY29tcG9uZW50LW1hcC1zZWxlY3RvciAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuamltdS1idWlsZGVyLS1iYWNrZ3JvdW5kLXNldHRpbmcgLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5qaW11LWJ1aWxkZXItLWJhY2tncm91bmQtc2V0dGluZyAuYmFja2dyb3VuZC1pbWFnZS1maWxsLXR5cGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNvdXJjZURlc2NyaXB0OiAnQSB3ZWIgbWFwIG9yIHdlYiBzY2VuZSwgb3IgYW55IGNvbWJpbmF0aW9uIG9mIHRoZSB0d28uJyxcclxuICBzaG93QmFzZU1hcDogJ1Nob3cgYmFzZW1hcCBsZWdlbmRzJyxcclxuICBjYXJkU3R5bGU6ICdVc2UgY2FyZCBzdHlsZScsXHJcbiAgc2hvd0FsbExlZ2VuZHM6ICdTaG93IGFsbCBsYXllcnMnLFxyXG4gIHNob3dXaXRoaW5FeHRlbnQ6ICdTaG93IHZpc2libGUgbGF5ZXJzIHdpdGhpbiBjdXJyZW50IG1hcCBleHRlbnQnLFxyXG4gIHNob3dWaXNpYmxlOiAnU2hvdyB2aXNpYmxlIGxheWVycycsXHJcbiAgbGVnZW5kTW9kZTogJ0xlZ2VuZCBtb2RlJyxcclxuICByZXNwZWN0TGF5ZXJEZWZpbml0aW9uRXhwOiAnUmVzcGVjdCBsYXllciBmaWx0ZXIgc2V0dGluZ3MnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2xheW91dHNfbGF5b3V0X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfY29sb3JfcGlja2VyX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsXHJcbiAgSW1tdXRhYmxlLFxyXG4gIHR5cGUgSW1tdXRhYmxlT2JqZWN0LFxyXG4gIHR5cGUgRGF0YVNvdXJjZUpzb24sXHJcbiAgdHlwZSBJTVN0YXRlLFxyXG4gIEZvcm1hdHRlZE1lc3NhZ2UsXHJcbiAganN4LFxyXG4gIGdldEFwcFN0b3JlLFxyXG4gIHR5cGUgVXNlRGF0YVNvdXJjZSxcclxuICBEYXRhU291cmNlVHlwZXNcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7XHJcbiAgU3dpdGNoLFxyXG4gIHR5cGUgQmFja2dyb3VuZFN0eWxlLFxyXG4gIEZpbGxUeXBlLFxyXG4gIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11RGVmYXVsdE1lc3NhZ2VcclxufSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQge1xyXG4gIE1hcFdpZGdldFNlbGVjdG9yLFxyXG4gIFNldHRpbmdTZWN0aW9uLFxyXG4gIFNldHRpbmdSb3dcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHR5cGUgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgLyogRGF0YVNvdXJjZVNlbGVjdG9yICovICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xyXG5pbXBvcnQgeyBUaGVtZUNvbG9yUGlja2VyIH0gZnJvbSAnamltdS11aS9iYXNpYy9jb2xvci1waWNrZXInXHJcbmltcG9ydCB7IEVMZWdlbmRNb2RlLCB0eXBlIElNQ29uZmlnLCB0eXBlIFN0eWxlIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IGdldFN0eWxlIH0gZnJvbSAnLi9saWIvc3R5bGUnXHJcbmltcG9ydCBHcm91cFJhZGlvcyBmcm9tICcuL2NvbXBvbmVudHMvZ3JvdXAtcmFkaW9zJ1xyXG5jb25zdCB0ZXh0SWNvbiA9IHJlcXVpcmUoJ2ppbXUtdWkvbGliL2ljb25zL3VwcGVyY2FzZS5zdmcnKVxyXG5jb25zdCBhbGxEZWZhdWx0TWVzc2FnZXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0TWVzc2FnZXMsIGppbXVEZWZhdWx0TWVzc2FnZSlcclxuXHJcbmV4cG9ydCBlbnVtIENhcmRMYXlvdXQge1xyXG4gIEF1dG8gPSAnYXV0bycsXHJcbiAgU2lkZUJ5U2lkZSA9ICdzaWRlLWJ5LXNpZGUnLFxyXG4gIFN0YWNrID0gJ3N0YWNrJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xyXG4gIGRzSnNvbnM6IEltbXV0YWJsZU9iamVjdDx7IFtkc0lkOiBzdHJpbmddOiBEYXRhU291cmNlSnNvbiB9PlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFNldHRpbmdTdGF0ZSB7XHJcbiAgY2FyZFN0eWxlOiBib29sZWFuXHJcbiAgY2FyZExheW91dFZhbHVlOiBzdHJpbmdcclxuICBsZWdlbmRNb2RlOiBFTGVnZW5kTW9kZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsXHJcbldpZGdldFNldHRpbmdTdGF0ZVxyXG4+IHtcclxuICBzdXBwb3J0ZWREc1R5cGVzID0gSW1tdXRhYmxlKFtcclxuICAgIERhdGFTb3VyY2VUeXBlcy5XZWJNYXAsXHJcbiAgICBEYXRhU291cmNlVHlwZXMuV2ViU2NlbmVcclxuICBdKVxyXG5cclxuICBzdGF0aWMgbWFwRXh0cmFTdGF0ZVByb3BzID0gKHN0YXRlOiBJTVN0YXRlKTogRXh0cmFQcm9wcyA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkc0pzb25zOiBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlci5hcHBDb25maWcuZGF0YVNvdXJjZXNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBjb25zdCB7IGNhcmRMYXlvdXQgPSBDYXJkTGF5b3V0LkF1dG8sIGNhcmRTdHlsZSA9IGZhbHNlLCBsZWdlbmRNb2RlID0gRUxlZ2VuZE1vZGUuU2hvd1Zpc2libGUgfSA9IHRoaXMucHJvcHMuY29uZmlnXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYXJkU3R5bGU6IGNhcmRTdHlsZSxcclxuICAgICAgY2FyZExheW91dFZhbHVlOiBjYXJkTGF5b3V0LFxyXG4gICAgICBsZWdlbmRNb2RlOiBsZWdlbmRNb2RlXHJcbiAgICB9XHJcbiAgICAvLyBTYXZlIHJlc3BlY3RMYXllckRlZmluaXRpb25FeHAgb3B0aW9uIGluIHRoZSBjb25maWcgdG8gJ3RydWUnIGlmIGl0J3Mgbm90IGRlZmluZWRcclxuICAgIC8vIGlmICh0aGlzLnByb3BzLmNvbmZpZy5yZXNwZWN0TGF5ZXJEZWZpbml0aW9uRXhwID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgLy8gICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgLy8gICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdyZXNwZWN0TGF5ZXJEZWZpbml0aW9uRXhwJywgdHJ1ZSlcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZSAoc3RyaW5nSWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgaWQ6IHN0cmluZ0lkLFxyXG4gICAgICBkZWZhdWx0TWVzc2FnZTogYWxsRGVmYXVsdE1lc3NhZ2VzW3N0cmluZ0lkXVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldEZvcm1hdHRlZE1lc3NhZ2UgKHN0cmluZ0lkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17c3RyaW5nSWR9IGRlZmF1bHRNZXNzYWdlPXthbGxEZWZhdWx0TWVzc2FnZXNbc3RyaW5nSWRdfSAvPlxyXG4gIH1cclxuXHJcbiAgZ2V0UG9ydFVybCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgcG9ydFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcclxuICAgIHJldHVybiBwb3J0VXJsXHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0U3R5bGVDb25maWcgKCk6IFN0eWxlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZUN1c3RvbTogZmFsc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBjb2xvcjogJycsXHJcbiAgICAgICAgZmlsbFR5cGU6IEZpbGxUeXBlLkZJTExcclxuICAgICAgfSxcclxuICAgICAgZm9udENvbG9yOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGVDb25maWcgKCk6IFN0eWxlIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5zdHlsZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5zdHlsZS51c2VDdXN0b20pIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29uZmlnLnN0eWxlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0U3R5bGVDb25maWcoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PcHRpb25zQ2hhbmdlZCA9IChjaGVja2VkLCBuYW1lKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChuYW1lLCBjaGVja2VkKVxyXG4gICAgfSlcclxuICAgIGlmIChuYW1lID09PSAnY2FyZFN0eWxlJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjYXJkU3R5bGU6IGNoZWNrZWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2FyZExheW91dENoYW5nZSA9IChjYXJkTGF5b3V0OiBDYXJkTGF5b3V0KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnY2FyZExheW91dCcsIGNhcmRMYXlvdXQpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXJkTGF5b3V0VmFsdWU6IGNhcmRMYXlvdXRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkxlZ2VuZE1vZGVDaGFuZ2UgPSAobGVnZW5kTW9kZTogRUxlZ2VuZE1vZGUpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdsZWdlbmRNb2RlJywgbGVnZW5kTW9kZSlcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxlZ2VuZE1vZGU6IGxlZ2VuZE1vZGVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZVVzZURhdGFFbmFibGVkID0gKHVzZURhdGFTb3VyY2VzRW5hYmxlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgIGlmICghdXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uVXNlQ3VzdG9tU3R5bGVDaGFuZ2VkID0gKGNoZWNrZWQpID0+IHtcclxuICAgIC8vIGNvbnN0IHN0eWxlID0gdGhpcy5wcm9wcy5jb25maWcuc3R5bGUgPyBJbW11dGFibGUodGhpcy5wcm9wcy5jb25maWcuc3R5bGUpIDogSW1tdXRhYmxlKHt9IGFzIFN0eWxlKTtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydzdHlsZScsICd1c2VDdXN0b20nXSwgY2hlY2tlZClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkZvbnRTdHlsZUNoYW5nZWQgPSAoY29sb3IpID0+IHtcclxuICAgIC8vIGNvbnN0IHN0eWxlID0gdGhpcy5wcm9wcy5jb25maWcuc3R5bGUgPyBJbW11dGFibGUodGhpcy5wcm9wcy5jb25maWcuc3R5bGUpIDogSW1tdXRhYmxlKHt9IGFzIFN0eWxlKTtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydzdHlsZScsICdmb250Q29sb3InXSwgY29sb3IpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25CYWNrZ3JvdW5kU3R5bGVDaGFuZ2UgPSAoYmFja2dyb3VuZENvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBiZyA9IHtcclxuICAgICAgY29sb3I6IGJhY2tncm91bmRDb2xvcixcclxuICAgICAgZmlsbFR5cGU6IEZpbGxUeXBlLkZJTExcclxuICAgIH1cclxuICAgIGxldCBiYWNrZ3JvdW5kID0gSW1tdXRhYmxlKFxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZz8uc3R5bGU/LmJhY2tncm91bmQgPz8gKHt9IGFzIEJhY2tncm91bmRTdHlsZSlcclxuICAgIClcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGJnKSB7XHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAnZmlsbFR5cGUnOlxyXG4gICAgICAgICAgaWYgKGJhY2tncm91bmQuZmlsbFR5cGUgIT09IGJnW2tleV0pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmQuc2V0KCdmaWxsVHlwZScsIGJnW2tleV0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2NvbG9yJzpcclxuICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kLnNldCgnY29sb3InLCBiZ1trZXldKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZC5zZXQoJ2ltYWdlJywgYmdba2V5XSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldEluKFsnc3R5bGUnLCAnYmFja2dyb3VuZCddLCBiYWNrZ3JvdW5kKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBsZXQgY2FyZExheW91dENvbnRlbnQgPSBudWxsXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jYXJkU3R5bGUpIHtcclxuICAgICAgY2FyZExheW91dENvbnRlbnQgPSAoXHJcbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIiByb2xlPVwicmFkaW9ncm91cFwiPlxyXG4gICAgICAgICAgPEdyb3VwUmFkaW9zIHZhbHVlPXt0aGlzLnN0YXRlLmNhcmRMYXlvdXRWYWx1ZX1cclxuICAgICAgICAgICAgbmFtZT17dGhpcy50cmFuc2xhdGUoJ2NhcmRTdHlsZScpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNhcmRMYXlvdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIGl0ZW1zSWRzPXtbJ2F1dG8nLCAnc2lkZUJ5U2lkZScsICdzdGFjayddfVxyXG4gICAgICAgICAgICBpdGVtc09wdGlvbnM9e09iamVjdC52YWx1ZXMoQ2FyZExheW91dCl9ID5cclxuICAgICAgICAgIDwvR3JvdXBSYWRpb3M+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGVnZW5kTW9kZUNvbnRlbnQgPSAoXHJcbiAgICAgIC8vIFRoZSBpdGVtc0lkcyBhbmQgaXRlbXNPcHRpb25zIHNob3VsZCBzdGF5IHRoZSBzYW1lIG9yZGVyXHJcbiAgICAgIDxTZXR0aW5nUm93IGZsb3c9XCJ3cmFwXCIgcm9sZT1cInJhZGlvZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICctMC41cmVtJyB9fT5cclxuICAgICAgICAgIDxHcm91cFJhZGlvc1xyXG4gICAgICAgICAgICBuYW1lPXt0aGlzLnRyYW5zbGF0ZSgnbGVnZW5kTW9kZScpfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sZWdlbmRNb2RlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkxlZ2VuZE1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGl0ZW1zSWRzPXtbJ3Nob3dWaXNpYmxlJywgJ3Nob3dXaXRoaW5FeHRlbnQnXX1cclxuICAgICAgICAgICAgaXRlbXNPcHRpb25zPXtPYmplY3QudmFsdWVzKEVMZWdlbmRNb2RlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgIClcclxuXHJcbiAgICBsZXQgZGlzcGxheVN0eWxlQ29udGVudFxyXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLnN0eWxlPy51c2VDdXN0b20pIHtcclxuICAgICAgZGlzcGxheVN0eWxlQ29udGVudCA9ICdibG9jaydcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BsYXlTdHlsZUNvbnRlbnQgPSAnbm9uZSdcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNzcz17Z2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctbGVnZW5kXCI+XHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXNlbGVjdG9yLXNlY3Rpb25cIlxyXG4gICAgICAgICAgICByb2xlPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5nZXRGb3JtYXR0ZWRNZXNzYWdlKCdzZWxlY3RNYXBXaWRnZXQnKX0gLz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT17dGhpcy50cmFuc2xhdGUoJ2xlZ2VuZE1vZGUnKX1cclxuICAgICAgICAgICAgcm9sZT1cImdyb3VwXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy50cmFuc2xhdGUoJ2xlZ2VuZE1vZGUnKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xlZ2VuZE1vZGVDb250ZW50fVxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgICAgdGl0bGU9e3RoaXMudHJhbnNsYXRlKCdvcHRpb25zJyl9XHJcbiAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMudHJhbnNsYXRlKCdvcHRpb25zJyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IHRhZz0nbGFiZWwnIGxhYmVsPXt0aGlzLmdldEZvcm1hdHRlZE1lc3NhZ2UoJ3Nob3dCYXNlTWFwJyl9ID5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYW4teC1zd2l0Y2hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17XHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5zaG93QmFzZU1hcCkgfHwgZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEta2V5PVwic2hvd0Jhc2VNYXBcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvbnNDaGFuZ2VkKGV2dC50YXJnZXQuY2hlY2tlZCwgJ3Nob3dCYXNlTWFwJylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICAgICAgey8qIDxTZXR0aW5nUm93IHRhZz0nbGFiZWwnIGxhYmVsPXt0aGlzLmdldEZvcm1hdHRlZE1lc3NhZ2UoJ3Jlc3BlY3RMYXllckRlZmluaXRpb25FeHAnKX0gPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbi14LXN3aXRjaFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLnJlc3BlY3RMYXllckRlZmluaXRpb25FeHApIHx8IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWtleT1cInJlc3BlY3RMYXllckRlZmluaXRpb25FeHBcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvbnNDaGFuZ2VkKGV2dC50YXJnZXQuY2hlY2tlZCwgJ3Jlc3BlY3RMYXllckRlZmluaXRpb25FeHAnKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+ICovfVxyXG5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgdGFnPSdsYWJlbCcgbGFiZWw9e3RoaXMuZ2V0Rm9ybWF0dGVkTWVzc2FnZSgnY2FyZFN0eWxlJyl9ID5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYW4teC1zd2l0Y2hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17XHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5jYXJkU3R5bGUpIHx8IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWtleT1cImNhcmRTdHlsZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9uT3B0aW9uc0NoYW5nZWQoZXZ0LnRhcmdldC5jaGVja2VkLCAnY2FyZFN0eWxlJylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICB7Y2FyZExheW91dENvbnRlbnR9XHJcblxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR2YW5jZWQtc2V0dGluZy1yb3dcIlxyXG4gICAgICAgICAgICAgIHRhZz0nbGFiZWwnXHJcbiAgICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJhZHZhbmNlXCIgZGVmYXVsdE1lc3NhZ2U9XCJBZHZhbmNlZFwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FuLXgtc3dpdGNoXCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuZ2V0U3R5bGVDb25maWcoKS51c2VDdXN0b20gfHwgZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWtleT1cInNob3dCYXNlTWFwXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub25Vc2VDdXN0b21TdHlsZUNoYW5nZWQoZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiIHN0eWxlPXt7IGRpc3BsYXk6IGRpc3BsYXlTdHlsZUNvbnRlbnQgfX0+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgICAgICAgIGxhYmVsPXs8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImZvbnRcIiBkZWZhdWx0TWVzc2FnZT1cIkZvbnRcIiAvPn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBpY29uPXt0ZXh0SWNvbn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIndpdGgtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljVGhlbWU9e3RoaXMucHJvcHMudGhlbWUyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdHlsZUNvbmZpZygpLmZvbnRDb2xvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGhlbWUyLmFyY2dpcy53aWRnZXRzLmxlZ2VuZC52YXJpYW50cz8uZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPy5yb290Py5jb2xvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Gb250U3R5bGVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnRyYW5zbGF0ZSgnZm9udENvbG9yJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1Jvd1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJCYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY1RoZW1lPXt0aGlzLnByb3BzLnRoZW1lMn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3R5bGVDb25maWcoKS5iYWNrZ3JvdW5kPy5jb2xvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGhlbWUyLnN5cy5jb2xvci5zdXJmYWNlLnBhcGVyIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkJhY2tncm91bmRTdHlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy50cmFuc2xhdGUoJ2JhY2tncm91bmRDb2xvcicpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=