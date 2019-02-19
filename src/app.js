import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';

Vue.component('y-button', Button);
Vue.component('y-icon', Icon);
Vue.component('y-button-group', ButtonGroup);
Vue.component('y-input', Input);
Vue.component('y-row', Row);
Vue.component('y-col', Col);

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      message: 'hi',
    }
  },
  methods: {
    inputChange(e) {
      console.log('ddd', e)
    }
  }
});