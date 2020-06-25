<template>
  <div id="home-page">
    <SliderHome />
    <ServicesListHome
      :servicesData="SERVICES"
    />
    <AboutHomeTpl />
    <certifsTpl />
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import SliderHome from '@/components/home/slider'
import ServicesListHome from '@/components/home/services-home'
import AboutHomeTpl from '@/components/home/about'
import certifsTpl from '@/components/home/certifs'

export default {
  components: {
    SliderHome,
    certifsTpl,
    AboutHomeTpl,
    ServicesListHome
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
    title: 'Ревизор - бухгалтерские и юридические услуги 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ]
  }
}
</script>

<style>
</style>
