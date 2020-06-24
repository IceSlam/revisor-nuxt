<template>
  <div id="services-page" class="is-services">
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
    ])
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
    title: 'Услуги компании | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'Services page description' }
    ]
  }
}
</script>

<style>
</style>
