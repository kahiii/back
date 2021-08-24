import user from '../services/users'

export default {
  install: function(Vue) {
    Vue.prototype.$user = user
  }
}