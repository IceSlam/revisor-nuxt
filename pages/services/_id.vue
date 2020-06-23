<template>
  <div id="services-item" class="is-services-item">
    <b-container>
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link :to="{ name: 'homePage' }" exact>
                Главная
              </nuxt-link>
            </li>
            <li class="breadcrumb-item">
              <nuxt-link to="/services" exact>
                Услуги компании
              </nuxt-link>
            </li>
            <li class="breadcrumb-item active">
              Название услуги
            </li>
          </ol>
        </nav>
      </div>
      <h2>
        Наименование услуги
      </h2>
    </b-container>
    <b-row class="is-services-item-advantage">
      <b-col md="6" class="is-services-item-advantage__descr">
        <h3>
          Расширенное наименование услуги
        </h3>
        <ul class="is-services-item-advantage__list">
          <li>
            Преимущество
          </li>
          <li>
            Преимущество
          </li>
          <li>
            Преимущество
          </li>
          <li>
            Преимущество
          </li>
          <li>
            Преимущество
          </li>
        </ul>
      </b-col>
      <b-col md="6" class="is-services-item-advantage__img" />
    </b-row>
    <b-container class="is-services-item__results">
      <b-row>
        <h3>
          Для кого это подходит?
        </h3>
        <b-col md="12">
          <ul class="is-services-item__results-list">
            <li>
              1
            </li>
            <li>
              2
            </li>
            <li>
              3
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <h3 style="margin-top:2.8125rem">
           Что вы получаете в результате?
        </h3>
        <b-col md="12">
          <ul class="is-services-item__results-list">
            <li>
              1
            </li>
            <li>
              2
            </li>
            <li>
              3
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <b-row class="is-services-item-sphere">
      <b-col md="6" class="is-services-item-sphere__img" />
      <b-col md="6" class="is-services-item-sphere__descr">
        <h3>
           В каких сферах мы оказываем услуги?
        </h3>
        <ul class="is-services-item-sphere__list">
          <li>
            1
          </li>
          <li>
            2
          </li>
          <li>
            3
          </li>
          <li>
            4
          </li>
          <li>
            5
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ServicesItemPage',
  head: {
    title: 'Наименование услуги' + ' / Услуги компании | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'Services page description' }
    ]
  }
}
</script>

<style>

</style>
