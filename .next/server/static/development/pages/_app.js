module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code-snippets/CodeBlocks.js":
/*!*************************************!*\
  !*** ./code-snippets/CodeBlocks.js ***!
  \*************************************/
/*! exports provided: CodeBlockJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlockJS", function() { return CodeBlockJS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter_prism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter/prism */ "react-syntax-highlighter/prism");
/* harmony import */ var react_syntax_highlighter_prism__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_prism__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/styles/prism */ "react-syntax-highlighter/styles/prism");
/* harmony import */ var react_syntax_highlighter_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_styles_prism__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wajari/dev/blog-next/code-snippets/CodeBlocks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CodeBlockJS = props => {
  return __jsx(react_syntax_highlighter_prism__WEBPACK_IMPORTED_MODULE_1___default.a, {
    language: "javascript",
    style: react_syntax_highlighter_styles_prism__WEBPACK_IMPORTED_MODULE_2__["duotonelight"],
    showLineNumbers: true,
    customStyle: {
      fontSize: 14
    },
    codeTagProps: {
      fontSize: 14
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.code);
};

/***/ }),

/***/ "./code-snippets/post-one/index.js":
/*!*****************************************!*\
  !*** ./code-snippets/post-one/index.js ***!
  \*****************************************/
/*! exports provided: EscapedBackticksCode, DemoCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapedBackticksCode", function() { return EscapedBackticksCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCode", function() { return DemoCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CodeBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CodeBlocks */ "./code-snippets/CodeBlocks.js");
var _jsxFileName = "/home/wajari/dev/blog-next/code-snippets/post-one/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // (1) If you need to use backticks within the template string below,
// you must escapte them with a backslash like so: \` .
// (2) If you're using ${} to interpolate variables, you also must
// escape the dollar sign like so: \${varName}.

const escapedBackticksCodeString = `function sayHello(name) {
  return \`Hello \${ name }\`;
}`;
const EscapedBackticksCode = () => {
  return __jsx(_CodeBlocks__WEBPACK_IMPORTED_MODULE_1__["CodeBlockJS"], {
    code: escapedBackticksCodeString,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  });
};
const codeString = `import React, { Component } from 'react';   
import FormContainer from './containers/FormContainer';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>React.js Controlled Form Components</h3>
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;`;
const DemoCode = () => {
  return __jsx(_CodeBlocks__WEBPACK_IMPORTED_MODULE_1__["CodeBlockJS"], {
    code: codeString,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  });
};

/***/ }),

/***/ "./components/BlogMeta.js":
/*!********************************!*\
  !*** ./components/BlogMeta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogMeta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Tags */ "./components/Tags.js");
/* harmony import */ var _components_ReadingProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ReadingProgress */ "./components/ReadingProgress.js");
/* harmony import */ var _utils_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/seo */ "./utils/seo.js");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/formatters */ "./utils/formatters.js");
var _jsxFileName = "/home/wajari/dev/blog-next/components/BlogMeta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class BlogMeta extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderProgressBar", postData => {
      return postData.hideProgressBar ? null : __jsx(_components_ReadingProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 50
        }
      });
    });
  }

  render() {
    const {
      postData
    } = this.props.data;
    const {
      formattedPublishDate
    } = postData;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, this.renderProgressBar(postData), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, postData.title), __jsx("small", {
      className: "post-date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_4__["formatDisplayDate"])(formattedPublishDate)), __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_1__["default"], {
      tags: postData.tags,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }), Object(_utils_seo__WEBPACK_IMPORTED_MODULE_3__["articleSEO"])(postData));
  }

}

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wajari/dev/blog-next/components/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer() {
  return __jsx("div", {
    className: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, new Date().getFullYear(), " ", _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].author, " |", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://creativecommons.org/licenses/by-sa/4.0/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    title: "CC BY-SA",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "CC BY-SA 4.0")));
}

/***/ }),

/***/ "./components/LinkAnchor.js":
/*!**********************************!*\
  !*** ./components/LinkAnchor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkAnchor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function LinkAnchor(props) {
  const nodeTypes = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "li", "span", "div", "a"];

  if (!nodeTypes.includes(props.element)) {
    throw new Error(`HTML tag ${props.element} is not in the list of valid tags. Add it to the list or use another tag.`);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.element, {
    id: props.id
  }, props.text);
}

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: NavigationItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItem", function() { return NavigationItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/wajari/dev/blog-next/components/Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const NavigationItem = props => __jsx("li", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3073670162", [_config_config_yml__WEBPACK_IMPORTED_MODULE_4__["config"].css.lightGray]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: props.data.link,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("a", {
  onClick: props.handleToggleNav,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3073670162", [_config_config_yml__WEBPACK_IMPORTED_MODULE_4__["config"].css.lightGray]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, props.data.text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3073670162",
  dynamic: [_config_config_yml__WEBPACK_IMPORTED_MODULE_4__["config"].css.lightGray],
  __self: undefined
}, `li.__jsx-style-dynamic-selector{list-style-type:none;height:40px;min-width:100%;border-bottom:1px solid ${_config_config_yml__WEBPACK_IMPORTED_MODULE_4__["config"].css.lightGray};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;font-size:20px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVb0IsQUFHc0MsQUFRQSxxQkFQVCxZQUNHLGVBQ3NDLEVBTXRDLGVBQ25CLG9DQU5pQiwwRUFDTSw2RkFDdkIiLCJmaWxlIjoiL2hvbWUvd2FqYXJpL2Rldi9ibG9nLW5leHQvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRmFUaW1lcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWcueW1sXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uSXRlbSA9IHByb3BzID0+IChcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmRhdGEubGlua30+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtwcm9wcy5oYW5kbGVUb2dnbGVOYXZ9Pntwcm9wcy5kYXRhLnRleHR9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb25maWcuY3NzLmxpZ2h0R3JheX07XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHByb3BzID0+IChcbiAgICA8YnV0dG9uXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2UgbmF2aWdhdGlvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImljb24tYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17cHJvcHMuY2xvc2V9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgPEZhVGltZXMgc2l6ZT17MjB9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7IG5hdk9wZW46IGZhbHNlIH07XG5cbiAgICBoYW5kbGVUb2dnbGVOYXYgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTmF2aWdhdGlvbigpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIHRoZXJlIGlzIGEgY2xpY2sgaGFuZGxlciBvbiBkaXYuYmFja2Ryb3AgdG8gY2xvc2UgdGhlXG4gICAgICAgIC8vIG5hdiBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgbmF2aWdhdGlvbiBjb21wb25lbnRcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wZW4gPyBgbmF2aWdhdGlvbmAgOiBgbmF2aWdhdGlvbiBjbG9zZWRgXG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlTmF2fSBjbGFzc05hbWU9XCJiYWNrZHJvcFwiIC8+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnV0dG9uLWxpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gY2xvc2U9e3RoaXMuaGFuZGxlVG9nZ2xlTmF2fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLm5hdmlnYXRpb24ubWFwKG5hdkRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtuYXZEYXRhLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e25hdkRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRvZ2dsZU5hdj17dGhpcy5oYW5kbGVUb2dnbGVOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA0OyAvKiB0aGUgaGFtYnVyZ2VyIG1lbnUgaXMgei1pbmRleDogMyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi5jbG9zZWQgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTQ1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLWxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYmFja2Ryb3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24uY2xvc2VkIC5iYWNrZHJvcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0= */
/*@ sourceURL=/home/wajari/dev/blog-next/components/Navigation.js */`));

const CloseButton = props => __jsx("button", {
  role: "button",
  "aria-label": "close navigation",
  onClick: props.close,
  type: "button",
  className: "jsx-1220532322" + " " + "icon-button",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTimes"], {
  size: 20,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1220532322",
  __self: undefined
}, ".icon-button.jsx-1220532322{height:30px;position:absolute;right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBRzZCLFlBQ00sa0JBQ1YsUUFDWiIsImZpbGUiOiIvaG9tZS93YWphcmkvZGV2L2Jsb2ctbmV4dC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBGYVRpbWVzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZy55bWxcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25JdGVtID0gcHJvcHMgPT4gKFxuICAgIDxsaT5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvcHMuZGF0YS5saW5rfT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVRvZ2dsZU5hdn0+e3Byb3BzLmRhdGEudGV4dH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbmZpZy5jc3MubGlnaHRHcmF5fTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbik7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gcHJvcHMgPT4gKFxuICAgIDxidXR0b25cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5jbG9zZX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICA8RmFUaW1lcyBzaXplPXsyMH0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmljb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHsgbmF2T3BlbjogZmFsc2UgfTtcblxuICAgIGhhbmRsZVRvZ2dsZU5hdiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVOYXZpZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gdGhlcmUgaXMgYSBjbGljayBoYW5kbGVyIG9uIGRpdi5iYWNrZHJvcCB0byBjbG9zZSB0aGVcbiAgICAgICAgLy8gbmF2IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBuYXZpZ2F0aW9uIGNvbXBvbmVudFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3BlbiA/IGBuYXZpZ2F0aW9uYCA6IGBuYXZpZ2F0aW9uIGNsb3NlZGBcbiAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGVOYXZ9IGNsYXNzTmFtZT1cImJhY2tkcm9wXCIgLz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidXR0b24tbGlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBjbG9zZT17dGhpcy5oYW5kbGVUb2dnbGVOYXZ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maWcubmF2aWdhdGlvbi5tYXAobmF2RGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25hdkRhdGEubGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17bmF2RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9nZ2xlTmF2PXt0aGlzLmhhbmRsZVRvZ2dsZU5hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDQ7IC8qIHRoZSBoYW1idXJnZXIgbWVudSBpcyB6LWluZGV4OiAzICovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLmNsb3NlZCB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5iYWNrZHJvcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi5jbG9zZWQgLmJhY2tkcm9wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/wajari/dev/blog-next/components/Navigation.js */"));

class Navigation extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      navOpen: false
    });

    _defineProperty(this, "handleToggleNav", () => {
      this.props.toggleNavigation();
    });
  }

  render() {
    // there is a click handler on div.backdrop to close the
    // nav if the user clicks outside of the navigation component
    return __jsx("div", {
      className: "jsx-2208482040" + " " + ((this.props.open ? `navigation` : `navigation closed`) || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx("div", {
      onClick: this.handleToggleNav,
      className: "jsx-2208482040" + " " + "backdrop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), __jsx("ul", {
      className: "jsx-2208482040",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: "jsx-2208482040" + " " + "button-li",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx(CloseButton, {
      close: this.handleToggleNav,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    })), _config_config_yml__WEBPACK_IMPORTED_MODULE_4__["config"].navigation.map(navData => {
      return __jsx(NavigationItem, {
        key: navData.link,
        data: navData,
        handleToggleNav: this.handleToggleNav,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 29
        }
      });
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2208482040",
      __self: this
    }, ".navigation.jsx-2208482040{position:fixed;z-index:4;}.navigation.jsx-2208482040 ul.jsx-2208482040{height:100vh;width:380px;background-color:#fff;box-shadow:0px 0px 5px 5px rgba(0,0,0,0.2);border-right:1px solid rgba(0,0,0,0.2);position:absolute;top:0;left:0;margin:0;padding:10px;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}.navigation.closed.jsx-2208482040 ul.jsx-2208482040{left:-450px;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}.button-li.jsx-2208482040{height:0;position:relative;}.backdrop.jsx-2208482040{position:absolute;width:100vw;height:100vh;top:0;left:0;background-color:rgba(0,0,0,0.2);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;}.navigation.closed.jsx-2208482040 .backdrop.jsx-2208482040{position:absolute;width:0;height:0;top:0;background-color:rgba(0,0,0,0);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRTRCLEFBR3dDLEFBSUYsQUFhRCxBQUlILEFBSVMsQUFTQSxTQVpBLEdBSlUsQ0FiaEIsRUFKRixHQXlCRSxBQVNKLE9BakNaLEFBSTBCLENBOEJiLENBYmIsR0FJaUIsS0FVUCxNQUM0QixFQVY1QixJQXJCd0MsRUFzQnZDLE9BQzZCLGdCQVNILElBcEJyQyxhQVlxQyxDQXZCUyx1Q0FDeEIsaUJBK0J0QixDQTlCVSxNQUNDLE9BQ0UsR0FvQmIsTUFuQmlCLGFBQ2UsZ0VBQ2hDIiwiZmlsZSI6Ii9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZhVGltZXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnLnltbFwiO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkl0ZW0gPSBwcm9wcyA9PiAoXG4gICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPXtwcm9wcy5kYXRhLmxpbmt9PlxuICAgICAgICAgICAgPGEgb25DbGljaz17cHJvcHMuaGFuZGxlVG9nZ2xlTmF2fT57cHJvcHMuZGF0YS50ZXh0fTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29uZmlnLmNzcy5saWdodEdyYXl9O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuKTtcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBwcm9wcyA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlIG5hdmlnYXRpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxGYVRpbWVzIHNpemU9ezIwfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaWNvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0geyBuYXZPcGVuOiBmYWxzZSB9O1xuXG4gICAgaGFuZGxlVG9nZ2xlTmF2ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU5hdmlnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyB0aGVyZSBpcyBhIGNsaWNrIGhhbmRsZXIgb24gZGl2LmJhY2tkcm9wIHRvIGNsb3NlIHRoZVxuICAgICAgICAvLyBuYXYgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIG5hdmlnYXRpb24gY29tcG9uZW50XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vcGVuID8gYG5hdmlnYXRpb25gIDogYG5hdmlnYXRpb24gY2xvc2VkYFxuICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZU5hdn0gY2xhc3NOYW1lPVwiYmFja2Ryb3BcIiAvPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ1dHRvbi1saVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIGNsb3NlPXt0aGlzLmhhbmRsZVRvZ2dsZU5hdn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5uYXZpZ2F0aW9uLm1hcChuYXZEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmF2RGF0YS5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtuYXZEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb2dnbGVOYXY9e3RoaXMuaGFuZGxlVG9nZ2xlTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNDsgLyogdGhlIGhhbWJ1cmdlciBtZW51IGlzIHotaW5kZXg6IDMgKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbiB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24uY2xvc2VkIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00NTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbi1saSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJhY2tkcm9wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLmNsb3NlZCAuYmFja2Ryb3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/home/wajari/dev/blog-next/components/Navigation.js */"));
  }

}

/***/ }),

/***/ "./components/PostListing.js":
/*!***********************************!*\
  !*** ./components/PostListing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostListing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tags */ "./components/Tags.js");
var _jsxFileName = "/home/wajari/dev/blog-next/components/PostListing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PostListing(props) {
  const {
    post,
    index
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: `post-list-${index}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h2", {
    key: `${post.name}-headline`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/blog/${post.name}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, post.title))), __jsx(_Tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tags: post.tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/ReadingProgress.js":
/*!***************************************!*\
  !*** ./components/ReadingProgress.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReadingProgress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrollprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scrollprogress */ "scrollprogress");
/* harmony import */ var scrollprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scrollprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wajari/dev/blog-next/components/ReadingProgress.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ReadingProgress extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      progress: 0
    });
  }

  componentDidMount() {
    this.progressObserver = new scrollprogress__WEBPACK_IMPORTED_MODULE_1___default.a((x, y) => {
      this.setState({
        progress: y * 100
      });
    });
  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }

  render() {
    const style = {
      backgroundColor: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].css.primaryColor,
      height: "5px",
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      width: `${this.state.progress}%`
    };
    return __jsx("div", {
      className: "progress-bar",
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }
    });
  }

}

/***/ }),

/***/ "./components/SmoothLink.js":
/*!**********************************!*\
  !*** ./components/SmoothLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmoothLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/wajari/dev/blog-next/components/SmoothLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SmoothLink(props) {
  return __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.target,
    offset: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.linkText);
}

/***/ }),

/***/ "./components/Tags.js":
/*!****************************!*\
  !*** ./components/Tags.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wajari/dev/blog-next/components/Tags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function tagMaker(tagList) {
  let alphabetizedTags = tagList.sort();
  return __jsx("div", {
    className: "jsx-3205202442" + " " + `tag-container`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "jsx-3205202442",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Tags: "), alphabetizedTags.map(tag => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: `${tag}-link`,
    href: `/search?q=${tag}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("a", {
    key: tag,
    className: "jsx-3205202442" + " " + "tag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, tag))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3205202442",
    __self: this
  }, ".tag-container.jsx-3205202442{margin-top:10px;}a.tag.jsx-3205202442{font-family:sans-serif;margin-left:10px;background-color:#eee;font-size:16px;padding:3px 9px;border:2px solid #ddd;border-radius:17px;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}a.tag.jsx-3205202442:first-of-type{margin-left:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L2NvbXBvbmVudHMvVGFncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHMkIsQUFHTyxBQVlQLGdCQWRsQixBQWVBLE9BWm1CLGlCQUNLLHNCQUNQLGVBQ0MsZ0JBQ00sc0JBQ0gsbUJBQ0osZUFDTSxrREFDdkIiLCJmaWxlIjoiL2hvbWUvd2FqYXJpL2Rldi9ibG9nLW5leHQvY29tcG9uZW50cy9UYWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiB0YWdNYWtlcih0YWdMaXN0KSB7XG4gIGxldCBhbHBoYWJldGl6ZWRUYWdzID0gdGFnTGlzdC5zb3J0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0YWctY29udGFpbmVyYH0+XG4gICAgICA8c3Bhbj5UYWdzOiA8L3NwYW4+XG4gICAgICB7YWxwaGFiZXRpemVkVGFncy5tYXAodGFnID0+IChcbiAgICAgICAgPExpbmsga2V5PXtgJHt0YWd9LWxpbmtgfSBocmVmPXtgL3NlYXJjaD9xPSR7dGFnfWB9PlxuICAgICAgICAgIDxhIGtleT17dGFnfSBjbGFzc05hbWU9XCJ0YWdcIj5cbiAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhZy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYS50YWcge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDNweCA5cHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBhLnRhZzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFRhZ0Jsb2NrID0gcHJvcHMgPT4ge1xuICBpZiAoIXByb3BzLnRhZ3MgfHwgIUFycmF5LmlzQXJyYXkocHJvcHMudGFncykpIHJldHVybiBudWxsO1xuICByZXR1cm4gdGFnTWFrZXIocHJvcHMudGFncyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWdCbG9jaztcbiJdfQ== */\n/*@ sourceURL=/home/wajari/dev/blog-next/components/Tags.js */"));
}

const TagBlock = props => {
  if (!props.tags || !Array.isArray(props.tags)) return null;
  return tagMaker(props.tags);
};

/* harmony default export */ __webpack_exports__["default"] = (TagBlock);

/***/ }),

/***/ "./components/layouts/BlogLayout.js":
/*!******************************************!*\
  !*** ./components/layouts/BlogLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/wajari/dev/blog-next/components/layouts/BlogLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("div", {
  className: "jsx-509494601" + " " + "blog-layout",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "509494601",
  __self: undefined
}, ".jsx-509494601{margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L2NvbXBvbmVudHMvbGF5b3V0cy9CbG9nTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUVtQixZQUNkIiwiZmlsZSI6Ii9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L2NvbXBvbmVudHMvbGF5b3V0cy9CbG9nTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1sYXlvdXRcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/home/wajari/dev/blog-next/components/layouts/BlogLayout.js */")));

/***/ }),

/***/ "./components/layouts/SearchLayout.js":
/*!********************************************!*\
  !*** ./components/layouts/SearchLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/wajari/dev/blog-next/components/layouts/SearchLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("div", {
  className: "search-layout",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, children));

/***/ }),

/***/ "./config/config.yml":
/*!***************************!*\
  !*** ./config/config.yml ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"config":({"author":"Wajari Velásquez Fernández", "siteName":"Blog de Wajari", "siteDescription":"Blog especializado en desarrollo web y SEO", "defaultPageTitle":"Wajari Dev", "blogTitle":"Blog", "baseUrl":"https://wajari.dev", "websiteLogo":"https://cdn.auth0.com/blog/logos/nextjs-logo.png", "twitterHandle":"@your twitter handle", "twitterCardType":"summary", "navigation":[({"text":"Home", "link":"/"}), ({"text":"Blog", "link":"/blog"}), ({"text":"About", "link":"/about"})], "css":({"primaryColor":"#536DFE", "accentColor":"#455A64", "lightGray":"#eeeeee", "backgroundColor":"#ffffff", "black":"#333"})})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/constants.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PHASE_EXPORT = 'phase-export';
exports.PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PAGES_MANIFEST = 'pages-manifest.json';
exports.BUILD_MANIFEST = 'build-manifest.json';
exports.EXPORT_MARKER = 'export-marker.json';
exports.EXPORT_DETAIL = 'export-detail.json';
exports.PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.ROUTES_MANIFEST = 'routes-manifest.json';
exports.REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.SERVER_DIRECTORY = 'server';
exports.SERVERLESS_DIRECTORY = 'serverless';
exports.CONFIG_FILE = 'next.config.js';
exports.BUILD_ID_FILE = 'BUILD_ID';
exports.BLOCKED_PAGES = ['/_document', '/_app'];
exports.CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__';
exports.CLIENT_STATIC_FILES_RUNTIME_PATH = `${exports.CLIENT_STATIC_FILES_PATH}/${exports.CLIENT_STATIC_FILES_RUNTIME}`; // static/runtime/main.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`; // static/runtime/polyfills.js

exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/polyfills.js`; // matches static/<buildid>/pages/<page>.js

exports.IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/; // matches static/<buildid>/pages/:page*.js

exports.ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;
exports.SERVERLESS_ROUTE_NAME_REGEX = /^pages[/\\](.*)\.js$/;
exports.TEMPORARY_REDIRECT_STATUS = 307;
exports.PERMANENT_REDIRECT_STATUS = 308;
exports.STATIC_PROPS_ID = '__N_SSG';
exports.SERVER_PROPS_ID = '__N_SSP';

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/document-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/document-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.DocumentContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ../lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");
function isBlockedPage(pathname) {
    return constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1;
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/&amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;
function collectEnv(page, env, pageEnv) {
    const missingEnvKeys = new Set();
    const collected = pageEnv
        ? pageEnv.reduce((prev, key) => {
            if (typeof env[key] !== 'undefined') {
                prev[key] = env[key];
            }
            else {
                missingEnvKeys.add(key);
            }
            return prev;
        }, {})
        : {};
    if (missingEnvKeys.size > 0) {
        console.warn(`Missing env value${missingEnvKeys.size === 1 ? '' : 's'}: ${[
            ...missingEnvKeys,
        ].join(', ')} for ${page}.\n` +
            `Make sure to supply this value in either your .env file or in your environment.\n` +
            `See here for more info: https://err.sh/next.js/missing-env-value`);
    }
    return collected;
}
exports.collectEnv = collectEnv;


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "./node_modules/next/dist/next-server/lib/document-context.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "./node_modules/next/dist/next-server/server/utils.js");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => _react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return _react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        const isReactHelmet = child && child.props && child.props['data-react-helmet'];

        if (child && child.type === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => _react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, this.getPolyfillScripts(), page !== '/_error' && pageScript, appScript, staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? `/index.${buildId}.js` : '/index.js';
  }

  return buildId ? `${page}.${buildId}.js` : `${page}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages sync recursive ^\\.\\/.*$":
/*!*****************************!*\
  !*** ./pages sync ^\.\/.*$ ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_app": "./pages/_app.js",
	"./_app.js": "./pages/_app.js",
	"./_document": "./pages/_document.js",
	"./_document.js": "./pages/_document.js",
	"./about": "./pages/about.js",
	"./about.js": "./pages/about.js",
	"./blog": "./pages/blog.js",
	"./blog.js": "./pages/blog.js",
	"./blog/blog-react.mdx": "./pages/blog/blog-react.mdx",
	"./blog/post-four-link-on-twitter.mdx": "./pages/blog/post-four-link-on-twitter.mdx",
	"./blog/post-one-code-block-demo.mdx": "./pages/blog/post-one-code-block-demo.mdx",
	"./blog/post-three-smooth-scroll-and-reading-progress-bar.mdx": "./pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx",
	"./blog/post-two-image-demo.mdx": "./pages/blog/post-two-image-demo.mdx",
	"./index.mdx": "./pages/index.mdx",
	"./search": "./pages/search.js",
	"./search.js": "./pages/search.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _utils_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/seo */ "./utils/seo.js");
/* harmony import */ var _utils_get_post_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/get-post-data */ "./utils/get-post-data.js");
/* harmony import */ var _utils_blog_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/blog-engine */ "./utils/blog-engine.js");
/* harmony import */ var _utils_render_app_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/render-app-layout */ "./utils/render-app-layout.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _utils_check_for_sw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/check-for-sw */ "./utils/check-for-sw.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles */ "./styles/index.js");
var _jsxFileName = "/home/wajari/dev/blog-next/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleToggleNavigation", () => {
      this.setState({
        navOpen: !this.state.navOpen
      });
    });

    this.state = {
      navOpen: false,
      postData: props.postData
    };
  }

  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const [allData, postData] = await Promise.all([Object(_utils_blog_engine__WEBPACK_IMPORTED_MODULE_8__["default"])(), Object(_utils_get_post_data__WEBPACK_IMPORTED_MODULE_7__["default"])(router)]).catch(error => console.error("Error in _app.js getInitialProps()", error));
    const propsObj = Object.assign({}, _objectSpread({
      postData,
      allData
    }, pageProps));
    return _objectSpread({}, propsObj);
  }

  async componentDidMount() {
    await Object(_utils_check_for_sw__WEBPACK_IMPORTED_MODULE_11__["checkForSW"])();
  }

  async componentDidUpdate(prevProps, prevState) {
    const postData = await Object(_utils_get_post_data__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props.router);

    if (!prevState.postData || postData.name !== this.state.postData.name) {
      this.setState({
        postData
      });
    }
  }

  render() {
    const {
      postData
    } = this.state;
    const seoData = Object(_utils_seo__WEBPACK_IMPORTED_MODULE_6__["createSEOConfig"])(postData);

    if (postData) {
      const tagsString = postData.tags.join(", ");
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, __jsx("meta", {
        name: "keywords",
        content: tagsString,
        className: "jsx-2177872622",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__["NextSeo"], {
        config: seoData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        open: this.state.navOpen,
        toggleNavigation: this.handleToggleNavigation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }), __jsx("button", {
        type: "button",
        role: "button",
        "aria-label": "open navigation",
        onClick: this.handleToggleNavigation,
        className: "jsx-2177872622" + " " + "icon-button hamburger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaBars"], {
        size: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      })), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, Object(_utils_render_app_layout__WEBPACK_IMPORTED_MODULE_9__["renderLayout"])(this.props, this.state)), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_13__["globalStyles"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_13__["globalStyles"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2177872622",
        __self: this
      }, ".icon-button.jsx-2177872622{margin:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0dzQixBQUcyQixZQUNkIiwiZmlsZSI6Ii9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY3JlYXRlU0VPQ29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL3Nlb1wiO1xuaW1wb3J0IGdldFBvc3REYXRhIGZyb20gXCIuLi91dGlscy9nZXQtcG9zdC1kYXRhXCI7XG5pbXBvcnQgQmxvZ0VuZ2luZSBmcm9tIFwiLi4vdXRpbHMvYmxvZy1lbmdpbmVcIjtcbmltcG9ydCB7IHJlbmRlckxheW91dCB9IGZyb20gXCIuLi91dGlscy9yZW5kZXItYXBwLWxheW91dFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7IGNoZWNrRm9yU1cgfSBmcm9tIFwiLi4vdXRpbHMvY2hlY2stZm9yLXN3XCI7XG5pbXBvcnQgeyBGYUJhcnMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGdsb2JhbFN0eWxlcyB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBuYXZPcGVuOiBmYWxzZSwgcG9zdERhdGE6IHByb3BzLnBvc3REYXRhIH07XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG5cbiAgICBjb25zdCBbYWxsRGF0YSwgcG9zdERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgQmxvZ0VuZ2luZSgpLFxuICAgICAgZ2V0UG9zdERhdGEocm91dGVyKVxuICAgIF0pLmNhdGNoKGVycm9yID0+XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gX2FwcC5qcyBnZXRJbml0aWFsUHJvcHMoKVwiLCBlcnJvcilcbiAgICApO1xuXG4gICAgY29uc3QgcHJvcHNPYmogPSBPYmplY3QuYXNzaWduKHt9LCB7IHBvc3REYXRhLCBhbGxEYXRhLCAuLi5wYWdlUHJvcHMgfSk7XG5cbiAgICByZXR1cm4geyAuLi5wcm9wc09iaiB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXdhaXQgY2hlY2tGb3JTVygpO1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YSh0aGlzLnByb3BzLnJvdXRlcik7XG4gICAgaWYgKCFwcmV2U3RhdGUucG9zdERhdGEgfHwgcG9zdERhdGEubmFtZSAhPT0gdGhpcy5zdGF0ZS5wb3N0RGF0YS5uYW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcG9zdERhdGEgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hdk9wZW46ICF0aGlzLnN0YXRlLm5hdk9wZW5cbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwb3N0RGF0YSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHNlb0RhdGEgPSBjcmVhdGVTRU9Db25maWcocG9zdERhdGEpO1xuICAgIGlmIChwb3N0RGF0YSkge1xuICAgICAgY29uc3QgdGFnc1N0cmluZyA9IHBvc3REYXRhLnRhZ3Muam9pbihcIiwgXCIpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHsvKiAoMSkgU0VPICAqL31cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3RhZ3NTdHJpbmd9IC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxOZXh0U2VvIGNvbmZpZz17c2VvRGF0YX0gLz5cblxuICAgICAgICAgIHsvKiAoMikgbmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8TmF2aWdhdGlvblxuICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5uYXZPcGVufVxuICAgICAgICAgICAgdG9nZ2xlTmF2aWdhdGlvbj17dGhpcy5oYW5kbGVUb2dnbGVOYXZpZ2F0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b24gaGFtYnVyZ2VyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlTmF2aWdhdGlvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmFCYXJzIHNpemU9ezIwfSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qICgzKSBwYWdlIGJvZHkgKi99XG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3JlbmRlckxheW91dCh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICAgICAgey8qICg0KSBmb290ZXIgKi99XG4gICAgICAgICAgPEZvb3RlciAvPlxuXG4gICAgICAgICAgey8qICg1KSBnbG9iYWwgYW5kIGxvY2FsIHN0eWxlcyAqL31cbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICAgIHtnbG9iYWxTdHlsZXN9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaWNvbi1idXR0b24ge1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/wajari/dev/blog-next/pages/_app.js */"));
    } else {
      return null;
    }
  }

}

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wajari/dev/blog-next/pages/_document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return __jsx("html", {
      lang: "en",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "icon",
      href: "/static/icons/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "manifest",
      href: "/static/manifest.json",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].css.primaryColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/static/icons/icon_32.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      href: "/static/icons/icon_48.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
      href: "/static/icons/icon_128.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "256x256",
      href: "/static/icons/icon_256.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "apple-mobile-web-app-title",
      content: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].siteName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/static/icons/icon_180.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].css.primaryColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "msapplication-TileImage",
      content: "/static/icons/icon_150.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    })), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    })));
  }

}

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles/index.js");
var _jsxFileName = "/home/wajari/dev/blog-next/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const meta = {
  title: "About",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

function About() {
  return __jsx("div", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash}` + " " + "centered-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "About"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"]));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/blog sync recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./pages/blog sync ^\.\/.*$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog-react.mdx": "./pages/blog/blog-react.mdx",
	"./post-four-link-on-twitter.mdx": "./pages/blog/post-four-link-on-twitter.mdx",
	"./post-one-code-block-demo.mdx": "./pages/blog/post-one-code-block-demo.mdx",
	"./post-three-smooth-scroll-and-reading-progress-bar.mdx": "./pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx",
	"./post-two-image-demo.mdx": "./pages/blog/post-two-image-demo.mdx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pages/blog sync recursive ^\\.\\/.*$";

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostListing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostListing */ "./components/PostListing.js");
var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const meta = {
  title: "Blog <dev> Wajari Velásquez",
  tags: ["Next.js", "MDX"],
  layout: "blog-post-list",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "All of your blog posts are listed on this page, unless a post has the meta property `exclude: true`."
};
function Blog(props) {
  const blogPosts = props.allData.filter(content => content.type == "post");
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
  }, meta.title), blogPosts.map((post, index) => __jsx(_components_PostListing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    post: post,
    indes: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })));
}
Blog.defaultProps = {
  allData: []
};

/***/ }),

/***/ "./pages/blog/blog-react.mdx":
/*!***********************************!*\
  !*** ./pages/blog/blog-react.mdx ***!
  \***********************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogMeta */ "./components/BlogMeta.js");
var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog/blog-react.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */


const meta = {
  title: "Blog en React",
  tags: ["react", "next"],
  layout: "post",
  publishDate: "2020-04-02",
  modifiedDate: false,
  // "If used it must be in 'YYYY-MM-DD format' like publishDate"
  seoDescription: "Aprende a crear un blog con React y Next para servir contenido estático",
  exclude: false,
  hideProgressBar: false
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }
  }));
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props,
    mdxType: "BlogMeta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, `Estreno nuevo blog (y en React, Next y Markdown)`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, `Entiendo que se preguntarán: ¿Qué carallo haces Wajari?.
Siendo fan de `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, `WordPress`), ` para que te pones a crear un blog que evidentemente,
tendrá una curva de aprendizaje, y retos en la implementación. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, `Pues por eso, por salir de mi zona de confort. Ya tengo un blog de "agencia SEO", tengo un podcast,
pero los encasillé en temáticas específicas. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, `Se me ha roto este blog, más veces de las que puedo contar con las manos. Pero salió adelante. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, `Ya que me hice un `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 30
    }
  }, `bootcamp de programación`), `, y justo al terminar,
llegó el apocalipsis con el Coronavirus (Covid-19), pues ¿Qué mejor que en mis tiempos libres practicar? `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, `No es por nada, pero toda una maestría de la organización del tiempo tomando en cuenta, tener que trabajar con
un hijo de casi 3 años en casa, sin guardería, ni abuelos que nos puedan ayudar. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, `Ha sido un reto super interesante. La verdad que `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://es.reactjs.org/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 61
    }
  }), `React`), ` es una tecnología impresionante.
En el bootcamp no pudimos ver `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://nextjs.org/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }), `Next`), ` ni `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://gatsby.com"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 30
    }
  }), `gatsby`), ` así que estuve leyendo
su documentación y me parece encaja perfectamente con lo que necesito. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, `Os explico por qué. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, `¿Qué tecnologías buscaba y por qué?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, `Buscaba la rapidez e inmediatez del contenido estático. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, `Soy un gran fan de `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://simplenote.com/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 31
    }
  }), `Simplenote`), ` una aplicación muy sencilla para crear notas creada en React
por Automattic. `));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./pages/blog/post-four-link-on-twitter.mdx":
/*!**************************************************!*\
  !*** ./pages/blog/post-four-link-on-twitter.mdx ***!
  \**************************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogMeta */ "./components/BlogMeta.js");
/* harmony import */ var _public_static_images_twitter_card_demo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/images/twitter-card-demo.png */ "./public/static/images/twitter-card-demo.png");
/* harmony import */ var _public_static_images_twitter_card_demo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_twitter_card_demo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog/post-four-link-on-twitter.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */



const meta = {
  title: "Links on Twitter Look Beautiful",
  tags: ["tag-1", "tag-2"],
  layout: "post",
  publishDate: "2018-01-01",
  modifiedDate: false,
  seoDescription: "This post has an embedded Twitter card",
  exclude: true
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }
  }));
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props,
    mdxType: "BlogMeta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, `This is what a links to your blog will look like on Twitter.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: _public_static_images_twitter_card_demo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    width: "600px",
    alt: "Image alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./pages/blog/post-one-code-block-demo.mdx":
/*!*************************************************!*\
  !*** ./pages/blog/post-one-code-block-demo.mdx ***!
  \*************************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _code_snippets_post_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../code-snippets/post-one */ "./code-snippets/post-one/index.js");
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BlogMeta */ "./components/BlogMeta.js");
var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog/post-one-code-block-demo.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */



const meta = {
  title: "This is my first post",
  tags: ["serverless", "node.js", "python"],
  layout: "post",
  publishDate: "2017-10-02",
  modifiedDate: false,
  seoDescription: "This post demonstrates syntax-hightlighted code in your post.",
  exclude: true
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }
  }));
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, `No need for a title in body. You add the title to the metadata, and it appears here. Same for tags and publication date. This starter blog is set up for code highlighting like so:`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx":
/*!**************************************************************************!*\
  !*** ./pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx ***!
  \**************************************************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogMeta */ "./components/BlogMeta.js");
/* harmony import */ var _components_SmoothLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SmoothLink */ "./components/SmoothLink.js");
/* harmony import */ var _components_LinkAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/LinkAnchor */ "./components/LinkAnchor.js");
var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */




const meta = {
  title: "Demo Reading Progress Bar & Smooth Scroll",
  tags: ["mdx"],
  layout: "post",
  publishDate: "2018-11-07",
  modifiedDate: false,
  seoDescription: "This post demonstrates the use of smooth scroll components and reading progress bar.",
  exclude: true
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }));
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props,
    mdxType: "BlogMeta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_SmoothLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: "#chapter-1",
    linkText: "Chapter 1",
    mdxType: "SmoothLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 27
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_SmoothLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: "#chapter-2",
    linkText: "Chapter 2",
    mdxType: "SmoothLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 27
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_SmoothLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: "#chapter-3",
    linkText: "Chapter 3",
    mdxType: "SmoothLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 27
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, `Cat ipsum dolor sit amet, chew foot flex claws on the human's belly and purr like a lawnmower. My slave human didn't give me any food so i pooped on the floor sleep nap. Trip on catnip pet my belly, you know you want to; seize the hand and shred it!. Run outside as soon as door open fall asleep upside-down lounge in doorway flee in terror at cucumber discovered on floor yet attack feet, pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now eat plants, meow, and throw up because i ate plants. Find empty spot in cupboard and sleep all day really likes hummus kitty scratches couch bad kitty for eat owner's food. Sleep nap slap kitten brother with paw yet why must they do that, pushes butt to face pee in human's bed until he cleans the litter box.
If it fits, i sits curl into a furry donut and behind the couch, for ears back wide eyed but mesmerizing birds. Eats owners hair then claws head unwrap toilet paper so always ensure to lay down in such a manner that tail can lightly brush human's nose , purr i like frogs and 0 gravity so lick the curtain just to be annoying cat fur is the new black . Cat cat moo moo lick ears lick paws sit in window and stare oooh, a bird, yum and sit by the fire for bite the neighbor's bratty kid find empty spot in cupboard and sleep all day gnaw the corn cob, for scratch the furniture. Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat furrier and even more furrier hairball jump off balcony, onto stranger's head or lick the plastic bag. Scream at teh bath litter kitter kitty litty little kitten big roar roar feed me. Man running from cops stops to pet cats, goes to jail when in doubt, wash chase mice, but find box a little too small and curl up with fur hanging out . Eat plants, meow, and throw up because i ate plants meow to be let in for claws in your leg for bleghbleghvomit my furball really tie the room together so push your water glass on the floor and poop in litter box, scratch the walls, so stare at the wall, play with food and get confused by dust. Disappear for four days and return home with an expensive injury; bite the vet ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss and try to jump onto window and fall while scratching at wall instantly break out into full speed gallop across the house for no reason, yet throwup on your pillow. Lick the plastic bag hate dog my left donut is missing, as is my right yet attack dog, run away and pretend to be victim and thinking longingly about tuna brine love you, then bite you. Favor packaging over toy refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am reward the chosen human with a slow blink, so eat half my food and ask for more yet snuggles up to shoulders or knees and purrs you to sleep. Dismember a mouse and then regurgitate parts of it on the family room floor dream about hunting birds for ask to go outside and ask to come inside and ask to go outside and ask to come inside destroy couch as revenge yet scoot butt on the rug, but experiences short bursts of poo-phoria after going to the loo so tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad . Pushes butt to face asdflkjaertvlkjasntvkjn (sits on keyboard) lick left leg for ninety minutes, still dirty or meow groom forever, stretch tongue and leave it slightly out, blep. Toy mouse squeak roll over who's the baby head nudges , toy mouse squeak roll over sit on human so i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! attack like a vicious monster. White cat sleeps on a black shirt pretend not to be evil, run in circles, for have my breakfast spaghetti yarn yet that box? i can fit in that box trip on catnip cat dog hate mouse eat string barf pillow no baths hate everything. Eat and than sleep on your face run up and down stairs stare at wall turn and meow stare at wall some more meow again continue staring . Sit on human missing until dinner time demand to be let outside at once, and expect owner to wait for me as i think about it for attack feet meow. You have cat to be kitten me right meow give attitude, groom forever, stretch tongue and leave it slightly out, blep steal the warm chair right after you get up. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good dead stare with ears cocked yet favor packaging over toy for make muffins. When owners are asleep, cry for no apparent reason sleep on keyboard while happily ignoring when being called for i like frogs and 0 gravity and wake up human for food at 4am touch my tail, i shred your hand purrrr so that box? i can fit in that box. Push your water glass on the floor meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat swat turds around the house or meowing chowing and wowing yet demand to have some of whatever the human is cooking, then sniff the offering and walk away so suddenly go on wild-eyed crazy rampage meoooow. Making sure that fluff gets into the owner's eyes play time, but claw at curtains stretch and yawn nibble on tuna ignore human bite human hand, or i can haz. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Chew on cable. Climb leg pee in human's bed until he cleans the litter box stares at human while pushing stuff off a table and sleep everywhere, but not in my bed, yet terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry. Rub face on everything.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_LinkAnchor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    element: "h2",
    id: "chapter-1",
    text: "Chapter 1",
    mdxType: "LinkAnchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, `Hit you unexpectedly fooled again thinking the dog likes me try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Meow meow, i tell my human chase mice, and flex claws on the human's belly and purr like a lawnmower yet my water bowl is clean and freshly replenished, so i'll drink from the toilet. Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry groom forever, stretch tongue and leave it slightly out, blep yet floof tum, tickle bum, jellybean footies curly toes. Gate keepers of hell love ears back wide eyed and give me some of your food give me some of your food give me some of your food meh, i don't want it yet ask to go outside and ask to come inside and ask to go outside and ask to come inside scratch. Fall asleep on the washing machine massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now run up and down stairs. Destroy the blinds i'm going to lap some water out of my master's cup meow but put butt in owner's face and licks your face. Kick up litter hide from vacuum cleaner. Instantly break out into full speed gallop across the house for no reason cats are fats i like to pets them they like to meow back meowing chowing and wowing, that box? i can fit in that box for if it smells like fish eat as much as you wish. Poop in the plant pot white cat sleeps on a black shirt. Try to jump onto window and fall while scratching at wall catty ipsum but my water bowl is clean and freshly replenished, so i'll drink from the toilet yet meow meow. Shove bum in owner's face like camera lens ooooh feather moving feather! lie in the sink all day or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table kick up litter.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, `Spill litter box, scratch at owner, destroy all furniture, especially couch hunt by meowing loudly at 5am next to human slave food dispenser. Taco cat backwards spells taco cat present belly, scratch hand when stroked yet meowwww but eat a plant, kill a hand refuse to drink water except out of someone's glass. Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed that box? i can fit in that box so cat mojo but meow to be let out. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce if human is on laptop sit on the keyboard. Chase dog then run away plays league of legends trip on catnip. Sleep in the bathroom sink warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats, but roll on the floor purring your whiskers off jump five feet high and sideways when a shadow moves lick left leg for ninety minutes, still dirty. Small kitty warm kitty little balls of fur steal the warm chair right after you get up inspect anything brought into the house, yet cough furball. I like fish demand to be let outside at once, and expect owner to wait for me as i think about it but lick the curtain just to be annoying but sit and stare for hiiiiiiiiii feed me now. Claw drapes hiss at vacuum cleaner scratch the box. I am the best mrow so and sometimes switches in french and say "miaou" just because well why not or who's the baby dont wait for the storm to pass, dance in the rain bleghbleghvomit my furball really tie the room together stare at ceiling light. Really likes hummus meow to be let out steal the warm chair right after you get up. Plan steps for world domination spend six hours per day washing, but still have a crusty butthole and poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls for cough furball into food bowl then scratch owner for a new one cat not kitten around . Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! why use post when this sofa is here yet fight an alligator and win drink water out of the faucet find something else more interesting, but mark territory. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark cough furball into food bowl then scratch owner for a new one and bleghbleghvomit my furball really tie the room together so if it smells like fish eat as much as you wish but hack up furballs.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_LinkAnchor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    element: "h2",
    id: "chapter-2",
    text: "Chapter 2",
    mdxType: "LinkAnchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, `The dog smells bad thinking longingly about tuna brine. Munch on tasty moths. Sleep on my human's head nap all day, for demand to have some of whatever the human is cooking, then sniff the offering and walk away attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently prance along on top of the garden fence, annoy the neighbor's dog and make it bark destroy house in 5 seconds for my water bowl is clean and freshly replenished, so i'll drink from the toilet. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked sleep in the bathroom sink open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! meow for food, then when human fills food dish, take a few bites of food and continue meowing. Pee in human's bed until he cleans the litter box hiss and stare at nothing then run suddenly away lounge in doorway. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now scratch the postman wake up lick paw wake up owner meow meow but purr like an angel. And sometimes switches in french and say "miaou" just because well why not pet me pet me don't pet me. When owners are asleep, cry for no apparent reason cough furball, kitty loves pigs and this cat happen now, it was too purr-fect!!! and experiences short bursts of poo-phoria after going to the loo headbutt owner's knee. Immediately regret falling into bathtub milk the cow and sniff other cat's butt and hang jaw half open thereafter. Drool floof tum, tickle bum, jellybean footies curly toes. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap lick the plastic bag so lick plastic bags but cough furball into food bowl then scratch owner for a new one. Pee in human's bed until he cleans the litter box being gorgeous with belly side up cry louder at reflection and hate dog hack.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, `Hopped up on catnip eat plants, meow, and throw up because i ate plants see owner, run in terror. Meowing chowing and wowing kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? and eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap eat all the power cords love to play with owner's hair tie. Sleep on keyboard pretend not to be evil sit in a box for hours or sleep on my human's head find box a little too small and curl up with fur hanging out pee in the shoe. Dont wait for the storm to pass, dance in the rain. Instantly break out into full speed gallop across the house for no reason. You are a captive audience while sitting on the toilet, pet me brown cats with pink ears. Hate dog. Pee in human's bed until he cleans the litter box loves cheeseburgers, refuse to leave cardboard box so refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am and favor packaging over toy. Ooooh feather moving feather! rub face on owner, but litter kitter kitty litty little kitten big roar roar feed me bathe private parts with tongue then lick owner's face. Sit by the fire thug cat so ptracy, so intrigued by the shower, yet lie in the sink all day. Reward the chosen human with a slow blink. Purr when being pet scratch at the door then walk away for i'm going to lap some water out of my master's cup meow cat slap dog in face, so mew for meow all night. That box? i can fit in that box chase imaginary bugs when in doubt, wash sit by the fire. Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! catch mouse and gave it as a present have secret plans, for drink water out of the faucet and see owner, run in terror or who's the baby, so the cat was chasing the mouse. Attack like a vicious monster disappear for four days and return home with an expensive injury; bite the vet or missing until dinner time where is my slave? I'm getting hungry but meow loudly just to annoy owners. Lick master's hand at first then bite because im moody scoot butt on the rug loves cheeseburgers sleep nap. Claw drapes chew the plant, you have cat to be kitten me right meow yet meow litter kitter kitty litty little kitten big roar roar feed me be superior or meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Pounce on unsuspecting person sniff catnip and act crazy yet attack like a vicious monster, then cats take over the world poop in litter box, scratch the walls and i'm going to lap some water out of my master's cup meow. Eat all the power cords spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce caticus cuteicus. Curl up and sleep on the freshly laundered towels i am the best ask to be pet then attack owners hand for scamper i like big cats and i can not lie cough hairball on conveniently placed pants but it's 3am, time to create some chaos . Dont wait for the storm to pass, dance in the rain kitty kitty take a big fluffing crap 💩 purrr purr littel cat, little cat purr purr so cry louder at reflection, yet sit by the fire yet love to play with owner's hair tie. Climb a tree, wait for a fireman jump to fireman then scratch his face fooled again thinking the dog likes me play time. Purr poop on grasses meowwww. Sleeps on my head twitch tail in permanent irritation but leave fur on owners clothes if it smells like fish eat as much as you wish get my claw stuck in the dog's ear. Wake up human for food at 4am scratch.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_LinkAnchor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    element: "h2",
    id: "chapter-3",
    text: "Chapter 3",
    mdxType: "LinkAnchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, `Cats go for world domination stinky cat so human is washing you why halp oh the horror flee scratch hiss bite be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day. Rub face on owner always ensure to lay down in such a manner that tail can lightly brush human's nose yet destroy house in 5 seconds. Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water yowling nonstop the whole night yet present belly, scratch hand when stroked proudly present butt to human eat the rubberband destroy the blinds for roll on the floor purring your whiskers off. Play riveting piece on synthesizer keyboard. Ooh, are those your \$250 dollar sandals? lemme use that as my litter box no, you can't close the door, i haven't decided whether or not i wanna go out spread kitty litter all over house. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff i like frogs and 0 gravity or that box? i can fit in that box loves cheeseburgers purrr purr littel cat, little cat purr purr. Cat slap dog in face lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back climb a tree, wait for a fireman jump to fireman then scratch his face find a way to fit in tiny box. Cats go for world domination pretend you want to go out but then don't i shredded your linens for you so purrrrrr. I like big cats and i can not lie eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Poop on floor and watch human clean up. Annoy kitten brother with poking toy mouse squeak roll over for steal the warm chair right after you get up scream at teh bath. Spread kitty litter all over house eat plants, meow, and throw up because i ate plants. Stare at guinea pigs hiss and stare at nothing then run suddenly away, yet brown cats with pink ears, so why use post when this sofa is here, with tail in the air. Kitty poochy the cat was chasing the mouse or this human feeds me, i should be a god and give me some of your food give me some of your food give me some of your food meh, i don't want it claw drapes. Your pillow is now my pet bed bring your owner a dead bird weigh eight pounds but take up a full-size bed so eat half my food and ask for more, so meow for food, then when human fills food dish, take a few bites of food and continue meowing for shake treat bag, but climb a tree, wait for a fireman jump to fireman then scratch his face. Yowling nonstop the whole night my cat stared at me he was sipping his tea, too throw down all the stuff in the kitchen climb a tree, wait for a fireman jump to fireman then scratch his face or hiss and stare at nothing then run suddenly away, or cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Sleep on my human's head. Meow to be let out love. Stares at human while pushing stuff off a table loves cheeseburgers. Spend all night ensuring people don't sleep sleep all day play time, for stare at wall turn and meow stare at wall some more meow again continue staring knock over christmas tree but cuddle no cuddle cuddle love scratch scratch. Eat all the power cords hack, yet play time, or unwrap toilet paper purrrrrr or ask to go outside and ask to come inside and ask to go outside and ask to come inside. Spill litter box, scratch at owner, destroy all furniture, especially couch licks paws love me! intently sniff hand, or unwrap toilet paper and stand in doorway, unwilling to chose whether to stay in or go out refuse to leave cardboard box. Attack dog, run away and pretend to be victim lick left leg for ninety minutes, still dirty.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, `Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss. Meow to be let in with tail in the air you call this cat food. Jump off balcony, onto stranger's head annoy the old grumpy cat, start a fight and then retreat to wash when i lose no, you can't close the door, i haven't decided whether or not i wanna go out for mew for mew or purrrrrr. Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss toy mouse squeak roll over thug cat stares at human while pushing stuff off a table but purr while eating. Stand in front of the computer screen scratch. Cat cat moo moo lick ears lick paws leave hair everywhere, but annoy owner until he gives you food say meow repeatedly until belly rubs, feels good stuff and things. Present belly, scratch hand when stroked stare at wall turn and meow stare at wall some more meow again continue staring hopped up on catnip you are a captive audience while sitting on the toilet, pet me. Take a big fluffing crap 💩 give attitude kitty poochy lick the other cats but run up and down stairs.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, `Have secret plans meow loudly just to annoy owners and head nudges attack like a vicious monster. Immediately regret falling into bathtub who's the baby. Stare at the wall, play with food and get confused by dust brown cats with pink ears drool yet put butt in owner's face tuxedo cats always looking dapper hiding behind the couch until lured out by a feathery toy yet dont wait for the storm to pass, dance in the rain. Cat dog hate mouse eat string barf pillow no baths hate everything adventure always take a big fluffing crap 💩. Fall over dead (not really but gets sypathy) poop in the plant pot present belly, scratch hand when stroked yet sleep so licks your face stare at wall turn and meow stare at wall some more meow again continue staring yet disappear for four days and return home with an expensive injury; bite the vet. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans howl on top of tall thing. White cat sleeps on a black shirt prance along on top of the garden fence, annoy the neighbor's dog and make it bark cats are fats i like to pets them they like to meow back yet scratch at the door then walk away and if it smells like fish eat as much as you wish making sure that fluff gets into the owner's eyes steal the warm chair right after you get up. Purr when being pet climb a tree, wait for a fireman jump to fireman then scratch his face yet bite the neighbor's bratty kid yet it's 3am, time to create some chaos . Ignore the human until she needs to get up, then climb on her lap and sprawl run in circles, for proudly present butt to human so this cat happen now, it was too purr-fect!!! but has closed eyes but still sees you. Being gorgeous with belly side up suddenly go on wild-eyed crazy rampage but eats owners hair then claws head and attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, `Chase red laser dot lick the curtain just to be annoying yet bite the neighbor's bratty kid but behind the couch, flee in terror at cucumber discovered on floor for suddenly go on wild-eyed crazy rampage chill on the couch table. Hunt by meowing loudly at 5am next to human slave food dispenser love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a \$125 sweater) so i can haz rub whiskers on bare skin act innocent scream for no reason at 4 am paw at beetle and eat it before it gets away meow. See owner, run in terror show belly or when owners are asleep, cry for no apparent reason for pose purrfectly to show my beauty my slave human didn't give me any food so i pooped on the floor or hiiiiiiiiii feed me now. Stare at the wall, play with food and get confused by dust chase after silly colored fish toys around the house but intrigued by the shower, so kitty scratches couch bad kitty licks paws pushes butt to face for massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Cuddle no cuddle cuddle love scratch scratch ask to be pet then attack owners hand but scratch and sit on human twitch tail in permanent irritation for catasstrophe. Why must they do that missing until dinner time, or stare at ceiling light chew foot. Bite the neighbor's bratty kid proudly present butt to human stretch, or bite off human's toes. Scratch at the door then walk away disappear for four days and return home with an expensive injury; bite the vet take a big fluffing crap 💩, for use lap as chair trip on catnip. Pounce on unsuspecting person pretend not to be evil so who's the baby i like cats because they are fat and fluffy ignore the squirrels, you'll never catch them anyway yet scratch. Favor packaging over toy stare at ceiling light. Jump off balcony, onto stranger's head meow and walk away nya nya nyan or take a big fluffing crap 💩 yet eat the fat cats food lick the other cats so cat ass trophy. Eats owners hair then claws head. If it fits, i sits a nice warm laptop for me to sit on. Bite the neighbor's bratty kid kitty kitty. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock pushes butt to face yet need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me chase imaginary bugs, for leave hair everywhere.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./pages/blog/post-two-image-demo.mdx":
/*!********************************************!*\
  !*** ./pages/blog/post-two-image-demo.mdx ***!
  \********************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_images_mountains_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/static/images/mountains.jpg */ "./public/static/images/mountains.jpg");
/* harmony import */ var _public_static_images_mountains_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_mountains_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BlogMeta */ "./components/BlogMeta.js");
var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog/post-two-image-demo.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */



const meta = {
  title: "Second Post With Image",
  tags: ["mdx", "javascript"],
  layout: "post",
  publishDate: "2017-12-10",
  hideProgressBar: true,
  seoDescription: "This post demonstrates how to use images in blog posts.",
  exclude: true
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }
  }));
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_BlogMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: props,
    mdxType: "BlogMeta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, `Here is an image 🤓`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: _public_static_images_mountains_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "img-centered",
    alt: "Image alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlogMeta */ "./components/BlogMeta.js");
/* harmony import */ var _public_static_images_wajari_tone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/images/wajari-tone.png */ "./public/static/images/wajari-tone.png");
/* harmony import */ var _public_static_images_wajari_tone_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_wajari_tone_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/wajari/dev/blog-next/pages/index.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */



const meta = {
  title: "Next.js MDX Blog Kit",
  tags: ["Next.js", "MDX"],
  layout: "post",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is the home page."
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }));
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, `Wajari.dev`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, `Padawan FullStack JavaScript | React | Consultor SEO`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, `Podcaster, blogger, imparto talleres de SEO, ayudo a organizar comunidades tecnológicas open source #WordPress y #SEO.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, `En la actualidad formándome en JavaScript, React, Node.js, Git. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, `Este es mi `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  }, `blog`), ` enfocado en desarrollo web, linux, SEO técnico y reflexiones personales. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, `Lo hice con mucho cariño con React, Next.js y markdown. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: _public_static_images_wajari_tone_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "img-centered",
    alt: "Wajari Velasquez",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, `Si quieres saber más de mi, tengo un web de contacto en: `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://wajari.com"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 27
    }
  }), `wajari`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, `Un `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://seoparawp.com"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 34
    }
  }), `podcast`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, `Una `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://ku-seo.com"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 35
    }
  }), `consultoría SEO`))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_SearchLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/SearchLayout */ "./components/layouts/SearchLayout.js");
/* harmony import */ var _components_PostListing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostListing */ "./components/PostListing.js");
var _jsxFileName = "/home/wajari/dev/blog-next/pages/search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const meta = {
  title: "Search",
  tags: ["javascript", "python"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This page lists all posts with a given tag."
};
function Search(props) {
  const renderListItems = posts => {
    const tagTopic = props.router.query.q;
    const items = posts.filter(post => post.tags.includes(tagTopic)).map((post, index) => __jsx(_components_PostListing__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      post: post,
      index: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }));

    if (items.length) {
      return items;
    } else {
      return __jsx("h2", {
        key: "not-found-headline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 20
        }
      }, "No results");
    }
  };

  const blogPosts = props.allData.filter(content => content.type == "post");
  return __jsx(_components_layouts_SearchLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Posts tagged: ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 31
    }
  }, props.router.query.q)), renderListItems(blogPosts));
}
Search.defaultProps = {
  allData: []
};

/***/ }),

/***/ "./public/static/images/mountains.jpg":
/*!********************************************!*\
  !*** ./public/static/images/mountains.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mountains-d3cf4fc139bde33eac1e9df3bbe33d33.jpg";

/***/ }),

/***/ "./public/static/images/twitter-card-demo.png":
/*!****************************************************!*\
  !*** ./public/static/images/twitter-card-demo.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/twitter-card-demo-21bc622f7687e84870b4a8a53c0d504a.png";

/***/ }),

/***/ "./public/static/images/wajari-tone.png":
/*!**********************************************!*\
  !*** ./public/static/images/wajari-tone.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wajari-tone-8e9674098f4e4b8f96c49f34517047f0.png";

/***/ }),

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! exports provided: centeredPageStyles, globalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centeredPageStyles", function() { return centeredPageStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyles", function() { return globalStyles; });
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__);
// In an attempt to keep all configuration in one place, css variables
// are currently stored in config.yml. Move these variables into a
// variables file in this style/ directory if that is your preference.
 // used in pages/about.js, pages/index.js

const centeredPageStyles = new String(".centered-container.jsx-3052985414{height:80vh;width:98vw;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L3N0eWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRcUMsQUFHaUIsWUFDRCxXQUNDLFlBQ0MsMEVBQ00sNkZBQ0ksbUdBQ0QsOEVBQ3hCIiwiZmlsZSI6Ii9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L3N0eWxlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5cbi8vIEluIGFuIGF0dGVtcHQgdG8ga2VlcCBhbGwgY29uZmlndXJhdGlvbiBpbiBvbmUgcGxhY2UsIGNzcyB2YXJpYWJsZXNcbi8vIGFyZSBjdXJyZW50bHkgc3RvcmVkIGluIGNvbmZpZy55bWwuIE1vdmUgdGhlc2UgdmFyaWFibGVzIGludG8gYVxuLy8gdmFyaWFibGVzIGZpbGUgaW4gdGhpcyBzdHlsZS8gZGlyZWN0b3J5IGlmIHRoYXQgaXMgeW91ciBwcmVmZXJlbmNlLlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWcueW1sXCI7XG5cbi8vIHVzZWQgaW4gcGFnZXMvYWJvdXQuanMsIHBhZ2VzL2luZGV4LmpzXG5leHBvcnQgY29uc3QgY2VudGVyZWRQYWdlU3R5bGVzID0gY3NzYFxuICAuY2VudGVyZWQtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgd2lkdGg6IDk4dnc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG4vLyB1c2VkIGluIF9hcHAuanNcbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZXMgPSBjc3MuZ2xvYmFsYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJWb2xsa29yblwiLCBzZXJpZjtcbiAgICBmb250LWRpc3BsYXk6IGF1dG87IC8qIEltcG9ydGFudCBmb3IgcGVyZm9ybWFuY2UgKi9cbiAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvdm9sbGtvcm4ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIGh0bWwge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB9XG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5ibGFja307XG4gIH1cbiAgI19fbmV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbiAgLmZvb3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR7Y29uZmlnLmNzcy5saWdodEdyYXl9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICBzdHJvbmcsXG4gIGgxLFxuICBoMSA+ICosXG4gIGgyLFxuICBoMiA+ICosXG4gIGgzLFxuICBoMyA+ICosXG4gIGg0LFxuICBoNCA+ICosXG4gIGg1LFxuICBoNSA+ICosXG4gIGg2LFxuICBoNiA+ICoge1xuICAgIGZvbnQtZmFtaWx5OiBcIlZvbGxrb3JuXCIsIHNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogJHtjb25maWcuY3NzLmFjY2VudENvbG9yfTtcbiAgfVxuICAuc2VhcmNoLWxheW91dCxcbiAgLmJsb2ctbGF5b3V0LFxuICAuYmxvZy1wb3N0LWxpc3Qge1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgcGFkZGluZzogNDBweCAyMHB4IDEwMHB4IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5ibG9nLWxheW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIGltZy5pbWctY2VudGVyZWQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICB9XG4gIC5pY29uLWJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogJHtjb25maWcuY3NzLmJhY2tncm91bmRDb2xvcn07XG4gIH1cbiAgLmljb24tYnV0dG9uLmhhbWJ1cmdlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAzOyAvKiB0aGUgbmF2aWdhdGlvbiBtZW51IGlzIHotaW5kZXg6IDQgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbmZpZy5jc3MubGlnaHRHcmF5fTtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogJHtjb25maWcuY3NzLmFjY2VudENvbG9yfTtcbiAgfVxuICBsYWJlbCB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5ibGFja307XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLnBvc3QtZGF0ZSB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIHAsXG4gIHAgYSxcbiAgYixcbiAgZW0sXG4gIHNwYW4sXG4gIGxpLFxuICB1bCxcbiAgb2wge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyAvKiBUaGlzIHByZXZlbnRzIGEgYnVnIHdpdGggdGhlIHJlYWRpbmcgcHJvZ3Jlc3MgYmFyLiBMZWF2ZSB0aGlzIHN0eWxlIGhlcmUgdW5sZXNzIHlvdSBhcmUgcmVtb3ZpbmcgdGhlIHJlYWRpbmcgcHJvZ3Jlc3MgYmFyLiAqL1xuICB9XG5cbiAgY29kZSA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsgLyogbWFrZSBzdXJlIGNvZGUgZm9udCBzaXplIGlzIHNldCBpbiA8Q29kZUJsb2NrIC8+ICovXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50OyAvKiBGaXhlcyBjb2RlIGJsb2NrIHN0eWxlIGJ1ZyovXG4gIH1cbmA7XG4iXX0= */\n/*@ sourceURL=/home/wajari/dev/blog-next/styles/index.js */"); // used in _app.js

centeredPageStyles.__hash = "3052985414";
const globalStyles = new String(`@font-face{font-family:"Vollkorn",serif;font-display:auto;src:url("/static/fonts/vollkorn.woff2") format("woff2");font-style:normal;}html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}body{position:relative;top:0;margin:0;padding:0;color:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.black};}#__next{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;min-height:100vh;}.footer{font-family:"Open Sans",sans-serif;background:#fff;height:80px;width:100%;border-top:2px solid ${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.lightGray};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;position:absolute;bottom:0;}strong,h1,h1>*,h2,h2>*,h3,h3>*,h4,h4>*,h5,h5>*,h6,h6>*{font-family:"Vollkorn",serif;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}strong{color:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.accentColor};}.search-layout,.blog-layout,.blog-post-list{max-width:740px;padding:40px 20px 100px 20px;position:relative;}.blog-layout{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img{max-width:100%;}img.img-centered{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:10px 0px;}.icon-button{outline:none;border:none;background:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.backgroundColor};}.icon-button.hamburger{position:fixed;left:0px;top:0px;z-index:3;border:1px solid ${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.lightGray};padding-top:4px;border-radius:3px;}a{color:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.accentColor};}label{color:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.black};font-weight:600;font-family:sans-serif;font-size:18px;}.post-date{font-family:sans-serif;font-size:16px;}p,p a,b,em,span,li,ul,ol{font-family:"Open Sans",sans-serif;font-size:18px;line-height:24px;word-break:break-word;}code>span{font-size:inherit;background:inherit !important;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhamFyaS9kZXYvYmxvZy1uZXh0L3N0eWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnNDLEFBR21DLEFBTVAsQUFHTCxBQU9MLEFBTXVCLEFBeUJOLEFBSUssQUFLbkIsQUFLSCxBQUlFLEFBR0csQUFJTCxBQUtFLEFBU29CLEFBR0EsQUFNWixBQVdhLEFBT2xCLGFBeENOLEVBUGQsQUFZVyxDQXJCb0IsRUEvQ3ZCLEFBd0d3QixLQWxCZixDQXJGTixBQW9FRCxDQUxnQyxJQXpFdEIsQUErQ0MsR0FnQ1QsQ0FwRUEsRUFXTSxBQTZCbEIsQUFtQ0EsQUFHa0IsQUFpQkQsR0FWakIsSUFoQmdELENBcEVYLEVBNkNqQixFQXhEc0MsQ0FpSDFELEVBUG1CLENBcEZMLEFBbUVXLFlBbEVaLEFBa0NiLEVBZ0JBLEVBa0N3QixJQXhDTixHQXBETSxBQVM0QixBQW9DNUIsQUE4QlAsSUE5RWpCLFNBd0RBLENBWWtCLENBV2xCLEFBaUJBLGNBM0dvQixDQWdGQSxLQTVFcEIsWUFIQSxDQTZDQSxBQW1DQSxFQXpEZSw0QkFUTixBQTZDVCxpQ0E1Q21CLGFBU00sSUFSekIsK0ZBU3FCLDZGQUNKLGVBQ0csa0JBQ1QsU0FDWCIsImZpbGUiOiIvaG9tZS93YWphcmkvZGV2L2Jsb2ctbmV4dC9zdHlsZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuXG4vLyBJbiBhbiBhdHRlbXB0IHRvIGtlZXAgYWxsIGNvbmZpZ3VyYXRpb24gaW4gb25lIHBsYWNlLCBjc3MgdmFyaWFibGVzXG4vLyBhcmUgY3VycmVudGx5IHN0b3JlZCBpbiBjb25maWcueW1sLiBNb3ZlIHRoZXNlIHZhcmlhYmxlcyBpbnRvIGFcbi8vIHZhcmlhYmxlcyBmaWxlIGluIHRoaXMgc3R5bGUvIGRpcmVjdG9yeSBpZiB0aGF0IGlzIHlvdXIgcHJlZmVyZW5jZS5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnLnltbFwiO1xuXG4vLyB1c2VkIGluIHBhZ2VzL2Fib3V0LmpzLCBwYWdlcy9pbmRleC5qc1xuZXhwb3J0IGNvbnN0IGNlbnRlcmVkUGFnZVN0eWxlcyA9IGNzc2BcbiAgLmNlbnRlcmVkLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIHdpZHRoOiA5OHZ3O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuLy8gdXNlZCBpbiBfYXBwLmpzXG5leHBvcnQgY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzLmdsb2JhbGBcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVm9sbGtvcm5cIiwgc2VyaWY7XG4gICAgZm9udC1kaXNwbGF5OiBhdXRvOyAvKiBJbXBvcnRhbnQgZm9yIHBlcmZvcm1hbmNlICovXG4gICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL3ZvbGxrb3JuLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBodG1sIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgfVxuICBib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke2NvbmZpZy5jc3MuYmxhY2t9O1xuICB9XG4gICNfX25leHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5mb290ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAke2NvbmZpZy5jc3MubGlnaHRHcmF5fTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgc3Ryb25nLFxuICBoMSxcbiAgaDEgPiAqLFxuICBoMixcbiAgaDIgPiAqLFxuICBoMyxcbiAgaDMgPiAqLFxuICBoNCxcbiAgaDQgPiAqLFxuICBoNSxcbiAgaDUgPiAqLFxuICBoNixcbiAgaDYgPiAqIHtcbiAgICBmb250LWZhbWlseTogXCJWb2xsa29yblwiLCBzZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5hY2NlbnRDb2xvcn07XG4gIH1cbiAgLnNlYXJjaC1sYXlvdXQsXG4gIC5ibG9nLWxheW91dCxcbiAgLmJsb2ctcG9zdC1saXN0IHtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMjBweCAxMDBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuYmxvZy1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICBpbWcuaW1nLWNlbnRlcmVkIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgfVxuICAuaWNvbi1idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICR7Y29uZmlnLmNzcy5iYWNrZ3JvdW5kQ29sb3J9O1xuICB9XG4gIC5pY29uLWJ1dHRvbi5oYW1idXJnZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogMzsgLyogdGhlIG5hdmlnYXRpb24gbWVudSBpcyB6LWluZGV4OiA0ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtjb25maWcuY3NzLmxpZ2h0R3JheX07XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5hY2NlbnRDb2xvcn07XG4gIH1cbiAgbGFiZWwge1xuICAgIGNvbG9yOiAke2NvbmZpZy5jc3MuYmxhY2t9O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5wb3N0LWRhdGUge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBwLFxuICBwIGEsXG4gIGIsXG4gIGVtLFxuICBzcGFuLFxuICBsaSxcbiAgdWwsXG4gIG9sIHtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDsgLyogVGhpcyBwcmV2ZW50cyBhIGJ1ZyB3aXRoIHRoZSByZWFkaW5nIHByb2dyZXNzIGJhci4gTGVhdmUgdGhpcyBzdHlsZSBoZXJlIHVubGVzcyB5b3UgYXJlIHJlbW92aW5nIHRoZSByZWFkaW5nIHByb2dyZXNzIGJhci4gKi9cbiAgfVxuXG4gIGNvZGUgPiBzcGFuIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7IC8qIG1ha2Ugc3VyZSBjb2RlIGZvbnQgc2l6ZSBpcyBzZXQgaW4gPENvZGVCbG9jayAvPiAqL1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDsgLyogRml4ZXMgY29kZSBibG9jayBzdHlsZSBidWcqL1xuICB9XG5gO1xuIl19 */
/*@ sourceURL=/home/wajari/dev/blog-next/styles/index.js */`);
globalStyles.__hash = "2079466468";

/***/ }),

/***/ "./utils/blog-engine.js":
/*!******************************!*\
  !*** ./utils/blog-engine.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-list */ "./utils/post-list.js");
/* harmony import */ var _page_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-list */ "./utils/page-list.js");


/* harmony default export */ __webpack_exports__["default"] = (async (type = "all") => {
  // these lists are already sorted from newest to oldest
  const [pageList, postList] = await Promise.all([Object(_page_list__WEBPACK_IMPORTED_MODULE_1__["pages"])(), Object(_post_list__WEBPACK_IMPORTED_MODULE_0__["posts"])()]); // after combining the lists, they must be sorted again

  const allData = [...pageList, ...postList];
  const sortedAllData = allData.sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch).reverse();

  switch (type) {
    case "posts":
      return postList;

    case "pages":
      return pageList;

    case "all":
    default:
      return sortedAllData;
  }
});

/***/ }),

/***/ "./utils/check-for-sw.js":
/*!*******************************!*\
  !*** ./utils/check-for-sw.js ***!
  \*******************************/
/*! exports provided: checkForSW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForSW", function() { return checkForSW; });
function checkForSW() {
  if ("serviceWorker" in navigator && "caches" in window) {
    setTimeout(async () => {
      navigator.serviceWorker.register("../my-worker.js").then(registration => {
        console.log("[ServiceWorker] _app.js service worker registration successful", registration);
        return true;
      }).catch(err => {
        console.warn("[ServiceWorker] _app.js service worker registration failed", err.message);
        return false;
      });
    }, 0);
  }

  return false;
}

/***/ }),

/***/ "./utils/formatters.js":
/*!*****************************!*\
  !*** ./utils/formatters.js ***!
  \*****************************/
/*! exports provided: formatSEODate, formatDisplayDate, getSecondsSinceEpoch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatSEODate", function() { return formatSEODate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDisplayDate", function() { return formatDisplayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecondsSinceEpoch", function() { return getSecondsSinceEpoch; });
function formatSEODate(dateString, dateModified = false) {
  if (!dateString && dateModified) {
    return "";
  }

  return dateString ? new Date(dateString).toISOString() : new Date().toISOString();
}
function formatDisplayDate(dateString) {
  return new Date(dateString).toGMTString().replace(" 00:00:00 GMT", "");
}
function getSecondsSinceEpoch(dateString) {
  return new Date(dateString).getTime() / 1000;
}

/***/ }),

/***/ "./utils/get-post-data.js":
/*!********************************!*\
  !*** ./utils/get-post-data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blog_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-engine */ "./utils/blog-engine.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (router) {
  if (!router) return; // get the content component's file name from the router path

  const splitRoute = router.route.split("/");
  let compName = splitRoute.length > 0 ? splitRoute[splitRoute.length - 1] : null; // for the root path, we want index.js file

  compName = router.pathname == "/" ? "index" : compName; // get page data based on file name

  let allPageData;

  try {
    allPageData = await Object(_blog_engine__WEBPACK_IMPORTED_MODULE_0__["default"])();
  } catch (error) {
    console.log(`Error getting post and page lists: ${error}`);
  }

  const postData = allPageData.filter(component => component.name == compName);
  return Promise.resolve(postData[0]);
});

/***/ }),

/***/ "./utils/page-list.js":
/*!****************************!*\
  !*** ./utils/page-list.js ***!
  \****************************/
/*! exports provided: pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatters */ "./utils/formatters.js");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // _app.js and _document.js are next.js specific files, and should be ignored
// the blog directory is ignored here, but is processed in post-list.js

const ignoreList = ["_app.js", "_document.js", "blog"];

const pageFileNames = () => {
  const allPageFileNames = ["_app.js", "_document.js", "about.js", "blog", "blog.js", "index.mdx", "search.js"] || false;
  const filteredFileNames = allPageFileNames.filter(name => !name || !ignoreList.includes(name));
  return Promise.resolve(filteredFileNames);
};

const createPageList = fileNameList => {
  return fileNameList.reduce((collection, name) => {
    // These are properties we want to extract from the file's meta export.
    // This data is returned is added to the `collection` array below.
    const {
      default: Component
    } = __webpack_require__("./pages sync recursive ^\\.\\/.*$")(`./${name}`);

    const _require$meta = __webpack_require__("./pages sync recursive ^\\.\\/.*$")(`./${name}`).meta,
          {
      title,
      tags,
      layout,
      publishDate,
      modifiedDate,
      seoDescription,
      hideProgressBar = false // any extra properties a page may have

    } = _require$meta,
          moreMeta = _objectWithoutProperties(_require$meta, ["title", "tags", "layout", "publishDate", "modifiedDate", "seoDescription", "hideProgressBar"]); // remove the extension from the file name to make a component name string


    let cleaned_name = name.split(".")[0]; // format dates for SEO, but preserve publishDate as the latter is
    // displayed on the blog post. Currently not displaying modifiedDate, but
    // preserving it for possible future use.

    const formattedPublishDate = Object(_formatters__WEBPACK_IMPORTED_MODULE_0__["formatSEODate"])(publishDate);
    const formattedModifiedDate = Object(_formatters__WEBPACK_IMPORTED_MODULE_0__["formatSEODate"])(modifiedDate, true); // This is used to sort pages/posts

    const secondsSinceEpoch = Object(_formatters__WEBPACK_IMPORTED_MODULE_0__["getSecondsSinceEpoch"])(formattedPublishDate); // data that is returned for each page

    collection.push(_objectSpread({
      Component,
      title,
      tags,
      layout,
      publishDate,
      formattedPublishDate,
      modifiedDate,
      formattedModifiedDate,
      seoDescription,
      urlPath: `/${cleaned_name === "index" ? "" : cleaned_name}`,
      canonicalUrl: `${_config_config_yml__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl}/${cleaned_name === "index" ? "" : cleaned_name}`,
      hideProgressBar,
      name: cleaned_name,
      type: "page",
      secondsSinceEpoch
    }, moreMeta));
    return collection;
  }, []);
};

function pages() {
  return pageFileNames().then(fileNameList => {
    const pageList = createPageList(fileNameList);
    const sortedList = pageList.sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch).reverse();
    return sortedList;
  }).catch(error => console.log("Error creating pageList", error));
}

/***/ }),

/***/ "./utils/post-list.js":
/*!****************************!*\
  !*** ./utils/post-list.js ***!
  \****************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatters */ "./utils/formatters.js");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const postFileNames = () => {
  const postFileNames = ["blog-react.mdx", "post-four-link-on-twitter.mdx", "post-one-code-block-demo.mdx", "post-three-smooth-scroll-and-reading-progress-bar.mdx", "post-two-image-demo.mdx"] || false;
  return Promise.resolve(postFileNames);
};

const createPostList = fileNameList => {
  return fileNameList.reduce((collection, name) => {
    // These are properties we want to extract from the file's meta export.
    // This data is returned is added to the `collection` array below.
    const {
      default: Component
    } = __webpack_require__("./pages/blog sync recursive ^\\.\\/.*$")(`./${name}`);

    const _require$meta = __webpack_require__("./pages/blog sync recursive ^\\.\\/.*$")(`./${name}`).meta,
          {
      title,
      tags,
      layout,
      publishDate,
      modifiedDate,
      seoDescription,
      hideProgressBar = false,
      exclude = false // any extra properties a post may have

    } = _require$meta,
          moreMeta = _objectWithoutProperties(_require$meta, ["title", "tags", "layout", "publishDate", "modifiedDate", "seoDescription", "hideProgressBar", "exclude"]);

    if (exclude) return collection; // remove the extension from the file name to make a component name string

    const cleaned_name = name.split(".")[0]; // format dates for SEO, but preserve publishDate as the latter is
    // displayed on the blog post. Currently not displaying modifiedDate, but
    // preserving it for possible future use.

    const formattedPublishDate = Object(_formatters__WEBPACK_IMPORTED_MODULE_0__["formatSEODate"])(publishDate);
    const formattedModifiedDate = Object(_formatters__WEBPACK_IMPORTED_MODULE_0__["formatSEODate"])(modifiedDate, true); // This is used to sort pages/posts

    const secondsSinceEpoch = Object(_formatters__WEBPACK_IMPORTED_MODULE_0__["getSecondsSinceEpoch"])(formattedPublishDate); // data that is returned for each page

    collection.push(_objectSpread({
      Component,
      title,
      tags,
      layout,
      publishDate,
      formattedPublishDate,
      modifiedDate,
      formattedModifiedDate,
      seoDescription,
      exclude,
      urlPath: `/${cleaned_name}`,
      fullUrlPath: `/blog/${cleaned_name}`,
      canonicalUrl: `${_config_config_yml__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl}/${cleaned_name}`,
      hideProgressBar,
      name: cleaned_name,
      type: "post",
      secondsSinceEpoch
    }, moreMeta));
    return collection;
  }, []);
};

function posts() {
  return postFileNames().then(fileNameList => {
    const postList = createPostList(fileNameList);
    const sortedList = postList.sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch).reverse();
    return sortedList;
  }).catch(error => console.log("Error creating postList", error));
}

/***/ }),

/***/ "./utils/render-app-layout.js":
/*!************************************!*\
  !*** ./utils/render-app-layout.js ***!
  \************************************/
/*! exports provided: renderLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLayout", function() { return renderLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_SearchLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/SearchLayout */ "./components/layouts/SearchLayout.js");
/* harmony import */ var _components_layouts_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/BlogLayout */ "./components/layouts/BlogLayout.js");
var _jsxFileName = "/home/wajari/dev/blog-next/utils/render-app-layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function renderLayout(props, state) {
  const {
    Component
  } = props;
  const {
    postData
  } = state;
  const {
    layout
  } = postData;
  if (!layout || !props.router) return;

  switch (layout) {
    case "post":
      return __jsx(_components_layouts_BlogLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }
      }, __jsx(Component, _extends({}, props, {
        postData: postData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }
      })));

    case "search":
      return __jsx(_components_layouts_SearchLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      }, __jsx(Component, _extends({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }
      })));

    case "blog-post-list":
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, __jsx(Component, _extends({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }
      })));

    case "page":
    default:
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      }, __jsx(Component, _extends({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      })));
  }
}

/***/ }),

/***/ "./utils/seo.js":
/*!**********************!*\
  !*** ./utils/seo.js ***!
  \**********************/
/*! exports provided: articleSEO, createSEOConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleSEO", function() { return articleSEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSEOConfig", function() { return createSEOConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wajari/dev/blog-next/utils/seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function articleSEO(postData) {
  if (!postData) return;
  const description = postData.seoDescription ? postData.seoDescription : _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].siteDescription;
  return __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["ArticleJsonLd"], {
    url: postData.canonicalUrl,
    title: postData.title,
    images: [_config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].websiteLogo],
    datePublished: postData.formattedPublishDate,
    dateModified: postData.formattedModifiedDate,
    authorName: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].author,
    publisherName: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].author,
    publisherLogo: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].websiteLogo,
    description: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  });
}
function createSEOConfig(data) {
  if (!data) return;
  const description = data.seoDescription ? data.seoDescription : _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].siteDescription;
  return {
    title: data.title,
    description: description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: data.canonicalUrl,
      title: data.title,
      description: description,
      images: [{
        url: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].websiteLogo,
        width: 280,
        height: 280,
        alt: "Demo image for Next.js MDX Blog kit"
      }],
      site_name: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].siteName
    },
    twitter: {
      handle: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].twitterHandle,
      site: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].twitterHandle,
      cardType: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].twitterCardType
    }
  }; // defaultImageHeight: 500, // defaultImageWidth: 500,
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-syntax-highlighter/prism":
/*!*************************************************!*\
  !*** external "react-syntax-highlighter/prism" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/prism");

/***/ }),

/***/ "react-syntax-highlighter/styles/prism":
/*!********************************************************!*\
  !*** external "react-syntax-highlighter/styles/prism" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/styles/prism");

/***/ }),

/***/ "scrollprogress":
/*!*********************************!*\
  !*** external "scrollprogress" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("scrollprogress");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map