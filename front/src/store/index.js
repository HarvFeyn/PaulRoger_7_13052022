import Vue from 'vue'
import Vuex from 'vuex'
// import ContextExclusionPlugin from 'webpack/lib/ContextExclusionPlugin'
// import defaultToken from '../helpers/properties'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    authToken: '',
    user: {}
  },
  getters: {
  },
  mutations: {
    AUTH_DISCONECT (state) {
      state.authenticated = false
    },
    AUTH_CONNECT (state) {
      state.authenticated = true
    },
    NEW_TOKEN (state, token) {
      state.authToken = token
    },
    CLEAR_TOKEN (state) {
      state.authToken = ''
    },
    SAVE_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = {}
    }
  },
  actions: {
    CONNECTION ({ commit }, data) {
      commit('AUTH_CONNECT')
      commit('SAVE_USER', data.user)
      commit('NEW_TOKEN', data.token)
    },
    DISCONNECT ({ commit }) {
      commit('AUTH_DISCONECT')
      commit('CLEAR_USER')
      commit('CLEAR_TOKEN')
    }
  },
  modules: {
  }
})
