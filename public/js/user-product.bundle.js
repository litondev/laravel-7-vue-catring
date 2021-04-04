(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/views/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_components_Product_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/user/components/Product.vue */ "./resources/js/user/components/Product.vue");
/* harmony import */ var _user_components_loadings_HomeSkeleton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/user/components/loadings/HomeSkeleton.vue */ "./resources/js/user/components/loadings/HomeSkeleton.vue");
/* harmony import */ var _user_layouts_main_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/user/layouts/main.vue */ "./resources/js/user/layouts/main.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    document.title = "Product";
    this.onLoad();
  },
  data: function data() {
    return {
      loadingSkeleton: true,
      loadingNext: false,
      theData: {}
    };
  },
  components: {
    Main: _user_layouts_main_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BContainer: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BContainer"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BIcon"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormInvalidFeedback"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BSpinner"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BAvatar"],
    HomeSkeleton: _user_components_loadings_HomeSkeleton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Product: _user_components_Product_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    baseUrl: function baseUrl() {
      return window.laravel.base_url;
    },
    search: function search() {
      return this.$store.state.search;
    }
  },
  watch: {
    search: function search(newValue) {
      this.loadingSkeleton = true;
      this.onLoad();
    }
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;

      this.$axios.get("api/product?search=" + (this.search || '')).then(function (res) {
        _this.theData = res.data;
        _this.loadingSkeleton = false;
      });
    },
    onNext: function onNext() {
      var _this2 = this;

      if (this.loadingNext) {
        return false;
      }

      this.loadingNext = true;
      var param = "?search=" + (this.search || '');
      param += "&page=" + (this.theData.pagination.currentPage + 1);
      this.$axios.get("api/product" + param).then(function (res) {
        _this2.theData = {
          pagination: _objectSpread({}, res.data.pagination),
          "data": [].concat(_toConsumableArray(_this2.theData.data), _toConsumableArray(res.data.data))
        };
      })["finally"](function () {
        _this2.loadingNext = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Product.vue?vue&type=template&id=2eb32630&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/views/Product.vue?vue&type=template&id=2eb32630& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Main",
    [
      !_vm.loadingSkeleton
        ? _c(
            "b-container",
            { staticClass: "mt-3 mb-3" },
            [
              _c(
                "b-row",
                { staticClass: "p-4" },
                [
                  _vm._l(_vm.theData.data, function(item, itemIndex) {
                    return _c(
                      "b-col",
                      {
                        key: itemIndex,
                        staticClass: "mb-5",
                        attrs: { md: "4", xl: "4", lg: "4", sm: "6" }
                      },
                      [_c("Product", { attrs: { item: item } })],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm.theData.pagination.lastPage >
                  _vm.theData.pagination.currentPage
                    ? _c(
                        "b-col",
                        {
                          staticClass: "mb-2 p-2 mt-3 text-center text-goll",
                          attrs: { cols: "12" }
                        },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "outline-success" },
                              on: {
                                click: function($event) {
                                  return _vm.onNext()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "   \n                Lihat Product Lainnya\n\t\t\t\t"
                              ),
                              _vm.loadingNext
                                ? _c("b-spinner", {
                                    staticStyle: {
                                      width: "1rem",
                                      height: "1rem"
                                    },
                                    attrs: { label: "Spinning" }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                2
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("home-skeleton", { attrs: { loadingSkeleton: _vm.loadingSkeleton } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/user/views/Product.vue":
/*!*********************************************!*\
  !*** ./resources/js/user/views/Product.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_2eb32630___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=2eb32630& */ "./resources/js/user/views/Product.vue?vue&type=template&id=2eb32630&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/user/views/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_2eb32630___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_2eb32630___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/views/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/user/views/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/user/views/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/user/views/Product.vue?vue&type=template&id=2eb32630&":
/*!****************************************************************************!*\
  !*** ./resources/js/user/views/Product.vue?vue&type=template&id=2eb32630& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_2eb32630___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=2eb32630& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Product.vue?vue&type=template&id=2eb32630&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_2eb32630___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_2eb32630___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);