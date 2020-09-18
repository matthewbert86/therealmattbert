webpackHotUpdate("starter-theme",{

/***/ "./packages/mars-theme/src/components/featured-media.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-media.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedMedia=(_ref)=>{var{state,id}=_ref;var media=state.source.attachment[id];if(!media)return null;var srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(\"\".concat(current.join(\" \"),\"w\").concat(index!==array.length-1?\", \":\"\")),\"\")||null;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledImage,{alt:media.title.rendered,src:media.source_url,srcSet:srcset}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedMedia));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1veh4wk0\",label:\"Container\"})( false?undefined:{name:\"1n64sab\",styles:\"margin-top:16px;margin-bottom:50px;height:300px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1tZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzRCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1tZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZE1lZGlhID0gKHsgc3RhdGUsIGlkIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcChpdGVtID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgYWx0PXttZWRpYS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgc3JjPXttZWRpYS5zb3VyY2VfdXJsfVxuICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNzAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_frontity_components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"e1veh4wk1\",label:\"StyledImage\"})( false?undefined:{name:\"16l2bnf\",styles:\"display:block;height:100%;width:70%;object-fit:cover;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1tZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2lDIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL3N0YXJ0ZXItdGhlbWUvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1tZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZE1lZGlhID0gKHsgc3RhdGUsIGlkIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcChpdGVtID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgYWx0PXttZWRpYS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgc3JjPXttZWRpYS5zb3VyY2VfdXJsfVxuICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNzAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzPzdmNjAiXSwibmFtZXMiOlsiRmVhdHVyZWRNZWRpYSIsInN0YXRlIiwiaWQiLCJtZWRpYSIsInNvdXJjZSIsImF0dGFjaG1lbnQiLCJzcmNzZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJtYXAiLCJpdGVtIiwic291cmNlX3VybCIsIndpZHRoIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyZW50IiwiaW5kZXgiLCJhcnJheSIsImNvbmNhdCIsImpvaW4iLCJsZW5ndGgiLCJ0aXRsZSIsInJlbmRlcmVkIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIlN0eWxlZEltYWdlIiwiSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBLEdBQU1BLGNBQWEsQ0FBRyxRQUFtQixJQUFsQixDQUFFQyxLQUFGLENBQVNDLEVBQVQsQ0FBa0IsTUFDdkMsR0FBTUMsTUFBSyxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsVUFBYixDQUF3QkgsRUFBeEIsQ0FBZCxDQUVBLEdBQUksQ0FBQ0MsS0FBTCxDQUFZLE1BQU8sS0FBUCxDQUVaLEdBQU1HLE9BQU0sQ0FDVkMsTUFBTSxDQUFDQyxNQUFQLENBQWNMLEtBQUssQ0FBQ00sYUFBTixDQUFvQkMsS0FBbEMsQ0FDRTtBQURGLENBRUdDLEdBRkgsQ0FFT0MsSUFBSSxFQUFJLENBQUNBLElBQUksQ0FBQ0MsVUFBTixDQUFrQkQsSUFBSSxDQUFDRSxLQUF2QixDQUZmLENBR0U7QUFIRixDQUlHQyxNQUpILENBS0ksQ0FBQ0MsS0FBRCxDQUFRQyxPQUFSLENBQWlCQyxLQUFqQixDQUF3QkMsS0FBeEIsR0FDRUgsS0FBSyxDQUFDSSxNQUFOLFdBQ0tILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLEdBQWIsQ0FETCxhQUMwQkgsS0FBSyxHQUFLQyxLQUFLLENBQUNHLE1BQU4sQ0FBZSxDQUF6QixDQUE2QixJQUE3QixDQUFvQyxFQUQ5RCxFQU5OLENBU0ksRUFUSixHQVVPLElBWFQsQ0FhQSxNQUNFLDJEQUFDLFNBQUQsTUFDRSwwREFBQyxXQUFELEVBQ0UsR0FBRyxDQUFFbkIsS0FBSyxDQUFDb0IsS0FBTixDQUFZQyxRQURuQixDQUVFLEdBQUcsQ0FBRXJCLEtBQUssQ0FBQ1UsVUFGYixDQUdFLE1BQU0sQ0FBRVAsTUFIVixFQURGLENBREYsQ0FTRCxDQTNCRCxDQTZCZW1CLHVIQUFPLENBQUN6QixhQUFELENBQXRCLEVBRUEsR0FBTTBCLFVBQVMsb3FFQUFmLENBTUEsR0FBTUMsWUFBVyxDQUFHLGtGQUFPQyxrRUFBUCwwQ0FBSCxzakVBQWpCIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1tZWRpYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZE1lZGlhID0gKHsgc3RhdGUsIGlkIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcChpdGVtID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgYWx0PXttZWRpYS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgc3JjPXttZWRpYS5zb3VyY2VfdXJsfVxuICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNzAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-media.js\n");

/***/ })

})