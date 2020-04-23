webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostListing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostListing */ "./components/PostListing.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var meta = {
  title: "Blog <dev> Wajari Velásquez",
  tags: ["Next.js", "MDX"],
  layout: "blog-post-list",
  publishDate: "2020-04-16",
  modifiedDate: false,
  seoDescription: "Listado de entradas del blog técnico de Wajari Velásquez. Construido con cariño en Next.JS, React y markdown"
};
function Blog(props) {
  var _this = this;

  var blogPosts = props.allData.filter(function (content) {
    return content.type == "post";
  });
  return __jsx("div", {
    className: "blog-post-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: "Blog <dev> Wajari Vel\xE1squez",
    description: "Listado de entradas del blog t\xE9cnico de Wajari Vel\xE1squez. Construido con cari\xF1o en Next.JS, React y markdown",
    canonical: "https://wajari.dev/blog/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, meta.title), blogPosts.map(function (post, index) {
    return __jsx(_components_PostListing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      post: post,
      indes: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    });
  }));
}
Blog.defaultProps = {
  allData: []
};

/***/ })

})
//# sourceMappingURL=blog.js.90d3305208694d27d5cb.hot-update.js.map