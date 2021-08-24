import article from '../services/articles'

export default {
  install: function(Vue) {
    Vue.prototype.$article = article
  }
}