/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/data-list/products/', {item})
        .then((response) => {
          commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  addApplicant ({ commit }, item) {
    // const {userDetails}= item
    return new Promise((resolve, reject) => {
        commit('SET_BEARER')
      axios.post('/api/applicants/', {item})
    //   axios.post('/api/applicants/', {userDetails})
        .then((response) => {
          commit('ADD_APPLICANT', Object.assign(item, {id: response.data.id}))
        //   commit('ADD_APPLICANT', Object.assign(userDetails, {id: response.data.id}))
            console.log(response.data);
            item.notify({
                title: 'Account Created',
                text: 'You are successfully registered!',
                iconPack: 'feather',
                icon: 'icon-check',
                color: 'success'
            })
            resolve(response)
        })
        .catch(err => {
            item.notify({
                time: 2500,
                title: 'Error',
                text: err.message,
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
            })
            // if (err.response.status === 404) {
            //     this.user_not_found = true
            //     return
            // }
            // console.error(err)
        // })

        })
        .catch((error) => {
            reject(error)
        })
    })
  },
  deleteApplicant ({ commit }, userId) {
    return new Promise((resolve, reject) => {
      commit('SET_BEARER')
      axios.delete(`/api/applicants/${userId}`)
        .then((response) => {
          commit('REMOVE_APPLICANT', userId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataListItems ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_BEARER')
      // axios.get('/api/data-list/products')
      axios.get('/api/products')
        .then((response) => {
          console.log(response)

          commit('SET_PRODUCTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchApplicantListItems ({ commit }) {
    return new Promise((resolve, reject) => {
        commit('SET_BEARER')
      // axios.get('/api/data-list/products')
      axios.get('/api/applicants')
        .then((response) => {
          console.log(response)

          commit('SET_APPLICANTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchCategoryListItems ({ commit }) {
    return new Promise((resolve, reject) => {
      // axios.get('/api/data-list/products')
      axios.get('/api/categories')
        .then((response) => {
          console.log(response)

          commit('SET_CATEGORIES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchCustomerListItems ({ commit }) {
    return new Promise((resolve, reject) => {
      // axios.get('/api/data-list/products')
      axios.get('/api/customers')
        .then((response) => {
          console.log(response)

          commit('SET_CUSTOMERS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchCategoryItem ({ commit },categoryId) {
    return new Promise((resolve, reject) => {
      // axios.get('/api/data-list/products')
      axios.get('/api/categories/'+categoryId)
        .then((response) => {
          console.log(response)

          commit('SET_CATEGORY', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchCustomerItem ({ commit },customerId) {
    return new Promise((resolve, reject) => {
      // axios.get('/api/data-list/products')
      axios.get('/api/customers/'+customerId)
        .then((response) => {
          console.log(response)

          commit('SET_CUSTOMER', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchOrderItem ({ commit },orderId) {
    return new Promise((resolve, reject) => {
      // axios.get('/api/data-list/products')
      axios.get('/api/orders/'+orderId)
        .then((response) => {
          console.log(response)

          commit('SET_ORDER', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchOrderListItems ({ commit }) {
    return new Promise((resolve, reject) => {
      // axios.get('/api/data-list/products')
      axios.get('/api/orders')
        .then((response) => {
          console.log(response)

          commit('SET_ORDERS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataItem ({ commit },userId) {
    return new Promise((resolve, reject) => {
      // axios.get('/api/data-list/products')
      axios.get('/api/products/'+userId)
        .then((response) => {
          console.log(response)

          commit('SET_PRODUCT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchApplicantItem ({ commit },userId) {
    return new Promise((resolve, reject) => {
        commit('SET_BEARER')
      // axios.get('/api/data-list/products')
      axios.get('/api/applicants/'+userId)
        .then((response) => {
          console.log(response)

          commit('SET_APPLICANT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
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
  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/data-list/products/${item.id}`, {item})
        .then((response) => {
          commit('UPDATE_PRODUCT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/data-list/products/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
  // eventDragged({ commit }, payload) {
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
}
