<template>
  <b-col md="6">
    <div class="is-news__item card">
      <div class="is-news__item-content">
        <img src="https://buhrevizor.ru/assets/img/servicesIcon1.svg" alt="Новости">
        <div>
          <p>
            {{ newsItemData.title.rendered }}
          </p>
          <p class="is-news__item-chevron">
            <i class="fas fa-chevron-right" />
          </p>
          <a class="btn is-btn is-router-link-to" @click.prevent="openNews()">
            Подробнее
          </a>
        </div>
        <p class="is-news__item-description" v-html="newsItemData.excerpt.rendered" />
      </div>
    </div>
    <div class="is-news__item-bg" />
  </b-col>
</template>

<script>
export default {
  name: 'NewsItemCard',
  props: {
    newsItemData: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    openNews (slug) {
      this.$emit('openNews', this.newsItemData.slug)
    }
  }
}
</script>

<style>

</style>
