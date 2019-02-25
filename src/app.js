import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Footer from './footer';

Vue.component('y-button', Button);
Vue.component('y-icon', Icon);
Vue.component('y-button-group', ButtonGroup);
Vue.component('y-input', Input);
Vue.component('y-row', Row);
Vue.component('y-col', Col);
Vue.component('y-layout', Layout);
Vue.component('y-header', Header);
Vue.component('y-sider', Sider);
Vue.component('y-content', Content);
Vue.component('y-footer', Footer);

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