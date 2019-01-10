import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters: {

  },
  mutations: {
    changeLogin(state, status) {
      state.userInfo = status;
    }
  },
  actions: {
    loginAction({ commit }, user) {
      commit('changeLogin', user);
    }
  }
})

