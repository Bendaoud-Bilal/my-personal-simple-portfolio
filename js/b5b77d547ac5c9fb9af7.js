"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbilal_bendaoud_portfolio"] = self["webpackChunkbilal_bendaoud_portfolio"] || []).push([["src_app_views_Contacts_js"],{

/***/ "./src/app/components/Path.js"
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    return /*html*/`\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://bilal-bendaoud-portfolio/./src/app/components/Path.js?\n}");

/***/ },

/***/ "./src/app/views/Contacts.js"
/*!***********************************!*\
  !*** ./src/app/views/Contacts.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n/* harmony import */ var styles_pages_contacts_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/contacts.sass */ \"./src/assets/styles/pages/contacts.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\n        <section class=\"contacts-page\">\n            <div class=\"contacts-page__content\">\n                <div class=\"contacts-page__info\">\n                    <h2 class=\"h2\">Get in Touch</h2>\n                    <p class=\"contacts-page__description\">\n                        I'm currently open for internship and job opportunities in Cyber Security and Backend Development. \n                        Feel free to reach out if you have any questions or just want to connect!\n                    </p>\n                    \n                    <div class=\"contacts-page__details\">\n                        <div class=\"contact-item\">\n                            <img src=\"/images/icons/email.svg\" alt=\"Email\" class=\"contact-item__icon\">\n                            <div class=\"contact-item__content\">\n                                <h3 class=\"contact-item__title\">Email</h3>\n                                <a href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].email}\" class=\"contact-item__link\">${_consts_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emailRaw}</a>\n                            </div>\n                        </div>\n                        \n                        <div class=\"contact-item\">\n                            <img src=\"/images/icons/github.svg\" alt=\"GitHub\" class=\"contact-item__icon\">\n                            <div class=\"contact-item__content\">\n                                <h3 class=\"contact-item__title\">GitHub</h3>\n                                <a href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].github}\" target=\"_blank\" class=\"contact-item__link\">${_consts_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].githubRaw}</a>\n                            </div>\n                        </div>\n                        \n                        <div class=\"contact-item\">\n                            <img src=\"/images/icons/location.svg\" alt=\"Location\" class=\"contact-item__icon\">\n                            <div class=\"contact-item__content\">\n                                <h3 class=\"contact-item__title\">Location</h3>\n                                <span class=\"contact-item__text\">Ouargla, Algeria / Bejaia, Algeria</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"contacts-page__form-wrapper\">\n                    <h3 class=\"contacts-page__form-title\">Send a Message</h3>\n                    <form class=\"contact-form\" id=\"contact-form\">\n                        <div class=\"contact-form__group\">\n                            <label for=\"name\" class=\"contact-form__label\">Name</label>\n                            <input type=\"text\" id=\"name\" name=\"name\" class=\"contact-form__input\" placeholder=\"Your name\" required>\n                        </div>\n                        \n                        <div class=\"contact-form__group\">\n                            <label for=\"email\" class=\"contact-form__label\">Email</label>\n                            <input type=\"email\" id=\"email\" name=\"email\" class=\"contact-form__input\" placeholder=\"your.email@example.com\" required>\n                        </div>\n                        \n                        <div class=\"contact-form__group\">\n                            <label for=\"subject\" class=\"contact-form__label\">Subject</label>\n                            <input type=\"text\" id=\"subject\" name=\"subject\" class=\"contact-form__input\" placeholder=\"What's this about?\">\n                        </div>\n                        \n                        <div class=\"contact-form__group\">\n                            <label for=\"message\" class=\"contact-form__label\">Message</label>\n                            <textarea id=\"message\" name=\"message\" class=\"contact-form__textarea\" rows=\"5\" placeholder=\"Your message...\" required></textarea>\n                        </div>\n                        \n                        <button type=\"submit\" class=\"button button__primary contact-form__submit\">\n                            Send Message =>\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://bilal-bendaoud-portfolio/./src/app/views/Contacts.js?\n}");

/***/ },

/***/ "./src/assets/styles/pages/contacts.sass"
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/contacts.sass ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bilal-bendaoud-portfolio/./src/assets/styles/pages/contacts.sass?\n}");

/***/ }

}]);