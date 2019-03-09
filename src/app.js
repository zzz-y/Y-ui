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
          icon: '',
        },
        {
          name: '删除',
          icon: '',
          splitLine: true,
        },
        {
          name: '移动数据源至',
          icon: '',
          splitLine: true,
          subMenu: [],
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
  methods: {
    inputChange(e) {
      console.log('ddd', e)
    },
    openContextMenu(event) {
      const ele = document.getElementsByClassName('source-tab')[0];
      const isBlank = (event.target === ele) ? false : ele.contains(event.target);
      if (!isBlank && event.button === 2 && this.current) {
        //this.closeAllMenu();
        $('#sourceBlankMenu')[0].style.left = `${event.clientX}px`;
        $('#sourceBlankMenu')[0].style.top = `${event.clientY}px`;
        $('#sourceBlankMenu')[0].style.display = 'block';
        console.log(this.$refs[`sourceTab${this.current}`], event);
        this.sourceBlankOptions[0].fun = () => {
          this.addGroup();
        };
        this.sourceBlankOptions[1].fun = () => {
          const item = sourceList.data.filter(d => d.division === this.current)[0];
          this.$modal.show(dataSourceManager, {
            name: item.name,
            selectedVal: item.groups[0],
            division: this.current,
          }, {
            draggable: true,
            clickToClose: false,
            classes: 'custom-modal',
            width: 750,
            height: 500,
          });
        };
      }
    },
  }
});