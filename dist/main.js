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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction loadContactPage() {\n    alert(\"on contact page!\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPage */ \"./src/initPage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.createNav)();\n(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.initLoadPage)();\n// console.log(\"Hello work\");\n// alert(\"does this work\");\n\n// write tab switching logic\n// each tab has event listener that wipes out the current contents\n// runs correct tab module to populate it again\nfunction loadNewPage(e) {\n    // wipe content\n\n    // clear all text and nodes with innerHTML\n    // const content = document.querySelector(\"content\");\n    // content.innerHTML = \"\"\n\n    // loop to remove every last child; removes nodes\n    while(content.firstChild) {\n        content.removeChild(content.lastChild);\n    }\n\n    // run correct tab\n    console.log(\"content wiped. running correct tab...\");\n    if (e.target.id == \"home-btn\") {\n        (0,_initPage__WEBPACK_IMPORTED_MODULE_0__.initLoadPage)();\n        // console.log(\"loading home...\");\n    } else if (e.target.id == \"menu-btn\") {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n        console.log(\"loading menu...\");\n    } else if (e.target.id == \"contact-btn\") {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)();\n        console.log(\"loading contact-btn...\");\n    }\n}\nfunction setupTabBrowsing() {\n    const buttons = document.querySelectorAll(\".nav-bar\");\n    console.log(buttons);\n    buttons.forEach(button => {\n        button.addEventListener(\"click\", loadNewPage);\n        // disable the current button\n    });\n}\n\nsetupTabBrowsing();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initPage.js":
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav),\n/* harmony export */   \"initLoadPage\": () => (/* binding */ initLoadPage)\n/* harmony export */ });\nfunction createNav() {\n    const homeBtn = document.createElement(\"button\");\n    homeBtn.innerHTML = \"HOME\";\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.innerHTML = \"MENU\";\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.innerHTML = \"CONTACT\";\n\n    homeBtn.classList.add(\"button-nav\");\n    menuBtn.classList.add(\"button-nav\");\n    contactBtn.classList.add(\"button-nav\");\n\n    homeBtn.setAttribute(\"id\",\"home-btn\");\n    menuBtn.setAttribute(\"id\",\"menu-btn\");\n    contactBtn.setAttribute(\"id\",\"contact-btn\");\n\n    const nav = document.querySelector(\".nav-bar\");\n    nav.append(homeBtn);\n    nav.append(menuBtn);\n    nav.append(contactBtn);\n}\n\nfunction initLoadPage() {\n    // createNav();\n\n    const headline = document.createElement(\"H1\");\n    const headlineText = document.createTextNode(\"Samurai Sushi Boat\");\n    headline.appendChild(headlineText);\n    headline.setAttribute('id','headline');\n\n    const content = document.getElementById(\"content\");\n    // console.log(content);\n    content.appendChild(headline);\n    console.log(\"load\");\n\n    const image = document.createElement(\"img\");\n    image.src = \"https://storage.googleapis.com/wzukusers/user-12938003/images/57de0f7fcfba4d0Bx9j3/SUSHI1-edited-1.jpg\";\n    image.alt = \"Combination Sashimi Plate\";\n\n    const wonderWords = document.createElement(\"p\");\n\n    const hello = document.createTextNode(\"Hello!\");\n    const intro = document.createTextNode(\"We are a family-operated business, established in the \\\n        Grand Lake area of Oakland since 2005.\");\n    const desc = document.createTextNode(\"We offer both water canal style sushi in custom-made boats, \\\n        and table service for larger groups. Feel free to drop by for any occasion, whether it's a \\\n        quick bite to eat during the workday, a birthday celebration, watching the big game, or \\\n        relaxing and having a delicious meal.\");\n    const ending = document.createTextNode(\"Love, Mama-San and Papa-San\");\n    wonderWords.append(hello);\n    wonderWords.append(document.createElement(\"br\"));\n    wonderWords.append(intro);\n    wonderWords.append(document.createElement(\"br\"));\n    wonderWords.append(desc);\n    wonderWords.append(document.createElement(\"br\"));\n    wonderWords.append(ending);\n\n    \n    content.appendChild(image);\n    content.append(wonderWords);\n\n    // Include Hours, Location\n\n    // setup the button to be disabled so user can't press it again to reload the page.\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/initPage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// alert(\"on menu page!\");\n\nfunction loadMenuPage() {\n    alert(\"on menu page!\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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