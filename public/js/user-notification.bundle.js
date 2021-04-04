(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-notification"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BSkeleton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSkeleton"],
    BSkeletonWrapper: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSkeletonWrapper"],
    BContainer: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BContainer"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"]
  },
  props: {
    loadingSkeleton: {
      type: Boolean,
      "default": true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Notification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/views/Notification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_components_loadings_NotificationSkeleton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/user/components/loadings/NotificationSkeleton.vue */ "./resources/js/user/components/loadings/NotificationSkeleton.vue");
/* harmony import */ var _user_layouts_main_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/user/layouts/main.vue */ "./resources/js/user/layouts/main.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
    document.title = "Notification";
    this.onLoad();
  },
  data: function data() {
    return {
      loadingSkeleton: true,
      loadingNext: false,
      theData: {}
    };
  },
  computed: {
    baseUrl: function baseUrl() {
      return window.laravel.base_url;
    }
  },
  components: {
    Main: _user_layouts_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationSkeleton: _user_components_loadings_NotificationSkeleton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BContainer: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BContainer"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BIcon"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInvalidFeedback"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BSpinner"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BAvatar"]
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;

      this.$axios.get("api/user/notification").then(function (res) {
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
      this.$axios.get("api/user/notification?page=" + (this.theData.pagination.currentPage + 1)).then(function (res) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=template&id=9f1df766&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=template&id=9f1df766& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("b-skeleton-wrapper", {
    attrs: { loading: _vm.loadingSkeleton },
    scopedSlots: _vm._u([
      {
        key: "loading",
        fn: function() {
          return [
            _c(
              "b-container",
              { staticClass: "mt-5 mb-5" },
              _vm._l(10, function(x, indexX) {
                return _c(
                  "div",
                  { key: indexX, staticClass: "mb-3" },
                  [
                    _c(
                      "b-row",
                      [
                        _c(
                          "b-col",
                          { attrs: { md: "2", lg: "2", sm: "12", xl: "2" } },
                          [_c("b-skeleton", { attrs: { height: "100px" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "9", lg: "9", sm: "12", xl: "9" } },
                          [
                            _vm._l(8, function(xItem, itemIndexX) {
                              return _vm.$store.state.isMobile
                                ? _c("b-skeleton", {
                                    key: itemIndexX,
                                    attrs: {
                                      width:
                                        Math.floor(
                                          Math.random() * (+300 + 1 - +100)
                                        ) +
                                        +100 +
                                        "px",
                                      height: "10px"
                                    }
                                  })
                                : _vm._e()
                            }),
                            _vm._v(" "),
                            _vm._l(8, function(xItem, itemIndexX) {
                              return !_vm.$store.state.isMobile
                                ? _c("b-skeleton", {
                                    key: itemIndexX,
                                    attrs: {
                                      width:
                                        Math.floor(
                                          Math.random() * (+700 + 1 - +100)
                                        ) +
                                        +100 +
                                        "px",
                                      height: "10px"
                                    }
                                  })
                                : _vm._e()
                            })
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              0
            )
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Notification.vue?vue&type=template&id=6226947c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/views/Notification.vue?vue&type=template&id=6226947c& ***!
  \***************************************************************************************************************************************************************************************************************/
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
            "div",
            { staticClass: "bora-10 pt-3 pb-3 pl-5 pr-5 mt-2 mb-2" },
            [
              _c(
                "b-row",
                { staticClass: "pl-2 pr-2" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "mb-2 p-2 text-center text-goll",
                      attrs: { cols: "12" }
                    },
                    [_c("h2", [_vm._v("Notification")])]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.theData.data, function(item, indexItem) {
                    return _c(
                      "b-col",
                      {
                        key: indexItem,
                        staticClass:
                          "box-goll mb-5 p-3 bora-10 cursor-pointer-goll",
                        attrs: { cols: "12" }
                      },
                      [
                        _c("div", { staticClass: "pb-2 clearfix fosi-15" }, [
                          _c("div", { staticClass: "float-left" }, [
                            _c("b", [_vm._v(_vm._s(item.title))])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "float-right" }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t  " +
                                _vm._s(item.get_human_created_at) +
                                "\n\t\t\t\t\t\t"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "fosi-12" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(item.description) +
                              "\n\t\t\t\t\t"
                          )
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _vm.theData.pagination.lastPage >
                  _vm.theData.pagination.currentPage
                    ? _c(
                        "b-col",
                        {
                          staticClass: "mb-2 p-2 text-center text-goll",
                          attrs: { cols: "12" }
                        },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "outline-success" },
                              on: { click: _vm.onNext }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\tKlik melihat data lainnya \n\t\t\t\t\t\t"
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
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.theData.data.length
                    ? _c(
                        "b-col",
                        { staticClass: "p-5 ml-2 mr-2 box-goll" },
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "text-center mb-5",
                              attrs: { cols: "12" }
                            },
                            [
                              _c("img", {
                                staticStyle: { width: "10%" },
                                attrs: {
                                  src:
                                    _vm.baseUrl + "/assets/images/not-found.png"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "fosi-15 text-center",
                              attrs: { cols: "12" }
                            },
                            [_c("b", [_vm._v("Data tidak ditemukan")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "fosi-13 text-center",
                              attrs: { cols: "12" }
                            },
                            [_vm._v("Data notification tidak ditemukan")]
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
      _c("notification-skeleton", {
        attrs: { loadingSkeleton: _vm.loadingSkeleton }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/user/components/loadings/NotificationSkeleton.vue":
/*!************************************************************************!*\
  !*** ./resources/js/user/components/loadings/NotificationSkeleton.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationSkeleton_vue_vue_type_template_id_9f1df766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationSkeleton.vue?vue&type=template&id=9f1df766& */ "./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=template&id=9f1df766&");
/* harmony import */ var _NotificationSkeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationSkeleton.vue?vue&type=script&lang=js& */ "./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationSkeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationSkeleton_vue_vue_type_template_id_9f1df766___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationSkeleton_vue_vue_type_template_id_9f1df766___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/components/loadings/NotificationSkeleton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationSkeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationSkeleton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationSkeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=template&id=9f1df766&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=template&id=9f1df766& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationSkeleton_vue_vue_type_template_id_9f1df766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationSkeleton.vue?vue&type=template&id=9f1df766& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/components/loadings/NotificationSkeleton.vue?vue&type=template&id=9f1df766&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationSkeleton_vue_vue_type_template_id_9f1df766___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationSkeleton_vue_vue_type_template_id_9f1df766___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/user/views/Notification.vue":
/*!**************************************************!*\
  !*** ./resources/js/user/views/Notification.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_vue_vue_type_template_id_6226947c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=6226947c& */ "./resources/js/user/views/Notification.vue?vue&type=template&id=6226947c&");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js& */ "./resources/js/user/views/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification_vue_vue_type_template_id_6226947c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notification_vue_vue_type_template_id_6226947c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/views/Notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/user/views/Notification.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/user/views/Notification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/user/views/Notification.vue?vue&type=template&id=6226947c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/user/views/Notification.vue?vue&type=template&id=6226947c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6226947c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=template&id=6226947c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Notification.vue?vue&type=template&id=6226947c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6226947c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6226947c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);