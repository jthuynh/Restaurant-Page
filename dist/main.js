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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPage */ \"./src/initPage.js\");\n\r\n(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n// console.log(\"Hello work\");\r\n// alert(\"does this work\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initPage.js":
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initLoadPage() {\r\n    let headline = document.createElement(\"H1\");\r\n    let headlineText = document.createTextNode(\"Welcome to Samurai Sushi Boat!\");\r\n    headline.appendChild(headlineText);\r\n    headline.setAttribute('id','headline');\r\n    \r\n    let image = document.createElement(\"img\");\r\n    image.src = \"https://storage.googleapis.com/wzukusers/user-12938003/images/57de0f7fcfba4d0Bx9j3/SUSHI1-edited-1.jpg\";\r\n    image.alt = \"Combination Sashimi Plate\";\r\n\r\n    let wonderWords = document.createElement(\"p\");\r\n\r\n    let hello = document.createTextNode(\"Hello!\");\r\n    let intro = document.createTextNode(\"We are a family-operated business, established in the \\\r\n        Grand Lake area of Oakland since 2005.\");\r\n    let desc = document.createTextNode(\"We offer both water canal style sushi in custom-made boats, \\\r\n        and table service for larger groups. Feel free to drop by for any occasion, whether it's a \\\r\n        quick bite to eat during the workday, a birthday celebration, watching the big game, or \\\r\n        relaxing and having a delicious meal.\");\r\n    let ending = document.createTextNode(\"Love, Mama-San and Papa-San\");\r\n    wonderWords.append(hello);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(intro);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(desc);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(ending);\r\n\r\n    let content = document.getElementById(\"content\");\r\n    console.log(content);\r\n    content.appendChild(headline);\r\n    content.appendChild(image);\r\n    content.append(wonderWords);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initLoadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/initPage.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;