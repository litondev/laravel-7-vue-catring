(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/views/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_components_Product_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/user/components/Product.vue */ "./resources/js/user/components/Product.vue");
/* harmony import */ var _user_components_loadings_HomeSkeleton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/user/components/loadings/HomeSkeleton.vue */ "./resources/js/user/components/loadings/HomeSkeleton.vue");
/* harmony import */ var _user_layouts_main_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/user/layouts/main.vue */ "./resources/js/user/layouts/main.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
    document.title = "Home";
    this.onLoad();
  },
  data: function data() {
    return {
      loadingSkeleton: true,
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
    }
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;

      this.$axios.get("api/product").then(function (res) {
        _this.theData = res.data;
        _this.loadingSkeleton = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
                  _c(
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
                              return _vm.$router.push("/product")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "   \n                Lihat Semua Product\n              "
                          )
                        ]
                      )
                    ],
                    1
                  )
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

/***/ "./resources/js/user/views/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/user/views/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_184b36b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=184b36b6& */ "./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/user/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_184b36b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_184b36b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/user/views/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/user/views/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6&":
/*!*************************************************************************!*\
  !*** ./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_184b36b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=184b36b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_184b36b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_184b36b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);