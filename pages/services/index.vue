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
  <div v-else id="services-page" class="is-services">
    <b-container>
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/" exact>
                Главная
              </nuxt-link>
            </li>
            <li class="breadcrumb-item active">
              Услуги компании
            </li>
          </ol>
        </nav>
      </div>
      <ServicesList
        :servicesData="SERVICES"
      />
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ServicesList from '@/components/services/services'

export default {
  name: 'ServicesPage',
  components: {
    ServicesList
  },
  computed: {
    ...mapGetters([
      'SERVICES'
    ]),
    loadPageData: true
  },
  mounted () {
    this.GET_SERVICES_FROM_API()
    this.loadPageData = false
  },
  methods: {
    ...mapActions([
      'GET_SERVICES_FROM_API'
    ])
  },
  head: {
    title: 'Услуги компании | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'Services page description' }
    ]
  }
}
</script>

<style>
</style>
