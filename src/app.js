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
import contextMenu from './contextMenu';
import Toast from './toast';
import plugin from './plugin';

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
Vue.component('y-context-menu', contextMenu);
Vue.component('y-toast', Toast);
Vue.use(plugin);

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      message: 'hi',
      contentMenuOptions: [
        {
          name: '数据源预览',
          icon: '',
          hide: true,
        },
        {
          name: '数据源可视化',
          icon: '',
          disable: true,
          hide: true,
        },
        {
          name: '重命名',
          icon: 'info',
          fun: () => {
            console.log('重命名');
          }
        },
        {
          name: '删除',
          icon: '',
          splitLine: true,
          fun: () => {
            console.log('删除');
          }
        },
        {
          name: '移动数据源至',
          icon: '',
          splitLine: true,
          subMenu: [
            {
              name: '数据源预览',
              icon: '',
              // hide: true,
            },
            {
              name: '数据源可视化',
              icon: '',
              disable: true,
              // hide: true,
            },
          ],
        },
        {
          name: '添加分组',
          icon: '',
        },
        {
          name: '数据源管理器',
          icon: '',
        },
      ],
    }
  },
  mounted() {
    document.addEventListener('click', (e) => { // .children
      this.closeAllMenu();
      /*const sp = document.getElementById(`textPanel${this.titleItem.groupId}`);
      if (sp) {
        if (!sp.contains(e.target)) {
          this.$emit('submit');
        }
      }*/
    });
    document.oncontextmenu = () => false;
  },
  methods: {
    showToast() {
      this.$toast('当前功能不稳定，如果遇到bug请关闭该功能')
    },
    inputChange(e) {
      console.log('ddd', e)
    },
    openContextMenu(event) {
      document.oncontextmenu = () => false;
      if (event.button === 2) {
        this.closeAllMenu();
        document.getElementById('sourceBlankMenu').style.left = `${event.clientX}px`;
        document.getElementById('sourceBlankMenu').style.top = `${event.clientY}px`;
        document.getElementById('sourceBlankMenu').style.display = 'block';
        this.contentMenuOptions[0].fun = () => {
          console.log('sss');
        };
        this.contentMenuOptions[1].fun = () => {
          console.log('ddd');
        };
      }
    },
    closeAllMenu() {
      const menus = document.getElementsByClassName('context-menu');
      for (let i = 0; i < menus.length; i++) {
        menus[i].style.display = 'none';
      }
    },
  }
});
