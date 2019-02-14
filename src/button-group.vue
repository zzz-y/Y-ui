<template>
  <div class="y-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'button-group',
    mounted() {
      for(let node of this.$el.children){
        if(node.nodeName.toLowerCase() !== 'button'){
          console.warn('y-button-group 的子元素应该全是 y-button')
        }
      }
    },
  }
</script>

<style lang="scss">
  .y-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .y-button{
      border-radius: 0;
      &:not(:first-child){margin-left: -1px;}
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>