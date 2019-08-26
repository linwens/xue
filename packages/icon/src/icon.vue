<template>
  <i :class="'xu-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'XuIcon',
    props: {
      name: String
    }
  };
</script>