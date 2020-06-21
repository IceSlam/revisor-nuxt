<template>
  <div id="home-page">
    <AboutHomeTpl />
    <certifsTpl />
  </div>
</template>

<script>

import AboutHomeTpl from '@/components/home/about'
import certifsTpl from '@/components/home/certifs'

export default {
  components: {
    certifsTpl,
    AboutHomeTpl
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
