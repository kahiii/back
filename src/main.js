import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import bootstrapVue from 'bootstrap-vue'

//libs
import './libs/vue-unicons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/global.scss'

Vue.use(bootstrapVue)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
