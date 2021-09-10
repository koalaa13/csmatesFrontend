import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

import {
  JWTOKEN_COOKIE_NAME,
  AUTHORIZATION_HEADER_NAME,
  BACKEND_API_URL,
  JWTOKEN_PREFIX,
  LOGGED_USERNAME_COOKIE_NAME
} from '../constants'
import axios from 'axios'

Vue.use(Vuex).use(VueCookies)

export default new Vuex.Store({
  state: {
    status: '',
    jwToken: Vue.$cookies.get(JWTOKEN_COOKIE_NAME) || '',
    user: Vue.$cookies.get(LOGGED_USERNAME_COOKIE_NAME) === null
      ? { username: '' }
      : Vue.$cookies.get(LOGGED_USERNAME_COOKIE_NAME)
  },
  mutations: {
    authRequest (state) {
      state.status = 'loading'
    },
    authSuccess (state, payload) {
      state.status = 'success'
      state.jwToken = payload.token
      state.user = payload.user
    },
    authError (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.user.username = ''
      state.jwToken = ''
    }
  },
  actions: {
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        Vue.$cookies.remove(JWTOKEN_COOKIE_NAME)
        Vue.$cookies.remove(LOGGED_USERNAME_COOKIE_NAME)
        delete axios.defaults.headers.common[AUTHORIZATION_HEADER_NAME]
        resolve()
      })
    },
    register ({
      commit,
      dispatch
    }, user) {
      return new Promise((resolve, reject) => {
        axios({
          url: BACKEND_API_URL + '/users/register',
          method: 'POST',
          data: {
            username: user.username,
            password: user.password
          }
        })
          .then(resp => {
            console.log('We have response after /users/register request to API')
            dispatch('login', user)
            resolve(resp)
          })
          .catch(err => {
            commit('authError')
            Vue.$cookies.remove(JWTOKEN_COOKIE_NAME)
            Vue.$cookies.remove(LOGGED_USERNAME_COOKIE_NAME)
            reject(err)
          })
      })
    },
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('authRequest')
        axios({
          url: BACKEND_API_URL + '/login',
          method: 'POST',
          data: {
            username: user.username,
            password: user.password
          }
        })
          .then(resp => {
            const token = resp.headers[AUTHORIZATION_HEADER_NAME].slice(JWTOKEN_PREFIX.length)
            Vue.$cookies.set(JWTOKEN_COOKIE_NAME, token)
            delete user.password
            Vue.$cookies.set(LOGGED_USERNAME_COOKIE_NAME, user)
            axios.defaults.headers.common[AUTHORIZATION_HEADER_NAME] = token
            commit('authSuccess',
              {
                token: token,
                user: user
              }
            )
            resolve(resp)
          })
          .catch(err => {
            commit('authError')
            Vue.$cookies.remove(JWTOKEN_COOKIE_NAME)
            Vue.$cookies.remove(LOGGED_USERNAME_COOKIE_NAME)
            reject(err)
          })
      })
    }
  },
  modules: {},
  getters: {
    isLoggedIn: state => !!state.jwToken,
    authStatus: state => state.status,
    getUsername: state => {
      if (state.user) {
        return state.user.username
      } else {
        return ''
      }
    }
  }
})
