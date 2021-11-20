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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _initMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMap */ \"./src/initMap.js\");\n\n\nfunction loadHours() {\n    const content = document.getElementById(\"content\");\n    console.log(content);\n\n    const header = document.createElement(\"h1\");\n    header.innerHTML = \"HOURS & LOCATION\";\n    const hours = document.createElement(\"p\");\n    hours.id = \"hours\";\n    hours.classList.add(\"hours\");\n    const monHours = document.createTextNode(\"Mon 11:30 AM - 10:00 PM\");\n    const tueHours = document.createTextNode(\"Tue  11:30 AM - 10:00 PM\");\n    const wedHours = document.createTextNode(\"Wed  11:30 AM - 10:00 PM\");\n    const thuHours = document.createTextNode(\"Thu  11:30 AM - 10:00 PM\");\n    const friHours = document.createTextNode(\"Fri  11:30 AM - 10:00 PM\");\n    const satHours = document.createTextNode(\"Sat  11:30 AM - 10:00 PM\");\n    const sunHours = document.createTextNode(\"Sun  5:00 PM - 10:00 PM\");\n\n    hours.append(monHours);\n    hours.append(document.createElement(\"br\"));\n    hours.append(tueHours);\n    hours.append(document.createElement(\"br\"));\n    hours.append(wedHours);\n    hours.append(document.createElement(\"br\"));\n    hours.append(thuHours);\n    hours.append(document.createElement(\"br\"));\n    hours.append(friHours);\n    hours.append(document.createElement(\"br\"));\n    hours.append(satHours);\n    hours.append(document.createElement(\"br\"));\n    hours.append(sunHours);\n    hours.append(document.createElement(\"br\"));\n\n    header.appendChild(hours);\n    content.appendChild(header);\n}\n\nfunction loadLocation() {\n    const body = document.querySelector(\"body\");\n    const map = document.createElement(\"div\");\n    map.id = \"map\";\n    body.appendChild(map);\n    (0,_initMap__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\nfunction loadContactPage() {\n    loadHours();\n    loadLocation();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPage */ \"./src/initPage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.createNav)();\n(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.initLoadPage)();\n\n// write tab switching logic\n// each tab has event listener that wipes out the current contents\n// runs correct tab module to populate it again\nfunction loadNewPage(e) {\n    // wipe content\n\n    // clear all text and nodes with innerHTML\n    // const content = document.querySelector(\"content\");\n    // content.innerHTML = \"\"\n\n    // loop to remove every last child; removes nodes\n    while(content.firstChild) {\n        content.removeChild(content.lastChild);\n    }\n\n    // run correct tab\n    console.log(\"content wiped. running correct tab...\");\n    if (e.target.id == \"home-btn\") {\n        (0,_initPage__WEBPACK_IMPORTED_MODULE_0__.initLoadPage)();\n        // console.log(\"loading home...\");\n    } else if (e.target.id == \"menu-btn\") {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n        // console.log(\"loading menu...\");\n    } else if (e.target.id == \"contact-btn\") {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)();\n        // console.log(\"loading contact-btn...\");\n    }\n}\nfunction setupTabBrowsing() {\n    const buttons = document.querySelectorAll(\".nav-bar\");\n    console.log(buttons);\n    buttons.forEach(button => {\n        button.addEventListener(\"click\", loadNewPage);\n        // disable the current button\n    });\n}\n\nsetupTabBrowsing();\n\n// TODO: Add the disabling of clicked button and the restoring of the button once another is clicked\n// 2. Create the contact page with hours and location\n// 3. Create the menu page\n// 4. add the map to the contact page\n// 5. add the photo slider for the menu page\n// https://www.w3schools.com/w3css/w3css_slideshow.asp for photo slider \n// 6. Add the hours to the contact page\n// 7. Separate the title from the content\n// https://www.sona-nyc.com/ use as an example to base off of\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initMap.js":
/*!************************!*\
  !*** ./src/initMap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction initMap() {\n    // initialize the map\n    let mymap = L.map('map').setView([37.81333290335504, -122.24659186840944], 50);\n\n    // load a tile layer\n    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {\n    attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n    maxZoom: 18,\n    id: 'mapbox/streets-v11',\n    tileSize: 512,\n    zoomOffset: -1,\n    accessToken: 'pk.eyJ1IjoiamViYnkiLCJhIjoiY2t3N2Z3ZDVqYnJwNTJucXBleWNyeWNqYyJ9.GI1Hmt8KZtzS9jNH2z6h2A'\n}).addTo(mymap);\n\n    // add a marker\n    let marker = L.marker([37.81333290335504, -122.24659186840944]).addTo(mymap);\n\n    const popupText = \"<b>Samurai Sushi Boat</b><br>3336 Grand Ave<br>Oakland, CA 94610\";\n    marker.bindPopup(popupText).openPopup();\n\n    // mymap.on('click', onMapClick);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMap);\n\n//# sourceURL=webpack://restaurant-page/./src/initMap.js?");

/***/ }),

/***/ "./src/initPage.js":
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav),\n/* harmony export */   \"initLoadPage\": () => (/* binding */ initLoadPage)\n/* harmony export */ });\nfunction createNav() {\n    const homeBtn = document.createElement(\"button\");\n    homeBtn.innerHTML = \"HOME\";\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.innerHTML = \"MENU\";\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.innerHTML = \"CONTACT\";\n\n    homeBtn.classList.add(\"button-nav\");\n    menuBtn.classList.add(\"button-nav\");\n    contactBtn.classList.add(\"button-nav\");\n\n    homeBtn.setAttribute(\"id\",\"home-btn\");\n    menuBtn.setAttribute(\"id\",\"menu-btn\");\n    contactBtn.setAttribute(\"id\",\"contact-btn\");\n\n    const nav = document.querySelector(\".nav-bar\");\n    nav.append(homeBtn);\n    nav.append(menuBtn);\n    nav.append(contactBtn);\n}\n\nfunction initLoadPage() {\n    // createNav();\n\n    const headline = document.createElement(\"H1\");\n    const headlineText = document.createTextNode(\"Samurai Sushi Boat\");\n    headline.appendChild(headlineText);\n    headline.setAttribute('id','headline');\n\n    const content = document.getElementById(\"content\");\n    // console.log(content);\n    content.appendChild(headline);\n    console.log(\"load\");\n\n    const image = document.createElement(\"img\");\n    image.src = \"https://storage.googleapis.com/wzukusers/user-12938003/images/57de0f7fcfba4d0Bx9j3/SUSHI1-edited-1.jpg\";\n    image.alt = \"Combination Sashimi Plate\";\n\n    const wonderWords = document.createElement(\"p\");\n\n    const hello = document.createTextNode(\"Hello!\");\n    const intro = document.createTextNode(\"We are a family-operated business, established in the \\\n        Grand Lake area of Oakland since 2005.\");\n    const desc = document.createTextNode(\"We offer both water canal style sushi in custom-made boats, \\\n        and table service for larger groups. Feel free to drop by for any occasion, whether it's a \\\n        quick bite to eat during the workday, a birthday celebration, watching the big game, or \\\n        relaxing and having a delicious meal.\");\n    const ending = document.createTextNode(\"Love, Mama-San and Papa-San\");\n    wonderWords.append(hello);\n    wonderWords.append(document.createElement(\"br\"));\n    wonderWords.append(intro);\n    wonderWords.append(document.createElement(\"br\"));\n    wonderWords.append(desc);\n    wonderWords.append(document.createElement(\"br\"));\n    wonderWords.append(ending);\n\n    \n    content.appendChild(image);\n    content.appendChild(wonderWords);\n\n    // Include Hours, Location\n\n    // setup the button to be disabled so user can't press it again to reload the page.\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/initPage.js?");

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