<template>
  <b-container v-if="loadPageData">
    <b-row>
      <b-col md="12" class="text-center mb-5 mt-5">
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="sr-only">Загрузка данных...</span>
        </div>
        <p>
          Загрузка данных...
        </p>
      </b-col>
    </b-row>
  </b-container>
  <b-container v-else id="news-page" class="is-news">
    <div class="is-breadcrumb-list">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/" exact>
              Главная
            </nuxt-link>
          </li>
          <li class="breadcrumb-item active">
            {{ newsCategoryInfo.name }}
          </li>
        </ol>
      </nav>
    </div>
    <b-row>
      <h2 style="margin-top:3rem;margin-bottom:3rem;font-family: Nunito;font-style: normal;font-weight: bold;font-size: 40px;line-height: 120%;color: #3F3E3E;padding-left: 1rem;">
        {{ newsCategoryInfo.name }}
      </h2>
    </b-row>
    <b-row>
      <b-col md="12">
        <p v-html="newsCategoryInfo.description" />
      </b-col>
    </b-row>
    <NewsList
      :newsData="NEWS"
    />
  </b-container>
</template>

<script>

import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import NewsList from '@/components/news/news'

export default {
  name: 'NewsPage',
  components: {
    NewsList
  },
  data: () => ({
    newsCategoryInfo: [],
    loadPageData: true
  }),
  computed: {
    ...mapGetters([
      'NEWS'
    ])
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/categories/2')
      .then(response => (this.newsCategoryInfo = response.data))
    this.GET_NEWS_FROM_API()
    this.loadPageData = false
  },
  methods: {
    ...mapActions([
      'GET_NEWS_FROM_API'
    ])
  },
  head: {
    title: 'Новости компании | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'News page description' }
    ]
  }
}
</script>

<style>
</style>
