<template>
  <div class="m-index">
    <div class="m-ban">
      <img src="../assets/img/logo.png">
      <p class="mt40">Xue-UI</p>
      <p class="mt10">一款自己用的前端 UI 组件库</p>
      <div class="df s-jcc mt30">
        <router-link :to="{name: 'giud'}">
          <xu-button class="mr20">开始使用</xu-button>
        </router-link>
        <a target="_blank" class="btn-github" href="https://github.com/linwens/xueui-demo">
          <xu-button>GitHub</xu-button>
        </a>
      </div>
    </div>
    <div class="m-intro">
      <div class="df s-aic">
        <xu-icon class="xu-icon-mission fs-24"></xu-icon>
        <div class="ml20">
          <h2>目标与定位</h2>
          <p>希望能作为其他优秀UI库组件的补充，支持全局与局部引入</p>
        </div>
      </div>
      <div class="df s-aic">
        <xu-icon class="xu-icon-personal fs-24"></xu-icon>
        <div class="ml20">
          <h2>个人维护</h2>
          <p>初衷是公司项目完结后的总结，写了几个组件。希望能坚持维护，扩充自己的UI库</p>
        </div>
      </div>
      <div class="df s-aic">
        <xu-icon class="xu-icon-beCareful fs-24"></xu-icon>
        <div class="ml20">
          <h2>使用需谨慎</h2>
          <p>欢迎交流，欢迎提issue</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        height: document.documentElement.clientHeight
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
  .m-index {
    .m-ban {
      margin: 0 auto;
      text-align: center;
      padding: 100px 0;
      background: #ecf6fb;
      p{
        color: #6a8bad;
        &:nth-child(2) {
          font-size: 40px;
        }
        &:nth-child(3) {
          font-size: 26px;
        }
      }
    }
    .m-intro {
      width: 960px;
      margin: 0 auto;
      border-top: 1px solid #eee;
      [class^="xu-icon-"] {
        font-size: 40px;
        color: #6a8bad;
      }
      >div.df {
        margin: 20px 0;
        h2 {
          font-size: 22px;
          font-weight: normal;
          color: #3a5169;
        }
        p {
          font-size: 14px;
          color: #4e6e8e;
        }
      }
    }
  }
</style>
