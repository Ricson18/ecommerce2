/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '../../http/axios/index.js'

export default {
  SET_BEARER (state, accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },  
  UPDATE_USER_INFO (state, userData) {
    // state.userData=userData;
    const userInfo = {}
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // const userInfo = JSON.parse(localStorage.getItem('userInfo')) || state.AppActiveUser

    for (const property of Object.keys(userData)) {

      if (userData[property] !== null) {
        // If some of user property is null - user default property defined in state.AppActiveUser
        state.AppActiveUser[property] = userData[property]

        // Update key in localStorage
        userInfo[property] = userData[property]
      }


    }
    // Store data in localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
}
