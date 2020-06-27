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
  <div v-else id="policyPage" class="container">
    <div class="is-breadcrumb-list">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" exact>
              Главная
            </router-link>
          </li>
          <li class="breadcrumb-item active">
            Политика конфиденциальности
          </li>
        </ol>
      </nav>
    </div>
    <h2 style="margin-top:3rem;margin-bottom:3rem;font-family: Nunito;font-style: normal;font-weight: bold;font-size: 40px;line-height: 120%;color: #3F3E3E;">
      Политика конфиденциальности
    </h2>
    <b-container v-if="policyPageInfo.content" style="padding-bottom:5rem;" v-html="policyPageInfo.content.rendered" />
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'PolicyPage',

  data () {
    return {
      policyPageInfo: {},
      loadPageData: true
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/3')
      .then(response => (this.policyPageInfo = response.data))
    this.loadPageData = false
  },
  head: {
    title: 'Политика конфиденциальности | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'Policy page description' }
    ]
  }
}
</script>

<style>

</style>
