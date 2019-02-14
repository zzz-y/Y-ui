import Vue from 'vue';
import Button from './button';
import Icon from './icon';

Vue.component('y-button', Button);
Vue.component('y-icon', Icon);
new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  }
});