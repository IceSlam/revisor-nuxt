<template>
  <div id="services" class="is-services">
    <b-container>
      <b-row>
        <h2>
          Услуги компании
        </h2>
      </b-row>
      <b-row class="is-services__items">
        <ServicesItemCard
          v-for="servicesItem in servicesData"
          :key="servicesItem.id"
          :servicesItemData="servicesItem"
          @openService="openService"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>

import ServicesItemCard from '@/components/services/services-card'

export default {
  name: 'ServicesListHome',
  components: {
    ServicesItemCard
  },
  props: {
    servicesData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
  }),
  methods: {
    openService (servicesItem) {
      this.$router.push('/services/' + servicesItem)
    }
  }
}
</script>

<style>
</style>
