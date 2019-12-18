<template>
  <div>
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
      <div
        class="xu-dialog__wrapper"
        v-drag="drag"
        v-if="visible">
          <div
            ref="dialog"
            :class="['xu-dialog', {'xu-dialog--center': center}, customClass]"
            :style="style">
            <div class="xu-dialog__header">
              <slot name="header">
                <span>{{title}}</span>
              </slot>
              <div
                @click="handleClose"
                v-if="showClose"
                class="xu-dialog__headerbtn">
                <xu-icon class="xu-icon-close fs12 xu-dialog__close"></xu-icon>
              </div>
            </div>
            <div class="xu-dialog__body">
              <slot></slot>
            </div>
            <div class="xu-dialog__footer">
              <slot name="footer">
                <div class="df s-jcfe">
                  <div class="mr10" @click="doCancel">
                    <!-- 直接把@click放到 xu-button上的话，页面切换会丢失 -->
                    <xu-button>取 消</xu-button>
                  </div>
                  <div @click="doConfirm">
                    <xu-button type="primary">确 定</xu-button>
                  </div>
                </div>
              </slot>
            </div>
          </div>
      </div>
    </transition>
    <div
      @click.self="handleWrapperClick"
      v-if="visible && mask && !appendToBody"
      class="u-mask"></div>
  </div>
</template>

<script>
import XuButton from '~/button'
import XuIcon from '~/icon'

export default {
  name: 'XuDialog',

  components: {
    XuButton,
    XuIcon
  },

  directives: {
    drag: { // 拖动指令
      bind (el, binding, vnode, oldVnode) {
        // 如果不设置拖放，return
        if (!binding.value) return
        const dialogHeaderEl = el.querySelector('.xu-dialog__header')
        const dragDom = el.querySelector('.xu-dialog')
        // dialogHeaderEl.style.cursor = 'move';
        dialogHeaderEl.style.cssText += ';cursor:move;'
        dragDom.style.cssText += ';margin-top:0px;' // elementui 会自动加margin-top
        dialogHeaderEl.onmousedown = (e) => {
          // 鼠标按下，计算当前元素距离可视区的距离
          const disX = e.clientX - dragDom.offsetLeft
          const disY = e.clientY - dragDom.offsetTop
          document.onmousemove = function (e) {
            // 通过事件委托，计算移动的距离
            let left = e.clientX - disX
            let top = e.clientY - disY
            dragDom.style.left = left + 'px'
            dragDom.style.top = top + 'px'
          }

          document.onmouseup = function (e) {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    }
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
    drag: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '30%'
    },
    center: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    beforeClose: Function,
    confirm: Function,
    cancel: Function
  },

  computed: {
    style () {
      let style = {}
      style.top = this.top
      if (this.width) {
        style.width = this.width
      }
      return style
    }
  },

  data () {
    return {
      closed: false
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.closed = false
        this.$emit('open')
        if (this.appendToBody) { // 添加到body下面
          document.body.appendChild(this.$el)
        }
      } else {
        if (!this.closed) this.$emit('close')
      }
    }
  },
  methods: {
    doCancel () {
      if (typeof this.cancel === 'function') {
        this.cancel(this.hide)
      } else {
        this.hide()
      }
    },
    doConfirm () {
      if (typeof this.confirm === 'function') {
        this.confirm(this.hide)
      } else {
        this.hide()
      }
    },
    handleDrag () {},
    handleWrapperClick () {
      if (!this.closeOnClickModal) return
      this.handleClose()
    },
    handleClose () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide (cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.$emit('close')
        this.closed = true
        if (this.appendToBody) { // 如果是插到body里的，点关闭销毁
          // 会没有过渡动画
          this.$el.parentNode.removeChild(this.$el)
        }
      }
    },
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    }
  },
  destroyed () {
    // if (this.appendToBody && this.$el && this.$el.parentNode) {
    //   this.$el.parentNode.removeChild(this.$el);
    // }

    if (this.$el && this.$el.parentNode) {
      if (!this.appendToBody) { // 如果是插到body里的，页面切换的时候不销毁
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  }
}
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
