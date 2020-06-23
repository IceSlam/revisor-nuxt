<template>
  <div>
    <HeaderTpl />
    <nuxt />
    <FeedbackTpl />
    <FooterTpl />
  </div>
</template>

<script>

import HeaderTpl from '@/components/header'
import FeedbackTpl from '@/components/feedback'
import FooterTpl from '@/components/footer'

export default {
  components: {
    HeaderTpl,
    FeedbackTpl,
    FooterTpl
  }
}

</script>

<style lang="css">
@import url(@/static/assets/css/main.css);
@import url(@/static/assets/css/media.css);

</style>
