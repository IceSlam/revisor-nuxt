<template>
  <div id="slider" class="is-slider">
    <b-container>
      <b-row>
        <div
          v-if="CarouselData.acf">
          <b-carousel
            id="carousel-fade"
            fade
            :interval="3000"
            img-width="1140"
            img-height="482"
          >
            <b-carousel-slide v-for="slide in CarouselData.acf.slides" :key="slide.index" img-blank>
              <div class="is-carousel-item">
                <b-row style="margin-left:0;margin-right:0;">
                  <b-col md="6">
                    <div class="is-carousel-item__content">
                      <div class="is-slider__text">
                        <h2>
                          {{ slide.slide_title }}
                        </h2>
                        <p>
                          {{ slide.slide_description }}
                        </p>
                        <a class="btn is-btn-out" target="_blank" :href="slide.slide_link">
                          Подробнее об акции
                          <i class="fas fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <img :src="slide.slide_img" :alt="slide.slide_title" class="img-fluid">
                  </b-col>
                </b-row>
              </div>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'SliderHome',
  data () {
    return {
      CarouselData: {}
    }
  },
  mounted () {
    axios
      .get('https://a.al-dev.ru/wp-json/wp/v2/pages/5')
      .then(response => (this.CarouselData = response.data))
  }
}
</script>

<style>

</style>
