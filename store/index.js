import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    services: [],
    news: [],
    about: {}
  },
  mutations: {
    SET_SERVICES_TO_STORE: (state, services) => {
      state.services = services
    },
    SET_ABOUT_TO_STORE: (state, services) => {
      state.services = services
    },
    SET_NEWS_TO_STORE: (state, news) => {
      state.news = news
    }
  },
  actions: {
    GET_SERVICES_FROM_API ({ commit }) {
      return axios('https://a.al-dev.ru/wp-json/wp/v2/posts/?categories=3&per_page=50', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_SERVICES_TO_STORE', response.data)
        })
    },
    GET_ABOUT_FROM_API ({ commit }) {
      return axios('https://a.al-dev.ru/wp-json/wp/v2/pages/14', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_ABOUT_TO_STORE', response.data)
        })
    },
    GET_NEWS_FROM_API ({ commit }) {
      return axios('https://a.al-dev.ru/wp-json/wp/v2/posts/?categories=2&per_page=50', {
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
    ABOUT (state) {
      return state.about
    },
    NEWS (state) {
      return state.news
    }
  },
  modules: {
  }
})

export default store
