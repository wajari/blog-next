webpackHotUpdate("static/development/pages/_app.js",{

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
var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var meta = {
  title: "Blog <dev> Wajari Velásquez",
  tags: ["Next.js", "MDX"],
  layout: "blog-post-list",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "All of your blog posts are listed on this page, unless a post has the meta property `exclude: true`."
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
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
        lineNumber: 20,
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
//# sourceMappingURL=_app.js.abe6fe5d73aea1f35ef2.hot-update.js.map