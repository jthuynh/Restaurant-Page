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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPage */ \"./src/initPage.js\");\n\r\n(0,_initPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n// console.log(\"Hello work\");\r\n// alert(\"does this work\");\r\n\r\n// write tab switching logic\r\n// each tab has event listener that wipes out the current contents\r\n// runs correct tab module to populate it again\r\nfunction loadNewPage(e) {\r\n    // wipe content\r\n    // run correct tab\r\n}\r\nfunction setupTabBrowsing() {\r\n    const buttons = document.querySelectorAll(\".nav-bar\");\r\n    console.log(buttons);\r\n    buttons.forEach(element => {\r\n        console.log(\"hello\");\r\n    });\r\n}\r\n\r\nsetupTabBrowsing();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initPage.js":
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createNav() {\r\n    const homeBtn = document.createElement(\"button\");\r\n    homeBtn.innerHTML = \"HOME\";\r\n    const menuBtn = document.createElement(\"button\");\r\n    menuBtn.innerHTML = \"MENU\";\r\n    const contactBtn = document.createElement(\"button\");\r\n    contactBtn.innerHTML = \"CONTACT\";\r\n\r\n    homeBtn.classList.add(\"button-nav\");\r\n    menuBtn.classList.add(\"button-nav\");\r\n    contactBtn.classList.add(\"button-nav\");\r\n\r\n    homeBtn.setAttribute(\"id\",\"home-btn\");\r\n    menuBtn.setAttribute(\"id\",\"menu-btn\");\r\n    contactBtn.setAttribute(\"id\",\"contact-btn\");\r\n\r\n    const nav = document.querySelector(\".nav-bar\");\r\n    nav.append(homeBtn);\r\n    nav.append(menuBtn);\r\n    nav.append(contactBtn);\r\n}\r\n\r\nfunction initLoadPage() {\r\n    createNav();\r\n\r\n    const headline = document.createElement(\"H1\");\r\n    const headlineText = document.createTextNode(\"Samurai Sushi Boat\");\r\n    headline.appendChild(headlineText);\r\n    headline.setAttribute('id','headline');\r\n\r\n    const content = document.getElementById(\"content\");\r\n    // console.log(content);\r\n    content.appendChild(headline);\r\n    console.log(\"load\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.src = \"https://storage.googleapis.com/wzukusers/user-12938003/images/57de0f7fcfba4d0Bx9j3/SUSHI1-edited-1.jpg\";\r\n    image.alt = \"Combination Sashimi Plate\";\r\n\r\n    const wonderWords = document.createElement(\"p\");\r\n\r\n    const hello = document.createTextNode(\"Hello!\");\r\n    const intro = document.createTextNode(\"We are a family-operated business, established in the \\\r\n        Grand Lake area of Oakland since 2005.\");\r\n    const desc = document.createTextNode(\"We offer both water canal style sushi in custom-made boats, \\\r\n        and table service for larger groups. Feel free to drop by for any occasion, whether it's a \\\r\n        quick bite to eat during the workday, a birthday celebration, watching the big game, or \\\r\n        relaxing and having a delicious meal.\");\r\n    const ending = document.createTextNode(\"Love, Mama-San and Papa-San\");\r\n    wonderWords.append(hello);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(intro);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(desc);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(ending);\r\n\r\n    \r\n    content.appendChild(image);\r\n    content.append(wonderWords);\r\n\r\n    // Include Hours, Location\r\n\r\n    // setup the button to be disabled so user can't press it again to reload the page.\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initLoadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/initPage.js?");

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