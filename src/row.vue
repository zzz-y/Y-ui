<template>
<div class="row" :style="rowStyle" :class="rowClass">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'y-row',
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
    },
    align: {
      type: String,
      validate(value) {
        return ['left', 'right', 'center'].includes(value);
      }
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    })
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: `${-this.gutter / 2}px`,
        marginRight: `${-this.gutter / 2}px`
      }
    },
    rowClass() {
      let {
        align
      } = this;
      return [align && `row-${align}`];
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;

  &.row-left {
    text-align: left;
  }

  &.row-right {
    text-align: right;
  }

  &.row-center {
    text-align: center;
  }
}
</style>
