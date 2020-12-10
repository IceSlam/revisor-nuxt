import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    services: []
  },
  mutations: {
    SET_SERVICES_TO_STORE: (state, services) => {
      state.services = services
    }
  },
  actions: {
    GET_SERVICES_FROM_API ({ commit }) {
      return axios('https://strapi-test-back.herokuapp.com/articles', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_SERVICES_TO_STORE', response.data)
        })
    }
  },
  getters: {
    SERVICES (state) {
      return state.services
    }
  },
  modules: {
  }
})

export default store
