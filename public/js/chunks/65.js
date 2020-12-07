(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerAddTabAccount_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerAddTabAccount.vue */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue");
/* harmony import */ var _CustomerAddTabInformation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAddTabInformation.vue */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue");
/* harmony import */ var _CustomerAddTabSocial_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerAddTabSocial.vue */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue");
/* harmony import */ var _store_data_list_moduleDataList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/data-list/moduleDataList.js */ "./resources/js/src/store/data-list/moduleDataList.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // Store Module


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CustomerAddTabAccount: _CustomerAddTabAccount_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CustomerAddTabInformation: _CustomerAddTabInformation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomerAddTabSocial: _CustomerAddTabSocial_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      // user_data: null,
      user_not_found: false,

      /*
        This property is created for fetching latest data from API when tab is changed
          Please check it's watcher
      */
      activeTab: 0
    };
  },
  watch: {
    activeTab: function activeTab() {
      this.fetch_user_data(this.$route.params.userId);
    }
  },
  methods: {
    fetch_user_data: function fetch_user_data(userId) {
      this.user_data = {
        fname: '',
        lname: '',
        image: '',
        email: '',
        email_verified_at: '',
        password: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: '',
        verificationCode: '',
        userIp: '',
        address1: '',
        address2: '',
        billingCity: '',
        billingCountry: '',
        billingAddress1: '',
        billingAddress2: '',
        billingPostalCode: '',
        billingEmail: ''
      }; // this.$store.dispatch('userManagement/fetchUser', userId)
      //   .then(res => { this.user_data = res.data })
      //   .catch(err => {
      //     if (err.response.status === 404) {
      //       this.user_not_found = true
      //       return
      //     }
      //     console.error(err) 
      //   })
    }
  },
  created: function created() {
    // Register Module UserManagement Module
    if (!_store_data_list_moduleDataList_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered) {
      this.$store.registerModule('dataList', _store_data_list_moduleDataList_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      _store_data_list_moduleDataList_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered = true;
    }

    this.user_data = {
      fname: '',
      lname: '',
      image: '',
      email: '',
      email_verified_at: '',
      password: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
      verificationCode: '',
      userIp: '',
      address1: '',
      address2: '',
      billingCity: '',
      billingCountry: '',
      billingAddress1: '',
      billingAddress2: '',
      billingPostalCode: '',
      billingEmail: ''
    }; // this.fetch_user_data(this.$route.params.userId)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.data)),
      statusOptions: [{
        label: 'Active',
        value: 'active'
      }, {
        label: 'Blocked',
        value: 'blocked'
      }, {
        label: 'Deactivated',
        value: 'deactivated'
      }],
      roleOptions: [{
        label: 'Admin',
        value: 'admin'
      }, {
        label: 'User',
        value: 'user'
      }, {
        label: 'Staff',
        value: 'staff'
      }]
    };
  },
  computed: {
    status_local: {
      get: function get() {
        return {
          label: this.data_local.status,
          value: this.data_local.status
        };
      },
      set: function set(obj) {
        this.data_local.status = obj.value;
      }
    },
    role_local: {
      get: function get() {
        return {
          label: this.data_local.role,
          value: this.data_local.role
        };
      },
      set: function set(obj) {
        this.data_local.role = obj.value;
      }
    },
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    capitalize: function capitalize(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
    },
    save_changes: function save_changes() {
      /* eslint-disable */
      if (!this.validateForm) return; // Here will go your API call for updating data
      // You can get data in "this.data_local"

      /* eslint-enable */
    },
    reset_data: function reset_data() {
      this.data_local = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.data));
    },
    update_avatar: function update_avatar() {// You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_4___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.data)),
      langOptions: [{
        label: 'English',
        value: 'english'
      }, {
        label: 'Spanish',
        value: 'spanish'
      }, {
        label: 'French',
        value: 'french'
      }, {
        label: 'Russian',
        value: 'russian'
      }, {
        label: 'German',
        value: 'german'
      }, {
        label: 'Arabic',
        value: 'arabic'
      }, {
        label: 'Sanskrit',
        value: 'sanskrit'
      }]
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      /* eslint-disable */
      if (!this.validateForm) return; // Here will go your API call for updating data
      // You can get data in "this.data_local"

      /* eslint-enable */
    },
    reset_data: function reset_data() {
      this.data_local = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, this.data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.data))
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      /* eslint-disable */
      if (!this.validateForm) return; // Here will go your API call for updating data (Also remvoe eslint-disable)
      // You can get data in "this.data_local"

      /* eslint-enable */
    },
    reset_data: function reset_data() {
      this.data_local = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, this.data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=template&id=03360aa4&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=template&id=03360aa4& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "page-user-edit" } },
    [
      _c(
        "vs-alert",
        {
          attrs: {
            color: "danger",
            title: "User Not Found",
            active: _vm.user_not_found
          },
          on: {
            "update:active": function($event) {
              _vm.user_not_found = $event
            }
          }
        },
        [
          _c("span", [
            _vm._v(
              "User record with id: " +
                _vm._s(_vm.$route.params.userId) +
                " not found. "
            )
          ]),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("span", [_vm._v("Check ")]),
              _c(
                "router-link",
                {
                  staticClass: "text-inherit underline",
                  attrs: { to: { name: "page-user-list" } }
                },
                [_vm._v("All Users")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.user_data
        ? _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "tabs-container px-6 pt-6",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c(
                  "vs-tabs",
                  {
                    staticClass: "tab-action-btn-fill-conatiner",
                    model: {
                      value: _vm.activeTab,
                      callback: function($$v) {
                        _vm.activeTab = $$v
                      },
                      expression: "activeTab"
                    }
                  },
                  [
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Create Account",
                          "icon-pack": "feather",
                          icon: "icon-user"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tab-text" },
                          [
                            _c("customer-add-tab-account", {
                              staticClass: "mt-4",
                              attrs: { data: _vm.user_data }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Billing Information",
                          "icon-pack": "feather",
                          icon: "icon-info"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tab-text" },
                          [
                            _c("customer-add-tab-information", {
                              staticClass: "mt-4",
                              attrs: { data: _vm.user_data }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=template&id=f420a6c8&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=template&id=f420a6c8& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user-edit-tab-info" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c("div", { staticClass: "flex items-start flex-col sm:flex-row" }, [
          _c("img", {
            staticClass: "mr-8 rounded h-24 w-24",
            attrs: { src: _vm.data.image }
          }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "p",
                { staticClass: "text-lg font-medium mb-2 mt-4 sm:mt-0" },
                [_vm._v(_vm._s(_vm.data.name))]
              ),
              _vm._v(" "),
              _c("input", {
                ref: "update_avatar_input",
                staticClass: "hidden",
                attrs: { type: "file", accept: "image/*" },
                on: { change: _vm.update_avatar }
              }),
              _vm._v(" "),
              _c("vs-button", { staticClass: "mr-4 mb-4" }, [
                _vm._v("Change Avatar")
              ]),
              _vm._v(" "),
              _c("vs-button", { attrs: { type: "border", color: "danger" } }, [
                _vm._v("Remove Avatar")
              ])
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|alpha_spaces",
                expression: "'required|alpha_spaces'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "Name", name: "name" },
            model: {
              value: _vm.data_local.name,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "name", $$v)
              },
              expression: "data_local.name"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("name"),
                  expression: "errors.has('name')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("name")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|alpha_num",
                expression: "'required|alpha_num'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "Phone", name: "phone" },
            model: {
              value: _vm.data_local.phone,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "phone", $$v)
              },
              expression: "data_local.phone"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("phone"),
                  expression: "errors.has('phone')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("phone")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|alpha_num",
                expression: "'required|alpha_num'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "Address 1", name: "address1" },
            model: {
              value: _vm.data_local.address1,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "address1", $$v)
              },
              expression: "data_local.address1"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("address1"),
                  expression: "errors.has('address1')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("address1")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|alpha_num",
                expression: "'required|alpha_num'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "Address 2", name: "address2" },
            model: {
              value: _vm.data_local.address2,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "address2", $$v)
              },
              expression: "data_local.address2"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("address2"),
                  expression: "errors.has('address2')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("address2")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|email",
                expression: "'required|email'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "Email", type: "email", name: "email" },
            model: {
              value: _vm.data_local.email,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "email", $$v)
              },
              expression: "data_local.email"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("email"),
                  expression: "errors.has('email')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("email")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|alpha_num",
                expression: "'required|alpha_num'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "City", name: "city" },
            model: {
              value: _vm.data_local.city,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "city", $$v)
              },
              expression: "data_local.city"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("city"),
                  expression: "errors.has('city')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("city")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|alpha_num",
                expression: "'required|alpha_num'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "State", name: "state" },
            model: {
              value: _vm.data_local.state,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "state", $$v)
              },
              expression: "data_local.state"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("state"),
                  expression: "errors.has('state')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("state")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|alpha_num",
                expression: "'required|alpha_num'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "Country", name: "country" },
            model: {
              value: _vm.data_local.country,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "country", $$v)
              },
              expression: "data_local.country"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("country"),
                  expression: "errors.has('country')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("country")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-4" },
            [
              _c("label", { staticClass: "vs-input--label" }, [
                _vm._v("Status")
              ]),
              _vm._v(" "),
              _c("v-select", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                attrs: {
                  clearable: false,
                  options: _vm.statusOptions,
                  name: "status",
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                },
                model: {
                  value: _vm.status_local,
                  callback: function($$v) {
                    _vm.status_local = $$v
                  },
                  expression: "status_local"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("status"),
                      expression: "errors.has('status')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("status")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: { regex: "^\\+?([0-9]+)$" },
                expression: "{regex: '^\\\\+?([0-9]+)$' }"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: { label: "Mobile", name: "mobile" },
            model: {
              value: _vm.data_local.mobile,
              callback: function($$v) {
                _vm.$set(_vm.data_local, "mobile", $$v)
              },
              expression: "data_local.mobile"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("mobile"),
                  expression: "errors.has('mobile')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("mobile")))]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
          [
            _c(
              "vs-button",
              {
                staticClass: "ml-auto mt-2",
                attrs: { disabled: !_vm.validateForm },
                on: { click: _vm.save_changes }
              },
              [_vm._v("Save Changes")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "ml-4 mt-2",
                attrs: { type: "border", color: "warning" },
                on: { click: _vm.reset_data }
              },
              [_vm._v("Reset")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=template&id=802c06ca&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=template&id=802c06ca& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user-edit-tab-info" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full md:w-1/2" }, [
        _c(
          "div",
          { staticClass: "flex items-end" },
          [
            _c("feather-icon", {
              staticClass: "mr-2",
              attrs: { icon: "UserIcon", svgClasses: "w-5 h-5" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "leading-none font-medium" }, [
              _vm._v("Billing Information")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|email",
                  expression: "'required|email'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Email", type: "email", name: "email" },
              model: {
                value: _vm.data_local.email,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "email", $$v)
                },
                expression: "data_local.email"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("email"),
                    expression: "errors.has('email')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("email")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "State", name: "state" },
              model: {
                value: _vm.data_local.state,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "state", $$v)
                },
                expression: "data_local.state"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("state"),
                    expression: "errors.has('state')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("state")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Country", name: "country" },
              model: {
                value: _vm.data_local.country,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "country", $$v)
                },
                expression: "data_local.country"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("country"),
                    expression: "errors.has('country')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("country")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4" }, [
              _c("label", { staticClass: "text-sm" }, [_vm._v("Gender")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-2" },
                [
                  _c(
                    "vs-radio",
                    {
                      staticClass: "mr-4",
                      attrs: { "vs-value": "male" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Male")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-radio",
                    {
                      staticClass: "mr-4",
                      attrs: { "vs-value": "female" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Female")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-radio",
                    {
                      attrs: { "vs-value": "other" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Other")]
                  )
                ],
                1
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col w-full md:w-1/2" }, [
        _c(
          "div",
          { staticClass: "flex items-end md:mt-0 mt-base" },
          [
            _c("feather-icon", {
              staticClass: "mr-2",
              attrs: { icon: "MapPinIcon", svgClasses: "w-5 h-5" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "leading-none font-medium" }, [
              _vm._v("Address")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Address Line 1", name: "addd_line_1" },
              model: {
                value: _vm.data_local.address1,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "address1", $$v)
                },
                expression: "data_local.address1"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("addd_line_1"),
                    expression: "errors.has('addd_line_1')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("addd_line_1")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "w-full mt-4",
              attrs: { label: "Address Line 2" },
              model: {
                value: _vm.data_local.address2,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "address2", $$v)
                },
                expression: "data_local.address2"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|numeric",
                  expression: "'required|numeric'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Post Code", name: "post_code" },
              model: {
                value: _vm.data_local.postalCode,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "postalCode", $$v)
                },
                expression: "data_local.postalCode"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("post_code"),
                    expression: "errors.has('post_code')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("post_code")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "City", name: "city" },
              model: {
                value: _vm.data_local.city,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "city", $$v)
                },
                expression: "data_local.city"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("city"),
                    expression: "errors.has('city')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("city")))]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
          [
            _c(
              "vs-button",
              {
                staticClass: "ml-auto mt-2",
                attrs: { disabled: !_vm.validateForm },
                on: { click: _vm.save_changes }
              },
              [_vm._v("Save Changes")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "ml-4 mt-2",
                attrs: { type: "border", color: "warning" },
                on: { click: _vm.reset_data }
              },
              [_vm._v("Reset")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=template&id=13075364&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=template&id=13075364& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user-edit-tab-info" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-twitter",
              label: "Twitter",
              "icon-no-border": "",
              name: "twitter"
            },
            model: {
              value: _vm.data_local.social_links.twitter,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "twitter", $$v)
              },
              expression: "data_local.social_links.twitter"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("twitter"),
                  expression: "errors.has('twitter')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("twitter")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-facebook",
              label: "Facebook",
              "icon-no-border": "",
              name: "facebook"
            },
            model: {
              value: _vm.data_local.social_links.facebook,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "facebook", $$v)
              },
              expression: "data_local.social_links.facebook"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("facebook"),
                  expression: "errors.has('facebook')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("facebook")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-instagram",
              label: "Instagram",
              "icon-no-border": "",
              name: "instagram"
            },
            model: {
              value: _vm.data_local.social_links.instagram,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "instagram", $$v)
              },
              expression: "data_local.social_links.instagram"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("instagram"),
                  expression: "errors.has('instagram')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("instagram")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4 md:mt-0",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-github",
              label: "GitHub",
              "icon-no-border": "",
              name: "github"
            },
            model: {
              value: _vm.data_local.social_links.github,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "github", $$v)
              },
              expression: "data_local.social_links.github"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("github"),
                  expression: "errors.has('github')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("github")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-codepen",
              label: "CodePen",
              "icon-no-border": "",
              name: "codepen"
            },
            model: {
              value: _vm.data_local.social_links.codepen,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "codepen", $$v)
              },
              expression: "data_local.social_links.codepen"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("codepen"),
                  expression: "errors.has('codepen')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("codepen")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-slack",
              label: "Slack",
              "icon-no-border": "",
              name: "slack"
            },
            model: {
              value: _vm.data_local.social_links.slack,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "slack", $$v)
              },
              expression: "data_local.social_links.slack"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("slack"),
                  expression: "errors.has('slack')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("slack")))]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
          [
            _c(
              "vs-button",
              {
                staticClass: "ml-auto mt-2",
                attrs: { disabled: !_vm.validateForm },
                on: { click: _vm.save_changes }
              },
              [_vm._v("Save Changes")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "ml-4 mt-2",
                attrs: { type: "border", color: "warning" },
                on: { click: _vm.reset_data }
              },
              [_vm._v("Reset")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerAdd_vue_vue_type_template_id_03360aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerAdd.vue?vue&type=template&id=03360aa4& */ "./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=template&id=03360aa4&");
/* harmony import */ var _CustomerAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAdd.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerAdd_vue_vue_type_template_id_03360aa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerAdd_vue_vue_type_template_id_03360aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=template&id=03360aa4&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=template&id=03360aa4& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAdd_vue_vue_type_template_id_03360aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAdd.vue?vue&type=template&id=03360aa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAdd.vue?vue&type=template&id=03360aa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAdd_vue_vue_type_template_id_03360aa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAdd_vue_vue_type_template_id_03360aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerAddTabAccount_vue_vue_type_template_id_f420a6c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerAddTabAccount.vue?vue&type=template&id=f420a6c8& */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=template&id=f420a6c8&");
/* harmony import */ var _CustomerAddTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAddTabAccount.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerAddTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerAddTabAccount_vue_vue_type_template_id_f420a6c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerAddTabAccount_vue_vue_type_template_id_f420a6c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAddTabAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=template&id=f420a6c8&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=template&id=f420a6c8& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabAccount_vue_vue_type_template_id_f420a6c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAddTabAccount.vue?vue&type=template&id=f420a6c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabAccount.vue?vue&type=template&id=f420a6c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabAccount_vue_vue_type_template_id_f420a6c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabAccount_vue_vue_type_template_id_f420a6c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerAddTabInformation_vue_vue_type_template_id_802c06ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerAddTabInformation.vue?vue&type=template&id=802c06ca& */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=template&id=802c06ca&");
/* harmony import */ var _CustomerAddTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAddTabInformation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerAddTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerAddTabInformation_vue_vue_type_template_id_802c06ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerAddTabInformation_vue_vue_type_template_id_802c06ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAddTabInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=template&id=802c06ca&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=template&id=802c06ca& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabInformation_vue_vue_type_template_id_802c06ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAddTabInformation.vue?vue&type=template&id=802c06ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabInformation.vue?vue&type=template&id=802c06ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabInformation_vue_vue_type_template_id_802c06ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabInformation_vue_vue_type_template_id_802c06ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerAddTabSocial_vue_vue_type_template_id_13075364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerAddTabSocial.vue?vue&type=template&id=13075364& */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=template&id=13075364&");
/* harmony import */ var _CustomerAddTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAddTabSocial.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerAddTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerAddTabSocial_vue_vue_type_template_id_13075364___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerAddTabSocial_vue_vue_type_template_id_13075364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAddTabSocial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=template&id=13075364&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=template&id=13075364& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabSocial_vue_vue_type_template_id_13075364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAddTabSocial.vue?vue&type=template&id=13075364& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/customer/customer-add/CustomerAddTabSocial.vue?vue&type=template&id=13075364&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabSocial_vue_vue_type_template_id_13075364___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddTabSocial_vue_vue_type_template_id_13075364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);