(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/src/store/data-list/moduleDataList.js":
/*!************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleDataListState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleDataListState.js */ "./resources/js/src/store/data-list/moduleDataListState.js");
/* harmony import */ var _moduleDataListMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleDataListMutations.js */ "./resources/js/src/store/data-list/moduleDataListMutations.js");
/* harmony import */ var _moduleDataListActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleDataListActions.js */ "./resources/js/src/store/data-list/moduleDataListActions.js");
/* harmony import */ var _moduleDataListGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleDataListGetters.js */ "./resources/js/src/store/data-list/moduleDataListGetters.js");
/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleDataListState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleDataListMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleDataListActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleDataListGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListActions.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListActions.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");



/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  addItem: function addItem(_ref, item) {
    var commit = _ref.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post('/api/data-list/products/', {
        item: item
      }).then(function (response) {
        commit('ADD_ITEM', _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(item, {
          id: response.data.id
        }));
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  addApplicant: function addApplicant(_ref2, item) {
    var commit = _ref2.commit;
    // const {userDetails}= item
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      commit('SET_BEARER');
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post('/api/applicants/', {
        item: item
      }) //   axios.post('/api/applicants/', {userDetails})
      .then(function (response) {
        commit('ADD_APPLICANT', _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(item, {
          id: response.data.id
        })); //   commit('ADD_APPLICANT', Object.assign(userDetails, {id: response.data.id}))

        console.log(response.data);
        item.notify({
          title: 'Account Created',
          text: 'You are successfully registered!',
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
        resolve(response);
      }).catch(function (err) {
        item.notify({
          time: 2500,
          title: 'Error',
          text: err.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        }); // if (err.response.status === 404) {
        //     this.user_not_found = true
        //     return
        // }
        // console.error(err)
        // })
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  deleteApplicant: function deleteApplicant(_ref3, userId) {
    var commit = _ref3.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      commit('SET_BEARER');
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].delete("/api/applicants/".concat(userId)).then(function (response) {
        commit('REMOVE_APPLICANT', userId);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchDataListItems: function fetchDataListItems(_ref4) {
    var commit = _ref4.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      commit('SET_BEARER'); // axios.get('/api/data-list/products')

      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/products').then(function (response) {
        console.log(response);
        commit('SET_PRODUCTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchApplicantListItems: function fetchApplicantListItems(_ref5) {
    var commit = _ref5.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      commit('SET_BEARER'); // axios.get('/api/data-list/products')

      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/applicants').then(function (response) {
        console.log(response);
        commit('SET_APPLICANTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchCategoryListItems: function fetchCategoryListItems(_ref6) {
    var commit = _ref6.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      // axios.get('/api/data-list/products')
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/categories').then(function (response) {
        console.log(response);
        commit('SET_CATEGORIES', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchCustomerListItems: function fetchCustomerListItems(_ref7) {
    var commit = _ref7.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      // axios.get('/api/data-list/products')
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/customers').then(function (response) {
        console.log(response);
        commit('SET_CUSTOMERS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchCategoryItem: function fetchCategoryItem(_ref8, categoryId) {
    var commit = _ref8.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      // axios.get('/api/data-list/products')
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/categories/' + categoryId).then(function (response) {
        console.log(response);
        commit('SET_CATEGORY', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchCustomerItem: function fetchCustomerItem(_ref9, customerId) {
    var commit = _ref9.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      // axios.get('/api/data-list/products')
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/customers/' + customerId).then(function (response) {
        console.log(response);
        commit('SET_CUSTOMER', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchOrderItem: function fetchOrderItem(_ref10, orderId) {
    var commit = _ref10.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      // axios.get('/api/data-list/products')
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/orders/' + orderId).then(function (response) {
        console.log(response);
        commit('SET_ORDER', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchOrderListItems: function fetchOrderListItems(_ref11) {
    var commit = _ref11.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      // axios.get('/api/data-list/products')
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/orders').then(function (response) {
        console.log(response);
        commit('SET_ORDERS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchDataItem: function fetchDataItem(_ref12, userId) {
    var commit = _ref12.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      // axios.get('/api/data-list/products')
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/products/' + userId).then(function (response) {
        console.log(response);
        commit('SET_PRODUCT', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchApplicantItem: function fetchApplicantItem(_ref13, userId) {
    var commit = _ref13.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      commit('SET_BEARER'); // axios.get('/api/data-list/products')

      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get('/api/applicants/' + userId).then(function (response) {
        console.log(response);
        commit('SET_APPLICANT', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // fetchEventLabels({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get("/api/apps/calendar/labels")
  //       .then((response) => {
  //         commit('SET_LABELS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  updateItem: function updateItem(_ref14, item) {
    var commit = _ref14.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/data-list/products/".concat(item.id), {
        item: item
      }).then(function (response) {
        commit('UPDATE_PRODUCT', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  removeItem: function removeItem(_ref15, itemId) {
    var commit = _ref15.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].delete("/api/data-list/products/".concat(itemId)).then(function (response) {
        commit('REMOVE_ITEM', itemId);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  } // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {
  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)
  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

});

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListGetters.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListGetters.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({// getItem: state => (productId) => state.products.find((product) => product.id == productId),
});

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListMutations.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListMutations.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");


/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  ADD_ITEM: function ADD_ITEM(state, item) {
    state.products.unshift(item);
  },
  ADD_APPLICANT: function ADD_APPLICANT(state, item) {
    state.applicants.unshift(item);
  },
  SET_PRODUCTS: function SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_APPLICANTS: function SET_APPLICANTS(state, applicants) {
    state.applicants = applicants;
  },
  SET_APPLICANT: function SET_APPLICANT(state, applicant) {
    state.applicant = applicant;
  },
  // SET_LABELS(state, labels) {
  SET_CATEGORIES: function SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_CATEGORY: function SET_CATEGORY(state, category) {
    state.category = category;
  },
  SET_CUSTOMER: function SET_CUSTOMER(state, customer) {
    state.customer = customer;
  },
  SET_CUSTOMERS: function SET_CUSTOMERS(state, customers) {
    state.customers = customers;
  },
  SET_ORDER: function SET_ORDER(state, order) {
    state.order = order;
  },
  SET_ORDERS: function SET_ORDERS(state, orders) {
    state.orders = orders;
  },
  SET_PRODUCT: function SET_PRODUCT(state, product) {
    state.product = product;
  },
  //   state.eventLabels = labels
  // },
  UPDATE_PRODUCT: function UPDATE_PRODUCT(state, product) {
    var productIndex = state.products.findIndex(function (p) {
      return p.id === product.id;
    });

    _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(state.products[productIndex], product);
  },
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.products.findIndex(function (p) {
      return p.id === itemId;
    });
    state.products.splice(ItemIndex, 1);
  },
  REMOVE_APPLICANT: function REMOVE_APPLICANT(state, itemId) {
    var ItemIndex = state.applicants.findIndex(function (p) {
      return p.id === itemId;
    });
    state.applicants.splice(ItemIndex, 1);
  },
  SET_BEARER: function SET_BEARER(state) {
    var accessToken = localStorage.getItem('accessToken');
    _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.common['Authorization'] = "Bearer ".concat(accessToken);
  }
});

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListState.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListState.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  products: [],
  categories: [],
  customers: [],
  customer: [],
  category: [],
  product: [],
  order: [],
  orders: [],
  applicants: [],
  applicant: []
});

/***/ })

}]);