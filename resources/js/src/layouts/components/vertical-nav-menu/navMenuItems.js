/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
//   {
//     url: null,
//     name: 'Dashboard',
//     tag: '2',
//     tagColor: 'warning',
//     icon: 'HomeIcon',
//     i18n: 'Dashboard',
//     submenu: [
//       {
//         url: '/dashboard/analytics',
//         name: 'Analytics',
//         slug: 'dashboard-analytics',
//         i18n: 'Analytics'
//       },
//       {
//         url: '/dashboard/ecommerce',
//         name: 'eCommerce',
//         slug: 'dashboard-ecommerce',
//         i18n: 'eCommerce'
//       }
//     ]
//   },
  {
    header: 'Apps',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [
      // {
      //   url: '/apps/email',
      //   name: 'Email',
      //   slug: 'email',
      //   icon: 'MailIcon',
      //   i18n: 'Email'
      // },
      // {
      //   url: null,
      //   name: 'eCommerce',
      //   icon: 'ShoppingCartIcon',
      //   i18n: 'eCommerce',
      //   submenu: [
      //     {
      //       url: '/apps/eCommerce/shop',
      //       name: 'Shop',
      //       slug: 'ecommerce-shop',
      //       i18n: 'Shop'
      //     },
      //     {
      //       url: '/apps/eCommerce/item/',
      //       name: 'Item Details',
      //       slug: 'ecommerce-item-detail-view',
      //       i18n: 'ItemDetails'
      //     },
      //     {
      //       url: '/apps/eCommerce/wish-list',
      //       name: 'Wish List',
      //       slug: 'ecommerce-wish-list',
      //       i18n: 'WishList'
      //     },
      //     {
      //       url: '/apps/eCommerce/checkout',
      //       name: 'Checkout',
      //       slug: 'ecommerce-checkout',
      //       i18n: 'Checkout'
      //     }
      //   ]
      // },
      {
        name: 'User',
        icon: 'UserIcon',
        i18n: 'User',
        url: '/apps/user/user-list'
        // submenu: [
        //   {
        //     url: '/apps/user/user-list',
        //     name: 'List',
        //     slug: 'app-user-list',
        //     i18n: 'List'
        //   },
        //   {
        //     url: '/apps/user/user-view/268',
        //     name: 'View',
        //     slug: 'app-user-view',
        //     i18n: 'View'
        //   },
        //   {
        //     url: '/apps/user/user-edit/268',
        //     name: 'Edit',
        //     slug: 'app-user-edit',
        //     i18n: 'Edit'
        //   }
        // ]
      },
    //   {
    //     // url: null,
    //     name: 'Products',
    //     icon: 'UserIcon',
    //     i18n: 'Products',
    //     url:'/apps/product/product-list',
    //     slug: 'app-product-list'
    //     // submenu: [
    //     //   {
    //     //     url: '/apps/product/product-list',
    //     //     name: 'Product',
    //     //     slug: 'app-product-list',
    //     //     i18n: 'List'
    //     //   },
    //     //   {
    //     //     url: '/apps/product/product-view/268',
    //     //     name: 'View',
    //     //     slug: 'app-product-view',
    //     //     i18n: 'View'
    //     //   },
    //     //   {
    //     //     url: '/apps/product/product-edit/268',
    //     //     name: 'Edit',
    //     //     slug: 'app-product-edit',
    //     //     i18n: 'Edit'
    //     //   }
    //     // ]
    //   },
    //   {
    //     // url: null,
    //     name: 'Category',
    //     icon: 'UserIcon',
    //     i18n: 'Category',
    //     url: '/apps/category/category-list',
    //     slug: 'app-category-list'
    //     // submenu: [
    //     //   {
    //     //     url: '/apps/category/category-list',
    //     //     name: 'Category',
    //     //     slug: 'app-category-list',
    //     //     i18n: 'List'
    //     //   },
    //     //   {
    //     //     url: '/apps/category/category-view/268',
    //     //     name: 'View',
    //     //     slug: 'app-category-view',
    //     //     i18n: 'View'
    //     //   },
    //     //   {
    //     //     url: '/apps/category/category-edit/268',
    //     //     name: 'Edit',
    //     //     slug: 'app-category-edit',
    //     //     i18n: 'Edit'
    //     //   }
    //     // ]
    //   },
      {
        // url: null,
        name: 'Applicant',
        icon: 'UserIcon',
        i18n: 'Applicant',
        url: '/apps/applicant/applicant-list',
        slug: 'app-applicant-list'
        // submenu: [
        //   {
        //     url: '/apps/customer/customer-list',
        //     name: 'Customer',
        //     slug: 'app-customer-list',
        //     i18n: 'List'
        //   },
        //   {
        //     url: '/apps/customer/customer-view/268',
        //     name: 'View',
        //     slug: 'app-customer-view',
        //     i18n: 'View'
        //   },
        //   {
        //     url: '/apps/customer/customer-edit/268',
        //     name: 'Edit',
        //     slug: 'app-customer-edit',
        //     i18n: 'Edit'
        //   }
        // ]
      },
    //   {
    //     // url: null,
    //     name: 'Customer',
    //     icon: 'UserIcon',
    //     i18n: 'Customer',
    //     url: '/apps/customer/customer-list',
    //     slug: 'app-customer-list'
    //     // submenu: [
    //     //   {
    //     //     url: '/apps/customer/customer-list',
    //     //     name: 'Customer',
    //     //     slug: 'app-customer-list',
    //     //     i18n: 'List'
    //     //   },
    //     //   {
    //     //     url: '/apps/customer/customer-view/268',
    //     //     name: 'View',
    //     //     slug: 'app-customer-view',
    //     //     i18n: 'View'
    //     //   },
    //     //   {
    //     //     url: '/apps/customer/customer-edit/268',
    //     //     name: 'Edit',
    //     //     slug: 'app-customer-edit',
    //     //     i18n: 'Edit'
    //     //   }
    //     // ]
    //   },
    //   {
    //     // url: null,
    //     name: 'Order',
    //     icon: 'UserIcon',
    //     i18n: 'Order',
    //     url: '/apps/order/order-list',
    //     slug: 'app-order-list'
    //     // submenu: [
    //     //   {
    //     //     url: '/apps/customer/customer-list',
    //     //     name: 'Customer',
    //     //     slug: 'app-customer-list',
    //     //     i18n: 'List'
    //     //   },
    //     //   {
    //     //     url: '/apps/customer/customer-view/268',
    //     //     name: 'View',
    //     //     slug: 'app-customer-view',
    //     //     i18n: 'View'
    //     //   },
    //     //   {
    //     //     url: '/apps/customer/customer-edit/268',
    //     //     name: 'Edit',
    //     //     slug: 'app-customer-edit',
    //     //     i18n: 'Edit'
    //     //   }
    //     // ]
    //   }

    ]
  },
//   {
//     header: 'Forms & Table',
//     icon: 'Edit3Icon',
//     i18n: 'FormsAndTable',
//     items: [
//       {
//         url: null,
//         name: 'Authentication',
//         icon: 'PieChartIcon',
//         i18n: 'Authentication',
//         submenu: [
//           {
//             url: '/pages/login',
//             name: 'Login',
//             slug: 'pages-login',
//             i18n: 'Login',
//             target: '_blank'
//           },
//           {
//             url: '/pages/register',
//             name: 'Register',
//             slug: 'pages-register',
//             i18n: 'Register',
//             target: '_blank'
//           },
//           {
//             url: '/pages/forgot-password',
//             name: 'Forgot Password',
//             slug: 'pages-forgot-password',
//             i18n: 'ForgotPassword',
//             target: '_blank'
//           },
//           {
//             url: '/pages/reset-password',
//             name: 'Reset Password',
//             slug: 'pages-reset-password',
//             i18n: 'ResetPassword',
//             target: '_blank'
//           },
//           {
//             url: '/pages/lock-screen',
//             name: 'Lock Screen',
//             slug: 'pages-lock-screen',
//             i18n: 'LockScreen',
//             target: '_blank'
//           }
//         ]
//       },
//     //   {
//     //     url: null,
//     //     name: 'Miscellaneous',
//     //     icon: 'CoffeeIcon',
//     //     i18n: 'Miscellaneous',
//     //     submenu: [
//     //       {
//     //         url: '/pages/not-authorized',
//     //         name: 'Not Authorized',
//     //         slug: 'page-not-authorized',
//     //         icon: 'XCircleIcon',
//     //         i18n: 'NotAuthorized',
//     //         target: '_blank'
//     //       },
//     //       {
//     //         url: '/pages/maintenance',
//     //         name: 'Maintenance',
//     //         slug: 'page-maintenance',
//     //         icon: 'AnchorIcon',
//     //         i18n: 'Maintenance',
//     //         target: '_blank'
//     //       },
//     //       {
//     //         url: '/pages/comingsoon',
//     //         slug: 'page-coming-soon',
//     //         name: 'Coming Soon',
//     //         icon: 'ClockIcon',
//     //         i18n: 'ComingSoon',
//     //         target: '_blank'
//     //       },
//     //       {
//     //         url: '/pages/error-404',
//     //         name: '404',
//     //         slug: 'page-error-404',
//     //         i18n: '404',
//     //         target: '_blank'
//     //       },
//     //       {
//     //         url: '/pages/error-500',
//     //         name: '500',
//     //         slug: 'page-error-500',
//     //         i18n: '500',
//     //         target: '_blank'
//     //       }
//     //     ]
//     //   }
//     ]
//   }
]

