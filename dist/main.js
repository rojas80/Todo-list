/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* \r\n#eef2f5 light grey\r\n#113334 dark green //header text\r\n##d0492a orange\r\n*/\r\n:root{\r\n    --bgcolor: #7171AB;\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody{\r\n    min-height: 100vh;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 20vw 80vw;\r\n    grid-template-rows: 10vh 80vh 10vh;\r\n    background: var(--bgcolor);\r\n}\r\nh2,h1{\r\n    text-align: center;\r\n}\r\n/* header */\r\n.header{\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    font-size: 3vh;\r\n}\r\n/* sideContainer */\r\n.navBar{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.sideContainer{\r\n}\r\n.navBtn{\r\n    padding: 5%;\r\n    font-size: 2vh;\r\n}\r\n/* mainContainer */\r\n.mainContainer{\r\n    background: white;\r\n    text-align: center;\r\n}\r\n.taskContainer,.notesContainer{\r\n    width: 79vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/* task */\r\n.taskForm-popup, .notesForm-pop{\r\n    width: 50vw;\r\n    display: none;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border: 1px solid #ccc;\r\n    padding: 20px;\r\n    background: #fff;\r\n    z-index: 1;\r\n}\r\n.domTaskElement{\r\n    border: 1px solid  blue;\r\n    height: 5vh;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 2%;\r\n    border-radius: 10px;\r\n    margin: 1.5%;\r\n}\r\n.createTaskFormBtn{\r\n    width: 50%;\r\n}\r\n.taskFormBtn{\r\n    width: 100%;\r\n}\r\n.deleteElement:hover{\r\n    border: 2px solid red;\r\n}\r\n/* important */\r\n\r\n/*  */\r\n.notesBtnContainer{\r\n    text-align: center;\r\n}\r\n.creatNotesFormBtn{\r\n    width: 50vw;\r\n}\r\n\r\n\r\n/* Notes */\r\n.notesContainer{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));\r\n    padding: 2%;\r\n}\r\n.note{\r\n    text-align: center;\r\n    margin: 2%;\r\n    background: #8FC1E3;\r\n    height: 10vh;\r\n    width: 25vw;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.deleteNote{\r\n    position: absolute;\r\n    width: 18px;\r\n    top: 1vh;\r\n    right: 1vw;\r\n\r\n}\r\n\r\n\r\n/* footer */\r\n.footer{\r\n    grid-row-start: 3;\r\n    grid-row-end: 4;\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    /* border: 2px solid orange; */\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/important.js":
/*!*************************************!*\
  !*** ./src/components/important.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction createDomElement(importantTasks){\r\n    \r\n    for(let key in importantTasks){\r\n        console.log(typeof (importantTasks[key]['important']));\r\n        console.log(importantTasks[key]['important'] == true);\r\n        if(importantTasks[key]['important'] == true){\r\n            const mainContainer = document.querySelector('.mainContainer');\r\n            const domTasksElement  = document.createElement('div');\r\n            domTasksElement.classList.add('domTaskElement');\r\n            domTasksElement.style.display = 'flex';\r\n            const tasksDescription = document.createElement('p');\r\n            tasksDescription.textContent = importantTasks[key]['description'];\r\n   \r\n            const tasksNotes  = document.createElement('p');\r\n            tasksNotes.textContent = importantTasks[key]['notes'];\r\n            const deleteElement = document.createElement('div');\r\n            deleteElement.classList.add('deleteElement');\r\n            deleteElement.textContent = 'X';\r\n\r\n            domTasksElement.appendChild(tasksDescription);\r\n            domTasksElement.appendChild(tasksNotes);\r\n            domTasksElement.appendChild(deleteElement);\r\n            mainContainer.appendChild(domTasksElement);\r\n        }\r\n    }\r\n}\r\n\r\n\r\nfunction important(){\r\n    const  mainContainer = document.querySelector('.mainContainer');\r\n    mainContainer.textContent = '';\r\n    const importantTitle = document.createElement('h2');\r\n    importantTitle.textContent = 'Important';\r\n    mainContainer.appendChild(importantTitle);\r\n    let importantTasks  = JSON.parse(localStorage.getItem(\"tasks\"));\r\n    createDomElement(importantTasks);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (important);\n\n//# sourceURL=webpack://restaurant-page/./src/components/important.js?");

/***/ }),

/***/ "./src/components/loadPage.js":
/*!************************************!*\
  !*** ./src/components/loadPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sideBarContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sideBarContent */ \"./src/components/sideBarContent.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/components/tasks.js\");\n\r\n\r\n\r\nfunction creatHeader(){\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n    const title = document.createElement('h1');\r\n\r\n    title.textContent = 'To Do List';\r\n    header.appendChild(title);\r\n    return header;\r\n}\r\nfunction createSideContainer(){\r\n    const sideContainer= document.createElement('div');\r\n    sideContainer.classList.add('sideContainer');\r\n    sideContainer.appendChild((0,_sideBarContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n    return sideContainer;\r\n}\r\nfunction createMainContainer(){\r\n    const mainContainer = document.createElement('div');\r\n    mainContainer.classList.add('mainContainer');\r\n    return mainContainer;\r\n}\r\nfunction createFooter(){\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n    footer.textContent='footer';\r\n    return footer;\r\n}\r\nfunction loadPage(){\r\n    const htmlBody = document.querySelector('body');\r\n    htmlBody.appendChild(creatHeader());\r\n    htmlBody.appendChild(createSideContainer());\r\n    htmlBody.appendChild(createMainContainer());\r\n    htmlBody.appendChild(createFooter());\r\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    return htmlBody;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/components/loadPage.js?");

/***/ }),

/***/ "./src/components/notes.js":
/*!*********************************!*\
  !*** ./src/components/notes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _notes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes.json */ \"./src/components/notes.json\");\n\r\n\r\nlet newNoteJS = {};\r\n\r\nfunction loadNotesData(){\r\n    fetch(_notes_json__WEBPACK_IMPORTED_MODULE_0__).then(response => response.json()).then(data =>{\r\n        for(const noteKeys in data){\r\n            const note = data[noteKeys];\r\n            newNoteJS[noteKeys] = {\r\n                \"title\" : note.title,\r\n                \"text\": note.text\r\n            }\r\n           //createNoteDomElement(note.title, note.text); delete later\r\n        }\r\n    });\r\n\r\n\r\n    const retrieveJsonString = localStorage.getItem(\"notes\");\r\n    const retrieveJsonObject = JSON.parse(retrieveJsonString);\r\n    \r\n    for(const key in retrieveJsonObject){\r\n        createNoteDomElement(retrieveJsonObject[key].title, retrieveJsonObject[key].text);\r\n\r\n        console.log(retrieveJsonObject[key].title);\r\n        console.log(retrieveJsonObject[key].text);\r\n    }\r\n    console.log(retrieveJsonObject);\r\n\r\n}\r\n\r\nfunction createNoteDomElement(title, text){\r\n    const mainContainer = document.querySelector('.mainContainer');\r\n    const noteContainer = document.querySelector('.notesContainer');\r\n\r\n    const domNoteElement = document.createElement('div');\r\n    domNoteElement.classList.add('note');\r\n\r\n    const noteTitle = document.createElement('p');\r\n    noteTitle.textContent = title;\r\n\r\n    const noteText = document.createElement('p');\r\n    noteText.textContent = text;\r\n\r\n    domNoteElement.appendChild(noteTitle);\r\n    domNoteElement.appendChild(noteText);\r\n    noteContainer.appendChild(domNoteElement);\r\n    mainContainer.appendChild(noteContainer);\r\n}\r\n\r\nfunction createNotesForm(){\r\n    const notesForm = document.createElement('form');\r\n    notesForm.classList.add(\"notesForm-pop\");\r\n\r\n    const noteDescription = document.createElement('label');\r\n    noteDescription.textContent = 'Description';\r\n\r\n    const notesDescriptionInput = document.createElement('input');\r\n    notesDescriptionInput.type = 'text';\r\n\r\n    const notesText =  document.createElement('input');\r\n    notesText.type = 'text';\r\n    const addNoteBtn = document.createElement('button');\r\n    addNoteBtn.textContent =  '+Add Note';\r\n    const closeNoteFormBtn = document.createElement('button');\r\n    closeNoteFormBtn.textContent = 'Close';\r\n\r\n    addNoteBtn.addEventListener('click', function(event){\r\n        event.preventDefault();\r\n        createNoteDomElement(notesDescriptionInput.value, notesText.value);\r\n        updateNoteJs(notesDescriptionInput.value, notesText.value);\r\n\r\n        newNoteJS[notesDescriptionInput.value.replace(/\\s/g,\"\").toLocaleLowerCase()] = {\r\n            \"title\" : notesDescriptionInput.value,\r\n            \"text\" : notesText.value\r\n        }\r\n        const jsonString = JSON.stringify(newNoteJS);\r\n        localStorage.setItem('notes', jsonString);\r\n\r\n\r\n        document.querySelector('.notesForm-pop').style.display = 'none'\r\n    });\r\n\r\n    closeNoteFormBtn.addEventListener('click', function(event){\r\n        event.preventDefault();\r\n        document.querySelector('.notesForm-pop').style.display = 'none'\r\n    });\r\n\r\n    notesForm.appendChild(noteDescription);\r\n    notesForm.appendChild(notesDescriptionInput);\r\n    notesForm.appendChild(document.createElement('br'))\r\n    notesForm.appendChild(notesText);\r\n    notesForm.appendChild(document.createElement('br'))\r\n    notesForm.appendChild(addNoteBtn);\r\n    notesForm.appendChild(closeNoteFormBtn);\r\n    return notesForm;\r\n}\r\nfunction createNotesBtn(){\r\n    const notesBtnContainer = document.createElement('div');\r\n    notesBtnContainer.classList.add('notesBtnContainer');\r\n\r\n    const creatNotesTaskBtn = document.createElement('button');\r\n    creatNotesTaskBtn.classList.add('creatNotesFormBtn');\r\n    creatNotesTaskBtn.textContent ='+ Add Note';\r\n\r\n    creatNotesTaskBtn.addEventListener('click', function(){\r\n        console.log(\"add notes button\");\r\n        document.querySelector('.notesForm-pop').style.display = 'block';\r\n    \r\n    })\r\n    notesBtnContainer.appendChild(creatNotesTaskBtn);\r\n    notesBtnContainer.appendChild(createNotesForm());\r\n\r\n    return notesBtnContainer;\r\n\r\n}\r\nfunction notes(){\r\n    const  mainContainer = document.querySelector('.mainContainer');\r\n    mainContainer.textContent = '';\r\n    const notesTitle = document.createElement('h2');\r\n    notesTitle.textContent = 'Notes';\r\n\r\n    const notesContainer = document.createElement('div');\r\n    notesContainer.classList.add('notesContainer');\r\n\r\n    mainContainer.appendChild(notesTitle);\r\n    mainContainer.appendChild(createNotesBtn());\r\n    mainContainer.appendChild(notesContainer);\r\n    loadNotesData();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notes);       \n\n//# sourceURL=webpack://restaurant-page/./src/components/notes.js?");

/***/ }),

/***/ "./src/components/sideBarContent.js":
/*!******************************************!*\
  !*** ./src/components/sideBarContent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/components/tasks.js\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes */ \"./src/components/notes.js\");\n/* harmony import */ var _important__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./important */ \"./src/components/important.js\");\n\r\n\r\n\r\n\r\nfunction createListItem(btnName){\r\n    const listItem  =  document.createElement('button');\r\n    listItem.id = btnName.toLowerCase();\r\n    listItem.classList.add('navBtn');\r\n    listItem.textContent = btnName;\r\n    return listItem;\r\n}\r\n\r\nfunction sideBarContent(){\r\n    const navBar = document.createElement('div');\r\n    navBar.classList.add('navBar');\r\n    const tasksBtn = createListItem('Tasks');\r\n    const importantBtn = createListItem('Important');\r\n    const notesBtn = createListItem('Notes');\r\n    navBar.appendChild(tasksBtn);\r\n    navBar.appendChild(importantBtn);\r\n    navBar.appendChild(notesBtn);\r\n\r\n\r\n    tasksBtn.addEventListener('click',function(){\r\n        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n    \r\n    importantBtn.addEventListener('click',function(){\r\n        console.log('important');\r\n        (0,_important__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n    notesBtn.addEventListener('click',function(){\r\n        console.log('note');\r\n        (0,_notes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    return navBar;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sideBarContent);\n\n//# sourceURL=webpack://restaurant-page/./src/components/sideBarContent.js?");

/***/ }),

/***/ "./src/components/tasks.js":
/*!*********************************!*\
  !*** ./src/components/tasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_task_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/task.json */ \"./src/components/task.json\");\n\r\n\r\n\r\nlet newTasks = {};\r\n\r\nfetch(_components_task_json__WEBPACK_IMPORTED_MODULE_0__).then(response => response.json()).then(data => {\r\n    // Accessing properties\r\n    for (const taskKey in data){\r\n      const task = data[taskKey];\r\n      newTasks[taskKey] = {\r\n        \"description\": task.description,\r\n        \"notes\": task.notes,\r\n        \"important\" : task.important\r\n      }\r\n    } \r\n    const  tasksJsString = JSON.stringify(newTasks);\r\n    localStorage.setItem('tasks',tasksJsString);\r\n  }); \r\n\r\nfunction loadData(){\r\n  const retrieveJsonStringTask = localStorage.getItem(\"tasks\");\r\n  const retrieveJsonObjectTask = JSON.parse(retrieveJsonStringTask);\r\n\r\n  for(const taskKey in retrieveJsonObjectTask){\r\n\r\n    // const newTask = newTasks[newTasksKey];\r\n    createTaskDomElement(retrieveJsonObjectTask[taskKey].description,retrieveJsonObjectTask[taskKey].notes);\r\n  }\r\n}\r\n\r\nfunction updateNewTasks(description,notes, isImportant){\r\n  let tempDescription = description;\r\n  tempDescription = tempDescription.replace(/\\s/g,\"\").toLowerCase();\r\n\r\n  newTasks[tempDescription] = {\r\n    \"description\": description,\r\n    \"notes\": notes,\r\n    \"important\": isImportant\r\n  }\r\n\r\n  const taskJsonString = JSON.stringify(newTasks);\r\n  localStorage.setItem('tasks', taskJsonString);\r\n\r\n}\r\nfunction createTaskDomElement(description,notes){\r\n\r\n    const mainContainer = document.querySelector('.mainContainer');\r\n    const domTasksElement  = document.createElement('div');\r\n    domTasksElement.classList.add('domTaskElement');\r\n    domTasksElement.style.display = 'flex';\r\n    const tasksDescription = document.createElement('p');\r\n    tasksDescription.textContent = description;\r\n   \r\n    const tasksNotes  = document.createElement('p');\r\n    tasksNotes.textContent = notes\r\n    const deleteElement = document.createElement('div');\r\n    deleteElement.classList.add('deleteElement');\r\n    deleteElement.id = description;\r\n    deleteElement.textContent = 'X';\r\n\r\n    deleteElement.addEventListener('click', function(){\r\n          let parentDiv  = deleteElement.parentNode;\r\n          parentDiv.parentNode.removeChild(parentDiv);\r\n          let tasks =  JSON.parse(localStorage.getItem('tasks'));\r\n          let tempKeyLowerCase = deleteElement.id;\r\n          tempKeyLowerCase = tempKeyLowerCase.replace(/\\s/g,\"\").toLowerCase();\r\n          delete tasks[tempKeyLowerCase];\r\n          localStorage.setItem('tasks', JSON.stringify(tasks));\r\n    });\r\n\r\n    domTasksElement.appendChild(tasksDescription);\r\n    domTasksElement.appendChild(tasksNotes);\r\n    domTasksElement.appendChild(deleteElement);\r\n    mainContainer.appendChild(domTasksElement);\r\n}\r\n\r\n\r\nfunction createTaskForm(){\r\n    const taskForm = document.createElement('form');\r\n    taskForm.classList.add('taskForm-popup');\r\n\r\n    const taskDescription = document.createElement('label');\r\n    taskDescription.textContent =  'Description';\r\n\r\n    const taskInput = document.createElement('input');\r\n    taskInput.type = 'text';\r\n\r\n    const taskNote = document.createElement('label');\r\n    taskNote.textContent = 'Note';\r\n\r\n    const taskNoteInput = document.createElement('input');\r\n    taskNoteInput.type = 'text';\r\n\r\n    const isTasksImportant = document.createElement('label');\r\n    isTasksImportant.textContent = 'Important';\r\n    const importCheckBoxInput = document.createElement('input');\r\n    importCheckBoxInput.type ='checkbox';\r\n\r\n    const addTaskBtn  = document.createElement('button');\r\n    addTaskBtn.classList.add('addTaskBtn');\r\n    addTaskBtn.textContent  = 'Add Tasks';\r\n\r\n    //creating new DOM element for tasks buttons\r\n    addTaskBtn.addEventListener('click', function(event){\r\n      event.preventDefault();\r\n      createTaskDomElement(taskInput.value, taskNoteInput.value);\r\n      updateNewTasks(taskInput.value, taskNoteInput.value, importCheckBoxInput.checked);\r\n      document.querySelector('.taskForm-popup').style.display = 'none';\r\n      console.log(importCheckBoxInput.checked);// will ne needing this\r\n\r\n    });\r\n\r\n\r\n    const closeTaskBtn = document.createElement('button');\r\n    closeTaskBtn.classList.add('closeTaskBtn');\r\n    closeTaskBtn.textContent = 'Close';\r\n\r\n   closeTaskBtn.addEventListener('click',function(event){\r\n        event.preventDefault();\r\n        document.querySelector('.taskForm-popup').style.display = 'none';\r\n   });\r\n\r\n\r\n    taskForm.appendChild(taskDescription);\r\n    taskForm.appendChild(taskInput);\r\n    taskForm.appendChild(document.createElement('br'));\r\n    taskForm.appendChild(taskNote);\r\n    taskForm.appendChild(taskNoteInput);\r\n    taskForm.appendChild(document.createElement('br'));\r\n    taskForm.appendChild(isTasksImportant);\r\n    taskForm.appendChild(importCheckBoxInput);\r\n    taskForm.appendChild(document.createElement('br'));\r\n    taskForm.appendChild(addTaskBtn);\r\n    taskForm.appendChild(closeTaskBtn);\r\n    return taskForm;\r\n}\r\n\r\nfunction createTaskFormBtn(){\r\n    const taskContainer = document.createElement('div');\r\n    taskContainer.classList.add('taskContainer');\r\n    const createTaskFormBtn = document.createElement('button');\r\n    createTaskFormBtn.classList.add('createTaskFormBtn');\r\n    createTaskFormBtn.textContent = '+ Create Task';\r\n\r\n    createTaskFormBtn.addEventListener('click', function(){\r\n        document.querySelector('.taskForm-popup').style.display = 'block';\r\n    });\r\n\r\n    taskContainer.appendChild(createTaskFormBtn);\r\n    taskContainer.appendChild(createTaskForm());\r\n    return taskContainer;\r\n}\r\n\r\nfunction tasks(){\r\n    const  mainContainer = document.querySelector('.mainContainer');\r\n    mainContainer.textContent = '';\r\n    const tasksTitle = document.createElement('h2');\r\n    tasksTitle.textContent = 'Tasks';\r\n    mainContainer.appendChild(tasksTitle);\r\n\r\n    mainContainer.appendChild(createTaskFormBtn());\r\n    loadData();\r\n    //deleteDomElementAndData();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _components_loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loadPage */ \"./src/components/loadPage.js\");\n\r\n\r\n\r\nfunction initialize(){\r\n    (0,_components_loadPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\ninitialize();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/components/notes.json":
/*!***********************************!*\
  !*** ./src/components/notes.json ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c2b68ac2dfde254da15.json\";\n\n//# sourceURL=webpack://restaurant-page/./src/components/notes.json?");

/***/ }),

/***/ "./src/components/task.json":
/*!**********************************!*\
  !*** ./src/components/task.json ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"132a1ae90bc67a71485d.json\";\n\n//# sourceURL=webpack://restaurant-page/./src/components/task.json?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;