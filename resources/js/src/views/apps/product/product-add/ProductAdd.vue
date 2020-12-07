<!-- =========================================================================================
  File Name: UserEdit.vue
  Description: User Edit Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-edit">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <vx-card v-if="user_data">

      <div slot="no-body" class="tabs-container px-6 pt-6">

        <vs-tabs v-model="activeTab" class="tab-action-btn-fill-conatiner">
          <vs-tab label="Create Product" icon-pack="feather" icon="icon-user">
            <div class="tab-text">
              <product-add-tab-account class="mt-4" :data="user_data" />
            </div>
          </vs-tab>
          <!-- <vs-tab label="Information" icon-pack="feather" icon="icon-info">
            <div class="tab-text">
              <product-add-tab-information class="mt-4" :data="user_data" />
            </div>
          </vs-tab>
          <vs-tab label="Social" icon-pack="feather" icon="icon-share-2">
            <div class="tab-text">
              <product-add-tab-social class="mt-4" :data="user_data" />
            </div>
          </vs-tab> -->
        </vs-tabs>

      </div>

    </vx-card>
  </div>
</template>

<script>
import ProductAddTabAccount     from './ProductAddTabAccount.vue'
import ProductAddTabInformation from './ProductAddTabInformation.vue'
import ProductAddTabSocial      from './ProductAddTabSocial.vue'

// Store Module
import moduleDataList from '@/store/data-list/moduleDataList.js'
// import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'

export default {
  components: {
    ProductAddTabAccount,
    ProductAddTabInformation,
    ProductAddTabSocial
  },
  data () {
    return {
      user_data: null,
      user_not_found: false,

      /*
        This property is created for fetching latest data from API when tab is changed

        Please check it's watcher
      */
      activeTab: 0
    }
  },
  watch: {
    activeTab () {
      // this.fetch_user_data(this.$route.params.id)
      // this.fetch_user_data(this.$route.params.userId)
      // this.user_data=null;
      this.user_data={
        name:'',
        price:'',
        quantity:'',
        slug:'',
        desc:'',
        desc:''
      };
    }
  },
  methods: {
    fetch_user_data (userId) {
      this.user_data={
        name:'', price:'',quantity:'',
        slug:'', desc:'', desc:''
      };
    //   this.$store.dispatch('dataList/fetchDataItem', userId)
    //     .then(res => { this.user_data = res.data })
    //     .catch(err => {
    //       if (err.response.status === 404) {
    //         this.user_not_found = true
    //         return
    //       }
    //       console.error(err) 
    //     })
    }
  },
  created () {
    // Register Module UserManagement Module
    if (!moduleDataList.isRegistered) {
    // if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      // this.$store.registerModule('userManagement', moduleUserManagement)
      moduleDataList.isRegistered = true
    }
    // this.fetch_user_data(this.$route.params.id)
    // console.log(this.$route.params.id)
    
    // this.fetch_user_data(this.$route.params.userId)
    this.user_data={
        name:'',
        price:'',
        quantity:'',
        slug:'',
        desc:'',
        desc:''
      };
  }
}

</script>
