<template>
  <b-container id="news-page" class="is-news">
    <div class="is-breadcrumb-list">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/" exact>
              Главная
            </nuxt-link>
          </li>
          <li class="breadcrumb-item active">
            {{ newsCategoryInfo.name }}
          </li>
        </ol>
      </nav>
    </div>
    <b-row>
      <h2 style="margin-top:3rem;margin-bottom:3rem;font-family: Nunito;font-style: normal;font-weight: bold;font-size: 40px;line-height: 120%;color: #3F3E3E;padding-left: 1rem;">
        {{ newsCategoryInfo.name }}
      </h2>
    </b-row>
    <b-row>
      <b-col md="12">
        <p v-html="newsCategoryInfo.description" />
      </b-col>
    </b-row>
    <div id="services" class="is-services" style="padding-top:3rem">
      <b-container>
        <b-row class="is-news__items">
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
          <b-col md="6">
            <div class="is-news__item card">
              <div class="is-news__item-content">
                <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" alt="Новости">
                <div>
                  <p>
                    Новость
                  </p>
                  <p class="is-news__item-chevron">
                    <i class="fas fa-chevron-right" />
                  </p>
                  <a class="btn is-btn is-router-link-to">
                    Подробнее
                  </a>
                </div>
                <p class="is-news__item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
                </p>
              </div>
            </div>
            <div class="is-news__item-bg" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </b-container>
</template>

<script>

import axios from 'axios'

export default {
  components: {
  },
  data: () => ({
    newsCategoryInfo: []
  }),
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/categories/2')
      .then(response => (this.newsCategoryInfo = response.data))
  },
  head: {
    title: 'Новости компании | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'News page description' }
    ]
  }
}
</script>

<style>
</style>
