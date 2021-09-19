import Vue from 'vue'
import VueRouter from 'vue-router'
import ForNewUsers from '../views/ForNewUsers'
import Registration from '../views/Registration'
import Login from '../views/Login'
import PageNotFound from '../views/PageNotFound'

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
  },
  {
    path: '/sign-in',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
