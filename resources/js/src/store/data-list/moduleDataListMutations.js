/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

export default {
  ADD_ITEM (state, item) {
    state.products.unshift(item)
  },
  ADD_APPLICANT (state, item) {
    state.applicants.unshift(item)
  },
  SET_PRODUCTS (state, products) {
    state.products = products
},
SET_APPLICANTS (state, applicants) {
    state.applicants = applicants
},
SET_APPLICANT (state, applicant) {
    state.applicant = applicant
},
// SET_LABELS(state, labels) {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },
  SET_CATEGORY (state, category) {
    state.category = category
  },
  SET_CUSTOMER (state, customer) {
    state.customer = customer
  },
  SET_CUSTOMERS (state, customers) {
    state.customers = customers
  },
  SET_ORDER (state, order) {
    state.order = order
  },
  SET_ORDERS (state, orders) {
    state.orders = orders
  },
  SET_PRODUCT (state, product) {
    state.product = product
  },
  //   state.eventLabels = labels
  // },
  UPDATE_PRODUCT (state, product) {
    const productIndex = state.products.findIndex((p) => p.id === product.id)
    Object.assign(state.products[productIndex], product)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.products.findIndex((p) => p.id === itemId)
    state.products.splice(ItemIndex, 1)
  },
  REMOVE_APPLICANT (state, itemId) {
    const ItemIndex = state.applicants.findIndex((p) => p.id === itemId)
    state.applicants.splice(ItemIndex, 1)
  },
  SET_BEARER (state) {
    const accessToken=localStorage.getItem('accessToken')
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  }
}
