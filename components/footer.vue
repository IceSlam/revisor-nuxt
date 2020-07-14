<template>
  <footer id="footer">
    <b-navbar toggleable="lg" type="light" class="is-navbar">
      <b-container>
        <b-navbar-brand href="/" class="is-navbar__brand">
          <img src="@/assets/img/revisor_logo.svg" class="is-navbar__brand-logo" alt="Ревизор - бухгалтерские и юридические услуги">
        </b-navbar-brand>
        <b-collapse class="container is-footer__collapse" is-nav>
          <b-col md="8">
            <b-row>
              <b-col md="12">
                <a v-if="contactsItemsInfo.acf" :href="contactsItemsInfo.acf.sys_address_link" target="_blank">
                  <i class="fas fa-map-marker-alt" />
                  {{ contactsItemsInfo.acf.sys_address }}
                </a>
                <a v-if="contactsItemsInfo.acf" :href="contactsItemsInfo.acf.sys_email" target="_blank">
                  <i class="fas fa-envelope" />
                  {{ contactsItemsInfo.acf.sys_email }}
                </a>
              </b-col>
              <b-col md="12" style="margin-top:.5em">
                <div style="margin-bottom:.5em">
                  <a v-if="contactsItemsInfo.acf" class="btn" :href="contactsItemsInfo.acf.sys_social_vk" target="_blank">
                    <i class="fab fa-vk" />
                  </a>
                  <a v-if="contactsItemsInfo.acf" class="btn" :href="contactsItemsInfo.acf.sys_social_fb" target="_blank">
                    <i class="fab fa-facebook-f" />
                  </a>
                  <a v-if="contactsItemsInfo.acf" class="btn" :href="contactsItemsInfo.acf.sys_social_ok" target="_blank">
                    <i class="fab fa-odnoklassniki" />
                  </a>
                  <a v-if="contactsItemsInfo.acf" class="btn" :href="contactsItemsInfo.acf.sys_social_mailru" target="_blank">
                    <i class="fas fa-at" />
                  </a>
                  <a v-if="contactsItemsInfo.acf" class="btn" :href="contactsItemsInfo.acf.sys_social_twitter" target="_blank">
                    <i class="fab fa-twitter" />
                  </a>
                  <a v-if="contactsItemsInfo.acf" class="btn" :href="contactsItemsInfo.acf.sys_social_inst" target="_blank">
                    <i class="fab fa-instagram" />
                  </a>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4">
            <b-row>
              <b-col md="12" style="margin-top:.5em">
                <a v-if="contactsItemsInfo.acf" class="is-footer__phone" :href="'tel:'+ contactsItemsInfo.acf.sys_phone">
                  {{ contactsItemsInfo.acf.sys_phone }}
                </a>
              </b-col>
              <b-col md="12" style="margin-top:.5em">
                <a class="is-footer__dev-link" style="margin-top:1em" href="https://alianscompany.ru">
                  Разработка сайта <img class="is-footer__dev-img" src="@/assets/img/alians_logo.svg" alt="">
                </a>
              </b-col>
            </b-row>
          </b-col>
        </b-collapse>
      </b-container>
    </b-navbar>
  </footer>
</template>

<script>

import axios from 'axios'

export default {
  name: 'FooterTpl',
  data () {
    return {
      contactsItemsInfo: {}
    }
  },
  mounted () {
    axios
      .get('https://a.al-dev.ru/wp-json/wp/v2/pages/5')
      .then(response => (this.contactsItemsInfo = response.data))
  }
}
</script>

<style>
  @media (max-width: 767px) {
    #footer {
      padding-bottom: 2rem;
    }
  }
  .is-footer__collapse {
    display: block !important;
  }
</style>
