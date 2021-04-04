(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-cart~user-home~user-profil"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/layouts/main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/layouts/main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _library_bootstrap_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/library/bootstrap-icon.js */ "./resources/js/library/bootstrap-icon.js");
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
  data: function data() {
    return {};
  },
  components: {
    BNavbar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbar"],
    BContainer: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BContainer"],
    BNavbarBrand: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarBrand"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItem"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIcon"],
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarNav"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"]
  },
  computed: {
    baseUrl: function baseUrl() {
      return window.laravel.base_url;
    },
    isLogin: function isLogin() {
      return window.laravel.is_login === 'true' ? true : false;
    },
    isMobile: function isMobile() {
      return window.laravel.is_mobile === 'true' ? true : false;
    }
  },
  methods: {
    logout: function logout() {
      var _this = this;

      this.$axios.post("api/user/logout").then(function (res) {
        window.location.href = _this.baseUrl;
      });
    },
    search: function search() {
      console.log('asd');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/layouts/main.vue?vue&type=template&id=7dcbf535&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/layouts/main.vue?vue&type=template&id=7dcbf535& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-navbar",
        { staticStyle: { background: "red" }, attrs: { toggleable: "lg" } },
        [
          _c(
            "b-container",
            [
              _vm.isMobile
                ? _c(
                    "b-navbar-nav",
                    { staticClass: "ml-auto" },
                    [
                      _c("b-nav-item", [
                        _c(
                          "span",
                          {
                            staticClass: "text-light mr-3",
                            on: {
                              click: function($event) {
                                _vm.searchMobileShow = true
                              }
                            }
                          },
                          [_c("b-icon", { attrs: { icon: "search" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "text-light",
                            on: {
                              click: function($event) {
                                _vm.navbarMobileShow = true
                              }
                            }
                          },
                          [_c("b-icon", { attrs: { icon: "grid" } })],
                          1
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-collapse",
                { attrs: { "is-nav": "" } },
                [
                  _c(
                    "b-navbar-nav",
                    { staticClass: "ml-auto text-white" },
                    [
                      _c(
                        "b-nav-item",
                        [
                          _c("b-form-input", {
                            staticClass: "mr-sm-2",
                            attrs: { size: "sm", placeholder: "Search . . ." },
                            on: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm.search($event)
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-nav-item", { attrs: { to: "/cart" } }, [
                        _c(
                          "span",
                          { staticClass: "text-light position-relative-goll" },
                          [
                            _c("b-icon", { attrs: { icon: "basket" } }),
                            _vm._v(" "),
                            _vm.$store.state.cart
                              ? _c("b-icon", {
                                  staticStyle: {
                                    color: "red",
                                    height: "0.5rem",
                                    width: "0.5rem",
                                    position: "absolute"
                                  },
                                  attrs: { icon: "circle-fill" }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _vm.isLogin
                        ? _c("b-nav-item", { attrs: { to: "/notification" } }, [
                            _c(
                              "span",
                              { staticClass: "text-light" },
                              [_c("b-icon", { attrs: { icon: "bell" } })],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isLogin
                        ? _c("b-nav-item", { attrs: { to: "/profil" } }, [
                            _c(
                              "span",
                              { staticClass: "text-light" },
                              [_c("b-icon", { attrs: { icon: "person" } })],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isLogin
                        ? _c(
                            "b-nav-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.logout()
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "text-light" }, [
                                _vm._v(
                                  "\n                Keluar\n              "
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.isLogin
                        ? _c("b-nav-item", { attrs: { to: "/signin" } }, [
                            _c("span", { staticClass: "text-light" }, [
                              _vm._v("\n                Masuk\n              ")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.isLogin
                        ? _c("b-nav-item", { attrs: { to: "/signup" } }, [
                            _c("span", { staticClass: "text-light" }, [
                              _vm._v("\n                Daftar\n              ")
                            ])
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/library/bootstrap-icon.js":
/*!************************************************!*\
  !*** ./resources/js/library/bootstrap-icon.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BootstrapVueIcons"]);

/***/ }),

/***/ "./resources/js/user/layouts/main.vue":
/*!********************************************!*\
  !*** ./resources/js/user/layouts/main.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_7dcbf535___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=7dcbf535& */ "./resources/js/user/layouts/main.vue?vue&type=template&id=7dcbf535&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/user/layouts/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_7dcbf535___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_7dcbf535___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/layouts/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/user/layouts/main.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/user/layouts/main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/layouts/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/user/layouts/main.vue?vue&type=template&id=7dcbf535&":
/*!***************************************************************************!*\
  !*** ./resources/js/user/layouts/main.vue?vue&type=template&id=7dcbf535& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_7dcbf535___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=7dcbf535& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/layouts/main.vue?vue&type=template&id=7dcbf535&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_7dcbf535___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_7dcbf535___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);