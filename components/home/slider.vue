<template>
  <div id="slider" class="is-slider">
    <b-container>
      <b-row>
        <div>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            img-width="1140"
            img-height="482"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide v-for="slide in CarouselData" :key="slide.index" img-blank>
              <div class="is-carousel-item">
                <b-row style="margin-left:0;margin-right:0;">
                  <b-col md="6">
                    <div class="is-carousel-item__content">
                      <div class="is-slider__text">
                        <h2>
                          {{ slide.title }}
                        </h2>
                        <p>
                          {{ slide.description }}
                        </p>
                        <a class="btn is-btn-out" target="_blank" :href="slide.link">
                          Подробнее об акции
                          <i class="fas fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <img :src="slide.img" :alt="slide.title" class="img-fluid">
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
export default {
  name: 'SliderHome',
  data () {
    return {
      CarouselData: [
        {
          title: 'Бухгалтерские услуги для вашего бизнеса',
          description: 'Если Вам нужно решить конкретную проблему, связанную с налогами и бухгалтерией, то стоит обратиться в компанию «Ревизор». Мы можем предоставить весь спектр бухгалтерских и налоговых услуг.',
          img: 'assets/img/sliderItem1.png',
          link: 'https://vk.com/iceslam'
        },
        {
          title: 'Lorem Ipsum Dolor Akismet Lorem Ipsum',
          description: 'Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet',
          img: 'assets/img/sliderItem2.png',
          link: 'https://iceslam.ru/'
        },
        {
          title: 'Lorem Ipsum Dolor Akismet Lorem Ipsum',
          description: 'Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet',
          img: 'assets/img/sliderItem3.png',
          link: 'https://iceslam.ru/'
        }
      ]
    }
  }
}
</script>

<style>

</style>
