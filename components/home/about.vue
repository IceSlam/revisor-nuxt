<template>
  <div id="about" class="is-about">
    <b-row class="is-about__row">
      <b-col md="9" lg="6" class="is-about__text">
        <h2>
          О компании
        </h2>
        <p v-if="aboutPageInfo.excerpt" v-html="aboutPageInfo.excerpt.rendered" />
        <div class="is-home__about-block">
          <nuxt-link to="/about" class="btn is-btn-more is-router-link-to">
            <div style="margin-right:.5em;" class="">
              <img src="assets/img/btnMore.svg" alt="">
            </div>
            <div style="white-space: pre-wrap;line-height:1;padding-top:.4em" class="">
              Читать подробнее
              <span>о компании</span>
            </div>
          </nuxt-link>
          <a class="btn is-btn-video">
            <div style="margin-right:.5em;" class="">
              <img src="assets/img/btnVideo.svg" alt="">
            </div>
            <div style="white-space: pre-wrap;line-height:1;padding-top:.4em" class="">
              Смотреть видео
              <span>о компании</span>
            </div>
          </a>
        </div>
      </b-col>
      <b-col md="3" lg="6" class="is-about__img" style="background:url(assets/img/homeAboutImg.jpg)" />
    </b-row>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'AboutHomeTpl',
  data () {
    return {
      aboutPageInfo: {}
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/14')
      .then(response => (this.aboutPageInfo = response.data))
  }
}
</script>

<style>
.is-about__text {
  padding-left: 8.4375em;
  padding-right: 6.25em;
  padding-bottom: 5.625em;
  padding-top: 5.625em;
},
.is-btn-more, .is-home__about-block {
    display: inline-flex;
},
.is-btn-more {
    background: linear-gradient(180deg,#f7f2f2,#e1dbdb);
    box-shadow: 0 3px 0 #d0c9c9;
    border-radius: 5px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #3f3e3e;
    text-shadow: 0 1px 0 #f1f1f1;
    text-transform: none;
    padding-right: .5em;
    padding-left: .9em;
    padding-bottom: .625em;
    max-width: 220px;
    text-align: left;
    line-height: 1;
    transition: all .625s;
}
</style>
