<template>
  <div id="services-item" class="is-services-item">
    <b-container>
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/" exact>
                Главная
              </nuxt-link>
            </li>
            <li class="breadcrumb-item">
              <nuxt-link to="/news" exact>
                Новости компании
              </nuxt-link>
            </li>
            <li v-if="newsItemPageData.title" class="breadcrumb-item active">
              {{ newsItemPageData.title.rendered }}
            </li>
          </ol>
        </nav>
      </div>
      <h2 v-if="newsItemPageData.title">
        {{ newsItemPageData.title.rendered }}
      </h2>
      <p class="is-news__page-date">
        Опубликовано:
        <span style="font-weight:200">
          {{ localeDate }}
        </span>
      </p>
      <div class="is-news__page-content">
        <div v-if="newsItemPageData.content" v-html="newsItemPageData.content.rendered" />
      </div>
    </b-container>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NewsItemPage',
  computed: {
    ...mapGetters([
      'NEWS'
    ]),
    newsItemPageData () {
      let itemContent = {}
      const vm = this
      this.NEWS.map(function (item) {
        if (item.slug === vm.$route.params.id) {
          itemContent = item
        }
      })
      return itemContent
    },
    localeDate () {
      return (new Date(this.newsItemPageData.date)).toLocaleDateString()
    }
  },
  mounted () {
    this.GET_NEWS_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_NEWS_FROM_API'
    ])
  },
  head () {
    const PageTitle = this.newsItemPageData.title.rendered
    return {
      title: PageTitle + ' / Новости компании | Ревизор 🚀',
      meta: [
        { hid: 'description', name: 'description', content: 'News item page description' }
      ]
    }
  }
}
</script>

<style>

</style>
