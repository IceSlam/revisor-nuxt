<template>
  <header id="header">
    <b-navbar toggleable="lg" type="light" class="is-navbar">
      <b-container>
        <b-navbar-brand href="/" class="is-navbar__brand">
          <img src="@/assets/img/revisor_logo.svg" class="is-navbar__brand-logo" alt="Ревизор - бухгалтерские и юридические услуги">
        </b-navbar-brand>
        <b-nav-toggle label="Navbar toggler" target="header-nav">
          <template v-slot:default="{ expanded }">
            <i v-if="expanded" class="fas fa-times" style="color:#de3131;transform:rotate(90deg);transition:all .5s" />
            <i v-else class="fas fa-bars" style="transform:rotate(0deg);transition:all .5s" />
          </template>
        </b-nav-toggle>
        <b-collapse id="header-nav" class="is-navbar__collapse" is-nav>
          <b-row>
            <b-col md="12">
              <a href="https://yandex.ru/maps/-/CCQdf8aIWB" target="_blank">
                <i class="fas fa-map-marker-alt " />
                г. Барнаул, ул. Пролетарская, 92
              </a>
              <a href="mailto:info@info.ru">
                <i class="fas fa-envelope" />
                info@info.ru
              </a>
            </b-col>
            <b-col md="12">
              <b-navbar-nav class="mr-auto justify-center text-center">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/" exact>
                    Главная
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/about">
                    О компании
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/services">
                    Услуги
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/news">
                    Новости
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/contacts">
                    Контакты
                  </nuxt-link>
                </li>
              </b-navbar-nav>
            </b-col>
          </b-row>
          <b-col md="4" class="is-header__phone-block">
            <b-row style="margin-top:-45px;">
              <b-col md="12" class="is-header__phone-item-block">
                <a href="tel:88000002525" class="is-header__phone" style="font-weight:bold !important;color:#3f3e3e !important;font-size:20px !important;">
                  8-800-000-25-25
                </a>
              </b-col>
              <b-col md="12" class="is-header__callback-block">
                <a v-b-modal.callback href="#" class="is-header__callback">
                  <img src="@/assets/img/headerCallIco.svg" alt="Заказть звонок">
                  <span>Заказать звонок</span>
                </a>
                <b-modal id="callback" title="Обратный звонок" centered hide-footer>
                  <form @submit.prevent="submit">
                    <div class="row">
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Имя">
                      </div>
                      <div class="col">
                        <input type="tel" class="form-control" placeholder="Телефон">
                      </div>
                    </div>
                    <div class="row" style="margin-top:2em;">
                      <div class="col">
                        <textarea class="form-control" placeholder="Ваш вопрос" />
                      </div>
                    </div>
                    <div class="row" style="margin-top:2em;">
                      <div class="col" style="position: relative;align-items: center;display: flex;">
                        <input class="btn is-btn-feedback" type="submit" name="formSubmit" value="Отправить">
                      </div>
                      <div class="col-6 d-flex" style="align-items:center;">
                        <div class="custom-control custom-checkbox">
                          <input id="defaultUnchecked" type="checkbox" class="custom-control-input">
                          <label class="custom-control-label" for="defaultUnchecked"><router-link to="/policy">С политикой конфидициальных данных ознакомлен</router-link></label>
                        </div>
                      </div>
                    </div>
                  </form>
                </b-modal>
              </b-col>
            </b-row>
          </b-col>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'HeaderTpl'
}
</script>

<style lang="css">
a:hover {
  text-decoration: none;
},
a.is-header__phone:hover {
  color: #de3131 !important;
}
</style>
