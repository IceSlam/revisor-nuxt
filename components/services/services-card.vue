<template>
  <b-col md="6" lg="4">
    <div class="is-services__item card">
      <div class="is-services__item-content">
        <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Услуга">
        <div>
          <p>
            {{ servicesItemData.title.rendered }}
          </p>
          <p class="is-services__item-chevron">
            <i class="fas fa-chevron-right" />
          </p>
          <a class="btn is-btn is-router-link-to" @click.prevent="openService()">
            Подробнее об услуге
          </a>
        </div>
        <p class="is-services__item-description">
          {{ servicesItemData.acf.service_longtitle }}
        </p>
      </div>
    </div>
    <div class="is-services__item-bg" />
  </b-col>
</template>

<script>
export default {
  name: 'ServicesItemCard',
  props: {
    servicesItemData: {
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
    openService (slug) {
      this.$emit('openService', this.servicesItemData.slug)
    }
  }
}
</script>

<style>

</style>
