webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./code-snippets/CodeBlocks.js":
/*!*************************************!*\
  !*** ./code-snippets/CodeBlocks.js ***!
  \*************************************/
/*! exports provided: CodeBlockJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlockJS", function() { return CodeBlockJS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter_prism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter/prism */ "./node_modules/react-syntax-highlighter/prism.js");
/* harmony import */ var react_syntax_highlighter_prism__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_prism__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/styles/prism */ "./node_modules/react-syntax-highlighter/styles/prism/index.js");
/* harmony import */ var react_syntax_highlighter_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_styles_prism__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/wajari/dev/blog-next/code-snippets/CodeBlocks.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var CodeBlockJS = function CodeBlockJS(props) {
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
    __self: _this,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CodeBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CodeBlocks */ "./code-snippets/CodeBlocks.js");
var _this = undefined,
    _jsxFileName = "/home/wajari/dev/blog-next/code-snippets/post-one/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // (1) If you need to use backticks within the template string below,
// you must escapte them with a backslash like so: \` .
// (2) If you're using ${} to interpolate variables, you also must
// escape the dollar sign like so: \${varName}.

var escapedBackticksCodeString = "function sayHello(name) {\n  return `Hello ${ name }`;\n}";
var EscapedBackticksCode = function EscapedBackticksCode() {
  return __jsx(_CodeBlocks__WEBPACK_IMPORTED_MODULE_1__["CodeBlockJS"], {
    code: escapedBackticksCodeString,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  });
};
var codeString = "import React, { Component } from 'react';   \nimport FormContainer from './containers/FormContainer';\n\nclass App extends Component {  \n  render() {\n    return (\n      <div className=\"container\">\n        <div className=\"columns\">\n          <div className=\"col-md-9 centered\">\n            <h3>React.js Controlled Form Components</h3>\n            <FormContainer />\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default App;";
var DemoCode = function DemoCode() {
  return __jsx(_CodeBlocks__WEBPACK_IMPORTED_MODULE_1__["CodeBlockJS"], {
    code: codeString,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  });
};

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/character-entities-legacy/index.json":
/*!***********************************************************!*\
  !*** ./node_modules/character-entities-legacy/index.json ***!
  \***********************************************************/
/*! exports provided: AElig, AMP, Aacute, Acirc, Agrave, Aring, Atilde, Auml, COPY, Ccedil, ETH, Eacute, Ecirc, Egrave, Euml, GT, Iacute, Icirc, Igrave, Iuml, LT, Ntilde, Oacute, Ocirc, Ograve, Oslash, Otilde, Ouml, QUOT, REG, THORN, Uacute, Ucirc, Ugrave, Uuml, Yacute, aacute, acirc, acute, aelig, agrave, amp, aring, atilde, auml, brvbar, ccedil, cedil, cent, copy, curren, deg, divide, eacute, ecirc, egrave, eth, euml, frac12, frac14, frac34, gt, iacute, icirc, iexcl, igrave, iquest, iuml, laquo, lt, macr, micro, middot, nbsp, not, ntilde, oacute, ocirc, ograve, ordf, ordm, oslash, otilde, ouml, para, plusmn, pound, quot, raquo, reg, sect, shy, sup1, sup2, sup3, szlig, thorn, times, uacute, ucirc, ugrave, uml, uuml, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AElig\":\"Æ\",\"AMP\":\"&\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Agrave\":\"À\",\"Aring\":\"Å\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"COPY\":\"©\",\"Ccedil\":\"Ç\",\"ETH\":\"Ð\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Egrave\":\"È\",\"Euml\":\"Ë\",\"GT\":\">\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Igrave\":\"Ì\",\"Iuml\":\"Ï\",\"LT\":\"<\",\"Ntilde\":\"Ñ\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Ograve\":\"Ò\",\"Oslash\":\"Ø\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"QUOT\":\"\\\"\",\"REG\":\"®\",\"THORN\":\"Þ\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Ugrave\":\"Ù\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"aacute\":\"á\",\"acirc\":\"â\",\"acute\":\"´\",\"aelig\":\"æ\",\"agrave\":\"à\",\"amp\":\"&\",\"aring\":\"å\",\"atilde\":\"ã\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"egrave\":\"è\",\"eth\":\"ð\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"iacute\":\"í\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"ntilde\":\"ñ\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"oslash\":\"ø\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"thorn\":\"þ\",\"times\":\"×\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "./node_modules/character-reference-invalid/index.json":
/*!*************************************************************!*\
  !*** ./node_modules/character-reference-invalid/index.json ***!
  \*************************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"�\",\"128\":\"€\",\"130\":\"‚\",\"131\":\"ƒ\",\"132\":\"„\",\"133\":\"…\",\"134\":\"†\",\"135\":\"‡\",\"136\":\"ˆ\",\"137\":\"‰\",\"138\":\"Š\",\"139\":\"‹\",\"140\":\"Œ\",\"142\":\"Ž\",\"145\":\"‘\",\"146\":\"’\",\"147\":\"“\",\"148\":\"”\",\"149\":\"•\",\"150\":\"–\",\"151\":\"—\",\"152\":\"˜\",\"153\":\"™\",\"154\":\"š\",\"155\":\"›\",\"156\":\"œ\",\"158\":\"ž\",\"159\":\"Ÿ\"}");

/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var comma = ','
var space = ' '
var empty = ''

// Parse comma-separated tokens to an array.
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = input.slice(lastIndex, index).trim()

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

// Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return values.join(right + comma + left).trim()
}


/***/ }),

/***/ "./node_modules/hast-util-parse-selector/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse

var numberSign = 35 //  '#'
var dot = 46 //  '.'

// Create a hast element from a simple CSS selector.
function parse(selector, defaultTagName) {
  var value = selector || ''
  var name = defaultTagName || 'div'
  var props = {}
  var index = -1
  var length = value.length
  var className
  var type
  var code
  var subvalue
  var lastIndex

  while (++index <= length) {
    code = value.charCodeAt(index)

    if (!code || code === dot || code === numberSign) {
      subvalue = value.slice(lastIndex, index)

      if (subvalue) {
        if (type === dot) {
          // eslint-disable-next-line max-depth
          if (className) {
            className.push(subvalue)
          } else {
            className = [subvalue]
            props.className = className
          }
        } else if (type === numberSign) {
          props.id = subvalue
        } else {
          name = subvalue
        }
      }

      lastIndex = index + 1
      type = code
    }
  }

  return {
    type: 'element',
    tagName: name,
    properties: props,
    children: []
  }
}


/***/ }),

/***/ "./node_modules/hastscript/factory.js":
/*!********************************************!*\
  !*** ./node_modules/hastscript/factory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var find = __webpack_require__(/*! property-information/find */ "./node_modules/property-information/find.js")
var normalize = __webpack_require__(/*! property-information/normalize */ "./node_modules/property-information/normalize.js")
var parseSelector = __webpack_require__(/*! hast-util-parse-selector */ "./node_modules/hast-util-parse-selector/index.js")
var spaces = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js").parse
var commas = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js").parse

module.exports = factory

var own = {}.hasOwnProperty

function factory(schema, defaultTagName, caseSensitive) {
  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null

  return h

  // Hyperscript compatible DSL for creating virtual hast trees.
  function h(selector, properties) {
    var node = parseSelector(selector, defaultTagName)
    var children = Array.prototype.slice.call(arguments, 2)
    var name = node.tagName.toLowerCase()
    var property

    node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name

    if (properties && isChildren(properties, node)) {
      children.unshift(properties)
      properties = null
    }

    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property])
      }
    }

    addChild(node.children, children)

    if (node.tagName === 'template') {
      node.content = {type: 'root', children: node.children}
      node.children = []
    }

    return node
  }

  function addProperty(properties, key, value) {
    var info
    var property
    var result

    // Ignore nully and NaN values.
    if (value === null || value === undefined || value !== value) {
      return
    }

    info = find(schema, key)
    property = info.property
    result = value

    // Handle list values.
    if (typeof result === 'string') {
      if (info.spaceSeparated) {
        result = spaces(result)
      } else if (info.commaSeparated) {
        result = commas(result)
      } else if (info.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(' '))
      }
    }

    // Accept `object` on style.
    if (property === 'style' && typeof value !== 'string') {
      result = style(result)
    }

    // Class-names (which can be added both on the `selector` and here).
    if (property === 'className' && properties.className) {
      result = properties.className.concat(result)
    }

    properties[property] = parsePrimitives(info, property, result)
  }
}

function isChildren(value, node) {
  return (
    typeof value === 'string' ||
    'length' in value ||
    isNode(node.tagName, value)
  )
}

function isNode(tagName, value) {
  var type = value.type

  if (tagName === 'input' || !type || typeof type !== 'string') {
    return false
  }

  if (typeof value.children === 'object' && 'length' in value.children) {
    return true
  }

  type = type.toLowerCase()

  if (tagName === 'button') {
    return (
      type !== 'menu' &&
      type !== 'submit' &&
      type !== 'reset' &&
      type !== 'button'
    )
  }

  return 'value' in value
}

function addChild(nodes, value) {
  var index
  var length

  if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({type: 'text', value: String(value)})
    return
  }

  if (typeof value === 'object' && 'length' in value) {
    index = -1
    length = value.length

    while (++index < length) {
      addChild(nodes, value[index])
    }

    return
  }

  if (typeof value !== 'object' || !('type' in value)) {
    throw new Error('Expected node, nodes, or string, got `' + value + '`')
  }

  nodes.push(value)
}

// Parse a (list of) primitives.
function parsePrimitives(info, name, value) {
  var index
  var length
  var result

  if (typeof value !== 'object' || !('length' in value)) {
    return parsePrimitive(info, name, value)
  }

  length = value.length
  index = -1
  result = []

  while (++index < length) {
    result[index] = parsePrimitive(info, name, value[index])
  }

  return result
}

// Parse a single primitives.
function parsePrimitive(info, name, value) {
  var result = value

  if (info.number || info.positiveNumber) {
    if (!isNaN(result) && result !== '') {
      result = Number(result)
    }
  } else if (info.boolean || info.overloadedBoolean) {
    // Accept `boolean` and `string`.
    if (
      typeof result === 'string' &&
      (result === '' || normalize(value) === normalize(name))
    ) {
      result = true
    }
  }

  return result
}

function style(value) {
  var result = []
  var key

  for (key in value) {
    result.push([key, value[key]].join(': '))
  }

  return result.join('; ')
}

function createAdjustMap(values) {
  var length = values.length
  var index = -1
  var result = {}
  var value

  while (++index < length) {
    value = values[index]
    result[value.toLowerCase()] = value
  }

  return result
}


/***/ }),

/***/ "./node_modules/hastscript/html.js":
/*!*****************************************!*\
  !*** ./node_modules/hastscript/html.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var schema = __webpack_require__(/*! property-information/html */ "./node_modules/property-information/html.js")
var factory = __webpack_require__(/*! ./factory */ "./node_modules/hastscript/factory.js")

var html = factory(schema, 'div')
html.displayName = 'html'

module.exports = html


/***/ }),

/***/ "./node_modules/hastscript/index.js":
/*!******************************************!*\
  !*** ./node_modules/hastscript/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./html */ "./node_modules/hastscript/html.js")


/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical

// Check if the given character code, or the character code at the first
// character, is alphabetical.
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal

// Check if the given character code, or the character code at the first
// character, is decimal.
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal

// Check if the given character code, or the character code at the first
// character, is hexadecimal.
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/parse-entities/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-entities/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var legacy = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.json")
var invalid = __webpack_require__(/*! character-reference-invalid */ "./node_modules/character-reference-invalid/index.json")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js")
var decodeEntity = __webpack_require__(/*! ./decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js")

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

// Default settings.
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

// Characters.
var tab = 9 // '\t'
var lineFeed = 10 // '\n'
var formFeed = 12 //  '\f'
var space = 32 // ' '
var ampersand = 38 //  '&'
var semicolon = 59 //  ';'
var lessThan = 60 //  '<'
var equalsTo = 61 //  '='
var numberSign = 35 //  '#'
var uppercaseX = 88 //  'X'
var lowercaseX = 120 //  'x'
var replacementCharacter = 65533 // '�'

// Reference types.
var name = 'named'
var hexa = 'hexadecimal'
var deci = 'decimal'

// Map of bases.
var bases = {}

bases[hexa] = 16
bases[deci] = 10

// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var tests = {}

tests[name] = alphanumerical
tests[deci] = decimal
tests[hexa] = hexadecimal

// Warning types.
var namedNotTerminated = 1
var numericNotTerminated = 2
var namedEmpty = 3
var numericEmpty = 4
var namedUnknown = 5
var numericDisallowed = 6
var numericProhibited = 7

// Warning messages.
var messages = {}

messages[namedNotTerminated] =
  'Named character references must be terminated by a semicolon'
messages[numericNotTerminated] =
  'Numeric character references must be terminated by a semicolon'
messages[namedEmpty] = 'Named character references cannot be empty'
messages[numericEmpty] = 'Numeric character references cannot be empty'
messages[namedUnknown] = 'Named character references must be known'
messages[numericDisallowed] =
  'Numeric character references cannot be disallowed'
messages[numericProhibited] =
  'Numeric character references cannot be outside the permissible Unicode range'

// Wrap to ensure clean parameters are given to `parse`.
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

// Parse entities.
// eslint-disable-next-line complexity
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0)
  }

  // Cache the current point.
  prev = now()

  // Wrap `handleWarning`.
  warning = handleWarning ? parseError : noop

  // Ensure the algorithm walks over the first character and the end (inclusive).
  index--
  length++

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1
    }

    character = value.charCodeAt(index)

    if (character === ampersand) {
      following = value.charCodeAt(index + 1)

      // The behaviour depends on the identity of the next character.
      if (
        following === tab ||
        following === lineFeed ||
        following === formFeed ||
        following === space ||
        following === ampersand ||
        following === lessThan ||
        following !== following ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin

        // The behaviour further depends on the next character.
        following = value.charCodeAt(end)

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa
          end = ++begin
        } else {
          // ASCII digits.
          type = deci
        }
      } else {
        // Named entity.
        type = name
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = tests[type]
      end--

      while (++end < length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = value.charCodeAt(end) === semicolon

      if (terminated) {
        end++

        namedEntity = type === name ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff)
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty

            if (settings.attribute) {
              following = value.charCodeAt(end)

              if (following === equalsTo) {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff)
        }

        // When terminated and number, parse as either hexadecimal or decimal.
        reference = parseInt(characters, bases[type])

        // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.
        if (prohibited(reference)) {
          warning(numericProhibited, diff)
          reference = fromCharCode(replacementCharacter)
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff)
          reference = invalid[reference]
        } else {
          // Parse the number.
          output = ''

          // Trigger a warning when the parsed number should not be used.
          if (disallowed(reference)) {
            warning(numericDisallowed, diff)
          }

          // Stringify the number.
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat an entity.
      if (reference) {
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (
        character === 10 // Line feed
      ) {
        line++
        lines++
        column = 0
      }

      if (character === character) {
        queue += fromCharCode(character)
        column++
      } else {
        flush()
      }
    }
  }

  // Return the reduced nodes, and any possible warnings.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  // “Throw” a parse-error: a warning.
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, messages[code], position, code)
  }

  // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

// Check if `character` is outside the permissible unicode range.
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

// Check if `character` is disallowed.
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "./node_modules/prismjs/components/prism-core.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		var elements = container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = 'none', grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,'none'])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		var insertHighlightedCode = function (highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
}

Token.stringify = function(o, language) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/property-information/find.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/find.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! ./normalize */ "./node_modules/property-information/normalize.js")
var DefinedInfo = __webpack_require__(/*! ./lib/util/defined-info */ "./node_modules/property-information/lib/util/defined-info.js")
var Info = __webpack_require__(/*! ./lib/util/info */ "./node_modules/property-information/lib/util/info.js")

var data = 'data'

module.exports = find

var valid = /^data[-a-z0-9.:_]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/html.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/html.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var html = __webpack_require__(/*! ./lib/html */ "./node_modules/property-information/lib/html.js")

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caseSensitiveTransform = __webpack_require__(/*! ./case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! ../../normalize */ "./node_modules/property-information/normalize.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")
var DefinedInfo = __webpack_require__(/*! ./defined-info */ "./node_modules/property-information/lib/util/defined-info.js")

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Info = __webpack_require__(/*! ./info */ "./node_modules/property-information/lib/util/info.js")
var types = __webpack_require__(/*! ./types */ "./node_modules/property-information/lib/util/types.js")

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

var checks = [
  'boolean',
  'booleanish',
  'overloadedBoolean',
  'number',
  'commaSeparated',
  'spaceSeparated',
  'commaOrSpaceSeparated'
]
var checksLength = checks.length

function DefinedInfo(property, attribute, mask, space) {
  var index = -1
  var check

  mark(this, 'space', space)

  Info.call(this, property, attribute)

  while (++index < checksLength) {
    check = checks[index]
    mark(this, check, (mask & types[check]) === types[check])
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/normalize.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/normalize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/react-syntax-highlighter/create-element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/create-element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.createStyleObject = createStyleObject;
exports.createClassNameString = createClassNameString;
exports.createChildren = createChildren;
exports.default = createElement;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments[2];

  return classNames.reduce(function (styleObject, className) {
    return (0, _extends3.default)({}, styleObject, stylesheet[className]);
  }, elementStyle);
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: 'code-segment-' + childrenCount + '-' + i
      });
    });
  };
}

function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var nonStylesheetClassNames = useInlineStyles && properties.className && properties.className.filter(function (className) {
      return !stylesheet[className];
    });
    var className = nonStylesheetClassNames && nonStylesheetClassNames.length ? nonStylesheetClassNames : undefined;
    var props = useInlineStyles ? (0, _extends3.default)({}, properties, { className: className }, {
      style: createStyleObject(properties.className, (0, _assign2.default)({}, properties.style, style), stylesheet)
    }) : (0, _extends3.default)({}, properties, { className: createClassNameString(properties.className) });
    var children = childrenCreator(node.children);
    return _react2.default.createElement(
      TagName,
      (0, _extends3.default)({ key: key }, props),
      children
    );
  }
}

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/highlight.js":
/*!************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/highlight.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

exports.default = function (defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref6) {
    var language = _ref6.language,
        children = _ref6.children,
        _ref6$style = _ref6.style,
        style = _ref6$style === undefined ? defaultStyle : _ref6$style,
        _ref6$customStyle = _ref6.customStyle,
        customStyle = _ref6$customStyle === undefined ? {} : _ref6$customStyle,
        _ref6$codeTagProps = _ref6.codeTagProps,
        codeTagProps = _ref6$codeTagProps === undefined ? { style: style['code[class*=\"language-\"]'] } : _ref6$codeTagProps,
        _ref6$useInlineStyles = _ref6.useInlineStyles,
        useInlineStyles = _ref6$useInlineStyles === undefined ? true : _ref6$useInlineStyles,
        _ref6$showLineNumbers = _ref6.showLineNumbers,
        showLineNumbers = _ref6$showLineNumbers === undefined ? false : _ref6$showLineNumbers,
        _ref6$startingLineNum = _ref6.startingLineNumber,
        startingLineNumber = _ref6$startingLineNum === undefined ? 1 : _ref6$startingLineNum,
        lineNumberContainerStyle = _ref6.lineNumberContainerStyle,
        lineNumberStyle = _ref6.lineNumberStyle,
        wrapLines = _ref6.wrapLines,
        _ref6$lineProps = _ref6.lineProps,
        lineProps = _ref6$lineProps === undefined ? {} : _ref6$lineProps,
        renderer = _ref6.renderer,
        _ref6$PreTag = _ref6.PreTag,
        PreTag = _ref6$PreTag === undefined ? 'pre' : _ref6$PreTag,
        _ref6$CodeTag = _ref6.CodeTag,
        CodeTag = _ref6$CodeTag === undefined ? 'code' : _ref6$CodeTag,
        _ref6$code = _ref6.code,
        code = _ref6$code === undefined ? Array.isArray(children) ? children[0] : children : _ref6$code,
        astGenerator = _ref6.astGenerator,
        rest = (0, _objectWithoutProperties3.default)(_ref6, ['language', 'children', 'style', 'customStyle', 'codeTagProps', 'useInlineStyles', 'showLineNumbers', 'startingLineNumber', 'lineNumberContainerStyle', 'lineNumberStyle', 'wrapLines', 'lineProps', 'renderer', 'PreTag', 'CodeTag', 'code', 'astGenerator']);

    astGenerator = astGenerator || defaultAstGenerator;

    var lineNumbers = showLineNumbers ? _react2.default.createElement(LineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;

    var defaultPreStyle = style.hljs || style['pre[class*=\"language-\"]'] || { backgroundColor: '#fff' };
    var preProps = useInlineStyles ? (0, _assign2.default)({}, rest, { style: (0, _assign2.default)({}, defaultPreStyle, customStyle) }) : (0, _assign2.default)({}, rest, { className: 'hljs' });

    if (!astGenerator) {
      return _react2.default.createElement(
        PreTag,
        preProps,
        lineNumbers,
        _react2.default.createElement(
          CodeTag,
          codeTagProps,
          code
        )
      );
    }

    /* 
     * some custom renderers rely on individual row elements so we need to turn wrapLines on 
     * if renderer is provided and wrapLines is undefined
    */
    wrapLines = renderer && wrapLines === undefined ? true : wrapLines;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{ type: 'text', value: code }];
    var codeTree = getCodeTree({ astGenerator: astGenerator, language: language, code: code, defaultCodeValue: defaultCodeValue });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }

    var tree = wrapLines ? wrapLinesInSpan(codeTree, lineProps) : codeTree.value;

    return _react2.default.createElement(
      PreTag,
      preProps,
      lineNumbers,
      _react2.default.createElement(
        CodeTag,
        codeTagProps,
        renderer({ rows: tree, stylesheet: style, useInlineStyles: useInlineStyles })
      )
    );
  };
};

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _createElement = __webpack_require__(/*! ./create-element */ "./node_modules/react-syntax-highlighter/create-element.js");

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}

function getLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;

  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return _react2.default.createElement(
      'span',
      {
        key: 'line-' + i,
        className: 'react-syntax-highlighter-line-number',
        style: typeof style === 'function' ? style(number) : style
      },
      number + '\n'
    );
  });
}

function LineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      codeStyle = _ref2.codeStyle,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === undefined ? { float: 'left', paddingRight: '10px' } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === undefined ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;

  return _react2.default.createElement(
    'code',
    { style: (0, _assign2.default)({}, codeStyle, containerStyle) },
    getLineNumbers({
      lines: codeString.replace(/\n$/, '').split('\n'),
      style: numberStyle,
      startingLineNumber: startingLineNumber
    })
  );
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineProps = _ref3.lineProps,
      _ref3$className = _ref3.className,
      className = _ref3$className === undefined ? [] : _ref3$className;

  var properties = (typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps) || {};
  properties.className = properties.className ? className.concat(properties.className) : className;
  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: className
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }
  return newTree;
}

function wrapLinesInSpan(codeTree, lineProps) {
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = newTree.length + 1;
        var newChild = { type: 'text', value: text + '\n' };
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({ children: [newChild], className: node.properties.className }));
          newTree.push(createLineElement({ children: _children, lineNumber: lineNumber, lineProps: lineProps }));
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          if (stringChild) {
            var lastLineInPreviousSpan = { type: 'text', value: '' + text };
            var newElem = createLineElement({ children: [lastLineInPreviousSpan], className: node.properties.className });
            tree.splice(index + 1, 0, newElem);
          } else {
            newTree.push(createLineElement({ children: [newChild], lineNumber: lineNumber, lineProps: lineProps, className: node.properties.className }));
          }
        } else {
          newTree.push(createLineElement({ children: [newChild], lineNumber: lineNumber, lineProps: lineProps, className: node.properties.className }));
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  };

  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      newTree.push(createLineElement({ children: children, lineNumber: newTree.length + 1, lineProps: lineProps }));
    }
  }
  return newTree;
}

function defaultRenderer(_ref4) {
  var rows = _ref4.rows,
      stylesheet = _ref4.stylesheet,
      useInlineStyles = _ref4.useInlineStyles;

  return rows.map(function (node, i) {
    return (0, _createElement2.default)({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: 'code-segement' + i
    });
  });
}

function getCodeTree(_ref5) {
  var astGenerator = _ref5.astGenerator,
      language = _ref5.language,
      code = _ref5.code,
      defaultCodeValue = _ref5.defaultCodeValue;

  if (astGenerator.getLanguage) {
    var hasLanguage = language && astGenerator.getLanguage(language);
    if (language === 'text') {
      return { value: defaultCodeValue, language: 'text' };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== 'text' ? { value: astGenerator.highlight(code, language) } : { value: defaultCodeValue };
  } catch (e) {
    return { value: defaultCodeValue };
  }
}

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/prism.js":
/*!********************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/prism.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _highlight = __webpack_require__(/*! ./highlight */ "./node_modules/react-syntax-highlighter/highlight.js");

var _highlight2 = _interopRequireDefault(_highlight);

var _prism = __webpack_require__(/*! ./styles/prism/prism */ "./node_modules/react-syntax-highlighter/styles/prism/prism.js");

var _prism2 = _interopRequireDefault(_prism);

var _refractor = __webpack_require__(/*! refractor */ "./node_modules/refractor/index.js");

var _refractor2 = _interopRequireDefault(_refractor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _highlight2.default)(_refractor2.default, _prism2.default);

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/atom-dark.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/atom-dark.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#c5c8c6",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#c5c8c6",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "background": "#1d1f21"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#1d1f21",
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#7C7C7C"
    },
    "prolog": {
        "color": "#7C7C7C"
    },
    "doctype": {
        "color": "#7C7C7C"
    },
    "cdata": {
        "color": "#7C7C7C"
    },
    "punctuation": {
        "color": "#c5c8c6"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#96CBFE"
    },
    "keyword": {
        "color": "#96CBFE"
    },
    "tag": {
        "color": "#96CBFE"
    },
    "class-name": {
        "color": "#FFFFB6",
        "textDecoration": "underline"
    },
    "boolean": {
        "color": "#99CC99"
    },
    "constant": {
        "color": "#99CC99"
    },
    "symbol": {
        "color": "#f92672"
    },
    "deleted": {
        "color": "#f92672"
    },
    "number": {
        "color": "#FF73FD"
    },
    "selector": {
        "color": "#A8FF60"
    },
    "attr-name": {
        "color": "#A8FF60"
    },
    "string": {
        "color": "#A8FF60"
    },
    "char": {
        "color": "#A8FF60"
    },
    "builtin": {
        "color": "#A8FF60"
    },
    "inserted": {
        "color": "#A8FF60"
    },
    "variable": {
        "color": "#C6C5FE"
    },
    "operator": {
        "color": "#EDEDED"
    },
    "entity": {
        "color": "#FFFFB6",
        "cursor": "help"
    },
    "url": {
        "color": "#96CBFE"
    },
    ".language-css .token.string": {
        "color": "#87C38A"
    },
    ".style .token.string": {
        "color": "#87C38A"
    },
    "atrule": {
        "color": "#F9EE98"
    },
    "attr-value": {
        "color": "#F9EE98"
    },
    "function": {
        "color": "#DAD085"
    },
    "regex": {
        "color": "#E9C062"
    },
    "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/base16-ateliersulphurpool.light.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/base16-ateliersulphurpool.light.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#f5f7ff",
        "color": "#5e6687"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#f5f7ff",
        "color": "#5e6687",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#898ea4"
    },
    "prolog": {
        "color": "#898ea4"
    },
    "doctype": {
        "color": "#898ea4"
    },
    "cdata": {
        "color": "#898ea4"
    },
    "punctuation": {
        "color": "#5e6687"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "operator": {
        "color": "#c76b29"
    },
    "boolean": {
        "color": "#c76b29"
    },
    "number": {
        "color": "#c76b29"
    },
    "property": {
        "color": "#c08b30"
    },
    "tag": {
        "color": "#3d8fd1"
    },
    "string": {
        "color": "#22a2c9"
    },
    "selector": {
        "color": "#6679cc"
    },
    "attr-name": {
        "color": "#c76b29"
    },
    "entity": {
        "color": "#22a2c9",
        "cursor": "help"
    },
    "url": {
        "color": "#22a2c9"
    },
    ".language-css .token.string": {
        "color": "#22a2c9"
    },
    ".style .token.string": {
        "color": "#22a2c9"
    },
    "attr-value": {
        "color": "#ac9739"
    },
    "keyword": {
        "color": "#ac9739"
    },
    "control": {
        "color": "#ac9739"
    },
    "directive": {
        "color": "#ac9739"
    },
    "unit": {
        "color": "#ac9739"
    },
    "statement": {
        "color": "#22a2c9"
    },
    "regex": {
        "color": "#22a2c9"
    },
    "atrule": {
        "color": "#22a2c9"
    },
    "placeholder": {
        "color": "#3d8fd1"
    },
    "variable": {
        "color": "#3d8fd1"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #202746",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#c94922"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": "0.4em solid #c94922",
        "OutlineOffset": ".4em"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#dfe2f1"
    },
    ".line-numbers-rows > span:before": {
        "color": "#979db4"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/cb.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/cb.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#fff",
        "textShadow": "0 1px 1px #000",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "whiteSpace": "pre",
        "wordWrap": "normal",
        "lineHeight": "1.4",
        "background": "none",
        "border": "0",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#fff",
        "textShadow": "0 1px 1px #000",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "whiteSpace": "pre",
        "wordWrap": "normal",
        "lineHeight": "1.4",
        "background": "#222",
        "border": "0",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "15px",
        "margin": "1em 0",
        "overflow": "auto",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px"
    },
    "pre[class*=\"language-\"] code": {
        "float": "left",
        "padding": "0 15px 0 0"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#222",
        "padding": "5px 10px",
        "lineHeight": "1",
        "MozBorderRadius": "3px",
        "WebkitBorderRadius": "3px",
        "borderRadius": "3px"
    },
    "comment": {
        "color": "#797979"
    },
    "prolog": {
        "color": "#797979"
    },
    "doctype": {
        "color": "#797979"
    },
    "cdata": {
        "color": "#797979"
    },
    "selector": {
        "color": "#fff"
    },
    "operator": {
        "color": "#fff"
    },
    "punctuation": {
        "color": "#fff"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#ffd893"
    },
    "boolean": {
        "color": "#ffd893"
    },
    "atrule": {
        "color": "#B0C975"
    },
    "attr-value": {
        "color": "#B0C975"
    },
    "hex": {
        "color": "#B0C975"
    },
    "string": {
        "color": "#B0C975"
    },
    "property": {
        "color": "#c27628"
    },
    "entity": {
        "color": "#c27628",
        "cursor": "help"
    },
    "url": {
        "color": "#c27628"
    },
    "attr-name": {
        "color": "#c27628"
    },
    "keyword": {
        "color": "#c27628"
    },
    "regex": {
        "color": "#9B71C6"
    },
    "function": {
        "color": "#e5a638"
    },
    "constant": {
        "color": "#e5a638"
    },
    "variable": {
        "color": "#fdfba8"
    },
    "number": {
        "color": "#8799B0"
    },
    "important": {
        "color": "#E45734"
    },
    "deliminator": {
        "color": "#E45734"
    },
    "pre[data-line]": {
        "position": "relative",
        "padding": "1em 0 1em 3em"
    },
    ".line-highlight": {
        "position": "absolute",
        "left": "0",
        "right": "0",
        "marginTop": "1em",
        "background": "rgba(255,255,255,.2)",
        "pointerEvents": "none",
        "lineHeight": "inherit",
        "whiteSpace": "pre"
    },
    ".line-highlight:before": {
        "content": "attr(data-start)",
        "position": "absolute",
        "top": ".3em",
        "left": ".6em",
        "minWidth": "1em",
        "padding": "0 .5em",
        "backgroundColor": "rgba(255,255,255,.3)",
        "color": "#fff",
        "font": "bold 65%/1.5 sans-serif",
        "textAlign": "center",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px",
        "textShadow": "none"
    },
    ".line-highlight[data-end]:after": {
        "content": "attr(data-end)",
        "position": "absolute",
        "top": "auto",
        "left": ".6em",
        "minWidth": "1em",
        "padding": "0 .5em",
        "backgroundColor": "rgba(255,255,255,.3)",
        "color": "#fff",
        "font": "bold 65%/1.5 sans-serif",
        "textAlign": "center",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px",
        "textShadow": "none",
        "bottom": ".4em"
    },
    ".line-numbers-rows": {
        "margin": "0"
    },
    ".line-numbers-rows span": {
        "paddingRight": "10px",
        "borderRight": "3px #d9d336 solid"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/coy.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/coy.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "position": "relative",
        "margin": ".5em 0",
        "overflow": "visible",
        "padding": "0",
        "backgroundColor": "#fdfdfd",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginBottom": "1em"
    },
    "pre[class*=\"language-\"]>code": {
        "position": "relative",
        "borderLeft": "10px solid #358ccb",
        "boxShadow": "-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",
        "backgroundColor": "#fdfdfd",
        "backgroundImage": "linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",
        "backgroundSize": "3em 3em",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "local"
    },
    "code[class*=\"language\"]": {
        "maxHeight": "inherit",
        "height": "inherit",
        "padding": "0 1em",
        "display": "block",
        "overflow": "auto"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "backgroundColor": "#fdfdfd",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginBottom": "1em",
        "position": "relative",
        "padding": ".2em",
        "borderRadius": "0.3em",
        "color": "#c92c2c",
        "border": "1px solid rgba(0, 0, 0, 0.1)",
        "display": "inline",
        "whiteSpace": "normal"
    },
    "pre[class*=\"language-\"]:before": {
        "content": "''",
        "zIndex": "-2",
        "display": "block",
        "position": "absolute",
        "bottom": "0.75em",
        "left": "0.18em",
        "width": "40%",
        "height": "20%",
        "maxHeight": "13em",
        "boxShadow": "0px 13px 8px #979797",
        "WebkitTransform": "rotate(-2deg)",
        "MozTransform": "rotate(-2deg)",
        "msTransform": "rotate(-2deg)",
        "OTransform": "rotate(-2deg)",
        "transform": "rotate(-2deg)"
    },
    "pre[class*=\"language-\"]:after": {
        "content": "''",
        "zIndex": "-2",
        "display": "block",
        "position": "absolute",
        "bottom": "0.75em",
        "left": "auto",
        "width": "40%",
        "height": "20%",
        "maxHeight": "13em",
        "boxShadow": "0px 13px 8px #979797",
        "WebkitTransform": "rotate(2deg)",
        "MozTransform": "rotate(2deg)",
        "msTransform": "rotate(2deg)",
        "OTransform": "rotate(2deg)",
        "transform": "rotate(2deg)",
        "right": "0.75em"
    },
    ":not(pre) > code[class*=\"language-\"]:after": {
        "right": "0.75em",
        "left": "auto",
        "WebkitTransform": "rotate(2deg)",
        "MozTransform": "rotate(2deg)",
        "msTransform": "rotate(2deg)",
        "OTransform": "rotate(2deg)",
        "transform": "rotate(2deg)"
    },
    "comment": {
        "color": "#7D8B99"
    },
    "block-comment": {
        "color": "#7D8B99"
    },
    "prolog": {
        "color": "#7D8B99"
    },
    "doctype": {
        "color": "#7D8B99"
    },
    "cdata": {
        "color": "#7D8B99"
    },
    "punctuation": {
        "color": "#5F6364"
    },
    "property": {
        "color": "#c92c2c"
    },
    "tag": {
        "color": "#c92c2c"
    },
    "boolean": {
        "color": "#c92c2c"
    },
    "number": {
        "color": "#c92c2c"
    },
    "function-name": {
        "color": "#c92c2c"
    },
    "constant": {
        "color": "#c92c2c"
    },
    "symbol": {
        "color": "#c92c2c"
    },
    "deleted": {
        "color": "#c92c2c"
    },
    "selector": {
        "color": "#2f9c0a"
    },
    "attr-name": {
        "color": "#2f9c0a"
    },
    "string": {
        "color": "#2f9c0a"
    },
    "char": {
        "color": "#2f9c0a"
    },
    "function": {
        "color": "#2f9c0a"
    },
    "builtin": {
        "color": "#2f9c0a"
    },
    "inserted": {
        "color": "#2f9c0a"
    },
    "operator": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "entity": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)",
        "cursor": "help"
    },
    "url": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "variable": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "atrule": {
        "color": "#1990b8"
    },
    "attr-value": {
        "color": "#1990b8"
    },
    "keyword": {
        "color": "#1990b8"
    },
    "class-name": {
        "color": "#1990b8"
    },
    "regex": {
        "color": "#e90"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "normal"
    },
    ".language-css .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    ".style .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "tab:not(:empty):before": {
        "color": "#e0d7d1"
    },
    "cr:before": {
        "color": "#e0d7d1"
    },
    "lf:before": {
        "color": "#e0d7d1"
    },
    "pre[class*=\"language-\"].line-numbers": {
        "paddingLeft": "0"
    },
    "pre[class*=\"language-\"].line-numbers code": {
        "paddingLeft": "3.8em"
    },
    "pre[class*=\"language-\"].line-numbers .line-numbers-rows": {
        "left": "0"
    },
    "pre[class*=\"language-\"][data-line]": {
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingLeft": "0"
    },
    "pre[data-line] code": {
        "position": "relative",
        "paddingLeft": "4em"
    },
    "pre .line-highlight": {
        "marginTop": "0"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/darcula.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/darcula.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#a9b7c6",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#a9b7c6",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": "#2b2b2b"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "color": "inherit",
        "background": "rgba(33,66,131,.85)"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "color": "inherit",
        "background": "rgba(33,66,131,.85)"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "color": "inherit",
        "background": "rgba(33,66,131,.85)"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "color": "inherit",
        "background": "rgba(33,66,131,.85)"
    },
    "pre[class*=\"language-\"]::selection": {
        "color": "inherit",
        "background": "rgba(33,66,131,.85)"
    },
    "pre[class*=\"language-\"] ::selection": {
        "color": "inherit",
        "background": "rgba(33,66,131,.85)"
    },
    "code[class*=\"language-\"]::selection": {
        "color": "inherit",
        "background": "rgba(33,66,131,.85)"
    },
    "code[class*=\"language-\"] ::selection": {
        "color": "inherit",
        "background": "rgba(33,66,131,.85)"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#2b2b2b",
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#808080"
    },
    "prolog": {
        "color": "#808080"
    },
    "cdata": {
        "color": "#808080"
    },
    "delimiter": {
        "color": "#cc7832"
    },
    "boolean": {
        "color": "#cc7832"
    },
    "keyword": {
        "color": "#cc7832"
    },
    "selector": {
        "color": "#cc7832"
    },
    "important": {
        "color": "#cc7832"
    },
    "atrule": {
        "color": "#cc7832"
    },
    "operator": {
        "color": "#a9b7c6"
    },
    "punctuation": {
        "color": "#a9b7c6"
    },
    "attr-name": {
        "color": "#a9b7c6"
    },
    "tag": {
        "color": "#e8bf6a"
    },
    "tag .punctuation": {
        "color": "#e8bf6a"
    },
    "doctype": {
        "color": "#e8bf6a"
    },
    "builtin": {
        "color": "#e8bf6a"
    },
    "entity": {
        "color": "#6897bb"
    },
    "number": {
        "color": "#6897bb"
    },
    "symbol": {
        "color": "#6897bb"
    },
    "property": {
        "color": "#9876aa"
    },
    "constant": {
        "color": "#9876aa"
    },
    "variable": {
        "color": "#9876aa"
    },
    "string": {
        "color": "#6a8759"
    },
    "char": {
        "color": "#6a8759"
    },
    "attr-value": {
        "color": "#a5c261"
    },
    "attr-value .punctuation": {
        "color": "#a5c261"
    },
    "attr-value .punctuation:first-child": {
        "color": "#a9b7c6"
    },
    "url": {
        "color": "#287bde",
        "textDecoration": "underline"
    },
    "function": {
        "color": "#ffc66d"
    },
    "regex": {
        "background": "#364135"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "background": "#294436"
    },
    "deleted": {
        "background": "#484a4a"
    },
    "code.language-css .token.property": {
        "color": "#a9b7c6"
    },
    "code.language-css .token.property + .token.punctuation": {
        "color": "#a9b7c6"
    },
    "code.language-css .token.id": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.class": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.attribute": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.pseudo-class": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.pseudo-element": {
        "color": "#ffc66d"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/dark.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/dark.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "white",
        "background": "none",
        "textShadow": "0 -.1em .2em black",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "white",
        "background": "hsl(30, 20%, 25%)",
        "textShadow": "0 -.1em .2em black",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": ".3em solid hsl(30, 20%, 40%)",
        "borderRadius": ".5em",
        "boxShadow": "1px 1px .5em black inset"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "hsl(30, 20%, 25%)",
        "padding": ".15em .2em .05em",
        "borderRadius": ".3em",
        "border": ".13em solid hsl(30, 20%, 40%)",
        "boxShadow": "1px 1px .3em -.1em black inset",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "hsl(30, 20%, 50%)"
    },
    "prolog": {
        "color": "hsl(30, 20%, 50%)"
    },
    "doctype": {
        "color": "hsl(30, 20%, 50%)"
    },
    "cdata": {
        "color": "hsl(30, 20%, 50%)"
    },
    "punctuation": {
        "Opacity": ".7"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "hsl(350, 40%, 70%)"
    },
    "tag": {
        "color": "hsl(350, 40%, 70%)"
    },
    "boolean": {
        "color": "hsl(350, 40%, 70%)"
    },
    "number": {
        "color": "hsl(350, 40%, 70%)"
    },
    "constant": {
        "color": "hsl(350, 40%, 70%)"
    },
    "symbol": {
        "color": "hsl(350, 40%, 70%)"
    },
    "selector": {
        "color": "hsl(75, 70%, 60%)"
    },
    "attr-name": {
        "color": "hsl(75, 70%, 60%)"
    },
    "string": {
        "color": "hsl(75, 70%, 60%)"
    },
    "char": {
        "color": "hsl(75, 70%, 60%)"
    },
    "builtin": {
        "color": "hsl(75, 70%, 60%)"
    },
    "inserted": {
        "color": "hsl(75, 70%, 60%)"
    },
    "operator": {
        "color": "hsl(40, 90%, 60%)"
    },
    "entity": {
        "color": "hsl(40, 90%, 60%)",
        "cursor": "help"
    },
    "url": {
        "color": "hsl(40, 90%, 60%)"
    },
    ".language-css .token.string": {
        "color": "hsl(40, 90%, 60%)"
    },
    ".style .token.string": {
        "color": "hsl(40, 90%, 60%)"
    },
    "variable": {
        "color": "hsl(40, 90%, 60%)"
    },
    "atrule": {
        "color": "hsl(350, 40%, 70%)"
    },
    "attr-value": {
        "color": "hsl(350, 40%, 70%)"
    },
    "keyword": {
        "color": "hsl(350, 40%, 70%)"
    },
    "regex": {
        "color": "#e90"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "deleted": {
        "color": "red"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/duotone-dark.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/duotone-dark.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2734",
        "color": "#9a86fd"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2734",
        "color": "#9a86fd",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#6c6783"
    },
    "prolog": {
        "color": "#6c6783"
    },
    "doctype": {
        "color": "#6c6783"
    },
    "cdata": {
        "color": "#6c6783"
    },
    "punctuation": {
        "color": "#6c6783"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#e09142"
    },
    "operator": {
        "color": "#e09142"
    },
    "number": {
        "color": "#e09142"
    },
    "property": {
        "color": "#9a86fd"
    },
    "function": {
        "color": "#9a86fd"
    },
    "tag-id": {
        "color": "#eeebff"
    },
    "selector": {
        "color": "#eeebff"
    },
    "atrule-id": {
        "color": "#eeebff"
    },
    "code.language-javascript": {
        "color": "#c4b9fe"
    },
    "attr-name": {
        "color": "#c4b9fe"
    },
    "code.language-css": {
        "color": "#ffcc99"
    },
    "code.language-scss": {
        "color": "#ffcc99"
    },
    "boolean": {
        "color": "#ffcc99"
    },
    "string": {
        "color": "#ffcc99"
    },
    "entity": {
        "color": "#ffcc99",
        "cursor": "help"
    },
    "url": {
        "color": "#ffcc99"
    },
    ".language-css .token.string": {
        "color": "#ffcc99"
    },
    ".language-scss .token.string": {
        "color": "#ffcc99"
    },
    ".style .token.string": {
        "color": "#ffcc99"
    },
    "attr-value": {
        "color": "#ffcc99"
    },
    "keyword": {
        "color": "#ffcc99"
    },
    "control": {
        "color": "#ffcc99"
    },
    "directive": {
        "color": "#ffcc99"
    },
    "unit": {
        "color": "#ffcc99"
    },
    "statement": {
        "color": "#ffcc99"
    },
    "regex": {
        "color": "#ffcc99"
    },
    "atrule": {
        "color": "#ffcc99"
    },
    "placeholder": {
        "color": "#ffcc99"
    },
    "variable": {
        "color": "#ffcc99"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #eeebff",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#c4b9fe"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #8a75f5",
        "OutlineOffset": ".4em"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#2c2937"
    },
    ".line-numbers-rows > span:before": {
        "color": "#3c3949"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/duotone-earth.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/duotone-earth.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#322d29",
        "color": "#88786d"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#322d29",
        "color": "#88786d",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#6a5f58"
    },
    "prolog": {
        "color": "#6a5f58"
    },
    "doctype": {
        "color": "#6a5f58"
    },
    "cdata": {
        "color": "#6a5f58"
    },
    "punctuation": {
        "color": "#6a5f58"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#bfa05a"
    },
    "operator": {
        "color": "#bfa05a"
    },
    "number": {
        "color": "#bfa05a"
    },
    "property": {
        "color": "#88786d"
    },
    "function": {
        "color": "#88786d"
    },
    "tag-id": {
        "color": "#fff3eb"
    },
    "selector": {
        "color": "#fff3eb"
    },
    "atrule-id": {
        "color": "#fff3eb"
    },
    "code.language-javascript": {
        "color": "#a48774"
    },
    "attr-name": {
        "color": "#a48774"
    },
    "code.language-css": {
        "color": "#fcc440"
    },
    "code.language-scss": {
        "color": "#fcc440"
    },
    "boolean": {
        "color": "#fcc440"
    },
    "string": {
        "color": "#fcc440"
    },
    "entity": {
        "color": "#fcc440",
        "cursor": "help"
    },
    "url": {
        "color": "#fcc440"
    },
    ".language-css .token.string": {
        "color": "#fcc440"
    },
    ".language-scss .token.string": {
        "color": "#fcc440"
    },
    ".style .token.string": {
        "color": "#fcc440"
    },
    "attr-value": {
        "color": "#fcc440"
    },
    "keyword": {
        "color": "#fcc440"
    },
    "control": {
        "color": "#fcc440"
    },
    "directive": {
        "color": "#fcc440"
    },
    "unit": {
        "color": "#fcc440"
    },
    "statement": {
        "color": "#fcc440"
    },
    "regex": {
        "color": "#fcc440"
    },
    "atrule": {
        "color": "#fcc440"
    },
    "placeholder": {
        "color": "#fcc440"
    },
    "variable": {
        "color": "#fcc440"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #fff3eb",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#a48774"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #816d5f",
        "OutlineOffset": ".4em"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#35302b"
    },
    ".line-numbers-rows > span:before": {
        "color": "#46403d"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/duotone-forest.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/duotone-forest.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2d2a",
        "color": "#687d68"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2d2a",
        "color": "#687d68",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#535f53"
    },
    "prolog": {
        "color": "#535f53"
    },
    "doctype": {
        "color": "#535f53"
    },
    "cdata": {
        "color": "#535f53"
    },
    "punctuation": {
        "color": "#535f53"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#a2b34d"
    },
    "operator": {
        "color": "#a2b34d"
    },
    "number": {
        "color": "#a2b34d"
    },
    "property": {
        "color": "#687d68"
    },
    "function": {
        "color": "#687d68"
    },
    "tag-id": {
        "color": "#f0fff0"
    },
    "selector": {
        "color": "#f0fff0"
    },
    "atrule-id": {
        "color": "#f0fff0"
    },
    "code.language-javascript": {
        "color": "#b3d6b3"
    },
    "attr-name": {
        "color": "#b3d6b3"
    },
    "code.language-css": {
        "color": "#e5fb79"
    },
    "code.language-scss": {
        "color": "#e5fb79"
    },
    "boolean": {
        "color": "#e5fb79"
    },
    "string": {
        "color": "#e5fb79"
    },
    "entity": {
        "color": "#e5fb79",
        "cursor": "help"
    },
    "url": {
        "color": "#e5fb79"
    },
    ".language-css .token.string": {
        "color": "#e5fb79"
    },
    ".language-scss .token.string": {
        "color": "#e5fb79"
    },
    ".style .token.string": {
        "color": "#e5fb79"
    },
    "attr-value": {
        "color": "#e5fb79"
    },
    "keyword": {
        "color": "#e5fb79"
    },
    "control": {
        "color": "#e5fb79"
    },
    "directive": {
        "color": "#e5fb79"
    },
    "unit": {
        "color": "#e5fb79"
    },
    "statement": {
        "color": "#e5fb79"
    },
    "regex": {
        "color": "#e5fb79"
    },
    "atrule": {
        "color": "#e5fb79"
    },
    "placeholder": {
        "color": "#e5fb79"
    },
    "variable": {
        "color": "#e5fb79"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #f0fff0",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#b3d6b3"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #5c705c",
        "OutlineOffset": ".4em"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#2c302c"
    },
    ".line-numbers-rows > span:before": {
        "color": "#3b423b"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/duotone-light.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/duotone-light.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#faf8f5",
        "color": "#728fcb"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#faf8f5",
        "color": "#728fcb",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#b6ad9a"
    },
    "prolog": {
        "color": "#b6ad9a"
    },
    "doctype": {
        "color": "#b6ad9a"
    },
    "cdata": {
        "color": "#b6ad9a"
    },
    "punctuation": {
        "color": "#b6ad9a"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#063289"
    },
    "operator": {
        "color": "#063289"
    },
    "number": {
        "color": "#063289"
    },
    "property": {
        "color": "#b29762"
    },
    "function": {
        "color": "#b29762"
    },
    "tag-id": {
        "color": "#2d2006"
    },
    "selector": {
        "color": "#2d2006"
    },
    "atrule-id": {
        "color": "#2d2006"
    },
    "code.language-javascript": {
        "color": "#896724"
    },
    "attr-name": {
        "color": "#896724"
    },
    "code.language-css": {
        "color": "#728fcb"
    },
    "code.language-scss": {
        "color": "#728fcb"
    },
    "boolean": {
        "color": "#728fcb"
    },
    "string": {
        "color": "#728fcb"
    },
    "entity": {
        "color": "#728fcb",
        "cursor": "help"
    },
    "url": {
        "color": "#728fcb"
    },
    ".language-css .token.string": {
        "color": "#728fcb"
    },
    ".language-scss .token.string": {
        "color": "#728fcb"
    },
    ".style .token.string": {
        "color": "#728fcb"
    },
    "attr-value": {
        "color": "#728fcb"
    },
    "keyword": {
        "color": "#728fcb"
    },
    "control": {
        "color": "#728fcb"
    },
    "directive": {
        "color": "#728fcb"
    },
    "unit": {
        "color": "#728fcb"
    },
    "statement": {
        "color": "#728fcb"
    },
    "regex": {
        "color": "#728fcb"
    },
    "atrule": {
        "color": "#728fcb"
    },
    "placeholder": {
        "color": "#93abdc"
    },
    "variable": {
        "color": "#93abdc"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #2d2006",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#896724"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #896724",
        "OutlineOffset": ".4em"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#ece8de"
    },
    ".line-numbers-rows > span:before": {
        "color": "#cdc4b1"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/duotone-sea.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/duotone-sea.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#1d262f",
        "color": "#57718e"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#1d262f",
        "color": "#57718e",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#4a5f78"
    },
    "prolog": {
        "color": "#4a5f78"
    },
    "doctype": {
        "color": "#4a5f78"
    },
    "cdata": {
        "color": "#4a5f78"
    },
    "punctuation": {
        "color": "#4a5f78"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#0aa370"
    },
    "operator": {
        "color": "#0aa370"
    },
    "number": {
        "color": "#0aa370"
    },
    "property": {
        "color": "#57718e"
    },
    "function": {
        "color": "#57718e"
    },
    "tag-id": {
        "color": "#ebf4ff"
    },
    "selector": {
        "color": "#ebf4ff"
    },
    "atrule-id": {
        "color": "#ebf4ff"
    },
    "code.language-javascript": {
        "color": "#7eb6f6"
    },
    "attr-name": {
        "color": "#7eb6f6"
    },
    "code.language-css": {
        "color": "#47ebb4"
    },
    "code.language-scss": {
        "color": "#47ebb4"
    },
    "boolean": {
        "color": "#47ebb4"
    },
    "string": {
        "color": "#47ebb4"
    },
    "entity": {
        "color": "#47ebb4",
        "cursor": "help"
    },
    "url": {
        "color": "#47ebb4"
    },
    ".language-css .token.string": {
        "color": "#47ebb4"
    },
    ".language-scss .token.string": {
        "color": "#47ebb4"
    },
    ".style .token.string": {
        "color": "#47ebb4"
    },
    "attr-value": {
        "color": "#47ebb4"
    },
    "keyword": {
        "color": "#47ebb4"
    },
    "control": {
        "color": "#47ebb4"
    },
    "directive": {
        "color": "#47ebb4"
    },
    "unit": {
        "color": "#47ebb4"
    },
    "statement": {
        "color": "#47ebb4"
    },
    "regex": {
        "color": "#47ebb4"
    },
    "atrule": {
        "color": "#47ebb4"
    },
    "placeholder": {
        "color": "#47ebb4"
    },
    "variable": {
        "color": "#47ebb4"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #ebf4ff",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#7eb6f6"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #34659d",
        "OutlineOffset": ".4em"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#1f2932"
    },
    ".line-numbers-rows > span:before": {
        "color": "#2c3847"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/duotone-space.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/duotone-space.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#24242e",
        "color": "#767693"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#24242e",
        "color": "#767693",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#5b5b76"
    },
    "prolog": {
        "color": "#5b5b76"
    },
    "doctype": {
        "color": "#5b5b76"
    },
    "cdata": {
        "color": "#5b5b76"
    },
    "punctuation": {
        "color": "#5b5b76"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#dd672c"
    },
    "operator": {
        "color": "#dd672c"
    },
    "number": {
        "color": "#dd672c"
    },
    "property": {
        "color": "#767693"
    },
    "function": {
        "color": "#767693"
    },
    "tag-id": {
        "color": "#ebebff"
    },
    "selector": {
        "color": "#ebebff"
    },
    "atrule-id": {
        "color": "#ebebff"
    },
    "code.language-javascript": {
        "color": "#aaaaca"
    },
    "attr-name": {
        "color": "#aaaaca"
    },
    "code.language-css": {
        "color": "#fe8c52"
    },
    "code.language-scss": {
        "color": "#fe8c52"
    },
    "boolean": {
        "color": "#fe8c52"
    },
    "string": {
        "color": "#fe8c52"
    },
    "entity": {
        "color": "#fe8c52",
        "cursor": "help"
    },
    "url": {
        "color": "#fe8c52"
    },
    ".language-css .token.string": {
        "color": "#fe8c52"
    },
    ".language-scss .token.string": {
        "color": "#fe8c52"
    },
    ".style .token.string": {
        "color": "#fe8c52"
    },
    "attr-value": {
        "color": "#fe8c52"
    },
    "keyword": {
        "color": "#fe8c52"
    },
    "control": {
        "color": "#fe8c52"
    },
    "directive": {
        "color": "#fe8c52"
    },
    "unit": {
        "color": "#fe8c52"
    },
    "statement": {
        "color": "#fe8c52"
    },
    "regex": {
        "color": "#fe8c52"
    },
    "atrule": {
        "color": "#fe8c52"
    },
    "placeholder": {
        "color": "#fe8c52"
    },
    "variable": {
        "color": "#fe8c52"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #ebebff",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#aaaaca"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #7676f4",
        "OutlineOffset": ".4em"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#262631"
    },
    ".line-numbers-rows > span:before": {
        "color": "#393949"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/funky.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/funky.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "black",
        "color": "white",
        "boxShadow": "-.3em 0 0 .3em black, .3em 0 0 .3em black"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": ".4em .8em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": "url('data:image/svg+xml;charset=utf-8,<svg%20version%3D\"1.1\"%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"100\"%20height%3D\"100\"%20fill%3D\"rgba(0%2C0%2C0%2C.2)\">%0D%0A<polygon%20points%3D\"0%2C50%2050%2C0%200%2C0\"%20%2F>%0D%0A<polygon%20points%3D\"0%2C100%2050%2C100%20100%2C50%20100%2C0\"%20%2F>%0D%0A<%2Fsvg>')",
        "backgroundSize": "1em 1em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".2em",
        "borderRadius": ".3em",
        "boxShadow": "none",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#aaa"
    },
    "prolog": {
        "color": "#aaa"
    },
    "doctype": {
        "color": "#aaa"
    },
    "cdata": {
        "color": "#aaa"
    },
    "punctuation": {
        "color": "#999"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#0cf"
    },
    "tag": {
        "color": "#0cf"
    },
    "boolean": {
        "color": "#0cf"
    },
    "number": {
        "color": "#0cf"
    },
    "constant": {
        "color": "#0cf"
    },
    "symbol": {
        "color": "#0cf"
    },
    "selector": {
        "color": "yellow"
    },
    "attr-name": {
        "color": "yellow"
    },
    "string": {
        "color": "yellow"
    },
    "char": {
        "color": "yellow"
    },
    "builtin": {
        "color": "yellow"
    },
    "operator": {
        "color": "yellowgreen"
    },
    "entity": {
        "color": "yellowgreen",
        "cursor": "help"
    },
    "url": {
        "color": "yellowgreen"
    },
    ".language-css .token.string": {
        "color": "yellowgreen"
    },
    ".toke.variable": {
        "color": "yellowgreen"
    },
    "inserted": {
        "color": "yellowgreen"
    },
    "atrule": {
        "color": "deeppink"
    },
    "attr-value": {
        "color": "deeppink"
    },
    "keyword": {
        "color": "deeppink"
    },
    "regex": {
        "color": "orange"
    },
    "important": {
        "color": "orange",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "deleted": {
        "color": "red"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/ghcolors.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/ghcolors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#393A34",
        "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": "0.95em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#393A34",
        "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": "0.95em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": "1px solid #dddddd",
        "backgroundColor": "white"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#b3d4fc"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".2em",
        "paddingTop": "1px",
        "paddingBottom": "1px",
        "background": "#f8f8f8",
        "border": "1px solid #dddddd"
    },
    "comment": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "doctype": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "cdata": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "string": {
        "color": "#e3116c"
    },
    "attr-value": {
        "color": "#e3116c"
    },
    "punctuation": {
        "color": "#393A34"
    },
    "operator": {
        "color": "#393A34"
    },
    "entity": {
        "color": "#36acaa"
    },
    "url": {
        "color": "#36acaa"
    },
    "symbol": {
        "color": "#36acaa"
    },
    "number": {
        "color": "#36acaa"
    },
    "boolean": {
        "color": "#36acaa"
    },
    "variable": {
        "color": "#36acaa"
    },
    "constant": {
        "color": "#36acaa"
    },
    "property": {
        "color": "#36acaa"
    },
    "regex": {
        "color": "#36acaa"
    },
    "inserted": {
        "color": "#36acaa"
    },
    "atrule": {
        "color": "#00a4db"
    },
    "keyword": {
        "color": "#00a4db"
    },
    "attr-name": {
        "color": "#00a4db"
    },
    ".language-autohotkey .token.selector": {
        "color": "#00a4db"
    },
    "function": {
        "color": "#9a050f",
        "fontWeight": "bold"
    },
    "deleted": {
        "color": "#9a050f"
    },
    ".language-autohotkey .token.tag": {
        "color": "#9a050f"
    },
    "tag": {
        "color": "#00009f"
    },
    "selector": {
        "color": "#00009f"
    },
    ".language-autohotkey .token.keyword": {
        "color": "#00009f"
    },
    "important": {
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/hopscotch.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/hopscotch.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#b9b5b8",
        "fontFamily": "\"Fira Mono\", Menlo, Monaco, \"Lucida Console\",\"Courier New\", Courier, monospace",
        "fontSize": "16px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "background": "#322931"
    },
    "pre[class*=\"language-\"]": {
        "color": "#b9b5b8",
        "fontFamily": "\"Fira Mono\", Menlo, Monaco, \"Lucida Console\",\"Courier New\", Courier, monospace",
        "fontSize": "16px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "background": "#322931",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#797379"
    },
    "prolog": {
        "color": "#797379"
    },
    "doctype": {
        "color": "#797379"
    },
    "cdata": {
        "color": "#797379"
    },
    "punctuation": {
        "color": "#b9b5b8"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "null": {
        "color": "#fd8b19"
    },
    "operator": {
        "color": "#fd8b19"
    },
    "boolean": {
        "color": "#fd8b19"
    },
    "number": {
        "color": "#fd8b19"
    },
    "property": {
        "color": "#fdcc59"
    },
    "tag": {
        "color": "#1290bf"
    },
    "string": {
        "color": "#149b93"
    },
    "selector": {
        "color": "#c85e7c"
    },
    "attr-name": {
        "color": "#fd8b19"
    },
    "entity": {
        "color": "#149b93",
        "cursor": "help"
    },
    "url": {
        "color": "#149b93"
    },
    ".language-css .token.string": {
        "color": "#149b93"
    },
    ".style .token.string": {
        "color": "#149b93"
    },
    "attr-value": {
        "color": "#8fc13e"
    },
    "keyword": {
        "color": "#8fc13e"
    },
    "control": {
        "color": "#8fc13e"
    },
    "directive": {
        "color": "#8fc13e"
    },
    "unit": {
        "color": "#8fc13e"
    },
    "statement": {
        "color": "#149b93"
    },
    "regex": {
        "color": "#149b93"
    },
    "atrule": {
        "color": "#149b93"
    },
    "placeholder": {
        "color": "#1290bf"
    },
    "variable": {
        "color": "#1290bf"
    },
    "important": {
        "color": "#dd464c",
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid red",
        "OutlineOffset": ".4em"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atomDark = __webpack_require__(/*! ./atom-dark */ "./node_modules/react-syntax-highlighter/styles/prism/atom-dark.js");

Object.defineProperty(exports, 'atomDark', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_atomDark).default;
  }
});

var _base16Ateliersulphurpool = __webpack_require__(/*! ./base16-ateliersulphurpool.light */ "./node_modules/react-syntax-highlighter/styles/prism/base16-ateliersulphurpool.light.js");

Object.defineProperty(exports, 'base16AteliersulphurpoolLight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_base16Ateliersulphurpool).default;
  }
});

var _cb = __webpack_require__(/*! ./cb */ "./node_modules/react-syntax-highlighter/styles/prism/cb.js");

Object.defineProperty(exports, 'cb', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cb).default;
  }
});

var _darcula = __webpack_require__(/*! ./darcula */ "./node_modules/react-syntax-highlighter/styles/prism/darcula.js");

Object.defineProperty(exports, 'darcula', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_darcula).default;
  }
});

var _duotoneDark = __webpack_require__(/*! ./duotone-dark */ "./node_modules/react-syntax-highlighter/styles/prism/duotone-dark.js");

Object.defineProperty(exports, 'duotoneDark', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_duotoneDark).default;
  }
});

var _duotoneEarth = __webpack_require__(/*! ./duotone-earth */ "./node_modules/react-syntax-highlighter/styles/prism/duotone-earth.js");

Object.defineProperty(exports, 'duotoneEarth', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_duotoneEarth).default;
  }
});

var _duotoneForest = __webpack_require__(/*! ./duotone-forest */ "./node_modules/react-syntax-highlighter/styles/prism/duotone-forest.js");

Object.defineProperty(exports, 'duotoneForest', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_duotoneForest).default;
  }
});

var _duotoneLight = __webpack_require__(/*! ./duotone-light */ "./node_modules/react-syntax-highlighter/styles/prism/duotone-light.js");

Object.defineProperty(exports, 'duotoneLight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_duotoneLight).default;
  }
});

var _duotoneSea = __webpack_require__(/*! ./duotone-sea */ "./node_modules/react-syntax-highlighter/styles/prism/duotone-sea.js");

Object.defineProperty(exports, 'duotoneSea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_duotoneSea).default;
  }
});

var _duotoneSpace = __webpack_require__(/*! ./duotone-space */ "./node_modules/react-syntax-highlighter/styles/prism/duotone-space.js");

Object.defineProperty(exports, 'duotoneSpace', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_duotoneSpace).default;
  }
});

var _ghcolors = __webpack_require__(/*! ./ghcolors */ "./node_modules/react-syntax-highlighter/styles/prism/ghcolors.js");

Object.defineProperty(exports, 'ghcolors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ghcolors).default;
  }
});

var _hopscotch = __webpack_require__(/*! ./hopscotch */ "./node_modules/react-syntax-highlighter/styles/prism/hopscotch.js");

Object.defineProperty(exports, 'hopscotch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hopscotch).default;
  }
});

var _pojoaque = __webpack_require__(/*! ./pojoaque */ "./node_modules/react-syntax-highlighter/styles/prism/pojoaque.js");

Object.defineProperty(exports, 'pojoaque', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pojoaque).default;
  }
});

var _vs = __webpack_require__(/*! ./vs */ "./node_modules/react-syntax-highlighter/styles/prism/vs.js");

Object.defineProperty(exports, 'vs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_vs).default;
  }
});

var _xonokai = __webpack_require__(/*! ./xonokai */ "./node_modules/react-syntax-highlighter/styles/prism/xonokai.js");

Object.defineProperty(exports, 'xonokai', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_xonokai).default;
  }
});

var _coy = __webpack_require__(/*! ./coy */ "./node_modules/react-syntax-highlighter/styles/prism/coy.js");

Object.defineProperty(exports, 'coy', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_coy).default;
  }
});

var _dark = __webpack_require__(/*! ./dark */ "./node_modules/react-syntax-highlighter/styles/prism/dark.js");

Object.defineProperty(exports, 'dark', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dark).default;
  }
});

var _funky = __webpack_require__(/*! ./funky */ "./node_modules/react-syntax-highlighter/styles/prism/funky.js");

Object.defineProperty(exports, 'funky', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_funky).default;
  }
});

var _okaidia = __webpack_require__(/*! ./okaidia */ "./node_modules/react-syntax-highlighter/styles/prism/okaidia.js");

Object.defineProperty(exports, 'okaidia', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_okaidia).default;
  }
});

var _solarizedlight = __webpack_require__(/*! ./solarizedlight */ "./node_modules/react-syntax-highlighter/styles/prism/solarizedlight.js");

Object.defineProperty(exports, 'solarizedlight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_solarizedlight).default;
  }
});

var _tomorrow = __webpack_require__(/*! ./tomorrow */ "./node_modules/react-syntax-highlighter/styles/prism/tomorrow.js");

Object.defineProperty(exports, 'tomorrow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tomorrow).default;
  }
});

var _twilight = __webpack_require__(/*! ./twilight */ "./node_modules/react-syntax-highlighter/styles/prism/twilight.js");

Object.defineProperty(exports, 'twilight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_twilight).default;
  }
});

var _prism = __webpack_require__(/*! ./prism */ "./node_modules/react-syntax-highlighter/styles/prism/prism.js");

Object.defineProperty(exports, 'prism', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_prism).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/okaidia.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/okaidia.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "none",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "#272822",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#272822",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "slategray"
    },
    "prolog": {
        "color": "slategray"
    },
    "doctype": {
        "color": "slategray"
    },
    "cdata": {
        "color": "slategray"
    },
    "punctuation": {
        "color": "#f8f8f2"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#f92672"
    },
    "tag": {
        "color": "#f92672"
    },
    "constant": {
        "color": "#f92672"
    },
    "symbol": {
        "color": "#f92672"
    },
    "deleted": {
        "color": "#f92672"
    },
    "boolean": {
        "color": "#ae81ff"
    },
    "number": {
        "color": "#ae81ff"
    },
    "selector": {
        "color": "#a6e22e"
    },
    "attr-name": {
        "color": "#a6e22e"
    },
    "string": {
        "color": "#a6e22e"
    },
    "char": {
        "color": "#a6e22e"
    },
    "builtin": {
        "color": "#a6e22e"
    },
    "inserted": {
        "color": "#a6e22e"
    },
    "operator": {
        "color": "#f8f8f2"
    },
    "entity": {
        "color": "#f8f8f2",
        "cursor": "help"
    },
    "url": {
        "color": "#f8f8f2"
    },
    ".language-css .token.string": {
        "color": "#f8f8f2"
    },
    ".style .token.string": {
        "color": "#f8f8f2"
    },
    "variable": {
        "color": "#f8f8f2"
    },
    "atrule": {
        "color": "#e6db74"
    },
    "attr-value": {
        "color": "#e6db74"
    },
    "function": {
        "color": "#e6db74"
    },
    "keyword": {
        "color": "#66d9ef"
    },
    "regex": {
        "color": "#fd971f"
    },
    "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/pojoaque.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/pojoaque.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "fontSize": "15px",
        "lineHeight": "1.5",
        "color": "#dccf8f",
        "textShadow": "0"
    },
    "pre[class*=\"language-\"]": {
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "fontSize": "15px",
        "lineHeight": "1.5",
        "color": "#DCCF8F",
        "textShadow": "0",
        "borderRadius": "5px",
        "border": "1px solid #000",
        "background": "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
        "padding": "12px",
        "overflow": "auto"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "borderRadius": "5px",
        "border": "1px solid #000",
        "color": "#DCCF8F",
        "background": "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
        "padding": "2px 6px"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "comment": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "doctype": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "cdata": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "number": {
        "color": "#b89859"
    },
    "string": {
        "color": "#468966"
    },
    "char": {
        "color": "#468966"
    },
    "builtin": {
        "color": "#468966"
    },
    "inserted": {
        "color": "#468966"
    },
    "attr-name": {
        "color": "#b89859"
    },
    "operator": {
        "color": "#dccf8f"
    },
    "entity": {
        "color": "#dccf8f",
        "cursor": "help"
    },
    "url": {
        "color": "#dccf8f"
    },
    ".language-css .token.string": {
        "color": "#dccf8f"
    },
    ".style .token.string": {
        "color": "#dccf8f"
    },
    "selector": {
        "color": "#859900"
    },
    "regex": {
        "color": "#859900"
    },
    "atrule": {
        "color": "#cb4b16"
    },
    "keyword": {
        "color": "#cb4b16"
    },
    "attr-value": {
        "color": "#468966"
    },
    "function": {
        "color": "#b58900"
    },
    "variable": {
        "color": "#b58900"
    },
    "placeholder": {
        "color": "#b58900"
    },
    "property": {
        "color": "#b89859"
    },
    "tag": {
        "color": "#ffb03b"
    },
    "boolean": {
        "color": "#b89859"
    },
    "constant": {
        "color": "#b89859"
    },
    "symbol": {
        "color": "#b89859"
    },
    "important": {
        "color": "#dc322f"
    },
    "statement": {
        "color": "#dc322f"
    },
    "deleted": {
        "color": "#dc322f"
    },
    "punctuation": {
        "color": "#dccf8f"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/prism.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/prism.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "textShadow": "0 1px white",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "black",
        "background": "#f5f2f0",
        "textShadow": "0 1px white",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#f5f2f0",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "slategray"
    },
    "prolog": {
        "color": "slategray"
    },
    "doctype": {
        "color": "slategray"
    },
    "cdata": {
        "color": "slategray"
    },
    "punctuation": {
        "color": "#999"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#905"
    },
    "tag": {
        "color": "#905"
    },
    "boolean": {
        "color": "#905"
    },
    "number": {
        "color": "#905"
    },
    "constant": {
        "color": "#905"
    },
    "symbol": {
        "color": "#905"
    },
    "deleted": {
        "color": "#905"
    },
    "selector": {
        "color": "#690"
    },
    "attr-name": {
        "color": "#690"
    },
    "string": {
        "color": "#690"
    },
    "char": {
        "color": "#690"
    },
    "builtin": {
        "color": "#690"
    },
    "inserted": {
        "color": "#690"
    },
    "operator": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    "entity": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)",
        "cursor": "help"
    },
    "url": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    ".language-css .token.string": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    ".style .token.string": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    "atrule": {
        "color": "#07a"
    },
    "attr-value": {
        "color": "#07a"
    },
    "keyword": {
        "color": "#07a"
    },
    "function": {
        "color": "#DD4A68"
    },
    "class-name": {
        "color": "#DD4A68"
    },
    "regex": {
        "color": "#e90"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "bold"
    },
    "variable": {
        "color": "#e90"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/solarizedlight.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/solarizedlight.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#657b83",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#657b83",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "backgroundColor": "#fdf6e3"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#073642"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#073642"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#073642"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#073642"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#073642"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#073642"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#073642"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#073642"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "backgroundColor": "#fdf6e3",
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#93a1a1"
    },
    "prolog": {
        "color": "#93a1a1"
    },
    "doctype": {
        "color": "#93a1a1"
    },
    "cdata": {
        "color": "#93a1a1"
    },
    "punctuation": {
        "color": "#586e75"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#268bd2"
    },
    "tag": {
        "color": "#268bd2"
    },
    "boolean": {
        "color": "#268bd2"
    },
    "number": {
        "color": "#268bd2"
    },
    "constant": {
        "color": "#268bd2"
    },
    "symbol": {
        "color": "#268bd2"
    },
    "deleted": {
        "color": "#268bd2"
    },
    "selector": {
        "color": "#2aa198"
    },
    "attr-name": {
        "color": "#2aa198"
    },
    "string": {
        "color": "#2aa198"
    },
    "char": {
        "color": "#2aa198"
    },
    "builtin": {
        "color": "#2aa198"
    },
    "url": {
        "color": "#2aa198"
    },
    "inserted": {
        "color": "#2aa198"
    },
    "entity": {
        "color": "#657b83",
        "background": "#eee8d5",
        "cursor": "help"
    },
    "atrule": {
        "color": "#859900"
    },
    "attr-value": {
        "color": "#859900"
    },
    "keyword": {
        "color": "#859900"
    },
    "function": {
        "color": "#b58900"
    },
    "regex": {
        "color": "#cb4b16"
    },
    "important": {
        "color": "#cb4b16",
        "fontWeight": "bold"
    },
    "variable": {
        "color": "#cb4b16"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/tomorrow.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/tomorrow.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#ccc",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#ccc",
        "background": "#2d2d2d",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#2d2d2d",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#999"
    },
    "block-comment": {
        "color": "#999"
    },
    "prolog": {
        "color": "#999"
    },
    "doctype": {
        "color": "#999"
    },
    "cdata": {
        "color": "#999"
    },
    "punctuation": {
        "color": "#ccc"
    },
    "tag": {
        "color": "#e2777a"
    },
    "attr-name": {
        "color": "#e2777a"
    },
    "namespace": {
        "color": "#e2777a"
    },
    "deleted": {
        "color": "#e2777a"
    },
    "function-name": {
        "color": "#6196cc"
    },
    "boolean": {
        "color": "#f08d49"
    },
    "number": {
        "color": "#f08d49"
    },
    "function": {
        "color": "#f08d49"
    },
    "property": {
        "color": "#f8c555"
    },
    "class-name": {
        "color": "#f8c555"
    },
    "constant": {
        "color": "#f8c555"
    },
    "symbol": {
        "color": "#f8c555"
    },
    "selector": {
        "color": "#cc99cd"
    },
    "important": {
        "color": "#cc99cd",
        "fontWeight": "bold"
    },
    "atrule": {
        "color": "#cc99cd"
    },
    "keyword": {
        "color": "#cc99cd"
    },
    "builtin": {
        "color": "#cc99cd"
    },
    "string": {
        "color": "#7ec699"
    },
    "char": {
        "color": "#7ec699"
    },
    "attr-value": {
        "color": "#7ec699"
    },
    "regex": {
        "color": "#7ec699"
    },
    "variable": {
        "color": "#7ec699"
    },
    "operator": {
        "color": "#67cdcc"
    },
    "entity": {
        "color": "#67cdcc",
        "cursor": "help"
    },
    "url": {
        "color": "#67cdcc"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "color": "green"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/twilight.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/twilight.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "white",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "textShadow": "0 -.1em .2em black",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "white",
        "background": "hsl(0, 0%, 8%)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "textShadow": "0 -.1em .2em black",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "borderRadius": ".5em",
        "border": ".3em solid hsl(0, 0%, 33%)",
        "boxShadow": "1px 1px .5em black inset",
        "margin": ".5em 0",
        "overflow": "auto",
        "padding": "1em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "hsl(0, 0%, 8%)",
        "borderRadius": ".3em",
        "border": ".13em solid hsl(0, 0%, 33%)",
        "boxShadow": "1px 1px .3em -.1em black inset",
        "padding": ".15em .2em .05em",
        "whiteSpace": "normal"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "hsla(0, 0%, 93%, 0.15)",
        "textShadow": "none"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "hsla(0, 0%, 93%, 0.15)",
        "textShadow": "none"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "comment": {
        "color": "hsl(0, 0%, 47%)"
    },
    "prolog": {
        "color": "hsl(0, 0%, 47%)"
    },
    "doctype": {
        "color": "hsl(0, 0%, 47%)"
    },
    "cdata": {
        "color": "hsl(0, 0%, 47%)"
    },
    "punctuation": {
        "Opacity": ".7"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "hsl(14, 58%, 55%)"
    },
    "boolean": {
        "color": "hsl(14, 58%, 55%)"
    },
    "number": {
        "color": "hsl(14, 58%, 55%)"
    },
    "deleted": {
        "color": "hsl(14, 58%, 55%)"
    },
    "keyword": {
        "color": "hsl(53, 89%, 79%)"
    },
    "property": {
        "color": "hsl(53, 89%, 79%)"
    },
    "selector": {
        "color": "hsl(53, 89%, 79%)"
    },
    "constant": {
        "color": "hsl(53, 89%, 79%)"
    },
    "symbol": {
        "color": "hsl(53, 89%, 79%)"
    },
    "builtin": {
        "color": "hsl(53, 89%, 79%)"
    },
    "attr-name": {
        "color": "hsl(76, 21%, 52%)"
    },
    "attr-value": {
        "color": "hsl(76, 21%, 52%)"
    },
    "string": {
        "color": "hsl(76, 21%, 52%)"
    },
    "char": {
        "color": "hsl(76, 21%, 52%)"
    },
    "operator": {
        "color": "hsl(76, 21%, 52%)"
    },
    "entity": {
        "color": "hsl(76, 21%, 52%)",
        "cursor": "help"
    },
    "url": {
        "color": "hsl(76, 21%, 52%)"
    },
    ".language-css .token.string": {
        "color": "hsl(76, 21%, 52%)"
    },
    ".style .token.string": {
        "color": "hsl(76, 21%, 52%)"
    },
    "variable": {
        "color": "hsl(76, 21%, 52%)"
    },
    "inserted": {
        "color": "hsl(76, 21%, 52%)"
    },
    "atrule": {
        "color": "hsl(218, 22%, 55%)"
    },
    "regex": {
        "color": "hsl(42, 75%, 65%)"
    },
    "important": {
        "color": "hsl(42, 75%, 65%)",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "pre[data-line]": {
        "padding": "1em 0 1em 3em",
        "position": "relative"
    },
    ".language-markup .token.tag": {
        "color": "hsl(33, 33%, 52%)"
    },
    ".language-markup .token.attr-name": {
        "color": "hsl(33, 33%, 52%)"
    },
    ".language-markup .token.punctuation": {
        "color": "hsl(33, 33%, 52%)"
    },
    "": {
        "position": "relative",
        "zIndex": "1"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))",
        "borderBottom": "1px dashed hsl(0, 0%, 33%)",
        "borderTop": "1px dashed hsl(0, 0%, 33%)",
        "left": "0",
        "lineHeight": "inherit",
        "marginTop": "0.75em",
        "padding": "inherit 0",
        "pointerEvents": "none",
        "position": "absolute",
        "right": "0",
        "whiteSpace": "pre",
        "zIndex": "0"
    },
    ".line-highlight:before": {
        "backgroundColor": "hsl(215, 15%, 59%)",
        "borderRadius": "999px",
        "boxShadow": "0 1px white",
        "color": "hsl(24, 20%, 95%)",
        "content": "attr(data-start)",
        "font": "bold 65%/1.5 sans-serif",
        "left": ".6em",
        "minWidth": "1em",
        "padding": "0 .5em",
        "position": "absolute",
        "textAlign": "center",
        "textShadow": "none",
        "top": ".4em",
        "verticalAlign": ".3em"
    },
    ".line-highlight[data-end]:after": {
        "backgroundColor": "hsl(215, 15%, 59%)",
        "borderRadius": "999px",
        "boxShadow": "0 1px white",
        "color": "hsl(24, 20%, 95%)",
        "content": "attr(data-end)",
        "font": "bold 65%/1.5 sans-serif",
        "left": ".6em",
        "minWidth": "1em",
        "padding": "0 .5em",
        "position": "absolute",
        "textAlign": "center",
        "textShadow": "none",
        "top": "auto",
        "verticalAlign": ".3em",
        "bottom": ".4em"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/vs.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/vs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#393A34",
        "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": "0.95em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#393A34",
        "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": "0.95em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": "1px solid #dddddd",
        "backgroundColor": "white"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#C1DEF1"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#C1DEF1"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#C1DEF1"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#C1DEF1"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#C1DEF1"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#C1DEF1"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#C1DEF1"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#C1DEF1"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".2em",
        "paddingTop": "1px",
        "paddingBottom": "1px",
        "background": "#f8f8f8",
        "border": "1px solid #dddddd"
    },
    "comment": {
        "color": "#008000",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "#008000",
        "fontStyle": "italic"
    },
    "doctype": {
        "color": "#008000",
        "fontStyle": "italic"
    },
    "cdata": {
        "color": "#008000",
        "fontStyle": "italic"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "string": {
        "color": "#A31515"
    },
    "punctuation": {
        "color": "#393A34"
    },
    "operator": {
        "color": "#393A34"
    },
    "url": {
        "color": "#36acaa"
    },
    "symbol": {
        "color": "#36acaa"
    },
    "number": {
        "color": "#36acaa"
    },
    "boolean": {
        "color": "#36acaa"
    },
    "variable": {
        "color": "#36acaa"
    },
    "constant": {
        "color": "#36acaa"
    },
    "inserted": {
        "color": "#36acaa"
    },
    "atrule": {
        "color": "#0000ff"
    },
    "keyword": {
        "color": "#0000ff"
    },
    "attr-value": {
        "color": "#0000ff"
    },
    ".language-autohotkey .token.selector": {
        "color": "#0000ff"
    },
    ".language-json .token.boolean": {
        "color": "#0000ff"
    },
    ".language-json .token.number": {
        "color": "#0000ff"
    },
    "code[class*=\"language-css\"]": {
        "color": "#0000ff"
    },
    "function": {
        "color": "#393A34"
    },
    "deleted": {
        "color": "#9a050f"
    },
    ".language-autohotkey .token.tag": {
        "color": "#9a050f"
    },
    "selector": {
        "color": "#800000"
    },
    ".language-autohotkey .token.keyword": {
        "color": "#00009f"
    },
    "important": {
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "class-name": {
        "color": "#2B91AF"
    },
    ".language-json .token.property": {
        "color": "#2B91AF"
    },
    "tag": {
        "color": "#800000"
    },
    "attr-name": {
        "color": "#ff0000"
    },
    "property": {
        "color": "#ff0000"
    },
    "regex": {
        "color": "#ff0000"
    },
    "entity": {
        "color": "#ff0000"
    },
    "directive.tag  .tag": {
        "background": "#ffff00",
        "color": "#393A34"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#a5a5a5"
    },
    ".line-numbers-rows > span:before": {
        "color": "#2B91AF"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/styles/prism/xonokai.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/styles/prism/xonokai.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordWrap": "normal",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "fontSize": "14px",
        "color": "#76d9e6",
        "textShadow": "none"
    },
    "pre[class*=\"language-\"]": {
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordWrap": "normal",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "fontSize": "14px",
        "color": "#76d9e6",
        "textShadow": "none",
        "background": "#2a2a2a",
        "padding": "15px",
        "borderRadius": "4px",
        "border": "1px solid #e1e1e8",
        "overflow": "auto",
        "position": "relative"
    },
    ":not(pre)>code[class*=\"language-\"]": {
        "background": "#2a2a2a",
        "padding": "0.15em 0.2em 0.05em",
        "borderRadius": ".3em",
        "border": "0.13em solid #7a6652",
        "boxShadow": "1px 1px 0.3em -0.1em #000 inset"
    },
    "pre[class*=\"language-\"] code": {
        "whiteSpace": "pre",
        "display": "block"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "comment": {
        "color": "#6f705e"
    },
    "prolog": {
        "color": "#6f705e"
    },
    "doctype": {
        "color": "#6f705e"
    },
    "cdata": {
        "color": "#6f705e"
    },
    "operator": {
        "color": "#a77afe"
    },
    "boolean": {
        "color": "#a77afe"
    },
    "number": {
        "color": "#a77afe"
    },
    "attr-name": {
        "color": "#e6d06c"
    },
    "string": {
        "color": "#e6d06c"
    },
    "entity": {
        "color": "#e6d06c",
        "cursor": "help"
    },
    "url": {
        "color": "#e6d06c"
    },
    ".language-css .token.string": {
        "color": "#e6d06c"
    },
    ".style .token.string": {
        "color": "#e6d06c"
    },
    "selector": {
        "color": "#a6e22d"
    },
    "inserted": {
        "color": "#a6e22d"
    },
    "atrule": {
        "color": "#ef3b7d"
    },
    "attr-value": {
        "color": "#ef3b7d"
    },
    "keyword": {
        "color": "#ef3b7d"
    },
    "important": {
        "color": "#ef3b7d",
        "fontWeight": "bold"
    },
    "deleted": {
        "color": "#ef3b7d"
    },
    "regex": {
        "color": "#76d9e6"
    },
    "statement": {
        "color": "#76d9e6",
        "fontWeight": "bold"
    },
    "placeholder": {
        "color": "#fff"
    },
    "variable": {
        "color": "#fff"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "punctuation": {
        "color": "#bebec5"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "code.language-markup": {
        "color": "#f9f9f9"
    },
    "code.language-markup .token.tag": {
        "color": "#ef3b7d"
    },
    "code.language-markup .token.attr-name": {
        "color": "#a6e22d"
    },
    "code.language-markup .token.attr-value": {
        "color": "#e6d06c"
    },
    "code.language-markup .token.style": {
        "color": "#76d9e6"
    },
    "code.language-markup .token.script": {
        "color": "#76d9e6"
    },
    "code.language-markup .token.script .token.keyword": {
        "color": "#76d9e6"
    },
    "pre[class*=\"language-\"][data-line]": {
        "position": "relative",
        "padding": "1em 0 1em 3em"
    },
    "pre[data-line] .line-highlight": {
        "position": "absolute",
        "left": "0",
        "right": "0",
        "padding": "0",
        "marginTop": "1em",
        "background": "rgba(255, 255, 255, 0.08)",
        "pointerEvents": "none",
        "lineHeight": "inherit",
        "whiteSpace": "pre"
    },
    "pre[data-line] .line-highlight:before": {
        "content": "attr(data-start)",
        "position": "absolute",
        "top": ".4em",
        "left": ".6em",
        "minWidth": "1em",
        "padding": "0.2em 0.5em",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "color": "black",
        "font": "bold 65%/1 sans-serif",
        "height": "1em",
        "lineHeight": "1em",
        "textAlign": "center",
        "borderRadius": "999px",
        "textShadow": "none",
        "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)"
    },
    "pre[data-line] .line-highlight[data-end]:after": {
        "content": "attr(data-end)",
        "position": "absolute",
        "top": "auto",
        "left": ".6em",
        "minWidth": "1em",
        "padding": "0.2em 0.5em",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "color": "black",
        "font": "bold 65%/1 sans-serif",
        "height": "1em",
        "lineHeight": "1em",
        "textAlign": "center",
        "borderRadius": "999px",
        "textShadow": "none",
        "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)",
        "bottom": ".4em"
    }
};

/***/ }),

/***/ "./node_modules/refractor/core.js":
/*!****************************************!*\
  !*** ./node_modules/refractor/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* global window, self */

var restore = capture()

// istanbul ignore next - Don't allow Prism to run on page load in browser or
// to start messaging from workers.
var ctx =
  typeof window === 'undefined'
    ? typeof self === 'undefined'
      ? {}
      : self
    : window

ctx.Prism = {manual: true, disableWorkerMessageHandler: true}

// Load all stuff in `prism.js` itself, except for `prism-file-highlight.js`.
// The wrapped non-leaky grammars are loaded instead of Prism’s originals.
var h = __webpack_require__(/*! hastscript */ "./node_modules/hastscript/index.js")
var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js")
var Prism = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js")
var markup = __webpack_require__(/*! ./lang/markup */ "./node_modules/refractor/lang/markup.js")
var css = __webpack_require__(/*! ./lang/css */ "./node_modules/refractor/lang/css.js")
var clike = __webpack_require__(/*! ./lang/clike */ "./node_modules/refractor/lang/clike.js")
var js = __webpack_require__(/*! ./lang/javascript */ "./node_modules/refractor/lang/javascript.js")

restore()

var own = {}.hasOwnProperty

// Inherit.
function Refractor() {}

Refractor.prototype = Prism

// Construct.
var refract = new Refractor()

// Expose.
module.exports = refract

// Create.
refract.highlight = highlight
refract.register = register
refract.alias = alias
refract.registered = registered
refract.listLanguages = listLanguages

// Register bundled grammars.
register(markup)
register(css)
register(clike)
register(js)

refract.util.encode = encode
refract.Token.stringify = stringify

function register(grammar) {
  if (typeof grammar !== 'function' || !grammar.displayName) {
    throw new Error('Expected `function` for `grammar`, got `' + grammar + '`')
  }

  // Do not duplicate registrations.
  if (refract.languages[grammar.displayName] === undefined) {
    grammar(refract)
  }
}

function alias(name, alias) {
  var languages = refract.languages
  var map = name
  var key
  var list
  var length
  var index

  if (alias) {
    map = {}
    map[name] = alias
  }

  for (key in map) {
    list = map[key]
    list = typeof list === 'string' ? [list] : list
    length = list.length
    index = -1

    while (++index < length) {
      languages[list[index]] = languages[key]
    }
  }
}

function highlight(value, name) {
  var sup = Prism.highlight
  var grammar

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for `value`, got `' + value + '`')
  }

  // `name` is a grammar object.
  if (refract.util.type(name) === 'Object') {
    grammar = name
    name = null
  } else {
    if (typeof name !== 'string') {
      throw new Error('Expected `string` for `name`, got `' + name + '`')
    }

    if (own.call(refract.languages, name)) {
      grammar = refract.languages[name]
    } else {
      throw new Error('Unknown language: `' + name + '` is not registered')
    }
  }

  return sup.call(this, value, grammar, name)
}

function registered(language) {
  if (typeof language !== 'string') {
    throw new Error('Expected `string` for `language`, got `' + language + '`')
  }

  return own.call(refract.languages, language)
}

function listLanguages() {
  var languages = refract.languages
  var list = []
  var language

  for (language in languages) {
    if (
      own.call(languages, language) &&
      typeof languages[language] === 'object'
    ) {
      list.push(language)
    }
  }

  return list
}

function stringify(value, language, parent) {
  var env

  if (typeof value === 'string') {
    return {type: 'text', value: value}
  }

  if (refract.util.type(value) === 'Array') {
    return stringifyAll(value, language)
  }

  env = {
    type: value.type,
    content: refract.Token.stringify(value.content, language, parent),
    tag: 'span',
    classes: ['token', value.type],
    attributes: {},
    language: language,
    parent: parent
  }

  if (value.alias) {
    env.classes = env.classes.concat(value.alias)
  }

  refract.hooks.run('wrap', env)

  return h(
    env.tag + '.' + env.classes.join('.'),
    attributes(env.attributes),
    env.content
  )
}

function stringifyAll(values, language) {
  var result = []
  var length = values.length
  var index = -1
  var value

  while (++index < length) {
    value = values[index]

    if (value !== '' && value !== null && value !== undefined) {
      result.push(value)
    }
  }

  index = -1
  length = result.length

  while (++index < length) {
    value = result[index]
    result[index] = refract.Token.stringify(value, language, result)
  }

  return result
}

function encode(tokens) {
  return tokens
}

function attributes(attrs) {
  var key

  for (key in attrs) {
    attrs[key] = decode(attrs[key])
  }

  return attrs
}

function capture() {
  var defined = 'Prism' in global
  /* istanbul ignore next */
  var current = defined ? global.Prism : undefined

  return restore

  function restore() {
    /* istanbul ignore else - Clean leaks after Prism. */
    if (defined) {
      global.Prism = current
    } else {
      delete global.Prism
    }

    defined = undefined
    current = undefined
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/refractor/index.js":
/*!*****************************************!*\
  !*** ./node_modules/refractor/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var refractor = __webpack_require__(/*! ./core.js */ "./node_modules/refractor/core.js")

module.exports = refractor

refractor.register(__webpack_require__(/*! ./lang/abap.js */ "./node_modules/refractor/lang/abap.js"))
refractor.register(__webpack_require__(/*! ./lang/abnf.js */ "./node_modules/refractor/lang/abnf.js"))
refractor.register(__webpack_require__(/*! ./lang/actionscript.js */ "./node_modules/refractor/lang/actionscript.js"))
refractor.register(__webpack_require__(/*! ./lang/ada.js */ "./node_modules/refractor/lang/ada.js"))
refractor.register(__webpack_require__(/*! ./lang/apacheconf.js */ "./node_modules/refractor/lang/apacheconf.js"))
refractor.register(__webpack_require__(/*! ./lang/apl.js */ "./node_modules/refractor/lang/apl.js"))
refractor.register(__webpack_require__(/*! ./lang/applescript.js */ "./node_modules/refractor/lang/applescript.js"))
refractor.register(__webpack_require__(/*! ./lang/arduino.js */ "./node_modules/refractor/lang/arduino.js"))
refractor.register(__webpack_require__(/*! ./lang/arff.js */ "./node_modules/refractor/lang/arff.js"))
refractor.register(__webpack_require__(/*! ./lang/asciidoc.js */ "./node_modules/refractor/lang/asciidoc.js"))
refractor.register(__webpack_require__(/*! ./lang/asm6502.js */ "./node_modules/refractor/lang/asm6502.js"))
refractor.register(__webpack_require__(/*! ./lang/aspnet.js */ "./node_modules/refractor/lang/aspnet.js"))
refractor.register(__webpack_require__(/*! ./lang/autohotkey.js */ "./node_modules/refractor/lang/autohotkey.js"))
refractor.register(__webpack_require__(/*! ./lang/autoit.js */ "./node_modules/refractor/lang/autoit.js"))
refractor.register(__webpack_require__(/*! ./lang/bash.js */ "./node_modules/refractor/lang/bash.js"))
refractor.register(__webpack_require__(/*! ./lang/basic.js */ "./node_modules/refractor/lang/basic.js"))
refractor.register(__webpack_require__(/*! ./lang/batch.js */ "./node_modules/refractor/lang/batch.js"))
refractor.register(__webpack_require__(/*! ./lang/bison.js */ "./node_modules/refractor/lang/bison.js"))
refractor.register(__webpack_require__(/*! ./lang/bnf.js */ "./node_modules/refractor/lang/bnf.js"))
refractor.register(__webpack_require__(/*! ./lang/brainfuck.js */ "./node_modules/refractor/lang/brainfuck.js"))
refractor.register(__webpack_require__(/*! ./lang/bro.js */ "./node_modules/refractor/lang/bro.js"))
refractor.register(__webpack_require__(/*! ./lang/c.js */ "./node_modules/refractor/lang/c.js"))
refractor.register(__webpack_require__(/*! ./lang/cil.js */ "./node_modules/refractor/lang/cil.js"))
refractor.register(__webpack_require__(/*! ./lang/clojure.js */ "./node_modules/refractor/lang/clojure.js"))
refractor.register(__webpack_require__(/*! ./lang/cmake.js */ "./node_modules/refractor/lang/cmake.js"))
refractor.register(__webpack_require__(/*! ./lang/coffeescript.js */ "./node_modules/refractor/lang/coffeescript.js"))
refractor.register(__webpack_require__(/*! ./lang/cpp.js */ "./node_modules/refractor/lang/cpp.js"))
refractor.register(__webpack_require__(/*! ./lang/crystal.js */ "./node_modules/refractor/lang/crystal.js"))
refractor.register(__webpack_require__(/*! ./lang/csharp.js */ "./node_modules/refractor/lang/csharp.js"))
refractor.register(__webpack_require__(/*! ./lang/csp.js */ "./node_modules/refractor/lang/csp.js"))
refractor.register(__webpack_require__(/*! ./lang/css-extras.js */ "./node_modules/refractor/lang/css-extras.js"))
refractor.register(__webpack_require__(/*! ./lang/d.js */ "./node_modules/refractor/lang/d.js"))
refractor.register(__webpack_require__(/*! ./lang/dart.js */ "./node_modules/refractor/lang/dart.js"))
refractor.register(__webpack_require__(/*! ./lang/diff.js */ "./node_modules/refractor/lang/diff.js"))
refractor.register(__webpack_require__(/*! ./lang/django.js */ "./node_modules/refractor/lang/django.js"))
refractor.register(__webpack_require__(/*! ./lang/dns-zone-file.js */ "./node_modules/refractor/lang/dns-zone-file.js"))
refractor.register(__webpack_require__(/*! ./lang/docker.js */ "./node_modules/refractor/lang/docker.js"))
refractor.register(__webpack_require__(/*! ./lang/ebnf.js */ "./node_modules/refractor/lang/ebnf.js"))
refractor.register(__webpack_require__(/*! ./lang/eiffel.js */ "./node_modules/refractor/lang/eiffel.js"))
refractor.register(__webpack_require__(/*! ./lang/ejs.js */ "./node_modules/refractor/lang/ejs.js"))
refractor.register(__webpack_require__(/*! ./lang/elixir.js */ "./node_modules/refractor/lang/elixir.js"))
refractor.register(__webpack_require__(/*! ./lang/elm.js */ "./node_modules/refractor/lang/elm.js"))
refractor.register(__webpack_require__(/*! ./lang/erb.js */ "./node_modules/refractor/lang/erb.js"))
refractor.register(__webpack_require__(/*! ./lang/erlang.js */ "./node_modules/refractor/lang/erlang.js"))
refractor.register(__webpack_require__(/*! ./lang/flow.js */ "./node_modules/refractor/lang/flow.js"))
refractor.register(__webpack_require__(/*! ./lang/fortran.js */ "./node_modules/refractor/lang/fortran.js"))
refractor.register(__webpack_require__(/*! ./lang/fsharp.js */ "./node_modules/refractor/lang/fsharp.js"))
refractor.register(__webpack_require__(/*! ./lang/gcode.js */ "./node_modules/refractor/lang/gcode.js"))
refractor.register(__webpack_require__(/*! ./lang/gedcom.js */ "./node_modules/refractor/lang/gedcom.js"))
refractor.register(__webpack_require__(/*! ./lang/gherkin.js */ "./node_modules/refractor/lang/gherkin.js"))
refractor.register(__webpack_require__(/*! ./lang/git.js */ "./node_modules/refractor/lang/git.js"))
refractor.register(__webpack_require__(/*! ./lang/glsl.js */ "./node_modules/refractor/lang/glsl.js"))
refractor.register(__webpack_require__(/*! ./lang/gml.js */ "./node_modules/refractor/lang/gml.js"))
refractor.register(__webpack_require__(/*! ./lang/go.js */ "./node_modules/refractor/lang/go.js"))
refractor.register(__webpack_require__(/*! ./lang/graphql.js */ "./node_modules/refractor/lang/graphql.js"))
refractor.register(__webpack_require__(/*! ./lang/groovy.js */ "./node_modules/refractor/lang/groovy.js"))
refractor.register(__webpack_require__(/*! ./lang/haml.js */ "./node_modules/refractor/lang/haml.js"))
refractor.register(__webpack_require__(/*! ./lang/handlebars.js */ "./node_modules/refractor/lang/handlebars.js"))
refractor.register(__webpack_require__(/*! ./lang/haskell.js */ "./node_modules/refractor/lang/haskell.js"))
refractor.register(__webpack_require__(/*! ./lang/haxe.js */ "./node_modules/refractor/lang/haxe.js"))
refractor.register(__webpack_require__(/*! ./lang/hcl.js */ "./node_modules/refractor/lang/hcl.js"))
refractor.register(__webpack_require__(/*! ./lang/hpkp.js */ "./node_modules/refractor/lang/hpkp.js"))
refractor.register(__webpack_require__(/*! ./lang/hsts.js */ "./node_modules/refractor/lang/hsts.js"))
refractor.register(__webpack_require__(/*! ./lang/http.js */ "./node_modules/refractor/lang/http.js"))
refractor.register(__webpack_require__(/*! ./lang/ichigojam.js */ "./node_modules/refractor/lang/ichigojam.js"))
refractor.register(__webpack_require__(/*! ./lang/icon.js */ "./node_modules/refractor/lang/icon.js"))
refractor.register(__webpack_require__(/*! ./lang/inform7.js */ "./node_modules/refractor/lang/inform7.js"))
refractor.register(__webpack_require__(/*! ./lang/ini.js */ "./node_modules/refractor/lang/ini.js"))
refractor.register(__webpack_require__(/*! ./lang/io.js */ "./node_modules/refractor/lang/io.js"))
refractor.register(__webpack_require__(/*! ./lang/j.js */ "./node_modules/refractor/lang/j.js"))
refractor.register(__webpack_require__(/*! ./lang/java.js */ "./node_modules/refractor/lang/java.js"))
refractor.register(__webpack_require__(/*! ./lang/javadoc.js */ "./node_modules/refractor/lang/javadoc.js"))
refractor.register(__webpack_require__(/*! ./lang/javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js"))
refractor.register(__webpack_require__(/*! ./lang/javastacktrace.js */ "./node_modules/refractor/lang/javastacktrace.js"))
refractor.register(__webpack_require__(/*! ./lang/jolie.js */ "./node_modules/refractor/lang/jolie.js"))
refractor.register(__webpack_require__(/*! ./lang/jq.js */ "./node_modules/refractor/lang/jq.js"))
refractor.register(__webpack_require__(/*! ./lang/js-extras.js */ "./node_modules/refractor/lang/js-extras.js"))
refractor.register(__webpack_require__(/*! ./lang/js-templates.js */ "./node_modules/refractor/lang/js-templates.js"))
refractor.register(__webpack_require__(/*! ./lang/jsdoc.js */ "./node_modules/refractor/lang/jsdoc.js"))
refractor.register(__webpack_require__(/*! ./lang/json.js */ "./node_modules/refractor/lang/json.js"))
refractor.register(__webpack_require__(/*! ./lang/json5.js */ "./node_modules/refractor/lang/json5.js"))
refractor.register(__webpack_require__(/*! ./lang/jsonp.js */ "./node_modules/refractor/lang/jsonp.js"))
refractor.register(__webpack_require__(/*! ./lang/jsx.js */ "./node_modules/refractor/lang/jsx.js"))
refractor.register(__webpack_require__(/*! ./lang/julia.js */ "./node_modules/refractor/lang/julia.js"))
refractor.register(__webpack_require__(/*! ./lang/keyman.js */ "./node_modules/refractor/lang/keyman.js"))
refractor.register(__webpack_require__(/*! ./lang/kotlin.js */ "./node_modules/refractor/lang/kotlin.js"))
refractor.register(__webpack_require__(/*! ./lang/latex.js */ "./node_modules/refractor/lang/latex.js"))
refractor.register(__webpack_require__(/*! ./lang/less.js */ "./node_modules/refractor/lang/less.js"))
refractor.register(__webpack_require__(/*! ./lang/lilypond.js */ "./node_modules/refractor/lang/lilypond.js"))
refractor.register(__webpack_require__(/*! ./lang/liquid.js */ "./node_modules/refractor/lang/liquid.js"))
refractor.register(__webpack_require__(/*! ./lang/lisp.js */ "./node_modules/refractor/lang/lisp.js"))
refractor.register(__webpack_require__(/*! ./lang/livescript.js */ "./node_modules/refractor/lang/livescript.js"))
refractor.register(__webpack_require__(/*! ./lang/lolcode.js */ "./node_modules/refractor/lang/lolcode.js"))
refractor.register(__webpack_require__(/*! ./lang/lua.js */ "./node_modules/refractor/lang/lua.js"))
refractor.register(__webpack_require__(/*! ./lang/makefile.js */ "./node_modules/refractor/lang/makefile.js"))
refractor.register(__webpack_require__(/*! ./lang/markdown.js */ "./node_modules/refractor/lang/markdown.js"))
refractor.register(__webpack_require__(/*! ./lang/markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js"))
refractor.register(__webpack_require__(/*! ./lang/matlab.js */ "./node_modules/refractor/lang/matlab.js"))
refractor.register(__webpack_require__(/*! ./lang/mel.js */ "./node_modules/refractor/lang/mel.js"))
refractor.register(__webpack_require__(/*! ./lang/mizar.js */ "./node_modules/refractor/lang/mizar.js"))
refractor.register(__webpack_require__(/*! ./lang/monkey.js */ "./node_modules/refractor/lang/monkey.js"))
refractor.register(__webpack_require__(/*! ./lang/n1ql.js */ "./node_modules/refractor/lang/n1ql.js"))
refractor.register(__webpack_require__(/*! ./lang/n4js.js */ "./node_modules/refractor/lang/n4js.js"))
refractor.register(__webpack_require__(/*! ./lang/nand2tetris-hdl.js */ "./node_modules/refractor/lang/nand2tetris-hdl.js"))
refractor.register(__webpack_require__(/*! ./lang/nasm.js */ "./node_modules/refractor/lang/nasm.js"))
refractor.register(__webpack_require__(/*! ./lang/nginx.js */ "./node_modules/refractor/lang/nginx.js"))
refractor.register(__webpack_require__(/*! ./lang/nim.js */ "./node_modules/refractor/lang/nim.js"))
refractor.register(__webpack_require__(/*! ./lang/nix.js */ "./node_modules/refractor/lang/nix.js"))
refractor.register(__webpack_require__(/*! ./lang/nsis.js */ "./node_modules/refractor/lang/nsis.js"))
refractor.register(__webpack_require__(/*! ./lang/objectivec.js */ "./node_modules/refractor/lang/objectivec.js"))
refractor.register(__webpack_require__(/*! ./lang/ocaml.js */ "./node_modules/refractor/lang/ocaml.js"))
refractor.register(__webpack_require__(/*! ./lang/opencl.js */ "./node_modules/refractor/lang/opencl.js"))
refractor.register(__webpack_require__(/*! ./lang/oz.js */ "./node_modules/refractor/lang/oz.js"))
refractor.register(__webpack_require__(/*! ./lang/parigp.js */ "./node_modules/refractor/lang/parigp.js"))
refractor.register(__webpack_require__(/*! ./lang/parser.js */ "./node_modules/refractor/lang/parser.js"))
refractor.register(__webpack_require__(/*! ./lang/pascal.js */ "./node_modules/refractor/lang/pascal.js"))
refractor.register(__webpack_require__(/*! ./lang/pascaligo.js */ "./node_modules/refractor/lang/pascaligo.js"))
refractor.register(__webpack_require__(/*! ./lang/pcaxis.js */ "./node_modules/refractor/lang/pcaxis.js"))
refractor.register(__webpack_require__(/*! ./lang/perl.js */ "./node_modules/refractor/lang/perl.js"))
refractor.register(__webpack_require__(/*! ./lang/php-extras.js */ "./node_modules/refractor/lang/php-extras.js"))
refractor.register(__webpack_require__(/*! ./lang/php.js */ "./node_modules/refractor/lang/php.js"))
refractor.register(__webpack_require__(/*! ./lang/phpdoc.js */ "./node_modules/refractor/lang/phpdoc.js"))
refractor.register(__webpack_require__(/*! ./lang/plsql.js */ "./node_modules/refractor/lang/plsql.js"))
refractor.register(__webpack_require__(/*! ./lang/powershell.js */ "./node_modules/refractor/lang/powershell.js"))
refractor.register(__webpack_require__(/*! ./lang/processing.js */ "./node_modules/refractor/lang/processing.js"))
refractor.register(__webpack_require__(/*! ./lang/prolog.js */ "./node_modules/refractor/lang/prolog.js"))
refractor.register(__webpack_require__(/*! ./lang/properties.js */ "./node_modules/refractor/lang/properties.js"))
refractor.register(__webpack_require__(/*! ./lang/protobuf.js */ "./node_modules/refractor/lang/protobuf.js"))
refractor.register(__webpack_require__(/*! ./lang/pug.js */ "./node_modules/refractor/lang/pug.js"))
refractor.register(__webpack_require__(/*! ./lang/puppet.js */ "./node_modules/refractor/lang/puppet.js"))
refractor.register(__webpack_require__(/*! ./lang/pure.js */ "./node_modules/refractor/lang/pure.js"))
refractor.register(__webpack_require__(/*! ./lang/python.js */ "./node_modules/refractor/lang/python.js"))
refractor.register(__webpack_require__(/*! ./lang/q.js */ "./node_modules/refractor/lang/q.js"))
refractor.register(__webpack_require__(/*! ./lang/qore.js */ "./node_modules/refractor/lang/qore.js"))
refractor.register(__webpack_require__(/*! ./lang/r.js */ "./node_modules/refractor/lang/r.js"))
refractor.register(__webpack_require__(/*! ./lang/reason.js */ "./node_modules/refractor/lang/reason.js"))
refractor.register(__webpack_require__(/*! ./lang/regex.js */ "./node_modules/refractor/lang/regex.js"))
refractor.register(__webpack_require__(/*! ./lang/renpy.js */ "./node_modules/refractor/lang/renpy.js"))
refractor.register(__webpack_require__(/*! ./lang/rest.js */ "./node_modules/refractor/lang/rest.js"))
refractor.register(__webpack_require__(/*! ./lang/rip.js */ "./node_modules/refractor/lang/rip.js"))
refractor.register(__webpack_require__(/*! ./lang/roboconf.js */ "./node_modules/refractor/lang/roboconf.js"))
refractor.register(__webpack_require__(/*! ./lang/ruby.js */ "./node_modules/refractor/lang/ruby.js"))
refractor.register(__webpack_require__(/*! ./lang/rust.js */ "./node_modules/refractor/lang/rust.js"))
refractor.register(__webpack_require__(/*! ./lang/sas.js */ "./node_modules/refractor/lang/sas.js"))
refractor.register(__webpack_require__(/*! ./lang/sass.js */ "./node_modules/refractor/lang/sass.js"))
refractor.register(__webpack_require__(/*! ./lang/scala.js */ "./node_modules/refractor/lang/scala.js"))
refractor.register(__webpack_require__(/*! ./lang/scheme.js */ "./node_modules/refractor/lang/scheme.js"))
refractor.register(__webpack_require__(/*! ./lang/scss.js */ "./node_modules/refractor/lang/scss.js"))
refractor.register(__webpack_require__(/*! ./lang/shell-session.js */ "./node_modules/refractor/lang/shell-session.js"))
refractor.register(__webpack_require__(/*! ./lang/smalltalk.js */ "./node_modules/refractor/lang/smalltalk.js"))
refractor.register(__webpack_require__(/*! ./lang/smarty.js */ "./node_modules/refractor/lang/smarty.js"))
refractor.register(__webpack_require__(/*! ./lang/soy.js */ "./node_modules/refractor/lang/soy.js"))
refractor.register(__webpack_require__(/*! ./lang/splunk-spl.js */ "./node_modules/refractor/lang/splunk-spl.js"))
refractor.register(__webpack_require__(/*! ./lang/sql.js */ "./node_modules/refractor/lang/sql.js"))
refractor.register(__webpack_require__(/*! ./lang/stylus.js */ "./node_modules/refractor/lang/stylus.js"))
refractor.register(__webpack_require__(/*! ./lang/swift.js */ "./node_modules/refractor/lang/swift.js"))
refractor.register(__webpack_require__(/*! ./lang/t4-cs.js */ "./node_modules/refractor/lang/t4-cs.js"))
refractor.register(__webpack_require__(/*! ./lang/t4-templating.js */ "./node_modules/refractor/lang/t4-templating.js"))
refractor.register(__webpack_require__(/*! ./lang/t4-vb.js */ "./node_modules/refractor/lang/t4-vb.js"))
refractor.register(__webpack_require__(/*! ./lang/tap.js */ "./node_modules/refractor/lang/tap.js"))
refractor.register(__webpack_require__(/*! ./lang/tcl.js */ "./node_modules/refractor/lang/tcl.js"))
refractor.register(__webpack_require__(/*! ./lang/textile.js */ "./node_modules/refractor/lang/textile.js"))
refractor.register(__webpack_require__(/*! ./lang/toml.js */ "./node_modules/refractor/lang/toml.js"))
refractor.register(__webpack_require__(/*! ./lang/tsx.js */ "./node_modules/refractor/lang/tsx.js"))
refractor.register(__webpack_require__(/*! ./lang/tt2.js */ "./node_modules/refractor/lang/tt2.js"))
refractor.register(__webpack_require__(/*! ./lang/twig.js */ "./node_modules/refractor/lang/twig.js"))
refractor.register(__webpack_require__(/*! ./lang/typescript.js */ "./node_modules/refractor/lang/typescript.js"))
refractor.register(__webpack_require__(/*! ./lang/vala.js */ "./node_modules/refractor/lang/vala.js"))
refractor.register(__webpack_require__(/*! ./lang/vbnet.js */ "./node_modules/refractor/lang/vbnet.js"))
refractor.register(__webpack_require__(/*! ./lang/velocity.js */ "./node_modules/refractor/lang/velocity.js"))
refractor.register(__webpack_require__(/*! ./lang/verilog.js */ "./node_modules/refractor/lang/verilog.js"))
refractor.register(__webpack_require__(/*! ./lang/vhdl.js */ "./node_modules/refractor/lang/vhdl.js"))
refractor.register(__webpack_require__(/*! ./lang/vim.js */ "./node_modules/refractor/lang/vim.js"))
refractor.register(__webpack_require__(/*! ./lang/visual-basic.js */ "./node_modules/refractor/lang/visual-basic.js"))
refractor.register(__webpack_require__(/*! ./lang/wasm.js */ "./node_modules/refractor/lang/wasm.js"))
refractor.register(__webpack_require__(/*! ./lang/wiki.js */ "./node_modules/refractor/lang/wiki.js"))
refractor.register(__webpack_require__(/*! ./lang/xeora.js */ "./node_modules/refractor/lang/xeora.js"))
refractor.register(__webpack_require__(/*! ./lang/xojo.js */ "./node_modules/refractor/lang/xojo.js"))
refractor.register(__webpack_require__(/*! ./lang/xquery.js */ "./node_modules/refractor/lang/xquery.js"))
refractor.register(__webpack_require__(/*! ./lang/yaml.js */ "./node_modules/refractor/lang/yaml.js"))


/***/ }),

/***/ "./node_modules/refractor/lang/abap.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/abap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = abap
abap.displayName = 'abap'
abap.aliases = []
function abap(Prism) {
  Prism.languages.abap = {
    comment: /^\*.*/m,
    string: /(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
    'string-template': {
      pattern: /([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/,
      lookbehind: true,
      alias: 'string'
    },
    /* End Of Line comments should not interfere with strings when the
quote character occurs within them. We assume a string being highlighted
inside an EOL comment is more acceptable than the opposite.
*/
    'eol-comment': {
      pattern: /(^|\s)".*/m,
      lookbehind: true,
      alias: 'comment'
    },
    keyword: {
      pattern: /(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,
      lookbehind: true
    },
    /* Numbers can be only integers. Decimal or Hex appear only as strings */
    number: /\b\d+\b/,
    /* Operators must always be surrounded by whitespace, they cannot be put
adjacent to operands.
*/
    operator: {
      pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,
      lookbehind: true
    },
    'string-operator': {
      pattern: /(\s)&&?(?=\s)/,
      lookbehind: true,
      /* The official editor highlights */
      alias: 'keyword'
    },
    'token-operator': [
      {
        /* Special operators used to access structure components, class methods/attributes, etc. */
        pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/,
        lookbehind: true,
        alias: 'punctuation'
      },
      {
        /* Special tokens used do delimit string templates */
        pattern: /[|{}]/,
        alias: 'punctuation'
      }
    ],
    punctuation: /[,.:()]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/abnf.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/abnf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = abnf
abnf.displayName = 'abnf'
abnf.aliases = []
function abnf(Prism) {
  ;(function(Prism) {
    var coreRules =
      '(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)'
    Prism.languages.abnf = {
      comment: /;.*/,
      string: {
        pattern: /(?:%[is])?"[^"\n\r]*"/,
        greedy: true,
        inside: {
          punctuation: /^%[is]/
        }
      },
      range: {
        pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
        alias: 'number'
      },
      terminal: {
        pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
        alias: 'number'
      },
      repetition: {
        pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
        lookbehind: true,
        alias: 'operator'
      },
      definition: {
        pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^>\r\n]*>)(?=\s*=)/m,
        lookbehind: true,
        alias: 'keyword',
        inside: {
          punctuation: /<|>/
        }
      },
      'core-rule': {
        pattern: RegExp(
          '(?:(^|[^<\\w-])' + coreRules + '|<' + coreRules + '>)(?![\\w-])',
          'i'
        ),
        lookbehind: true,
        alias: ['rule', 'constant'],
        inside: {
          punctuation: /<|>/
        }
      },
      rule: {
        pattern: /(^|[^<\w-])[a-z][\w-]*|<[^>\r\n]*>/i,
        lookbehind: true,
        inside: {
          punctuation: /<|>/
        }
      },
      operator: /=\/?|\//,
      punctuation: /[()\[\]]/
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/actionscript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/actionscript.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = actionscript
actionscript.displayName = 'actionscript'
actionscript.aliases = []
function actionscript(Prism) {
  Prism.languages.actionscript = Prism.languages.extend('javascript', {
    keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
  })
  Prism.languages.actionscript['class-name'].alias = 'function'
  if (Prism.languages.markup) {
    Prism.languages.insertBefore('actionscript', 'string', {
      xml: {
        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
        lookbehind: true,
        inside: {
          rest: Prism.languages.markup
        }
      }
    })
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/ada.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ada.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ada
ada.displayName = 'ada'
ada.aliases = []
function ada(Prism) {
  Prism.languages.ada = {
    comment: /--.*/,
    string: /"(?:""|[^"\r\f\n])*"/i,
    number: [
      {
        pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
      },
      {
        pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
      }
    ],
    'attr-name': /\b'\w+/i,
    keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
    boolean: /\b(?:true|false)\b/i,
    operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
    punctuation: /\.\.?|[,;():]/,
    char: /'.'/,
    variable: /\b[a-z](?:[_a-z\d])*\b/i
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/apacheconf.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/apacheconf.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = apacheconf
apacheconf.displayName = 'apacheconf'
apacheconf.aliases = []
function apacheconf(Prism) {
  Prism.languages.apacheconf = {
    comment: /#.*/,
    'directive-inline': {
      pattern: /(^\s*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
      lookbehind: true,
      alias: 'property'
    },
    'directive-block': {
      pattern: /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b *.*>/i,
      inside: {
        'directive-block': {
          pattern: /^<\/?\w+/,
          inside: {
            punctuation: /^<\/?/
          },
          alias: 'tag'
        },
        'directive-block-parameter': {
          pattern: /.*[^>]/,
          inside: {
            punctuation: /:/,
            string: {
              pattern: /("|').*\1/,
              inside: {
                variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
              }
            }
          },
          alias: 'attr-value'
        },
        punctuation: />/
      },
      alias: 'tag'
    },
    'directive-flags': {
      pattern: /\[(?:\w,?)+\]/,
      alias: 'keyword'
    },
    string: {
      pattern: /("|').*\1/,
      inside: {
        variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
      }
    },
    variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
    regex: /\^?.*\$|\^.*\$?/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/apl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/apl.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = apl
apl.displayName = 'apl'
apl.aliases = []
function apl(Prism) {
  Prism.languages.apl = {
    comment: /(?:⍝|#[! ]).*$/m,
    string: {
      pattern: /'(?:[^'\r\n]|'')*'/,
      greedy: true
    },
    number: /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
    statement: /:[A-Z][a-z][A-Za-z]*\b/,
    'system-function': {
      pattern: /⎕[A-Z]+/i,
      alias: 'function'
    },
    constant: /[⍬⌾#⎕⍞]/,
    function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
    'monadic-operator': {
      pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
      alias: 'operator'
    },
    'dyadic-operator': {
      pattern: /[.⍣⍠⍤∘⌸@⌺]/,
      alias: 'operator'
    },
    assignment: {
      pattern: /←/,
      alias: 'keyword'
    },
    punctuation: /[\[;\]()◇⋄]/,
    dfn: {
      pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
      alias: 'builtin'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/applescript.js":
/*!****************************************************!*\
  !*** ./node_modules/refractor/lang/applescript.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = applescript
applescript.displayName = 'applescript'
applescript.aliases = []
function applescript(Prism) {
  Prism.languages.applescript = {
    comment: [
      // Allow one level of nesting
      /\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/,
      /--.+/,
      /#.+/
    ],
    string: /"(?:\\.|[^"\\\r\n])*"/,
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i,
    operator: [
      /[&=≠≤≥*+\-\/÷^]|[<>]=?/,
      /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/
    ],
    keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
    class: {
      pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
      alias: 'builtin'
    },
    punctuation: /[{}():,¬«»《》]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/arduino.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/arduino.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorCpp = __webpack_require__(/*! ./cpp.js */ "./node_modules/refractor/lang/cpp.js")
module.exports = arduino
arduino.displayName = 'arduino'
arduino.aliases = []
function arduino(Prism) {
  Prism.register(refractorCpp)
  Prism.languages.arduino = Prism.languages.extend('cpp', {
    keyword: /\b(?:setup|if|else|while|do|for|return|in|instanceof|default|function|loop|goto|switch|case|new|try|throw|catch|finally|null|break|continue|boolean|bool|void|byte|word|string|String|array|int|long|integer|double)\b/,
    builtin: /\b(?:KeyboardController|MouseController|SoftwareSerial|EthernetServer|EthernetClient|LiquidCrystal|LiquidCrystal_I2C|RobotControl|GSMVoiceCall|EthernetUDP|EsploraTFT|HttpClient|RobotMotor|WiFiClient|GSMScanner|FileSystem|Scheduler|GSMServer|YunClient|YunServer|IPAddress|GSMClient|GSMModem|Keyboard|Ethernet|Console|GSMBand|Esplora|Stepper|Process|WiFiUDP|GSM_SMS|Mailbox|USBHost|Firmata|PImage|Client|Server|GSMPIN|FileIO|Bridge|Serial|EEPROM|Stream|Mouse|Audio|Servo|File|Task|GPRS|WiFi|Wire|TFT|GSM|SPI|SD|runShellCommandAsynchronously|analogWriteResolution|retrieveCallingNumber|printFirmwareVersion|analogReadResolution|sendDigitalPortPair|noListenOnLocalhost|readJoystickButton|setFirmwareVersion|readJoystickSwitch|scrollDisplayRight|getVoiceCallStatus|scrollDisplayLeft|writeMicroseconds|delayMicroseconds|beginTransmission|getSignalStrength|runAsynchronously|getAsynchronously|listenOnLocalhost|getCurrentCarrier|readAccelerometer|messageAvailable|sendDigitalPorts|lineFollowConfig|countryNameWrite|runShellCommand|readStringUntil|rewindDirectory|readTemperature|setClockDivider|readLightSensor|endTransmission|analogReference|detachInterrupt|countryNameRead|attachInterrupt|encryptionType|readBytesUntil|robotNameWrite|readMicrophone|robotNameRead|cityNameWrite|userNameWrite|readJoystickY|readJoystickX|mouseReleased|openNextFile|scanNetworks|noInterrupts|digitalWrite|beginSpeaker|mousePressed|isActionDone|mouseDragged|displayLogos|noAutoscroll|addParameter|remoteNumber|getModifiers|keyboardRead|userNameRead|waitContinue|processInput|parseCommand|printVersion|readNetworks|writeMessage|blinkVersion|cityNameRead|readMessage|setDataMode|parsePacket|isListening|setBitOrder|beginPacket|isDirectory|motorsWrite|drawCompass|digitalRead|clearScreen|serialEvent|rightToLeft|setTextSize|leftToRight|requestFrom|keyReleased|compassRead|analogWrite|interrupts|WiFiServer|disconnect|playMelody|parseFloat|autoscroll|getPINUsed|setPINUsed|setTimeout|sendAnalog|readSlider|analogRead|beginWrite|createChar|motorsStop|keyPressed|tempoWrite|readButton|subnetMask|debugPrint|macAddress|writeGreen|randomSeed|attachGPRS|readString|sendString|remotePort|releaseAll|mouseMoved|background|getXChange|getYChange|answerCall|getResult|voiceCall|endPacket|constrain|getSocket|writeJSON|getButton|available|connected|findUntil|readBytes|exitValue|readGreen|writeBlue|startLoop|IPAddress|isPressed|sendSysex|pauseMode|gatewayIP|setCursor|getOemKey|tuneWrite|noDisplay|loadImage|switchPIN|onRequest|onReceive|changePIN|playFile|noBuffer|parseInt|overflow|checkPIN|knobRead|beginTFT|bitClear|updateIR|bitWrite|position|writeRGB|highByte|writeRed|setSpeed|readBlue|noStroke|remoteIP|transfer|shutdown|hangCall|beginSMS|endWrite|attached|maintain|noCursor|checkReg|checkPUK|shiftOut|isValid|shiftIn|pulseIn|connect|println|localIP|pinMode|getIMEI|display|noBlink|process|getBand|running|beginSD|drawBMP|lowByte|setBand|release|bitRead|prepare|pointTo|readRed|setMode|noFill|remove|listen|stroke|detach|attach|noTone|exists|buffer|height|bitSet|circle|config|cursor|random|IRread|setDNS|endSMS|getKey|micros|millis|begin|print|write|ready|flush|width|isPIN|blink|clear|press|mkdir|rmdir|close|point|yield|image|BSSID|click|delay|read|text|move|peek|beep|rect|line|open|seek|fill|size|turn|stop|home|find|step|tone|sqrt|RSSI|SSID|end|bit|tan|cos|sin|pow|map|abs|max|min|get|run|put)\b/,
    constant: /\b(?:DIGITAL_MESSAGE|FIRMATA_STRING|ANALOG_MESSAGE|REPORT_DIGITAL|REPORT_ANALOG|INPUT_PULLUP|SET_PIN_MODE|INTERNAL2V56|SYSTEM_RESET|LED_BUILTIN|INTERNAL1V1|SYSEX_START|INTERNAL|EXTERNAL|DEFAULT|OUTPUT|INPUT|HIGH|LOW)\b/
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/arff.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/arff.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = arff
arff.displayName = 'arff'
arff.aliases = []
function arff(Prism) {
  Prism.languages.arff = {
    comment: /%.*/,
    string: {
      pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    keyword: /@(?:attribute|data|end|relation)\b/i,
    number: /\b\d+(?:\.\d+)?\b/,
    punctuation: /[{},]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/asciidoc.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/asciidoc.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = asciidoc
asciidoc.displayName = 'asciidoc'
asciidoc.aliases = ['adoc']
function asciidoc(Prism) {
  ;(function(Prism) {
    var attributes = {
      pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,
      lookbehind: true,
      inside: {
        quoted: {
          pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
          inside: {
            punctuation: /^[$`]|[$`]$/
          }
        },
        interpreted: {
          pattern: /'(?:[^'\\]|\\.)*'/,
          inside: {
            punctuation: /^'|'$/ // See rest below
          }
        },
        string: /"(?:[^"\\]|\\.)*"/,
        variable: /\w+(?==)/,
        punctuation: /^\[|\]$|,/,
        operator: /=/,
        // The negative look-ahead prevents blank matches
        'attr-value': /(?!^\s+$).+/
      }
    }
    var asciidoc = (Prism.languages.asciidoc = {
      'comment-block': {
        pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
        alias: 'comment'
      },
      table: {
        pattern: /^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,
        inside: {
          specifiers: {
            pattern: /(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,
            alias: 'attr-value'
          },
          punctuation: {
            pattern: /(^|[^\\])[|!]=*/,
            lookbehind: true // See rest below
          }
        }
      },
      'passthrough-block': {
        pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: {
          punctuation: /^\++|\++$/ // See rest below
        }
      },
      // Literal blocks and listing blocks
      'literal-block': {
        pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: {
          punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/ // See rest below
        }
      },
      // Sidebar blocks, quote blocks, example blocks and open blocks
      'other-block': {
        pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
        inside: {
          punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/ // See rest below
        }
      },
      // list-punctuation and list-label must appear before indented-block
      'list-punctuation': {
        pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
        lookbehind: true,
        alias: 'punctuation'
      },
      'list-label': {
        pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
        lookbehind: true,
        alias: 'symbol'
      },
      'indented-block': {
        pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
        lookbehind: true
      },
      comment: /^\/\/.*/m,
      title: {
        pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,
        alias: 'important',
        inside: {
          punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/ // See rest below
        }
      },
      'attribute-entry': {
        pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
        alias: 'tag'
      },
      attributes: attributes,
      hr: {
        pattern: /^'{3,}$/m,
        alias: 'punctuation'
      },
      'page-break': {
        pattern: /^<{3,}$/m,
        alias: 'punctuation'
      },
      admonition: {
        pattern: /^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,
        alias: 'keyword'
      },
      callout: [
        {
          pattern: /(^[ \t]*)<?\d*>/m,
          lookbehind: true,
          alias: 'symbol'
        },
        {
          pattern: /<\d+>/,
          alias: 'symbol'
        }
      ],
      macro: {
        pattern: /\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
        inside: {
          function: /^[a-z\d-]+(?=:)/,
          punctuation: /^::?/,
          attributes: {
            pattern: /(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
            inside: attributes.inside
          }
        }
      },
      inline: {
        /*
The initial look-behind prevents the highlighting of escaped quoted text.
Quoted text can be multi-line but cannot span an empty line.
All quoted text can have attributes before [foobar, 'foobar', baz="bar"].
First, we handle the constrained quotes.
Those must be bounded by non-word chars and cannot have spaces between the delimiter and the first char.
They are, in order: _emphasis_, ``double quotes'', `single quotes', `monospace`, 'emphasis', *strong*, +monospace+ and #unquoted#
Then we handle the unconstrained quotes.
Those do not have the restrictions of the constrained quotes.
They are, in order: __emphasis__, **strong**, ++monospace++, +++passthrough+++, ##unquoted##, $$passthrough$$, ~subscript~, ^superscript^, {attribute-reference}, [[anchor]], [[[bibliography anchor]]], <<xref>>, (((indexes))) and ((indexes))
*/
        pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?: ['`]|.)+?(?:(?:\r?\n|\r)(?: ['`]|.)+?)*['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
        lookbehind: true,
        inside: {
          attributes: attributes,
          url: {
            pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
            inside: {
              punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
            }
          },
          'attribute-ref': {
            pattern: /^\{.+\}$/,
            inside: {
              variable: {
                pattern: /(^\{)[a-z\d,+_-]+/,
                lookbehind: true
              },
              operator: /^[=?!#%@$]|!(?=[:}])/,
              punctuation: /^\{|\}$|::?/
            }
          },
          italic: {
            pattern: /^(['_])[\s\S]+\1$/,
            inside: {
              punctuation: /^(?:''?|__?)|(?:''?|__?)$/
            }
          },
          bold: {
            pattern: /^\*[\s\S]+\*$/,
            inside: {
              punctuation: /^\*\*?|\*\*?$/
            }
          },
          punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
        }
      },
      replacement: {
        pattern: /\((?:C|TM|R)\)/,
        alias: 'builtin'
      },
      entity: /&#?[\da-z]{1,8};/i,
      'line-continuation': {
        pattern: /(^| )\+$/m,
        lookbehind: true,
        alias: 'punctuation'
      }
    }) // Allow some nesting. There is no recursion though, so cloning should not be needed.
    function copyFromAsciiDoc(keys) {
      keys = keys.split(' ')
      var o = {}
      for (var i = 0, l = keys.length; i < l; i++) {
        o[keys[i]] = asciidoc[keys[i]]
      }
      return o
    }
    attributes.inside['interpreted'].inside.rest = copyFromAsciiDoc(
      'macro inline replacement entity'
    )
    asciidoc['passthrough-block'].inside.rest = copyFromAsciiDoc('macro')
    asciidoc['literal-block'].inside.rest = copyFromAsciiDoc('callout')
    asciidoc['table'].inside.rest = copyFromAsciiDoc(
      'comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation'
    )
    asciidoc['other-block'].inside.rest = copyFromAsciiDoc(
      'table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation'
    )
    asciidoc['title'].inside.rest = copyFromAsciiDoc(
      'macro inline replacement entity'
    ) // Plugin to make entity title show the real entity, idea by Roman Komarov
    Prism.hooks.add('wrap', function(env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
      }
    })
    Prism.languages.adoc = Prism.languages.asciidoc
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/asm6502.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/asm6502.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = asm6502
asm6502.displayName = 'asm6502'
asm6502.aliases = []
function asm6502(Prism) {
  Prism.languages.asm6502 = {
    comment: /;.*/,
    directive: {
      pattern: /\.\w+(?= )/,
      alias: 'keyword'
    },
    string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    opcode: {
      pattern: /\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA)\b/,
      alias: 'property'
    },
    hexnumber: {
      pattern: /#?\$[\da-f]{2,4}/i,
      alias: 'string'
    },
    binarynumber: {
      pattern: /#?%[01]+/,
      alias: 'string'
    },
    decimalnumber: {
      pattern: /#?\d+/,
      alias: 'string'
    },
    register: {
      pattern: /\b[xya]\b/i,
      alias: 'variable'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/aspnet.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/aspnet.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = aspnet
aspnet.displayName = 'aspnet'
aspnet.aliases = []
function aspnet(Prism) {
  Prism.languages.aspnet = Prism.languages.extend('markup', {
    'page-directive tag': {
      pattern: /<%\s*@.*%>/i,
      inside: {
        'page-directive tag': /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
        rest: Prism.languages.markup.tag.inside
      }
    },
    'directive tag': {
      pattern: /<%.*%>/i,
      inside: {
        'directive tag': /<%\s*?[$=%#:]{0,2}|%>/i,
        rest: Prism.languages.csharp
      }
    }
  }) // Regexp copied from prism-markup, with a negative look-ahead added
  Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i // match directives of attribute value foo="<% Bar %>"
  Prism.languages.insertBefore(
    'inside',
    'punctuation',
    {
      'directive tag': Prism.languages.aspnet['directive tag']
    },
    Prism.languages.aspnet.tag.inside['attr-value']
  )
  Prism.languages.insertBefore('aspnet', 'comment', {
    'asp comment': /<%--[\s\S]*?--%>/
  }) // script runat="server" contains csharp, not javascript
  Prism.languages.insertBefore(
    'aspnet',
    Prism.languages.javascript ? 'script' : 'tag',
    {
      'asp script': {
        pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: true,
        inside: Prism.languages.csharp || {}
      }
    }
  )
}


/***/ }),

/***/ "./node_modules/refractor/lang/autohotkey.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/autohotkey.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = autohotkey
autohotkey.displayName = 'autohotkey'
autohotkey.aliases = []
function autohotkey(Prism) {
  // NOTES - follows first-first highlight method, block is locked after highlight, different from SyntaxHl
  Prism.languages.autohotkey = {
    comment: {
      pattern: /(^[^";\n]*("[^"\n]*?"[^"\n]*?)*)(?:;.*$|^\s*\/\*[\s\S]*\n\*\/)/m,
      lookbehind: true
    },
    string: /"(?:[^"\n\r]|"")*"/m,
    function: /[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+?(?=\()/m,
    //function - don't use .*\) in the end bcoz string locks it
    tag: /^[ \t]*[^\s:]+?(?=:(?:[^:]|$))/m,
    //labels
    variable: /%\w+%/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
    operator: /\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,
    punctuation: /[{}[\]():,]/,
    boolean: /\b(?:true|false)\b/,
    selector: /\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,
    constant: /\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_formatfloat|a_formatinteger|a_gui|a_guievent|a_guicontrol|a_guicontrolevent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|programfiles|a_programfiles|a_programs|a_programscommon|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel)\b/i,
    builtin: /\b(?:abs|acos|asc|asin|atan|ceil|chr|class|cos|dllcall|exp|fileexist|Fileopen|floor|il_add|il_create|il_destroy|instr|substr|isfunc|islabel|IsObject|ln|log|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|onmessage|numget|numput|registercallback|regexmatch|regexreplace|round|sin|tan|sqrt|strlen|sb_seticon|sb_setparts|sb_settext|strsplit|tv_add|tv_delete|tv_getchild|tv_getcount|tv_getnext|tv_get|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__New|__Call|__Get|__Set)\b/i,
    symbol: /\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,
    important: /#\b(?:AllowSameLineComments|ClipboardTimeout|CommentFlag|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InstallKeybdHook|InstallMouseHook|KeyHistory|LTrim|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|WinActivateForce)\b/i,
    keyword: /\b(?:Abort|AboveNormal|Add|ahk_class|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Region|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|TryAgain|Type|UnCheck|underline|Unicode|Unlock|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/autoit.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/autoit.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = autoit
autoit.displayName = 'autoit'
autoit.aliases = []
function autoit(Prism) {
  Prism.languages.autoit = {
    comment: [
      /;.*/,
      {
        // The multi-line comments delimiters can actually be commented out with ";"
        pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
        lookbehind: true
      }
    ],
    url: {
      pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
      lookbehind: true
    },
    string: {
      pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
      greedy: true,
      inside: {
        variable: /([%$@])\w+\1/
      }
    },
    directive: {
      pattern: /(^\s*)#\w+/m,
      lookbehind: true,
      alias: 'keyword'
    },
    function: /\b\w+(?=\()/,
    // Variables and macros
    variable: /[$@]\w+/,
    keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    boolean: /\b(?:True|False)\b/i,
    operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
    punctuation: /[\[\]().,:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/bash.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/bash.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bash
bash.displayName = 'bash'
bash.aliases = ['shell']
function bash(Prism) {
  ;(function(Prism) {
    // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
    // + LC_ALL, RANDOM, REPLY, SECONDS.
    // + make sure PS1..4 are here as they are not always set,
    // - some useless things.
    var envVars =
      '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b'
    var insideString = {
      environment: {
        pattern: RegExp('\\$' + envVars),
        alias: 'constant'
      },
      variable: [
        // [0]: Arithmetic Environment
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: true,
          inside: {
            // If there is a $ sign at the beginning highlight $(( and )) as variable
            variable: [
              {
                pattern: /(^\$\(\([\s\S]+)\)\)/,
                lookbehind: true
              },
              /^\$\(\(/
            ],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
            // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
            operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            // If there is no $ sign at the beginning highlight (( and )) as punctuation
            punctuation: /\(\(?|\)\)?|,|;/
          }
        }, // [1]: Command Substitution
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: true,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        }, // [2]: Brace expansion
        {
          pattern: /\$\{[^}]+\}/,
          greedy: true,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp('(\\{)' + envVars),
              lookbehind: true,
              alias: 'constant'
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      // Escape sequences from echo and printf's manuals, and escaped quotes.
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
    }
    Prism.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: 'important'
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: true
      },
      'function-name': [
        // a) function foo {
        // b) foo() {
        // c) function foo() {
        // but not “foo {”
        {
          // a) and c)
          pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: true,
          alias: 'function'
        },
        {
          // b)
          pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
          alias: 'function'
        }
      ],
      // Highlight variable names as variables in for and select beginnings.
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: true
      },
      // Highlight variable names as variables in the left-hand part
      // of assignments (“=” and “+=”).
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
            lookbehind: true,
            alias: 'constant'
          }
        },
        alias: 'variable',
        lookbehind: true
      },
      string: [
        // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        }, // Here-document with quotes around the tag
        // → No expansion (so no “inside”).
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
          lookbehind: true,
          greedy: true
        }, // “Normal” string
        {
          pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
          greedy: true,
          inside: insideString
        }
      ],
      environment: {
        pattern: RegExp('\\$?' + envVars),
        alias: 'constant'
      },
      variable: insideString.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
        lookbehind: true,
        // Alias added to make those easier to distinguish from strings.
        alias: 'class-name'
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      'file-descriptor': {
        pattern: /\B&\d\b/,
        alias: 'important'
      },
      operator: {
        // Lots of redirections here, but not just that.
        pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
        inside: {
          'file-descriptor': {
            pattern: /^\d/,
            alias: 'important'
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: true
      }
    }
    /* Patterns in command substitution. */
    var toBeCopied = [
      'comment',
      'function-name',
      'for-or-select',
      'assign-left',
      'string',
      'environment',
      'function',
      'keyword',
      'builtin',
      'boolean',
      'file-descriptor',
      'operator',
      'punctuation',
      'number'
    ]
    var inside = insideString.variable[1].inside
    for (var i = 0; i < toBeCopied.length; i++) {
      inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]]
    }
    Prism.languages.shell = Prism.languages.bash
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/basic.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/basic.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = basic
basic.displayName = 'basic'
basic.aliases = []
function basic(Prism) {
  Prism.languages.basic = {
    comment: {
      pattern: /(?:!|REM\b).+/i,
      inside: {
        keyword: /^REM/i
      }
    },
    string: {
      pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
      greedy: true
    },
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    punctuation: /[,;:()]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/batch.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/batch.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = batch
batch.displayName = 'batch'
batch.aliases = []
function batch(Prism) {
  ;(function(Prism) {
    var variable = /%%?[~:\w]+%?|!\S+!/
    var parameter = {
      pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
      alias: 'attr-name',
      inside: {
        punctuation: /:/
      }
    }
    var string = /"[^"]*"/
    var number = /(?:\b|-)\d+\b/
    Prism.languages.batch = {
      comment: [
        /^::.*/m,
        {
          pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true
        }
      ],
      label: {
        pattern: /^:.*/m,
        alias: 'property'
      },
      command: [
        {
          // FOR command
          pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
          lookbehind: true,
          inside: {
            keyword: /^for\b|\b(?:in|do)\b/i,
            string: string,
            parameter: parameter,
            variable: variable,
            number: number,
            punctuation: /[()',]/
          }
        },
        {
          // IF command
          pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
          lookbehind: true,
          inside: {
            keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
            string: string,
            parameter: parameter,
            variable: variable,
            number: number,
            operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
          }
        },
        {
          // ELSE command
          pattern: /((?:^|[&()])[ \t]*)else\b/im,
          lookbehind: true,
          inside: {
            keyword: /^else\b/i
          }
        },
        {
          // SET command
          pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true,
          inside: {
            keyword: /^set\b/i,
            string: string,
            parameter: parameter,
            variable: [variable, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
            number: number,
            operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
            punctuation: /[()',]/
          }
        },
        {
          // Other commands
          pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true,
          inside: {
            keyword: /^\w+\b/i,
            string: string,
            parameter: parameter,
            label: {
              pattern: /(^\s*):\S+/m,
              lookbehind: true,
              alias: 'property'
            },
            variable: variable,
            number: number,
            operator: /\^/
          }
        }
      ],
      operator: /[&@]/,
      punctuation: /[()']/
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/bison.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/bison.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = bison
bison.displayName = 'bison'
bison.aliases = []
function bison(Prism) {
  Prism.register(refractorC)
  Prism.languages.bison = Prism.languages.extend('c', {})
  Prism.languages.insertBefore('bison', 'comment', {
    bison: {
      // This should match all the beginning of the file
      // including the prologue(s), the bison declarations and
      // the grammar rules.
      pattern: /^[\s\S]*?%%[\s\S]*?%%/,
      inside: {
        c: {
          // Allow for one level of nested braces
          pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
          inside: {
            delimiter: {
              pattern: /^%?\{|%?\}$/,
              alias: 'punctuation'
            },
            'bison-variable': {
              pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
              alias: 'variable',
              inside: {
                punctuation: /<|>/
              }
            },
            rest: Prism.languages.c
          }
        },
        comment: Prism.languages.c.comment,
        string: Prism.languages.c.string,
        property: /\S+(?=:)/,
        keyword: /%\w+/,
        number: {
          pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
          lookbehind: true
        },
        punctuation: /%[%?]|[|:;\[\]<>]/
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/bnf.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bnf.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bnf
bnf.displayName = 'bnf'
bnf.aliases = ['rbnf']
function bnf(Prism) {
  Prism.languages.bnf = {
    string: {
      pattern: /"[^\r\n"]*"|'[^\r\n']*'/
    },
    definition: {
      pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
      alias: ['rule', 'keyword'],
      inside: {
        punctuation: /^<|>$/
      }
    },
    rule: {
      pattern: /<[^<>\r\n\t]+>/,
      inside: {
        punctuation: /^<|>$/
      }
    },
    operator: /::=|[|()[\]{}*+?]|\.{3}/
  }
  Prism.languages.rbnf = Prism.languages.bnf
}


/***/ }),

/***/ "./node_modules/refractor/lang/brainfuck.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/brainfuck.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = brainfuck
brainfuck.displayName = 'brainfuck'
brainfuck.aliases = []
function brainfuck(Prism) {
  Prism.languages.brainfuck = {
    pointer: {
      pattern: /<|>/,
      alias: 'keyword'
    },
    increment: {
      pattern: /\+/,
      alias: 'inserted'
    },
    decrement: {
      pattern: /-/,
      alias: 'deleted'
    },
    branching: {
      pattern: /\[|\]/,
      alias: 'important'
    },
    operator: /[.,]/,
    comment: /\S+/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/bro.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bro.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bro
bro.displayName = 'bro'
bro.aliases = []
function bro(Prism) {
  Prism.languages.bro = {
    comment: {
      pattern: /(^|[^\\$])#.*/,
      lookbehind: true,
      inside: {
        italic: /\b(?:TODO|FIXME|XXX)\b/
      }
    },
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    boolean: /\b[TF]\b/,
    function: {
      pattern: /(?:function|hook|event) \w+(?:::\w+)?/,
      inside: {
        keyword: /^(?:function|hook|event)/
      }
    },
    variable: {
      pattern: /(?:global|local) \w+/i,
      inside: {
        keyword: /(?:global|local)/
      }
    },
    builtin: /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,
    constant: {
      pattern: /const \w+/i,
      inside: {
        keyword: /const/
      }
    },
    keyword: /\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/c.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/c.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = c
c.displayName = 'c'
c.aliases = []
function c(Prism) {
  Prism.languages.c = Prism.languages.extend('clike', {
    'class-name': {
      pattern: /(\b(?:enum|struct)\s+)\w+/,
      lookbehind: true
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
    number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
  })
  Prism.languages.insertBefore('c', 'string', {
    macro: {
      // allow for multiline macro definitions
      // spaces after the # character compile fine with gcc
      pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: true,
      alias: 'property',
      inside: {
        // highlight the path of the include statement as a string
        string: {
          pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
          lookbehind: true
        },
        // highlight macro directives as keywords
        directive: {
          pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    },
    // highlight predefined macros as constants
    constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
  })
  delete Prism.languages.c['boolean']
}


/***/ }),

/***/ "./node_modules/refractor/lang/cil.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/cil.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = cil
cil.displayName = 'cil'
cil.aliases = []
function cil(Prism) {
  Prism.languages.cil = {
    comment: /\/\/.*/,
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    directive: {
      pattern: /(^|\W)\.[a-z]+(?=\s)/,
      lookbehind: true,
      alias: 'class-name'
    },
    // Actually an assembly reference
    variable: /\[[\w\.]+\]/,
    keyword: /\b(?:abstract|ansi|assembly|auto|autochar|beforefieldinit|bool|bstr|byvalstr|catch|char|cil|class|currency|date|decimal|default|enum|error|explicit|extends|extern|famandassem|family|famorassem|final(?:ly)?|float32|float64|hidebysig|iant|idispatch|implements|import|initonly|instance|u?int(?:8|16|32|64)?|interface|iunknown|literal|lpstr|lpstruct|lptstr|lpwstr|managed|method|native(?:Type)?|nested|newslot|object(?:ref)?|pinvokeimpl|private|privatescope|public|reqsecobj|rtspecialname|runtime|sealed|sequential|serializable|specialname|static|string|struct|syschar|tbstr|unicode|unmanagedexp|unsigned|value(?:type)?|variant|virtual|void)\b/,
    function: /\b(?:(?:constrained|unaligned|volatile|readonly|tail|no)\.)?(?:conv\.(?:[iu][1248]?|ovf\.[iu][1248]?(?:\.un)?|r\.un|r4|r8)|ldc\.(?:i4(?:\.[0-9]+|\.[mM]1|\.s)?|i8|r4|r8)|ldelem(?:\.[iu][1248]?|\.r[48]|\.ref|a)?|ldind\.(?:[iu][1248]?|r[48]|ref)|stelem\.?(?:i[1248]?|r[48]|ref)?|stind\.(i[1248]?|r[48]|ref)?|end(?:fault|filter|finally)|ldarg(?:\.[0-3s]|a(?:\.s)?)?|ldloc(?:\.[0-9]+|\.s)?|sub(?:\.ovf(?:\.un)?)?|mul(?:\.ovf(?:\.un)?)?|add(?:\.ovf(?:\.un)?)?|stloc(?:\.[0-3s])?|refany(?:type|val)|blt(?:\.un)?(?:\.s)?|ble(?:\.un)?(?:\.s)?|bgt(?:\.un)?(?:\.s)?|bge(?:\.un)?(?:\.s)?|unbox(?:\.any)?|init(?:blk|obj)|call(?:i|virt)?|brfalse(?:\.s)?|bne\.un(?:\.s)?|ldloca(?:\.s)?|brzero(?:\.s)?|brtrue(?:\.s)?|brnull(?:\.s)?|brinst(?:\.s)?|starg(?:\.s)?|leave(?:\.s)?|shr(?:\.un)?|rem(?:\.un)?|div(?:\.un)?|clt(?:\.un)?|alignment|ldvirtftn|castclass|beq(?:\.s)?|mkrefany|localloc|ckfinite|rethrow|ldtoken|ldsflda|cgt\.un|arglist|switch|stsfld|sizeof|newobj|newarr|ldsfld|ldnull|ldflda|isinst|throw|stobj|stloc|stfld|ldstr|ldobj|ldlen|ldftn|ldfld|cpobj|cpblk|break|br\.s|xor|shl|ret|pop|not|nop|neg|jmp|dup|clt|cgt|ceq|box|and|or|br)\b/,
    boolean: /\b(?:true|false)\b/,
    number: /\b-?(?:0x[0-9a-fA-F]+|[0-9]+)(?:\.[0-9a-fA-F]+)?\b/i,
    punctuation: /[{}[\];(),:=]|IL_[0-9A-Za-z]+/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = clike
clike.displayName = 'clike'
clike.aliases = []
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/clojure.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/clojure.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = clojure
clojure.displayName = 'clojure'
clojure.aliases = []
function clojure(Prism) {
  // Copied from https://github.com/jeluard/prism-clojure
  Prism.languages.clojure = {
    comment: /;+.*/,
    string: /"(?:\\.|[^\\"\r\n])*"/,
    operator: /(?:::|[:|'])\b[a-z][\w*+!?-]*\b/i,
    //used for symbols and keywords
    keyword: {
      pattern: /([^\w+*'?-])(?:def|if|do|let|\.\.|quote|var|->>|->|fn|loop|recur|throw|try|monitor-enter|\.|new|set!|def\-|defn|defn\-|defmacro|defmulti|defmethod|defstruct|defonce|declare|definline|definterface|defprotocol|==|defrecord|>=|deftype|<=|defproject|ns|\*|\+|\-|\/|<|=|>|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|conj|cons|constantly|cond|if-not|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|deref|difference|disj|dissoc|distinct|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|for|fnseq|frest|gensym|get-proxy-class|get|hash-map|hash-set|identical\?|identity|if-let|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|line-seq|list\*|list|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|time|to-array|to-array-2d|tree-seq|true\?|union|up|update-proxy|val|vals|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[^\w+*'?-])/,
      lookbehind: true
    },
    boolean: /\b(?:true|false|nil)\b/,
    number: /\b[0-9A-Fa-f]+\b/,
    punctuation: /[{}\[\](),]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/cmake.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/cmake.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = cmake
cmake.displayName = 'cmake'
cmake.aliases = []
function cmake(Prism) {
  Prism.languages.cmake = {
    comment: /#.*/,
    string: {
      pattern: /"(?:[^\\"]|\\.)*"/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /\${(?:[^{}$]|\${[^{}$]*})*}/,
          inside: {
            punctuation: /\${|}/,
            variable: /\w+/
          }
        }
      }
    },
    variable: /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:CTEST_CUSTOM_(?:MAXIMUM_(?:(?:FAIL|PASS)ED_TEST_OUTPUT_SIZE|NUMBER_OF_(?:ERROR|WARNING)S)|ERROR_(?:P(?:OST|RE)_CONTEXT|EXCEPTION|MATCH)|P(?:OST|RE)_MEMCHECK|WARNING_(?:EXCEPTION|MATCH)|(?:MEMCHECK|TESTS)_IGNORE|P(?:OST|RE)_TEST|COVERAGE_EXCLUDE)|ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,
    property: /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ARCHIVE_OUTPUT_NAME|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEBUG_POSTFIX|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
    keyword: /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
    boolean: /\b(?:ON|OFF|TRUE|FALSE)\b/,
    namespace: /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/,
    operator: /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/,
    inserted: {
      pattern: /\b\w+::\w+\b/,
      alias: 'class-name'
    },
    number: /\b\d+(?:\.\d+)*\b/,
    function: /\b[a-z_]\w*(?=\s*\()\b/i,
    punctuation: /[()>}]|\$[<{]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/coffeescript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/coffeescript.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = coffeescript
coffeescript.displayName = 'coffeescript'
coffeescript.aliases = ['coffee']
function coffeescript(Prism) {
  ;(function(Prism) {
    // Ignore comments starting with { to privilege string interpolation highlighting
    var comment = /#(?!\{).+/,
      interpolation = {
        pattern: /#\{[^}]+\}/,
        alias: 'variable'
      }
    Prism.languages.coffeescript = Prism.languages.extend('javascript', {
      comment: comment,
      string: [
        // Strings are multiline
        {
          pattern: /'(?:\\[\s\S]|[^\\'])*'/,
          greedy: true
        },
        {
          // Strings are multiline
          pattern: /"(?:\\[\s\S]|[^\\"])*"/,
          greedy: true,
          inside: {
            interpolation: interpolation
          }
        }
      ],
      keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
      'class-member': {
        pattern: /@(?!\d)\w+/,
        alias: 'variable'
      }
    })
    Prism.languages.insertBefore('coffeescript', 'comment', {
      'multiline-comment': {
        pattern: /###[\s\S]+?###/,
        alias: 'comment'
      },
      // Block regexp can contain comments and interpolation
      'block-regex': {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: 'regex',
        inside: {
          comment: comment,
          interpolation: interpolation
        }
      }
    })
    Prism.languages.insertBefore('coffeescript', 'string', {
      'inline-javascript': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: {
            pattern: /^`|`$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      // Block strings
      'multiline-string': [
        {
          pattern: /'''[\s\S]*?'''/,
          greedy: true,
          alias: 'string'
        },
        {
          pattern: /"""[\s\S]*?"""/,
          greedy: true,
          alias: 'string',
          inside: {
            interpolation: interpolation
          }
        }
      ]
    })
    Prism.languages.insertBefore('coffeescript', 'keyword', {
      // Object property
      property: /(?!\d)\w+(?=\s*:(?!:))/
    })
    delete Prism.languages.coffeescript['template-string']
    Prism.languages.coffee = Prism.languages.coffeescript
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/cpp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/cpp.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = cpp
cpp.displayName = 'cpp'
cpp.aliases = []
function cpp(Prism) {
  Prism.register(refractorC)
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': {
      pattern: /(\b(?:class|enum|struct)\s+)\w+/,
      lookbehind: true
    },
    keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
      greedy: true
    },
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:true|false)\b/
  })
  Prism.languages.insertBefore('cpp', 'string', {
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/crystal.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/crystal.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorRuby = __webpack_require__(/*! ./ruby.js */ "./node_modules/refractor/lang/ruby.js")
module.exports = crystal
crystal.displayName = 'crystal'
crystal.aliases = []
function crystal(Prism) {
  Prism.register(refractorRuby)
  ;(function(Prism) {
    Prism.languages.crystal = Prism.languages.extend('ruby', {
      keyword: [
        /\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,
        {
          pattern: /(\.\s*)(?:is_a|responds_to)\?/,
          lookbehind: true
        }
      ],
      number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
    })
    Prism.languages.insertBefore('crystal', 'string', {
      attribute: {
        pattern: /@\[.+?\]/,
        alias: 'attr-name',
        inside: {
          delimiter: {
            pattern: /^@\[|\]$/,
            alias: 'tag'
          },
          rest: Prism.languages.crystal
        }
      },
      expansion: [
        {
          pattern: /\{\{.+?\}\}/,
          inside: {
            delimiter: {
              pattern: /^\{\{|\}\}$/,
              alias: 'tag'
            },
            rest: Prism.languages.crystal
          }
        },
        {
          pattern: /\{%.+?%\}/,
          inside: {
            delimiter: {
              pattern: /^\{%|%\}$/,
              alias: 'tag'
            },
            rest: Prism.languages.crystal
          }
        }
      ]
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/csharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/csharp.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = csharp
csharp.displayName = 'csharp'
csharp.aliases = ['dotnet', 'cs']
function csharp(Prism) {
  Prism.languages.csharp = Prism.languages.extend('clike', {
    keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
    string: [
      {
        pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,
        greedy: true
      },
      {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/,
        greedy: true
      }
    ],
    'class-name': [
      {
        // (Foo bar, Bar baz)
        pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
        inside: {
          punctuation: /\./
        }
      },
      {
        // [Foo]
        pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      {
        // class Foo : Bar
        pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      {
        // class Foo
        pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    ],
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,
    operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/
  })
  Prism.languages.insertBefore('csharp', 'class-name', {
    'generic-method': {
      pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
      inside: {
        function: /^\w+/,
        'class-name': {
          pattern: /\b[A-Z]\w*(?:\.\w+)*\b/,
          inside: {
            punctuation: /\./
          }
        },
        keyword: Prism.languages.csharp.keyword,
        punctuation: /[<>(),.:]/
      }
    },
    preprocessor: {
      pattern: /(^\s*)#.*/m,
      lookbehind: true,
      alias: 'property',
      inside: {
        // highlight preprocessor directives as keywords
        directive: {
          pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    }
  })
  Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp
}


/***/ }),

/***/ "./node_modules/refractor/lang/csp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/csp.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = csp
csp.displayName = 'csp'
csp.aliases = []
function csp(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/csp-cheat-sheet/
   *
   * Supports the following:
   *  - CSP Level 1
   *  - CSP Level 2
   *  - CSP Level 3
   */
  Prism.languages.csp = {
    directive: {
      pattern: /\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,
      alias: 'keyword'
    },
    safe: {
      pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=/]+)'/,
      alias: 'selector'
    },
    unsafe: {
      pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/,
      alias: 'function'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/css-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/css-extras.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = cssExtras
cssExtras.displayName = 'cssExtras'
cssExtras.aliases = []
function cssExtras(Prism) {
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector,
    inside: {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      class: /\.[-:.\w]+/,
      id: /#[-:.\w]+/,
      attribute: {
        pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
        greedy: true,
        inside: {
          punctuation: /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          namespace: {
            pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
            lookbehind: true,
            inside: {
              punctuation: /\|$/
            }
          },
          attribute: {
            pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
            lookbehind: true
          },
          value: [
            /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            {
              pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
              lookbehind: true
            }
          ],
          operator: /[|~*^$]?=/
        }
      },
      'n-th': [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: true,
          inside: {
            number: /[\dn]+/,
            operator: /[+-]/
          }
        },
        {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: true
        }
      ],
      punctuation: /[()]/
    }
  }
  Prism.languages.insertBefore('css', 'property', {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
      lookbehind: true
    }
  })
  Prism.languages.insertBefore('css', 'function', {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    hexcode: /#[\da-f]{3,8}/i,
    entity: /\\[\da-f]{1,8}/i,
    unit: {
      pattern: /(\d)(?:%|[a-z]+)/,
      lookbehind: true
    },
    number: /-?[\d.]+/
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/css.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/css.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = css
css.displayName = 'css'
css.aliases = []
function css(Prism) {
  ;(function(Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          rule: /@[\w-]+/ // See rest below
        }
      },
      url: {
        pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/
        }
      },
      selector: RegExp(
        '[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'
      ),
      string: {
        pattern: string,
        greedy: true
      },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/
    }
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css
    var markup = Prism.languages.markup
    if (markup) {
      markup.tag.addInlined('style', 'css')
      Prism.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              punctuation: /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        },
        markup.tag
      )
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/d.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/d.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = d
d.displayName = 'd'
d.aliases = []
function d(Prism) {
  Prism.languages.d = Prism.languages.extend('clike', {
    string: [
      // r"", x""
      /\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/, // q"[]", q"()", q"<>", q"{}"
      /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/, // q"IDENT
      // ...
      // IDENT"
      /\bq"([_a-zA-Z][_a-zA-Z\d]*)(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\1"/, // q"//", q"||", etc.
      /\bq"(.)[\s\S]*?\1"/, // Characters
      /'(?:\\'|\\?[^']+)'/,
      /(["`])(?:\\[\s\S]|(?!\1)[^\\])*\1[cwd]?/
    ],
    number: [
      // The lookbehind and the negative look-ahead try to prevent bad highlighting of the .. operator
      // Hexadecimal numbers must be handled separately to avoid problems with exponent "e"
      /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i,
      {
        pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,
        lookbehind: true
      }
    ],
    // In order: $, keywords and special tokens, globally defined symbols
    keyword: /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
    operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
  })
  Prism.languages.d.comment = [
    // Shebang
    /^\s*#!.+/, // /+ +/
    {
      // Allow one level of nesting
      pattern: /(^|[^\\])\/\+(?:\/\+[\s\S]*?\+\/|[\s\S])*?\+\//,
      lookbehind: true
    }
  ].concat(Prism.languages.d.comment)
  Prism.languages.insertBefore('d', 'comment', {
    'token-string': {
      // Allow one level of nesting
      pattern: /\bq\{(?:\{[^}]*\}|[^}])*\}/,
      alias: 'string'
    }
  })
  Prism.languages.insertBefore('d', 'keyword', {
    property: /\B@\w*/
  })
  Prism.languages.insertBefore('d', 'function', {
    register: {
      // Iasm registers
      pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
      alias: 'variable'
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/dart.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/dart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = dart
dart.displayName = 'dart'
dart.aliases = []
function dart(Prism) {
  Prism.languages.dart = Prism.languages.extend('clike', {
    string: [
      {
        pattern: /r?("""|''')[\s\S]*?\1/,
        greedy: true
      },
      {
        pattern: /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      }
    ],
    keyword: [
      /\b(?:async|sync|yield)\*/,
      /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/
    ],
    operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
  })
  Prism.languages.insertBefore('dart', 'function', {
    metadata: {
      pattern: /@\w+/,
      alias: 'symbol'
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/diff.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = diff
diff.displayName = 'diff'
diff.aliases = []
function diff(Prism) {
  ;(function(Prism) {
    Prism.languages.diff = {
      coord: [
        // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
        /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
        /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
        /^\d+.*$/m
      ] // deleted, inserted, unchanged, diff
    }
    /**
     * A map from the name of a block to its line prefix.
     *
     * @type {Object<string, string>}
     */
    var PREFIXES = {
      'deleted-sign': '-',
      'deleted-arrow': '<',
      'inserted-sign': '+',
      'inserted-arrow': '>',
      unchanged: ' ',
      diff: '!'
    } // add a token for each prefix
    Object.keys(PREFIXES).forEach(function(name) {
      var prefix = PREFIXES[name]
      var alias = []
      if (!/^\w+$/.test(name)) {
        // "deleted-sign" -> "deleted"
        alias.push(/\w+/.exec(name)[0])
      }
      if (name === 'diff') {
        alias.push('bold')
      }
      Prism.languages.diff[name] = {
        // pattern: /^(?:[_].*(?:\r\n?|\n|(?![\s\S])))+/m
        pattern: RegExp(
          '^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
          'm'
        ),
        alias: alias
      }
    }) // make prefixes available to Diff plugin
    Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
      value: PREFIXES
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/django.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/django.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = django
django.displayName = 'django'
django.aliases = ['jinja2']
function django(Prism) {
  Prism.register(refractorMarkupTemplating)
  // Django/Jinja2 syntax definition for Prism.js <http://prismjs.com> syntax highlighter.
  // Mostly it works OK but can paint code incorrectly on complex html/template tag combinations.
  ;(function(Prism) {
    Prism.languages.django = {
      comment: /^{#[\s\S]*?#}$/,
      tag: {
        pattern: /(^{%[+-]?\s*)\w+/,
        lookbehind: true,
        alias: 'keyword'
      },
      delimiter: {
        pattern: /^{[{%][+-]?|[+-]?[}%]}$/,
        alias: 'punctuation'
      },
      string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      filter: {
        pattern: /(\|)\w+/,
        lookbehind: true,
        alias: 'function'
      },
      test: {
        pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
        lookbehind: true,
        alias: 'function'
      },
      function: /\b[a-z_]\w+(?=\s*\()/i,
      keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
      operator: /[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
      number: /\b\d+(?:\.\d+)?\b/,
      boolean: /[Tt]rue|[Ff]alse|[Nn]one/,
      variable: /\b\w+?\b/,
      punctuation: /[{}[\](),.:;]/
    }
    var pattern = /{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g
    var markupTemplating = Prism.languages['markup-templating']
    Prism.hooks.add('before-tokenize', function(env) {
      markupTemplating.buildPlaceholders(env, 'django', pattern)
    })
    Prism.hooks.add('after-tokenize', function(env) {
      markupTemplating.tokenizePlaceholders(env, 'django')
    }) // Add an Jinja2 alias
    Prism.languages.jinja2 = Prism.languages.django
    Prism.hooks.add('before-tokenize', function(env) {
      markupTemplating.buildPlaceholders(env, 'jinja2', pattern)
    })
    Prism.hooks.add('after-tokenize', function(env) {
      markupTemplating.tokenizePlaceholders(env, 'jinja2')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/dns-zone-file.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/dns-zone-file.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = dnsZoneFile
dnsZoneFile.displayName = 'dnsZoneFile'
dnsZoneFile.aliases = []
function dnsZoneFile(Prism) {
  Prism.languages['dns-zone-file'] = {
    comment: /;.*/,
    string: {
      pattern: /"(?:\\.|[^"\\\r\n])*"/,
      greedy: true
    },
    variable: [
      {
        pattern: /(^\$ORIGIN[ \t]+)\S+/m,
        lookbehind: true
      },
      {
        pattern: /(^|\s)@(?=\s|$)/,
        lookbehind: true
      }
    ],
    keyword: /^\$(?:ORIGIN|INCLUDE|TTL)(?=\s|$)/m,
    class: {
      // https://tools.ietf.org/html/rfc1035#page-13
      pattern: /(^|\s)(?:IN|CH|CS|HS)(?=\s|$)/,
      lookbehind: true,
      alias: 'keyword'
    },
    type: {
      // https://en.wikipedia.org/wiki/List_of_DNS_record_types
      pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
      lookbehind: true,
      alias: 'keyword'
    },
    punctuation: /[()]/
  }
  Prism.languages['dns-zone'] = Prism.languages['dns-zone-file']
}


/***/ }),

/***/ "./node_modules/refractor/lang/docker.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/docker.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = docker
docker.displayName = 'docker'
docker.aliases = ['dockerfile']
function docker(Prism) {
  Prism.languages.docker = {
    keyword: {
      pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
      lookbehind: true
    },
    string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
    comment: /#.*/,
    punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
  }
  Prism.languages.dockerfile = Prism.languages.docker
}


/***/ }),

/***/ "./node_modules/refractor/lang/ebnf.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/ebnf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ebnf
ebnf.displayName = 'ebnf'
ebnf.aliases = []
function ebnf(Prism) {
  Prism.languages.ebnf = {
    comment: /\(\*[\s\S]*?\*\)/,
    string: {
      pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
      greedy: true
    },
    special: {
      pattern: /\?[^?\r\n]*\?/,
      greedy: true,
      alias: 'class-name'
    },
    definition: {
      pattern: /^(\s*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
      lookbehind: true,
      alias: ['rule', 'keyword']
    },
    rule: /[a-z]\w*(?:[ \t]+[a-z]\w*)*/i,
    punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
    operator: /[-=|*/!]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/eiffel.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/eiffel.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = eiffel
eiffel.displayName = 'eiffel'
eiffel.aliases = []
function eiffel(Prism) {
  Prism.languages.eiffel = {
    comment: /--.*/,
    string: [
      // Aligned-verbatim-strings
      {
        pattern: /"([^[]*)\[[\s\S]*?\]\1"/,
        greedy: true
      }, // Non-aligned-verbatim-strings
      {
        pattern: /"([^{]*)\{[\s\S]*?\}\1"/,
        greedy: true
      }, // Single-line string
      {
        pattern: /"(?:%\s+%|%.|[^%"\r\n])*"/,
        greedy: true
      }
    ],
    // normal char | special char | char code
    char: /'(?:%.|[^%'\r\n])+'/,
    keyword: /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
    boolean: /\b(?:True|False)\b/i,
    // Convention: class-names are always all upper-case characters
    'class-name': {
      pattern: /\b[A-Z][\dA-Z_]*\b/,
      alias: 'builtin'
    },
    number: [
      // hexa | octal | bin
      /\b0[xcb][\da-f](?:_*[\da-f])*\b/i, // Decimal
      /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/i
    ],
    punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
    operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/ejs.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ejs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = ejs
ejs.displayName = 'ejs'
ejs.aliases = []
function ejs(Prism) {
  Prism.register(refractorMarkupTemplating)
  ;(function(Prism) {
    Prism.languages.ejs = {
      delimiter: {
        pattern: /^<%[-_=]?|[-_]?%>$/,
        alias: 'punctuation'
      },
      comment: /^#[\s\S]*/,
      'language-javascript': {
        pattern: /[\s\S]+/,
        inside: Prism.languages.javascript
      }
    }
    Prism.hooks.add('before-tokenize', function(env) {
      var ejsPattern = /<%(?!%)[\s\S]+?%>/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'ejs',
        ejsPattern
      )
    })
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'ejs')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/elixir.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/elixir.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elixir
elixir.displayName = 'elixir'
elixir.aliases = []
function elixir(Prism) {
  Prism.languages.elixir = {
    comment: /#.*/m,
    // ~r"""foo""" (multi-line), ~r'''foo''' (multi-line), ~r/foo/, ~r|foo|, ~r"foo", ~r'foo', ~r(foo), ~r[foo], ~r{foo}, ~r<foo>
    regex: {
      pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
      greedy: true
    },
    string: [
      {
        // ~s"""foo""" (multi-line), ~s'''foo''' (multi-line), ~s/foo/, ~s|foo|, ~s"foo", ~s'foo', ~s(foo), ~s[foo], ~s{foo} (with interpolation care), ~s<foo>
        pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
        greedy: true,
        inside: {
          // See interpolation below
        }
      },
      {
        pattern: /("""|''')[\s\S]*?\1/,
        greedy: true,
        inside: {
          // See interpolation below
        }
      },
      {
        // Multi-line strings are allowed
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true,
        inside: {
          // See interpolation below
        }
      }
    ],
    atom: {
      // Look-behind prevents bad highlighting of the :: operator
      pattern: /(^|[^:]):\w+/,
      lookbehind: true,
      alias: 'symbol'
    },
    // Look-ahead prevents bad highlighting of the :: operator
    'attr-name': /\w+:(?!:)/,
    capture: {
      // Look-behind prevents bad highlighting of the && operator
      pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
      lookbehind: true,
      alias: 'function'
    },
    argument: {
      // Look-behind prevents bad highlighting of the && operator
      pattern: /(^|[^&])&\d+/,
      lookbehind: true,
      alias: 'variable'
    },
    attribute: {
      pattern: /@\w+/,
      alias: 'variable'
    },
    number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
    keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
    boolean: /\b(?:true|false|nil)\b/,
    operator: [
      /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
      {
        // We don't want to match <<
        pattern: /([^<])<(?!<)/,
        lookbehind: true
      },
      {
        // We don't want to match >>
        pattern: /([^>])>(?!>)/,
        lookbehind: true
      }
    ],
    punctuation: /<<|>>|[.,%\[\]{}()]/
  }
  Prism.languages.elixir.string.forEach(function(o) {
    o.inside = {
      interpolation: {
        pattern: /#\{[^}]+\}/,
        inside: {
          delimiter: {
            pattern: /^#\{|\}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.elixir
        }
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/elm.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/elm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elm
elm.displayName = 'elm'
elm.aliases = []
function elm(Prism) {
  Prism.languages.elm = {
    comment: /--.*|{-[\s\S]*?-}/,
    char: {
      pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
      greedy: true
    },
    string: [
      {
        // Multiline strings are wrapped in triple ". Quotes may appear unescaped.
        pattern: /"""[\s\S]*?"""/,
        greedy: true
      },
      {
        pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
        greedy: true
      }
    ],
    import_statement: {
      // The imported or hidden names are not included in this import
      // statement. This is because we want to highlight those exactly like
      // we do for the names in the program.
      pattern: /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+([A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
      inside: {
        keyword: /\b(?:import|as|exposing)\b/
      }
    },
    keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
    // These are builtin variables only. Constructors are highlighted later as a constant.
    builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
    // decimal integers and floating point numbers | hexadecimal integers
    number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
    // Most of this is needed because of the meaning of a single '.'.
    // If it stands alone freely, it is the function composition.
    // It may also be a separator between a module name and an identifier => no
    // operator. If it comes together with other special characters it is an
    // operator too.
    // Valid operator characters in 0.18: +-/*=.$<>:&|^?%#@~!
    // Ref: https://groups.google.com/forum/#!msg/elm-dev/0AHSnDdkSkQ/E0SVU70JEQAJ
    operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
    // In Elm, nearly everything is a variable, do not highlight these.
    hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
    constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
    punctuation: /[{}[\]|(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/erb.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/erb.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
var refractorRuby = __webpack_require__(/*! ./ruby.js */ "./node_modules/refractor/lang/ruby.js")
module.exports = erb
erb.displayName = 'erb'
erb.aliases = []
function erb(Prism) {
  Prism.register(refractorMarkupTemplating)
  Prism.register(refractorRuby)
  ;(function(Prism) {
    Prism.languages.erb = Prism.languages.extend('ruby', {})
    Prism.languages.insertBefore('erb', 'comment', {
      delimiter: {
        pattern: /^<%=?|%>$/,
        alias: 'punctuation'
      }
    })
    Prism.hooks.add('before-tokenize', function(env) {
      var erbPattern = /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'erb',
        erbPattern
      )
    })
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'erb')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/erlang.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/erlang.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = erlang
erlang.displayName = 'erlang'
erlang.aliases = []
function erlang(Prism) {
  Prism.languages.erlang = {
    comment: /%.+/,
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    'quoted-function': {
      pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
      alias: 'function'
    },
    'quoted-atom': {
      pattern: /'(?:\\.|[^\\'\r\n])+'/,
      alias: 'atom'
    },
    boolean: /\b(?:true|false)\b/,
    keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
    number: [
      /\$\\?./,
      /\d+#[a-z0-9]+/i,
      /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i
    ],
    function: /\b[a-z][\w@]*(?=\()/,
    variable: {
      // Look-behind is used to prevent wrong highlighting of atoms containing "@"
      pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
      lookbehind: true
    },
    operator: [
      /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
      {
        // We don't want to match <<
        pattern: /(^|[^<])<(?!<)/,
        lookbehind: true
      },
      {
        // We don't want to match >>
        pattern: /(^|[^>])>(?!>)/,
        lookbehind: true
      }
    ],
    atom: /\b[a-z][\w@]*/,
    punctuation: /[()[\]{}:;,.#|]|<<|>>/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/flow.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/flow.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = flow
flow.displayName = 'flow'
flow.aliases = []
function flow(Prism) {
  ;(function(Prism) {
    Prism.languages.flow = Prism.languages.extend('javascript', {})
    Prism.languages.insertBefore('flow', 'keyword', {
      type: [
        {
          pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
          alias: 'tag'
        }
      ]
    })
    Prism.languages.flow[
      'function-variable'
    ].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i
    delete Prism.languages.flow['parameter']
    Prism.languages.insertBefore('flow', 'operator', {
      'flow-punctuation': {
        pattern: /\{\||\|\}/,
        alias: 'punctuation'
      }
    })
    if (!Array.isArray(Prism.languages.flow.keyword)) {
      Prism.languages.flow.keyword = [Prism.languages.flow.keyword]
    }
    Prism.languages.flow.keyword.unshift(
      {
        pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
        lookbehind: true
      }
    )
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/fortran.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/fortran.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fortran
fortran.displayName = 'fortran'
fortran.aliases = []
function fortran(Prism) {
  Prism.languages.fortran = {
    'quoted-number': {
      pattern: /[BOZ](['"])[A-F0-9]+\1/i,
      alias: 'number'
    },
    string: {
      pattern: /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/,
      inside: {
        comment: {
          pattern: /(&(?:\r\n?|\n)\s*)!.*/,
          lookbehind: true
        }
      }
    },
    comment: {
      pattern: /!.*/,
      greedy: true
    },
    boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
    keyword: [
      // Types
      /\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i, // END statements
      /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i, // Statements
      /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i, // Others
      /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i
    ],
    operator: [
      /\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i,
      {
        // Use lookbehind to prevent confusion with (/ /)
        pattern: /(^|(?!\().)\/(?!\))/,
        lookbehind: true
      }
    ],
    punctuation: /\(\/|\/\)|[(),;:&]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/fsharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/fsharp.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fsharp
fsharp.displayName = 'fsharp'
fsharp.aliases = []
function fsharp(Prism) {
  Prism.languages.fsharp = Prism.languages.extend('clike', {
    comment: [
      {
        pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true
      }
    ],
    string: {
      pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
      lookbehind: true,
      inside: {
        operator: /->|\*/,
        punctuation: /\./
      }
    },
    keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
    number: [
      /\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,
      /\b0b[01]+(?:y|uy)?\b/,
      /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
      /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/
    ],
    operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
  })
  Prism.languages.insertBefore('fsharp', 'keyword', {
    preprocessor: {
      pattern: /^[^\r\n\S]*#.*/m,
      alias: 'property',
      inside: {
        directive: {
          pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    }
  })
  Prism.languages.insertBefore('fsharp', 'punctuation', {
    'computation-expression': {
      pattern: /[_a-z]\w*(?=\s*\{)/i,
      alias: 'keyword'
    }
  })
  Prism.languages.insertBefore('fsharp', 'string', {
    annotation: {
      pattern: /\[<.+?>\]/,
      inside: {
        punctuation: /^\[<|>\]$/,
        'class-name': {
          pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
          lookbehind: true
        },
        'annotation-content': {
          pattern: /[\s\S]+/,
          inside: Prism.languages.fsharp
        }
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/gcode.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/gcode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = gcode
gcode.displayName = 'gcode'
gcode.aliases = []
function gcode(Prism) {
  Prism.languages.gcode = {
    comment: /;.*|\B\(.*?\)\B/,
    string: {
      pattern: /"(?:""|[^"])*"/,
      greedy: true
    },
    keyword: /\b[GM]\d+(?:\.\d+)?\b/,
    property: /\b[A-Z]/,
    checksum: {
      pattern: /\*\d+/,
      alias: 'punctuation'
    },
    // T0:0:0
    punctuation: /:/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/gedcom.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/gedcom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = gedcom
gedcom.displayName = 'gedcom'
gedcom.aliases = []
function gedcom(Prism) {
  Prism.languages.gedcom = {
    'line-value': {
      // Preceded by level, optional pointer, and tag
      pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
      lookbehind: true,
      inside: {
        pointer: {
          pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
          alias: 'variable'
        }
      }
    },
    tag: {
      // Preceded by level and optional pointer
      pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
      lookbehind: true,
      alias: 'string'
    },
    level: {
      pattern: /(^\s*)\d+/m,
      lookbehind: true,
      alias: 'number'
    },
    pointer: {
      pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
      alias: 'variable'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/gherkin.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/gherkin.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = gherkin
gherkin.displayName = 'gherkin'
gherkin.aliases = []
function gherkin(Prism) {
  Prism.languages.gherkin = {
    pystring: {
      pattern: /("""|''')[\s\S]+?\1/,
      alias: 'string'
    },
    comment: {
      pattern: /((?:^|\r?\n|\r)[ \t]*)#.*/,
      lookbehind: true
    },
    tag: {
      pattern: /((?:^|\r?\n|\r)[ \t]*)@\S*/,
      lookbehind: true
    },
    feature: {
      pattern: /((?:^|\r?\n|\r)[ \t]*)(?:Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Característica|Egenskab|Egenskap|Eiginleiki|Feature|Fīča|Fitur|Fonctionnalité|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Funcţionalitate|Funcționalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalitāte|Funkcionalnost|Funkcja|Funksie|Funktionalität|Funktionalitéit|Funzionalità|Hwaet|Hwæt|Jellemző|Karakteristik|laH|Lastnost|Mak|Mogucnost|Mogućnost|Moznosti|Možnosti|OH HAI|Omadus|Ominaisuus|Osobina|Özellik|perbogh|poQbogh malja'|Potrzeba biznesowa|Požadavek|Požiadavka|Pretty much|Qap|Qu'meH 'ut|Savybė|Tính năng|Trajto|Vermoë|Vlastnosť|Właściwość|Značilnost|Δυνατότητα|Λειτουργία|Могућност|Мөмкинлек|Особина|Свойство|Үзенчәлеклелек|Функционал|Функционалност|Функция|Функціонал|תכונה|خاصية|خصوصیت|صلاحیت|کاروبار کی ضرورت|وِیژگی|रूप लेख|ਖਾਸੀਅਤ|ਨਕਸ਼ ਨੁਹਾਰ|ਮੁਹਾਂਦਰਾ|గుణము|ಹೆಚ್ಚಳ|ความต้องการทางธุรกิจ|ความสามารถ|โครงหลัก|기능|フィーチャ|功能|機能):(?:[^:]+(?:\r?\n|\r|$))*/,
      lookbehind: true,
      inside: {
        important: {
          pattern: /(:)[^\r\n]+/,
          lookbehind: true
        },
        keyword: /[^:\r\n]+:/
      }
    },
    scenario: {
      pattern: /((?:^|\r?\n|\r)[ \t]*)(?:Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|Ær|Agtergrond|All y'all|Antecedentes|Antecedents|Atburðarás|Atburðarásir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|Bối cảnh|Cefndir|Cenario|Cenário|Cenario de Fundo|Cenário de Fundo|Cenarios|Cenários|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|Dæmi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delineação do Cenário|Dis is what went down|Dữ liệu|Dyagram senaryo|Dyagram Senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cenário|Examples|EXAMPLZ|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgatókönyv|Forgatókönyv vázlat|Fundo|Geçmiş|ghantoH|Grundlage|Hannergrond|Háttér|Heave to|Istorik|Juhtumid|Keadaan|Khung kịch bản|Khung tình huống|Kịch bản|Koncept|Konsep skenario|Kontèks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut|lut chovnatlh|lutmey|Lýsing Atburðarásar|Lýsing Dæma|Menggariskan Senario|MISHUN|MISHUN SRSLY|mo'|Náčrt Scenára|Náčrt Scénáře|Náčrt Scenáru|Oris scenarija|Örnekler|Osnova|Osnova Scenára|Osnova scénáře|Osnutek|Ozadje|Paraugs|Pavyzdžiai|Példák|Piemēri|Plan du scénario|Plan du Scénario|Plan senaryo|Plan Senaryo|Plang vum Szenario|Pozadí|Pozadie|Pozadina|Príklady|Příklady|Primer|Primeri|Primjeri|Przykłady|Raamstsenaarium|Reckon it's like|Rerefons|Scenár|Scénář|Scenarie|Scenarij|Scenarijai|Scenarijaus šablonas|Scenariji|Scenārijs|Scenārijs pēc parauga|Scenarijus|Scenario|Scénario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se ðe|Se the|Se þe|Senario|Senaryo|Senaryo deskripsyon|Senaryo Deskripsyon|Senaryo taslağı|Shiver me timbers|Situācija|Situai|Situasie|Situasie Uiteensetting|Skenario|Skenario konsep|Skica|Structura scenariu|Structură scenariu|Struktura scenarija|Stsenaarium|Swa|Swa hwaer swa|Swa hwær swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|Tình huống|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo\-ho\-ho|You'll wanna|Założenia|Παραδείγματα|Περιγραφή Σεναρίου|Σενάρια|Σενάριο|Υπόβαθρο|Кереш|Контекст|Концепт|Мисаллар|Мисоллар|Основа|Передумова|Позадина|Предистория|Предыстория|Приклади|Пример|Примери|Примеры|Рамка на сценарий|Скица|Структура сценарија|Структура сценария|Структура сценарію|Сценарий|Сценарий структураси|Сценарийның төзелеше|Сценарији|Сценарио|Сценарій|Тарих|Үрнәкләр|דוגמאות|רקע|תבנית תרחיש|תרחיש|الخلفية|الگوی سناریو|امثلة|پس منظر|زمینه|سناریو|سيناريو|سيناريو مخطط|مثالیں|منظر نامے کا خاکہ|منظرنامہ|نمونه ها|उदाहरण|परिदृश्य|परिदृश्य रूपरेखा|पृष्ठभूमि|ਉਦਾਹਰਨਾਂ|ਪਟਕਥਾ|ਪਟਕਥਾ ਢਾਂਚਾ|ਪਟਕਥਾ ਰੂਪ ਰੇਖਾ|ਪਿਛੋਕੜ|ఉదాహరణలు|కథనం|నేపథ్యం|సన్నివేశం|ಉದಾಹರಣೆಗಳು|ಕಥಾಸಾರಾಂಶ|ವಿವರಣೆ|ಹಿನ್ನೆಲೆ|โครงสร้างของเหตุการณ์|ชุดของตัวอย่าง|ชุดของเหตุการณ์|แนวคิด|สรุปเหตุการณ์|เหตุการณ์|배경|시나리오|시나리오 개요|예|サンプル|シナリオ|シナリオアウトライン|シナリオテンプレ|シナリオテンプレート|テンプレ|例|例子|剧本|剧本大纲|劇本|劇本大綱|场景|场景大纲|場景|場景大綱|背景):[^:\r\n]*/,
      lookbehind: true,
      inside: {
        important: {
          pattern: /(:)[^\r\n]*/,
          lookbehind: true
        },
        keyword: /[^:\r\n]+:/
      }
    },
    'table-body': {
      // Look-behind is used to skip the table head, which has the same format as any table row
      pattern: /((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)+/,
      lookbehind: true,
      inside: {
        outline: {
          pattern: /<[^>]+?>/,
          alias: 'variable'
        },
        td: {
          pattern: /\s*[^\s|][^|]*/,
          alias: 'string'
        },
        punctuation: /\|/
      }
    },
    'table-head': {
      pattern: /(?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*/,
      inside: {
        th: {
          pattern: /\s*[^\s|][^|]*/,
          alias: 'variable'
        },
        punctuation: /\|/
      }
    },
    atrule: {
      pattern: /((?:\r?\n|\r)[ \t]+)(?:'ach|'a|'ej|7|a|A také|A taktiež|A tiež|A zároveň|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|Atès|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Biết|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|Când|Cando|Cand|Ce|Cuando|Če|Ða ðe|Ða|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Daţi fiind|Dați fiind|Dato|DEN|Den youse gotta|Dengan|De|Diberi|Diyelim ki|Donada|Donat|Donitaĵo|Do|Dun|Duota|Ðurh|Eeldades|Ef|Eğer ki|Entao|Então|Entón|Entonces|En|Epi|E|És|Etant donnée|Etant donné|Et|Étant données|Étant donnée|Étant donné|Etant données|Etant donnés|Étant donnés|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Jeśli|Jeżeli|Kadar|Kada|Kad|Kai|Kaj|Když|Keď|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|Lè sa a|Lè|Logo|Lorsqu'<|Lorsque|mä|Maar|Mais|Mając|Majd|Maka|Manawa|Mas|Ma|Menawa|Men|Mutta|Nalikaning|Nalika|Nanging|Når|När|Nato|Nhưng|Niin|Njuk|O zaman|Og|Och|Oletetaan|Onda|Ond|Oraz|Pak|Pero|Però|Podano|Pokiaľ|Pokud|Potem|Potom|Privzeto|Pryd|qaSDI'|Quando|Quand|Quan|Så|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|Şi|Și|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Thì|Thurh|Toda|Too right|ugeholl|Und|Un|Và|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za předpokladu|Zadani|Zadano|Zadan|Zadate|Zadato|Zakładając|Zaradi|Zatati|Þa þe|Þa|Þá|Þegar|Þurh|Αλλά|Δεδομένου|Και|Όταν|Τότε|А також|Агар|Але|Али|Аммо|А|Әгәр|Әйтик|Әмма|Бирок|Ва|Вә|Дадено|Дано|Допустим|Если|Задате|Задати|Задато|И|І|К тому же|Када|Кад|Когато|Когда|Коли|Ләкин|Лекин|Нәтиҗәдә|Нехай|Но|Онда|Припустимо, що|Припустимо|Пусть|Также|Та|Тогда|Тоді|То|Унда|Һәм|Якщо|אבל|אזי|אז|בהינתן|וגם|כאשר|آنگاه|اذاً|اگر|اما|اور|با فرض|بالفرض|بفرض|پھر|تب|ثم|جب|عندما|فرض کیا|لكن|لیکن|متى|هنگامی|و|अगर|और|कदा|किन्तु|चूंकि|जब|तथा|तदा|तब|परन्तु|पर|यदि|ਅਤੇ|ਜਦੋਂ|ਜਿਵੇਂ ਕਿ|ਜੇਕਰ|ਤਦ|ਪਰ|అప్పుడు|ఈ పరిస్థితిలో|కాని|చెప్పబడినది|మరియు|ಆದರೆ|ನಂತರ|ನೀಡಿದ|ಮತ್ತು|ಸ್ಥಿತಿಯನ್ನು|กำหนดให้|ดังนั้น|แต่|เมื่อ|และ|그러면<|그리고<|단<|만약<|만일<|먼저<|조건<|하지만<|かつ<|しかし<|ただし<|ならば<|もし<|並且<|但し<|但是<|假如<|假定<|假設<|假设<|前提<|同时<|同時<|并且<|当<|當<|而且<|那么<|那麼<)(?=[ \t]+)/,
      lookbehind: true
    },
    string: {
      pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
      inside: {
        outline: {
          pattern: /<[^>]+?>/,
          alias: 'variable'
        }
      }
    },
    outline: {
      pattern: /<[^>]+?>/,
      alias: 'variable'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/git.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/git.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = git
git.displayName = 'git'
git.aliases = []
function git(Prism) {
  Prism.languages.git = {
    /*
     * A simple one line comment like in a git status command
     * For instance:
     * $ git status
     * # On branch infinite-scroll
     * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
     * # and have 1 and 2 different commits each, respectively.
     * nothing to commit (working directory clean)
     */
    comment: /^#.*/m,
    /*
     * Regexp to match the changed lines in a git diff output. Check the example below.
     */
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    /*
     * a string (double and simple quote)
     */
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
    /*
     * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
     * For instance:
     * $ git add file.txt
     */
    command: {
      pattern: /^.*\$ git .*$/m,
      inside: {
        /*
         * A git command can contain a parameter starting by a single or a double dash followed by a string
         * For instance:
         * $ git diff --cached
         * $ git log -p
         */
        parameter: /\s--?\w+/m
      }
    },
    /*
     * Coordinates displayed in a git diff command
     * For instance:
     * $ git diff
     * diff --git file.txt file.txt
     * index 6214953..1d54a52 100644
     * --- file.txt
     * +++ file.txt
     * @@ -1 +1,2 @@
     * -Here's my tetx file
     * +Here's my text file
     * +And this is the second line
     */
    coord: /^@@.*@@$/m,
    /*
     * Match a "commit [SHA1]" line in a git log output.
     * For instance:
     * $ git log
     * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
     * Author: lgiraudel
     * Date:   Mon Feb 17 11:18:34 2014 +0100
     *
     *     Add of a new line
     */
    commit_sha1: /^commit \w{40}$/m
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/glsl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/glsl.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = glsl
glsl.displayName = 'glsl'
glsl.aliases = []
function glsl(Prism) {
  Prism.languages.glsl = Prism.languages.extend('clike', {
    comment: [/\/\*[\s\S]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/],
    number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
    keyword: /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
  })
  Prism.languages.insertBefore('glsl', 'comment', {
    preprocessor: {
      pattern: /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
      lookbehind: true,
      alias: 'builtin'
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/gml.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/gml.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = gml
gml.displayName = 'gml'
gml.aliases = []
function gml(Prism) {
  Prism.languages.gamemakerlanguage = Prism.languages.gml = Prism.languages.extend(
    'clike',
    {
      number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
      keyword: /\b(?:if|else|switch|case|default|break|for|repeat|while|do|until|continue|exit|return|globalvar|var|enum)\b/,
      operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at|xor|not)\b/,
      constant: /\b(self|other|all|noone|global|local|undefined|pointer_(?:invalid|null)|action_(?:stop|restart|continue|reverse)|pi|GM_build_date|GM_version|timezone_(?:local|utc)|gamespeed_(?:fps|microseconds)|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|pre|post)|keypress|keyrelease|trigger|(?:left|right|middle|no)_button|(?:left|right|middle)_press|(?:left|right|middle)_release|mouse_(?:enter|leave|wheel_up|wheel_down)|global_(?:left|right|middle)_button|global_(?:left|right|middle)_press|global_(?:left|right|middle)_release|joystick(?:1|2)_(?:left|right|up|down|button1|button2|button3|button4|button5|button6|button7|button8)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|step_(?:normal|begin|end)|gui|gui_begin|gui_end)|vk_(?:nokey|anykey|enter|return|shift|control|alt|escape|space|backspace|tab|pause|printscreen|left|right|up|down|home|end|delete|insert|pageup|pagedown|f\d|numpad\d|divide|multiply|subtract|add|decimal|lshift|lcontrol|lalt|rshift|rcontrol|ralt)|mb_(?:any|none|left|right|middle)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|purple|red|silver|teal|white|yellow|orange)|fa_(?:left|center|right|top|middle|bottom|readonly|hidden|sysfile|volumeid|directory|archive)|pr_(?:pointlist|linelist|linestrip|trianglelist|trianglestrip|trianglefan)|bm_(?:complex|normal|add|max|subtract|zero|one|src_colour|inv_src_colour|src_color|inv_src_color|src_alpha|inv_src_alpha|dest_alpha|inv_dest_alpha|dest_colour|inv_dest_colour|dest_color|inv_dest_color|src_alpha_sat)|audio_(?:falloff_(?:none|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|exponent_distance|exponent_distance_clamped)|old_system|new_system|mono|stereo|3d)|cr_(?:default|none|arrow|cross|beam|size_nesw|size_ns|size_nwse|size_we|uparrow|hourglass|drag|appstart|handpoint|size_all)|spritespeed_framesper(?:second|gameframe)|asset_(?:object|unknown|sprite|sound|room|path|script|font|timeline|tiles|shader)|ds_type_(?:map|list|stack|queue|grid|priority)|ef_(?:explosion|ring|ellipse|firework|smoke|smokeup|star|spark|flare|cloud|rain|snow)|pt_shape_(?:pixel|disk|square|line|star|circle|ring|sphere|flare|spark|explosion|cloud|smoke|snow)|ps_(?:distr|shape)_(?:linear|gaussian|invgaussian|rectangle|ellipse|diamond|line)|ty_(?:real|string)|dll_(?:cdel|cdecl|stdcall)|matrix_(?:view|projection|world)|os_(?:win32|windows|macosx|ios|android|linux|unknown|winphone|win8native|psvita|ps4|xboxone|ps3|uwp)|browser_(?:not_a_browser|unknown|ie|firefox|chrome|safari|safari_mobile|opera|tizen|windows_store|ie_mobile)|device_ios_(?:unknown|iphone|iphone_retina|ipad|ipad_retina|iphone5|iphone6|iphone6plus)|device_(?:emulator|tablet)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|of_challenge_(?:win|lose|tie)|leaderboard_type_(?:number|time_mins_secs)|cmpfunc_(?:never|less|equal|lessequal|greater|notequal|greaterequal|always)|cull_(?:noculling|clockwise|counterclockwise)|lighttype_(?:dir|point)|iap_(?:ev_storeload|ev_product|ev_purchase|ev_consume|ev_restore|storeload_ok|storeload_failed|status_uninitialised|status_unavailable|status_loading|status_available|status_processing|status_restoring|failed|unavailable|available|purchased|canceled|refunded)|fb_login_(?:default|fallback_to_webview|no_fallback_to_webview|forcing_webview|use_system_account|forcing_safari)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|reaction_force_x|reaction_force_y|reaction_torque|motor_speed|angle|motor_torque|max_motor_torque|translation|speed|motor_force|max_motor_force|length_1|length_2|damping_ratio|frequency|lower_angle_limit|upper_angle_limit|angle_limits|max_length|max_torque|max_force)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_particle_flag_(?:water|zombie|wall|spring|elastic|viscous|powder|tensile|colourmixing|colormixing)|phy_particle_group_flag_(?:solid|rigid)|phy_particle_data_flag_(?:typeflags|position|velocity|colour|color|category)|achievement_(?:our_info|friends_info|leaderboard_info|info|filter_(?:all_players|friends_only|favorites_only)|type_challenge|type_score_challenge|pic_loaded|show_(?:ui|profile|leaderboard|achievement|bank|friend_picker|purchase_prompt))|network_(?:socket_(?:tcp|udp|bluetooth)|type_(?:connect|disconnect|data|non_blocking_connect)|config_(?:connect_timeout|use_non_blocking_socket|enable_reliable_udp|disable_reliable_udp))|buffer_(?:fixed|grow|wrap|fast|vbuffer|network|u8|s8|u16|s16|u32|s32|u64|f16|f32|f64|bool|text|string|seek_start|seek_relative|seek_end|generalerror|outofspace|outofbounds|invalidtype)|gp_(?:face\d|shoulderl|shoulderr|shoulderlb|shoulderrb|select|start|stickl|stickr|padu|padd|padl|padr|axislh|axislv|axisrh|axisrv)|ov_(?:friends|community|players|settings|gamegroup|achievements)|lb_sort_(?:none|ascending|descending)|lb_disp_(?:none|numeric|time_sec|time_ms)|ugc_(?:result_success|filetype_(?:community|microtrans)|visibility_(?:public|friends_only|private)|query_RankedBy(?:Vote|PublicationDate|Trend|NumTimesReported|TotalVotesAsc|VotesUp|TextSearch)|query_(?:AcceptedForGameRankedByAcceptanceDate|FavoritedByFriendsRankedByPublicationDate|CreatedByFriendsRankedByPublicationDate|NotYetRated)|sortorder_CreationOrder(?:Desc|Asc)|sortorder_(?:TitleAsc|LastUpdatedDesc|SubscriptionDateDesc|VoteScoreDesc|ForModeration)|list_(?:Published|VotedOn|VotedUp|VotedDown|WillVoteLater|Favorited|Subscribed|UsedOrPlayed|Followed)|match_(?:Items|Items_Mtx|Items_ReadyToUse|Collections|Artwork|Videos|Screenshots|AllGuides|WebGuides|IntegratedGuides|UsableInGame|ControllerBindings))|vertex_usage_(?:position|colour|color|normal|texcoord|textcoord|blendweight|blendindices|psize|tangent|binormal|fog|depth|sample)|vertex_type_(?:float\d|colour|color|ubyte4)|layerelementtype_(?:undefined|background|instance|oldtilemap|sprite|tilemap|particlesystem|tile)|tile_(?:rotate|flip|mirror|index_mask)|input_type|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|(obj|scr|spr|rm)\w+)\b/,
      variable: /\b(x|y|(?:x|y)(?:previous|start)|(?:h|v)speed|direction|speed|friction|gravity|gravity_direction|path_(?:index|position|positionprevious|speed|scale|orientation|endaction)|object_index|id|solid|persistent|mask_index|instance_(?:count|id)|alarm|timeline_(?:index|position|speed|running|loop)|visible|sprite_(?:index|width|height|xoffset|yoffset)|image_(?:number|index|speed|depth|xscale|yscale|angle|alpha|blend)|bbox_(?:left|right|top|bottom)|layer|phy_(?:rotation|(?:position|linear_velocity|speed|com|collision|col_normal)_(?:x|y)|angular_(?:velocity|damping)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|working_directory|webgl_enabled|view_(?:(?:y|x|w|h)view|(?:y|x|w|h)port|(?:v|h)(?:speed|border)|visible|surface_id|object|enabled|current|angle)|undefined|transition_(?:steps|kind|color)|temp_directory|show_(?:score|lives|health)|secure_mode|score|room_(?:width|speed|persistent|last|height|first|caption)|room|pointer_(?:null|invalid)|os_(?:version|type|device|browser)|mouse_(?:y|x|lastbutton|button)|lives|keyboard_(?:string|lastkey|lastchar|key)|iap_data|health|gamemaker_(?:version|registered|pro)|game_(?:save|project|display)_(?:id|name)|fps_real|fps|event_(?:type|object|number|action)|error_(?:occurred|last)|display_aa|delta_time|debug_mode|cursor_sprite|current_(?:year|weekday|time|second|month|minute|hour|day)|caption_(?:score|lives|health)|browser_(?:width|height)|background_(?:yscale|y|xscale|x|width|vtiled|vspeed|visible|showcolour|showcolor|index|htiled|hspeed|height|foreground|colour|color|blend|alpha)|async_load|application_surface|argument(?:_relitive|_count|\d)|argument|global|local|self|other)\b/
    }
  )
}


/***/ }),

/***/ "./node_modules/refractor/lang/go.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/go.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = go
go.displayName = 'go'
go.aliases = []
function go(Prism) {
  Prism.languages.go = Prism.languages.extend('clike', {
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
    boolean: /\b(?:_|iota|nil|true|false)\b/,
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
    string: {
      pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
      greedy: true
    }
  })
  delete Prism.languages.go['class-name']
}


/***/ }),

/***/ "./node_modules/refractor/lang/graphql.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/graphql.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = graphql
graphql.displayName = 'graphql'
graphql.aliases = []
function graphql(Prism) {
  Prism.languages.graphql = {
    comment: /#.*/,
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:true|false)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
      pattern: /@[a-z_]\w*/i,
      alias: 'function'
    },
    'attr-name': {
      pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
      lookbehind: true
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: 'function'
    },
    keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
    operator: /[!=|]|\.{3}/,
    punctuation: /[!(){}\[\]:=,]/,
    constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/groovy.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/groovy.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = groovy
groovy.displayName = 'groovy'
groovy.aliases = []
function groovy(Prism) {
  Prism.languages.groovy = Prism.languages.extend('clike', {
    keyword: /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
    string: [
      {
        pattern: /("""|''')[\s\S]*?\1|(?:\$\/)(?:\$\/\$|[\s\S])*?\/\$/,
        greedy: true
      },
      {
        pattern: /(["'\/])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      }
    ],
    number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
    operator: {
      pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
      lookbehind: true
    },
    punctuation: /\.+|[{}[\];(),:$]/
  })
  Prism.languages.insertBefore('groovy', 'string', {
    shebang: {
      pattern: /#!.+/,
      alias: 'comment'
    }
  })
  Prism.languages.insertBefore('groovy', 'punctuation', {
    'spock-block': /\b(?:setup|given|when|then|and|cleanup|expect|where):/
  })
  Prism.languages.insertBefore('groovy', 'function', {
    annotation: {
      alias: 'punctuation',
      pattern: /(^|[^.])@\w+/,
      lookbehind: true
    }
  }) // Handle string interpolation
  Prism.hooks.add('wrap', function(env) {
    if (env.language === 'groovy' && env.type === 'string') {
      var delimiter = env.content.value[0]
      if (delimiter != "'") {
        var pattern = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/
        if (delimiter === '$') {
          pattern = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/
        } // To prevent double HTML-encoding we have to decode env.content first
        env.content.value = env.content.value
          .replace(/&lt;/g, '<')
          .replace(/&amp;/g, '&')
        env.content = Prism.highlight(env.content.value, {
          expression: {
            pattern: pattern,
            lookbehind: true,
            inside: Prism.languages.groovy
          }
        })
        env.classes.push(delimiter === '/' ? 'regex' : 'gstring')
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/haml.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/haml.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = haml
haml.displayName = 'haml'
haml.aliases = []
function haml(Prism) {
  /* TODO
Handle multiline code after tag
%foo= some |
multiline |
code |
*/
  ;(function(Prism) {
    Prism.languages.haml = {
      // Multiline stuff should appear before the rest
      'multiline-comment': {
        pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
        lookbehind: true,
        alias: 'comment'
      },
      'multiline-code': [
        {
          pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
          lookbehind: true,
          inside: {
            rest: Prism.languages.ruby
          }
        },
        {
          pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
          lookbehind: true,
          inside: {
            rest: Prism.languages.ruby
          }
        }
      ],
      // See at the end of the file for known filters
      filter: {
        pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
        lookbehind: true,
        inside: {
          'filter-name': {
            pattern: /^:[\w-]+/,
            alias: 'variable'
          }
        }
      },
      markup: {
        pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
        lookbehind: true,
        inside: {
          rest: Prism.languages.markup
        }
      },
      doctype: {
        pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
        lookbehind: true
      },
      tag: {
        // Allows for one nested group of braces
        pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
        lookbehind: true,
        inside: {
          attributes: [
            {
              // Lookbehind tries to prevent interpolations from breaking it all
              // Allows for one nested group of braces
              pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
              lookbehind: true,
              inside: {
                rest: Prism.languages.ruby
              }
            },
            {
              pattern: /\([^)]+\)/,
              inside: {
                'attr-value': {
                  pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                  lookbehind: true
                },
                'attr-name': /[\w:-]+(?=\s*!?=|\s*[,)])/,
                punctuation: /[=(),]/
              }
            },
            {
              pattern: /\[[^\]]+\]/,
              inside: {
                rest: Prism.languages.ruby
              }
            }
          ],
          punctuation: /[<>]/
        }
      },
      code: {
        pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
        lookbehind: true,
        inside: {
          rest: Prism.languages.ruby
        }
      },
      // Interpolations in plain text
      interpolation: {
        pattern: /#\{[^}]+\}/,
        inside: {
          delimiter: {
            pattern: /^#\{|\}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.ruby
        }
      },
      punctuation: {
        pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
        lookbehind: true
      }
    }
    var filter_pattern =
      '((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+' // Non exhaustive list of available filters and associated languages
    var filters = [
      'css',
      {
        filter: 'coffee',
        language: 'coffeescript'
      },
      'erb',
      'javascript',
      'less',
      'markdown',
      'ruby',
      'scss',
      'textile'
    ]
    var all_filters = {}
    for (var i = 0, l = filters.length; i < l; i++) {
      var filter = filters[i]
      filter =
        typeof filter === 'string'
          ? {
              filter: filter,
              language: filter
            }
          : filter
      if (Prism.languages[filter.language]) {
        all_filters['filter-' + filter.filter] = {
          pattern: RegExp(
            filter_pattern.replace('{{filter_name}}', filter.filter)
          ),
          lookbehind: true,
          inside: {
            'filter-name': {
              pattern: /^:[\w-]+/,
              alias: 'variable'
            },
            rest: Prism.languages[filter.language]
          }
        }
      }
    }
    Prism.languages.insertBefore('haml', 'filter', all_filters)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/handlebars.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/handlebars.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = handlebars
handlebars.displayName = 'handlebars'
handlebars.aliases = []
function handlebars(Prism) {
  Prism.register(refractorMarkupTemplating)
  ;(function(Prism) {
    Prism.languages.handlebars = {
      comment: /\{\{![\s\S]*?\}\}/,
      delimiter: {
        pattern: /^\{\{\{?|\}\}\}?$/i,
        alias: 'punctuation'
      },
      string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
      boolean: /\b(?:true|false)\b/,
      block: {
        pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
        lookbehind: true,
        alias: 'keyword'
      },
      brackets: {
        pattern: /\[[^\]]+\]/,
        inside: {
          punctuation: /\[|\]/,
          variable: /[\s\S]+/
        }
      },
      punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
      variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
    }
    Prism.hooks.add('before-tokenize', function(env) {
      var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'handlebars',
        handlebarsPattern
      )
    })
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(
        env,
        'handlebars'
      )
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/haskell.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/haskell.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = haskell
haskell.displayName = 'haskell'
haskell.aliases = ['hs']
function haskell(Prism) {
  Prism.languages.haskell = {
    comment: {
      pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m,
      lookbehind: true
    },
    char: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
    string: {
      pattern: /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
      greedy: true
    },
    keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
    import_statement: {
      // The imported or hidden names are not included in this import
      // statement. This is because we want to highlight those exactly like
      // we do for the names in the program.
      pattern: /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
      lookbehind: true,
      inside: {
        keyword: /\b(?:import|qualified|as|hiding)\b/
      }
    },
    // These are builtin variables only. Constructors are highlighted later as a constant.
    builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
    // decimal integers and floating point numbers | octal integers | hexadecimal integers
    number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
    // Most of this is needed because of the meaning of a single '.'.
    // If it stands alone freely, it is the function composition.
    // It may also be a separator between a module name and an identifier => no
    // operator. If it comes together with other special characters it is an
    // operator too.
    operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][\w']*\.)*[_a-z][\w']*`/,
    // In Haskell, nearly everything is a variable, do not highlight these.
    hvariable: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
    constant: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
    punctuation: /[{}[\];(),.:]/
  }
  Prism.languages.hs = Prism.languages.haskell
}


/***/ }),

/***/ "./node_modules/refractor/lang/haxe.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/haxe.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = haxe
haxe.displayName = 'haxe'
haxe.aliases = []
function haxe(Prism) {
  Prism.languages.haxe = Prism.languages.extend('clike', {
    // Strings can be multi-line
    string: {
      pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
          lookbehind: true,
          inside: {
            interpolation: {
              pattern: /^\$\w*/,
              alias: 'variable' // See rest below
            }
          }
        }
      }
    },
    // The final look-ahead prevents highlighting of keywords if expressions such as "haxe.macro.Expr"
    keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
    operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
  })
  Prism.languages.insertBefore('haxe', 'class-name', {
    regex: {
      pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/,
      greedy: true
    }
  })
  Prism.languages.insertBefore('haxe', 'keyword', {
    preprocessor: {
      pattern: /#\w+/,
      alias: 'builtin'
    },
    metadata: {
      pattern: /@:?\w+/,
      alias: 'symbol'
    },
    reification: {
      pattern: /\$(?:\w+|(?=\{))/,
      alias: 'variable'
    }
  })
  Prism.languages.haxe['string'].inside['interpolation'].inside.rest =
    Prism.languages.haxe
  delete Prism.languages.haxe['class-name']
}


/***/ }),

/***/ "./node_modules/refractor/lang/hcl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/hcl.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hcl
hcl.displayName = 'hcl'
hcl.aliases = []
function hcl(Prism) {
  Prism.languages.hcl = {
    comment: /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
    heredoc: {
      pattern: /<<-?(\w+)[\s\S]*?^\s*\1/m,
      greedy: true,
      alias: 'string'
    },
    keyword: [
      {
        pattern: /(?:resource|data)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+{)/i,
        inside: {
          type: {
            pattern: /(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,
            lookbehind: true,
            alias: 'variable'
          }
        }
      },
      {
        pattern: /(?:provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?={)/i,
        inside: {
          type: {
            pattern: /(provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,
            lookbehind: true,
            alias: 'variable'
          }
        }
      },
      {
        pattern: /[\w-]+(?=\s+{)/
      }
    ],
    property: [/[\w-\.]+(?=\s*=(?!=))/, /"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],
    string: {
      pattern: /"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,
          lookbehind: true,
          inside: {
            type: {
              pattern: /(\b(?:terraform|var|self|count|module|path|data|local)\b\.)[\w\*]+/i,
              lookbehind: true,
              alias: 'variable'
            },
            keyword: /\b(?:terraform|var|self|count|module|path|data|local)\b/i,
            function: /\w+(?=\()/,
            string: {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: true
            },
            number: /\b0x[\da-f]+|\d+\.?\d*(?:e[+-]?\d+)?/i,
            punctuation: /[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/
          }
        }
      }
    },
    number: /\b0x[\da-f]+|\d+\.?\d*(?:e[+-]?\d+)?/i,
    boolean: /\b(?:true|false)\b/i,
    punctuation: /[=\[\]{}]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/hpkp.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hpkp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hpkp
hpkp.displayName = 'hpkp'
hpkp.aliases = []
function hpkp(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
   */
  Prism.languages.hpkp = {
    directive: {
      pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
      alias: 'keyword'
    },
    safe: {
      pattern: /\d{7,}/,
      alias: 'selector'
    },
    unsafe: {
      pattern: /\d{1,6}/,
      alias: 'function'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/hsts.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hsts.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hsts
hsts.displayName = 'hsts'
hsts.aliases = []
function hsts(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hsts-cheat-sheet/
   */
  Prism.languages.hsts = {
    directive: {
      pattern: /\b(?:max-age=|includeSubDomains|preload)/,
      alias: 'keyword'
    },
    safe: {
      pattern: /\d{8,}/,
      alias: 'selector'
    },
    unsafe: {
      pattern: /\d{1,7}/,
      alias: 'function'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/http.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/http.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = http
http.displayName = 'http'
http.aliases = []
function http(Prism) {
  ;(function(Prism) {
    Prism.languages.http = {
      'request-line': {
        pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
        inside: {
          // HTTP Verb
          property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
          // Path or query argument
          'attr-name': /:\w+/
        }
      },
      'response-status': {
        pattern: /^HTTP\/1.[01] \d+.*/m,
        inside: {
          // Status, e.g. 200 OK
          property: {
            pattern: /(^HTTP\/1.[01] )\d+.*/i,
            lookbehind: true
          }
        }
      },
      // HTTP header name
      'header-name': {
        pattern: /^[\w-]+:(?=.)/m,
        alias: 'keyword'
      }
    } // Create a mapping of Content-Type headers to language definitions
    var langs = Prism.languages
    var httpLanguages = {
      'application/javascript': langs.javascript,
      'application/json': langs.json || langs.javascript,
      'application/xml': langs.xml,
      'text/xml': langs.xml,
      'text/html': langs.html,
      'text/css': langs.css
    } // Declare which types can also be suffixes
    var suffixTypes = {
      'application/json': true,
      'application/xml': true
    }
    /**
     * Returns a pattern for the given content type which matches it and any type which has it as a suffix.
     *
     * @param {string} contentType
     * @returns {string}
     */
    function getSuffixPattern(contentType) {
      var suffix = contentType.replace(/^[a-z]+\//, '')
      var suffixPattern = '\\w+/(?:[\\w.-]+\\+)+' + suffix + '(?![+\\w.-])'
      return '(?:' + contentType + '|' + suffixPattern + ')'
    } // Insert each content type parser that has its associated language
    // currently loaded.
    var options
    for (var contentType in httpLanguages) {
      if (httpLanguages[contentType]) {
        options = options || {}
        var pattern = suffixTypes[contentType]
          ? getSuffixPattern(contentType)
          : contentType
        options[contentType] = {
          pattern: RegExp(
            '(content-type:\\s*' +
              pattern +
              '[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*',
            'i'
          ),
          lookbehind: true,
          inside: {
            rest: httpLanguages[contentType]
          }
        }
      }
    }
    if (options) {
      Prism.languages.insertBefore('http', 'header-name', options)
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/ichigojam.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/ichigojam.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ichigojam
ichigojam.displayName = 'ichigojam'
ichigojam.aliases = []
function ichigojam(Prism) {
  // according to the offical reference (EN)
  // https://ichigojam.net/IchigoJam-en.html
  Prism.languages.ichigojam = {
    comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
    string: {
      pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
      greedy: true
    },
    number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
    function: /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
    label: /(?:\B@[^\s]+)/i,
    operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
    punctuation: /[\[,;:()\]]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/icon.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/icon.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = icon
icon.displayName = 'icon'
icon.aliases = []
function icon(Prism) {
  Prism.languages.icon = {
    comment: /#.*/,
    string: {
      pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
    'builtin-keyword': {
      pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
      alias: 'variable'
    },
    directive: {
      pattern: /\$\w+/,
      alias: 'builtin'
    },
    keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
    function: /(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
    operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
    punctuation: /[\[\](){},;]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/inform7.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/inform7.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = inform7
inform7.displayName = 'inform7'
inform7.aliases = []
function inform7(Prism) {
  Prism.languages.inform7 = {
    string: {
      pattern: /"[^"]*"/,
      inside: {
        substitution: {
          pattern: /\[[^\]]+\]/,
          inside: {
            delimiter: {
              pattern: /\[|\]/,
              alias: 'punctuation' // See rest below
            }
          }
        }
      }
    },
    comment: {
      pattern: /\[[^\]]+\]/,
      greedy: true
    },
    title: {
      pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,
      alias: 'important'
    },
    number: {
      pattern: /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
      lookbehind: true
    },
    verb: {
      pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
      lookbehind: true,
      alias: 'operator'
    },
    keyword: {
      pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
      lookbehind: true
    },
    property: {
      pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
      lookbehind: true,
      alias: 'symbol'
    },
    position: {
      pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    type: {
      pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
      lookbehind: true,
      alias: 'variable'
    },
    punctuation: /[.,:;(){}]/
  }
  Prism.languages.inform7['string'].inside['substitution'].inside.rest =
    Prism.languages.inform7 // We don't want the remaining text in the substitution to be highlighted as the string.
  Prism.languages.inform7['string'].inside['substitution'].inside.rest.text = {
    pattern: /\S(?:\s*\S)*/,
    alias: 'comment'
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/ini.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ini.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ini
ini.displayName = 'ini'
ini.aliases = []
function ini(Prism) {
  Prism.languages.ini = {
    comment: /^[ \t]*[;#].*$/m,
    selector: /^[ \t]*\[.*?\]/m,
    constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
    'attr-value': {
      pattern: /=.*/,
      inside: {
        punctuation: /^[=]/
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/io.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/io.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = io
io.displayName = 'io'
io.aliases = []
function io(Prism) {
  Prism.languages.io = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true
      }
    ],
    'triple-quoted-string': {
      pattern: /"""(?:\\[\s\S]|(?!""")[^\\])*"""/,
      greedy: true,
      alias: 'string'
    },
    string: {
      pattern: /"(?:\\.|[^\\\r\n"])*"/,
      greedy: true
    },
    keyword: /\b(?:activate|activeCoroCount|asString|block|break|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getSlot|getEnvironmentVariable|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|call|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,
    builtin: /\b(?:Array|AudioDevice|AudioMixer|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Regex|SGML|SGMLElement|SGMLParser|SQLite|Server|Sequence|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink|Random|BigNum|Sequence)\b/,
    boolean: /\b(?:true|false|nil)\b/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?/i,
    operator: /[=!*/%+-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|(\b(?:return|and|or|not)\b)|@@?|\?\??|\.\./,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/j.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/j.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = j
j.displayName = 'j'
j.aliases = []
function j(Prism) {
  Prism.languages.j = {
    comment: /\bNB\..*/,
    string: {
      pattern: /'(?:''|[^'\r\n])*'/,
      greedy: true
    },
    keyword: /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
    verb: {
      // Negative look-ahead prevents bad highlighting
      // of ^: ;. =. =: !. !:
      pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
      alias: 'keyword'
    },
    number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,
    adverb: {
      pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
      alias: 'builtin'
    },
    operator: /[=a][.:]|_\./,
    conjunction: {
      pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
      alias: 'variable'
    },
    punctuation: /[()]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/java.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/java.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = java
java.displayName = 'java'
java.aliases = []
function java(Prism) {
  ;(function(Prism) {
    var keywords = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/ // based on the java naming conventions
    var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/
    Prism.languages.java = Prism.languages.extend('clike', {
      'class-name': [
        className, // variables and parameters
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/
      ],
      keyword: keywords,
      function: [
        Prism.languages.clike.function,
        {
          pattern: /(\:\:)[a-z_]\w*/,
          lookbehind: true
        }
      ],
      number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('java', 'class-name', {
      annotation: {
        alias: 'punctuation',
        pattern: /(^|[^.])@\w+/,
        lookbehind: true
      },
      namespace: {
        pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      generics: {
        pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
        inside: {
          'class-name': className,
          keyword: keywords,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/javadoc.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/javadoc.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJavadoclike = __webpack_require__(/*! ./javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js")
module.exports = javadoc
javadoc.displayName = 'javadoc'
javadoc.aliases = []
function javadoc(Prism) {
  Prism.register(refractorJavadoclike)
  ;(function(Prism) {
    var codeLines = {
      code: {
        pattern: /(^(\s*(?:\*\s*)*)).*[^*\s].+$/m,
        lookbehind: true,
        inside: Prism.languages.java,
        alias: 'language-java'
      }
    }
    Prism.languages.javadoc = Prism.languages.extend('javadoclike', {})
    Prism.languages.insertBefore('javadoc', 'keyword', {
      'class-name': [
        {
          pattern: /(@(?:exception|throws|see|link|linkplain|value)\s+(?:[a-z\d]+\.)*)[A-Z](?:\w*[a-z]\w*)?(?:\.[A-Z](?:\w*[a-z]\w*)?)*/,
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        },
        {
          // @param <T> the first generic type parameter
          pattern: /(@param\s+)<[A-Z]\w*>/,
          lookbehind: true,
          inside: {
            punctuation: /[.<>]/
          }
        }
      ],
      namespace: {
        pattern: /(@(?:exception|throws|see|link|linkplain)\s+)(?:[a-z\d]+\.)+/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      'code-section': [
        {
          pattern: /(\{@code\s+)(?:[^{}]|\{[^{}]*\})+?(?=\s*\})/,
          lookbehind: true,
          inside: codeLines
        },
        {
          pattern: /(<(code|tt)>\s*)[\s\S]+?(?=\s*<\/\2>)/,
          lookbehind: true,
          inside: codeLines
        }
      ],
      tag: Prism.languages.markup.tag
    })
    Prism.languages.javadoclike.addSupport('java', Prism.languages.javadoc)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/javadoclike.js":
/*!****************************************************!*\
  !*** ./node_modules/refractor/lang/javadoclike.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = javadoclike
javadoclike.displayName = 'javadoclike'
javadoclike.aliases = []
function javadoclike(Prism) {
  ;(function(Prism) {
    var javaDocLike = (Prism.languages.javadoclike = {
      parameter: {
        pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
        lookbehind: true
      },
      keyword: {
        // keywords are the first word in a line preceded be an `@` or surrounded by curly braces.
        // @word, {@word}
        pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
        lookbehind: true
      },
      punctuation: /[{}]/
    })
    /**
     * Adds doc comment support to the given language and calls a given callback on each doc comment pattern.
     *
     * @param {string} lang the language add doc comment support to.
     * @param {(pattern: {inside: {rest: undefined}}) => void} callback the function called with each doc comment pattern as argument.
     */
    function docCommentSupport(lang, callback) {
      var tokenName = 'doc-comment'
      var grammar = Prism.languages[lang]
      if (!grammar) {
        return
      }
      var token = grammar[tokenName]
      if (!token) {
        // add doc comment: /** */
        var definition = {}
        definition[tokenName] = {
          pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
          alias: 'comment'
        }
        grammar = Prism.languages.insertBefore(lang, 'comment', definition)
        token = grammar[tokenName]
      }
      if (token instanceof RegExp) {
        // convert regex to object
        token = grammar[tokenName] = {
          pattern: token
        }
      }
      if (Array.isArray(token)) {
        for (var i = 0, l = token.length; i < l; i++) {
          if (token[i] instanceof RegExp) {
            token[i] = {
              pattern: token[i]
            }
          }
          callback(token[i])
        }
      } else {
        callback(token)
      }
    }
    /**
     * Adds doc-comment support to the given languages for the given documentation language.
     *
     * @param {string[]|string} languages
     * @param {Object} docLanguage
     */
    function addSupport(languages, docLanguage) {
      if (typeof languages === 'string') {
        languages = [languages]
      }
      languages.forEach(function(lang) {
        docCommentSupport(lang, function(pattern) {
          if (!pattern.inside) {
            pattern.inside = {}
          }
          pattern.inside.rest = docLanguage
        })
      })
    }
    Object.defineProperty(javaDocLike, 'addSupport', {
      value: addSupport
    })
    javaDocLike.addSupport(['java', 'javascript', 'php'], javaDocLike)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/javascript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/javascript.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = javascript
javascript.displayName = 'javascript'
javascript.aliases = ['js']
function javascript(Prism) {
  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
  })
  Prism.languages.javascript[
    'class-name'
  ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
      lookbehind: true,
      greedy: true
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: 'function'
    },
    parameter: [
      {
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  })
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  })
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript')
  }
  Prism.languages.js = Prism.languages.javascript
}


/***/ }),

/***/ "./node_modules/refractor/lang/javastacktrace.js":
/*!*******************************************************!*\
  !*** ./node_modules/refractor/lang/javastacktrace.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = javastacktrace
javastacktrace.displayName = 'javastacktrace'
javastacktrace.aliases = []
function javastacktrace(Prism) {
  Prism.languages.javastacktrace = {
    // java.sql.SQLException: Violation of unique constraint MY_ENTITY_UK_1: duplicate value(s) for column(s) MY_COLUMN in statement [...]
    // Caused by: java.sql.SQLException: Violation of unique constraint MY_ENTITY_UK_1: duplicate value(s) for column(s) MY_COLUMN in statement [...]
    // Caused by: com.example.myproject.MyProjectServletException
    // Caused by: MidLevelException: LowLevelException
    // Suppressed: Resource$CloseFailException: Resource ID = 0
    summary: {
      pattern: /^[\t ]*(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?:\:.*)?$/m,
      inside: {
        keyword: {
          pattern: /^(\s*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
          lookbehind: true
        },
        // the current thread if the summary starts with 'Exception in thread'
        string: {
          pattern: /^(\s*)"[^"]*"/,
          lookbehind: true
        },
        exceptions: {
          pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
          lookbehind: true,
          inside: {
            'class-name': /[\w$]+(?=$|:)/,
            namespace: /[a-z]\w*/,
            punctuation: /[.:]/
          }
        },
        message: {
          pattern: /(:\s*)\S.*/,
          lookbehind: true,
          alias: 'string'
        },
        punctuation: /[:]/
      }
    },
    // at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1166)
    // at org.hsqldb.jdbc.Util.throwError(Unknown Source) here could be some notes
    // at Util.<init>(Unknown Source)
    'stack-frame': {
      pattern: /^[\t ]*at [\w$.]+(?:<init>)?\([^()]*\)/m,
      inside: {
        keyword: {
          pattern: /^(\s*)at/,
          lookbehind: true
        },
        source: [
          // (Main.java:15)
          // (Main.scala:15)
          {
            pattern: /(\()\w+.\w+:\d+(?=\))/,
            lookbehind: true,
            inside: {
              file: /^\w+\.\w+/,
              punctuation: /:/,
              'line-number': {
                pattern: /\d+/,
                alias: 'number'
              }
            }
          }, // (Unknown Source)
          // (Native Method)
          // (...something...)
          {
            pattern: /(\()[^()]*(?=\))/,
            lookbehind: true,
            inside: {
              keyword: /^(?:Unknown Source|Native Method)$/
            }
          }
        ],
        'class-name': /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
        function: /(?:<init>|[\w$]+)(?=\()/,
        namespace: /[a-z]\w*/,
        punctuation: /[.()]/
      }
    },
    // ... 32 more
    // ... 32 common frames omitted
    more: {
      pattern: /^[\t ]*\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
      inside: {
        punctuation: /\.{3}/,
        number: /\d+/,
        keyword: /\b[a-z]+(?: [a-z]+)*\b/
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/jolie.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jolie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jolie
jolie.displayName = 'jolie'
jolie.aliases = []
function jolie(Prism) {
  Prism.languages.jolie = Prism.languages.extend('clike', {
    keyword: /\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,
    builtin: /\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?l?/i,
    operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,
    symbol: /[|;@]/,
    punctuation: /[,.]/,
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    }
  })
  delete Prism.languages.jolie['class-name']
  Prism.languages.insertBefore('jolie', 'keyword', {
    function: {
      pattern: /((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,
      lookbehind: true
    },
    aggregates: {
      pattern: /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
      lookbehind: true,
      inside: {
        withExtension: {
          pattern: /\bwith\s+\w+/,
          inside: {
            keyword: /\bwith\b/
          }
        },
        function: {
          pattern: /\w+/
        },
        punctuation: {
          pattern: /,/
        }
      }
    },
    redirects: {
      pattern: /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
      lookbehind: true,
      inside: {
        punctuation: {
          pattern: /,/
        },
        function: {
          pattern: /\w+/
        },
        symbol: {
          pattern: /=>/
        }
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/jq.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/jq.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jq
jq.displayName = 'jq'
jq.aliases = []
function jq(Prism) {
  ;(function(Prism) {
    var interpolation = /\\\((?:[^()]|\([^()]*\))*\)/.source
    var string = RegExp(
      /"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g, interpolation)
    )
    var stringInterpolation = {
      interpolation: {
        pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + interpolation),
        lookbehind: true,
        inside: {
          content: {
            pattern: /^(\\\()[\s\S]+(?=\)$)/,
            lookbehind: true,
            inside: null // see below
          },
          punctuation: /^\\\(|\)$/
        }
      }
    }
    var jq = (Prism.languages.jq = {
      comment: /#.*/,
      property: {
        pattern: RegExp(string.source + /(?=\s*:(?!:))/.source),
        greedy: true,
        inside: stringInterpolation
      },
      string: {
        pattern: string,
        greedy: true,
        inside: stringInterpolation
      },
      function: {
        pattern: /(\bdef\s+)[a-z_]\w+/i,
        lookbehind: true
      },
      variable: /\B\$\w+/,
      'property-literal': {
        pattern: /[a-z_]\w*(?=\s*:(?!:))/i,
        alias: 'property'
      },
      keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
      boolean: /\b(?:true|false)\b/,
      number: /(?:\b\d+\.|\B\.)?\d+(?:[eE][+-]?\d+)?\b/,
      operator: [
        {
          pattern: /\|=?/,
          alias: 'pipe'
        },
        /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|or|not)\b/
      ],
      'c-style-function': {
        pattern: /\b[a-z_]\w*(?=\s*\()/i,
        alias: 'function'
      },
      punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
      dot: {
        pattern: /\./,
        alias: 'important'
      }
    })
    stringInterpolation.interpolation.inside.content.inside = jq
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/js-extras.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/js-extras.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jsExtras
jsExtras.displayName = 'jsExtras'
jsExtras.aliases = []
function jsExtras(Prism) {
  ;(function(Prism) {
    Prism.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp(
          '(\\.\\s*)' +
            Prism.languages.javascript['function-variable'].pattern.source
        ),
        lookbehind: true,
        alias: ['function-variable', 'method', 'function', 'property-access']
      }
    })
    Prism.languages.insertBefore('javascript', 'function', {
      method: {
        pattern: RegExp(
          '(\\.\\s*)' + Prism.languages.javascript['function'].source
        ),
        lookbehind: true,
        alias: ['function', 'property-access']
      }
    })
    Prism.languages.insertBefore('javascript', 'constant', {
      'known-class-name': [
        {
          // standard built-ins
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
          pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
          alias: 'class-name'
        },
        {
          // errors
          pattern: /\b(?:[A-Z]\w*)Error\b/,
          alias: 'class-name'
        }
      ]
    })
    Prism.languages.javascript['keyword'].unshift(
      {
        pattern: /\b(?:as|default|export|from|import)\b/,
        alias: 'module'
      },
      {
        pattern: /\bnull\b/,
        alias: ['null', 'nil']
      },
      {
        pattern: /\bundefined\b/,
        alias: 'nil'
      }
    )
    Prism.languages.insertBefore('javascript', 'operator', {
      spread: {
        pattern: /\.{3}/,
        alias: 'operator'
      },
      arrow: {
        pattern: /=>/,
        alias: 'operator'
      }
    })
    Prism.languages.insertBefore('javascript', 'punctuation', {
      'property-access': {
        pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
        lookbehind: true
      },
      'maybe-class-name': {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: true
      },
      dom: {
        // this contains only a few commonly used DOM variables
        pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
        alias: 'variable'
      },
      console: {
        pattern: /\bconsole(?=\s*\.)/,
        alias: 'class-name'
      }
    }) // add 'maybe-class-name' to tokens which might be a class name
    var maybeClassNameTokens = [
      'function',
      'function-variable',
      'method',
      'method-variable',
      'property-access'
    ]
    for (var i = 0; i < maybeClassNameTokens.length; i++) {
      var token = maybeClassNameTokens[i]
      var value = Prism.languages.javascript[token] // convert regex to object
      if (Prism.util.type(value) === 'RegExp') {
        value = Prism.languages.javascript[token] = {
          pattern: value
        }
      } // keep in mind that we don't support arrays
      var inside = value.inside || {}
      value.inside = inside
      inside['maybe-class-name'] = /^[A-Z][\s\S]*/
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/js-templates.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/js-templates.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jsTemplates
jsTemplates.displayName = 'jsTemplates'
jsTemplates.aliases = []
function jsTemplates(Prism) {
  ;(function(Prism) {
    var templateString = Prism.languages.javascript['template-string'] // see the pattern in prism-javascript.js
    var templateLiteralPattern = templateString.pattern.source
    var interpolationObject = templateString.inside['interpolation']
    var interpolationPunctuationObject =
      interpolationObject.inside['interpolation-punctuation']
    var interpolationPattern = interpolationObject.pattern.source
    /**
     * Creates a new pattern to match a template string with a special tag.
     *
     * This will return `undefined` if there is no grammar with the given language id.
     *
     * @param {string} language The language id of the embedded language. E.g. `markdown`.
     * @param {string} tag The regex pattern to match the tag.
     * @returns {object | undefined}
     * @example
     * createTemplate('css', /\bcss/.source);
     */
    function createTemplate(language, tag) {
      if (!Prism.languages[language]) {
        return undefined
      }
      return {
        pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
        lookbehind: true,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'embedded-code': {
            pattern: /[\s\S]+/,
            alias: language
          }
        }
      }
    }
    Prism.languages.javascript['template-string'] = [
      // styled-jsx:
      //   css`a { color: #25F; }`
      // styled-components:
      //   styled.h1`color: red;`
      createTemplate(
        'css',
        /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
          .source
      ), // html`<p></p>`
      // div.innerHTML = `<p></p>`
      createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
      createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
      createTemplate('markdown', /\b(?:md|markdown)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
      createTemplate(
        'graphql',
        /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source
      ), // vanilla template string
      templateString
    ].filter(Boolean)
    /**
     * Returns a specific placeholder literal for the given language.
     *
     * @param {number} counter
     * @param {string} language
     * @returns {string}
     */
    function getPlaceholder(counter, language) {
      return '___' + language.toUpperCase() + '_' + counter + '___'
    }
    /**
     * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
     *
     * @param {string} code
     * @param {any} grammar
     * @param {string} language
     * @returns {(string|Token)[]}
     */
    function tokenizeWithHooks(code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language
      }
      Prism.hooks.run('before-tokenize', env)
      env.tokens = Prism.tokenize(env.code, env.grammar)
      Prism.hooks.run('after-tokenize', env)
      return env.tokens
    }
    /**
     * Returns the token of the given JavaScript interpolation expression.
     *
     * @param {string} expression The code of the expression. E.g. `"${42}"`
     * @returns {Token}
     */
    function tokenizeInterpolationExpression(expression) {
      var tempGrammar = {}
      tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject
      /** @type {Array} */
      var tokens = Prism.tokenize(expression, tempGrammar)
      if (tokens.length === 3) {
        /**
         * The token array will look like this
         * [
         *     ["interpolation-punctuation", "${"]
         *     "..." // JavaScript expression of the interpolation
         *     ["interpolation-punctuation", "}"]
         * ]
         */
        var args = [1, 1]
        args.push.apply(
          args,
          tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript')
        )
        tokens.splice.apply(tokens, args)
      }
      return new Prism.Token(
        'interpolation',
        tokens,
        interpolationObject.alias,
        expression
      )
    }
    /**
     * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
     *
     * This function has 3 phases:
     *
     * 1. Replace all JavaScript interpolation expression with a placeholder.
     *    The placeholder will have the syntax of a identify of the target language.
     * 2. Tokenize the code with placeholders.
     * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
     *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
     *    tokenized as two tokens by the grammar of the embedded language.
     *
     * @param {string} code
     * @param {object} grammar
     * @param {string} language
     * @returns {Token}
     */
    function tokenizeEmbedded(code, grammar, language) {
      // 1. First filter out all interpolations
      // because they might be escaped, we need a lookbehind, so we use Prism
      /** @type {(Token|string)[]} */
      var _tokens = Prism.tokenize(code, {
        interpolation: {
          pattern: RegExp(interpolationPattern),
          lookbehind: true
        }
      }) // replace all interpolations with a placeholder which is not in the code already
      var placeholderCounter = 0
      /** @type {Object<string, string>} */
      var placeholderMap = {}
      var embeddedCode = _tokens
        .map(function(token) {
          if (typeof token === 'string') {
            return token
          } else {
            var interpolationExpression = token.content
            var placeholder
            while (
              code.indexOf(
                (placeholder = getPlaceholder(placeholderCounter++, language))
              ) !== -1
            ) {}
            placeholderMap[placeholder] = interpolationExpression
            return placeholder
          }
        })
        .join('') // 2. Tokenize the embedded code
      var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language) // 3. Re-insert the interpolation
      var placeholders = Object.keys(placeholderMap)
      placeholderCounter = 0
      /**
       *
       * @param {(Token|string)[]} tokens
       * @returns {void}
       */
      function walkTokens(tokens) {
        for (var i = 0; i < tokens.length; i++) {
          if (placeholderCounter >= placeholders.length) {
            return
          }
          var token = tokens[i]
          if (typeof token === 'string' || typeof token.content === 'string') {
            var placeholder = placeholders[placeholderCounter]
            var s =
              typeof token === 'string'
                ? token
                : /** @type {string} */
                  token.content
            var index = s.indexOf(placeholder)
            if (index !== -1) {
              ++placeholderCounter
              var before = s.substring(0, index)
              var middle = tokenizeInterpolationExpression(
                placeholderMap[placeholder]
              )
              var after = s.substring(index + placeholder.length)
              var replacement = []
              if (before) {
                replacement.push(before)
              }
              replacement.push(middle)
              if (after) {
                var afterTokens = [after]
                walkTokens(afterTokens)
                replacement.push.apply(replacement, afterTokens)
              }
              if (typeof token === 'string') {
                tokens.splice.apply(tokens, [i, 1].concat(replacement))
                i += replacement.length - 1
              } else {
                token.content = replacement
              }
            }
          } else {
            var content = token.content
            if (Array.isArray(content)) {
              walkTokens(content)
            } else {
              walkTokens([content])
            }
          }
        }
      }
      walkTokens(embeddedTokens)
      return new Prism.Token(
        language,
        embeddedTokens,
        'language-' + language,
        code
      )
    }
    /**
     * The languages for which JS templating will handle tagged template literals.
     *
     * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
     */
    var supportedLanguages = {
      javascript: true,
      js: true,
      typescript: true,
      ts: true,
      jsx: true,
      tsx: true
    }
    Prism.hooks.add('after-tokenize', function(env) {
      if (!(env.language in supportedLanguages)) {
        return
      }
      /**
       * Finds and tokenizes all template strings with an embedded languages.
       *
       * @param {(Token | string)[]} tokens
       * @returns {void}
       */
      function findTemplateStrings(tokens) {
        for (var i = 0, l = tokens.length; i < l; i++) {
          var token = tokens[i]
          if (typeof token === 'string') {
            continue
          }
          var content = token.content
          if (!Array.isArray(content)) {
            if (typeof content !== 'string') {
              findTemplateStrings([content])
            }
            continue
          }
          if (token.type === 'template-string') {
            /**
             * A JavaScript template-string token will look like this:
             *
             * ["template-string", [
             *     ["template-punctuation", "`"],
             *     (
             *         An array of "string" and "interpolation" tokens. This is the simple string case.
             *         or
             *         ["embedded-code", "..."] This is the token containing the embedded code.
             *                                  It also has an alias which is the language of the embedded code.
             *     ),
             *     ["template-punctuation", "`"]
             * ]]
             */
            var embedded = content[1]
            if (
              content.length === 3 &&
              typeof embedded !== 'string' &&
              embedded.type === 'embedded-code'
            ) {
              // get string content
              var code = stringContent(embedded)
              var alias = embedded.alias
              var language = Array.isArray(alias) ? alias[0] : alias
              var grammar = Prism.languages[language]
              if (!grammar) {
                // the embedded language isn't registered.
                continue
              }
              content[1] = tokenizeEmbedded(code, grammar, language)
            }
          } else {
            findTemplateStrings(content)
          }
        }
      }
      findTemplateStrings(env.tokens)
    })
    /**
     * Returns the string content of a token or token stream.
     *
     * @param {string | Token | (string | Token)[]} value
     * @returns {string}
     */
    function stringContent(value) {
      if (typeof value === 'string') {
        return value
      } else if (Array.isArray(value)) {
        return value.map(stringContent).join('')
      } else {
        return stringContent(value.content)
      }
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/jsdoc.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jsdoc.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJavadoclike = __webpack_require__(/*! ./javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js")
module.exports = jsdoc
jsdoc.displayName = 'jsdoc'
jsdoc.aliases = []
function jsdoc(Prism) {
  Prism.register(refractorJavadoclike)
  ;(function(Prism) {
    var javascript = Prism.languages.javascript
    var type = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source
    var parameterPrefix =
      '(@(?:param|arg|argument|property)\\s+(?:' + type + '\\s+)?)'
    Prism.languages.jsdoc = Prism.languages.extend('javadoclike', {
      parameter: {
        // @param {string} foo - foo bar
        pattern: RegExp(parameterPrefix + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    })
    Prism.languages.insertBefore('jsdoc', 'keyword', {
      'optional-parameter': {
        // @param {string} [baz.foo="bar"] foo bar
        pattern: RegExp(
          parameterPrefix + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source
        ),
        lookbehind: true,
        inside: {
          parameter: {
            pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
            lookbehind: true,
            inside: {
              punctuation: /\./
            }
          },
          code: {
            pattern: /(=)[\s\S]*(?=\]$)/,
            lookbehind: true,
            inside: javascript,
            alias: 'language-javascript'
          },
          punctuation: /[=[\]]/
        }
      },
      'class-name': [
        {
          pattern: RegExp('(@[a-z]+\\s+)' + type),
          lookbehind: true,
          inside: {
            punctuation: /[.,:?=<>|{}()[\]]/
          }
        },
        {
          pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        }
      ],
      example: {
        pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
        lookbehind: true,
        inside: {
          code: {
            pattern: /^(\s*(?:\*\s*)?).+$/m,
            lookbehind: true,
            inside: javascript,
            alias: 'language-javascript'
          }
        }
      }
    })
    Prism.languages.javadoclike.addSupport('javascript', Prism.languages.jsdoc)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/json.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/json.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = json
json.displayName = 'json'
json.aliases = []
function json(Prism) {
  Prism.languages.json = {
    property: {
      pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      greedy: true
    },
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      greedy: true
    },
    comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/json5.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/json5.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJson = __webpack_require__(/*! ./json.js */ "./node_modules/refractor/lang/json.js")
module.exports = json5
json5.displayName = 'json5'
json5.aliases = []
function json5(Prism) {
  Prism.register(refractorJson)
  ;(function(Prism) {
    var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/
    Prism.languages.json5 = Prism.languages.extend('json', {
      property: [
        {
          pattern: RegExp(string.source + '(?=\\s*:)'),
          greedy: true
        },
        {
          pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*:)/,
          alias: 'unquoted'
        }
      ],
      string: {
        pattern: string,
        greedy: true
      },
      number: /[+-]?(?:NaN|Infinity|0x[a-fA-F\d]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/jsonp.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jsonp.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJson = __webpack_require__(/*! ./json.js */ "./node_modules/refractor/lang/json.js")
module.exports = jsonp
jsonp.displayName = 'jsonp'
jsonp.aliases = []
function jsonp(Prism) {
  Prism.register(refractorJson)
  Prism.languages.jsonp = Prism.languages.extend('json', {
    punctuation: /[{}[\]();,.]/
  })
  Prism.languages.insertBefore('jsonp', 'punctuation', {
    function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/jsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/jsx.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jsx
jsx.displayName = 'jsx'
jsx.aliases = []
function jsx(Prism) {
  ;(function(Prism) {
    var javascript = Prism.util.clone(Prism.languages.javascript)
    Prism.languages.jsx = Prism.languages.extend('markup', javascript)
    Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i
    Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i
    Prism.languages.jsx.tag.inside[
      'attr-value'
    ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i
    Prism.languages.jsx.tag.inside['tag'].inside[
      'class-name'
    ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/
    Prism.languages.insertBefore(
      'inside',
      'attr-name',
      {
        spread: {
          pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
          inside: {
            punctuation: /\.{3}|[{}.]/,
            'attr-value': /\w+/
          }
        }
      },
      Prism.languages.jsx.tag
    )
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        script: {
          // Allow for two levels of nesting
          pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
          inside: {
            'script-punctuation': {
              pattern: /^=(?={)/,
              alias: 'punctuation'
            },
            rest: Prism.languages.jsx
          },
          alias: 'language-javascript'
        }
      },
      Prism.languages.jsx.tag
    ) // The following will handle plain text inside tags
    var stringifyToken = function(token) {
      if (!token) {
        return ''
      }
      if (typeof token === 'string') {
        return token
      }
      if (typeof token.content === 'string') {
        return token.content
      }
      return token.content.map(stringifyToken).join('')
    }
    var walkTokens = function(tokens) {
      var openedTags = []
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
        var notTagNorBrace = false
        if (typeof token !== 'string') {
          if (
            token.type === 'tag' &&
            token.content[0] &&
            token.content[0].type === 'tag'
          ) {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (
                openedTags.length > 0 &&
                openedTags[openedTags.length - 1].tagName ===
                  stringifyToken(token.content[0].content[1])
              ) {
                // Pop matching opening tag
                openedTags.pop()
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') {
                // Autoclosed tag, ignore
              } else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                })
              }
            }
          } else if (
            openedTags.length > 0 &&
            token.type === 'punctuation' &&
            token.content === '{'
          ) {
            // Here we might have entered a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside a JSX context.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token) // And merge text with adjacent text
            if (
              i < tokens.length - 1 &&
              (typeof tokens[i + 1] === 'string' ||
                tokens[i + 1].type === 'plain-text')
            ) {
              plainText += stringifyToken(tokens[i + 1])
              tokens.splice(i + 1, 1)
            }
            if (
              i > 0 &&
              (typeof tokens[i - 1] === 'string' ||
                tokens[i - 1].type === 'plain-text')
            ) {
              plainText = stringifyToken(tokens[i - 1]) + plainText
              tokens.splice(i - 1, 1)
              i--
            }
            tokens[i] = new Prism.Token(
              'plain-text',
              plainText,
              null,
              plainText
            )
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'jsx' && env.language !== 'tsx') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/julia.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/julia.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = julia
julia.displayName = 'julia'
julia.aliases = []
function julia(Prism) {
  Prism.languages.julia = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    string: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2/,
    keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
    boolean: /\b(?:true|false)\b/,
    number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?/i,
    operator: /[-+*^%÷&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/,
    punctuation: /[{}[\];(),.:]/,
    constant: /\b(?:(?:NaN|Inf)(?:16|32|64)?)\b/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/keyman.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/keyman.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = keyman
keyman.displayName = 'keyman'
keyman.aliases = []
function keyman(Prism) {
  Prism.languages.keyman = {
    comment: /\bc\s.*/i,
    function: /\[\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*(?:[TKU]_[\w?]+|".+?"|'.+?')\s*\]/i,
    // virtual key
    string: /("|').*?\1/,
    bold: [
      // header statements, system stores and variable system stores
      /&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,
      /\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i
    ],
    keyword: /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
    // rule keywords
    atrule: /\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
    // structural keywords
    number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
    // U+####, x###, d### characters and numbers
    operator: /[+>\\,()]/,
    tag: /\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i // prefixes
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/kotlin.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/kotlin.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = kotlin
kotlin.displayName = 'kotlin'
kotlin.aliases = []
function kotlin(Prism) {
  ;(function(Prism) {
    Prism.languages.kotlin = Prism.languages.extend('clike', {
      keyword: {
        // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
        pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: true
      },
      function: [
        /\w+(?=\s*\()/,
        {
          pattern: /(\.)\w+(?=\s*\{)/,
          lookbehind: true
        }
      ],
      number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    })
    delete Prism.languages.kotlin['class-name']
    Prism.languages.insertBefore('kotlin', 'string', {
      'raw-string': {
        pattern: /("""|''')[\s\S]*?\1/,
        alias: 'string' // See interpolation below
      }
    })
    Prism.languages.insertBefore('kotlin', 'keyword', {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: 'builtin'
      }
    })
    Prism.languages.insertBefore('kotlin', 'function', {
      label: {
        pattern: /\w+@|@\w+/,
        alias: 'symbol'
      }
    })
    var interpolation = [
      {
        pattern: /\$\{[^}]+\}/,
        inside: {
          delimiter: {
            pattern: /^\$\{|\}$/,
            alias: 'variable'
          },
          rest: Prism.languages.kotlin
        }
      },
      {
        pattern: /\$\w+/,
        alias: 'variable'
      }
    ]
    Prism.languages.kotlin['string'].inside = Prism.languages.kotlin[
      'raw-string'
    ].inside = {
      interpolation: interpolation
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/latex.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/latex.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = latex
latex.displayName = 'latex'
latex.aliases = ['tex', 'context']
function latex(Prism) {
  ;(function(Prism) {
    var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i
    var insideEqu = {
      'equation-command': {
        pattern: funcPattern,
        alias: 'regex'
      }
    }
    Prism.languages.latex = {
      comment: /%.*/m,
      // the verbatim environment prints whitespace to the document
      cdata: {
        pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: true
      },
      /*
       * equations can be between $$ $$ or $ $ or \( \) or \[ \]
       * (all are multiline)
       */
      equation: [
        {
          pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
          inside: insideEqu,
          alias: 'string'
        },
        {
          pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
          lookbehind: true,
          inside: insideEqu,
          alias: 'string'
        }
      ],
      /*
       * arguments which are keywords or references are highlighted
       * as keywords
       */
      keyword: {
        pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
        lookbehind: true
      },
      url: {
        pattern: /(\\url\{)[^}]+(?=\})/,
        lookbehind: true
      },
      /*
       * section or chapter headlines are highlighted as bold so that
       * they stand out more
       */
      headline: {
        pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
        lookbehind: true,
        alias: 'class-name'
      },
      function: {
        pattern: funcPattern,
        alias: 'selector'
      },
      punctuation: /[[\]{}&]/
    }
    Prism.languages.tex = Prism.languages.latex
    Prism.languages.context = Prism.languages.latex
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/less.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/less.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = less
less.displayName = 'less'
less.aliases = []
function less(Prism) {
  /* FIXME :
:extend() is not handled specifically : its highlighting is buggy.
Mixin usage must be inside a ruleset to be highlighted.
At-rules (e.g. import) containing interpolations are buggy.
Detached rulesets are highlighted as at-rules.
A comment before a mixin usage prevents the latter to be properly highlighted.
*/
  Prism.languages.less = Prism.languages.extend('css', {
    comment: [
      /\/\*[\s\S]*?\*\//,
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: true
      }
    ],
    atrule: {
      pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
      inside: {
        punctuation: /[:()]/
      }
    },
    // selectors and mixins are considered the same
    selector: {
      pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
      inside: {
        // mixin parameters
        variable: /@+[\w-]+/
      }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
    operator: /[+\-*\/]/
  })
  Prism.languages.insertBefore('less', 'property', {
    variable: [
      // Variable declaration (the colon must be consumed!)
      {
        pattern: /@[\w-]+\s*:/,
        inside: {
          punctuation: /:/
        }
      }, // Variable usage
      /@@?[\w-]+/
    ],
    'mixin-usage': {
      pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
      lookbehind: true,
      alias: 'function'
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/lilypond.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/lilypond.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = lilypond
lilypond.displayName = 'lilypond'
lilypond.aliases = []
function lilypond(Prism) {
  ;(function(Prism) {
    var schemeExpression = /\((?:[^();"#\\]|\\[\s\S]|;.*|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/
      .source // allow for up to pow(2, recursivenessLog2) many levels of recursive brace expressions
    // For some reason, this can't be 4
    var recursivenessLog2 = 5
    for (var i = 0; i < recursivenessLog2; i++) {
      schemeExpression = schemeExpression.replace(/<expr>/g, schemeExpression)
    }
    schemeExpression = schemeExpression.replace(/<expr>/g, /[^\s\S]/.source)
    var lilypond = (Prism.languages.lilypond = {
      comment: /%(?:(?!\{).*|\{[\s\S]*?%\})/,
      'embedded-scheme': {
        pattern: RegExp(
          /(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(
            /<expr>/g,
            schemeExpression
          ),
          'm'
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          scheme: {
            pattern: /^(#)[\s\S]+$/,
            lookbehind: true,
            alias: 'language-scheme',
            inside: {
              'embedded-lilypond': {
                pattern: /#\{[\s\S]*?#\}/,
                greedy: true,
                inside: {
                  punctuation: /^#\{|#\}$/,
                  lilypond: {
                    pattern: /[\s\S]+/,
                    alias: 'language-lilypond',
                    inside: null // see below
                  }
                }
              },
              rest: Prism.languages.scheme
            }
          },
          punctuation: /#/
        }
      },
      string: {
        pattern: /"(?:[^"\\]|\\.)*"/,
        greedy: true
      },
      'class-name': {
        pattern: /(\\new\s+)[\w-]+/,
        lookbehind: true
      },
      keyword: {
        pattern: /\\[a-z][-\w]*/i,
        inside: {
          punctuation: /^\\/
        }
      },
      operator: /[=|]|<<|>>/,
      punctuation: {
        pattern: /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,
        lookbehind: true
      },
      number: /\b\d+(?:\/\d+)?\b/
    })
    lilypond['embedded-scheme'].inside['scheme'].inside[
      'embedded-lilypond'
    ].inside['lilypond'].inside = lilypond
    Prism.languages.ly = lilypond
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/liquid.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/liquid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = liquid
liquid.displayName = 'liquid'
liquid.aliases = []
function liquid(Prism) {
  Prism.languages.liquid = {
    keyword: /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
    operator: {
      pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
      lookbehind: true
    },
    function: {
      pattern: /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/,
      lookbehind: true
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/lisp.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/lisp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = lisp
lisp.displayName = 'lisp'
lisp.aliases = []
function lisp(Prism) {
  ;(function(Prism) {
    // Functions to construct regular expressions
    // simple form
    // e.g. (interactive ... or (interactive)
    function simple_form(name) {
      return RegExp('(\\()' + name + '(?=[\\s\\)])')
    } // booleans and numbers
    function primitive(pattern) {
      return RegExp('([\\s([])' + pattern + '(?=[\\s)])')
    } // Patterns in regular expressions
    // Symbol name. See https://www.gnu.org/software/emacs/manual/html_node/elisp/Symbol-Type.html
    // & and : are excluded as they are usually used for special purposes
    var symbol = '[-+*/_~!@$%^=<>{}\\w]+' // symbol starting with & used in function arguments
    var marker = '&' + symbol // Open parenthesis for look-behind
    var par = '(\\()'
    var endpar = '(?=\\))' // End the pattern with look-ahead space
    var space = '(?=\\s)'
    var language = {
      // Three or four semicolons are considered a heading.
      // See https://www.gnu.org/software/emacs/manual/html_node/elisp/Comment-Tips.html
      heading: {
        pattern: /;;;.*/,
        alias: ['comment', 'title']
      },
      comment: /;.*/,
      string: {
        pattern: /"(?:[^"\\]|\\.)*"/,
        greedy: true,
        inside: {
          argument: /[-A-Z]+(?=[.,\s])/,
          symbol: RegExp('`' + symbol + "'")
        }
      },
      'quoted-symbol': {
        pattern: RegExp("#?'" + symbol),
        alias: ['variable', 'symbol']
      },
      'lisp-property': {
        pattern: RegExp(':' + symbol),
        alias: 'property'
      },
      splice: {
        pattern: RegExp(',@?' + symbol),
        alias: ['symbol', 'variable']
      },
      keyword: [
        {
          pattern: RegExp(
            par +
              '(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)' +
              space
          ),
          lookbehind: true
        },
        {
          pattern: RegExp(
            par +
              '(?:for|do|collect|return|finally|append|concat|in|by)' +
              space
          ),
          lookbehind: true
        }
      ],
      declare: {
        pattern: simple_form('declare'),
        lookbehind: true,
        alias: 'keyword'
      },
      interactive: {
        pattern: simple_form('interactive'),
        lookbehind: true,
        alias: 'keyword'
      },
      boolean: {
        pattern: primitive('(?:t|nil)'),
        lookbehind: true
      },
      number: {
        pattern: primitive('[-+]?\\d+(?:\\.\\d*)?'),
        lookbehind: true
      },
      defvar: {
        pattern: RegExp(par + 'def(?:var|const|custom|group)\\s+' + symbol),
        lookbehind: true,
        inside: {
          keyword: /^def[a-z]+/,
          variable: RegExp(symbol)
        }
      },
      defun: {
        pattern: RegExp(
          par +
            '(?:cl-)?(?:defun\\*?|defmacro)\\s+' +
            symbol +
            '\\s+\\([\\s\\S]*?\\)'
        ),
        lookbehind: true,
        inside: {
          keyword: /^(?:cl-)?def\S+/,
          // See below, this property needs to be defined later so that it can
          // reference the language object.
          arguments: null,
          function: {
            pattern: RegExp('(^\\s)' + symbol),
            lookbehind: true
          },
          punctuation: /[()]/
        }
      },
      lambda: {
        pattern: RegExp(par + 'lambda\\s+\\((?:&?' + symbol + '\\s*)*\\)'),
        lookbehind: true,
        inside: {
          keyword: /^lambda/,
          // See below, this property needs to be defined later so that it can
          // reference the language object.
          arguments: null,
          punctuation: /[()]/
        }
      },
      car: {
        pattern: RegExp(par + symbol),
        lookbehind: true
      },
      punctuation: [
        // open paren, brackets, and close paren
        /(['`,]?\(|[)\[\]])/, // cons
        {
          pattern: /(\s)\.(?=\s)/,
          lookbehind: true
        }
      ]
    }
    var arg = {
      'lisp-marker': RegExp(marker),
      rest: {
        argument: {
          pattern: RegExp(symbol),
          alias: 'variable'
        },
        varform: {
          pattern: RegExp(par + symbol + '\\s+\\S[\\s\\S]*' + endpar),
          lookbehind: true,
          inside: {
            string: language.string,
            boolean: language.boolean,
            number: language.number,
            symbol: language.symbol,
            punctuation: /[()]/
          }
        }
      }
    }
    var forms = '\\S+(?:\\s+\\S+)*'
    var arglist = {
      pattern: RegExp(par + '[\\s\\S]*' + endpar),
      lookbehind: true,
      inside: {
        'rest-vars': {
          pattern: RegExp('&(?:rest|body)\\s+' + forms),
          inside: arg
        },
        'other-marker-vars': {
          pattern: RegExp('&(?:optional|aux)\\s+' + forms),
          inside: arg
        },
        keys: {
          pattern: RegExp('&key\\s+' + forms + '(?:\\s+&allow-other-keys)?'),
          inside: arg
        },
        argument: {
          pattern: RegExp(symbol),
          alias: 'variable'
        },
        punctuation: /[()]/
      }
    }
    language['lambda'].inside.arguments = arglist
    language['defun'].inside.arguments = Prism.util.clone(arglist)
    language['defun'].inside.arguments.inside.sublist = arglist
    Prism.languages.lisp = language
    Prism.languages.elisp = language
    Prism.languages.emacs = language
    Prism.languages['emacs-lisp'] = language
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/livescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/livescript.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = livescript
livescript.displayName = 'livescript'
livescript.aliases = []
function livescript(Prism) {
  Prism.languages.livescript = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true
      }
    ],
    'interpolated-string': {
      /* Look-behind and look-ahead prevents wrong behavior of the greedy pattern
       * forcing it to match """-quoted string when it would otherwise match "-quoted first. */
      pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
      lookbehind: true,
      greedy: true,
      inside: {
        variable: {
          pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
          lookbehind: true
        },
        interpolation: {
          pattern: /(^|[^\\])#\{[^}]+\}/m,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^#\{|\}$/,
              alias: 'variable' // See rest below
            }
          }
        },
        string: /[\s\S]+/
      }
    },
    string: [
      {
        pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        greedy: true
      },
      {
        pattern: /<\[[\s\S]*?\]>/,
        greedy: true
      },
      /\\[^\s,;\])}]+/
    ],
    regex: [
      {
        pattern: /\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,
        greedy: true,
        inside: {
          comment: {
            pattern: /(^|[^\\])#.*/,
            lookbehind: true
          }
        }
      },
      {
        pattern: /\/(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}/,
        greedy: true
      }
    ],
    keyword: {
      pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
      lookbehind: true
    },
    'keyword-operator': {
      pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
      lookbehind: true,
      alias: 'operator'
    },
    boolean: {
      pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
      lookbehind: true
    },
    argument: {
      // Don't match .&. nor &&
      pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
      lookbehind: true,
      alias: 'variable'
    },
    number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
    identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
    operator: [
      // Spaced .
      {
        pattern: /( )\.(?= )/,
        lookbehind: true
      }, // Full list, in order:
      // .= .~ .. ...
      // .&. .^. .<<. .>>. .>>>.
      // := :: ::=
      // &&
      // || |>
      // < << <<< <<<<
      // <- <-- <-! <--!
      // <~ <~~ <~! <~~!
      // <| <= <?
      // > >> >= >?
      // - -- -> -->
      // + ++
      // @ @@
      // % %%
      // * **
      // ! != !~=
      // !~> !~~>
      // !-> !-->
      // ~ ~> ~~> ~=
      // = ==
      // ^ ^^
      // / ?
      /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/
    ],
    punctuation: /[(){}\[\]|.,:;`]/
  }
  Prism.languages.livescript['interpolated-string'].inside[
    'interpolation'
  ].inside.rest = Prism.languages.livescript
}


/***/ }),

/***/ "./node_modules/refractor/lang/lolcode.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/lolcode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = lolcode
lolcode.displayName = 'lolcode'
lolcode.aliases = []
function lolcode(Prism) {
  Prism.languages.lolcode = {
    comment: [/\bOBTW\s+[\s\S]*?\s+TLDR\b/, /\bBTW.+/],
    string: {
      pattern: /"(?::.|[^"])*"/,
      inside: {
        variable: /:\{[^}]+\}/,
        symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/]
      },
      greedy: true
    },
    number: /(?:\B-)?(?:\b\d+\.?\d*|\B\.\d+)/,
    symbol: {
      pattern: /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
      lookbehind: true,
      inside: {
        keyword: /A(?=\s)/
      }
    },
    label: {
      pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
      lookbehind: true,
      alias: 'string'
    },
    function: {
      pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,
      lookbehind: true
    },
    keyword: [
      {
        pattern: /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
        lookbehind: true
      },
      /'Z(?=\s|,|$)/
    ],
    boolean: {
      pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,
      lookbehind: true
    },
    variable: {
      pattern: /(^|\s)IT(?=\s|,|$)/,
      lookbehind: true
    },
    operator: {
      pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
      lookbehind: true
    },
    punctuation: /\.{3}|…|,|!/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/lua.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/lua.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = lua
lua.displayName = 'lua'
lua.aliases = []
function lua(Prism) {
  Prism.languages.lua = {
    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
    // \z may be used to skip the following space
    string: {
      pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
      greedy: true
    },
    number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
    function: /(?!\d)\w+(?=\s*(?:[({]))/,
    operator: [
      /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
      {
        // Match ".." but don't break "..."
        pattern: /(^|[^.])\.\.(?!\.)/,
        lookbehind: true
      }
    ],
    punctuation: /[\[\](){},;]|\.+|:+/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/makefile.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/makefile.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = makefile
makefile.displayName = 'makefile'
makefile.aliases = []
function makefile(Prism) {
  Prism.languages.makefile = {
    comment: {
      pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
      lookbehind: true
    },
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    // Built-in target names
    builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    // Targets
    symbol: {
      pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
      inside: {
        variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
      }
    },
    variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: [
      // Directives
      /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
      {
        pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
        lookbehind: true
      }
    ],
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/markdown.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/markdown.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = markdown
markdown.displayName = 'markdown'
markdown.aliases = ['md']
function markdown(Prism) {
  ;(function(Prism) {
    // Allow only one line break
    var inner = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source
    /**
     * This function is intended for the creation of the bold or italic pattern.
     *
     * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
     *
     * _Note:_ Keep in mind that this adds a capturing group.
     *
     * @param {string} pattern
     * @param {boolean} starAlternative Whether to also add an alternative where all `_`s are replaced with `*`s.
     * @returns {RegExp}
     */
    function createInline(pattern, starAlternative) {
      pattern = pattern.replace(/<inner>/g, inner)
      if (starAlternative) {
        pattern = pattern + '|' + pattern.replace(/_/g, '\\*')
      }
      return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')')
    }
    var tableCell = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source
    var tableRow = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(
      /__/g,
      tableCell
    )
    var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/
      .source
    Prism.languages.markdown = Prism.languages.extend('markup', {})
    Prism.languages.insertBefore('markdown', 'prolog', {
      blockquote: {
        // > ...
        pattern: /^>(?:[\t ]*>)*/m,
        alias: 'punctuation'
      },
      table: {
        pattern: RegExp(
          '^' + tableRow + tableLine + '(?:' + tableRow + ')*',
          'm'
        ),
        inside: {
          'table-data-rows': {
            pattern: RegExp(
              '^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'
            ),
            lookbehind: true,
            inside: {
              'table-data': {
                pattern: RegExp(tableCell),
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          },
          'table-line': {
            pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
            lookbehind: true,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          'table-header-row': {
            pattern: RegExp('^' + tableRow + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(tableCell),
                alias: 'important',
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [
        {
          // Prefixed by 4 spaces or 1 tab and preceded by an empty line
          pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
          lookbehind: true,
          alias: 'keyword'
        },
        {
          // `code`
          // ``code``
          pattern: /``.+?``|`[^`\r\n]+`/,
          alias: 'keyword'
        },
        {
          // ```optional language
          // code block
          // ```
          pattern: /^```[\s\S]*?^```$/m,
          greedy: true,
          inside: {
            'code-block': {
              pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
              lookbehind: true
            },
            'code-language': {
              pattern: /^(```).+/,
              lookbehind: true
            },
            punctuation: /```/
          }
        }
      ],
      title: [
        {
          // title 1
          // =======
          // title 2
          // -------
          pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
          alias: 'important',
          inside: {
            punctuation: /==+$|--+$/
          }
        },
        {
          // # title 1
          // ###### title 6
          pattern: /(^\s*)#+.+/m,
          lookbehind: true,
          alias: 'important',
          inside: {
            punctuation: /^#+|#+$/
          }
        }
      ],
      hr: {
        // ***
        // ---
        // * * *
        // -----------
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      list: {
        // * item
        // + item
        // - item
        // 1. item
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      'url-reference': {
        // [id]: http://example.com "Optional title"
        // [id]: http://example.com 'Optional title'
        // [id]: http://example.com (Optional title)
        // [id]: <http://example.com> "Optional title"
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: true
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: 'url'
      },
      bold: {
        // **strong**
        // __strong__
        // allow one nested instance of italic text using the same delimiter
        pattern: createInline(
          /__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source,
          true
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        // *em*
        // _em_
        // allow one nested instance of bold text using the same delimiter
        pattern: createInline(
          /_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source,
          true
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        // ~~strike through~~
        // ~strike~
        pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source, false),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /~~?/
        }
      },
      url: {
        // [example](http://example.com "Optional title")
        // [example][id]
        // [example] [id]
        pattern: createInline(
          /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/
            .source,
          false
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          variable: {
            pattern: /(\[)[^\]]+(?=\]$)/,
            lookbehind: true
          },
          content: {
            pattern: /(^!?\[)[^\]]+(?=\])/,
            lookbehind: true,
            inside: {} // see below
          },
          string: {
            pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
          }
        }
      }
    })
    ;['url', 'bold', 'italic', 'strike'].forEach(function(token) {
      ;['url', 'bold', 'italic', 'strike'].forEach(function(inside) {
        if (token !== inside) {
          Prism.languages.markdown[token].inside.content.inside[inside] =
            Prism.languages.markdown[inside]
        }
      })
    })
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'markdown' && env.language !== 'md') {
        return
      }
      function walkTokens(tokens) {
        if (!tokens || typeof tokens === 'string') {
          return
        }
        for (var i = 0, l = tokens.length; i < l; i++) {
          var token = tokens[i]
          if (token.type !== 'code') {
            walkTokens(token.content)
            continue
          }
          /*
           * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
           * is optional. But the grammar is defined so that there is only one case we have to handle:
           *
           * token.content = [
           *     <span class="punctuation">```</span>,
           *     <span class="code-language">xxxx</span>,
           *     '\n', // exactly one new lines (\r or \n or \r\n)
           *     <span class="code-block">...</span>,
           *     '\n', // exactly one new lines again
           *     <span class="punctuation">```</span>
           * ];
           */
          var codeLang = token.content[1]
          var codeBlock = token.content[3]
          if (
            codeLang &&
            codeBlock &&
            codeLang.type === 'code-language' &&
            codeBlock.type === 'code-block' &&
            typeof codeLang.content === 'string'
          ) {
            // this might be a language that Prism does not support
            var alias =
              'language-' +
              codeLang.content
                .trim()
                .split(/\s+/)[0]
                .toLowerCase() // add alias
            if (!codeBlock.alias) {
              codeBlock.alias = [alias]
            } else if (typeof codeBlock.alias === 'string') {
              codeBlock.alias = [codeBlock.alias, alias]
            } else {
              codeBlock.alias.push(alias)
            }
          }
        }
      }
      walkTokens(env.tokens)
    })
    Prism.hooks.add('wrap', function(env) {
      if (env.type !== 'code-block') {
        return
      }
      var codeLang = ''
      for (var i = 0, l = env.classes.length; i < l; i++) {
        var cls = env.classes[i]
        var match = /language-(.+)/.exec(cls)
        if (match) {
          codeLang = match[1]
          break
        }
      }
      var grammar = Prism.languages[codeLang]
      if (!grammar) {
        if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
          var id =
            'md-' +
            new Date().valueOf() +
            '-' +
            Math.floor(Math.random() * 1e16)
          env.attributes['id'] = id
          Prism.plugins.autoloader.loadLanguages(codeLang, function() {
            var ele = document.getElementById(id)
            if (ele) {
              ele.innerHTML = Prism.highlight(
                ele.textContent,
                Prism.languages[codeLang],
                codeLang
              )
            }
          })
        }
      } else {
        // reverse Prism.util.encode
        var code = env.content.value
          .replace(/&lt;/g, '<')
          .replace(/&amp;/g, '&')
        env.content = Prism.highlight(code, grammar, codeLang)
      }
    })
    Prism.languages.md = Prism.languages.markdown
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/markup-templating.js":
/*!**********************************************************!*\
  !*** ./node_modules/refractor/lang/markup-templating.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = markupTemplating
markupTemplating.displayName = 'markupTemplating'
markupTemplating.aliases = []
function markupTemplating(Prism) {
  ;(function(Prism) {
    /**
     * Returns the placeholder for the given language id and index.
     *
     * @param {string} language
     * @param {string|number} index
     * @returns {string}
     */
    function getPlaceholder(language, index) {
      return '___' + language.toUpperCase() + index + '___'
    }
    Object.defineProperties((Prism.languages['markup-templating'] = {}), {
      buildPlaceholders: {
        /**
         * Tokenize all inline templating expressions matching `placeholderPattern`.
         *
         * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
         * `true` will be replaced.
         *
         * @param {object} env The environment of the `before-tokenize` hook.
         * @param {string} language The language id.
         * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
         * @param {(match: string) => boolean} [replaceFilter]
         */
        value: function(env, language, placeholderPattern, replaceFilter) {
          if (env.language !== language) {
            return
          }
          var tokenStack = (env.tokenStack = [])
          env.code = env.code.replace(placeholderPattern, function(match) {
            if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
              return match
            }
            var i = tokenStack.length
            var placeholder // Check for existing strings
            while (
              env.code.indexOf((placeholder = getPlaceholder(language, i))) !==
              -1
            )
              ++i // Create a sparse array
            tokenStack[i] = match
            return placeholder
          }) // Switch the grammar to markup
          env.grammar = Prism.languages.markup
        }
      },
      tokenizePlaceholders: {
        /**
         * Replace placeholders with proper tokens after tokenizing.
         *
         * @param {object} env The environment of the `after-tokenize` hook.
         * @param {string} language The language id.
         */
        value: function(env, language) {
          if (env.language !== language || !env.tokenStack) {
            return
          } // Switch the grammar back
          env.grammar = Prism.languages[language]
          var j = 0
          var keys = Object.keys(env.tokenStack)
          function walkTokens(tokens) {
            for (var i = 0; i < tokens.length; i++) {
              // all placeholders are replaced already
              if (j >= keys.length) {
                break
              }
              var token = tokens[i]
              if (
                typeof token === 'string' ||
                (token.content && typeof token.content === 'string')
              ) {
                var k = keys[j]
                var t = env.tokenStack[k]
                var s = typeof token === 'string' ? token : token.content
                var placeholder = getPlaceholder(language, k)
                var index = s.indexOf(placeholder)
                if (index > -1) {
                  ++j
                  var before = s.substring(0, index)
                  var middle = new Prism.Token(
                    language,
                    Prism.tokenize(t, env.grammar),
                    'language-' + language,
                    t
                  )
                  var after = s.substring(index + placeholder.length)
                  var replacement = []
                  if (before) {
                    replacement.push.apply(replacement, walkTokens([before]))
                  }
                  replacement.push(middle)
                  if (after) {
                    replacement.push.apply(replacement, walkTokens([after]))
                  }
                  if (typeof token === 'string') {
                    tokens.splice.apply(tokens, [i, 1].concat(replacement))
                  } else {
                    token.content = replacement
                  }
                }
              } else if (
                token.content
                /* && typeof token.content !== 'string' */
              ) {
                walkTokens(token.content)
              }
            }
            return tokens
          }
          walkTokens(env.tokens)
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/markup.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/markup.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = markup
markup.displayName = 'markup'
markup.aliases = ['xml', 'html', 'mathml', 'svg']
function markup(Prism) {
  Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            punctuation: [
              /^=/,
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  }
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity'] // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {}
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      }
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      }
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      }
      var def = {}
      def[tagName] = {
        pattern: RegExp(
          /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            tagName
          ),
          'i'
        ),
        lookbehind: true,
        greedy: true,
        inside: inside
      }
      Prism.languages.insertBefore('markup', 'cdata', def)
    }
  })
  Prism.languages.xml = Prism.languages.extend('markup', {})
  Prism.languages.html = Prism.languages.markup
  Prism.languages.mathml = Prism.languages.markup
  Prism.languages.svg = Prism.languages.markup
}


/***/ }),

/***/ "./node_modules/refractor/lang/matlab.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/matlab.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = matlab
matlab.displayName = 'matlab'
matlab.aliases = []
function matlab(Prism) {
  Prism.languages.matlab = {
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    string: {
      pattern: /\B'(?:''|[^'\r\n])*'/,
      greedy: true
    },
    // FIXME We could handle imaginary numbers as a whole
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
    keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    function: /(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/mel.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/mel.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = mel
mel.displayName = 'mel'
mel.aliases = []
function mel(Prism) {
  Prism.languages.mel = {
    comment: /\/\/.*/,
    code: {
      pattern: /`(?:\\.|[^\\`\r\n])*`/,
      greedy: true,
      alias: 'italic',
      inside: {
        delimiter: {
          pattern: /^`|`$/,
          alias: 'punctuation' // See rest below
        }
      }
    },
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    variable: /\$\w+/,
    number: /\b0x[\da-fA-F]+\b|\b\d+\.?\d*|\B\.\d+/,
    flag: {
      pattern: /-[^\d\W]\w*/,
      alias: 'operator'
    },
    keyword: /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
    function: /\w+(?=\()|\b(?:about|abs|addAttr|addAttributeEditorNodeHelp|addDynamic|addNewShelfTab|addPP|addPanelCategory|addPrefixToName|advanceToNextDrivenKey|affectedNet|affects|aimConstraint|air|alias|aliasAttr|align|alignCtx|alignCurve|alignSurface|allViewFit|ambientLight|angle|angleBetween|animCone|animCurveEditor|animDisplay|animView|annotate|appendStringArray|applicationName|applyAttrPreset|applyTake|arcLenDimContext|arcLengthDimension|arclen|arrayMapper|art3dPaintCtx|artAttrCtx|artAttrPaintVertexCtx|artAttrSkinPaintCtx|artAttrTool|artBuildPaintMenu|artFluidAttrCtx|artPuttyCtx|artSelectCtx|artSetPaintCtx|artUserPaintCtx|assignCommand|assignInputDevice|assignViewportFactories|attachCurve|attachDeviceAttr|attachSurface|attrColorSliderGrp|attrCompatibility|attrControlGrp|attrEnumOptionMenu|attrEnumOptionMenuGrp|attrFieldGrp|attrFieldSliderGrp|attrNavigationControlGrp|attrPresetEditWin|attributeExists|attributeInfo|attributeMenu|attributeQuery|autoKeyframe|autoPlace|bakeClip|bakeFluidShading|bakePartialHistory|bakeResults|bakeSimulation|basename|basenameEx|batchRender|bessel|bevel|bevelPlus|binMembership|bindSkin|blend2|blendShape|blendShapeEditor|blendShapePanel|blendTwoAttr|blindDataType|boneLattice|boundary|boxDollyCtx|boxZoomCtx|bufferCurve|buildBookmarkMenu|buildKeyframeMenu|button|buttonManip|CBG|cacheFile|cacheFileCombine|cacheFileMerge|cacheFileTrack|camera|cameraView|canCreateManip|canvas|capitalizeString|catch|catchQuiet|ceil|changeSubdivComponentDisplayLevel|changeSubdivRegion|channelBox|character|characterMap|characterOutlineEditor|characterize|chdir|checkBox|checkBoxGrp|checkDefaultRenderGlobals|choice|circle|circularFillet|clamp|clear|clearCache|clip|clipEditor|clipEditorCurrentTimeCtx|clipSchedule|clipSchedulerOutliner|clipTrimBefore|closeCurve|closeSurface|cluster|cmdFileOutput|cmdScrollFieldExecuter|cmdScrollFieldReporter|cmdShell|coarsenSubdivSelectionList|collision|color|colorAtPoint|colorEditor|colorIndex|colorIndexSliderGrp|colorSliderButtonGrp|colorSliderGrp|columnLayout|commandEcho|commandLine|commandPort|compactHairSystem|componentEditor|compositingInterop|computePolysetVolume|condition|cone|confirmDialog|connectAttr|connectControl|connectDynamic|connectJoint|connectionInfo|constrain|constrainValue|constructionHistory|container|containsMultibyte|contextInfo|control|convertFromOldLayers|convertIffToPsd|convertLightmap|convertSolidTx|convertTessellation|convertUnit|copyArray|copyFlexor|copyKey|copySkinWeights|cos|cpButton|cpCache|cpClothSet|cpCollision|cpConstraint|cpConvClothToMesh|cpForces|cpGetSolverAttr|cpPanel|cpProperty|cpRigidCollisionFilter|cpSeam|cpSetEdit|cpSetSolverAttr|cpSolver|cpSolverTypes|cpTool|cpUpdateClothUVs|createDisplayLayer|createDrawCtx|createEditor|createLayeredPsdFile|createMotionField|createNewShelf|createNode|createRenderLayer|createSubdivRegion|cross|crossProduct|ctxAbort|ctxCompletion|ctxEditMode|ctxTraverse|currentCtx|currentTime|currentTimeCtx|currentUnit|curve|curveAddPtCtx|curveCVCtx|curveEPCtx|curveEditorCtx|curveIntersect|curveMoveEPCtx|curveOnSurface|curveSketchCtx|cutKey|cycleCheck|cylinder|dagPose|date|defaultLightListCheckBox|defaultNavigation|defineDataServer|defineVirtualDevice|deformer|deg_to_rad|delete|deleteAttr|deleteShadingGroupsAndMaterials|deleteShelfTab|deleteUI|deleteUnusedBrushes|delrandstr|detachCurve|detachDeviceAttr|detachSurface|deviceEditor|devicePanel|dgInfo|dgdirty|dgeval|dgtimer|dimWhen|directKeyCtx|directionalLight|dirmap|dirname|disable|disconnectAttr|disconnectJoint|diskCache|displacementToPoly|displayAffected|displayColor|displayCull|displayLevelOfDetail|displayPref|displayRGBColor|displaySmoothness|displayStats|displayString|displaySurface|distanceDimContext|distanceDimension|doBlur|dolly|dollyCtx|dopeSheetEditor|dot|dotProduct|doubleProfileBirailSurface|drag|dragAttrContext|draggerContext|dropoffLocator|duplicate|duplicateCurve|duplicateSurface|dynCache|dynControl|dynExport|dynExpression|dynGlobals|dynPaintEditor|dynParticleCtx|dynPref|dynRelEdPanel|dynRelEditor|dynamicLoad|editAttrLimits|editDisplayLayerGlobals|editDisplayLayerMembers|editRenderLayerAdjustment|editRenderLayerGlobals|editRenderLayerMembers|editor|editorTemplate|effector|emit|emitter|enableDevice|encodeString|endString|endsWith|env|equivalent|equivalentTol|erf|error|eval|evalDeferred|evalEcho|event|exactWorldBoundingBox|exclusiveLightCheckBox|exec|executeForEachObject|exists|exp|expression|expressionEditorListen|extendCurve|extendSurface|extrude|fcheck|fclose|feof|fflush|fgetline|fgetword|file|fileBrowserDialog|fileDialog|fileExtension|fileInfo|filetest|filletCurve|filter|filterCurve|filterExpand|filterStudioImport|findAllIntersections|findAnimCurves|findKeyframe|findMenuItem|findRelatedSkinCluster|finder|firstParentOf|fitBspline|flexor|floatEq|floatField|floatFieldGrp|floatScrollBar|floatSlider|floatSlider2|floatSliderButtonGrp|floatSliderGrp|floor|flow|fluidCacheInfo|fluidEmitter|fluidVoxelInfo|flushUndo|fmod|fontDialog|fopen|formLayout|format|fprint|frameLayout|fread|freeFormFillet|frewind|fromNativePath|fwrite|gamma|gauss|geometryConstraint|getApplicationVersionAsFloat|getAttr|getClassification|getDefaultBrush|getFileList|getFluidAttr|getInputDeviceRange|getMayaPanelTypes|getModifiers|getPanel|getParticleAttr|getPluginResource|getenv|getpid|glRender|glRenderEditor|globalStitch|gmatch|goal|gotoBindPose|grabColor|gradientControl|gradientControlNoAttr|graphDollyCtx|graphSelectContext|graphTrackCtx|gravity|grid|gridLayout|group|groupObjectsByName|HfAddAttractorToAS|HfAssignAS|HfBuildEqualMap|HfBuildFurFiles|HfBuildFurImages|HfCancelAFR|HfConnectASToHF|HfCreateAttractor|HfDeleteAS|HfEditAS|HfPerformCreateAS|HfRemoveAttractorFromAS|HfSelectAttached|HfSelectAttractors|HfUnAssignAS|hardenPointCurve|hardware|hardwareRenderPanel|headsUpDisplay|headsUpMessage|help|helpLine|hermite|hide|hilite|hitTest|hotBox|hotkey|hotkeyCheck|hsv_to_rgb|hudButton|hudSlider|hudSliderButton|hwReflectionMap|hwRender|hwRenderLoad|hyperGraph|hyperPanel|hyperShade|hypot|iconTextButton|iconTextCheckBox|iconTextRadioButton|iconTextRadioCollection|iconTextScrollList|iconTextStaticLabel|ikHandle|ikHandleCtx|ikHandleDisplayScale|ikSolver|ikSplineHandleCtx|ikSystem|ikSystemInfo|ikfkDisplayMethod|illustratorCurves|image|imfPlugins|inheritTransform|insertJoint|insertJointCtx|insertKeyCtx|insertKnotCurve|insertKnotSurface|instance|instanceable|instancer|intField|intFieldGrp|intScrollBar|intSlider|intSliderGrp|interToUI|internalVar|intersect|iprEngine|isAnimCurve|isConnected|isDirty|isParentOf|isSameObject|isTrue|isValidObjectName|isValidString|isValidUiName|isolateSelect|itemFilter|itemFilterAttr|itemFilterRender|itemFilterType|joint|jointCluster|jointCtx|jointDisplayScale|jointLattice|keyTangent|keyframe|keyframeOutliner|keyframeRegionCurrentTimeCtx|keyframeRegionDirectKeyCtx|keyframeRegionDollyCtx|keyframeRegionInsertKeyCtx|keyframeRegionMoveKeyCtx|keyframeRegionScaleKeyCtx|keyframeRegionSelectKeyCtx|keyframeRegionSetKeyCtx|keyframeRegionTrackCtx|keyframeStats|lassoContext|lattice|latticeDeformKeyCtx|launch|launchImageEditor|layerButton|layeredShaderPort|layeredTexturePort|layout|layoutDialog|lightList|lightListEditor|lightListPanel|lightlink|lineIntersection|linearPrecision|linstep|listAnimatable|listAttr|listCameras|listConnections|listDeviceAttachments|listHistory|listInputDeviceAxes|listInputDeviceButtons|listInputDevices|listMenuAnnotation|listNodeTypes|listPanelCategories|listRelatives|listSets|listTransforms|listUnselected|listerEditor|loadFluid|loadNewShelf|loadPlugin|loadPluginLanguageResources|loadPrefObjects|localizedPanelLabel|lockNode|loft|log|longNameOf|lookThru|ls|lsThroughFilter|lsType|lsUI|Mayatomr|mag|makeIdentity|makeLive|makePaintable|makeRoll|makeSingleSurface|makeTubeOn|makebot|manipMoveContext|manipMoveLimitsCtx|manipOptions|manipRotateContext|manipRotateLimitsCtx|manipScaleContext|manipScaleLimitsCtx|marker|match|max|memory|menu|menuBarLayout|menuEditor|menuItem|menuItemToShelf|menuSet|menuSetPref|messageLine|min|minimizeApp|mirrorJoint|modelCurrentTimeCtx|modelEditor|modelPanel|mouse|movIn|movOut|move|moveIKtoFK|moveKeyCtx|moveVertexAlongDirection|multiProfileBirailSurface|mute|nParticle|nameCommand|nameField|namespace|namespaceInfo|newPanelItems|newton|nodeCast|nodeIconButton|nodeOutliner|nodePreset|nodeType|noise|nonLinear|normalConstraint|normalize|nurbsBoolean|nurbsCopyUVSet|nurbsCube|nurbsEditUV|nurbsPlane|nurbsSelect|nurbsSquare|nurbsToPoly|nurbsToPolygonsPref|nurbsToSubdiv|nurbsToSubdivPref|nurbsUVSet|nurbsViewDirectionVector|objExists|objectCenter|objectLayer|objectType|objectTypeUI|obsoleteProc|oceanNurbsPreviewPlane|offsetCurve|offsetCurveOnSurface|offsetSurface|openGLExtension|openMayaPref|optionMenu|optionMenuGrp|optionVar|orbit|orbitCtx|orientConstraint|outlinerEditor|outlinerPanel|overrideModifier|paintEffectsDisplay|pairBlend|palettePort|paneLayout|panel|panelConfiguration|panelHistory|paramDimContext|paramDimension|paramLocator|parent|parentConstraint|particle|particleExists|particleInstancer|particleRenderInfo|partition|pasteKey|pathAnimation|pause|pclose|percent|performanceOptions|pfxstrokes|pickWalk|picture|pixelMove|planarSrf|plane|play|playbackOptions|playblast|plugAttr|plugNode|pluginInfo|pluginResourceUtil|pointConstraint|pointCurveConstraint|pointLight|pointMatrixMult|pointOnCurve|pointOnSurface|pointPosition|poleVectorConstraint|polyAppend|polyAppendFacetCtx|polyAppendVertex|polyAutoProjection|polyAverageNormal|polyAverageVertex|polyBevel|polyBlendColor|polyBlindData|polyBoolOp|polyBridgeEdge|polyCacheMonitor|polyCheck|polyChipOff|polyClipboard|polyCloseBorder|polyCollapseEdge|polyCollapseFacet|polyColorBlindData|polyColorDel|polyColorPerVertex|polyColorSet|polyCompare|polyCone|polyCopyUV|polyCrease|polyCreaseCtx|polyCreateFacet|polyCreateFacetCtx|polyCube|polyCut|polyCutCtx|polyCylinder|polyCylindricalProjection|polyDelEdge|polyDelFacet|polyDelVertex|polyDuplicateAndConnect|polyDuplicateEdge|polyEditUV|polyEditUVShell|polyEvaluate|polyExtrudeEdge|polyExtrudeFacet|polyExtrudeVertex|polyFlipEdge|polyFlipUV|polyForceUV|polyGeoSampler|polyHelix|polyInfo|polyInstallAction|polyLayoutUV|polyListComponentConversion|polyMapCut|polyMapDel|polyMapSew|polyMapSewMove|polyMergeEdge|polyMergeEdgeCtx|polyMergeFacet|polyMergeFacetCtx|polyMergeUV|polyMergeVertex|polyMirrorFace|polyMoveEdge|polyMoveFacet|polyMoveFacetUV|polyMoveUV|polyMoveVertex|polyNormal|polyNormalPerVertex|polyNormalizeUV|polyOptUvs|polyOptions|polyOutput|polyPipe|polyPlanarProjection|polyPlane|polyPlatonicSolid|polyPoke|polyPrimitive|polyPrism|polyProjection|polyPyramid|polyQuad|polyQueryBlindData|polyReduce|polySelect|polySelectConstraint|polySelectConstraintMonitor|polySelectCtx|polySelectEditCtx|polySeparate|polySetToFaceNormal|polySewEdge|polyShortestPathCtx|polySmooth|polySoftEdge|polySphere|polySphericalProjection|polySplit|polySplitCtx|polySplitEdge|polySplitRing|polySplitVertex|polyStraightenUVBorder|polySubdivideEdge|polySubdivideFacet|polyToSubdiv|polyTorus|polyTransfer|polyTriangulate|polyUVSet|polyUnite|polyWedgeFace|popen|popupMenu|pose|pow|preloadRefEd|print|progressBar|progressWindow|projFileViewer|projectCurve|projectTangent|projectionContext|projectionManip|promptDialog|propModCtx|propMove|psdChannelOutliner|psdEditTextureFile|psdExport|psdTextureFile|putenv|pwd|python|querySubdiv|quit|rad_to_deg|radial|radioButton|radioButtonGrp|radioCollection|radioMenuItemCollection|rampColorPort|rand|randomizeFollicles|randstate|rangeControl|readTake|rebuildCurve|rebuildSurface|recordAttr|recordDevice|redo|reference|referenceEdit|referenceQuery|refineSubdivSelectionList|refresh|refreshAE|registerPluginResource|rehash|reloadImage|removeJoint|removeMultiInstance|removePanelCategory|rename|renameAttr|renameSelectionList|renameUI|render|renderGlobalsNode|renderInfo|renderLayerButton|renderLayerParent|renderLayerPostProcess|renderLayerUnparent|renderManip|renderPartition|renderQualityNode|renderSettings|renderThumbnailUpdate|renderWindowEditor|renderWindowSelectContext|renderer|reorder|reorderDeformers|requires|reroot|resampleFluid|resetAE|resetPfxToPolyCamera|resetTool|resolutionNode|retarget|reverseCurve|reverseSurface|revolve|rgb_to_hsv|rigidBody|rigidSolver|roll|rollCtx|rootOf|rot|rotate|rotationInterpolation|roundConstantRadius|rowColumnLayout|rowLayout|runTimeCommand|runup|sampleImage|saveAllShelves|saveAttrPreset|saveFluid|saveImage|saveInitialState|saveMenu|savePrefObjects|savePrefs|saveShelf|saveToolSettings|scale|scaleBrushBrightness|scaleComponents|scaleConstraint|scaleKey|scaleKeyCtx|sceneEditor|sceneUIReplacement|scmh|scriptCtx|scriptEditorInfo|scriptJob|scriptNode|scriptTable|scriptToShelf|scriptedPanel|scriptedPanelType|scrollField|scrollLayout|sculpt|searchPathArray|seed|selLoadSettings|select|selectContext|selectCurveCV|selectKey|selectKeyCtx|selectKeyframeRegionCtx|selectMode|selectPref|selectPriority|selectType|selectedNodes|selectionConnection|separator|setAttr|setAttrEnumResource|setAttrMapping|setAttrNiceNameResource|setConstraintRestPosition|setDefaultShadingGroup|setDrivenKeyframe|setDynamic|setEditCtx|setEditor|setFluidAttr|setFocus|setInfinity|setInputDeviceMapping|setKeyCtx|setKeyPath|setKeyframe|setKeyframeBlendshapeTargetWts|setMenuMode|setNodeNiceNameResource|setNodeTypeFlag|setParent|setParticleAttr|setPfxToPolyCamera|setPluginResource|setProject|setStampDensity|setStartupMessage|setState|setToolTo|setUITemplate|setXformManip|sets|shadingConnection|shadingGeometryRelCtx|shadingLightRelCtx|shadingNetworkCompare|shadingNode|shapeCompare|shelfButton|shelfLayout|shelfTabLayout|shellField|shortNameOf|showHelp|showHidden|showManipCtx|showSelectionInTitle|showShadingGroupAttrEditor|showWindow|sign|simplify|sin|singleProfileBirailSurface|size|sizeBytes|skinCluster|skinPercent|smoothCurve|smoothTangentSurface|smoothstep|snap2to2|snapKey|snapMode|snapTogetherCtx|snapshot|soft|softMod|softModCtx|sort|sound|soundControl|source|spaceLocator|sphere|sphrand|spotLight|spotLightPreviewPort|spreadSheetEditor|spring|sqrt|squareSurface|srtContext|stackTrace|startString|startsWith|stitchAndExplodeShell|stitchSurface|stitchSurfacePoints|strcmp|stringArrayCatenate|stringArrayContains|stringArrayCount|stringArrayInsertAtIndex|stringArrayIntersector|stringArrayRemove|stringArrayRemoveAtIndex|stringArrayRemoveDuplicates|stringArrayRemoveExact|stringArrayToString|stringToStringArray|strip|stripPrefixFromName|stroke|subdAutoProjection|subdCleanTopology|subdCollapse|subdDuplicateAndConnect|subdEditUV|subdListComponentConversion|subdMapCut|subdMapSewMove|subdMatchTopology|subdMirror|subdToBlind|subdToPoly|subdTransferUVsToCache|subdiv|subdivCrease|subdivDisplaySmoothness|substitute|substituteAllString|substituteGeometry|substring|surface|surfaceSampler|surfaceShaderList|swatchDisplayPort|switchTable|symbolButton|symbolCheckBox|sysFile|system|tabLayout|tan|tangentConstraint|texLatticeDeformContext|texManipContext|texMoveContext|texMoveUVShellContext|texRotateContext|texScaleContext|texSelectContext|texSelectShortestPathCtx|texSmudgeUVContext|texWinToolCtx|text|textCurves|textField|textFieldButtonGrp|textFieldGrp|textManip|textScrollList|textToShelf|textureDisplacePlane|textureHairColor|texturePlacementContext|textureWindow|threadCount|threePointArcCtx|timeControl|timePort|timerX|toNativePath|toggle|toggleAxis|toggleWindowVisibility|tokenize|tokenizeList|tolerance|tolower|toolButton|toolCollection|toolDropped|toolHasOptions|toolPropertyWindow|torus|toupper|trace|track|trackCtx|transferAttributes|transformCompare|transformLimits|translator|trim|trunc|truncateFluidCache|truncateHairCache|tumble|tumbleCtx|turbulence|twoPointArcCtx|uiRes|uiTemplate|unassignInputDevice|undo|undoInfo|ungroup|uniform|unit|unloadPlugin|untangleUV|untitledFileName|untrim|upAxis|updateAE|userCtx|uvLink|uvSnapshot|validateShelfName|vectorize|view2dToolCtx|viewCamera|viewClipPlane|viewFit|viewHeadOn|viewLookAt|viewManip|viewPlace|viewSet|visor|volumeAxis|vortex|waitCursor|warning|webBrowser|webBrowserPrefs|whatIs|window|windowPref|wire|wireContext|workspace|wrinkle|wrinkleContext|writeTake|xbmLangPathList|xform)\b/,
    operator: [
      /\+[+=]?|-[-=]?|&&|\|\||[<>]=|[*\/!=]=?|[%^]/,
      {
        // We don't want to match <<
        pattern: /(^|[^<])<(?!<)/,
        lookbehind: true
      },
      {
        // We don't want to match >>
        pattern: /(^|[^>])>(?!>)/,
        lookbehind: true
      }
    ],
    punctuation: /<<|>>|[.,:;?\[\](){}]/
  }
  Prism.languages.mel['code'].inside.rest = Prism.languages.mel
}


/***/ }),

/***/ "./node_modules/refractor/lang/mizar.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/mizar.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = mizar
mizar.displayName = 'mizar'
mizar.aliases = []
function mizar(Prism) {
  Prism.languages.mizar = {
    comment: /::.+/,
    keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
    parameter: {
      pattern: /\$(?:10|\d)/,
      alias: 'variable'
    },
    variable: /\w+(?=:)/,
    number: /(?:\b|-)\d+\b/,
    operator: /\.\.\.|->|&|\.?=/,
    punctuation: /\(#|#\)|[,:;\[\](){}]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/monkey.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/monkey.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = monkey
monkey.displayName = 'monkey'
monkey.aliases = []
function monkey(Prism) {
  Prism.languages.monkey = {
    string: /"[^"\r\n]*"/,
    comment: [
      {
        pattern: /^#Rem\s+[\s\S]*?^#End/im,
        greedy: true
      },
      {
        pattern: /'.+/,
        greedy: true
      }
    ],
    preprocessor: {
      pattern: /(^[ \t]*)#.+/m,
      lookbehind: true,
      alias: 'comment'
    },
    function: /\w+(?=\()/,
    'type-char': {
      pattern: /(\w)[?%#$]/,
      lookbehind: true,
      alias: 'variable'
    },
    number: {
      pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
      lookbehind: true
    },
    keyword: /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
    operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
    punctuation: /[.,:;()\[\]]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/n1ql.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/n1ql.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = n1ql
n1ql.displayName = 'n1ql'
n1ql.aliases = []
function n1ql(Prism) {
  Prism.languages.n1ql = {
    comment: /\/\*[\s\S]*?(?:$|\*\/)/,
    parameter: /\$[\w.]+/,
    string: {
      pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\]|\1\1)*\1/,
      greedy: true
    },
    identifier: {
      pattern: /`(?:\\[\s\S]|[^\\`]|``)*`/,
      greedy: true
    },
    function: /\b(?:ABS|ACOS|ARRAY_AGG|ARRAY_APPEND|ARRAY_AVG|ARRAY_CONCAT|ARRAY_CONTAINS|ARRAY_COUNT|ARRAY_DISTINCT|ARRAY_FLATTEN|ARRAY_IFNULL|ARRAY_INSERT|ARRAY_INTERSECT|ARRAY_LENGTH|ARRAY_MAX|ARRAY_MIN|ARRAY_POSITION|ARRAY_PREPEND|ARRAY_PUT|ARRAY_RANGE|ARRAY_REMOVE|ARRAY_REPEAT|ARRAY_REPLACE|ARRAY_REVERSE|ARRAY_SORT|ARRAY_STAR|ARRAY_SUM|ARRAY_SYMDIFF|ARRAY_SYMDIFFN|ARRAY_UNION|ASIN|ATAN|ATAN2|AVG|BASE64|BASE64_DECODE|BASE64_ENCODE|BITAND|BITCLEAR|BITNOT|BITOR|BITSET|BITSHIFT|BITTEST|BITXOR|CEIL|CLOCK_LOCAL|CLOCK_MILLIS|CLOCK_STR|CLOCK_TZ|CLOCK_UTC|CONTAINS|CONTAINS_TOKEN|CONTAINS_TOKEN_LIKE|CONTAINS_TOKEN_REGEXP|COS|COUNT|CURL|DATE_ADD_MILLIS|DATE_ADD_STR|DATE_DIFF_MILLIS|DATE_DIFF_STR|DATE_FORMAT_STR|DATE_PART_MILLIS|DATE_PART_STR|DATE_RANGE_MILLIS|DATE_RANGE_STR|DATE_TRUNC_MILLIS|DATE_TRUNC_STR|DECODE_JSON|DEGREES|DURATION_TO_STR|E|ENCODED_SIZE|ENCODE_JSON|EXP|FLOOR|GREATEST|HAS_TOKEN|IFINF|IFMISSING|IFMISSINGORNULL|IFNAN|IFNANORINF|IFNULL|INITCAP|ISARRAY|ISATOM|ISBOOLEAN|ISNUMBER|ISOBJECT|ISSTRING|IsBitSET|LEAST|LENGTH|LN|LOG|LOWER|LTRIM|MAX|META|MILLIS|MILLIS_TO_LOCAL|MILLIS_TO_STR|MILLIS_TO_TZ|MILLIS_TO_UTC|MILLIS_TO_ZONE_NAME|MIN|MISSINGIF|NANIF|NEGINFIF|NOW_LOCAL|NOW_MILLIS|NOW_STR|NOW_TZ|NOW_UTC|NULLIF|OBJECT_ADD|OBJECT_CONCAT|OBJECT_INNER_PAIRS|OBJECT_INNER_VALUES|OBJECT_LENGTH|OBJECT_NAMES|OBJECT_PAIRS|OBJECT_PUT|OBJECT_REMOVE|OBJECT_RENAME|OBJECT_REPLACE|OBJECT_UNWRAP|OBJECT_VALUES|PAIRS|PI|POLY_LENGTH|POSINFIF|POSITION|POWER|RADIANS|RANDOM|REGEXP_CONTAINS|REGEXP_LIKE|REGEXP_POSITION|REGEXP_REPLACE|REPEAT|REPLACE|REVERSE|ROUND|RTRIM|SIGN|SIN|SPLIT|SQRT|STR_TO_DURATION|STR_TO_MILLIS|STR_TO_TZ|STR_TO_UTC|STR_TO_ZONE_NAME|SUBSTR|SUFFIXES|SUM|TAN|TITLE|TOARRAY|TOATOM|TOBOOLEAN|TOKENS|TOKENS|TONUMBER|TOOBJECT|TOSTRING|TRIM|TRUNC|TYPE|UPPER|WEEKDAY_MILLIS|WEEKDAY_STR)(?=\s*\()/i,
    keyword: /\b(?:ALL|ALTER|ANALYZE|AS|ASC|BEGIN|BINARY|BOOLEAN|BREAK|BUCKET|BUILD|BY|CALL|CAST|CLUSTER|COLLATE|COLLECTION|COMMIT|CONNECT|CONTINUE|CORRELATE|COVER|CREATE|DATABASE|DATASET|DATASTORE|DECLARE|DECREMENT|DELETE|DERIVED|DESC|DESCRIBE|DISTINCT|DO|DROP|EACH|ELEMENT|EXCEPT|EXCLUDE|EXECUTE|EXPLAIN|FETCH|FLATTEN|FOR|FORCE|FROM|FUNCTION|GRANT|GROUP|GSI|HAVING|IF|IGNORE|ILIKE|INCLUDE|INCREMENT|INDEX|INFER|INLINE|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KEYS|KEYSPACE|KNOWN|LAST|LEFT|LET|LETTING|LIMIT|LSM|MAP|MAPPING|MATCHED|MATERIALIZED|MERGE|MINUS|MISSING|NAMESPACE|NEST|NULL|NUMBER|OBJECT|OFFSET|ON|OPTION|ORDER|OUTER|OVER|PARSE|PARTITION|PASSWORD|PATH|POOL|PREPARE|PRIMARY|PRIVATE|PRIVILEGE|PROCEDURE|PUBLIC|RAW|REALM|REDUCE|RENAME|RETURN|RETURNING|REVOKE|RIGHT|ROLE|ROLLBACK|SATISFIES|SCHEMA|SELECT|SELF|SEMI|SET|SHOW|SOME|START|STATISTICS|STRING|SYSTEM|TO|TRANSACTION|TRIGGER|TRUNCATE|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNSET|UPDATE|UPSERT|USE|USER|USING|VALIDATE|VALUE|VALUES|VIA|VIEW|WHERE|WHILE|WITH|WORK|XOR)\b/i,
    boolean: /\b(?:TRUE|FALSE)\b/i,
    number: /(?:\b\d+\.|\B\.)\d+e[+\-]?\d+\b|\b\d+\.?\d*|\B\.\d+\b/i,
    operator: /[-+*\/=%]|!=|==?|\|\||<[>=]?|>=?|\b(?:AND|ANY|ARRAY|BETWEEN|CASE|ELSE|END|EVERY|EXISTS|FIRST|IN|LIKE|NOT|OR|THEN|VALUED|WHEN|WITHIN)\b/i,
    punctuation: /[;[\](),.{}:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/n4js.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/n4js.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = n4js
n4js.displayName = 'n4js'
n4js.aliases = []
function n4js(Prism) {
  Prism.languages.n4js = Prism.languages.extend('javascript', {
    // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
    keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
  })
  Prism.languages.insertBefore('n4js', 'constant', {
    // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
    annotation: {
      pattern: /@+\w+/,
      alias: 'operator'
    }
  })
  Prism.languages.n4jsd = Prism.languages.n4js
}


/***/ }),

/***/ "./node_modules/refractor/lang/nand2tetris-hdl.js":
/*!********************************************************!*\
  !*** ./node_modules/refractor/lang/nand2tetris-hdl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nand2tetrisHdl
nand2tetrisHdl.displayName = 'nand2tetrisHdl'
nand2tetrisHdl.aliases = []
function nand2tetrisHdl(Prism) {
  Prism.languages['nand2tetris-hdl'] = {
    comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    keyword: /\b(?:CHIP|IN|OUT|PARTS|BUILTIN|CLOCKED)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[A-Za-z][A-Za-z0-9]*(?=\()/,
    number: /\b\d+\b/,
    operator: /=|\.\./,
    punctuation: /[{}[\];(),:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/nasm.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/nasm.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nasm
nasm.displayName = 'nasm'
nasm.aliases = []
function nasm(Prism) {
  Prism.languages.nasm = {
    comment: /;.*$/m,
    string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    label: {
      pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
      lookbehind: true,
      alias: 'function'
    },
    keyword: [
      /\[?BITS (?:16|32|64)\]?/,
      {
        pattern: /(^\s*)section\s*[a-zA-Z.]+:?/im,
        lookbehind: true
      },
      /(?:extern|global)[^;\r\n]*/i,
      /(?:CPU|FLOAT|DEFAULT).*$/m
    ],
    register: {
      pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i,
      alias: 'variable'
    },
    number: /(?:\b|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i,
    operator: /[\[\]*+\-\/%<>=&|$!]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/nginx.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/nginx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nginx
nginx.displayName = 'nginx'
nginx.aliases = []
function nginx(Prism) {
  Prism.languages.nginx = Prism.languages.extend('clike', {
    comment: {
      pattern: /(^|[^"{\\])#.*/,
      lookbehind: true
    },
    keyword: /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|events|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types|ssl_session_tickets|ssl_stapling|ssl_stapling_verify|ssl_ecdh_curve|ssl_trusted_certificate|more_set_headers|ssl_early_data)\b/i
  })
  Prism.languages.insertBefore('nginx', 'keyword', {
    variable: /\$[a-z_]+/i
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/nim.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/nim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nim
nim.displayName = 'nim'
nim.aliases = []
function nim(Prism) {
  Prism.languages.nim = {
    comment: /#.*/,
    // Double-quoted strings can be prefixed by an identifier (Generalized raw string literals)
    // Character literals are handled specifically to prevent issues with numeric type suffixes
    string: {
      pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
      greedy: true
    },
    // The negative look ahead prevents wrong highlighting of the .. operator
    number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
    keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
    function: {
      pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
      inside: {
        operator: /\*$/
      }
    },
    // We don't want to highlight operators inside backticks
    ignore: {
      pattern: /`[^`\r\n]+`/,
      inside: {
        punctuation: /`/
      }
    },
    operator: {
      // Look behind and look ahead prevent wrong highlighting of punctuations [. .] {. .} (. .)
      // but allow the slice operator .. to take precedence over them
      // One can define his own operators in Nim so all combination of operators might be an operator.
      pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
      lookbehind: true
    },
    punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/nix.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/nix.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nix
nix.displayName = 'nix'
nix.aliases = []
function nix(Prism) {
  Prism.languages.nix = {
    comment: /\/\*[\s\S]*?\*\/|#.*/,
    string: {
      pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
      greedy: true,
      inside: {
        interpolation: {
          // The lookbehind ensures the ${} is not preceded by \ or ''
          pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
          lookbehind: true,
          inside: {
            antiquotation: {
              pattern: /^\$(?=\{)/,
              alias: 'variable' // See rest below
            }
          }
        }
      }
    },
    url: [
      /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
      {
        pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
        lookbehind: true
      }
    ],
    antiquotation: {
      pattern: /\$(?=\{)/,
      alias: 'variable'
    },
    number: /\b\d+\b/,
    keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
    function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
    boolean: /\b(?:true|false)\b/,
    operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
    punctuation: /[{}()[\].,:;]/
  }
  Prism.languages.nix.string.inside.interpolation.inside.rest =
    Prism.languages.nix
}


/***/ }),

/***/ "./node_modules/refractor/lang/nsis.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/nsis.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nsis
nsis.displayName = 'nsis'
nsis.aliases = []
function nsis(Prism) {
  /**
   * Original by Jan T. Sott (http://github.com/idleberg)
   *
   * Includes all commands and plug-ins shipped with NSIS 3.02
   */
  Prism.languages.nsis = {
    comment: {
      pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|[#;].*)/,
      lookbehind: true
    },
    string: {
      pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    keyword: {
      pattern: /(^\s*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(?:Font|Gradient|Image)|BrandingText|BringToFront|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DlgItem|DLLVersion(?:Local)?|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(?:Dialogs|Exec)|NSISdl|OutFile|Page(?:Callbacks)?|PE(?:DllCharacteristics|SubsysVer)|Pop|Push|Quit|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle)\b/m,
      lookbehind: true
    },
    property: /\b(?:admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK((CR|CU|LM)(32|64)?|DD|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,
    constant: /\${[\w\.:\^-]+}|\$\([\w\.:\^-]+\)/i,
    variable: /\$\w+/i,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
    operator: /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,
    punctuation: /[{}[\];(),.:]/,
    important: {
      pattern: /(^\s*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,
      lookbehind: true
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/objectivec.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/objectivec.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = objectivec
objectivec.displayName = 'objectivec'
objectivec.aliases = []
function objectivec(Prism) {
  Prism.register(refractorC)
  Prism.languages.objectivec = Prism.languages.extend('c', {
    keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
  })
  delete Prism.languages.objectivec['class-name']
}


/***/ }),

/***/ "./node_modules/refractor/lang/ocaml.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/ocaml.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ocaml
ocaml.displayName = 'ocaml'
ocaml.aliases = []
function ocaml(Prism) {
  Prism.languages.ocaml = {
    comment: /\(\*[\s\S]*?\*\)/,
    string: [
      {
        pattern: /"(?:\\.|[^\\\r\n"])*"/,
        greedy: true
      },
      {
        pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
        greedy: true
      }
    ],
    number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
    type: {
      pattern: /\B['`]\w*/,
      alias: 'variable'
    },
    directive: {
      pattern: /\B#\w+/,
      alias: 'function'
    },
    keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
    boolean: /\b(?:false|true)\b/,
    // Custom operators are allowed
    operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
    punctuation: /[(){}\[\]|_.,:;]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/opencl.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/opencl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
var refractorCpp = __webpack_require__(/*! ./cpp.js */ "./node_modules/refractor/lang/cpp.js")
module.exports = opencl
opencl.displayName = 'opencl'
opencl.aliases = []
function opencl(Prism) {
  Prism.register(refractorC)
  Prism.register(refractorCpp)
  ;(function(Prism) {
    /* OpenCL kernel language */
    Prism.languages.opencl = Prism.languages.extend('c', {
      // Extracted from the official specs (2.0) and http://streamcomputing.eu/downloads/?opencl.lang (opencl-keywords, opencl-types) and http://sourceforge.net/tracker/?func=detail&aid=2957794&group_id=95717&atid=612384 (Words2, partly Words3)
      keyword: /\b(?:__attribute__|(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|auto|break|case|cl_(?:image_format|mem_fence_flags)|clk_event_t|complex|const|continue|default|do|(?:float|double)(?:16(?:x(?:1|16|2|4|8))?|1x(?:1|16|2|4|8)|2(?:x(?:1|16|2|4|8))?|3|4(?:x(?:1|16|2|4|8))?|8(?:x(?:1|16|2|4|8))?)?|else|enum|event_t|extern|for|goto|(?:u?(?:char|short|int|long)|half|quad|bool)(?:2|3|4|8|16)?|if|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|imaginary|inline|intptr_t|ndrange_t|packed|pipe|ptrdiff_t|queue_t|register|reserve_id_t|restrict|return|sampler_t|signed|size_t|sizeof|static|struct|switch|typedef|uintptr_t|uniform|union|unsigned|void|volatile|while)\b/,
      // Extracted from http://streamcomputing.eu/downloads/?opencl.lang (global-vars, opencl-dev)
      'function-opencl-kernel': {
        pattern: /\b(?:abs(?:_diff)?|a?(?:cos|sin)(?:h|pi)?|add_sat|aligned|all|and|any|async(?:_work_group_copy|_work_group_strided_copy)?|atan(?:2?(?:pi)?|h)?|atom_(?:add|and|cmpxchg|dec|inc|max|min|or|sub|xchg|xor)|barrier|bitselect|cbrt|ceil|clamp|clz|copies|copysign|cross|degrees|distance|dot|endian|erf|erfc|exp(?:2|10)?|expm1|fabs|fast_(?:distance|length|normalize)|fdim|floor|fma|fmax|fmin|fract|frexp|fro|from|get_(?:global_(?:id|offset|size)|group_id|image_(?:channel_data_type|channel_order|depth|dim|height|width)|local(?:_id|_size)|num_groups|work_dim)|hadd|(?:half|native)_(?:cos|divide|exp(?:2|10)?|log(?:2|10)?|powr|recip|r?sqrt|sin|tan)|hypot|ilogb|is(?:equal|finite|greater(?:equal)?|inf|less(?:equal|greater)?|nan|normal|notequal|(?:un)?ordered)|ldexp|length|lgamma|lgamma_r|log(?:b|1p|2|10)?|mad(?:24|_hi|_sat)?|max|mem(?:_fence)?|min|mix|modf|mul24|mul_hi|nan|nextafter|normalize|pow[nr]?|prefetch|radians|read_(?:image)(?:f|h|u?i)|read_mem_fence|remainder|remquo|reqd_work_group_size|rhadd|rint|rootn|rotate|round|rsqrt|select|shuffle2?|sign|signbit|sincos|smoothstep|sqrt|step|sub_sat|tan|tanh|tanpi|tgamma|to|trunc|upsample|vec_(?:step|type_hint)|v(?:load|store)(?:_half)?(?:2|3|4|8|16)?|v(?:loada_half|storea?(?:_half)?)(?:2|3|4|8|16)?(?:_(?:rte|rtn|rtp|rtz))?|wait_group_events|work_group_size_hint|write_image(?:f|h|u?i)|write_mem_fence)\b/,
        alias: 'function'
      },
      // Extracted from http://streamcomputing.eu/downloads/?opencl.lang (opencl-const)
      'constant-opencl-kernel': {
        pattern: /\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:LOCAL|GLOBAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT)_(?:DIG|EPSILON|MANT_DIG|(?:MIN|MAX)(?:(?:_10)?_EXP)?)|FLT_RADIX|HUGE_VALF|INFINITY|(?:INT|LONG|SCHAR|SHRT|UCHAR|UINT|ULONG)_(?:MAX|MIN)|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN(?:2|10)|LOG(?:10|2)E?|PI[24]?|SQRT(?:1_2|2))|NAN)\b/,
        alias: 'constant'
      }
    })
    var attributes = {
      // Extracted from http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-types and opencl-host)
      'type-opencl-host': {
        pattern: /\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|short|int|long)|float|double)(?:2|3|4|8|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,
        alias: 'keyword'
      },
      'boolean-opencl-host': {
        pattern: /\bCL_(?:TRUE|FALSE)\b/,
        alias: 'boolean'
      },
      // Extracted from cl.h (2.0) and http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-const)
      'constant-opencl-host': {
        pattern: /\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BGRA|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|R|RA|READ_(?:ONLY|WRITE)_CACHE|RG|RGB|RGBA|RGBx|RGx|RUNNING|Rx|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:16|24|8|_101010|_101010_2)|UNORM_SHORT_(?:555|565)|VERSION_(?:1_0|1_1|1_2|2_0|2_1)|sBGRA|sRGB|sRGBA|sRGBx)\b/,
        alias: 'constant'
      },
      // Extracted from cl.h (2.0) and http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-host)
      'function-opencl-host': {
        pattern: /\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image2D|Image3D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|Kernel|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,
        alias: 'function'
      }
    }
    /* OpenCL host API */
    Prism.languages.insertBefore('c', 'keyword', attributes) // Extracted from doxygen class list http://github.khronos.org/OpenCL-CLHPP/annotated.html
    attributes['type-opencl-host-c++'] = {
      pattern: /\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image|Image1D|Image1DArray|Image1DBuffer|Image2D|Image2DArray|Image2DGL|Image3D|Image3DGL|ImageFormat|ImageGL|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|Sampler|SVMAllocator|SVMTraitAtomic|SVMTraitCoarse|SVMTraitFine|SVMTraitReadOnly|SVMTraitReadWrite|SVMTraitWriteOnly|UserEvent)\b/,
      alias: 'keyword'
    } // C++ includes everything from the OpenCL C host API plus the classes defined in cl2.h
    Prism.languages.insertBefore('cpp', 'keyword', attributes)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/oz.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/oz.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = oz
oz.displayName = 'oz'
oz.aliases = []
function oz(Prism) {
  Prism.languages.oz = {
    comment: /\/\*[\s\S]*?\*\/|%.*/,
    string: {
      pattern: /"(?:[^"\\]|\\[\s\S])*"/,
      greedy: true
    },
    atom: {
      pattern: /'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      alias: 'builtin'
    },
    keyword: /[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
    function: [
      /[a-z][A-Za-z\d]*(?=\()/,
      {
        pattern: /(\{)[A-Z][A-Za-z\d]*/,
        lookbehind: true
      }
    ],
    number: /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,
    variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
    'attr-name': /\w+(?=:)/,
    operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
    punctuation: /[\[\](){}.:;?]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/parigp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/parigp.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parigp
parigp.displayName = 'parigp'
parigp.aliases = []
function parigp(Prism) {
  Prism.languages.parigp = {
    comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
    string: {
      pattern: /"(?:[^"\\\r\n]|\\.)*"/,
      greedy: true
    },
    // PARI/GP does not care about white spaces at all
    // so let's process the keywords to build an appropriate regexp
    // (e.g. "b *r *e *a *k", etc.)
    keyword: (function() {
      var keywords = [
        'breakpoint',
        'break',
        'dbg_down',
        'dbg_err',
        'dbg_up',
        'dbg_x',
        'forcomposite',
        'fordiv',
        'forell',
        'forpart',
        'forprime',
        'forstep',
        'forsubgroup',
        'forvec',
        'for',
        'iferr',
        'if',
        'local',
        'my',
        'next',
        'return',
        'until',
        'while'
      ]
      keywords = keywords
        .map(function(keyword) {
          return keyword.split('').join(' *')
        })
        .join('|')
      return RegExp('\\b(?:' + keywords + ')\\b')
    })(),
    function: /\w[\w ]*?(?= *\()/,
    number: {
      // The lookbehind and the negative lookahead prevent from breaking the .. operator
      pattern: /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
      lookbehind: true
    },
    operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
    punctuation: /[\[\]{}().,:;|]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/parser.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/parser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parser
parser.displayName = 'parser'
parser.aliases = []
function parser(Prism) {
  ;(function(Prism) {
    var parser = (Prism.languages.parser = Prism.languages.extend('markup', {
      keyword: {
        pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
        lookbehind: true
      },
      variable: {
        pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
        lookbehind: true,
        inside: {
          punctuation: /\.|:+/
        }
      },
      function: {
        pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
        lookbehind: true,
        inside: {
          keyword: {
            pattern: /(^@)(?:GET_|SET_)/,
            lookbehind: true
          },
          punctuation: /\.|:+/
        }
      },
      escape: {
        pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
        alias: 'builtin'
      },
      punctuation: /[\[\](){};]/
    }))
    parser = Prism.languages.insertBefore('parser', 'keyword', {
      'parser-comment': {
        pattern: /(\s)#.*/,
        lookbehind: true,
        alias: 'comment'
      },
      expression: {
        // Allow for 3 levels of depth
        pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
        greedy: true,
        lookbehind: true,
        inside: {
          string: {
            pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
            lookbehind: true
          },
          keyword: parser.keyword,
          variable: parser.variable,
          function: parser.function,
          boolean: /\b(?:true|false)\b/,
          number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
          escape: parser.escape,
          operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
          punctuation: parser.punctuation
        }
      }
    })
    parser = Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        expression: parser.expression,
        keyword: parser.keyword,
        variable: parser.variable,
        function: parser.function,
        escape: parser.escape,
        'parser-punctuation': {
          pattern: parser.punctuation,
          alias: 'punctuation'
        }
      },
      parser['tag'].inside['attr-value']
    )
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/pascal.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/pascal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = pascal
pascal.displayName = 'pascal'
pascal.aliases = ['objectpascal']
function pascal(Prism) {
  // Based on Free Pascal
  /* TODO
Support inline asm ?
*/
  Prism.languages.pascal = {
    comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
    string: {
      pattern: /(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
      greedy: true
    },
    keyword: [
      {
        // Turbo Pascal
        pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
        lookbehind: true
      },
      {
        // Free Pascal
        pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
        lookbehind: true
      },
      {
        // Object Pascal
        pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
        lookbehind: true
      },
      {
        // Modifiers
        pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
        lookbehind: true
      }
    ],
    number: [
      // Hexadecimal, octal and binary
      /(?:[&%]\d+|\$[a-f\d]+)/i, // Decimal
      /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i
    ],
    operator: [
      /\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i,
      {
        pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
        lookbehind: true
      }
    ],
    punctuation: /\(\.|\.\)|[()\[\]:;,.]/
  }
  Prism.languages.objectpascal = Prism.languages.pascal
}


/***/ }),

/***/ "./node_modules/refractor/lang/pascaligo.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/pascaligo.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = pascaligo
pascaligo.displayName = 'pascaligo'
pascaligo.aliases = []
function pascaligo(Prism) {
  ;(function(Prism) {
    // Pascaligo is a layer 2 smart contract language for the tezos blockchain
    var braces = /\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source
    var type = /(?:\w+(?:<braces>)?|<braces>)/.source.replace(
      /<braces>/g,
      braces
    )
    var pascaligo = (Prism.languages.pascaligo = {
      comment: /\(\*[\s\S]+?\*\)|\/\/.*/,
      string: {
        pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
        greedy: true
      },
      'class-name': [
        {
          pattern: RegExp(
            /(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g, type),
            'i'
          ),
          lookbehind: true,
          inside: null // see below
        },
        {
          pattern: RegExp(
            /<type>(?=\s+is\b)/.source.replace(/<type>/g, type),
            'i'
          ),
          inside: null // see below
        },
        {
          pattern: RegExp(/(:\s*)<type>/.source.replace(/<type>/g, type)),
          lookbehind: true,
          inside: null // see below
        }
      ],
      keyword: {
        pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
        lookbehind: true
      },
      boolean: {
        pattern: /(^|[^&])\b(?:True|False)\b/i,
        lookbehind: true
      },
      builtin: {
        pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
        lookbehind: true
      },
      function: /\w+(?=\s*\()/i,
      number: [
        // Hexadecimal, octal and binary
        /%[01]+|&[0-7]+|\$[a-f\d]+/i, // Decimal
        /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i
      ],
      operator: /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
      punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/
    })
    var classNameInside = [
      'comment',
      'keyword',
      'builtin',
      'operator',
      'punctuation'
    ].reduce(function(accum, key) {
      accum[key] = pascaligo[key]
      return accum
    }, {})
    pascaligo['class-name'].forEach(function(p) {
      p.inside = classNameInside
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/pcaxis.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/pcaxis.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = pcaxis
pcaxis.displayName = 'pcaxis'
pcaxis.aliases = ['px']
function pcaxis(Prism) {
  Prism.languages.pcaxis = {
    string: /"[^"]*"/,
    keyword: {
      pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,
      lookbehind: true,
      greedy: true,
      inside: {
        keyword: /^[-A-Z\d]+/,
        language: {
          pattern: /^(\s*)\[[-\w]+\]/,
          lookbehind: true,
          inside: {
            punctuation: /^\[|\]$/,
            property: /[-\w]+/
          }
        },
        'sub-key': {
          pattern: /^(\s*)[\s\S]+/,
          lookbehind: true,
          inside: {
            parameter: {
              pattern: /"[^"]*"/,
              alias: 'property'
            },
            punctuation: /^\(|\)$|,/
          }
        }
      }
    },
    operator: /=/,
    tlist: {
      pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,
      greedy: true,
      inside: {
        function: /^TLIST/,
        property: {
          pattern: /^(\s*\(\s*)\w+/,
          lookbehind: true
        },
        string: /"[^"]*"/,
        punctuation: /[(),]/,
        operator: /-/
      }
    },
    punctuation: /[;,]/,
    number: {
      pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/,
      lookbehind: true
    },
    boolean: /YES|NO/
  }
  Prism.languages.px = Prism.languages.pcaxis
}


/***/ }),

/***/ "./node_modules/refractor/lang/perl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/perl.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = perl
perl.displayName = 'perl'
perl.aliases = []
function perl(Prism) {
  Prism.languages.perl = {
    comment: [
      {
        // POD
        pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\$])#.*/,
        lookbehind: true
      }
    ],
    // TODO Could be nice to handle Heredoc too.
    string: [
      // q/.../
      {
        pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: true
      }, // q a...a
      {
        pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: true
      }, // q(...)
      {
        pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
        greedy: true
      }, // q{...}
      {
        pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
        greedy: true
      }, // q[...]
      {
        pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
        greedy: true
      }, // q<...>
      {
        pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
        greedy: true
      }, // "...", `...`
      {
        pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: true
      }, // '...'
      // FIXME Multi-line single-quoted strings are not supported as they would break variables containing '
      {
        pattern: /'(?:[^'\\\r\n]|\\.)*'/,
        greedy: true
      }
    ],
    regex: [
      // m/.../
      {
        pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
        greedy: true
      }, // m a...a
      {
        pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
        greedy: true
      }, // m(...)
      {
        pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
        greedy: true
      }, // m{...}
      {
        pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
        greedy: true
      }, // m[...]
      {
        pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
        greedy: true
      }, // m<...>
      {
        pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
        greedy: true
      }, // The lookbehinds prevent -s from breaking
      // FIXME We don't handle change of separator like s(...)[...]
      // s/.../.../
      {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
        lookbehind: true,
        greedy: true
      }, // s a...a...a
      {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
        lookbehind: true,
        greedy: true
      }, // s(...)(...)
      {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
        lookbehind: true,
        greedy: true
      }, // s{...}{...}
      {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
        lookbehind: true,
        greedy: true
      }, // s[...][...]
      {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
        lookbehind: true,
        greedy: true
      }, // s<...><...>
      {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
        lookbehind: true,
        greedy: true
      }, // /.../
      // The look-ahead tries to prevent two divisions on
      // the same line from being highlighted as regex.
      // This does not support multi-line regex.
      {
        pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
        greedy: true
      }
    ],
    // FIXME Not sure about the handling of ::, ', and #
    variable: [
      // ${^POSTMATCH}
      /[&*$@%]\{\^[A-Z]+\}/, // $^V
      /[&*$@%]\^[A-Z_]/, // ${...}
      /[&*$@%]#?(?=\{)/, // $foo
      /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i, // $1
      /[&*$@%]\d+/, // $_, @_, %!
      // The negative lookahead prevents from breaking the %= operator
      /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
    ],
    filehandle: {
      // <>, <FOO>, _
      pattern: /<(?![<=])\S*>|\b_\b/,
      alias: 'symbol'
    },
    vstring: {
      // v1.2, 1.2.3
      pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
      alias: 'string'
    },
    function: {
      pattern: /sub [a-z0-9_]+/i,
      inside: {
        keyword: /sub/
      }
    },
    keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
    operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
    punctuation: /[{}[\];(),:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/php-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/php-extras.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorPhp = __webpack_require__(/*! ./php.js */ "./node_modules/refractor/lang/php.js")
module.exports = phpExtras
phpExtras.displayName = 'phpExtras'
phpExtras.aliases = []
function phpExtras(Prism) {
  Prism.register(refractorPhp)
  Prism.languages.insertBefore('php', 'variable', {
    this: /\$this\b/,
    global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
    scope: {
      pattern: /\b[\w\\]+::/,
      inside: {
        keyword: /static|self|parent/,
        punctuation: /::|\\/
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/php.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/php.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = php
php.displayName = 'php'
php.aliases = []
function php(Prism) {
  Prism.register(refractorMarkupTemplating)
  /**
   * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
   * Modified by Miles Johnson: http://milesj.me
   *
   * Supports the following:
   *      - Extends clike syntax
   *      - Support for PHP 5.3+ (namespaces, traits, generators, etc)
   *      - Smarter constant and function matching
   *
   * Adds the following new token classes:
   *      constant, delimiter, variable, function, package
   */
  ;(function(Prism) {
    Prism.languages.php = Prism.languages.extend('clike', {
      keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
      boolean: {
        pattern: /\b(?:false|true)\b/i,
        alias: 'constant'
      },
      constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('php', 'string', {
      'shell-comment': {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        alias: 'comment'
      }
    })
    Prism.languages.insertBefore('php', 'comment', {
      delimiter: {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: 'important'
      }
    })
    Prism.languages.insertBefore('php', 'keyword', {
      variable: /\$+(?:\w+\b|(?={))/i,
      package: {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
        lookbehind: true,
        inside: {
          punctuation: /\\/
        }
      }
    }) // Must be defined after the function pattern
    Prism.languages.insertBefore('php', 'operator', {
      property: {
        pattern: /(->)[\w]+/,
        lookbehind: true
      }
    })
    var string_interpolation = {
      pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
      lookbehind: true,
      inside: {
        rest: Prism.languages.php
      }
    }
    Prism.languages.insertBefore('php', 'string', {
      'nowdoc-string': {
        pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
        greedy: true,
        alias: 'string',
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: {
              punctuation: /^<<<'?|[';]$/
            }
          }
        }
      },
      'heredoc-string': {
        pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
        greedy: true,
        alias: 'string',
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: {
              punctuation: /^<<<"?|[";]$/
            }
          },
          interpolation: string_interpolation // See below
        }
      },
      'single-quoted-string': {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        greedy: true,
        alias: 'string'
      },
      'double-quoted-string': {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: true,
        alias: 'string',
        inside: {
          interpolation: string_interpolation // See below
        }
      }
    }) // The different types of PHP strings "replace" the C-like standard string
    delete Prism.languages.php['string']
    Prism.hooks.add('before-tokenize', function(env) {
      if (!/<\?/.test(env.code)) {
        return
      }
      var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'php',
        phpPattern
      )
    })
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/phpdoc.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/phpdoc.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJavadoclike = __webpack_require__(/*! ./javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js")
module.exports = phpdoc
phpdoc.displayName = 'phpdoc'
phpdoc.aliases = []
function phpdoc(Prism) {
  Prism.register(refractorJavadoclike)
  ;(function(Prism) {
    var typeExpression = /(?:[a-zA-Z]\w*|[|\\[\]])+/.source
    Prism.languages.phpdoc = Prism.languages.extend('javadoclike', {
      parameter: {
        pattern: RegExp(
          '(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:' +
            typeExpression +
            '\\s+)?)\\$\\w+'
        ),
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('phpdoc', 'keyword', {
      'class-name': [
        {
          pattern: RegExp(
            '(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)' +
              typeExpression
          ),
          lookbehind: true,
          inside: {
            keyword: /\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,
            punctuation: /[|\\[\]()]/
          }
        }
      ]
    })
    Prism.languages.javadoclike.addSupport('php', Prism.languages.phpdoc)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/plsql.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/plsql.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorSql = __webpack_require__(/*! ./sql.js */ "./node_modules/refractor/lang/sql.js")
module.exports = plsql
plsql.displayName = 'plsql'
plsql.aliases = []
function plsql(Prism) {
  Prism.register(refractorSql)
  ;(function(Prism) {
    var plsql = (Prism.languages.plsql = Prism.languages.extend('sql', {
      comment: [/\/\*[\s\S]*?\*\//, /--.*/]
    }))
    var keyword = plsql['keyword']
    if (!Array.isArray(keyword)) {
      keyword = plsql['keyword'] = [keyword]
    }
    keyword.unshift(
      /\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i
    )
    var operator = plsql['operator']
    if (!Array.isArray(operator)) {
      operator = plsql['operator'] = [operator]
    }
    operator.unshift(/:=/)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/powershell.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/powershell.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = powershell
powershell.displayName = 'powershell'
powershell.aliases = []
function powershell(Prism) {
  ;(function(Prism) {
    var powershell = (Prism.languages.powershell = {
      comment: [
        {
          pattern: /(^|[^`])<#[\s\S]*?#>/,
          lookbehind: true
        },
        {
          pattern: /(^|[^`])#.*/,
          lookbehind: true
        }
      ],
      string: [
        {
          pattern: /"(?:`[\s\S]|[^`"])*"/,
          greedy: true,
          inside: {
            function: {
              // Allow for one level of nesting
              pattern: /(^|[^`])\$\((?:\$\(.*?\)|(?!\$\()[^\r\n)])*\)/,
              lookbehind: true,
              // Populated at end of file
              inside: {}
            }
          }
        },
        {
          pattern: /'(?:[^']|'')*'/,
          greedy: true
        }
      ],
      // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
      // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
      namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
      boolean: /\$(?:true|false)\b/i,
      variable: /\$\w+\b/i,
      // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
      // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
      // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
      function: [
        /\b(?:Add-(?:Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(?:Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(?:Csv|Json|StringData)|Convert-Path|ConvertTo-(?:Csv|Html|Json|Xml)|Copy-(?:Item|ItemProperty)|Debug-Process|Disable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(?:Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(?:Custom|List|Table|Wide)|Get-(?:Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(?:Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(?:Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(?:Command|Object)|Move-(?:Item|ItemProperty)|New-(?:Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(?:Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(?:Job|PSSession)|Register-(?:EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(?:Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(?:Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(?:Computer|Service)|Restore-Computer|Resume-(?:Job|Service)|Save-Help|Select-(?:Object|String|Xml)|Send-MailMessage|Set-(?:Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(?:Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(?:Job|Process|Service|Sleep|Transaction)|Stop-(?:Computer|Job|Process|Service)|Suspend-(?:Job|Service)|Tee-Object|Test-(?:ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(?:Event|PSSessionConfiguration)|Update-(?:FormatData|Help|List|TypeData)|Use-Transaction|Wait-(?:Event|Job|Process)|Where-Object|Write-(?:Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i,
        /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
      ],
      // per http://technet.microsoft.com/en-us/library/hh847744.aspx
      keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
      operator: {
        pattern: /(\W?)(?:!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
        lookbehind: true
      },
      punctuation: /[|{}[\];(),.]/
    }) // Variable interpolation inside strings, and nested expressions
    var stringInside = powershell.string[0].inside
    stringInside.boolean = powershell.boolean
    stringInside.variable = powershell.variable
    stringInside.function.inside = powershell
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/processing.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/processing.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = processing
processing.displayName = 'processing'
processing.aliases = []
function processing(Prism) {
  Prism.languages.processing = Prism.languages.extend('clike', {
    keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
    operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
  })
  Prism.languages.insertBefore('processing', 'number', {
    // Special case: XML is a type
    constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
    type: {
      pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
      alias: 'variable'
    }
  }) // Spaces are allowed between function name and parenthesis
  Prism.languages.processing['function'].pattern = /\w+(?=\s*\()/ // Class-names is not styled by default
  Prism.languages.processing['class-name'].alias = 'variable'
}


/***/ }),

/***/ "./node_modules/refractor/lang/prolog.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/prolog.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = prolog
prolog.displayName = 'prolog'
prolog.aliases = []
function prolog(Prism) {
  Prism.languages.prolog = {
    // Syntax depends on the implementation
    comment: [/%.+/, /\/\*[\s\S]*?\*\//],
    // Depending on the implementation, strings may allow escaped newlines and quote-escape
    string: {
      pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
    variable: /\b[A-Z_]\w*/,
    // FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?
    function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
    number: /\b\d+\.?\d*/,
    // Custom operators are allowed
    operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
    punctuation: /[(){}\[\],]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/properties.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/properties.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = properties
properties.displayName = 'properties'
properties.aliases = []
function properties(Prism) {
  Prism.languages.properties = {
    comment: /^[ \t]*[#!].*$/m,
    'attr-value': {
      pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
      lookbehind: true
    },
    'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m,
    punctuation: /[=:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/protobuf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/protobuf.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = protobuf
protobuf.displayName = 'protobuf'
protobuf.aliases = []
function protobuf(Prism) {
  ;(function(Prism) {
    var builtinTypes = /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/
    Prism.languages.protobuf = Prism.languages.extend('clike', {
      'class-name': {
        pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
        lookbehind: true
      },
      keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/
    })
    Prism.languages.insertBefore('protobuf', 'operator', {
      map: {
        pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,
        alias: 'class-name',
        inside: {
          punctuation: /[<>.,]/,
          builtin: builtinTypes
        }
      },
      builtin: builtinTypes,
      'positional-class-name': {
        pattern: /(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,
        alias: 'class-name',
        inside: {
          punctuation: /\./
        }
      },
      annotation: {
        pattern: /(\[\s*)[A-Za-z_]\w*(?=\s*=)/,
        lookbehind: true
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/pug.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/pug.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = pug
pug.displayName = 'pug'
pug.aliases = []
function pug(Prism) {
  ;(function(Prism) {
    // TODO:
    // - Add CSS highlighting inside <style> tags
    // - Add support for multi-line code blocks
    // - Add support for interpolation #{} and !{}
    // - Add support for tag interpolation #[]
    // - Add explicit support for plain text using |
    // - Add support for markup embedded in plain text
    Prism.languages.pug = {
      // Multiline stuff should appear before the rest
      // This handles both single-line and multi-line comments
      comment: {
        pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
        lookbehind: true
      },
      // All the tag-related part is in lookbehind
      // so that it can be highlighted by the "tag" pattern
      'multiline-script': {
        pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.javascript
        }
      },
      // See at the end of the file for known filters
      filter: {
        pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true,
        inside: {
          'filter-name': {
            pattern: /^:[\w-]+/,
            alias: 'variable'
          }
        }
      },
      'multiline-plain-text': {
        pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true
      },
      markup: {
        pattern: /(^[\t ]*)<.+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.markup
        }
      },
      doctype: {
        pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
        lookbehind: true
      },
      // This handle all conditional and loop keywords
      'flow-control': {
        pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
        lookbehind: true,
        inside: {
          each: {
            pattern: /^each .+? in\b/,
            inside: {
              keyword: /\b(?:each|in)\b/,
              punctuation: /,/
            }
          },
          branch: {
            pattern: /^(?:if|unless|else|case|when|default|while)\b/,
            alias: 'keyword'
          },
          rest: Prism.languages.javascript
        }
      },
      keyword: {
        pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
        lookbehind: true
      },
      mixin: [
        // Declaration
        {
          pattern: /(^[\t ]*)mixin .+/m,
          lookbehind: true,
          inside: {
            keyword: /^mixin/,
            function: /\w+(?=\s*\(|\s*$)/,
            punctuation: /[(),.]/
          }
        }, // Usage
        {
          pattern: /(^[\t ]*)\+.+/m,
          lookbehind: true,
          inside: {
            name: {
              pattern: /^\+\w+/,
              alias: 'function'
            },
            rest: Prism.languages.javascript
          }
        }
      ],
      script: {
        pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.javascript
        }
      },
      'plain-text': {
        pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
        lookbehind: true
      },
      tag: {
        pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
        lookbehind: true,
        inside: {
          attributes: [
            {
              pattern: /&[^(]+\([^)]+\)/,
              inside: {
                rest: Prism.languages.javascript
              }
            },
            {
              pattern: /\([^)]+\)/,
              inside: {
                'attr-value': {
                  pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                  lookbehind: true,
                  inside: {
                    rest: Prism.languages.javascript
                  }
                },
                'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
                punctuation: /[!=(),]+/
              }
            }
          ],
          punctuation: /:/
        }
      },
      code: [
        {
          pattern: /(^[\t ]*(?:-|!?=)).+/m,
          lookbehind: true,
          inside: {
            rest: Prism.languages.javascript
          }
        }
      ],
      punctuation: /[.\-!=|]+/
    }
    var filter_pattern = /(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/
      .source // Non exhaustive list of available filters and associated languages
    var filters = [
      {
        filter: 'atpl',
        language: 'twig'
      },
      {
        filter: 'coffee',
        language: 'coffeescript'
      },
      'ejs',
      'handlebars',
      'less',
      'livescript',
      'markdown',
      {
        filter: 'sass',
        language: 'scss'
      },
      'stylus'
    ]
    var all_filters = {}
    for (var i = 0, l = filters.length; i < l; i++) {
      var filter = filters[i]
      filter =
        typeof filter === 'string'
          ? {
              filter: filter,
              language: filter
            }
          : filter
      if (Prism.languages[filter.language]) {
        all_filters['filter-' + filter.filter] = {
          pattern: RegExp(
            filter_pattern.replace('{{filter_name}}', filter.filter),
            'm'
          ),
          lookbehind: true,
          inside: {
            'filter-name': {
              pattern: /^:[\w-]+/,
              alias: 'variable'
            },
            rest: Prism.languages[filter.language]
          }
        }
      }
    }
    Prism.languages.insertBefore('pug', 'filter', all_filters)
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/puppet.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/puppet.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = puppet
puppet.displayName = 'puppet'
puppet.aliases = []
function puppet(Prism) {
  ;(function(Prism) {
    Prism.languages.puppet = {
      heredoc: [
        // Matches the content of a quoted heredoc string (subject to interpolation)
        {
          pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
          lookbehind: true,
          alias: 'string',
          inside: {
            // Matches the end tag
            punctuation: /(?=\S).*\S(?= *$)/ // See interpolation below
          }
        }, // Matches the content of an unquoted heredoc string (no interpolation)
        {
          pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
          lookbehind: true,
          greedy: true,
          alias: 'string',
          inside: {
            // Matches the end tag
            punctuation: /(?=\S).*\S(?= *$)/
          }
        }, // Matches the start tag of heredoc strings
        {
          pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
          alias: 'string',
          inside: {
            punctuation: {
              pattern: /(\().+?(?=\))/,
              lookbehind: true
            }
          }
        }
      ],
      'multiline-comment': {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: true,
        greedy: true,
        alias: 'comment'
      },
      regex: {
        // Must be prefixed with the keyword "node" or a non-word char
        pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
        lookbehind: true,
        greedy: true,
        inside: {
          // Extended regexes must have the x flag. They can contain single-line comments.
          'extended-regex': {
            pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
            inside: {
              comment: /#.*/
            }
          }
        }
      },
      comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        greedy: true
      },
      string: {
        // Allow for one nested level of double quotes inside interpolation
        pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: true,
        inside: {
          'double-quoted': {
            pattern: /^"[\s\S]*"$/,
            inside: {
              // See interpolation below
            }
          }
        }
      },
      variable: {
        pattern: /\$(?:::)?\w+(?:::\w+)*/,
        inside: {
          punctuation: /::/
        }
      },
      'attr-name': /(?:\w+|\*)(?=\s*=>)/,
      function: [
        {
          pattern: /(\.)(?!\d)\w+/,
          lookbehind: true
        },
        /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/
      ],
      number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
      boolean: /\b(?:true|false)\b/,
      // Includes words reserved for future use
      keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
      datatype: {
        pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
        alias: 'symbol'
      },
      operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
      punctuation: /[\[\]{}().,;]|:+/
    }
    var interpolation = [
      {
        // Allow for one nested level of braces inside interpolation
        pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
        lookbehind: true,
        inside: {
          'short-variable': {
            // Negative look-ahead prevent wrong highlighting of functions
            pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
            lookbehind: true,
            alias: 'variable',
            inside: {
              punctuation: /::/
            }
          },
          delimiter: {
            pattern: /^\$/,
            alias: 'variable'
          },
          rest: Prism.languages.puppet
        }
      },
      {
        pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
        lookbehind: true,
        alias: 'variable',
        inside: {
          punctuation: /::/
        }
      }
    ]
    Prism.languages.puppet['heredoc'][0].inside.interpolation = interpolation
    Prism.languages.puppet['string'].inside[
      'double-quoted'
    ].inside.interpolation = interpolation
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/pure.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/pure.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = pure
pure.displayName = 'pure'
pure.aliases = []
function pure(Prism) {
  Prism.register(refractorC)
  ;(function(Prism) {
    Prism.languages.pure = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
          lookbehind: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true
        },
        /#!.+/
      ],
      'inline-lang': {
        pattern: /%<[\s\S]+?%>/,
        greedy: true,
        inside: {
          lang: {
            pattern: /(^%< *)-\*-.+?-\*-/,
            lookbehind: true,
            alias: 'comment'
          },
          delimiter: {
            pattern: /^%<.*|%>$/,
            alias: 'punctuation'
          }
        }
      },
      string: {
        pattern: /"(?:\\.|[^"\\\r\n])*"/,
        greedy: true
      },
      number: {
        // The look-behind prevents wrong highlighting of the .. operator
        pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,
        lookbehind: true
      },
      keyword: /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
      function: /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
      special: {
        pattern: /\b__[a-z]+__\b/i,
        alias: 'builtin'
      },
      // Any combination of operator chars can be an operator
      operator: /(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,
      // FIXME: How can we prevent | and , to be highlighted as operator when they are used alone?
      punctuation: /[(){}\[\];,|]/
    }
    var inlineLanguages = [
      'c',
      {
        lang: 'c++',
        alias: 'cpp'
      },
      'fortran'
    ]
    var inlineLanguageRe = /%< *-\*- *{lang}\d* *-\*-[\s\S]+?%>/.source
    inlineLanguages.forEach(function(lang) {
      var alias = lang
      if (typeof lang !== 'string') {
        alias = lang.alias
        lang = lang.lang
      }
      if (Prism.languages[alias]) {
        var o = {}
        o['inline-lang-' + alias] = {
          pattern: RegExp(
            inlineLanguageRe.replace(
              '{lang}',
              lang.replace(/([.+*?\/\\(){}\[\]])/g, '\\$1')
            ),
            'i'
          ),
          inside: Prism.util.clone(Prism.languages.pure['inline-lang'].inside)
        }
        o['inline-lang-' + alias].inside.rest = Prism.util.clone(
          Prism.languages[alias]
        )
        Prism.languages.insertBefore('pure', 'inline-lang', o)
      }
    }) // C is the default inline language
    if (Prism.languages.c) {
      Prism.languages.pure['inline-lang'].inside.rest = Prism.util.clone(
        Prism.languages.c
      )
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/python.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/python.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = python
python.displayName = 'python'
python.aliases = ['py']
function python(Prism) {
  Prism.languages.python = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    'string-interpolation': {
      pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: true,
      inside: {
        interpolation: {
          // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
          pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
          lookbehind: true,
          inside: {
            'format-spec': {
              pattern: /(:)[^:(){}]+(?=}$)/,
              lookbehind: true
            },
            'conversion-option': {
              pattern: /![sra](?=[:}]$)/,
              alias: 'punctuation'
            },
            rest: null
          }
        },
        string: /[\s\S]+/
      }
    },
    'triple-quoted-string': {
      pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
      greedy: true,
      alias: 'string'
    },
    string: {
      pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: true
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: true
    },
    'class-name': {
      pattern: /(\bclass\s+)\w+/i,
      lookbehind: true
    },
    decorator: {
      pattern: /(^\s*)@\w+(?:\.\w+)*/i,
      lookbehind: true,
      alias: ['annotation', 'punctuation'],
      inside: {
        punctuation: /\./
      }
    },
    keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:True|False|None)\b/,
    number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
  }
  Prism.languages.python['string-interpolation'].inside[
    'interpolation'
  ].inside.rest = Prism.languages.python
  Prism.languages.py = Prism.languages.python
}


/***/ }),

/***/ "./node_modules/refractor/lang/q.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/q.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = q
q.displayName = 'q'
q.aliases = []
function q(Prism) {
  Prism.languages.q = {
    string: /"(?:\\.|[^"\\\r\n])*"/,
    comment: [
      // From http://code.kx.com/wiki/Reference/Slash:
      // When / is following a space (or a right parenthesis, bracket, or brace), it is ignored with the rest of the line.
      {
        pattern: /([\t )\]}])\/.*/,
        lookbehind: true,
        greedy: true
      }, // From http://code.kx.com/wiki/Reference/Slash:
      // A line which has / as its first character and contains at least one other non-whitespace character is a whole-line comment and is ignored entirely.
      // A / on a line by itself begins a multiline comment which is terminated by the next \ on a line by itself.
      // If a / is not matched by a \, the multiline comment is unterminated and continues to end of file.
      // The / and \ must be the first char on the line, but may be followed by any amount of whitespace.
      {
        pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
        lookbehind: true,
        greedy: true
      }, // From http://code.kx.com/wiki/Reference/Slash:
      // A \ on a line by itself with no preceding matching / will comment to end of file.
      {
        pattern: /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m,
        greedy: true
      },
      {
        pattern: /^#!.+/m,
        greedy: true
      }
    ],
    symbol: /`(?::\S+|[\w.]*)/,
    datetime: {
      pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
      alias: 'number'
    },
    // The negative look-ahead prevents bad highlighting
    // of verbs 0: and 1:
    number: /\b(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,
    keyword: /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
    adverb: {
      pattern: /['\/\\]:?|\beach\b/,
      alias: 'function'
    },
    verb: {
      pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?_~=|$&#@^]):?/,
      alias: 'operator'
    },
    punctuation: /[(){}\[\];.]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/qore.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/qore.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = qore
qore.displayName = 'qore'
qore.aliases = []
function qore(Prism) {
  Prism.languages.qore = Prism.languages.extend('clike', {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,
      lookbehind: true
    },
    // Overridden to allow unescaped multi-line strings
    string: {
      pattern: /("|')(\\[\s\S]|(?!\1)[^\\])*\1/,
      greedy: true
    },
    variable: /\$(?!\d)\w+\b/,
    keyword: /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
    number: /\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,
    boolean: /\b(?:true|false)\b/i,
    operator: {
      pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
      lookbehind: true
    },
    function: /\$?\b(?!\d)\w+(?=\()/
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/r.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/r.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = r
r.displayName = 'r'
r.aliases = []
function r(Prism) {
  Prism.languages.r = {
    comment: /#.*/,
    string: {
      pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'percent-operator': {
      // Includes user-defined operators
      // and %%, %*%, %/%, %in%, %o%, %x%
      pattern: /%[^%\s]*%/,
      alias: 'operator'
    },
    boolean: /\b(?:TRUE|FALSE)\b/,
    ellipsis: /\.\.(?:\.|\d+)/,
    number: [
      /\b(?:NaN|Inf)\b/,
      /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
    ],
    keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
    punctuation: /[(){}\[\],;]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/reason.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/reason.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = reason
reason.displayName = 'reason'
reason.aliases = []
function reason(Prism) {
  Prism.languages.reason = Prism.languages.extend('clike', {
    comment: {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: true
    },
    string: {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
      greedy: true
    },
    // 'class-name' must be matched *after* 'constructor' defined below
    'class-name': /\b[A-Z]\w*/,
    keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
    operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
  })
  Prism.languages.insertBefore('reason', 'class-name', {
    character: {
      pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
      alias: 'string'
    },
    constructor: {
      // Negative look-ahead prevents from matching things like String.capitalize
      pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
      alias: 'variable'
    },
    label: {
      pattern: /\b[a-z]\w*(?=::)/,
      alias: 'symbol'
    }
  }) // We can't match functions property, so let's not even try.
  delete Prism.languages.reason.function
}


/***/ }),

/***/ "./node_modules/refractor/lang/regex.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/regex.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = regex
regex.displayName = 'regex'
regex.aliases = []
function regex(Prism) {
  ;(function(Prism) {
    var specialEscape = {
      pattern: /\\[\\(){}[\]^$+*?|.]/,
      alias: 'escape'
    }
    var escape = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/
    var charClass = /\\[wsd]|\.|\\p{[^{}]+}/i
    var rangeChar = '(?:[^\\\\-]|' + escape.source + ')'
    var range = RegExp(rangeChar + '-' + rangeChar) // the name of a capturing group
    var groupName = {
      pattern: /(<|')[^<>']+(?=[>']$)/,
      lookbehind: true,
      alias: 'variable'
    }
    var backreference = [
      /\\(?![123][0-7]{2})[1-9]/, // a backreference which is not an octal escape
      {
        pattern: /\\k<[^<>']+>/,
        inside: {
          'group-name': groupName
        }
      }
    ]
    Prism.languages.regex = {
      charset: {
        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
        lookbehind: true,
        inside: {
          'charset-negation': {
            pattern: /(^\[)\^/,
            lookbehind: true
          },
          'charset-punctuation': /^\[|\]$/,
          range: {
            pattern: range,
            inside: {
              escape: escape,
              'range-punctuation': /-/
            }
          },
          'special-escape': specialEscape,
          charclass: charClass,
          backreference: backreference,
          escape: escape
        }
      },
      'special-escape': specialEscape,
      charclass: charClass,
      backreference: backreference,
      anchor: /[$^]|\\[ABbGZz]/,
      escape: escape,
      group: [
        {
          // https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html
          // https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?view=netframework-4.7.2#grouping-constructs
          // (), (?<name>), (?'name'), (?>), (?:), (?=), (?!), (?<=), (?<!), (?is-m), (?i-m:)
          pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
          inside: {
            'group-name': groupName
          }
        },
        /\)/
      ],
      quantifier: /[+*?]|\{(?:\d+,?\d*)\}/,
      alternation: /\|/
    }
    ;[
      'actionscript',
      'coffescript',
      'flow',
      'javascript',
      'typescript',
      'vala'
    ].forEach(function(lang) {
      var grammar = Prism.languages[lang]
      if (grammar) {
        grammar['regex'].inside = {
          'regex-flags': /[a-z]+$/,
          'regex-delimiter': /^\/|\/$/,
          'language-regex': {
            pattern: /[\s\S]+/,
            inside: Prism.languages.regex
          }
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/renpy.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/renpy.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = renpy
renpy.displayName = 'renpy'
renpy.aliases = []
function renpy(Prism) {
  Prism.languages.renpy = {
    // TODO Write tests.
    comment: {
      pattern: /(^|[^\\])#.+/,
      lookbehind: true
    },
    string: {
      pattern: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2|(?:^#?(?:(?:[0-9a-fA-F]{2}){3}|(?:[0-9a-fA-F]){3})$)/m,
      greedy: true
    },
    function: /[a-z_]\w*(?=\()/i,
    property: /\b(?:insensitive|idle|hover|selected_idle|selected_hover|background|position|alt|xpos|ypos|pos|xanchor|yanchor|anchor|xalign|yalign|align|xcenter|ycenter|xofsset|yoffset|ymaximum|maximum|xmaximum|xminimum|yminimum|minimum|xsize|ysizexysize|xfill|yfill|area|antialias|black_color|bold|caret|color|first_indent|font|size|italic|justify|kerning|language|layout|line_leading|line_overlap_split|line_spacing|min_width|newline_indent|outlines|rest_indent|ruby_style|slow_cps|slow_cps_multiplier|strikethrough|text_align|underline|hyperlink_functions|vertical|hinting|foreground|left_margin|xmargin|top_margin|bottom_margin|ymargin|left_padding|right_padding|xpadding|top_padding|bottom_padding|ypadding|size_group|child|hover_sound|activate_sound|mouse|focus_mask|keyboard_focus|bar_vertical|bar_invert|bar_resizing|left_gutter|right_gutter|top_gutter|bottom_gutter|left_bar|right_bar|top_bar|bottom_bar|thumb|thumb_shadow|thumb_offset|unscrollable|spacing|first_spacing|box_reverse|box_wrap|order_reverse|fit_first|ysize|thumbnail_width|thumbnail_height|help|text_ypos|text_xpos|idle_color|hover_color|selected_idle_color|selected_hover_color|insensitive_color|alpha|insensitive_background|hover_background|zorder|value|width|xadjustment|xanchoraround|xaround|xinitial|xoffset|xzoom|yadjustment|yanchoraround|yaround|yinitial|yzoom|zoom|ground|height|text_style|text_y_fudge|selected_insensitive|has_sound|has_music|has_voice|focus|hovered|image_style|length|minwidth|mousewheel|offset|prefix|radius|range|right_margin|rotate|rotate_pad|developer|screen_width|screen_height|window_title|name|version|windows_icon|default_fullscreen|default_text_cps|default_afm_time|main_menu_music|sample_sound|enter_sound|exit_sound|save_directory|enter_transition|exit_transition|intra_transition|main_game_transition|game_main_transition|end_splash_transition|end_game_transition|after_load_transition|window_show_transition|window_hide_transition|adv_nvl_transition|nvl_adv_transition|enter_yesno_transition|exit_yesno_transition|enter_replay_transition|exit_replay_transition|say_attribute_transition|directory_name|executable_name|include_update|window_icon|modal|google_play_key|google_play_salt|drag_name|drag_handle|draggable|dragged|droppable|dropped|narrator_menu|action|default_afm_enable|version_name|version_tuple|inside|fadeout|fadein|layers|layer_clipping|linear|scrollbars|side_xpos|side_ypos|side_spacing|edgescroll|drag_joined|drag_raise|drop_shadow|drop_shadow_color|subpixel|easein|easeout|time|crop|auto|update|get_installed_packages|can_update|UpdateVersion|Update|overlay_functions|translations|window_left_padding|show_side_image|show_two_window)\b/,
    tag: /\b(?:label|image|menu|[hv]box|frame|text|imagemap|imagebutton|bar|vbar|screen|textbutton|buttoscreenn|fixed|grid|input|key|mousearea|side|timer|viewport|window|hotspot|hotbar|self|button|drag|draggroup|tag|mm_menu_frame|nvl|block|parallel)\b|\$/,
    keyword: /\b(?:as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|yield|adjustment|alignaround|allow|angle|around|box_layout|cache|changed|child_size|clicked|clipping|corner1|corner2|default|delay|exclude|scope|slow|slow_abortable|slow_done|sound|style_group|substitute|suffix|transform_anchor|transpose|unhovered|config|theme|mm_root|gm_root|rounded_window|build|disabled_text|disabled|widget_selected|widget_text|widget_hover|widget|updater|behind|call|expression|hide|init|jump|onlayer|python|renpy|scene|set|show|transform|play|queue|stop|pause|define|window|repeat|contains|choice|on|function|event|animation|clockwise|counterclockwise|circles|knot|null|None|random|has|add|use|fade|dissolve|style|store|id|voice|center|left|right|less_rounded|music|movie|clear|persistent|ui)\b/,
    boolean: /\b(?:[Tt]rue|[Ff]alse)\b/,
    number: /(?:\b(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*)|\B\.\d+)(?:e[+-]?\d+)?j?/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at)\b/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/rest.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/rest.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = rest
rest.displayName = 'rest'
rest.aliases = []
function rest(Prism) {
  Prism.languages.rest = {
    table: [
      {
        pattern: /(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1(?:[+|].+)+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,
        lookbehind: true,
        inside: {
          punctuation: /\||(?:\+[=-]+)+\+/
        }
      },
      {
        pattern: /(\s*)(?:=+ +)+=+(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1(?:=+ +)+=+(?=(?:\r?\n|\r){2}|\s*$)/,
        lookbehind: true,
        inside: {
          punctuation: /[=-]+/
        }
      }
    ],
    // Directive-like patterns
    'substitution-def': {
      pattern: /(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
      lookbehind: true,
      inside: {
        substitution: {
          pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
          alias: 'attr-value',
          inside: {
            punctuation: /^\||\|$/
          }
        },
        directive: {
          pattern: /( +)[^:]+::/,
          lookbehind: true,
          alias: 'function',
          inside: {
            punctuation: /::$/
          }
        }
      }
    },
    'link-target': [
      {
        pattern: /(^\s*\.\. )\[[^\]]+\]/m,
        lookbehind: true,
        alias: 'string',
        inside: {
          punctuation: /^\[|\]$/
        }
      },
      {
        pattern: /(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
        lookbehind: true,
        alias: 'string',
        inside: {
          punctuation: /^_|:$/
        }
      }
    ],
    directive: {
      pattern: /(^\s*\.\. )[^:]+::/m,
      lookbehind: true,
      alias: 'function',
      inside: {
        punctuation: /::$/
      }
    },
    comment: {
      // The two alternatives try to prevent highlighting of blank comments
      pattern: /(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
      lookbehind: true
    },
    title: [
      // Overlined and underlined
      {
        pattern: /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
        inside: {
          punctuation: /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
          important: /.+/
        }
      }, // Underlined only
      {
        pattern: /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
        lookbehind: true,
        inside: {
          punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
          important: /.+/
        }
      }
    ],
    hr: {
      pattern: /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
      lookbehind: true,
      alias: 'punctuation'
    },
    field: {
      pattern: /(^\s*):[^:\r\n]+:(?= )/m,
      lookbehind: true,
      alias: 'attr-name'
    },
    'command-line-option': {
      pattern: /(^\s*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
      lookbehind: true,
      alias: 'symbol'
    },
    'literal-block': {
      pattern: /::(?:\r?\n|\r){2}([ \t]+).+(?:(?:\r?\n|\r)\1.+)*/,
      inside: {
        'literal-block-punctuation': {
          pattern: /^::/,
          alias: 'punctuation'
        }
      }
    },
    'quoted-literal-block': {
      pattern: /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
      inside: {
        'literal-block-punctuation': {
          pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
          alias: 'punctuation'
        }
      }
    },
    'list-bullet': {
      pattern: /(^\s*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
      lookbehind: true,
      alias: 'punctuation'
    },
    'doctest-block': {
      pattern: /(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,
      lookbehind: true,
      inside: {
        punctuation: /^>>>/
      }
    },
    inline: [
      {
        pattern: /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
        lookbehind: true,
        inside: {
          bold: {
            pattern: /(^\*\*).+(?=\*\*$)/,
            lookbehind: true
          },
          italic: {
            pattern: /(^\*).+(?=\*$)/,
            lookbehind: true
          },
          'inline-literal': {
            pattern: /(^``).+(?=``$)/,
            lookbehind: true,
            alias: 'symbol'
          },
          role: {
            pattern: /^:[^:]+:|:[^:]+:$/,
            alias: 'function',
            inside: {
              punctuation: /^:|:$/
            }
          },
          'interpreted-text': {
            pattern: /(^`).+(?=`$)/,
            lookbehind: true,
            alias: 'attr-value'
          },
          substitution: {
            pattern: /(^\|).+(?=\|$)/,
            lookbehind: true,
            alias: 'attr-value'
          },
          punctuation: /\*\*?|``?|\|/
        }
      }
    ],
    link: [
      {
        pattern: /\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
        alias: 'string',
        inside: {
          punctuation: /^\[|\]_$/
        }
      },
      {
        pattern: /(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
        alias: 'string',
        inside: {
          punctuation: /^_?`|`$|`?_?_$/
        }
      }
    ],
    // Line block start,
    // quote attribution,
    // explicit markup start,
    // and anonymous hyperlink target shortcut (__)
    punctuation: {
      pattern: /(^\s*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,
      lookbehind: true
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/rip.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/rip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = rip
rip.displayName = 'rip'
rip.aliases = []
function rip(Prism) {
  Prism.languages.rip = {
    comment: /#.*/,
    keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
    builtin: /@|\bSystem\b/,
    boolean: /\b(?:true|false)\b/,
    date: /\b\d{4}-\d{2}-\d{2}\b/,
    time: /\b\d{2}:\d{2}:\d{2}\b/,
    datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
    character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
    regex: {
      pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
      lookbehind: true,
      greedy: true
    },
    symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
    string: {
      pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
    punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
    reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/roboconf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/roboconf.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = roboconf
roboconf.displayName = 'roboconf'
roboconf.aliases = []
function roboconf(Prism) {
  Prism.languages.roboconf = {
    comment: /#.*/,
    keyword: {
      pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
      lookbehind: true
    },
    component: {
      pattern: /[\w-]+(?=[ \t]*\{)/,
      alias: 'variable'
    },
    property: /[\w.-]+(?=[ \t]*:)/,
    value: {
      pattern: /(=[ \t]*)[^,;]+/,
      lookbehind: true,
      alias: 'attr-value'
    },
    optional: {
      pattern: /\(optional\)/,
      alias: 'builtin'
    },
    wildcard: {
      pattern: /(\.)\*/,
      lookbehind: true,
      alias: 'operator'
    },
    punctuation: /[{},.;:=]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/ruby.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/ruby.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ruby
ruby.displayName = 'ruby'
ruby.aliases = ['rb']
function ruby(Prism) {
  /**
   * Original by Samuel Flores
   *
   * Adds the following new token classes:
   *      constant, builtin, variable, symbol, regex
   */
  ;(function(Prism) {
    Prism.languages.ruby = Prism.languages.extend('clike', {
      comment: [
        /#.*/,
        {
          pattern: /^=begin\s[\s\S]*?^=end/m,
          greedy: true
        }
      ],
      keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
    })
    var interpolation = {
      pattern: /#\{[^}]+\}/,
      inside: {
        delimiter: {
          pattern: /^#\{|\}$/,
          alias: 'tag'
        },
        rest: Prism.languages.ruby
      }
    }
    delete Prism.languages.ruby.function
    Prism.languages.insertBefore('ruby', 'keyword', {
      regex: [
        {
          pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
          greedy: true,
          inside: {
            interpolation: interpolation
          }
        },
        {
          pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
          greedy: true,
          inside: {
            interpolation: interpolation
          }
        },
        {
          // Here we need to specifically allow interpolation
          pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
          greedy: true,
          inside: {
            interpolation: interpolation
          }
        },
        {
          pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
          greedy: true,
          inside: {
            interpolation: interpolation
          }
        },
        {
          pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
          greedy: true,
          inside: {
            interpolation: interpolation
          }
        },
        {
          pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
          lookbehind: true,
          greedy: true
        }
      ],
      variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      symbol: {
        pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
        lookbehind: true
      },
      'method-definition': {
        pattern: /(\bdef\s+)[\w.]+/,
        lookbehind: true,
        inside: {
          function: /\w+$/,
          rest: Prism.languages.ruby
        }
      }
    })
    Prism.languages.insertBefore('ruby', 'number', {
      builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
      constant: /\b[A-Z]\w*(?:[?!]|\b)/
    })
    Prism.languages.ruby.string = [
      {
        pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: true,
        inside: {
          interpolation: interpolation
        }
      },
      {
        pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
        greedy: true,
        inside: {
          interpolation: interpolation
        }
      },
      {
        // Here we need to specifically allow interpolation
        pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
        greedy: true,
        inside: {
          interpolation: interpolation
        }
      },
      {
        pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
        greedy: true,
        inside: {
          interpolation: interpolation
        }
      },
      {
        pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
        greedy: true,
        inside: {
          interpolation: interpolation
        }
      },
      {
        pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true,
        inside: {
          interpolation: interpolation
        }
      }
    ]
    Prism.languages.rb = Prism.languages.ruby
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/rust.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/rust.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = rust
rust.displayName = 'rust'
rust.aliases = []
function rust(Prism) {
  /* TODO
Add support for Markdown notation inside doc comments
Add support for nested block comments...
Match closure params even when not followed by dash or brace
Add better support for macro definition
*/
  Prism.languages.rust = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true
      }
    ],
    string: [
      {
        pattern: /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/,
        greedy: true
      },
      {
        pattern: /b?"(?:\\.|[^\\\r\n"])*"/,
        greedy: true
      }
    ],
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,
      alias: 'string'
    },
    'lifetime-annotation': {
      pattern: /'[^\s>']+/,
      alias: 'symbol'
    },
    keyword: /\b(?:abstract|alignof|as|async|await|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
    attribute: {
      pattern: /#!?\[.+?\]/,
      greedy: true,
      alias: 'attr-name'
    },
    function: [
      /\w+(?=\s*\()/, // Macros can use parens or brackets
      /\w+!(?=\s*\(|\[)/
    ],
    'macro-rules': {
      pattern: /\w+!/,
      alias: 'function'
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
    // Closure params should not be confused with bitwise OR |
    'closure-params': {
      pattern: /\|[^|]*\|(?=\s*[{-])/,
      inside: {
        punctuation: /[|:,]/,
        operator: /[&*]/
      }
    },
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/sas.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/sas.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = sas
sas.displayName = 'sas'
sas.aliases = []
function sas(Prism) {
  Prism.languages.sas = {
    datalines: {
      pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
      alias: 'string',
      inside: {
        keyword: {
          pattern: /^(\s*)(?:(?:data)?lines|cards)/i,
          lookbehind: true
        },
        punctuation: /;/
      }
    },
    comment: [
      {
        pattern: /(^\s*|;\s*)\*.*;/m,
        lookbehind: true
      },
      /\/\*[\s\S]+?\*\//
    ],
    datetime: {
      // '1jan2013'd, '9:25:19pm't, '18jan2003:9:27:05am'dt
      pattern: /'[^']+'(?:dt?|t)\b/i,
      alias: 'number'
    },
    string: {
      pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
      greedy: true
    },
    keyword: /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then|libname|set|output|options)\b/i,
    // Decimal (1.2e23), hexadecimal (0c1x)
    number: /\b(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
    operator: /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
    punctuation: /[$%@.(){}\[\];,\\]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/sass.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/sass.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = sass
sass.displayName = 'sass'
sass.aliases = []
function sass(Prism) {
  ;(function(Prism) {
    Prism.languages.sass = Prism.languages.extend('css', {
      // Sass comments don't need to be closed, only indented
      comment: {
        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('sass', 'atrule', {
      // We want to consume the whole line
      'atrule-line': {
        // Includes support for = and + shortcuts
        pattern: /^(?:[ \t]*)[@+=].+/m,
        inside: {
          atrule: /(?:@[\w-]+|[+=])/m
        }
      }
    })
    delete Prism.languages.sass.atrule
    var variable = /\$[-\w]+|#\{\$[-\w]+\}/
    var operator = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
      {
        pattern: /(\s+)-(?=\s)/,
        lookbehind: true
      }
    ]
    Prism.languages.insertBefore('sass', 'property', {
      // We want to consume the whole line
      'variable-line': {
        pattern: /^[ \t]*\$.+/m,
        inside: {
          punctuation: /:/,
          variable: variable,
          operator: operator
        }
      },
      // We want to consume the whole line
      'property-line': {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
        inside: {
          property: [
            /[^:\s]+(?=\s*:)/,
            {
              pattern: /(:)[^:\s]+/,
              lookbehind: true
            }
          ],
          punctuation: /:/,
          variable: variable,
          operator: operator,
          important: Prism.languages.sass.important
        }
      }
    })
    delete Prism.languages.sass.property
    delete Prism.languages.sass.important // Now that whole lines for other patterns are consumed,
    // what's left should be selectors
    Prism.languages.insertBefore('sass', 'punctuation', {
      selector: {
        pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
        lookbehind: true
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/scala.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/scala.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJava = __webpack_require__(/*! ./java.js */ "./node_modules/refractor/lang/java.js")
module.exports = scala
scala.displayName = 'scala'
scala.aliases = []
function scala(Prism) {
  Prism.register(refractorJava)
  Prism.languages.scala = Prism.languages.extend('java', {
    keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
    string: [
      {
        pattern: /"""[\s\S]*?"""/,
        greedy: true
      },
      {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      }
    ],
    builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
    number: /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,
    symbol: /'[^\d\s\\]\w*/
  })
  delete Prism.languages.scala['class-name']
  delete Prism.languages.scala['function']
}


/***/ }),

/***/ "./node_modules/refractor/lang/scheme.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/scheme.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = scheme
scheme.displayName = 'scheme'
scheme.aliases = []
function scheme(Prism) {
  Prism.languages.scheme = {
    comment: /;.*/,
    string: {
      pattern: /"(?:[^"\\]|\\.)*"|'[^()#'\s]+/,
      greedy: true
    },
    character: {
      pattern: /#\\(?:[ux][a-fA-F\d]+|[a-zA-Z]+|\S)/,
      alias: 'string'
    },
    keyword: {
      pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/,
      lookbehind: true
    },
    builtin: {
      pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/,
      lookbehind: true
    },
    number: {
      pattern: /([\s()])[-+]?(?:\d+\/\d+|\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?)\b/,
      lookbehind: true
    },
    boolean: /#[tf]/,
    operator: {
      pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=\s|$)/,
      lookbehind: true
    },
    function: {
      pattern: /(\()[^()'\s]+(?=[()\s)]|$)/,
      lookbehind: true
    },
    punctuation: /[()']/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/scss.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/scss.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = scss
scss.displayName = 'scss'
scss.aliases = []
function scss(Prism) {
  Prism.languages.scss = Prism.languages.extend('css', {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    atrule: {
      pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
      inside: {
        rule: /@[\w-]+/ // See rest below
      }
    },
    // url, compassified
    url: /(?:[-a-z]+-)?url(?=\()/i,
    // CSS selector regex is not appropriate for Sass
    // since there can be lot more things (var, @ directive, nesting..)
    // a selector must start at the end of a property or after a brace (end of other rules or nesting)
    // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
    // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
    // can "pass" as a selector- e.g: proper#{$erty})
    // this one was hard to do, so please be careful if you edit this one :)
    selector: {
      // Initial look-ahead is used to prevent matching of blank selectors
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
      inside: {
        parent: {
          pattern: /&/,
          alias: 'important'
        },
        placeholder: /%[-\w]+/,
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    },
    property: {
      pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
      inside: {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    }
  })
  Prism.languages.insertBefore('scss', 'atrule', {
    keyword: [
      /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
      {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: true
      }
    ]
  })
  Prism.languages.insertBefore('scss', 'important', {
    // var and interpolated vars
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  })
  Prism.languages.insertBefore('scss', 'function', {
    placeholder: {
      pattern: /%[-\w]+/,
      alias: 'selector'
    },
    statement: {
      pattern: /\B!(?:default|optional)\b/i,
      alias: 'keyword'
    },
    boolean: /\b(?:true|false)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: true
    }
  })
  Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss
}


/***/ }),

/***/ "./node_modules/refractor/lang/shell-session.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/shell-session.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = shellSession
shellSession.displayName = 'shellSession'
shellSession.aliases = []
function shellSession(Prism) {
  Prism.languages['shell-session'] = {
    command: {
      pattern: /\$(?:[^\r\n'"<]|(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1|((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*(?:\r\n?|\n)(?:[\s\S])*?(?:\r\n?|\n)\3)+/,
      inside: {
        bash: {
          pattern: /(\$\s*)[\s\S]+/,
          lookbehind: true,
          alias: 'language-bash',
          inside: Prism.languages.bash
        },
        sh: {
          pattern: /^\$/,
          alias: 'important'
        }
      }
    },
    output: {
      pattern: /.(?:.*(?:\r\n?|\n|.$))*/ // output highlighting?
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/smalltalk.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/smalltalk.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = smalltalk
smalltalk.displayName = 'smalltalk'
smalltalk.aliases = []
function smalltalk(Prism) {
  Prism.languages.smalltalk = {
    comment: /"(?:""|[^"])*"/,
    string: /'(?:''|[^'])*'/,
    symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
    'block-arguments': {
      pattern: /(\[\s*):[^\[|]*\|/,
      lookbehind: true,
      inside: {
        variable: /:[\da-z]+/i,
        punctuation: /\|/
      }
    },
    'temporary-variables': {
      pattern: /\|[^|]+\|/,
      inside: {
        variable: /[\da-z]+/i,
        punctuation: /\|/
      }
    },
    keyword: /\b(?:nil|true|false|self|super|new)\b/,
    character: {
      pattern: /\$./,
      alias: 'string'
    },
    number: [
      /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
      /\b\d+(?:\.\d+)?(?:e-?\d+)?/
    ],
    operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
    punctuation: /[.;:?\[\](){}]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/smarty.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/smarty.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = smarty
smarty.displayName = 'smarty'
smarty.aliases = []
function smarty(Prism) {
  Prism.register(refractorMarkupTemplating)
  /* TODO
Add support for variables inside double quoted strings
Add support for {php}
*/
  ;(function(Prism) {
    Prism.languages.smarty = {
      comment: /\{\*[\s\S]*?\*\}/,
      delimiter: {
        pattern: /^\{|\}$/i,
        alias: 'punctuation'
      },
      string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
      variable: [
        /\$(?!\d)\w+/,
        /#(?!\d)\w+#/,
        {
          pattern: /(\.|->)(?!\d)\w+/,
          lookbehind: true
        },
        {
          pattern: /(\[)(?!\d)\w+(?=\])/,
          lookbehind: true
        }
      ],
      function: [
        {
          pattern: /(\|\s*)@?(?!\d)\w+/,
          lookbehind: true
        },
        /^\/?(?!\d)\w+/,
        /(?!\d)\w+(?=\()/
      ],
      'attr-name': {
        // Value is made optional because it may have already been tokenized
        pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
        inside: {
          variable: {
            pattern: /(=\s*)(?!\d)\w+/,
            lookbehind: true
          },
          operator: /=/
        }
      },
      punctuation: [/[\[\]().,:`]|->/],
      operator: [
        /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
        /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
        /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/
      ],
      keyword: /\b(?:false|off|on|no|true|yes)\b/
    } // Tokenize all inline Smarty expressions
    Prism.hooks.add('before-tokenize', function(env) {
      var smartyPattern = /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g
      var smartyLitteralStart = '{literal}'
      var smartyLitteralEnd = '{/literal}'
      var smartyLitteralMode = false
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'smarty',
        smartyPattern,
        function(match) {
          // Smarty tags inside {literal} block are ignored
          if (match === smartyLitteralEnd) {
            smartyLitteralMode = false
          }
          if (!smartyLitteralMode) {
            if (match === smartyLitteralStart) {
              smartyLitteralMode = true
            }
            return true
          }
          return false
        }
      )
    }) // Re-insert the tokens after tokenizing
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'smarty')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/soy.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/soy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = soy
soy.displayName = 'soy'
soy.aliases = []
function soy(Prism) {
  Prism.register(refractorMarkupTemplating)
  ;(function(Prism) {
    var stringPattern = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    var numberPattern = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/
    Prism.languages.soy = {
      comment: [
        /\/\*[\s\S]*?\*\//,
        {
          pattern: /(\s)\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      'command-arg': {
        pattern: /({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
        lookbehind: true,
        alias: 'string',
        inside: {
          punctuation: /\./
        }
      },
      parameter: {
        pattern: /({+\/?\s*@?param\??\s+)\.?[\w.]+/,
        lookbehind: true,
        alias: 'variable'
      },
      keyword: [
        {
          pattern: /({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
          lookbehind: true
        },
        /\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/
      ],
      delimiter: {
        pattern: /^{+\/?|\/?}+$/,
        alias: 'punctuation'
      },
      property: /\w+(?==)/,
      variable: {
        pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,
        inside: {
          string: {
            pattern: stringPattern,
            greedy: true
          },
          number: numberPattern,
          punctuation: /[\[\].?]/
        }
      },
      string: {
        pattern: stringPattern,
        greedy: true
      },
      function: [
        /\w+(?=\()/,
        {
          pattern: /(\|[^\S\r\n]*)\w+/,
          lookbehind: true
        }
      ],
      boolean: /\b(?:true|false)\b/,
      number: numberPattern,
      operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
      punctuation: /[{}()\[\]|.,:]/
    } // Tokenize all inline Soy expressions
    Prism.hooks.add('before-tokenize', function(env) {
      var soyPattern = /{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g
      var soyLitteralStart = '{literal}'
      var soyLitteralEnd = '{/literal}'
      var soyLitteralMode = false
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'soy',
        soyPattern,
        function(match) {
          // Soy tags inside {literal} block are ignored
          if (match === soyLitteralEnd) {
            soyLitteralMode = false
          }
          if (!soyLitteralMode) {
            if (match === soyLitteralStart) {
              soyLitteralMode = true
            }
            return true
          }
          return false
        }
      )
    }) // Re-insert the tokens after tokenizing
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'soy')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/splunk-spl.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/splunk-spl.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = splunkSpl
splunkSpl.displayName = 'splunkSpl'
splunkSpl.aliases = []
function splunkSpl(Prism) {
  Prism.languages['splunk-spl'] = {
    comment: /`comment\("(?:\\.|[^\\"])*"\)`/,
    string: {
      pattern: /"(?:\\.|[^\\"])*"/,
      greedy: true
    },
    // https://docs.splunk.com/Documentation/Splunk/7.3.0/SearchReference/ListOfSearchCommands
    keyword: /\b(?:abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|anomalydetection|append|appendcols|appendcsv|appendlookup|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|fieldformat|fields|fieldsummary|filldown|fillnull|findtypes|folderize|foreach|format|from|gauge|gentimes|geom|geomfilter|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kv|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|makeresults|map|mcollect|metadata|metasearch|meventcollect|mstats|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|sendemail|set|setfields|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|timewrap|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|union|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)\b/i,
    'operator-word': {
      pattern: /\b(?:and|as|by|not|or|xor)\b/i,
      alias: 'operator'
    },
    function: /\w+(?=\s*\()/,
    property: /\w+(?=\s*=(?!=))/,
    date: {
      // MM/DD/YYYY(:HH:MM:SS)?
      pattern: /\b\d{1,2}\/\d{1,2}\/\d{1,4}(?:(?::\d{1,2}){3})?\b/,
      alias: 'number'
    },
    number: /\b\d+(?:\.\d+)?\b/,
    boolean: /\b(?:f|false|t|true)\b/i,
    operator: /[<>=]=?|[-+*/%|]/,
    punctuation: /[()[\],]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/sql.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/sql.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = sql
sql.displayName = 'sql'
sql.aliases = []
function sql(Prism) {
  Prism.languages.sql = {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
      lookbehind: true
    },
    variable: [
      {
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: true
      },
      /@[\w.$]+/
    ],
    string: {
      pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
      greedy: true,
      lookbehind: true
    },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    // Should we highlight user defined functions too?
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/stylus.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/stylus.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = stylus
stylus.displayName = 'stylus'
stylus.aliases = []
function stylus(Prism) {
  ;(function(Prism) {
    var inside = {
      url: /url\((["']?).*?\1\)/i,
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: true
      },
      interpolation: null,
      // See below
      func: null,
      // See below
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
        lookbehind: true
      },
      hexcode: /#[\da-f]{3,6}/i,
      number: /\b\d+(?:\.\d+)?%?/,
      boolean: /\b(?:true|false)\b/,
      operator: [
        // We want non-word chars around "-" because it is
        // accepted in property names.
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
      ],
      punctuation: /[{}()\[\];:,]/
    }
    inside['interpolation'] = {
      pattern: /\{[^\r\n}:]+\}/,
      alias: 'variable',
      inside: {
        delimiter: {
          pattern: /^{|}$/,
          alias: 'punctuation'
        },
        rest: inside
      }
    }
    inside['func'] = {
      pattern: /[\w-]+\([^)]*\).*/,
      inside: {
        function: /^[^(]+/,
        rest: inside
      }
    }
    Prism.languages.stylus = {
      comment: {
        pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      },
      'atrule-declaration': {
        pattern: /(^\s*)@.+/m,
        lookbehind: true,
        inside: {
          atrule: /^@[\w-]+/,
          rest: inside
        }
      },
      'variable-declaration': {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
        lookbehind: true,
        inside: {
          variable: /^\S+/,
          rest: inside
        }
      },
      statement: {
        pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
        lookbehind: true,
        inside: {
          keyword: /^\S+/,
          rest: inside
        }
      },
      // A property/value pair cannot end with a comma or a brace
      // It cannot have indented content unless it ended with a semicolon
      'property-declaration': {
        pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
        lookbehind: true,
        inside: {
          property: {
            pattern: /^[^\s:]+/,
            inside: {
              interpolation: inside.interpolation
            }
          },
          rest: inside
        }
      },
      // A selector can contain parentheses only as part of a pseudo-element
      // It can span multiple lines.
      // It must end with a comma or an accolade or have indented content.
      selector: {
        pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
        lookbehind: true,
        inside: {
          interpolation: inside.interpolation,
          punctuation: /[{},]/
        }
      },
      func: inside.func,
      string: inside.string,
      interpolation: inside.interpolation,
      punctuation: /[{}()\[\];:.]/
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/swift.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/swift.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = swift
swift.displayName = 'swift'
swift.aliases = []
function swift(Prism) {
  // issues: nested multiline comments
  Prism.languages.swift = Prism.languages.extend('clike', {
    string: {
      pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
          inside: {
            delimiter: {
              pattern: /^\\\(|\)$/,
              alias: 'variable' // See rest below
            }
          }
        }
      }
    },
    keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
    builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
  })
  Prism.languages.swift['string'].inside['interpolation'].inside.rest =
    Prism.languages.swift
}


/***/ }),

/***/ "./node_modules/refractor/lang/t4-cs.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/t4-cs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorT4Templating = __webpack_require__(/*! ./t4-templating.js */ "./node_modules/refractor/lang/t4-templating.js")
module.exports = t4Cs
t4Cs.displayName = 't4Cs'
t4Cs.aliases = []
function t4Cs(Prism) {
  Prism.register(refractorT4Templating)
  Prism.languages.t4 = Prism.languages['t4-cs'] = Prism.languages[
    't4-templating'
  ].createT4('csharp')
}


/***/ }),

/***/ "./node_modules/refractor/lang/t4-templating.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/t4-templating.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = t4Templating
t4Templating.displayName = 't4Templating'
t4Templating.aliases = []
function t4Templating(Prism) {
  ;(function(Prism) {
    function createBlock(prefix, inside, contentAlias) {
      return {
        pattern: RegExp('<#' + prefix + '[\\s\\S]*?#>'),
        alias: 'block',
        inside: {
          delimiter: {
            pattern: RegExp('^<#' + prefix + '|#>$'),
            alias: 'important'
          },
          content: {
            pattern: /[\s\S]+/,
            inside: inside,
            alias: contentAlias
          }
        }
      }
    }
    function createT4(insideLang) {
      var grammar = Prism.languages[insideLang]
      var className = 'language-' + insideLang
      return {
        block: {
          pattern: /<#[\s\S]+?#>/,
          inside: {
            directive: createBlock('@', {
              'attr-value': {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                inside: {
                  punctuation: /^=|^["']|["']$/
                }
              },
              keyword: /\w+(?=\s)/,
              'attr-name': /\w+/
            }),
            expression: createBlock('=', grammar, className),
            'class-feature': createBlock('\\+', grammar, className),
            standard: createBlock('', grammar, className)
          }
        }
      }
    }
    Prism.languages['t4-templating'] = Object.defineProperty({}, 'createT4', {
      value: createT4
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/t4-vb.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/t4-vb.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorT4Templating = __webpack_require__(/*! ./t4-templating.js */ "./node_modules/refractor/lang/t4-templating.js")
module.exports = t4Vb
t4Vb.displayName = 't4Vb'
t4Vb.aliases = []
function t4Vb(Prism) {
  Prism.register(refractorT4Templating)
  Prism.languages['t4-vb'] = Prism.languages['t4-templating'].createT4(
    'visual-basic'
  )
}


/***/ }),

/***/ "./node_modules/refractor/lang/tap.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = tap
tap.displayName = 'tap'
tap.aliases = []
function tap(Prism) {
  Prism.languages.tap = {
    fail: /not ok[^#{\n\r]*/,
    pass: /ok[^#{\n\r]*/,
    pragma: /pragma [+-][a-z]+/,
    bailout: /bail out!.*/i,
    version: /TAP version \d+/i,
    plan: /\d+\.\.\d+(?: +#.*)?/,
    subtest: {
      pattern: /# Subtest(?:: .*)?/,
      greedy: true
    },
    punctuation: /[{}]/,
    directive: /#.*/,
    yamlish: {
      pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
      lookbehind: true,
      inside: Prism.languages.yaml,
      alias: 'language-yaml'
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/tcl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tcl.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = tcl
tcl.displayName = 'tcl'
tcl.aliases = []
function tcl(Prism) {
  Prism.languages.tcl = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    string: {
      pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
      greedy: true
    },
    variable: [
      {
        pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,
        lookbehind: true
      },
      {
        pattern: /(\$){[^}]+}/,
        lookbehind: true
      },
      {
        pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
        lookbehind: true
      }
    ],
    function: {
      pattern: /(^\s*proc[ \t]+)[^\s]+/m,
      lookbehind: true
    },
    builtin: [
      {
        pattern: /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
        lookbehind: true
      },
      /\b(?:elseif|else)\b/
    ],
    scope: {
      pattern: /(^\s*)(?:global|upvar|variable)\b/m,
      lookbehind: true,
      alias: 'constant'
    },
    keyword: {
      pattern: /(^\s*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
      lookbehind: true
    },
    operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
    punctuation: /[{}()\[\]]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/textile.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/textile.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = textile
textile.displayName = 'textile'
textile.aliases = []
function textile(Prism) {
  ;(function(Prism) {
    // We don't allow for pipes inside parentheses
    // to not break table pattern |(. foo |). bar |
    var modifierRegex = /(?:\([^|)]+\)|\[[^\]]+\]|\{[^}]+\})+/.source
    var modifierTokens = {
      css: {
        pattern: /\{[^}]+\}/,
        inside: {
          rest: Prism.languages.css
        }
      },
      'class-id': {
        pattern: /(\()[^)]+(?=\))/,
        lookbehind: true,
        alias: 'attr-value'
      },
      lang: {
        pattern: /(\[)[^\]]+(?=\])/,
        lookbehind: true,
        alias: 'attr-value'
      },
      // Anything else is punctuation (the first pattern is for row/col spans inside tables)
      punctuation: /[\\\/]\d+|\S/
    }
    var textile = (Prism.languages.textile = Prism.languages.extend('markup', {
      phrase: {
        pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
        lookbehind: true,
        inside: {
          // h1. Header 1
          'block-tag': {
            pattern: RegExp('^[a-z]\\w*(?:' + modifierRegex + '|[<>=()])*\\.'),
            inside: {
              modifier: {
                pattern: RegExp(
                  '(^[a-z]\\w*)(?:' + modifierRegex + '|[<>=()])+(?=\\.)'
                ),
                lookbehind: true,
                inside: modifierTokens
              },
              tag: /^[a-z]\w*/,
              punctuation: /\.$/
            }
          },
          // # List item
          // * List item
          list: {
            pattern: RegExp('^[*#]+(?:' + modifierRegex + ')?\\s+.+', 'm'),
            inside: {
              modifier: {
                pattern: RegExp('(^[*#]+)' + modifierRegex),
                lookbehind: true,
                inside: modifierTokens
              },
              punctuation: /^[*#]+/
            }
          },
          // | cell | cell | cell |
          table: {
            // Modifiers can be applied to the row: {color:red}.|1|2|3|
            // or the cell: |{color:red}.1|2|3|
            pattern: RegExp(
              '^(?:(?:' +
                modifierRegex +
                '|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:' +
                modifierRegex +
                '|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|',
              'm'
            ),
            inside: {
              modifier: {
                // Modifiers for rows after the first one are
                // preceded by a pipe and a line feed
                pattern: RegExp(
                  '(^|\\|(?:\\r?\\n|\\r)?)(?:' +
                    modifierRegex +
                    '|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)'
                ),
                lookbehind: true,
                inside: modifierTokens
              },
              punctuation: /\||^\./
            }
          },
          inline: {
            pattern: RegExp(
              '(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:' + modifierRegex + ')?.+?\\1'
            ),
            inside: {
              // Note: superscripts and subscripts are not handled specifically
              // *bold*, **bold**
              bold: {
                pattern: RegExp(
                  '(^(\\*\\*?)(?:' + modifierRegex + ')?).+?(?=\\2)'
                ),
                lookbehind: true
              },
              // _italic_, __italic__
              italic: {
                pattern: RegExp('(^(__?)(?:' + modifierRegex + ')?).+?(?=\\2)'),
                lookbehind: true
              },
              // ??cite??
              cite: {
                pattern: RegExp(
                  '(^\\?\\?(?:' + modifierRegex + ')?).+?(?=\\?\\?)'
                ),
                lookbehind: true,
                alias: 'string'
              },
              // @code@
              code: {
                pattern: RegExp('(^@(?:' + modifierRegex + ')?).+?(?=@)'),
                lookbehind: true,
                alias: 'keyword'
              },
              // +inserted+
              inserted: {
                pattern: RegExp('(^\\+(?:' + modifierRegex + ')?).+?(?=\\+)'),
                lookbehind: true
              },
              // -deleted-
              deleted: {
                pattern: RegExp('(^-(?:' + modifierRegex + ')?).+?(?=-)'),
                lookbehind: true
              },
              // %span%
              span: {
                pattern: RegExp('(^%(?:' + modifierRegex + ')?).+?(?=%)'),
                lookbehind: true
              },
              modifier: {
                pattern: RegExp(
                  '(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])' + modifierRegex
                ),
                lookbehind: true,
                inside: modifierTokens
              },
              punctuation: /[*_%?@+\-^~]+/
            }
          },
          // [alias]http://example.com
          'link-ref': {
            pattern: /^\[[^\]]+\]\S+$/m,
            inside: {
              string: {
                pattern: /(\[)[^\]]+(?=\])/,
                lookbehind: true
              },
              url: {
                pattern: /(\])\S+$/,
                lookbehind: true
              },
              punctuation: /[\[\]]/
            }
          },
          // "text":http://example.com
          // "text":link-ref
          link: {
            pattern: RegExp(
              '"(?:' + modifierRegex + ')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'
            ),
            inside: {
              text: {
                pattern: RegExp('(^"(?:' + modifierRegex + ')?)[^"]+(?=")'),
                lookbehind: true
              },
              modifier: {
                pattern: RegExp('(^")' + modifierRegex),
                lookbehind: true,
                inside: modifierTokens
              },
              url: {
                pattern: /(:).+/,
                lookbehind: true
              },
              punctuation: /[":]/
            }
          },
          // !image.jpg!
          // !image.jpg(Title)!:http://example.com
          image: {
            pattern: RegExp(
              '!(?:' +
                modifierRegex +
                '|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?'
            ),
            inside: {
              source: {
                pattern: RegExp(
                  '(^!(?:' +
                    modifierRegex +
                    '|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)'
                ),
                lookbehind: true,
                alias: 'url'
              },
              modifier: {
                pattern: RegExp('(^!)(?:' + modifierRegex + '|[<>=()])+'),
                lookbehind: true,
                inside: modifierTokens
              },
              url: {
                pattern: /(:).+/,
                lookbehind: true
              },
              punctuation: /[!:]/
            }
          },
          // Footnote[1]
          footnote: {
            pattern: /\b\[\d+\]/,
            alias: 'comment',
            inside: {
              punctuation: /\[|\]/
            }
          },
          // CSS(Cascading Style Sheet)
          acronym: {
            pattern: /\b[A-Z\d]+\([^)]+\)/,
            inside: {
              comment: {
                pattern: /(\()[^)]+(?=\))/,
                lookbehind: true
              },
              punctuation: /[()]/
            }
          },
          // Prism(C)
          mark: {
            pattern: /\b\((?:TM|R|C)\)/,
            alias: 'comment',
            inside: {
              punctuation: /[()]/
            }
          }
        }
      }
    }))
    var phraseInside = textile['phrase'].inside
    var nestedPatterns = {
      inline: phraseInside['inline'],
      link: phraseInside['link'],
      image: phraseInside['image'],
      footnote: phraseInside['footnote'],
      acronym: phraseInside['acronym'],
      mark: phraseInside['mark']
    } // Only allow alpha-numeric HTML tags, not XML tags
    textile.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i // Allow some nesting
    var phraseInlineInside = phraseInside['inline'].inside
    phraseInlineInside['bold'].inside = nestedPatterns
    phraseInlineInside['italic'].inside = nestedPatterns
    phraseInlineInside['inserted'].inside = nestedPatterns
    phraseInlineInside['deleted'].inside = nestedPatterns
    phraseInlineInside['span'].inside = nestedPatterns // Allow some styles inside table cells
    var phraseTableInside = phraseInside['table'].inside
    phraseTableInside['inline'] = nestedPatterns['inline']
    phraseTableInside['link'] = nestedPatterns['link']
    phraseTableInside['image'] = nestedPatterns['image']
    phraseTableInside['footnote'] = nestedPatterns['footnote']
    phraseTableInside['acronym'] = nestedPatterns['acronym']
    phraseTableInside['mark'] = nestedPatterns['mark']
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/toml.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/toml.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toml
toml.displayName = 'toml'
toml.aliases = []
function toml(Prism) {
  ;(function(Prism) {
    // pattern: /(?:[\w-]+|'[^'\n\r]*'|"(?:\.|[^\\"\r\n])*")/
    var key = '(?:[\\w-]+|\'[^\'\n\r]*\'|"(?:\\.|[^\\\\"\r\n])*")'
    Prism.languages.toml = {
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      table: {
        pattern: RegExp(
          '(^\\s*\\[\\s*(?:\\[\\s*)?)' +
            key +
            '(?:\\s*\\.\\s*' +
            key +
            ')*(?=\\s*\\])',
          'm'
        ),
        lookbehind: true,
        greedy: true,
        alias: 'class-name'
      },
      key: {
        pattern: RegExp(
          '(^\\s*|[{,]\\s*)' + key + '(?:\\s*\\.\\s*' + key + ')*(?=\\s*=)',
          'm'
        ),
        lookbehind: true,
        greedy: true,
        alias: 'property'
      },
      string: {
        pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
        greedy: true
      },
      date: [
        {
          // Offset Date-Time, Local Date-Time, Local Date
          pattern: /\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?/i,
          alias: 'number'
        },
        {
          // Local Time
          pattern: /\d{2}:\d{2}:\d{2}(?:\.\d+)?/i,
          alias: 'number'
        }
      ],
      number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?(?:inf|nan)\b/,
      boolean: /\b(?:true|false)\b/,
      punctuation: /[.,=[\]{}]/
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/tsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tsx.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorJsx = __webpack_require__(/*! ./jsx.js */ "./node_modules/refractor/lang/jsx.js")
var refractorTypescript = __webpack_require__(/*! ./typescript.js */ "./node_modules/refractor/lang/typescript.js")
module.exports = tsx
tsx.displayName = 'tsx'
tsx.aliases = []
function tsx(Prism) {
  Prism.register(refractorJsx)
  Prism.register(refractorTypescript)
  var typescript = Prism.util.clone(Prism.languages.typescript)
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript)
}


/***/ }),

/***/ "./node_modules/refractor/lang/tt2.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tt2.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js")
module.exports = tt2
tt2.displayName = 'tt2'
tt2.aliases = []
function tt2(Prism) {
  Prism.register(refractorMarkupTemplating)
  ;(function(Prism) {
    Prism.languages.tt2 = Prism.languages.extend('clike', {
      comment: /#.*|\[%#[\s\S]*?%\]/,
      keyword: /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,
      punctuation: /[[\]{},()]/
    })
    Prism.languages.insertBefore('tt2', 'number', {
      operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,
      variable: {
        pattern: /[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i
      }
    })
    Prism.languages.insertBefore('tt2', 'keyword', {
      delimiter: {
        pattern: /^(?:\[%|%%)-?|-?%]$/,
        alias: 'punctuation'
      }
    })
    Prism.languages.insertBefore('tt2', 'string', {
      'single-quoted-string': {
        pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
        greedy: true,
        alias: 'string'
      },
      'double-quoted-string': {
        pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
        greedy: true,
        alias: 'string',
        inside: {
          variable: {
            pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
          }
        }
      }
    }) // The different types of TT2 strings "replace" the C-like standard string
    delete Prism.languages.tt2.string
    Prism.hooks.add('before-tokenize', function(env) {
      var tt2Pattern = /\[%[\s\S]+?%\]/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'tt2',
        tt2Pattern
      )
    })
    Prism.hooks.add('after-tokenize', function(env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'tt2')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/twig.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/twig.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = twig
twig.displayName = 'twig'
twig.aliases = []
function twig(Prism) {
  Prism.languages.twig = {
    comment: /\{#[\s\S]*?#\}/,
    tag: {
      pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
      inside: {
        ld: {
          pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
          inside: {
            punctuation: /^(?:\{\{|\{%)-?/,
            keyword: /\w+/
          }
        },
        rd: {
          pattern: /-?(?:%\}|\}\})$/,
          inside: {
            punctuation: /.+/
          }
        },
        string: {
          pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          inside: {
            punctuation: /^['"]|['"]$/
          }
        },
        keyword: /\b(?:even|if|odd)\b/,
        boolean: /\b(?:true|false|null)\b/,
        number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
        operator: [
          {
            pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
            lookbehind: true
          },
          /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
        ],
        property: /\b[a-zA-Z_]\w*\b/,
        punctuation: /[()\[\]{}:.,]/
      }
    },
    // The rest can be parsed as HTML
    other: {
      // We want non-blank matches
      pattern: /\S(?:[\s\S]*\S)?/,
      inside: Prism.languages.markup
    }
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = typescript
typescript.displayName = 'typescript'
typescript.aliases = ['ts']
function typescript(Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
  })
  Prism.languages.ts = Prism.languages.typescript
}


/***/ }),

/***/ "./node_modules/refractor/lang/vala.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/vala.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = vala
vala.displayName = 'vala'
vala.aliases = []
function vala(Prism) {
  Prism.languages.vala = Prism.languages.extend('clike', {
    // Classes copied from prism-csharp
    'class-name': [
      {
        // (Foo bar, Bar baz)
        pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w+)/,
        inside: {
          punctuation: /\./
        }
      },
      {
        // [Foo]
        pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      {
        // class Foo : Bar
        pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      {
        // class Foo
        pattern: /((?:\b(?:class|interface|new|struct|enum)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    ],
    constant: /\b[A-Z0-9_]+\b/,
    function: /\w+(?=\s*\()/,
    keyword: /\b(?:bool|char|double|float|null|size_t|ssize_t|string|unichar|void|int|int8|int16|int32|int64|long|short|uchar|uint|uint8|uint16|uint32|uint64|ulong|ushort|class|delegate|enum|errordomain|interface|namespace|struct|break|continue|do|for|foreach|return|while|else|if|switch|assert|case|default|abstract|const|dynamic|ensures|extern|inline|internal|override|private|protected|public|requires|signal|static|virtual|volatile|weak|async|owned|unowned|try|catch|finally|throw|as|base|construct|delete|get|in|is|lock|new|out|params|ref|sizeof|set|this|throws|typeof|using|value|var|yield)\b/i,
    number: /(?:\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,
    operator: /\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,
    punctuation: /[{}[\];(),.:]/
  })
  Prism.languages.insertBefore('vala', 'string', {
    'raw-string': {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string'
    },
    'template-string': {
      pattern: /@"[\s\S]*?"/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /\$(?:\([^)]*\)|[a-zA-Z]\w*)/,
          inside: {
            delimiter: {
              pattern: /^\$\(?|\)$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.vala
          }
        },
        string: /[\s\S]+/
      }
    }
  })
  Prism.languages.insertBefore('vala', 'keyword', {
    regex: {
      pattern: /\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*($|[\r\n,.;})\]]))/,
      greedy: true
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/vbnet.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/vbnet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var refractorBasic = __webpack_require__(/*! ./basic.js */ "./node_modules/refractor/lang/basic.js")
module.exports = vbnet
vbnet.displayName = 'vbnet'
vbnet.aliases = []
function vbnet(Prism) {
  Prism.register(refractorBasic)
  Prism.languages.vbnet = Prism.languages.extend('basic', {
    keyword: /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDEC|CDBL|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEFAULT|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LINE INPUT|LET|LIB|LIKE|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPERATOR|OPEN|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHORT|SINGLE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SYNCLOCK|SWAP|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
    comment: [
      {
        pattern: /(?:!|REM\b).+/i,
        inside: {
          keyword: /^REM/i
        }
      },
      {
        pattern: /(^|[^\\:])'.*/,
        lookbehind: true
      }
    ]
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/velocity.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/velocity.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = velocity
velocity.displayName = 'velocity'
velocity.aliases = []
function velocity(Prism) {
  ;(function(Prism) {
    Prism.languages.velocity = Prism.languages.extend('markup', {})
    var velocity = {
      variable: {
        pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,
        lookbehind: true,
        inside: {} // See below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      number: /\b\d+\b/,
      boolean: /\b(?:true|false)\b/,
      operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
      punctuation: /[(){}[\]:,.]/
    }
    velocity.variable.inside = {
      string: velocity['string'],
      function: {
        pattern: /([^\w-])[a-z][\w-]*(?=\()/,
        lookbehind: true
      },
      number: velocity['number'],
      boolean: velocity['boolean'],
      punctuation: velocity['punctuation']
    }
    Prism.languages.insertBefore('velocity', 'comment', {
      unparsed: {
        pattern: /(^|[^\\])#\[\[[\s\S]*?]]#/,
        lookbehind: true,
        greedy: true,
        inside: {
          punctuation: /^#\[\[|]]#$/
        }
      },
      'velocity-comment': [
        {
          pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
          lookbehind: true,
          greedy: true,
          alias: 'comment'
        },
        {
          pattern: /(^|[^\\])##.*/,
          lookbehind: true,
          greedy: true,
          alias: 'comment'
        }
      ],
      directive: {
        pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
        lookbehind: true,
        inside: {
          keyword: {
            pattern: /^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,
            inside: {
              punctuation: /[{}]/
            }
          },
          rest: velocity
        }
      },
      variable: velocity['variable']
    })
    Prism.languages.velocity['tag'].inside['attr-value'].inside.rest =
      Prism.languages.velocity
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/verilog.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/verilog.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = verilog
verilog.displayName = 'verilog'
verilog.aliases = []
function verilog(Prism) {
  Prism.languages.verilog = {
    comment: /\/\/.*|\/\*[\s\S]*?\*\//,
    string: {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
      greedy: true
    },
    // support for any kernel function (ex: $display())
    property: /\B\$\w+\b/,
    // support for user defined constants (ex: `define)
    constant: /\B`\w+\b/,
    function: /\w+(?=\()/,
    // support for verilog and system verilog keywords
    keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
    // bold highlighting for all verilog and system verilog logic blocks
    important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
    // support for time ticks, vectors, and real numbers
    number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
    operator: /[-+{}^~%*\/?=!<>&|]+/,
    punctuation: /[[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/vhdl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/vhdl.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = vhdl
vhdl.displayName = 'vhdl'
vhdl.aliases = []
function vhdl(Prism) {
  Prism.languages.vhdl = {
    comment: /--.+/,
    // support for all logic vectors
    'vhdl-vectors': {
      pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
      alias: 'number'
    },
    // support for operator overloading included
    'quoted-function': {
      pattern: /"\S+?"(?=\()/,
      alias: 'function'
    },
    string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
    constant: /\b(?:use|library)\b/i,
    // support for predefined attributes included
    keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
    boolean: /\b(?:true|false)\b/i,
    function: /\w+(?=\()/,
    // decimal, based, physical, and exponential numbers supported
    number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
    operator: /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/vim.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/vim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = vim
vim.displayName = 'vim'
vim.aliases = []
function vim(Prism) {
  Prism.languages.vim = {
    string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
    comment: /".*/,
    function: /\w+(?=\()/,
    keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
    builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
    operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
    punctuation: /[{}[\](),;:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/visual-basic.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/visual-basic.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visualBasic
visualBasic.displayName = 'visualBasic'
visualBasic.aliases = []
function visualBasic(Prism) {
  Prism.languages['visual-basic'] = {
    comment: {
      pattern: /(?:['‘’]|REM\b).*/i,
      inside: {
        keyword: /^REM/i
      }
    },
    directive: {
      pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
      alias: 'comment',
      greedy: true
    },
    string: {
      pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
      greedy: true
    },
    date: {
      pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))[^\S\r\n]*#/i,
      alias: 'builtin'
    },
    number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
    boolean: /\b(?:True|False|Nothing)\b/i,
    keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
    operator: [
      /[+\-*/\\^<=>&#@$%!]/,
      {
        pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/,
        lookbehind: true
      }
    ],
    punctuation: /[{}().,:?]/
  }
  Prism.languages.vb = Prism.languages['visual-basic']
}


/***/ }),

/***/ "./node_modules/refractor/lang/wasm.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/wasm.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wasm
wasm.displayName = 'wasm'
wasm.aliases = []
function wasm(Prism) {
  Prism.languages.wasm = {
    comment: [
      /\(;[\s\S]*?;\)/,
      {
        pattern: /;;.*/,
        greedy: true
      }
    ],
    string: {
      pattern: /"(?:\\[\s\S]|[^"\\])*"/,
      greedy: true
    },
    keyword: [
      {
        pattern: /\b(?:align|offset)=/,
        inside: {
          operator: /=/
        }
      },
      {
        pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
        inside: {
          punctuation: /\./
        }
      },
      /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
    ],
    variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
    number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
    punctuation: /[()]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/wiki.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/wiki.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wiki
wiki.displayName = 'wiki'
wiki.aliases = []
function wiki(Prism) {
  Prism.languages.wiki = Prism.languages.extend('markup', {
    'block-comment': {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: true,
      alias: 'comment'
    },
    heading: {
      pattern: /^(=+).+?\1/m,
      inside: {
        punctuation: /^=+|=+$/,
        important: /.+/
      }
    },
    emphasis: {
      // TODO Multi-line
      pattern: /('{2,5}).+?\1/,
      inside: {
        'bold italic': {
          pattern: /(''''').+?(?=\1)/,
          lookbehind: true
        },
        bold: {
          pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
          lookbehind: true
        },
        italic: {
          pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
          lookbehind: true
        },
        punctuation: /^''+|''+$/
      }
    },
    hr: {
      pattern: /^-{4,}/m,
      alias: 'punctuation'
    },
    url: [
      /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i,
      /\[\[.+?\]\]|\[.+?\]/
    ],
    variable: [
      /__[A-Z]+__/, // FIXME Nested structures should be handled
      // {{formatnum:{{#expr:{{{3}}}}}}}
      /\{{3}.+?\}{3}/,
      /\{\{.+?\}\}/
    ],
    symbol: [/^#redirect/im, /~{3,5}/],
    // Handle table attrs:
    // {|
    // ! style="text-align:left;"| Item
    // |}
    'table-tag': {
      pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
      lookbehind: true,
      inside: {
        'table-bar': {
          pattern: /\|$/,
          alias: 'punctuation'
        },
        rest: Prism.languages.markup['tag'].inside
      }
    },
    punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
  })
  Prism.languages.insertBefore('wiki', 'tag', {
    // Prevent highlighting inside <nowiki>, <source> and <pre> tags
    nowiki: {
      pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
      inside: {
        tag: {
          pattern: /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
          inside: Prism.languages.markup['tag'].inside
        }
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/xeora.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/xeora.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = xeora
xeora.displayName = 'xeora'
xeora.aliases = ['xeoracube']
function xeora(Prism) {
  ;(function(Prism) {
    Prism.languages.xeora = Prism.languages.extend('markup', {
      constant: {
        pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
        inside: {
          punctuation: {
            pattern: /\$/
          }
        }
      },
      variable: {
        pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /[$.]/
          },
          operator: {
            pattern: /#+|[-+*~=^@]/
          }
        }
      },
      'function-inline': {
        pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?\$/,
        inside: {
          variable: {
            pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
            inside: {
              punctuation: {
                pattern: /[,.|]/
              },
              operator: {
                pattern: /#+|[-+*~=^@]/
              }
            }
          },
          punctuation: {
            pattern: /\$\w:|[$:?.,|]/
          }
        },
        alias: 'function'
      },
      'function-block': {
        pattern: /\$XF:{[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?}:XF\$/,
        inside: {
          punctuation: {
            pattern: /[$:{}?.,|]/
          }
        },
        alias: 'function'
      },
      'directive-inline': {
        pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\/\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: {
              tag: {
                pattern: /#\d/
              }
            }
          }
        },
        alias: 'function'
      },
      'directive-block-open': {
        pattern: /\$\w+:{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\w.]+:{(![A-Z]+)?/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: {
              tag: {
                pattern: /#\d/
              }
            }
          },
          attribute: {
            pattern: /![A-Z]+$/,
            inside: {
              punctuation: {
                pattern: /!/
              }
            },
            alias: 'keyword'
          }
        },
        alias: 'function'
      },
      'directive-block-separator': {
        pattern: /}:[-\w.]+:{/,
        inside: {
          punctuation: {
            pattern: /[:{}]/
          }
        },
        alias: 'function'
      },
      'directive-block-close': {
        pattern: /}:[-\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /[:{}$]/
          }
        },
        alias: 'function'
      }
    })
    Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        variable: Prism.languages.xeora['function-inline'].inside['variable']
      },
      Prism.languages.xeora['function-block']
    )
    Prism.languages.xeoracube = Prism.languages.xeora
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/xojo.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/xojo.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = xojo
xojo.displayName = 'xojo'
xojo.aliases = []
function xojo(Prism) {
  Prism.languages.xojo = {
    comment: {
      pattern: /(?:'|\/\/|Rem\b).+/i,
      inside: {
        keyword: /^Rem/i
      }
    },
    string: {
      pattern: /"(?:""|[^"])*"/,
      greedy: true
    },
    number: [/(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i, /&[bchou][a-z\d]+/i],
    symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\b/i,
    keyword: /\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\b/i,
    operator: /<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,
    punctuation: /[.,;:()]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/xquery.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/xquery.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = xquery
xquery.displayName = 'xquery'
xquery.aliases = []
function xquery(Prism) {
  ;(function(Prism) {
    Prism.languages.xquery = Prism.languages.extend('markup', {
      'xquery-comment': {
        pattern: /\(:[\s\S]*?:\)/,
        greedy: true,
        alias: 'comment'
      },
      string: {
        pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
        greedy: true
      },
      extension: {
        pattern: /\(#.+?#\)/,
        alias: 'symbol'
      },
      variable: /\$[\w-:]+/,
      axis: {
        pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
        lookbehind: true,
        alias: 'operator'
      },
      'keyword-operator': {
        pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
        lookbehind: true,
        alias: 'operator'
      },
      keyword: {
        pattern: /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
        lookbehind: true
      },
      function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
      'xquery-element': {
        pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
        lookbehind: true,
        alias: 'tag'
      },
      'xquery-attribute': {
        pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
        lookbehind: true,
        alias: 'attr-name'
      },
      builtin: {
        pattern: /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
        lookbehind: true
      },
      number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
      operator: [
        /[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,
        {
          pattern: /(\s)-(?=\s)/,
          lookbehind: true
        }
      ],
      punctuation: /[[\](){},;:/]/
    })
    Prism.languages.xquery.tag.pattern = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i
    Prism.languages.xquery['tag'].inside[
      'attr-value'
    ].pattern = /=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i
    Prism.languages.xquery['tag'].inside['attr-value'].inside[
      'punctuation'
    ] = /^="|"$/
    Prism.languages.xquery['tag'].inside['attr-value'].inside['expression'] = {
      // Allow for two levels of nesting
      pattern: /{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/,
      inside: {
        rest: Prism.languages.xquery
      },
      alias: 'language-xquery'
    } // The following will handle plain text inside tags
    var stringifyToken = function(token) {
      if (typeof token === 'string') {
        return token
      }
      if (typeof token.content === 'string') {
        return token.content
      }
      return token.content.map(stringifyToken).join('')
    }
    var walkTokens = function(tokens) {
      var openedTags = []
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
        var notTagNorBrace = false
        if (typeof token !== 'string') {
          if (
            token.type === 'tag' &&
            token.content[0] &&
            token.content[0].type === 'tag'
          ) {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (
                openedTags.length > 0 &&
                openedTags[openedTags.length - 1].tagName ===
                  stringifyToken(token.content[0].content[1])
              ) {
                // Pop matching opening tag
                openedTags.pop()
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') {
                // Autoclosed tag, ignore
              } else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                })
              }
            }
          } else if (
            openedTags.length > 0 &&
            token.type === 'punctuation' &&
            token.content === '{' && // Ignore `{{`
            (!tokens[i + 1] ||
              tokens[i + 1].type !== 'punctuation' ||
              tokens[i + 1].content !== '{') &&
            (!tokens[i - 1] ||
              tokens[i - 1].type !== 'plain-text' ||
              tokens[i - 1].content !== '{')
          ) {
            // Here we might have entered an XQuery expression inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left an XQuery expression inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else if (token.type !== 'comment') {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside an XQuery expression.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token) // And merge text with adjacent text
            if (
              i < tokens.length - 1 &&
              (typeof tokens[i + 1] === 'string' ||
                tokens[i + 1].type === 'plain-text')
            ) {
              plainText += stringifyToken(tokens[i + 1])
              tokens.splice(i + 1, 1)
            }
            if (
              i > 0 &&
              (typeof tokens[i - 1] === 'string' ||
                tokens[i - 1].type === 'plain-text')
            ) {
              plainText = stringifyToken(tokens[i - 1]) + plainText
              tokens.splice(i - 1, 1)
              i--
            }
            if (/^\s+$/.test(plainText)) {
              tokens[i] = plainText
            } else {
              tokens[i] = new Prism.Token(
                'plain-text',
                plainText,
                null,
                plainText
              )
            }
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'xquery') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/yaml.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/yaml.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = yaml
yaml.displayName = 'yaml'
yaml.aliases = ['yml']
function yaml(Prism) {
  Prism.languages.yaml = {
    scalar: {
      pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
      lookbehind: true,
      alias: 'string'
    },
    comment: /#.*/,
    key: {
      pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
      lookbehind: true,
      alias: 'atrule'
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    datetime: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
      lookbehind: true,
      alias: 'number'
    },
    boolean: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
      lookbehind: true,
      alias: 'important'
    },
    null: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
      lookbehind: true,
      alias: 'important'
    },
    string: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
      lookbehind: true,
      greedy: true
    },
    number: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
      lookbehind: true
    },
    tag: /![^\s]+/,
    important: /[&*][\w]+/,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }
  Prism.languages.yml = Prism.languages.yaml
}


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = String(value || empty).trim()
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return values.join(space).trim()
}


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _code_snippets_post_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../code-snippets/post-one */ "./code-snippets/post-one/index.js");
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BlogMeta */ "./components/BlogMeta.js");


var _jsxFileName = "/home/wajari/dev/blog-next/pages/blog/post-one-code-block-demo.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */



var meta = {
  title: "This is my first post",
  tags: ["serverless", "node.js", "python"],
  layout: "post",
  publishDate: "2017-10-02",
  modifiedDate: false,
  seoDescription: "This post demonstrates syntax-hightlighted code in your post.",
  exclude: false
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 10
      }
    }));
  };
};

var layoutProps = {
  meta: meta
};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "No need for a title in body. You add the title to the metadata, and it appears here. Same for tags and publication date. This starter blog is set up for code highlighting like so:"));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=_app.js.4ba2e135cf5089090488.hot-update.js.map