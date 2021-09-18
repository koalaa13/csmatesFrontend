import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

import {
  JWTOKEN_COOKIE_NAME,
  AUTHORIZATION_HEADER_NAME,
  BACKEND_API_URL,
  JWTOKEN_PREFIX,
  LOGGED_USERNAME_LOCALSTORAGE_NAME
} from '../constants'
import axios from 'axios'

Vue.use(Vuex).use(VueCookies)

export default new Vuex.Store({
  state: {
    status: '',
    jwToken: Vue.$cookies.get(JWTOKEN_COOKIE_NAME) || '',
    user: localStorage.getItem(LOGGED_USERNAME_LOCALSTORAGE_NAME) === null
      ? { username: '' }
      : localStorage.getItem(LOGGED_USERNAME_LOCALSTORAGE_NAME)
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
        localStorage.removeItem(LOGGED_USERNAME_LOCALSTORAGE_NAME)
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
          url: BACKEND_API_URL + '/registration',
          method: 'POST',
          data: {
            email: user.email,
            username: user.username,
            password: user.password
          }
        })
          .then(resp => {
            console.log('We have response after /registration request to API')
            // TODO here I can't login because user should activate his acc by email
            dispatch('login', user)
            resolve(resp)
          })
          .catch(err => {
            commit('authError')
            Vue.$cookies.remove(JWTOKEN_COOKIE_NAME)
            localStorage.removeItem(LOGGED_USERNAME_LOCALSTORAGE_NAME)
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
            email: user.email,
            password: user.password
          }
        })
          .then(resp => {
            const token = resp.headers[AUTHORIZATION_HEADER_NAME].slice(JWTOKEN_PREFIX.length)
            Vue.$cookies.set(JWTOKEN_COOKIE_NAME, token)
            delete user.password
            localStorage.setItem(LOGGED_USERNAME_LOCALSTORAGE_NAME, user)
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
            localStorage.removeItem(LOGGED_USERNAME_LOCALSTORAGE_NAME)
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
