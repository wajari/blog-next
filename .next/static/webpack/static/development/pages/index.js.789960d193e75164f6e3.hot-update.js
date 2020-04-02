webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tags.js":
/*!****************************!*\
  !*** ./components/Tags.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wajari/dev/blog-next/components/Tags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function tagMaker(tagList) {
  var _this = this;

  var alphabetizedTags = tagList.sort();
  return __jsx("div", {
    className: "jsx-2989970538" + " " + "tag-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "jsx-2989970538",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Tags: "), alphabetizedTags.map(function (tag) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: "".concat(tag, "-link"),
      href: "/search?q=".concat(tag),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("a", {
      key: tag,
      className: "jsx-2989970538" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, tag));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2989970538",
    __self: this
  }, ".tag-container.jsx-2989970538{margin-top:10px;}a.tag.jsx-2989970538{margin-left:10px;background-color:#eee;font-size:16px;padding:3px 9px;border:2px solid #ddd;border-radius:17px;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}a.tag.jsx-2989970538:first-of-type{margin-left:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L2NvbXBvbmVudHMvVGFncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHMkIsQUFHQyxBQVlELGdCQWRsQixBQWVBLENBWndCLHNCQUVQLGVBQ0MsZ0JBQ00sc0JBQ0gsbUJBQ0osZUFDTSxrREFDdkIiLCJmaWxlIjoiL2hvbWUvd2FqYXJpL2Rldi9ibG9nLW5leHQvY29tcG9uZW50cy9UYWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiB0YWdNYWtlcih0YWdMaXN0KSB7XG4gIGxldCBhbHBoYWJldGl6ZWRUYWdzID0gdGFnTGlzdC5zb3J0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0YWctY29udGFpbmVyYH0+XG4gICAgICA8c3Bhbj5UYWdzOiA8L3NwYW4+XG4gICAgICB7YWxwaGFiZXRpemVkVGFncy5tYXAodGFnID0+IChcbiAgICAgICAgPExpbmsga2V5PXtgJHt0YWd9LWxpbmtgfSBocmVmPXtgL3NlYXJjaD9xPSR7dGFnfWB9PlxuICAgICAgICAgIDxhIGtleT17dGFnfSBjbGFzc05hbWU9XCJ0YWdcIj5cbiAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhZy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYS50YWcge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDlweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEudGFnOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgVGFnQmxvY2sgPSBwcm9wcyA9PiB7XG4gIGlmICghcHJvcHMudGFncyB8fCAhQXJyYXkuaXNBcnJheShwcm9wcy50YWdzKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiB0YWdNYWtlcihwcm9wcy50YWdzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0Jsb2NrO1xuIl19 */\n/*@ sourceURL=/home/wajari/dev/blog-next/components/Tags.js */"));
}

var TagBlock = function TagBlock(props) {
  if (!props.tags || !Array.isArray(props.tags)) return null;
  return tagMaker(props.tags);
};

/* harmony default export */ __webpack_exports__["default"] = (TagBlock);

/***/ })

})
//# sourceMappingURL=index.js.789960d193e75164f6e3.hot-update.js.map