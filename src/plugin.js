import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message) => {
      let constructor = Vue.extend(Toast);
    }
  }
}
