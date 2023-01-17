"use strict";
(self["webpackChunkreact_app_simple_calculator"] = self["webpackChunkreact_app_simple_calculator"] || []).push([["src_components_todolist_ToDoList_js"],{

/***/ "./src/components/todolist/AddItem.js":
/*!********************************************!*\
  !*** ./src/components/todolist/AddItem.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

// AddItem component
const AddItem = ({
  addItemValue,
  handleUpdateInput,
  handleEnterEvent
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "add-items",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      type: "text",
      className: "md-input-box",
      placeholder: "Enter an item and press ENTER",
      onKeyPress: handleEnterEvent,
      onChange: handleUpdateInput,
      value: addItemValue
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddItem);

/***/ }),

/***/ "./src/components/todolist/ToDoList.js":
/*!*********************************************!*\
  !*** ./src/components/todolist/ToDoList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _ItemList_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemList.json */ "./src/components/todolist/ItemList.json");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ "./src/components/todolist/TodoItem.js");
/* harmony import */ var _AddItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddItem */ "./src/components/todolist/AddItem.js");
/* harmony import */ var _css_todolist_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/todolist.css */ "./src/css/todolist.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// import the static JSON file


// components



// css



const ItemList = () => {
  // declaring the state
  const todoItemList = {
    items: _ItemList_json__WEBPACK_IMPORTED_MODULE_1__,
    value: ""
  };

  // setting the initial list of TODO items
  const [todoItems, setTodoItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(todoItemList);
  const lastElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    scrollToBottom();
  });

  // always scroll to the bottom
  const scrollToBottom = () => {
    // lastElement.current.scrollTop = lastElement.current.scrollHeight - lastElement.current.clientHeight
    lastElement.current.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });
  };

  // find and delete the item whose X button is clicked
  const handleDelete = id => {
    setTodoItems({
      ...todoItems,
      items: todoItems.items.filter(item => item.id != id)
    });
  };

  // insert an item into the list and reset the input field
  const handleInsert = () => {
    setTodoItems({
      items: [...todoItems.items, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        item: todoItems.value
      }],
      value: ""
    });
  };

  // update the value of the state when input box changes
  const handleUpdateInput = e => {
    setTodoItems({
      ...todoItems,
      value: e.target.value
    });
  };

  // capture the ENTER key
  const handleEnterEvent = e => {
    if ((e.keyCode == 13 || e.which == 13) && todoItems.value != "") {
      handleInsert();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "show-add-items",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AddItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      addItemValue: todoItems.value,
      handleUpdateInput: handleUpdateInput,
      handleEnterEvent: handleEnterEvent
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "list-items",
      children: [todoItems.items.map(ele => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TodoItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          ...ele,
          handleDelete: handleDelete
        }, ele.id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        ref: lastElement
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemList);

/***/ }),

/***/ "./src/components/todolist/TodoItem.js":
/*!*********************************************!*\
  !*** ./src/components/todolist/TodoItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// TodoItem component
const TodoItem = ({
  id,
  item,
  handleDelete
}) => {
  // return a card like div with the item and a X button to delete it
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "card",
    id: id,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "heading",
      children: [item, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        className: "fa fa-times close-icon",
        onClick: () => {
          handleDelete(id);
        }
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/todolist.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/todolist.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ToDo List related styles*/\n\n.description {\n  grid-row: 2;\n  padding: 1em;\n  box-shadow: 0 2px 10px var(--lighter-shadow);\n}\n\n.italic {\n  font-style: italic;\n}\n\n.caption {\n  text-transform: uppercase;\n}\n\n.card {\n  padding: 1em;\n  position: relative;\n  border-bottom: 1px solid var(--light-grey);\n  margin-bottom: 3px;\n}\n\n.card:hover {\n  background-color: var(--light-grey);\n}\n\n.close-icon {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n\n  text-decoration: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.close-icon:hover,\n.close-icon:focus {\n  opacity: 0.5;\n}\n\n/* Input Box */\n.md-input-box {\n  border: 0;\n  outline: 0;\n  padding: 3px;\n  border-bottom: solid 0.5px var(--light-purple);\n}\n\n.md-input-box:focus {\n  border-bottom: solid 2px var(--light-purple);\n}\n\n/* Button */\n.btn {\n  font-size: 1em;\n  font-weight: 300;\n\n  padding: 0.5rem;\n\n  background-color: var(--light-purple);\n  color: var(--light-grey);\n  text-decoration: none;\n}\n\n.btn:hover,\n.btn:focus {\n  color: var(--lighter-grey);\n}\n\n.show-add-items {\n  margin: 2%;\n  display: grid;\n  grid-template-rows: 1fr 60vh;\n  grid-template-columns: 1fr;\n}\n\n/* Add Items related */\n.add-items {\n  grid-row: 1;\n  height: 50px;\n}\n\n/* List Items related */\n.list-items {\n  grid-row: 2;\n  overflow-y: auto;\n}\n\ninput[type=\"text\"] {\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/todolist.css"],"names":[],"mappings":"AAAA,4BAA4B;;AAE5B;EACE,WAAW;EACX,YAAY;EACZ,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;;EAER,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;EAEE,YAAY;AACd;;AAEA,cAAc;AACd;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,4CAA4C;AAC9C;;AAEA,WAAW;AACX;EACE,cAAc;EACd,gBAAgB;;EAEhB,eAAe;;EAEf,qCAAqC;EACrC,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,aAAa;EACb,4BAA4B;EAC5B,0BAA0B;AAC5B;;AAEA,sBAAsB;AACtB;EACE,WAAW;EACX,YAAY;AACd;;AAEA,uBAAuB;AACvB;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb","sourcesContent":["/* ToDo List related styles*/\n\n.description {\n  grid-row: 2;\n  padding: 1em;\n  box-shadow: 0 2px 10px var(--lighter-shadow);\n}\n\n.italic {\n  font-style: italic;\n}\n\n.caption {\n  text-transform: uppercase;\n}\n\n.card {\n  padding: 1em;\n  position: relative;\n  border-bottom: 1px solid var(--light-grey);\n  margin-bottom: 3px;\n}\n\n.card:hover {\n  background-color: var(--light-grey);\n}\n\n.close-icon {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n\n  text-decoration: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.close-icon:hover,\n.close-icon:focus {\n  opacity: 0.5;\n}\n\n/* Input Box */\n.md-input-box {\n  border: 0;\n  outline: 0;\n  padding: 3px;\n  border-bottom: solid 0.5px var(--light-purple);\n}\n\n.md-input-box:focus {\n  border-bottom: solid 2px var(--light-purple);\n}\n\n/* Button */\n.btn {\n  font-size: 1em;\n  font-weight: 300;\n\n  padding: 0.5rem;\n\n  background-color: var(--light-purple);\n  color: var(--light-grey);\n  text-decoration: none;\n}\n\n.btn:hover,\n.btn:focus {\n  color: var(--lighter-grey);\n}\n\n.show-add-items {\n  margin: 2%;\n  display: grid;\n  grid-template-rows: 1fr 60vh;\n  grid-template-columns: 1fr;\n}\n\n/* Add Items related */\n.add-items {\n  grid-row: 1;\n  height: 50px;\n}\n\n/* List Items related */\n.list-items {\n  grid-row: 2;\n  overflow-y: auto;\n}\n\ninput[type=\"text\"] {\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/todolist.css":
/*!******************************!*\
  !*** ./src/css/todolist.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todolist.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/todolist.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/components/todolist/ItemList.json":
/*!***********************************************!*\
  !*** ./src/components/todolist/ItemList.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"ef96a02f-ec37-4d7a-a3b0-479d2be7225e","item":"Write my code"},{"id":"1cc76e26-cc9e-4631-8ea2-ff226b467148","item":"Compile the code"},{"id":"6b47fc42-1022-4dc1-8f41-e3dae650030a","item":"debug it"},{"id":"bf10df41-29a3-41a1-8630-7e6e95f503c4","item":"deploy in the server"},{"id":"197a674b-d5aa-4d6a-8816-13f809046d0a","item":"Put in Github"}]');

/***/ })

}]);
//# sourceMappingURL=src_components_todolist_ToDoList_js.js.map