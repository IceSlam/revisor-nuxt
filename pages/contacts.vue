<template>
  <div id="contacts-page" class="is-contacts">
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
      contactsPageInfo: {}
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/16')
      .then(response => (this.contactsPageInfo = response.data))
    this.isLoader = false
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
