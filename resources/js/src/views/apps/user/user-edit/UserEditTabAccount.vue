<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">

    <!-- Avatar Row -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="flex items-start flex-col sm:flex-row">
          <img :src="data.image" class="mr-8 rounded h-24 w-24" id="my_image" />
          <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
          <div>
            <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">{{ data.fname  }} {{ data.lname  }}</p>
            <input type="file" class="hidden" ref="update_avatar_input" @change="update_avatar" accept="image/*">

            <!-- Toggle comment of below buttons as one for actual flow & currently shown is only for demo -->
            <!-- <vs-button class="mr-4 mb-4">Change Avatar</vs-button> -->
            <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button>

            <!-- <vs-button type="border" color="danger">Remove Avatar</vs-button> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Content Row -->
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <!-- <vs-input class="w-full mt-4" label="Username" v-model="data_local.username" v-validate="'required|alpha_num'" name="username" />
        <span class="text-danger text-sm"  v-show="errors.has('username')">{{ errors.first('username') }}</span> -->

        <vs-input class="w-full mt-4" label="First Name" v-model="data_local.fname" v-validate="'required|alpha_spaces'" name="fname" />
        <span class="text-danger text-sm"  v-show="errors.has('fname')">{{ errors.first('fname') }}</span>

        <vs-input class="w-full mt-4" label="Email" v-model="data_local.email" type="email" v-validate="'required|email'" name="email" />
        <span class="text-danger text-sm"  v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>

      <div class="vx-col md:w-1/2 w-full">

        <vs-input class="w-full mt-4" label="Last Name" v-model="data_local.lname" v-validate="'required|alpha_spaces'" name="lname" />
        <span class="text-danger text-sm"  v-show="errors.has('lname')">{{ errors.first('lname') }}</span>

        <!-- <div class="mt-4">
          <label class="vs-input--label">Status</label>
          <v-select v-model="status_local" :clearable="false" :options="statusOptions" v-validate="'required'" name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('status')">{{ errors.first('status') }}</span>
        </div> -->

        <div class="mt-4">
          <label class="vs-input--label">Role</label>
          <v-select v-model="role_local" :clearable="false" :options="roleOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
        </div>

        <!-- <vs-input class="w-full mt-4" label="Company" v-model="data_local.company" v-validate="'alpha_spaces'" name="company" />
        <span class="text-danger text-sm"  v-show="errors.has('company')">{{ errors.first('company') }}</span> -->

      </div>
    </div>

    <!-- Permissions -->
    <!-- <vx-card class="mt-base" no-shadow card-border>

      <div class="vx-row">
        <div class="vx-col w-full">
          <div class="flex items-end px-3">
            <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
            <span class="font-medium text-lg leading-none">Permissions</span>
          </div>
          <vs-divider />
        </div>
      </div>

      <div class="block overflow-x-auto">
        <table class="w-full">
          <tr> -->
            <!--
              You can also use `Object.keys(Object.values(data_local.permissions)[0])` this logic if you consider,
              our data structure. You just have to loop over above variable to get table headers.
              Below we made it simple. So, everyone can understand.
             -->
            <!-- <th class="font-semibold text-base text-left px-3 py-2" v-for="heading in ['Module', 'Read', 'Write', 'Create', 'Delete']" :key="heading">{{ heading }}</th>
          </tr>

          <tr v-for="(val, name) in data_local.permissions" :key="name">
            <td class="px-3 py-2">{{ name }}</td>
            <td v-for="(permission, name) in val" class="px-3 py-2" :key="name+permission">
              <vs-checkbox v-model="val[name]" />
            </td>
          </tr>
        </table>
      </div>

    </vx-card> -->

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="save_changes" :disabled="!validateForm">Save Changes</vs-button>
          <vs-button class="ml-4 mt-2" type="border" color="warning" @click="reset_data">Reset</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import axios from '@/axios.js'

export default {
  components: {
    vSelect
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

      data_local: JSON.parse(JSON.stringify(this.data)),

      statusOptions: [
        { label: 'Active',  value: 'active' },
        { label: 'Blocked',  value: 'blocked' },
        { label: 'Deactivated',  value: 'deactivated' }
      ],
      roleOptions: [
        { label: 'Admin',  value: 'admin' },
        // { label: 'User',  value: 'user' },
        { label: 'Staff',  value: 'staff' }
      ]
    }
  },
  computed: {
    // full_name: {
    //     get(){
    //         return this.data_local.fname +' '+ this.data_local.fname
    //     },
    //     set (obj) {
    //         this.data_local.fname=obj.value
    //         // this.data_local.fname=obj.value.fname
    //         // this.data_local.lname=obj.value.lname
    //   }
    // },
    status_local: {
      get () {
        return { label: this.capitalize(this.data_local.status),  value: this.data_local.status  }
      },
      set (obj) {
        this.data_local.status = obj.value
      }
    },
    role_local: {
      get () {
        return { label: this.capitalize(this.data_local.role),  value: this.data_local.role  }
      },
      set (obj) {
        this.data_local.role = obj.value
      }
    },
    validateForm () {
      return !this.errors.any()
    }
  },
  methods: {
    capitalize (str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
    },
    save_changes () {
      /* eslint-disable */
      if (!this.validateForm) return

      this.data_local.status='Active'
      // Here will go your API call for updating data
      // You can get data in "this.data_local"
      const payload = {
        userDetails: this.data_local,
        notify: this.$vs.notify
      }
// api/user-management/users/1
      axios.put('/api/user-management/users/'+this.data_local.id,payload.userDetails)
    //   axios.put('api/user-management/users/'+this.data_local.id,payload.userDetails)
    //   axios.post('api/user-management/users/'+this.data_local.id,payload)
    //   axios.post('api/user-management/users/'+this.data_local.id,payload)
    //   axios.put('api/user-management/users',payload)
    //   axios.post('api/user-management/users',payload)
      .then((result) => {
          
          payload.notify({
            title: 'User Updated',
            text: 'User has been updated!',
            iconPack: 'feather',
            icon: 'icon-check',
            color: 'success'
        })
        
            // if (err.response.status === 404) {
            //     this.user_not_found = true
            //     return
            // }
            // console.error(err) 
        
      })
      .catch(err => {
            payload.notify({
                time: 2500,
                title: 'Error',
                text: "User not updated",
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
            })
        })
      /* eslint-enable */
    },
    reset_data () {
      this.data_local = JSON.parse(JSON.stringify(this.data))
    },
    update_avatar (e) {
        var file = e.target.files[0]; 

        // setting up the reader
        var reader = new FileReader();
        reader.readAsDataURL(file); // this is reading as data url
        reader.onload = readerEvent => {
            var content = readerEvent.target.result; // this is the content!
            document.querySelector('#my_image').src = content;
        }
    }
  }
}
</script>
