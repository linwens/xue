<template>
  <button
    @click="$emit('click')"
    class="xu-button"
    :disabled="disabled"
    :class="[
    'xu-button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round, 'is-loading': loading},
    'xu-button--'+size
    ]"
  >
    <i class="xu-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span><slot></slot></span>
  </button>
</template>
<script>
  export default{
    name: 'XuButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean,
      loading: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
