<style type="text/scss" lang="scss">
  @import "../assets/scss/index";
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      height: 80px;
    }
  }
</style>
<template>
  <header class="page-header" v-if="$route.name !== 'index'" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container df s-jcsb s-aic">
      <router-link :to="{name: 'index'}" class="w70"><img src="../assets/img/logo.png" style="width: 100%;"></router-link>
      <div>
        <a target="_blank" class="cl-blue mr10" href="https://www.shy-u.top"><xu-button type="text" class="fs16">作者主页</xu-button></a>
        <router-link :to="{name: 'giud'}" class="cl-blue mr10"><xu-button type="text" class="fs16">组件</xu-button></router-link>
        <a target="_blank" class="cl-blue mr10" href="https://github.com/linwens/xue"><xu-button type="text" class="fs16">GitHub</xu-button></a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
