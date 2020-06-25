<template>
  <div id="services" class="is-services" style="padding-top:3rem">
    <b-container>
      <b-row class="is-news__items">
        <NewsItemCard
          v-for="newsItem in newsData"
          :key="newsItem.id"
          :newsItemData="newsItem"
          @openNews="openNews"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>

import NewsItemCard from '@/components/news/news-card'

export default {
  name: 'NewsList',
  components: {
    NewsItemCard
  },
  props: {
    newsData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
  }),
  methods: {
    openNews (newsItem) {
      this.$router.push('/news/' + newsItem)
    }
  }
}
</script>

<style>

</style>
