import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    services: [],
    news: []
  },
  mutations: {
    SET_SERVICES_TO_STORE: (state, services) => {
      state.services = services
    },
    SET_NEWS_TO_STORE: (state, news) => {
      state.news = news
    }
  },
  actions: {
    GET_SERVICES_FROM_API ({ commit }) {
      return axios('http://revisor.iceslam.ru/wp-json/wp/v2/posts/?categories=3&per_page=50', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_SERVICES_TO_STORE', response.data)
        })
    },
    GET_NEWS_FROM_API ({ commit }) {
      return axios('http://revisor.iceslam.ru/wp-json/wp/v2/posts/?categories=2&per_page=50', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_NEWS_TO_STORE', response.data)
        })
    }
  },
  getters: {
    SERVICES (state) {
      return state.services
    },
    NEWS (state) {
      return state.news
    }
  },
  modules: {
  }
})

export default store
