<!-- =========================================================================================
  File Name: UserAdd.vue
  Description: User add Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-add">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <vx-card v-if="user_data">

      <div slot="no-body" class="tabs-container px-6 pt-6">

        <vs-tabs v-model="activeTab" class="tab-action-btn-fill-conatiner">
          <vs-tab label="Account" icon-pack="feather" icon="icon-user">
            <div class="tab-text">
              <user-add-tab-account class="mt-4" :data="user_data" />
            </div>
          </vs-tab>
          <!-- <vs-tab label="Information" icon-pack="feather" icon="icon-info">
            <div class="tab-text">
              <user-add-tab-information class="mt-4" :data="user_data" />
            </div>
          </vs-tab> -->
          <!-- <vs-tab label="Social" icon-pack="feather" icon="icon-share-2">
            <div class="tab-text">
              <user-add-tab-social class="mt-4" :data="user_data" />
            </div>
          </vs-tab> -->
        </vs-tabs>

      </div>

    </vx-card>
  </div>
</template>

<script>
import UserAddTabAccount     from './UserAddTabAccount.vue'
import UserAddTabInformation from './UserAddTabInformation.vue'
import UserAddTabSocial      from './UserAddTabSocial.vue'

// Store Module
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'

export default {
  components: {
    UserAddTabAccount,
    UserAddTabInformation,
    UserAddTabSocial
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
        return 1;        
    //   this.fetch_user_data(this.$route.params.userId)
    }
  },
  methods: {
    // fetch_user_data (userId) {
    //   this.$store.dispatch('userManagement/fetchUser', userId)
    //     .then(res => { this.user_data = res.data })
    //     .catch(err => {
    //       if (err.response.status === 404) {
    //         this.user_not_found = true
    //         return
    //       }
    //       console.error(err) 
    //     })
    // }
  },
  created () {
    // Register Module UserManagement Module
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }
    // this.fetch_user_data(this.$route.params.userId)
    this.user_data={
        name:'',
        status:'',
        email:'',
        role:'',
        dob:'',
        phone:'',
        gender:'',
        address:'',
        city:'',
        state:'',
        country:'',
        avatar:'',
        desc:''
      };
  }
}

</script>
