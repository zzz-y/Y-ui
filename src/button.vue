<template>
  <button class="y-button" :class="[iconRight?'icon-right':'']"
  @click="$emit('click')">
    <y-icon class="icon" v-if="icon&&!loading" :name="icon"></y-icon>
    <y-icon class="icon loading" v-if="loading" name="loading"></y-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon';
  export default {
    name: 'button',
    components: {
      'y-icon': Icon,
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false,
      },
      iconRight: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="scss">
  @keyframes spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }
  .y-button {font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
    border-radius: var(--border-radius);border: 1px solid var(--border-color);background: var(--button-bg);
    display: inline-flex;justify-content: center;align-items: center;vertical-align: middle;

    &:hover {border-color: var(--border-color-hover);}

    &:active {border-color: var(--button-active-bg);}

    &:focus {outline: none;}

    > .icon {order: 1;margin-right: .3em;}

    > .content {order: 2;}

    &.icon-right {
      > .icon {order: 2;margin-right: 0;margin-left: .3em;}
      > .content {order: 1;}
    }

    .loading{
      animation: spin 2s infinite linear;
    }
  }
</style>