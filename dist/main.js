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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _initMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMap */ \"./src/initMap.js\");\n\r\n\r\nfunction loadHoursLocationText() {\r\n    const content = document.getElementById(\"content\");\r\n    console.log(content);\r\n    \r\n\r\n    const header = document.createElement(\"h1\");\r\n    header.innerHTML = \"HOURS & LOCATION\";\r\n\r\n    const location = document.createElement(\"p\");\r\n    location.id = \"location\";\r\n    location.classList.add(\"location\");\r\n    location.innerHTML = \"<a href='https://tinyurl.com/samuraisushiboat' target='_blank' \\\r\n    rel='noopener noreferrer'><u>3336 Grand Ave<br>Oakland, CA 94610</u></a>\";\r\n\r\n    const hours = document.createElement(\"p\");\r\n    hours.id = \"hours\";\r\n    hours.classList.add(\"hours\");\r\n    const monHours = document.createTextNode(\"Mon 11:30 AM - 10:00 PM\");\r\n    const tueHours = document.createTextNode(\"Tue  11:30 AM - 10:00 PM\");\r\n    const wedHours = document.createTextNode(\"Wed  11:30 AM - 10:00 PM\");\r\n    const thuHours = document.createTextNode(\"Thu  11:30 AM - 10:00 PM\");\r\n    const friHours = document.createTextNode(\"Fri  11:30 AM - 10:00 PM\");\r\n    const satHours = document.createTextNode(\"Sat  11:30 AM - 10:00 PM\");\r\n    const sunHours = document.createTextNode(\"Sun  5:00 PM - 10:00 PM\");\r\n\r\n    hours.append(monHours);\r\n    hours.append(document.createElement(\"br\"));\r\n    hours.append(tueHours);\r\n    hours.append(document.createElement(\"br\"));\r\n    hours.append(wedHours);\r\n    hours.append(document.createElement(\"br\"));\r\n    hours.append(thuHours);\r\n    hours.append(document.createElement(\"br\"));\r\n    hours.append(friHours);\r\n    hours.append(document.createElement(\"br\"));\r\n    hours.append(satHours);\r\n    hours.append(document.createElement(\"br\"));\r\n    hours.append(sunHours);\r\n    hours.append(document.createElement(\"br\"));\r\n\r\n    header.appendChild(location);\r\n    header.appendChild(hours);\r\n    content.appendChild(header);\r\n}\r\n\r\nfunction loadLocation() {\r\n    const body = document.querySelector(\"body\");\r\n    const map = document.createElement(\"div\");\r\n    map.id = \"map\";\r\n    body.appendChild(map);\r\n    (0,_initMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\nfunction loadContactPage() {\r\n    loadHoursLocationText();\r\n    loadLocation();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPage */ \"./src/initPage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.createNav)();\r\n(0,_initPage__WEBPACK_IMPORTED_MODULE_0__.initLoadPage)();\r\n\r\nfunction loadNewPage(e) {\r\n    // wipe content\r\n\r\n    // clear all text and nodes with innerHTML\r\n    // const content = document.querySelector(\"content\");\r\n    // content.innerHTML = \"\"\r\n\r\n    // loop to remove every last child; removes nodes\r\n    while(content.firstChild) {\r\n        content.removeChild(content.lastChild);\r\n    }\r\n\r\n    // removes map if it exists\r\n    if (document.getElementById(\"map\")) {\r\n        console.log('inside');\r\n        const map = document.getElementById(\"map\");\r\n        console.log(map.parentElement);\r\n        map.parentElement.removeChild(map.parentElement.lastElementChild);\r\n    }\r\n\r\n    // run correct tab\r\n    console.log(\"content wiped. running correct tab...\");\r\n    if (e.target.id == \"home-btn\") {\r\n        (0,_initPage__WEBPACK_IMPORTED_MODULE_0__.initLoadPage)();\r\n    } else if (e.target.id == \"menu-btn\") {\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    } else if (e.target.id == \"contact-btn\") {\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n}\r\nfunction setupTabBrowsing() {\r\n    const buttons = document.querySelectorAll(\".nav-bar\");\r\n    console.log(buttons);\r\n    buttons.forEach(button => {\r\n        button.addEventListener(\"click\", loadNewPage);\r\n        // disable the current button\r\n    });\r\n}\r\n\r\nsetupTabBrowsing();\r\n\r\n// TODO: Add the disabling of clicked button and the restoring of the button once another is clicked\r\n// 2. Create the contact page with hours and location -- DONE\r\n// 3. Create the menu page\r\n// 4. add the map to the contact page  -- DONE\r\n// 5. add the photo slider for the menu page\r\n// https://www.w3schools.com/w3css/w3css_slideshow.asp for photo slider \r\n// 6. Add the hours to the contact page  -- DONE\r\n// 7. Separate the title from the content\r\n// 8. Rename the Contacts page to hours and location\r\n// https://www.sona-nyc.com/ use as an example to base off of\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initMap.js":
/*!************************!*\
  !*** ./src/initMap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction initMap() {\r\n    // initialize the map\r\n    let mymap = L.map('map').setView([37.81333290335504, -122.24659186840944], 50);\r\n\r\n    // load a tile layer\r\n    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {\r\n    attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\r\n    maxZoom: 18,\r\n    id: 'mapbox/streets-v11',\r\n    tileSize: 512,\r\n    zoomOffset: -1,\r\n    accessToken: 'pk.eyJ1IjoiamViYnkiLCJhIjoiY2t3N2Z3ZDVqYnJwNTJucXBleWNyeWNqYyJ9.GI1Hmt8KZtzS9jNH2z6h2A'\r\n}).addTo(mymap);\r\n\r\n    // add a marker\r\n    let marker = L.marker([37.81333290335504, -122.24659186840944]).addTo(mymap);\r\n\r\n    // add a popup\r\n    const popupText = \"<b>Samurai Sushi Boat</b><br>3336 Grand Ave<br>Oakland, CA 94610<br> \\\r\n    <a href='https://tinyurl.com/samuraisushiboat' target='_blank' rel='noopener noreferrer'>View More</a>\";\r\n    marker.bindPopup(popupText).openPopup();\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMap);\n\n//# sourceURL=webpack://restaurant-page/./src/initMap.js?");

/***/ }),

/***/ "./src/initPage.js":
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav),\n/* harmony export */   \"initLoadPage\": () => (/* binding */ initLoadPage)\n/* harmony export */ });\nfunction createNav() {\r\n    const homeBtn = document.createElement(\"button\");\r\n    homeBtn.innerHTML = \"HOME\";\r\n    const menuBtn = document.createElement(\"button\");\r\n    menuBtn.innerHTML = \"MENU\";\r\n    const contactBtn = document.createElement(\"button\");\r\n    contactBtn.innerHTML = \"CONTACT\";\r\n\r\n    homeBtn.classList.add(\"button-nav\");\r\n    menuBtn.classList.add(\"button-nav\");\r\n    contactBtn.classList.add(\"button-nav\");\r\n\r\n    homeBtn.setAttribute(\"id\",\"home-btn\");\r\n    menuBtn.setAttribute(\"id\",\"menu-btn\");\r\n    contactBtn.setAttribute(\"id\",\"contact-btn\");\r\n\r\n    const nav = document.querySelector(\".nav-bar\");\r\n    nav.append(homeBtn);\r\n    nav.append(menuBtn);\r\n    nav.append(contactBtn);\r\n}\r\n\r\nfunction initLoadPage() {\r\n    const headline = document.createElement(\"H1\");\r\n    const headlineText = document.createTextNode(\"Samurai Sushi Boat\");\r\n    headline.appendChild(headlineText);\r\n    headline.setAttribute('id','headline');\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.appendChild(headline);\r\n    console.log(\"load\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.src = \"https://storage.googleapis.com/wzukusers/user-12938003/images/57de0f7fcfba4d0Bx9j3/SUSHI1-edited-1.jpg\";\r\n    image.alt = \"Combination Sashimi Plate\";\r\n\r\n    const wonderWords = document.createElement(\"p\");\r\n\r\n    const hello = document.createTextNode(\"Hello!\");\r\n    const intro = document.createTextNode(\"We are a family-operated business, established in the \\\r\n        Grand Lake area of Oakland since 2005.\");\r\n    const desc = document.createTextNode(\"We offer both water canal style sushi in custom-made boats, \\\r\n        and table service for larger groups. Feel free to drop by for any occasion, whether it's a \\\r\n        quick bite to eat during the workday, a birthday celebration, watching the big game, or \\\r\n        relaxing and having a delicious meal.\");\r\n    const ending = document.createTextNode(\"Love, Mama-San and Papa-San\");\r\n    wonderWords.append(hello);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(intro);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(desc);\r\n    wonderWords.append(document.createElement(\"br\"));\r\n    wonderWords.append(ending);\r\n    \r\n    content.appendChild(image);\r\n    content.appendChild(wonderWords);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/initPage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet slideIdx = 1;\r\n\r\nfunction createSlideShowImgs() {\r\n    // create img Obj that loops through and create image elements\r\n    // either an array or array of maps -- decide which one is better\r\n    // const imgObj = [{img: }]\r\n\r\n    // create the left and right buttons\r\n    // also add markers to show which page\r\n\r\n\r\n    // add images to slides container\r\n    const content = document.getElementById(\"content\");\r\n\r\n    const slidesContainer = document.createElement(\"div\");\r\n    slidesContainer.classList.add(\"slides-container\");\r\n    slidesContainer.id = \"slidesContainer\";\r\n\r\n    for (let i= 1; i < 14; i++) {\r\n        var img = document.createElement(\"img\");\r\n        img.classList.add(\"mySlides\");\r\n        img.src = \"../images/Menu/Image\"+i+\".jpeg\";\r\n        img.setAttribute(\"style\",\"width:100%;height:50%;\");\r\n        slidesContainer.appendChild(img);    \r\n    }\r\n\r\n    content.appendChild(slidesContainer);\r\n\r\n   \r\n\r\n    // set up markers to show which page currently on\r\n}\r\n\r\nfunction plusDivs(n) {\r\n    // if (n.target.id == \"leftBtn\") {\r\n    //     console.log(\"left button pressed\");\r\n    // }else if(n.target.id == 'rightBtn') {\r\n    //     console.log(\"right button pressed.\");\r\n    // }\r\n    console.log(\"button pressed, \",slideIdx, n);\r\n    showImg(slideIdx += n);\r\n    console.log(slideIdx);\r\n}\r\n\r\nfunction setupSlideShowArrows() {\r\n    // for each button add event listeners if pressed. Either have it \r\n    // like a round robin or stop whenever it reaches the end\r\n\r\n    // for each marker, it should be able to be pressed to go onto it\r\n\r\n    // also add zoom to slideshow picture?\r\n    const slidesContainer = document.getElementById(\"slidesContainer\");\r\n    console.log(slidesContainer);\r\n\r\n    // create the left and right buttons\r\n    const leftBtn = document.createElement(\"button\");\r\n    leftBtn.classList.add(\"display-left\");\r\n    leftBtn.id = \"leftBtn\";\r\n    leftBtn.innerHTML = \"&#10094;\";\r\n\r\n\r\n    const rightBtn = document.createElement(\"button\");\r\n    rightBtn.classList.add(\"display-right\");\r\n    rightBtn.id = \"rightBtn\";\r\n    rightBtn.innerHTML = \"&#10095;\";\r\n\r\n    // console.log(leftBtn);\r\n    leftBtn.addEventListener(\"click\", plusDivs(-1), false);\r\n    rightBtn.addEventListener(\"click\", plusDivs(1), false);\r\n    slidesContainer.appendChild(leftBtn);\r\n    slidesContainer.appendChild(rightBtn);\r\n\r\n    \r\n}\r\n\r\nfunction showImg(n) {\r\n    let slides = document.getElementsByClassName(\"mySlides\");\r\n    if (n > slides.length) {\r\n        slideIdx = 1;\r\n    }\r\n\r\n    if (n < 1) {\r\n        slideIdx = slides.length;\r\n    }\r\n\r\n    for (let i = 0; i < slides.length; i++) {\r\n        slides[i].style.display = \"none\";\r\n        \r\n    }\r\n    slides[slideIdx-1].style.display = \"block\";\r\n}\r\nfunction loadMenuPage() {\r\n//     <img class=\"mySlides\" src=\"img_snowtops.jpg\">\r\n// <img class=\"mySlides\" src=\"img_lights.jpg\">\r\n// <img class=\"mySlides\" src=\"img_mountains.jpg\">\r\n// <img class=\"mySlides\" src=\"img_forest.jpg\"></img>\r\n    \r\n    // create layout\r\n    createSlideShowImgs();\r\n    setupSlideShowArrows();\r\n    showImg();\r\n    // add event listeners\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\r\n\r\n// TODO: Figure out what the problem is with the buttons\r\n// Resize the image to make it easier to read\r\n// fix the layout of the slideshow\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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