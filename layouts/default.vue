<template>
  <div>
    <HeaderTpl />
    <nuxt />
    <FooterTpl />
  </div>
</template>

<script>

import HeaderTpl from '@/components/header'
import FooterTpl from '@/components/footer'

export default {
  components: {
    HeaderTpl,
    FooterTpl
  }
}

</script>

<style>
</style>
