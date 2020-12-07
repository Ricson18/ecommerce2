<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="clearfix">
    <!-- <upload-default></upload-default> -->

    <vs-input
      type="file" 
      label-placeholder="Photo"
      placeholder="Photo"
      data-vv-validate-on="blur"
      name="image"
      v-model="image"
      class="w-full" />
    <span class="text-danger text-sm">{{ errors.first('image') }}</span>

    <vs-input
      v-validate="'required|min:3'"
      data-vv-validate-on="blur"
      label-placeholder="Name"
      name="name"
      placeholder="Name"
      v-model="name"
      class="w-full" />
    <span class="text-danger text-sm">{{ errors.first('name') }}</span>

    <vs-input
      v-validate="'required'"
      data-vv-validate-on="blur"
      name="country"
      type="country"
      label-placeholder="Country of Residence"
      placeholder="Country of Residence"
      v-model="country"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('country') }}</span>

    <vs-input
      v-validate="'required'"
      data-vv-validate-on="blur"
      name="skype_id"
      type="text"
      label-placeholder="Skype ID"
      placeholder="Skype ID"
      v-model="skype_id"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('skype_id') }}</span>

    <!-- <vs-input
      v-validate="'required|email'"
      data-vv-validate-on="blur"
      name="email"
      type="email"
      label-placeholder="Email"
      placeholder="Email"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('email') }}</span> -->

    <vs-textarea
      ref="about"
      data-vv-validate-on="blur"
      v-validate="'required|min:6'"
      name="about"
      label-placeholder="About"
      placeholder="About"
      v-model="about"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('about') }}</span>

    <!-- <vs-input
      ref="password"
      type="password"
      data-vv-validate-on="blur"
      v-validate="'required|min:6|max:10'"
      name="password"
      label-placeholder="Password"
      placeholder="Password"
      v-model="password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span> -->


    <!-- <vs-input
      type="password"
      v-validate="'min:6|max:10|confirmed:password'"
      data-vv-validate-on="blur"
      data-vv-as="password"
      name="confirm_password"
      label-placeholder="Confirm Password"
      placeholder="Confirm Password"
      v-model="confirm_password"
      class="w-full mt-6" /> -->
    <!-- <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span> -->

    <!-- <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">I accept the terms & conditions.</vs-checkbox> -->
    <!-- <vs-button  type="border" to="/pages/login" class="mt-6">Login</vs-button> -->
    <vs-button class="float-left mt-6" @click="registerUserJWt" :disabled="!validateForm">Apply</vs-button>
    <!-- <vs-button class="float-right mt-6" @click="registerUserJWt" :disabled="!validateForm">Register</vs-button> -->
  </div>
</template>

<script>
import UploadDefault from '@/views/components/vuesax/upload/UploadDefault.vue';
import moduleDataList from '@/store/data-list/moduleDataList.js'
// import axios from '@/axios.js';
// import UploadDefault from '../UploadDefault.vue'

export default {
  data () {
    return {
      name: '',
      country: '',
      about: '',
      skype_id: '',
      image: '',
      isTermsConditionAccepted: true
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.name !== '' && this.country !== '' && this.skype_id !== '' && this.about !== ''
    //    && this.isTermsConditionAccepted === true
    },
    applicants () {
      return this.$store.state.dataList.applicants
    },
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    registerUserJWt () {
      // If form is not validated or user is already login return
      if (!this.validateForm) return
    //   if (!this.validateForm || !this.checkLogin()) return

      const payload = {
        userDetails: {
          name: this.name,
          country: this.country,
          about: this.about,
          skype_id: this.skype_id,
          image: this.image
        },
        notify: this.$vs.notify
      }
        if (!moduleDataList.isRegistered) {
            this.$store.registerModule('dataList', moduleDataList)
            moduleDataList.isRegistered = true
        }

      this.$store.dispatch('dataList/addApplicant', payload)
        // .then(res => { 
        //     alert()
        //     // this.user_data = res.data 
        //     payload.notify({
        //         title: 'Account Created',
        //         text: 'You are successfully registered!',
        //         iconPack: 'feather',
        //         icon: 'icon-check',
        //         color: 'success'
        //     })
        // })
        // .catch(err => {
        //     payload.notify({
        //         time: 2500,
        //         title: 'Error',
        //         text: err.message,
        //         iconPack: 'feather',
        //         icon: 'icon-alert-circle',
        //         color: 'danger'
        //     })
        //     // if (err.response.status === 404) {
        //     //     this.user_not_found = true
        //     //     return
        //     // }
        //     // console.error(err) 
        //     })
        
    //   this.$store.dispatch('auth/registerUserJWT', payload)
    },
    created () {
        if (!moduleDataList.isRegistered) {
            this.$store.registerModule('dataList', moduleDataList)
            moduleDataList.isRegistered = true
        }

        // const userId = this.$route.params.userId

        // this.$store.dispatch('dataList/fetchApplicantItem', userId)
        // .then(res => { this.user_data = res.data })
        // .catch(err => {
        //     if (err.response.status === 404) {
        //     this.user_not_found = true
        //     return
        //     }
        //     console.error(err) 
        // })

        // this.$store.dispatch('dataList/fetchApplicantListItems')
    },
    mounted () {
        this.isMounted = true
    }
  },
  components: {
    UploadDefault
  }
}
</script>
