<template>
  <footer id="footer">
    <b-navbar toggleable="lg" type="light" class="is-navbar">
      <b-container>
        <b-navbar-brand href="/" class="is-navbar__brand">
          <img src="assets/img/revisor_logo.svg" class="is-navbar__brand-logo" alt="Ревизор - бухгалтерские и юридические услуги">
        </b-navbar-brand>
        <b-collapse class="container is-footer__collapse" is-nav>
          <b-col md="8">
            <b-row>
              <b-col md="12">
                <a href="https://yandex.ru/maps/-/CCQdf8aIWB" target="_blank">
                  <i class="fas fa-map-marker-alt" />
                  г. Барнаул, ул. Пролетарская, 92
                </a>
                <a href="mailto:info@info.ru" target="_blank">
                  <i class="fas fa-envelope" />
                  info@info.ru
                </a>
              </b-col>
              <b-col md="12" style="margin-top:.5em">
                <div style="margin-bottom:.5em">
                  <a class="btn" href="#" target="_blank">
                    <i class="fab fa-vk" />
                  </a>
                  <a class="btn" href="#" target="_blank">
                    <i class="fab fa-facebook-f" />
                  </a>
                  <a class="btn" href="#" target="_blank">
                    <i class="fab fa-odnoklassniki" />
                  </a>
                  <a class="btn" href="#" target="_blank">
                    <i class="fas fa-at" />
                  </a>
                  <a class="btn" href="#" target="_blank">
                    <i class="fab fa-twitter" />
                  </a>
                  <a class="btn" href="#" target="_blank">
                    <i class="fab fa-instagram" />
                  </a>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4">
            <b-row>
              <b-col md="12" style="margin-top:.5em">
                <a class="is-footer__phone" href="tel:88000002525">
                  8-800-000-25-25
                </a>
              </b-col>
              <b-col md="12" style="margin-top:.5em">
                <a class="is-footer__dev-link" style="margin-top:1em" href="https://alianscompany.ru">
                  Разработка сайта <img class="is-footer__dev-img" src="assets/img/alians_logo.svg" alt="">
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
export default {
  name: 'FooterTpl'
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
