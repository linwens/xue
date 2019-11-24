<template>
  <div>
    <div 
      v-if="visible"
      class="xu-dialog"
      :style="{width: width}">
      <div class="xu-dialog__header">
        <slot name="header">
          <span>{{title}}</span>
        </slot>
        <xu-button 
          type="text"
          @click="handleClose"
          class="xu-dialog_headerbtn"
          v-if="showClose">x</xu-button>
      </div>
      <div class="xu-dialog__body">
        <slot></slot>
      </div>
      <div class="xu-dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <div v-if="visible && mask && !appendToBody" class="u-mask"></div>
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
      },
      appendToBody: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        type: Boolean,
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      top: {
        type: String,
        default: '15vh'
      },
      beforeClose: Function,
    },
    data(){
      return {
        closed: false
      }
    },
    watch: {
      visible(val) {
        if (val) {
          if (this.appendToBody) { // 添加到body下面
            document.body.appendChild(this.$el)
          }
        }
      }
    },
    methods: {
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
          this.closed = true;
        }
      },
    },
    destroyed(){
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
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