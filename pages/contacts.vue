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
  <div v-else id="contacts-page" class="is-contacts">
    <b-container>
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/" exact>
                Главная
              </nuxt-link>
            </li>
            <li v-if="contactsPageInfo.title" class="breadcrumb-item active">
              {{ contactsPageInfo.title.rendered }}
            </li>
          </ol>
        </nav>
      </div>
      <b-row class="is-contacts__info">
        <b-col md="12">
          <h2 v-if="contactsPageInfo.title">
            {{ contactsPageInfo.title.rendered }}
          </h2>
        </b-col>
        <b-col v-if="contactsPageInfo.content" class="is-contacts__info-details" v-html="contactsPageInfo.content.rendered" />
        <b-col md="6" class="is-contacts__info-map">
          <img v-if="contactsPageInfo.acf" class="img-fluid" :src="contactsPageInfo.acf.contacts_map" alt="contactsPageInfo.title">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  components: {
  },
  data () {
    return {
      contactsPageInfo: {},
      loadPageData: true
    }
  },
  mounted () {
    axios
      .get('https://a.al-dev.ru/wp-json/wp/v2/pages/16')
      .then(response => (this.contactsPageInfo = response.data))
    this.loadPageData = false
  },
  head: {
    title: 'Контактная информация | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'Contacts page description' }
    ]
  }
}
</script>

<style>
</style>
