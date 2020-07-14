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
  <b-container v-else id="about-page" class="is-about" style="background:none;">
    <div class="is-breadcrumb-list">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/" exact>
              Главная
            </nuxt-link>
          </li>
          <li class="breadcrumb-item active">
            О компании
          </li>
        </ol>
      </nav>
    </div>
    <b-row class="is-contacts__info">
      <b-col md="12">
        <h2 v-if="aboutPageInfo.title">
          {{ aboutPageInfo.title.rendered }}
        </h2>
      </b-col>
      <b-col md="12">
        <p v-if="aboutPageInfo.content" v-html="aboutPageInfo.content.rendered" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import axios from 'axios'

export default {
  components: {
  },
  data () {
    return {
      aboutPageInfo: {},
      pageTitle: {},
      loadPageData: true
    }
  },
  mounted () {
    axios
      .get('https://a.al-dev.ru/wp-json/wp/v2/pages/14')
      .then(response => (this.aboutPageInfo = response.data))
    this.loadPageData = false
  },
  head () {
    const pageTitle = this.aboutPageInfo.yoast_title
    return {
      title: pageTitle + ' | Ревизор 🚀',
      meta: [
        { hid: 'description', name: 'description', content: 'About page description' }
      ]
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
