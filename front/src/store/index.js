import Vue from 'vue'
import Vuex from 'vuex'
// import ContextExclusionPlugin from 'webpack/lib/ContextExclusionPlugin'
// import defaultToken from '../helpers/properties'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
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
    SAVE_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = {}
    }
  },
  actions: {
    CONNECTION ({ commit }, data) {
      console.log(data)
      commit('AUTH_CONNECT')
      commit('SAVE_USER', data.user)
    },
    DISCONNECT ({ commit }) {
      commit('AUTH_DISCONECT')
      commit('CLEAR_USER')
    }
  },
  modules: {
  }
})
