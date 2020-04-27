webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Theme.js":
/*!*****************************!*\
  !*** ./components/Theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Theme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/wajari/dev/blog-next/components/Theme.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Theme() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var tema = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (s) {
    return s.tema;
  });

  var setTema = function setTema(tema) {
    return dispatch({
      type: "tema",
      tema: tema
    });
  };

  var handleClick = function handleClick() {
    return setTema(tema === "dark" ? "light" : "dark");
  };

  return __jsx("div", {
    className: "theme",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Cambiar tema: ", tema));
}

/***/ })

})
//# sourceMappingURL=_app.js.ddc5cc26b3626f70a4cf.hot-update.js.map