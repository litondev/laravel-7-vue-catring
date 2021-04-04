(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/ProductDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/views/ProductDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/user/layouts/main.vue */ "./resources/js/user/layouts/main.vue");
/* harmony import */ var _user_components_loadings_ProductDetailSkeleton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/user/components/loadings/ProductDetailSkeleton.vue */ "./resources/js/user/components/loadings/ProductDetailSkeleton.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _mixin_on_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixin/on-cart.js */ "./resources/js/mixin/on-cart.js");
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
  mixins: [_mixin_on_cart_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    Main: _user_layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BAvatar"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCarouselSlide"],
    ProductDetailSkeleton: _user_components_loadings_ProductDetailSkeleton_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      theData: {},
      loadingSkeleton: true,
      slide: 0,
      detailShow: null,
      idCartLoading: null
    };
  },
  computed: {
    baseUrl: function baseUrl() {
      return window.laravel.base_url;
    },
    isLogin: function isLogin() {
      return window.laravel.is_login === 'true' ? true : false;
    }
  },
  mounted: function mounted() {
    this.onLoad();
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;

      this.$axios.get("api/product/" + this.$route.params.id).then(function (res) {
        _this.theData = res.data;
        _this.loadingSkeleton = false;
      })["catch"](function (err) {
        if (err.response && err.response.status == 422) {
          _this.$toaster.error(err.response.data.error);
        } else if (err.response && err.response.status == 500) {
          _this.$toaster.error(err.response.data.message);
        } else {
          _this.$toaster.error("Terjadi Kesalahan");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=template&id=0435fae8&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=template&id=0435fae8& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { attrs: { md: "6", lg: "6", sm: "12", xl: "6" } },
                      [_c("b-skeleton", { attrs: { height: "300px" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { attrs: { md: "6", lg: "6", sm: "12", xl: "6" } },
                      [
                        _c("b-skeleton", {
                          attrs: { width: "100px", height: "30px" }
                        }),
                        _vm._v(" "),
                        _c("b-skeleton", {
                          attrs: { width: "150px", height: "20px" }
                        }),
                        _vm._v(" "),
                        _c("b-skeleton", { attrs: { height: "10px" } }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-4" },
                          [
                            _c("b-skeleton", { attrs: { height: "10px" } }),
                            _vm._v(" "),
                            _c("b-skeleton", { attrs: { height: "10px" } }),
                            _vm._v(" "),
                            _c("b-skeleton", { attrs: { height: "10px" } }),
                            _vm._v(" "),
                            _c("b-skeleton", { attrs: { height: "10px" } })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-row",
                          { staticClass: "mt-4" },
                          [
                            _c(
                              "b-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("b-skeleton", { attrs: { height: "80px" } }),
                                _vm._v(" "),
                                _c("b-skeleton", { attrs: { height: "20px" } })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("b-skeleton", { attrs: { height: "80px" } }),
                                _vm._v(" "),
                                _c("b-skeleton", { attrs: { height: "20px" } })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("b-skeleton", { attrs: { height: "80px" } }),
                                _vm._v(" "),
                                _c("b-skeleton", { attrs: { height: "20px" } })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("b-skeleton", { attrs: { height: "80px" } }),
                                _vm._v(" "),
                                _c("b-skeleton", { attrs: { height: "20px" } })
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
                    _c(
                      "b-col",
                      { staticClass: "mt-3 mb-3", attrs: { cols: "12" } },
                      [
                        _c("b-skeleton", { attrs: { height: "50px" } }),
                        _vm._v(" "),
                        _c("b-skeleton", { attrs: { height: "300px" } })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/ProductDetail.vue?vue&type=template&id=094ad4d9&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/views/ProductDetail.vue?vue&type=template&id=094ad4d9& ***!
  \****************************************************************************************************************************************************************************************************************/
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
            { staticClass: "mt-5 mb-5" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "mb-3",
                      attrs: { xl: "6", md: "6", sm: "12", lg: "6" }
                    },
                    [
                      _c(
                        "b-carousel",
                        {
                          staticStyle: { "text-shadow": "1px 1px 2px #333" },
                          attrs: {
                            id: "carousel-1",
                            interval: 4000,
                            controls: "",
                            indicators: "",
                            background: "#ababab"
                          },
                          model: {
                            value: _vm.slide,
                            callback: function($$v) {
                              _vm.slide = $$v
                            },
                            expression: "slide"
                          }
                        },
                        _vm._l(_vm.theData.get_images, function(
                          itemImage,
                          indexImage
                        ) {
                          return _c("b-carousel-slide", {
                            key: indexImage,
                            attrs: {
                              alt: "image",
                              "img-src":
                                _vm.baseUrl +
                                "/assets/images/products/" +
                                itemImage
                            }
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mt-2" },
                        _vm._l(_vm.theData.get_images, function(
                          itemImage,
                          indexImage
                        ) {
                          return _c(
                            "b-col",
                            { key: indexImage, attrs: { cols: "2" } },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href:
                                      _vm.baseUrl +
                                      "/assets/images/products/" +
                                      itemImage,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src:
                                        _vm.baseUrl +
                                        "/assets/images/products/" +
                                        itemImage
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6", md: "6", sm: "12", lg: "6" } },
                    [
                      _c("div", { staticClass: "fosi-25 mb-2" }, [
                        _c("div", { staticClass: "clearfix" }, [
                          _c("div", { staticClass: "float-left" }, [
                            _c("h4", [_vm._v(_vm._s(_vm.theData.name))])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "float-right" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticStyle: {
                                    "border-radius": "50%",
                                    "padding-left": "8px",
                                    "padding-right": "8px",
                                    background: "rgb(63,230,159)",
                                    border: "0px"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.onCart(_vm.theData.id)
                                    }
                                  }
                                },
                                [
                                  _vm.isLoadingCart(_vm.theData.id)
                                    ? _c("b-spinner", {
                                        staticStyle: {
                                          width: "1rem",
                                          height: "1rem"
                                        },
                                        attrs: { label: "Spinning" }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.isLoadingCart(_vm.theData.id)
                                    ? _c("b-icon", {
                                        attrs: { icon: "basket" }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "fosi-25 mb-2" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\tDi Update Pada : " +
                            _vm._s(_vm.theData.get_human_updated_at) +
                            "\n\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mt-3" },
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "text-center mb-2",
                              attrs: { cols: "6" }
                            },
                            [
                              _c("b-icon", {
                                staticClass: "text-goll",
                                staticStyle: { height: "2rem", width: "2rem" },
                                attrs: { icon: "clock" }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v("\n\t\t\t\t\t\t\t\tStock\n\t\t\t\t\t\t\t"),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticClass: "fosi-15 text-goll" }, [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(_vm.theData.stock) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "text-center mb-2",
                              attrs: { cols: "6" }
                            },
                            [
                              _c("b-icon", {
                                staticClass: "text-goll",
                                staticStyle: { height: "2rem", width: "2rem" },
                                attrs: { icon: "cash" }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v("\n\t\t\t\t\t\t\t\tHarga\n\t\t\t\t\t\t\t"),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticClass: "fosi-15 text-goll" }, [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tRp " +
                                    _vm._s(
                                      _vm.theData.price.toLocaleString(
                                        "id-ID",
                                        { currency: "IDR" }
                                      )
                                    ) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ])
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
                  _c(
                    "b-col",
                    { staticClass: "mt-5", attrs: { cols: "12" } },
                    [
                      _c(
                        "b-col",
                        {
                          staticClass: "box-goll bora-10 p-3",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-lg-1 col-md-1 col-6 cursor-pointer-goll",
                                on: {
                                  click: function($event) {
                                    _vm.detailShow = "description"
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t \tDeskripsi\n\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-lg-1 col-md-1 col-6 cursor-pointer-goll",
                                on: {
                                  click: function($event) {
                                    _vm.detailShow = "review"
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n \t\t\t\t\t\t\t \tReview\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        {
                          staticClass: "bora-10 mt-3 box-goll p-3",
                          attrs: { cols: "12" }
                        },
                        [
                          _vm.detailShow == "description"
                            ? _c("div", [
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.theData.description)
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.detailShow == "review"
                            ? _c("div", [
                                _vm.theData.reviews.data.length
                                  ? _c(
                                      "div",
                                      [
                                        _c("b-col", [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t Review\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.theData.reviews.data,
                                          function(itemReview, indexReview) {
                                            return _c(
                                              "b-col",
                                              { key: indexReview },
                                              [
                                                _c("hr"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "fosi-12 text-goll"
                                                  },
                                                  [
                                                    _c("b-avatar", {
                                                      attrs: {
                                                        size: "sm",
                                                        variant: "none",
                                                        src:
                                                          _vm.baseUrl +
                                                          "/assets/images/users/" +
                                                          itemReview.user.photo
                                                      }
                                                    }),
                                                    _vm._v(
                                                      "\n\t\t\t    \t\t\t\t\t\t" +
                                                        _vm._s(
                                                          itemReview.user
                                                            .username
                                                        ) +
                                                        " " +
                                                        _vm._s(
                                                          itemReview.get_human_created_at
                                                        ) +
                                                        "\n\t\t\t\t\t\t\t\t\t"
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "fosi-15" },
                                                  [
                                                    _vm._v(
                                                      "\n\t\t\t\t\t\t\t\t\t\t" +
                                                        _vm._s(
                                                          itemReview.description
                                                        ) +
                                                        "\n\t\t\t\t\t\t\t\t\t"
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          }
                                        ),
                                        _vm._v(" "),
                                        _vm.theData.reviews.pagination
                                          .lastPage >
                                        _vm.theData.reviews.pagination
                                          .currentPage
                                          ? _c(
                                              "b-col",
                                              {
                                                staticClass:
                                                  "mb-2 p-2 mt-3 text-center text-goll"
                                              },
                                              [
                                                _c(
                                                  "b-button",
                                                  {
                                                    attrs: {
                                                      variant: "outline-success"
                                                    },
                                                    on: { click: _vm.onNext }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n\t\t\t\t\t                Klik melihat review lainnya\n\t\t\t\t\t                "
                                                    ),
                                                    _vm.loadingNext
                                                      ? _c("b-spinner", {
                                                          staticStyle: {
                                                            width: "1rem",
                                                            height: "1rem"
                                                          },
                                                          attrs: {
                                                            label: "Spinning"
                                                          }
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
                                  : _c(
                                      "div",
                                      [
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "text-center mb-5",
                                            attrs: { cols: "12" }
                                          },
                                          [
                                            _c("img", {
                                              staticStyle: { width: "20%" },
                                              attrs: {
                                                src:
                                                  _vm.baseUrl +
                                                  "/assets/images/not-found.png"
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
                                          [
                                            _c("b", [
                                              _vm._v("Data tidak ditemukan")
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "fosi-13 text-center",
                                            attrs: { cols: "12" }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t              \t\tData review tidak ditemukan\n\t\t\t\t              \t"
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                              ])
                            : _vm._e()
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("product-detail-skeleton", {
        attrs: { loadingSkeleton: _vm.loadingSkeleton }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixin/on-cart.js":
/*!***************************************!*\
  !*** ./resources/js/mixin/on-cart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onCart: function onCart(id) {
      var _this = this;

      if (!this.isLogin) {
        this.$router.push("/signin");
      } else {
        if (this.idCartLoading) {
          return false;
        }

        this.idCartLoading = id;
        this.$axios.post("api/user/cart", {
          id: id
        }).then(function (res) {
          _this.$store.commit('SET_CART', res.data.cart ? res.data.cart : null);

          _this.$toaster.success("Berhasil memasukan ke keranjang");

          _this.$router.push("/cart");
        })["catch"](function (err) {
          if (err.response && err.response.status == 422) {
            _this.$toaster.error(err.response.data.error);
          } else if (err.response && err.response.status == 500) {
            _this.$toaster.error(err.response.data.message);
          } else {
            _this.$toaster.error("Terjadi Kesalahan");
          }

          _this.idCartLoading = false;
        });
      }
    },
    isLoadingCart: function isLoadingCart(id) {
      return this.idCartLoading ? this.idCartLoading === id ? true : false : false;
    }
  }
});

/***/ }),

/***/ "./resources/js/user/components/loadings/ProductDetailSkeleton.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/user/components/loadings/ProductDetailSkeleton.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetailSkeleton_vue_vue_type_template_id_0435fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetailSkeleton.vue?vue&type=template&id=0435fae8& */ "./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=template&id=0435fae8&");
/* harmony import */ var _ProductDetailSkeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetailSkeleton.vue?vue&type=script&lang=js& */ "./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetailSkeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetailSkeleton_vue_vue_type_template_id_0435fae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetailSkeleton_vue_vue_type_template_id_0435fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/components/loadings/ProductDetailSkeleton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailSkeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetailSkeleton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailSkeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=template&id=0435fae8&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=template&id=0435fae8& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailSkeleton_vue_vue_type_template_id_0435fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetailSkeleton.vue?vue&type=template&id=0435fae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/components/loadings/ProductDetailSkeleton.vue?vue&type=template&id=0435fae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailSkeleton_vue_vue_type_template_id_0435fae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailSkeleton_vue_vue_type_template_id_0435fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/user/views/ProductDetail.vue":
/*!***************************************************!*\
  !*** ./resources/js/user/views/ProductDetail.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_094ad4d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=094ad4d9& */ "./resources/js/user/views/ProductDetail.vue?vue&type=template&id=094ad4d9&");
/* harmony import */ var _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&lang=js& */ "./resources/js/user/views/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetail_vue_vue_type_template_id_094ad4d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetail_vue_vue_type_template_id_094ad4d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/views/ProductDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/user/views/ProductDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/user/views/ProductDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/user/views/ProductDetail.vue?vue&type=template&id=094ad4d9&":
/*!**********************************************************************************!*\
  !*** ./resources/js/user/views/ProductDetail.vue?vue&type=template&id=094ad4d9& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_094ad4d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=template&id=094ad4d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/views/ProductDetail.vue?vue&type=template&id=094ad4d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_094ad4d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_094ad4d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);