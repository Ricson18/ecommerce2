<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-view">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <div id="user-data" v-if="user_data">

      <vx-card title="Order" class="mb-base">

        <!-- Avatar -->
        <div class="vx-row">

          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="user_data.image" class="rounded w-full" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <!-- <tr>
                <td class="font-semibold">Username</td>
                <td>{{ user_data.username }}</td>
              </tr> -->
              <tr>
                <td class="font-semibold">Customer Name</td>
                <td>{{ user_data.customer.fname }} {{ user_data.customer.lname }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Status</td>
                <td>{{ user_data.transactStatus?'true':'false' }}</td>
                <!-- <td>{{ user_data.status }}</td> -->
              </tr>
              <tr>
                <td class="font-semibold">Payment Type</td>
                <td>{{ user_data.paymentType }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Date</td>
                <td>{{ user_data.created_at }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Billing city</td>
                <td>{{ user_data.customer.billingCity }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Billing Address1</td>
                <td>{{ user_data.customer.billingAddress1 }}</td>
              </tr>
              
              
              <!-- <tr>
                <td class="font-semibold">Stock</td>
                <td>{{ user_data.stock }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Description</td>
                <td>{{ user_data.desc }}</td>
              </tr> -->
              
              <!-- <tr>
                <td class="font-semibold">Stock</td>
                <td>{{ user_data.stock }}</td>
              </tr> -->
              <!-- <tr>
                <td class="font-semibold">Email</td>
                <td>{{ user_data.email }}</td>
              </tr> -->
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Billing country</td>
                <td>{{ user_data.customer.billingCountry }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Billing postal code</td>
                <td>{{ user_data.customer.billingPostalCode }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Billing email</td>
                <td>{{ user_data.customer.billingEmail }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Email</td>
                <td>{{ user_data.customer.email }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Phone</td>
                <td>{{ user_data.customer.phone }}</td>
              </tr> 

              <!-- <tr> -->
              <!-- <tr v-for="user_data as product" v-bind:key="order_detail.id"> -->
                <!-- <td class="font-semibold">Product Name</td>
                <td>{{ user_data.category.name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Company</td>
                <td>{{ user_data.company }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Short Description</td>
                <td>{{ user_data.shortDesc }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Slug</td>
                <td>{{ user_data.slug }}</td>
              </tr> -->
            </table>
          </div>
          <!-- /Information - Col 2 -->
          <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button icon-pack="feather" icon="icon-edit" class="mr-4" :to="{name: 'app-order-edit', params: { userId: $route.params.userId }}">Edit</vs-button>
            <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord">Delete</vs-button>
          </div>

        </div>







  <div style="margin-top:50px;">
    <vs-table>
      <vs-tr>
        <vs-th>Product Name</vs-th>
        <vs-th>Quantity</vs-th>
        <vs-th>Amount</vs-th>
      </vs-tr>
      <vs-tr :key="tr.id" v-for="tr in user_data.order_detail" >
        <vs-td>{{tr.products.name}}</vs-td>
        <vs-td>{{tr.qtyOrdered}}</vs-td>
        <vs-td>${{tr.amount}}</vs-td>
      </vs-tr>
    </vs-table>
  </div>












      </vx-card>

      <!-- <div class="vx-row">
        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Information" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Birth Date</td>
                <td>{{ user_data.dob }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Mobile</td>
                <td>{{ user_data.mobile }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Website</td>
                <td>{{ user_data.website }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Languages</td>
                <td>{{ user_data.languages_known.join(", ") }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Gender</td>
                <td>{{ user_data.gender }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Contact</td>
                <td>{{ user_data.contact_options.join(", ") }}</td>
              </tr>
            </table>
          </vx-card>
        </div>

        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Social Links" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Twitter</td>
                <td>{{ user_data.social_links.twitter }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Facebook</td>
                <td>{{ user_data.social_links.facebook }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Instagram</td>
                <td>{{ user_data.social_links.instagram }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Github</td>
                <td>{{ user_data.social_links.github }}</td>
              </tr>
              <tr>
                <td class="font-semibold">CodePen</td>
                <td>{{ user_data.social_links.codepen }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Slack</td>
                <td>{{ user_data.social_links.slack }}</td>
              </tr>
            </table>
          </vx-card>
        </div>
      </div> -->

      <!-- Permissions -->
      <!-- <vx-card>

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
          <table class="w-full permissions-table">
            <tr> -->
              <!--
                You can also use `Object.keys(Object.values(data_local.permissions)[0])` this logic if you consider,
                our data structure. You just have to loop over above variable to get table headers.
                Below we made it simple. So, everyone can understand.
               -->
              <!-- <th class="font-semibold text-base text-left px-3 py-2" v-for="heading in ['Module', 'Read', 'Write', 'Create', 'Delete']" :key="heading">{{ heading }}</th>
            </tr>

            <tr v-for="(val, name) in user_data.permissions" :key="name">
              <td class="px-3 py-2">{{ name }}</td>
              <td v-for="(permission, name) in val" class="px-3 py-2" :key="name+permission">
                <vs-checkbox v-model="val[name]" class="pointer-events-none" />
              </td>
            </tr>
          </table>
        </div>

      </vx-card> -->
    </div>
  </div>
</template>

<script>
import moduleDataList from '@/store/data-list/moduleDataList.js'

export default {
  data () {
    return {
      user_data: null,
      user_not_found: false
    }
  },
  computed: {
    userAddress () {
      let str = ''
      for (const field in this.user_data.location) {
        str += `${field  } `
      }
      return str
    }
  },
  methods: {
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${this.user_data.name}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      this.$router.push({name:'app-order-list'})
      this.showDeleteSuccess()

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.user_data.id)
      //   .then(()   => { this.$router.push({name:'app-user-list'}); this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Order Deleted',
        text: 'The selected order was successfully deleted'
      })
    }
  },
  created () {
    // Register Module UserManagement Module
    if (!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }

    const userId = this.$route.params.userId

    this.$store.dispatch('dataList/fetchOrderItem', userId)
      .then(res => { this.user_data = res.data })
      .catch(err => {
        if (err.response.status === 404) {
          this.user_not_found = true
          return
        }
        console.error(err) 
      })
  }
}

</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }
}

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }


@media screen and (min-width:1201px) and (max-width:1211px),
only screen and (min-width:636px) and (max-width:991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }

}

</style>
