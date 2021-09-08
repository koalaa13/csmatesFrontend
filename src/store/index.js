import Vue from 'vue'
import Vuex from 'vuex'

import {
  JWTOKEN_LOCAL_STORAGE_NAME,
  AUTHORIZATION_HEADER_NAME,
  BACKEND_API_URL,
  JWTOKEN_PREFIX
} from '../constants'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    jwToken: localStorage.getItem(JWTOKEN_LOCAL_STORAGE_NAME) || '',
    user: {}
  },
  mutations: {
    authRequest (state) {
      state.status = 'loading'
    },
    authSuccess (state, token, user) {
      state.status = 'success'
      state.jwToken = token
      state.user = user
    },
    authError (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.jwToken = ''
    }
  },
  actions: {
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem(JWTOKEN_LOCAL_STORAGE_NAME)
        delete axios.defaults.headers.common[AUTHORIZATION_HEADER_NAME]
        resolve()
      })
    },
    register ({
      commit,
      dispatch
    }, user) {
      return new Promise((resolve, reject) => {
        commit('authRequest')
        axios({
          url: BACKEND_API_URL + '/register',
          method: 'POST',
          data: {
            username: user.username,
            password: user.password
          }
        })
          .then(resp => {
            dispatch('login', user)
            resolve(resp)
          })
          .catch(err => {
            commit('authError')
            localStorage.removeItem(JWTOKEN_LOCAL_STORAGE_NAME)
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
            user = {
              username: user.username
            }
            localStorage.setItem(JWTOKEN_LOCAL_STORAGE_NAME, token)
            axios.defaults.headers.common[AUTHORIZATION_HEADER_NAME] = token
            commit('authSuccess', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('authError')
            localStorage.removeItem(JWTOKEN_LOCAL_STORAGE_NAME)
            reject(err)
          })
      })
    }
  },
  modules: {},
  getters: {
    isLoggedIn: state => !!state.jwToken,
    authStatus: state => state.status
  }
})
