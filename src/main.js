import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Axios from 'axios'
import VueCookies from 'vue-cookies'

import './app.scss'

import { JWTOKEN_COOKIE_NAME, AUTHORIZATION_HEADER_NAME } from './constants'

Vue.use(VueCookies)
// set up axios as default way to do http requests
Vue.prototype.$http = Axios
// get jwToken from local storage
const jwToken = Vue.$cookies.get(JWTOKEN_COOKIE_NAME)
// if we have token in local storage, then set header
// 'Authorization' for request equal to token
if (jwToken !== null) {
  Vue.prototype.$http.defaults.headers.common[AUTHORIZATION_HEADER_NAME] = jwToken
  console.log('have saved jwtoken')
} else {
  console.log('have no saved jwtoken')
}
Vue.config.productionTip = false
Vue.use(BootstrapVue).use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
