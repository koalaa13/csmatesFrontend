import Vue from 'vue'
import VueRouter from 'vue-router'
import ForNewUsers from '../views/ForNewUsers'
import Registration from '../views/Registration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ForNewUsers',
    component: ForNewUsers
  },
  {
    path: '/sign-up',
    name: 'Registration',
    component: Registration
    // it's lazy initialization
    // component: () => import('../views/Registration')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
