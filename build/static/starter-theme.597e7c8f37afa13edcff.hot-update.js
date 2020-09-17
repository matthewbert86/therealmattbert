webpackHotUpdate("starter-theme",{

/***/ "./packages/mars-theme/src/components/menu-modal.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/menu-modal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var MenuModal=(_ref)=>{var{state}=_ref;var{menu}=state.theme;var isThereLinks=menu!=null&&menu.length>0;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuOverlay,null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuContent,{as:\"nav\"},isThereLinks&&menu.map((_ref2)=>{var[name,link]=_ref2;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuLink,{key:name,link:link,\"aria-current\":state.router.link===link?\"page\":undefined},name);}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Icons,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"a\",{href:\"https://twitter.com/therealmattbert/\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaTwitter\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"a\",{href:\"https://www.instagram.com/therealmattbert/\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaInstagram\"],null))))));};var MenuOverlay=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu0\",label:\"MenuOverlay\"})( false?undefined:{name:\"hb4ihw\",styles:\"background-color:#8ccbfc;width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0;@media screen and (min-width:800px){&{display:none;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDOEIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SWNvbnM+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90aGVyZWFsbWF0dGJlcnQvXCI+XG4gICAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9JY29ucz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNjYmZjO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHllbGxvdzsgKi9cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuContent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu1\",label:\"MenuContent\"})( false?undefined:{name:\"4ma18r\",styles:\"z-index:3;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEOEIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SWNvbnM+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90aGVyZWFsbWF0dGJlcnQvXCI+XG4gICAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9JY29ucz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNjYmZjO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHllbGxvdzsgKi9cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Icons=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"eqtk5fu2\",label:\"Icons\"})( false?undefined:{name:\"1bb9x68\",styles:\"font-size:35px;padding:30px 0 0 10px;display:flex;justify-content:center;a:hover{color:white;}svg{padding-right:10px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREd0IiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SWNvbnM+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90aGVyZWFsbWF0dGJlcnQvXCI+XG4gICAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9JY29ucz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNjYmZjO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHllbGxvdzsgKi9cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuLink=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"eqtk5fu3\",label:\"MenuLink\"})( false?undefined:{name:\"13fzehu\",styles:\"width:100%;display:inline-block;outline:0;font-size:20px;text-align:center;padding:1.2rem 0;&:hover,&:focus{background-color:rgba(0,0,0,0.05);}&[aria-current=\\\"page\\\"]{color:yellow;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFNkIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXdiZXJ0L0Rlc2t0b3Avc3RhcnRlci10aGVtZS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SWNvbnM+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90aGVyZWFsbWF0dGJlcnQvXCI+XG4gICAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9JY29ucz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNjYmZjO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHllbGxvdzsgKi9cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MenuModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanM/ZTNlOSJdLCJuYW1lcyI6WyJNZW51TW9kYWwiLCJzdGF0ZSIsIm1lbnUiLCJ0aGVtZSIsImlzVGhlcmVMaW5rcyIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJsaW5rIiwicm91dGVyIiwidW5kZWZpbmVkIiwiTWVudU92ZXJsYXkiLCJNZW51Q29udGVudCIsIkljb25zIiwiTWVudUxpbmsiLCJMaW5rIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUtBLEdBQU1BLFVBQVMsQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQy9CLEdBQU0sQ0FBRUMsSUFBRixFQUFXRCxLQUFLLENBQUNFLEtBQXZCLENBQ0EsR0FBTUMsYUFBWSxDQUFHRixJQUFJLEVBQUksSUFBUixFQUFnQkEsSUFBSSxDQUFDRyxNQUFMLENBQWMsQ0FBbkQsQ0FFQSxNQUNFLHNIQUNFLDBEQUFDLFdBQUQsTUFERixDQUVFLDBEQUFDLFdBQUQsRUFBYSxFQUFFLENBQUMsS0FBaEIsRUFDR0QsWUFBWSxFQUNYRixJQUFJLENBQUNJLEdBQUwsQ0FBUyxhQUFDLENBQUNDLElBQUQsQ0FBT0MsSUFBUCxDQUFELGFBQ1AsMkRBQUMsUUFBRCxFQUNFLEdBQUcsQ0FBRUQsSUFEUCxDQUVFLElBQUksQ0FBRUMsSUFGUixDQUdFLGVBQWNQLEtBQUssQ0FBQ1EsTUFBTixDQUFhRCxJQUFiLEdBQXNCQSxJQUF0QixDQUE2QixNQUE3QixDQUFzQ0UsU0FIdEQsRUFLR0gsSUFMSCxDQURPLEVBQVQsQ0FGSixDQVlFLHFFQUNFLDBEQUFDLEtBQUQsTUFDRSwrREFBRyxJQUFJLENBQUMsc0NBQVIsRUFDRSwwREFBQyx3REFBRCxNQURGLENBREYsQ0FJRSwrREFBRyxJQUFJLENBQUMsNENBQVIsRUFDRSwwREFBQywwREFBRCxNQURGLENBSkYsQ0FERixDQVpGLENBRkYsQ0FERixDQTRCRCxDQWhDRCxDQWtDQSxHQUFNSSxZQUFXLGs0R0FBakIsQ0FpQkEsR0FBTUMsWUFBVywwdUdBQWpCLENBSUEsR0FBTUMsTUFBSyxpMUdBQVgsQ0FlQSxHQUFNQyxTQUFRLENBQUcsa0ZBQU9DLGlFQUFQLHNDQUFILG96R0FBZCxDQW9CZUMsdUhBQU8sQ0FBQ2hCLFNBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUxpbms+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SWNvbnM+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90aGVyZWFsbWF0dGJlcnQvXCI+XG4gICAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZXJlYWxtYXR0YmVydC9cIj5cbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9JY29ucz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNjYmZjO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAmIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBJY29ucyA9IHN0eWxlZC5uYXZgXG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHllbGxvdzsgKi9cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/menu-modal.js\n");

/***/ })

})