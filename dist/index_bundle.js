/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _img_image2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/image2.jpg */ "./src/img/image2.jpg");
/* harmony import */ var _img_image4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/image4.jpg */ "./src/img/image4.jpg");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _img_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu.svg */ "./src/img/menu.svg");
/* harmony import */ var _img_user_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/user.svg */ "./src/img/user.svg");







window.addEventListener('DOMContentLoaded', function () {
  //Form
  var form = document.querySelector('form'),
      sucsess = document.querySelector('.form__ok-message'),
      failed = document.querySelector('.form__fail-message');
  var baseURL = 'https://jsonplaceholder.typicode.com';

  function postData(url, data) {
    return fetch("".concat(url, "/posts"), {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
  }

  function showMessage() {
    form.classList.toggle('hide');
    sucsess.classList.toggle('hide');
    setTimeout(function () {
      form.classList.toggle('hide');
      sucsess.classList.toggle('hide');
    }, 3000);
  }

  function showFailed() {
    form.classList.toggle('hide');
    failed.classList.toggle('hide');
    setTimeout(function () {
      form.classList.toggle('hide');
      failed.classList.toggle('hide');
    }, 4000);
  }

  function bindData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(form);
      var json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData(baseURL, json).then(function (response) {
        return checkResponse(response);
      }).then(function (response) {
        console.log(response);
        showMessage();
      })["catch"](function () {
        return showFailed();
      })["finally"](function () {
        return form.reset();
      });
    });
  }

  function checkResponse(response) {
    if (!response.ok) {
      throw new Error("Somethig wrong. Error: ".concat(response.status));
    } else {
      return response.json();
    }
  }

  bindData(form);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/advantages-wrapper/__advantage/advantages-wrapper__advantage.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/advantages-wrapper/__advantage/advantages-wrapper__advantage.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".advantages-wrapper__advantage{\r\n    font-size: 30px;\r\n    font-weight: 400;\r\n    color: #000000;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .advantages-wrapper__advantage{\r\n        font-size: 25px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/advantages-wrapper/__advantage/advantages-wrapper__advantage.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":[".advantages-wrapper__advantage{\r\n    font-size: 30px;\r\n    font-weight: 400;\r\n    color: #000000;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .advantages-wrapper__advantage{\r\n        font-size: 25px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/advantages-wrapper/advantage-wrapper.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/advantages-wrapper/advantage-wrapper.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".advantages-wrapper{\r\n    height: 225px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .advantages-wrapper{\r\n        height: 210px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .advantages-wrapper{\r\n        height: 175px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .advantages-wrapper{\r\n        flex-basis: 376px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .advantages-wrapper{\r\n        flex-basis: 165px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:333px){\r\n    .advantages-wrapper{\r\n        flex-basis: 230px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/advantages-wrapper/advantage-wrapper.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,iBAAiB;QACjB,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ","sourcesContent":[".advantages-wrapper{\r\n    height: 225px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .advantages-wrapper{\r\n        height: 210px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .advantages-wrapper{\r\n        height: 175px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .advantages-wrapper{\r\n        flex-basis: 376px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .advantages-wrapper{\r\n        flex-basis: 165px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:333px){\r\n    .advantages-wrapper{\r\n        flex-basis: 230px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/burger-menu/burger-menu.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/burger-menu/burger-menu.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/menu.svg */ "./src/img/menu.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_menu_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".burger-menu{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    width: 50px;\r\n    height: 50px;\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 677px) {\r\n    .burger-menu{\r\n        display: block;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/burger-menu/burger-menu.css"],"names":[],"mappings":"AAAA;IACI,yDAA2C;IAC3C,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI;QACI,cAAc;IAClB;AACJ","sourcesContent":[".burger-menu{\r\n    background-image: url('../../img/menu.svg');\r\n    background-repeat: no-repeat;\r\n    width: 50px;\r\n    height: 50px;\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 677px) {\r\n    .burger-menu{\r\n        display: block;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/buttons/buttons.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/buttons/buttons.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".buttons {\r\n    display: flex;\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .buttons{\r\n       flex-direction: column;\r\n       justify-content: space-between;\r\n       height: 190px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/buttons/buttons.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI;OACG,sBAAsB;OACtB,8BAA8B;OAC9B,aAAa;IAChB;AACJ","sourcesContent":[".buttons {\r\n    display: flex;\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .buttons{\r\n       flex-direction: column;\r\n       justify-content: space-between;\r\n       height: 190px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/buttons/buttons__button.css/buttons__button.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/buttons/buttons__button.css/buttons__button.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".buttons__button{\r\n    color: #030305;\r\n    padding: 20px 45px;\r\n    border: 1px solid #030305;\r\n    border-radius: 50px;\r\n    font-size: 17px;\r\n    font-weight: 500;  \r\n    margin-right: 5px;\r\n}\r\n\r\n.buttons__button:hover, .buttons__button:active{\r\n    color: white;\r\n    background-color: #030305;\r\n    transition: 0.5s;\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .buttons__button {\r\n        text-align: center;\r\n        font-size: 22px;\r\n        padding: 30px 45px;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/blocks/buttons/buttons__button.css/buttons__button.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI;QACI,kBAAkB;QAClB,eAAe;QACf,kBAAkB;QAClB,eAAe;IACnB;AACJ","sourcesContent":[".buttons__button{\r\n    color: #030305;\r\n    padding: 20px 45px;\r\n    border: 1px solid #030305;\r\n    border-radius: 50px;\r\n    font-size: 17px;\r\n    font-weight: 500;  \r\n    margin-right: 5px;\r\n}\r\n\r\n.buttons__button:hover, .buttons__button:active{\r\n    color: white;\r\n    background-color: #030305;\r\n    transition: 0.5s;\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .buttons__button {\r\n        text-align: center;\r\n        font-size: 22px;\r\n        padding: 30px 45px;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/container-footer/container-footer.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/container-footer/container-footer.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container-footer{\r\n    height: 79px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .container-footer{\r\n        max-width: 90%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/container-footer/container-footer.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI;QACI,cAAc;IAClB;AACJ","sourcesContent":[".container-footer{\r\n    height: 79px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .container-footer{\r\n        max-width: 90%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/container-header/container-header.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/container-header/container-header.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container-header{\r\n    height: 90px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .container-header{\r\n        max-width: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:677px){\r\n    .container-header{\r\n       position: relative;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/container-header/container-header.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;OACG,kBAAkB;IACrB;AACJ","sourcesContent":[".container-header{\r\n    height: 90px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .container-header{\r\n        max-width: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:677px){\r\n    .container-header{\r\n       position: relative;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/container-third-screen/third-screen-container.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/container-third-screen/third-screen-container.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".third-screen-container{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .third-screen-container{\r\n        max-width: 90%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/container-third-screen/third-screen-container.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,8BAA8B;IAC9B,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI;QACI,cAAc;IAClB;AACJ","sourcesContent":[".third-screen-container{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .third-screen-container{\r\n        max-width: 90%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/container/container.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/container/container.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .container{\r\n        max-width: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .container{\r\n        flex-direction: column;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/container/container.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":[".container{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .container{\r\n        max-width: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .container{\r\n        flex-direction: column;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/first-screen/__image/first-screen__image.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/first-screen/__image/first-screen__image.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".first-screen__image{\r\n    width: 43%;\r\n    display: block;\r\n    object-fit: cover;\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .first-screen__image{\r\n        position: relative;\r\n        top: 80px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/first-screen/__image/first-screen__image.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI;QACI,kBAAkB;QAClB,SAAS;IACb;AACJ","sourcesContent":[".first-screen__image{\r\n    width: 43%;\r\n    display: block;\r\n    object-fit: cover;\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .first-screen__image{\r\n        position: relative;\r\n        top: 80px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/first-screen/first-screen.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/first-screen/first-screen.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".first-screen{\r\n    padding-top: 51px;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/first-screen/first-screen.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;AACrB","sourcesContent":[".first-screen{\r\n    padding-top: 51px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/footer/__rights/footer__rights.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/footer/__rights/footer__rights.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer__rights{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    color: #878787;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/footer/__rights/footer__rights.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB","sourcesContent":[".footer__rights{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    color: #878787;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/footer/footer.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/footer/footer.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer{\r\n    height: 79px;\r\n    border-top: 1px solid #E5E5E5;\r\n    width: 100%;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/footer/footer.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,6BAA6B;IAC7B,WAAW;AACf","sourcesContent":[".footer{\r\n    height: 79px;\r\n    border-top: 1px solid #E5E5E5;\r\n    width: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__field/form__field.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__field/form__field.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form__field{\r\n    padding: 20px 37px;\r\n    border: 1px solid #878787;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    color: #878787;\r\n    font-size: 17px;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/form/__field/form__field.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,eAAe;AACnB","sourcesContent":[".form__field{\r\n    padding: 20px 37px;\r\n    border: 1px solid #878787;\r\n    border-radius: 50px;\r\n    outline: none;\r\n    color: #878787;\r\n    font-size: 17px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__message/form__message.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__message/form__message.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form__ok-message, .form__fail-message{\r\n    display: flex;\r\n    text-align: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    height: 230px;\r\n    background-color: #030305;\r\n    color: #FFFFFF;\r\n    border-radius: 35px;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/form/__message/form__message.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB","sourcesContent":[".form__ok-message, .form__fail-message{\r\n    display: flex;\r\n    text-align: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    height: 230px;\r\n    background-color: #030305;\r\n    color: #FFFFFF;\r\n    border-radius: 35px;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__submit/form-submit.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__submit/form-submit.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form__submit{\r\n    background-color: transparent;\r\n    color: #030305;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    border-radius: 50px;\r\n    border: 1px solid #030305 ;\r\n    padding: 20px 37px;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.form__submit:hover, .form__submit:active{\r\n    color: white;\r\n    background-color: #030305;\r\n    transition: 0.5s;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/form/__submit/form-submit.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,0BAA0B;IAC1B,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;;AAGA;IACI,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;AACpB","sourcesContent":[".form__submit{\r\n    background-color: transparent;\r\n    color: #030305;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    border-radius: 50px;\r\n    border: 1px solid #030305 ;\r\n    padding: 20px 37px;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.form__submit:hover, .form__submit:active{\r\n    color: white;\r\n    background-color: #030305;\r\n    transition: 0.5s;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/form/form.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/form/form.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form{\r\n    display: flex;\r\n    width: 440px;\r\n    flex-direction: column;\r\n    height: 285px;\r\n    justify-content: space-between;\r\n}\r\n\r\n@media screen and (max-width:476px){\r\n    .form{\r\n        width: 100%;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/blocks/form/form.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI;QACI,WAAW;IACf;AACJ","sourcesContent":[".form{\r\n    display: flex;\r\n    width: 440px;\r\n    flex-direction: column;\r\n    height: 285px;\r\n    justify-content: space-between;\r\n}\r\n\r\n@media screen and (max-width:476px){\r\n    .form{\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/header/header.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/header/header.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header{\r\n    width: 100%;\r\n    height: 90px;\r\n    border-bottom: 1px solid #c0a5a5;\r\n    \r\n}", "",{"version":3,"sources":["webpack://./src/blocks/header/header.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;;AAEpC","sourcesContent":[".header{\r\n    width: 100%;\r\n    height: 90px;\r\n    border-bottom: 1px solid #c0a5a5;\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/hide/hide.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/hide/hide.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hide{\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/hide/hide.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB","sourcesContent":[".hide{\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__describtion/info__describtion.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__describtion/info__describtion.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info__description{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    line-height: 30px;\r\n    color: #000000;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .info__description{\r\n        line-height: 28px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .info__description{\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .info__description{\r\n       text-align: center;\r\n       font-size: 22px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/info/__describtion/info__describtion.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;OACG,kBAAkB;OAClB,eAAe;IAClB;AACJ","sourcesContent":[".info__description{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    line-height: 30px;\r\n    color: #000000;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .info__description{\r\n        line-height: 28px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .info__description{\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .info__description{\r\n       text-align: center;\r\n       font-size: 22px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__label/info-label.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__label/info-label.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info__label{\r\n    padding-bottom: 6px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #030305;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/info/__label/info-label.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB","sourcesContent":[".info__label{\r\n    padding-bottom: 6px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #030305;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__title/info__title.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__title/info__title.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info__title{\r\n    font-size: 100px;\r\n    font-weight: 700;\r\n    padding-bottom: 63px;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .info__title{\r\n        font-size: 90px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .info__title{\r\n        font-size: 85px;\r\n        padding-bottom: 55px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/info/__title/info__title.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,oBAAoB;IACxB;AACJ","sourcesContent":[".info__title{\r\n    font-size: 100px;\r\n    font-weight: 700;\r\n    padding-bottom: 63px;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .info__title{\r\n        font-size: 90px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .info__title{\r\n        font-size: 85px;\r\n        padding-bottom: 55px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info/info.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/info/info.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info{\r\n    max-width: 588px;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .info{\r\n        max-width: 549px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .info{\r\n        max-width: 494px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .info{\r\n       display: flex;\r\n       flex-direction: column;\r\n       text-align: center;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/info/info.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;OACG,aAAa;OACb,sBAAsB;OACtB,kBAAkB;IACrB;AACJ","sourcesContent":[".info{\r\n    max-width: 588px;\r\n}\r\n\r\n@media screen and (max-width:1199px){\r\n    .info{\r\n        max-width: 549px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .info{\r\n        max-width: 494px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:800px){\r\n    .info{\r\n       display: flex;\r\n       flex-direction: column;\r\n       text-align: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/__menu-item/__menu-item.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/__menu-item/__menu-item.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu-item{\r\n    list-style: none;\r\n}\r\n\r\n.menu-item:not(:last-child){\r\n    padding-right: 97px;\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n    .menu-item:not(:last-child){\r\n        padding-right: 50px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/blocks/menu/__menu-item/__menu-item.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI;QACI,mBAAmB;IACvB;AACJ","sourcesContent":[".menu-item{\r\n    list-style: none;\r\n}\r\n\r\n.menu-item:not(:last-child){\r\n    padding-right: 97px;\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n    .menu-item:not(:last-child){\r\n        padding-right: 50px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/__menu-links/__menu-links.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/__menu-links/__menu-links.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu__links{\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    color: #030305;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/blocks/menu/__menu-links/__menu-links.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB","sourcesContent":[".menu__links{\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    color: #030305;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/menu.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/menu.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu{\r\n    display: flex;  \r\n}\r\n\r\n@media  screen and (max-width:677px) {\r\n    .menu{\r\n        display: none;  \r\n    }\r\n    \r\n}\r\n", "",{"version":3,"sources":["webpack://./src/blocks/menu/menu.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,aAAa;IACjB;;AAEJ","sourcesContent":[".menu{\r\n    display: flex;  \r\n}\r\n\r\n@media  screen and (max-width:677px) {\r\n    .menu{\r\n        display: none;  \r\n    }\r\n    \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/nav/nav.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/nav/nav.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav{\r\n    width: 40%px;\r\n}\r\n\r\n@media screen and (max-width: 677px) {\r\n    .nav{\r\n        position: absolute;\r\n        left: 46%\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/nav/nav.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI;QACI,kBAAkB;QAClB;IACJ;AACJ","sourcesContent":[".nav{\r\n    width: 40%px;\r\n}\r\n\r\n@media screen and (max-width: 677px) {\r\n    .nav{\r\n        position: absolute;\r\n        left: 46%\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/second-screen/second-screen.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/second-screen/second-screen.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".second-screen{\r\n    padding-top: 101px;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/second-screen/second-screen.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB","sourcesContent":[".second-screen{\r\n    padding-top: 101px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/second-screen/second-screen__image/second-screen__image.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/second-screen/second-screen__image/second-screen__image.css ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".second-screen__image{\r\n    width: 42%;\r\n    display: block;\r\n    object-fit: cover;\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n    .second-screen__image{\r\n        width: 55%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/second-screen/second-screen__image/second-screen__image.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI;QACI,UAAU;IACd;AACJ","sourcesContent":[".second-screen__image{\r\n    width: 42%;\r\n    display: block;\r\n    object-fit: cover;\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n    .second-screen__image{\r\n        width: 55%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/show/show.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/show/show.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".show{\r\n    display: block;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/show/show.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB","sourcesContent":[".show{\r\n    display: block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/third-screen/__title/third-screen__title.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/third-screen/__title/third-screen__title.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".third-screen__title{\r\n    font-size: 70px;\r\n    font-weight: 700;\r\n    color: #030305;\r\n    padding-bottom: 60px;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .third-screen__title{\r\n        font-size: 70px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:677px){\r\n    .third-screen__title{\r\n        font-size: 55px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/third-screen/__title/third-screen__title.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":[".third-screen__title{\r\n    font-size: 70px;\r\n    font-weight: 700;\r\n    color: #030305;\r\n    padding-bottom: 60px;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width:1009px){\r\n    .third-screen__title{\r\n        font-size: 70px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:677px){\r\n    .third-screen__title{\r\n        font-size: 55px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/third-screen/third-screen.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/third-screen/third-screen.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".third-screen{\r\n    padding-top: 99px;\r\n    padding-bottom: 110px;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/third-screen/third-screen.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,qBAAqB;AACzB","sourcesContent":[".third-screen{\r\n    padding-top: 99px;\r\n    padding-bottom: 110px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/user/__avatar/user__avatar.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/user/__avatar/user__avatar.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_user_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/user.svg */ "./src/img/user.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_user_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".user__avatar{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 100%;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/user/__avatar/user__avatar.css"],"names":[],"mappings":"AAAA;IACI,yDAA8C;IAC9C,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB","sourcesContent":[".user__avatar{\r\n    background-image: url('../../../img/user.svg');\r\n    background-repeat: no-repeat;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/user/__name/user__name.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/user/__name/user__name.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".user__name{\r\n    padding-right: 12px;\r\n    font-weight: 500;\r\n}\r\n\r\n@media screen and (max-width: 333px){\r\n    .user__name{\r\n        display: none;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/user/__name/user__name.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI;QACI,aAAa;IACjB;AACJ","sourcesContent":[".user__name{\r\n    padding-right: 12px;\r\n    font-weight: 500;\r\n}\r\n\r\n@media screen and (max-width: 333px){\r\n    .user__name{\r\n        display: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/user/user.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/user/user.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".user{\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n}", "",{"version":3,"sources":["webpack://./src/blocks/user/user.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB","sourcesContent":[".user{\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_vendors_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./vendors/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/vendors/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_vendors_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./vendors/fonts/fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/vendors/fonts/fonts.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_advantages_wrapper_advantage_wrapper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/advantages-wrapper/advantage-wrapper.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/advantages-wrapper/advantage-wrapper.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_advantages_wrapper_advantage_advantages_wrapper_advantage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/advantages-wrapper/__advantage/advantages-wrapper__advantage.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/advantages-wrapper/__advantage/advantages-wrapper__advantage.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_container_footer_container_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/container-footer/container-footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/container-footer/container-footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_container_header_container_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/container-header/container-header.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/container-header/container-header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_container_container_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/container/container.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/container/container.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_first_screen_first_screen_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/first-screen/first-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/first-screen/first-screen.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_first_screen_image_first_screen_image_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/first-screen/__image/first-screen__image.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/first-screen/__image/first-screen__image.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/footer/footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/footer/footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_footer_rights_footer_rights_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/footer/__rights/footer__rights.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/footer/__rights/footer__rights.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_form_field_form_field_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/form/__field/form__field.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__field/form__field.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_form_message_form_message_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/form/__message/form__message.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__message/form__message.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_form_submit_form_submit_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/form/__submit/form-submit.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/form/__submit/form-submit.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_form_form_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/form/form.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/form/form.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_header_header_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/header/header.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/header/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_hide_hide_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/hide/hide.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/hide/hide.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_buttons_buttons_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/buttons/buttons.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/buttons/buttons.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_buttons_buttons_button_css_buttons_button_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/buttons/buttons__button.css/buttons__button.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/buttons/buttons__button.css/buttons__button.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_info_describtion_info_describtion_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/info/__describtion/info__describtion.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__describtion/info__describtion.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_info_label_info_label_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/info/__label/info-label.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__label/info-label.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_info_title_info_title_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/info/__title/info__title.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info/__title/info__title.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_info_info_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/info/info.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info/info.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_menu_menu_item_menu_item_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/menu/__menu-item/__menu-item.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/__menu-item/__menu-item.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_menu_menu_links_menu_links_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/menu/__menu-links/__menu-links.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/__menu-links/__menu-links.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_menu_menu_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/menu/menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/menu/menu.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_nav_nav_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/nav/nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/nav/nav.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_second_screen_second_screen_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/second-screen/second-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/second-screen/second-screen.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_second_screen_second_screen_image_second_screen_image_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/second-screen/second-screen__image/second-screen__image.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/second-screen/second-screen__image/second-screen__image.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_show_show_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/show/show.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/show/show.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_third_screen_title_third_screen_title_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/third-screen/__title/third-screen__title.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/third-screen/__title/third-screen__title.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_third_screen_third_screen_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/third-screen/third-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/third-screen/third-screen.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_user_avatar_user_avatar_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/user/__avatar/user__avatar.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/user/__avatar/user__avatar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_user_name_user_name_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/user/__name/user__name.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/user/__name/user__name.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_user_user_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/user/user.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/user/user.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_container_third_screen_third_screen_container_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/container-third-screen/third-screen-container.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/container-third-screen/third-screen-container.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_burger_menu_burger_menu_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./blocks/burger-menu/burger-menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/burger-menu/burger-menu.css");
// Imports







































var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_vendors_normalize_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_vendors_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_3__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_advantages_wrapper_advantage_wrapper_css__WEBPACK_IMPORTED_MODULE_4__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_advantages_wrapper_advantage_advantages_wrapper_advantage_css__WEBPACK_IMPORTED_MODULE_5__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_container_footer_container_footer_css__WEBPACK_IMPORTED_MODULE_6__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_container_header_container_header_css__WEBPACK_IMPORTED_MODULE_7__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_container_container_css__WEBPACK_IMPORTED_MODULE_8__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_first_screen_first_screen_css__WEBPACK_IMPORTED_MODULE_9__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_first_screen_image_first_screen_image_css__WEBPACK_IMPORTED_MODULE_10__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_11__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_footer_rights_footer_rights_css__WEBPACK_IMPORTED_MODULE_12__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_form_field_form_field_css__WEBPACK_IMPORTED_MODULE_13__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_form_message_form_message_css__WEBPACK_IMPORTED_MODULE_14__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_form_submit_form_submit_css__WEBPACK_IMPORTED_MODULE_15__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_form_form_css__WEBPACK_IMPORTED_MODULE_16__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_header_header_css__WEBPACK_IMPORTED_MODULE_17__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_hide_hide_css__WEBPACK_IMPORTED_MODULE_18__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_buttons_buttons_css__WEBPACK_IMPORTED_MODULE_19__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_buttons_buttons_button_css_buttons_button_css__WEBPACK_IMPORTED_MODULE_20__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_info_describtion_info_describtion_css__WEBPACK_IMPORTED_MODULE_21__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_info_label_info_label_css__WEBPACK_IMPORTED_MODULE_22__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_info_title_info_title_css__WEBPACK_IMPORTED_MODULE_23__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_info_info_css__WEBPACK_IMPORTED_MODULE_24__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_menu_menu_item_menu_item_css__WEBPACK_IMPORTED_MODULE_25__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_menu_menu_links_menu_links_css__WEBPACK_IMPORTED_MODULE_26__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_menu_menu_css__WEBPACK_IMPORTED_MODULE_27__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_nav_nav_css__WEBPACK_IMPORTED_MODULE_28__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_second_screen_second_screen_css__WEBPACK_IMPORTED_MODULE_29__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_second_screen_second_screen_image_second_screen_image_css__WEBPACK_IMPORTED_MODULE_30__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_show_show_css__WEBPACK_IMPORTED_MODULE_31__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_third_screen_title_third_screen_title_css__WEBPACK_IMPORTED_MODULE_32__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_third_screen_third_screen_css__WEBPACK_IMPORTED_MODULE_33__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_user_avatar_user_avatar_css__WEBPACK_IMPORTED_MODULE_34__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_user_name_user_name_css__WEBPACK_IMPORTED_MODULE_35__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_user_user_css__WEBPACK_IMPORTED_MODULE_36__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_container_third_screen_third_screen_container_css__WEBPACK_IMPORTED_MODULE_37__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_burger_menu_burger_menu_css__WEBPACK_IMPORTED_MODULE_38__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/vendors/fonts/fonts.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/vendors/fonts/fonts.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Roboto_Bold_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Roboto-Bold.woff */ "./src/vendors/fonts/Roboto-Bold.woff");
/* harmony import */ var _Roboto_Bold_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Roboto-Bold.woff2 */ "./src/vendors/fonts/Roboto-Bold.woff2");
/* harmony import */ var _Roboto_Medium_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Roboto-Medium.woff */ "./src/vendors/fonts/Roboto-Medium.woff");
/* harmony import */ var _Roboto_Medium_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Roboto-Medium.woff2 */ "./src/vendors/fonts/Roboto-Medium.woff2");
/* harmony import */ var _Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Roboto-Regular.woff */ "./src/vendors/fonts/Roboto-Regular.woff");
/* harmony import */ var _Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Roboto-Regular.woff2 */ "./src/vendors/fonts/Roboto-Regular.woff2");
// Imports









var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Roboto_Bold_woff__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Roboto_Bold_woff2__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Roboto_Medium_woff__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Roboto_Medium_woff2__WEBPACK_IMPORTED_MODULE_6__);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Roboto_Regular_woff__WEBPACK_IMPORTED_MODULE_7__);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Roboto_Regular_woff2__WEBPACK_IMPORTED_MODULE_8__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Roboto';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff'),\r\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff2');\r\n    font-weight: 700;\r\n    font-style: bold;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff'),\r\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff2');\r\n    font-weight: 500;\r\n    font-style: medium;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff'),\r\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff2');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n*{\r\n    font-family: 'Roboto';\r\n}", "",{"version":3,"sources":["webpack://./src/vendors/fonts/fonts.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB;gEAC+C;IAC/C,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB;gEACiD;IACjD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB;gEACkD;IAClD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["@font-face {\r\n    font-family: 'Roboto';\r\n    src: url('./Roboto-Bold.woff') format('woff'),\r\n         url('./Roboto-Bold.woff2') format('woff2');\r\n    font-weight: 700;\r\n    font-style: bold;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url('./Roboto-Medium.woff') format('woff'),\r\n         url('./Roboto-Medium.woff2') format('woff2');\r\n    font-weight: 500;\r\n    font-style: medium;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url('./Roboto-Regular.woff') format('woff'),\r\n         url('./Roboto-Regular.woff2') format('woff2');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n*{\r\n    font-family: 'Roboto';\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/vendors/normalize.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/vendors/normalize.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n========================================================================== */\r\n\r\n/**\r\n* 1. Correct the line height in all browsers.\r\n* 2. Prevent adjustments of font size after orientation changes in iOS.\r\n*/\r\n\r\nhtml {\r\nline-height: 1.15; /* 1 */\r\n-webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n    ========================================================================== */\r\n\r\n/**\r\n* Remove the margin in all browsers.\r\n*/\r\n\r\nbody {\r\nmargin: 0;\r\n}\r\n\r\n/**\r\n* Render the `main` element consistently in IE.\r\n*/\r\n\r\nmain {\r\ndisplay: block;\r\n}\r\n\r\n/**\r\n* Correct the font size and margin on `h1` elements within `section` and\r\n* `article` contexts in Chrome, Firefox, and Safari.\r\n*/\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n/* Grouping content\r\n    ========================================================================== */\r\n\r\n/**\r\n* 1. Add the correct box sizing in Firefox.\r\n* 2. Show the overflow in Edge and IE.\r\n*/\r\n\r\nhr {\r\nbox-sizing: content-box; /* 1 */\r\nheight: 0; /* 1 */\r\noverflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n* 1. Correct the inheritance and scaling of font size in all browsers.\r\n* 2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\npre {\r\nfont-family: monospace, monospace; /* 1 */\r\nfont-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n    ========================================================================== */\r\n\r\n/**\r\n* Remove the gray background on active links in IE 10.\r\n*/\r\n\r\na {\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n}\r\n\r\n/**\r\n* 1. Remove the bottom border in Chrome 57-\r\n* 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n*/\r\n\r\nabbr[title] {\r\nborder-bottom: none; /* 1 */\r\ntext-decoration: underline; /* 2 */\r\ntext-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n* Add the correct font weight in Chrome, Edge, and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\nfont-weight: bolder;\r\n}\r\n\r\n/**\r\n* 1. Correct the inheritance and scaling of font size in all browsers.\r\n* 2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\nfont-family: monospace, monospace; /* 1 */\r\nfont-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n* Add the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\nfont-size: 80%;\r\n}\r\n\r\n/**\r\n* Prevent `sub` and `sup` elements from affecting the line height in\r\n* all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\nfont-size: 75%;\r\nline-height: 0;\r\nposition: relative;\r\nvertical-align: baseline;\r\n}\r\n\r\nsub {\r\nbottom: -0.25em;\r\n}\r\n\r\nsup {\r\ntop: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n    ========================================================================== */\r\n\r\n/**\r\n* Remove the border on images inside links in IE 10.\r\n*/\r\n\r\nimg {\r\nborder-style: none;\r\nwidth: 100%;\r\nheight:auto;\r\n}\r\n\r\n/* Forms\r\n    ========================================================================== */\r\n\r\n/**\r\n* 1. Change the font styles in all browsers.\r\n* 2. Remove the margin in Firefox and Safari.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\nfont-family: inherit; /* 1 */\r\nfont-size: 100%; /* 1 */\r\nline-height: 1.15; /* 1 */\r\nmargin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n* Show the overflow in IE.\r\n* 1. Show the overflow in Edge.\r\n*/\r\n\r\nbutton,\r\ninput { /* 1 */\r\noverflow: visible;\r\n}\r\n\r\n/**\r\n* Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n* 1. Remove the inheritance of text transform in Firefox.\r\n*/\r\n\r\nbutton,\r\nselect { /* 1 */\r\ntext-transform: none;\r\n}\r\n\r\n/**\r\n* Correct the inability to style clickable types in iOS and Safari.\r\n*/\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n-webkit-appearance: button;\r\n}\r\n\r\n/**\r\n* Remove the inner border and padding in Firefox.\r\n*/\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\nborder-style: none;\r\npadding: 0;\r\n}\r\n\r\n/**\r\n* Restore the focus styles unset by the previous rule.\r\n*/\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\noutline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n* Correct the padding in Firefox.\r\n*/\r\n\r\nfieldset {\r\npadding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n* 1. Correct the text wrapping in Edge and IE.\r\n* 2. Correct the color inheritance from `fieldset` elements in IE.\r\n* 3. Remove the padding so developers are not caught out when they zero out\r\n*    `fieldset` elements in all browsers.\r\n*/\r\n\r\nlegend {\r\nbox-sizing: border-box; /* 1 */\r\ncolor: inherit; /* 2 */\r\ndisplay: table; /* 1 */\r\nmax-width: 100%; /* 1 */\r\npadding: 0; /* 3 */\r\nwhite-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n* Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n*/\r\n\r\nprogress {\r\nvertical-align: baseline;\r\n}\r\n\r\n/**\r\n* Remove the default vertical scrollbar in IE 10+.\r\n*/\r\n\r\ntextarea {\r\noverflow: auto;\r\n}\r\n\r\n/**\r\n* 1. Add the correct box sizing in IE 10.\r\n* 2. Remove the padding in IE 10.\r\n*/\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\nbox-sizing: border-box; /* 1 */\r\npadding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n* Correct the cursor style of increment and decrement buttons in Chrome.\r\n*/\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\nheight: auto;\r\n}\r\n\r\n/**\r\n* 1. Correct the odd appearance in Chrome and Safari.\r\n* 2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type=\"search\"] {\r\n-webkit-appearance: textfield; /* 1 */\r\noutline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n* Remove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n-webkit-appearance: none;\r\n}\r\n\r\n/**\r\n* 1. Correct the inability to style clickable types in iOS and Safari.\r\n* 2. Change font properties to `inherit` in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n-webkit-appearance: button; /* 1 */\r\nfont: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n    ========================================================================== */\r\n\r\n/*\r\n* Add the correct display in Edge, IE 10+, and Firefox.\r\n*/\r\n\r\ndetails {\r\ndisplay: block;\r\n}\r\n\r\n/*\r\n* Add the correct display in all browsers.\r\n*/\r\n\r\nsummary {\r\ndisplay: list-item;\r\n}\r\n\r\n/* Misc\r\n    ========================================================================== */\r\n\r\n/**\r\n* Add the correct display in IE 10+.\r\n*/\r\n\r\ntemplate {\r\ndisplay: none;\r\n}\r\n\r\n/**\r\n* Add the correct display in IE 10.\r\n*/\r\n\r\n[hidden] {\r\ndisplay: none;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/vendors/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;4EAC4E;;AAE5E;;;CAGC;;AAED;AACA,iBAAiB,EAAE,MAAM;AACzB,8BAA8B,EAAE,MAAM;AACtC;;AAEA;gFACgF;;AAEhF;;CAEC;;AAED;AACA,SAAS;AACT;;AAEA;;CAEC;;AAED;AACA,cAAc;AACd;;AAEA;;;CAGC;;AAED;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;gFACgF;;AAEhF;;;CAGC;;AAED;AACA,uBAAuB,EAAE,MAAM;AAC/B,SAAS,EAAE,MAAM;AACjB,iBAAiB,EAAE,MAAM;AACzB;;AAEA;;;CAGC;;AAED;AACA,iCAAiC,EAAE,MAAM;AACzC,cAAc,EAAE,MAAM;AACtB;;AAEA;gFACgF;;AAEhF;;CAEC;;AAED;IACI,6BAA6B;IAC7B,qBAAqB;AACzB;;AAEA;;;CAGC;;AAED;AACA,mBAAmB,EAAE,MAAM;AAC3B,0BAA0B,EAAE,MAAM;AAClC,iCAAiC,EAAE,MAAM;AACzC;;AAEA;;CAEC;;AAED;;AAEA,mBAAmB;AACnB;;AAEA;;;CAGC;;AAED;;;AAGA,iCAAiC,EAAE,MAAM;AACzC,cAAc,EAAE,MAAM;AACtB;;AAEA;;CAEC;;AAED;AACA,cAAc;AACd;;AAEA;;;CAGC;;AAED;;AAEA,cAAc;AACd,cAAc;AACd,kBAAkB;AAClB,wBAAwB;AACxB;;AAEA;AACA,eAAe;AACf;;AAEA;AACA,WAAW;AACX;;AAEA;gFACgF;;AAEhF;;CAEC;;AAED;AACA,kBAAkB;AAClB,WAAW;AACX,WAAW;AACX;;AAEA;gFACgF;;AAEhF;;;CAGC;;AAED;;;;;AAKA,oBAAoB,EAAE,MAAM;AAC5B,eAAe,EAAE,MAAM;AACvB,iBAAiB,EAAE,MAAM;AACzB,SAAS,EAAE,MAAM;AACjB;;AAEA;;;CAGC;;AAED;QACQ,MAAM;AACd,iBAAiB;AACjB;;AAEA;;;CAGC;;AAED;SACS,MAAM;AACf,oBAAoB;AACpB;;AAEA;;CAEC;;AAED;;;;AAIA,0BAA0B;AAC1B;;AAEA;;CAEC;;AAED;;;;AAIA,kBAAkB;AAClB,UAAU;AACV;;AAEA;;CAEC;;AAED;;;;AAIA,8BAA8B;AAC9B;;AAEA;;CAEC;;AAED;AACA,8BAA8B;AAC9B;;AAEA;;;;;CAKC;;AAED;AACA,sBAAsB,EAAE,MAAM;AAC9B,cAAc,EAAE,MAAM;AACtB,cAAc,EAAE,MAAM;AACtB,eAAe,EAAE,MAAM;AACvB,UAAU,EAAE,MAAM;AAClB,mBAAmB,EAAE,MAAM;AAC3B;;AAEA;;CAEC;;AAED;AACA,wBAAwB;AACxB;;AAEA;;CAEC;;AAED;AACA,cAAc;AACd;;AAEA;;;CAGC;;AAED;;AAEA,sBAAsB,EAAE,MAAM;AAC9B,UAAU,EAAE,MAAM;AAClB;;AAEA;;CAEC;;AAED;;AAEA,YAAY;AACZ;;AAEA;;;CAGC;;AAED;AACA,6BAA6B,EAAE,MAAM;AACrC,oBAAoB,EAAE,MAAM;AAC5B;;AAEA;;CAEC;;AAED;AACA,wBAAwB;AACxB;;AAEA;;;CAGC;;AAED;AACA,0BAA0B,EAAE,MAAM;AAClC,aAAa,EAAE,MAAM;AACrB;;AAEA;gFACgF;;AAEhF;;CAEC;;AAED;AACA,cAAc;AACd;;AAEA;;CAEC;;AAED;AACA,kBAAkB;AAClB;;AAEA;gFACgF;;AAEhF;;CAEC;;AAED;AACA,aAAa;AACb;;AAEA;;CAEC;;AAED;AACA,aAAa;AACb","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n========================================================================== */\r\n\r\n/**\r\n* 1. Correct the line height in all browsers.\r\n* 2. Prevent adjustments of font size after orientation changes in iOS.\r\n*/\r\n\r\nhtml {\r\nline-height: 1.15; /* 1 */\r\n-webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n    ========================================================================== */\r\n\r\n/**\r\n* Remove the margin in all browsers.\r\n*/\r\n\r\nbody {\r\nmargin: 0;\r\n}\r\n\r\n/**\r\n* Render the `main` element consistently in IE.\r\n*/\r\n\r\nmain {\r\ndisplay: block;\r\n}\r\n\r\n/**\r\n* Correct the font size and margin on `h1` elements within `section` and\r\n* `article` contexts in Chrome, Firefox, and Safari.\r\n*/\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n/* Grouping content\r\n    ========================================================================== */\r\n\r\n/**\r\n* 1. Add the correct box sizing in Firefox.\r\n* 2. Show the overflow in Edge and IE.\r\n*/\r\n\r\nhr {\r\nbox-sizing: content-box; /* 1 */\r\nheight: 0; /* 1 */\r\noverflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n* 1. Correct the inheritance and scaling of font size in all browsers.\r\n* 2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\npre {\r\nfont-family: monospace, monospace; /* 1 */\r\nfont-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n    ========================================================================== */\r\n\r\n/**\r\n* Remove the gray background on active links in IE 10.\r\n*/\r\n\r\na {\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n}\r\n\r\n/**\r\n* 1. Remove the bottom border in Chrome 57-\r\n* 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n*/\r\n\r\nabbr[title] {\r\nborder-bottom: none; /* 1 */\r\ntext-decoration: underline; /* 2 */\r\ntext-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n* Add the correct font weight in Chrome, Edge, and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\nfont-weight: bolder;\r\n}\r\n\r\n/**\r\n* 1. Correct the inheritance and scaling of font size in all browsers.\r\n* 2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\nfont-family: monospace, monospace; /* 1 */\r\nfont-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n* Add the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\nfont-size: 80%;\r\n}\r\n\r\n/**\r\n* Prevent `sub` and `sup` elements from affecting the line height in\r\n* all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\nfont-size: 75%;\r\nline-height: 0;\r\nposition: relative;\r\nvertical-align: baseline;\r\n}\r\n\r\nsub {\r\nbottom: -0.25em;\r\n}\r\n\r\nsup {\r\ntop: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n    ========================================================================== */\r\n\r\n/**\r\n* Remove the border on images inside links in IE 10.\r\n*/\r\n\r\nimg {\r\nborder-style: none;\r\nwidth: 100%;\r\nheight:auto;\r\n}\r\n\r\n/* Forms\r\n    ========================================================================== */\r\n\r\n/**\r\n* 1. Change the font styles in all browsers.\r\n* 2. Remove the margin in Firefox and Safari.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\nfont-family: inherit; /* 1 */\r\nfont-size: 100%; /* 1 */\r\nline-height: 1.15; /* 1 */\r\nmargin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n* Show the overflow in IE.\r\n* 1. Show the overflow in Edge.\r\n*/\r\n\r\nbutton,\r\ninput { /* 1 */\r\noverflow: visible;\r\n}\r\n\r\n/**\r\n* Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n* 1. Remove the inheritance of text transform in Firefox.\r\n*/\r\n\r\nbutton,\r\nselect { /* 1 */\r\ntext-transform: none;\r\n}\r\n\r\n/**\r\n* Correct the inability to style clickable types in iOS and Safari.\r\n*/\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n-webkit-appearance: button;\r\n}\r\n\r\n/**\r\n* Remove the inner border and padding in Firefox.\r\n*/\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\nborder-style: none;\r\npadding: 0;\r\n}\r\n\r\n/**\r\n* Restore the focus styles unset by the previous rule.\r\n*/\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\noutline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n* Correct the padding in Firefox.\r\n*/\r\n\r\nfieldset {\r\npadding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n* 1. Correct the text wrapping in Edge and IE.\r\n* 2. Correct the color inheritance from `fieldset` elements in IE.\r\n* 3. Remove the padding so developers are not caught out when they zero out\r\n*    `fieldset` elements in all browsers.\r\n*/\r\n\r\nlegend {\r\nbox-sizing: border-box; /* 1 */\r\ncolor: inherit; /* 2 */\r\ndisplay: table; /* 1 */\r\nmax-width: 100%; /* 1 */\r\npadding: 0; /* 3 */\r\nwhite-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n* Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n*/\r\n\r\nprogress {\r\nvertical-align: baseline;\r\n}\r\n\r\n/**\r\n* Remove the default vertical scrollbar in IE 10+.\r\n*/\r\n\r\ntextarea {\r\noverflow: auto;\r\n}\r\n\r\n/**\r\n* 1. Add the correct box sizing in IE 10.\r\n* 2. Remove the padding in IE 10.\r\n*/\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\nbox-sizing: border-box; /* 1 */\r\npadding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n* Correct the cursor style of increment and decrement buttons in Chrome.\r\n*/\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\nheight: auto;\r\n}\r\n\r\n/**\r\n* 1. Correct the odd appearance in Chrome and Safari.\r\n* 2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type=\"search\"] {\r\n-webkit-appearance: textfield; /* 1 */\r\noutline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n* Remove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n-webkit-appearance: none;\r\n}\r\n\r\n/**\r\n* 1. Correct the inability to style clickable types in iOS and Safari.\r\n* 2. Change font properties to `inherit` in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n-webkit-appearance: button; /* 1 */\r\nfont: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n    ========================================================================== */\r\n\r\n/*\r\n* Add the correct display in Edge, IE 10+, and Firefox.\r\n*/\r\n\r\ndetails {\r\ndisplay: block;\r\n}\r\n\r\n/*\r\n* Add the correct display in all browsers.\r\n*/\r\n\r\nsummary {\r\ndisplay: list-item;\r\n}\r\n\r\n/* Misc\r\n    ========================================================================== */\r\n\r\n/**\r\n* Add the correct display in IE 10+.\r\n*/\r\n\r\ntemplate {\r\ndisplay: none;\r\n}\r\n\r\n/**\r\n* Add the correct display in IE 10.\r\n*/\r\n\r\n[hidden] {\r\ndisplay: none;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./index.css */ "./src/index.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./src/img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/image2.jpg */ "./src/img/image2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/image4.jpg */ "./src/img/image4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ "./src/index.js"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n    <title>AirPodsMax</title>\r\n</head>\r\n<body>\r\n    <header class=\"header\">\r\n        <div class=\"container-header\">\r\n            <a class =\"logo\" href=\"index.html\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\"></a>\r\n            <nav class=\"nav\">\r\n                <ul class=\"menu\">\r\n                    <li class=\"menu-item\"><a class=\"menu__links\" href=\"index.html\">Главная</a></li>\r\n                    <li class=\"menu-item\"><a class=\"menu__links\" href=\"#advantages\">Преимущества</a></li>\r\n                    <li class=\"menu-item\"><a class=\"menu__links\" href=\"#checkout\">Предзаказ</a></li>\r\n                </ul>\r\n\r\n                <div class=\"burger-menu\"></div>\r\n            </nav>\r\n    \r\n            <div class=\"user\">\r\n                <span class=\"user__name\">User</span>\r\n                <div class=\"user__avatar\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        \r\n    </header>\r\n\r\n    <div class=\"first-screen\" >\r\n        <div class=\"container\">\r\n            <div class=\"info\">\r\n                <span class=\"info__label\">Apple</span>\r\n                <h1 class=\"info__title\">AirPods Max</h1>\r\n                <p class=\"info__description\">AirPods Max — это совершенно новый взгляд на полноразмерные наушники. Все элементы AirPods Max, от амбушюров до оголовья, спроектированы таким образом, чтобы наушники оптимально прилегали к голове любой формы. Благодаря этому достигается невероятное качество и богатство звука.</p>\r\n                <div class=\"buttons\">\r\n                    <a href=\"#advantages\" class=\"buttons__button\">Подробнее</a>\r\n                    <a href=\"#checkout\" class=\"buttons__button\">Оформить заказ</a>\r\n                </div>\r\n            </div>\r\n            \r\n            <img class=\"first-screen__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Наушники\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"second-screen\" id=\"advantages\">\r\n        <div class=\"container\">\r\n                <img class=\"second-screen__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Гарнитура\">\r\n                <div class=\"advantages-wrapper\">\r\n                    <p class=\"advantages-wrapper__advantage\">Звук высокой четкости</p>\r\n                    <p class=\"advantages-wrapper__advantage\">Активное шумоподавление</p>\r\n                    <p class=\"advantages-wrapper__advantage\">Технология пространственного аудио</p>\r\n                </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"third-screen\" id=\"checkout\">\r\n        <div class=\"third-screen-container\">\r\n            <h2 class=\"third-screen__title\">Оформи предзаказ</h2>\r\n            <form class=\"form\" action=\"#\" method=\"POST\">\r\n                <input class=\"form__field\" type=\"text\" name=\"userName\" placeholder=\"Имя\">\r\n                <input class=\"form__field\" type=\"number\" name=\"phoneNumber\" placeholder=\"+375 (___) ___-__-__\">\r\n                <input class=\"form__field\" type=\"email\" name=\"email\" placeholder=\"E-mail\">\r\n                <input class=\"form__submit\" type=\"submit\" name=\"sendData\" value=\"Оформить предзаказ\">\r\n            </form>\r\n\r\n            <div class=\"form__ok-message hide\">Спасибо! Мы скоро свяжемся с вами.</div>\r\n            <div class=\"form__fail-message hide\">Что-то пошло не так. Попробуйте ввести данные снова.</div>\r\n        </div>\r\n    </div>\r\n\r\n    <footer class=\"footer\">\r\n        <div class=\"container-footer\">\r\n            <a class=\"logo\" href=\"index.html\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\"></a>\r\n            <p class=\"footer__rights\">Все права защищены, 2021</p>\r\n        </div>\r\n    </footer>\r\n\r\n    <script src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"></script>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/img/image2.jpg":
/*!****************************!*\
  !*** ./src/img/image2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/85f2397505229c835803.jpg";

/***/ }),

/***/ "./src/img/image4.jpg":
/*!****************************!*\
  !*** ./src/img/image4.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7a6ddcbcca8d6b520787.jpg";

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e4f62af8678126e06c1d.svg";

/***/ }),

/***/ "./src/img/menu.svg":
/*!**************************!*\
  !*** ./src/img/menu.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9478d825e83e5bd5f0d5.svg";

/***/ }),

/***/ "./src/img/user.svg":
/*!**************************!*\
  !*** ./src/img/user.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/85994bf01cbba8c23ae0.svg";

/***/ }),

/***/ "./src/vendors/fonts/Roboto-Bold.woff":
/*!********************************************!*\
  !*** ./src/vendors/fonts/Roboto-Bold.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/35004a76bb700c1cc207.woff";

/***/ }),

/***/ "./src/vendors/fonts/Roboto-Bold.woff2":
/*!*********************************************!*\
  !*** ./src/vendors/fonts/Roboto-Bold.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/97a49e25c4d21da47715.woff2";

/***/ }),

/***/ "./src/vendors/fonts/Roboto-Medium.woff":
/*!**********************************************!*\
  !*** ./src/vendors/fonts/Roboto-Medium.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/9324569522debe1cd5a8.woff";

/***/ }),

/***/ "./src/vendors/fonts/Roboto-Medium.woff2":
/*!***********************************************!*\
  !*** ./src/vendors/fonts/Roboto-Medium.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/5c6fc256dc18fc0d765a.woff2";

/***/ }),

/***/ "./src/vendors/fonts/Roboto-Regular.woff":
/*!***********************************************!*\
  !*** ./src/vendors/fonts/Roboto-Regular.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/705f7f6ec5b4886d393f.woff";

/***/ }),

/***/ "./src/vendors/fonts/Roboto-Regular.woff2":
/*!************************************************!*\
  !*** ./src/vendors/fonts/Roboto-Regular.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/d9179683aac83cc7bf68.woff2";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index_bundle.js.map