<template>
  <div>
    <div v-if="visible" class="xu-dialog" :style="{width: width}">
      <div class="xu-dialog__header">
        <slot name="header">
          <span>{{title}}</span>
        </slot>
      </div>
      <div class="xu-dialog__body">
        <slot></slot>
      </div>
      <div class="xu-dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <div v-if="visible && mask" class="u-mask"></div>
  </div>
</template>

<script>
  import XuButton from '~/button'

  export default {
    name: 'XuDialog',
    components:{
      XuButton
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '50%'
      },
      visible: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {
        
      }
    }
  };
</script>

<style lang="scss">
  .u-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.2);
    z-index: 1000;
  }
</style>