<template>
  <div id="home-page">
    <SliderHome />
    <servicesListHome />
    <AboutHomeTpl />
    <certifsTpl />
  </div>
</template>

<script>

import SliderHome from '@/components/home/slider'
import servicesListHome from '@/components/home/services-home'
import AboutHomeTpl from '@/components/home/about'
import certifsTpl from '@/components/home/certifs'

export default {
  components: {
    SliderHome,
    certifsTpl,
    AboutHomeTpl,
    servicesListHome
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
