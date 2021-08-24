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

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import "vue-select/dist/vue-select.css"; // css
import 'flatpickr/dist/flatpickr.css';

import '@datas/db'

import user from './plugins/users'
import article from './plugins/articles'

Vue.use(bootstrapVue)
Vue.use(user)
Vue.use(article)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
