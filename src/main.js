import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import bootstrapVue from 'bootstrap-vue'

// libs
import './libs/vue-unicons'
import './libs/vee-validate'
import './libs/toastification'
import './libs/moment'
import i18n from './libs/i18n/index'

// css
import './assets/scss/global.scss'

// import '@datas/db'

// plugins
import user from './plugins/users'
import article from './plugins/articles'

Vue.use(bootstrapVue)
Vue.use(user)
Vue.use(article)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
