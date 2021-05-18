import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layout/index'
import EmptyLayout from '../layout/empty'
// import Login from '../views/auth/Login.vue'
// import ListBarang from '../views/barang/ListBarang.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },

  // {
  //   path: '../views/Barang/ListBarang.vue',
  //   name: 'ListBarang',
  //   component: ListBarang
  // }

  {
    name: 'Auth',
    component: EmptyLayout,
    icon: 'mdi-clipboard-account-outline',
    subtitle: 'Pages',
    path: '',
    open: false,
    // beforeEnter: (to, from, next) => {
    //   if (store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Helper List',
    //     })
    //   }
    //   next()
    // },
    children: [
      {
        name: 'Login',
        component: () => import('../views/auth/Login'),
        path: '',
      },
      {
        name: 'Logout',
        path: 'logout',
      },
    ],
  },

  {
    name: 'Page Barang',
    component: MainLayout,
    subtitle: 'Components',
    path: '/page/barang',
    open: false,
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Login',
    //     })
    //   }
    //   next()
    // },
    children: [
      {
        name: 'Barang',
        component: () => import('../views/barang/ListBarang'),
        path: '/barang',
      },
      {
        name: 'Barang',
        component: () => import('../views/barang/TambahBarang'),
        path: '/barang/tambah-barang',
      },
      {
        name: 'Edit Barang',
        component: () => import('../views/barang/EditBarang'),
        path: '/barang/edit-barang/:id',
      },
    ],
  },

  {
    name: 'Page Karyawan',
    component: MainLayout,
    subtitle: 'Components',
    path: '/page/karyawan',
    open: false,
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Login',
    //     })
    //   }
    //   next()
    // },
    children: [
      {
        name: 'Karyawan',
        component: () => import('../views/karyawan/ListKaryawan'),
        path: '/karyawan',
      },
      {
        name: 'Karyawan',
        component: () => import('../views/karyawan/TambahKaryawan'),
        path: '/karyawan/tambah-karyawan',
      },
      {
        name: 'Karyawan',
        component: () => import('../views/karyawan/EditKaryawan'),
        path: '/karyawan/edit-karyawan/:id',
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
