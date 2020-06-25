<template>
  <div id="feedback" class="is-feedback" style="background:url(/assets/img/feedbackBg.jpg)">
    <b-container>
      <h2>
        Остались вопросы?
        <span>
          Мы поможем Вам!
        </span>
      </h2>
      <b-row>
        <b-col md="12" lg="6">
          <form @submit.prevent="submit">
            <b-row>
              <b-col>
                <b-form-input type="text" placeholder="Имя" required />
              </b-col>
              <b-col>
                <b-form-input type="tel" placeholder="Телефон" required />
              </b-col>
            </b-row>
            <b-row style="margin-top:2em;">
              <b-col>
                <b-form-textarea
                  id="textarea"
                  placeholder="Ваш вопрос"
                  rows="2"
                  max-rows="2"
                  required
                />
              </b-col>
            </b-row>
            <b-row style="margin-top:2em;">
              <b-col md="4" style="position: relative;align-items: center;display: flex;">
                <input class="btn is-btn-feedback" type="submit" name="formSubmit" value="Отправить">
              </b-col>
              <b-col md="8" class="d-flex" style="align-items:center;">
                <div class="custom-control custom-checkbox">
                  <input id="defaultUnchecked" type="checkbox" class="custom-control-input" required>
                  <label class="custom-control-label" for="defaultUnchecked"><router-link to="/policy" exact>С политикой конфидициальных данных ознакомлен</router-link></label>
                </div>
              </b-col>
            </b-row>
          </form>
        </b-col>
        <b-col md="12" lg="6" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>

</style>
