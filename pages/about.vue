<template>
  <b-container id="about-page" class="is-about" style="background:none;">
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
      aboutPageInfo: {}
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/14')
      .then(response => (this.aboutPageInfo = response.data))
  },
  head: {
    title: 'О компании | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'About page description' }
    ]
  }
}
</script>

<style>
</style>
