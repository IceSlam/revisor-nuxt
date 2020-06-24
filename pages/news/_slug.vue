<template>
  <div id="services-item" class="is-services-item">
    <b-container>
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/" exact>
                Главная
              </nuxt-link>
            </li>
            <li class="breadcrumb-item">
              <nuxt-link to="/news" exact>
                Новости компании
              </nuxt-link>
            </li>
            <li class="breadcrumb-item active">
              Наименование новости
            </li>
          </ol>
        </nav>
      </div>
      <h2>
        Наименование новости
      </h2>
      <p class="is-news__page-date">
        Опубликовано:
        <span style="font-weight:200">
          16.06.2020
        </span>
      </p>
      <div class="is-news__page-content">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta ante et quam rutrum bibendum. Fusce eget semper dui. Maecenas ligula sem, pretium in interdum et, fermentum in lorem. In nisi est, varius et justo non, dictum bibendum lectus. Integer nulla elit, tempus ac ornare eu, placerat non felis. Integer sem tortor, auctor vitae diam at, mattis pretium velit. Donec fringilla, neque mattis euismod aliquet, odio risus sodales arcu, efficitur lobortis mauris sapien a magna. Morbi eros urna, vestibulum vel vehicula vel, ultricies quis nulla. Donec tempus nisl at odio pellentesque, vitae varius tortor semper. Sed tempus, leo bibendum volutpat dapibus, lectus lacus hendrerit lacus, vitae condimentum augue ligula efficitur nulla. Integer laoreet neque nunc, vel tempus diam efficitur in. Proin a lorem dictum, gravida libero porttitor, tristique nunc. Suspendisse nulla dolor, ullamcorper et faucibus id, aliquet at erat. Fusce non enim eu arcu posuere posuere in in nibh.
          </p>
          <p>
            Morbi euismod, justo eget feugiat accumsan, ex sem porta velit, eu suscipit massa mauris quis metus. Ut arcu nulla, porttitor vel ultrices non, ultrices ultrices libero. Suspendisse semper dui quis fringilla ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit, enim et egestas mollis, diam massa bibendum velit, sit amet tristique urna metus a velit. Morbi a nulla quis mi hendrerit faucibus vitae ut odio. Cras in dolor augue. Suspendisse ac porttitor massa. Ut quis accumsan metus. Cras ultricies dui a mollis suscipit. Donec faucibus condimentum purus, non mattis urna lobortis non. Vivamus ac mauris metus. Nulla ornare urna metus, et rhoncus urna ultrices ac. Suspendisse dapibus est in euismod dictum. Nunc gravida in ipsum in consectetur. Cras eu interdum nulla.
          </p>
          <img src="https://avatars.mds.yandex.net/get-pdb/2773919/0d8921f1-d0a7-4ddc-9653-6c76329cd4be/s1200?webp=false" alt="1">
          <p>
            In hac habitasse platea dictumst. Proin ac fermentum dolor. Donec eu massa eget justo viverra malesuada ut ac magna. Aliquam erat volutpat. Vivamus a velit velit. Phasellus tortor enim, bibendum vel lobortis vel, imperdiet ut leo. Donec commodo, nunc gravida consequat sodales, ligula velit interdum nunc, non sollicitudin libero felis at dolor. Cras sapien dolor, ultrices ut arcu dignissim, ultricies luctus ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam non eleifend leo.
          </p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NewsItemPage',
  head: {
    title: 'Наименование новости' + ' / Новости компании | Ревизор 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'News item page description' }
    ]
  }
}
</script>

<style>

</style>
