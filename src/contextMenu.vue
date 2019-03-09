<template>
    <div class="context-menu">
        <div class="context-menu-item"
             :class="{'split-line':item.splitLine, 'disabled': item.disable}"
             v-for="(item,index) in options"
             :key="index"
             v-show="!item.hide"
             @click="onclick(item)"
             @mouseover="mouseOver($event, item)"
             @mouseleave="mouseLeave($event, item)">
            <i :class="item.icon"></i>
            {{item.name}}
            <i class="el-icon-arrow-right" v-if="item.subMenu"></i>
            <context-menu class="children" v-if="item.subMenu" :options="item.subMenu" style="margin-top: -35px;"></context-menu>
        </div>
    </div>
</template>
<script>
export default {
  name: 'contextMenu',
  props: {
    options: { type: Array },
  },
  created() {
  },
  methods: {
    /* eslint-disable no-param-reassign */
    onclick(item) {
      if (!item.disable && item.fun) {
        item.fun();
      }
    },
    mouseOver($event, item) {
      if (item.subMenu) {
        if (!($event.toElement.childElementCount < 3)) {
          $event.toElement.lastChild.style.left = `${$event.toElement.clientWidth + $event.target.parentElement.offsetLeft + 3}px`;
          $event.toElement.lastChild.style.display = 'block';
        }
      }
    },
    mouseLeave($event, item) {
      if (item.subMenu && $event.fromElement.offsetParent) {
        if ($event.fromElement.offsetParent.contains($event.toElement)) {
          $event.fromElement.lastChild.style.display = 'none';
        }
      }
    },
  },
};
</script>
<style scoped lang="scss">
    .context-menu {
        border: 1px solid var(--border-color);
        border-radius: 3px;
        background: #ffffff;
        position: fixed;
        display: none;
        .context-menu-item{
            cursor: pointer;
            line-height: 34px;
            padding-left: 30px;
            padding-right: 20px;
            min-width: 50px;
            &:hover{
                border-color: var(--border-color-hover);
            }
            &.split-line{
                border-bottom: 1px solid var(--border-color);
            }
            &.disabled {
                color: #cccccc;
                cursor: not-allowed;
                &:hover {
                    background: transparent;
                }
            }
            i{
                float: right;
                margin-left: 10px;
                line-height: 34px;
            }
        }
    }
</style>
