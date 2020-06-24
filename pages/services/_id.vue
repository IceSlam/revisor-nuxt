<template>
  <div id="services-item" class="is-services-item">
    <b-container v-if="servicesItemPageData">
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/" exact>
                Главная
              </nuxt-link>
            </li>
            <li class="breadcrumb-item">
              <nuxt-link to="/services" exact>
                Услуги компании
              </nuxt-link>
            </li>
            <li v-if="servicesItemPageData.title" class="breadcrumb-item active">
              {{ servicesItemPageData.title.rendered }}
            </li>
          </ol>
        </nav>
      </div>
      <h2 v-if="servicesItemPageData.acf">
      {{ servicesItemPageData.acf.service_longtitle }}
      </h2>
    </b-container>
    <b-row class="is-services-item-advantage">
      <b-col md="6" class="is-services-item-advantage__descr">
        <h3 v-if="servicesItemPageData.acf">
          {{ servicesItemPageData.acf.advantages_title }}
        </h3>
        <ul v-if="servicesItemPageData.acf" class="is-services-item-advantage__list">
          <li v-for="advantage in servicesItemPageData.acf.advantages_list" :key="advantage.id">
            {{ advantage.advantages_list_item }}
          </li>
        </ul>
      </b-col>
      <b-col md="6" class="is-services-item-advantage__img" />
    </b-row>
    <b-container class="is-services-item__results">
      <b-row>
        <h3 v-if="servicesItemPageData.acf">
          {{ servicesItemPageData.acf.forwho_title }}
        </h3>
        <b-col md="12">
          <ul v-if="servicesItemPageData.acf" class="is-services-item__results-list">
            <li v-for="forwho in servicesItemPageData.acf.forwho_list" :key="forwho.id">
              {{ forwho.forwho_list_item }}
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <h3 v-if="servicesItemPageData.acf" style="margin-top:2.8125rem">
          {{ servicesItemPageData.acf.results_title }}
        </h3>
        <b-col md="12">
          <ul v-if="servicesItemPageData.acf" class="is-services-item__results-list">
            <li v-for="result in servicesItemPageData.acf.results_list" :key="result.id">
              {{ result.results_list_item }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <b-row class="is-services-item-sphere">
      <b-col md="6" class="is-services-item-sphere__img" />
      <b-col md="6" class="is-services-item-sphere__descr">
        <h3 v-if="servicesItemPageData.acf">
          {{ servicesItemPageData.acf.sphere_title }}
        </h3>
        <ul v-if="servicesItemPageData.acf" class="is-services-item-sphere__list">
          <li v-for="sphere in servicesItemPageData.acf.sphere_list" :key="sphere.id">
            {{ sphere.sphere_list_item }}
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ServicesItemPage',
  computed: {
    ...mapGetters([
      'SERVICES'
    ]),
    servicesItemPageData () {
      let itemContent = {}
      const vm = this
      this.SERVICES.map(function (item) {
        if (item.slug === vm.$route.params.id) {
          itemContent = item
        }
      })
      return itemContent
    }
  },
  mounted () {
    this.GET_SERVICES_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_SERVICES_FROM_API'
    ])
  },
  head: {
    title: 'Наименование услуги' + ' / Услуги компании | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'Services page description' }
    ]
  }
}
</script>

<style>

</style>
