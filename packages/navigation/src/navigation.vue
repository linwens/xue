<template>
  <div id="m-navibar">
    <!-- 右侧导航栏组件 -->
    <div v-if="isShow">
      <div>
        <xu-button @click="toggleBar" type="primary" icon="xu-icon-taobao" style="padding:7px 8px!important;"></xu-button>
        <div class="m-anchorList df s-fdc s-aic s-jcc pl7 pr4" v-show="isShow">
          <div class="u-item ta-c df s-jcsb s-aic cp" v-for="(item, index) in anchorList" :key="index" :class="{'s-hide':item.status===3}">
            <span v-if="item.status===2" v-scroll-to="{
              el: '#'+item.idStr,
              onStart: onStart,
            }">{{item.title}}</span>
            <span v-else>{{item.title}}</span>
            <div @click="toggleShow(item)" class="show-ib w20 h20">
              <i class="el-icon-diy1" v-if="item.status===1"></i><!-- 当前 -->
              <i class="el-icon-diy2" v-else-if="item.status===2"></i><!-- 显示 -->
              <i class="el-icon-diy3" v-else></i><!-- 隐藏 -->
            </div>
          </div>
          <span class="mt10">备注：使用中括号内快捷 键可快速操作定位功能</span>
        </div>
      </div>
    </div>
    <div v-else>
      <xu-button @click="toggleBar" type="primary" icon="xu-icon-google" style="padding:7px 8px!important;"></xu-button>
    </div>
  </div>
</template>
<script>
  import XuButton from '~/button'
  
  export default{
    name: 'XuNavigation',
    components: {
      XuButton
    },
    props:{
      pageModules:{ //页面上存在的内容模块
        type:Object,
        default:function(){
          return {}
        }
      },
    },
    data(){
      return {
        isShow:false,//是否显示导航栏
        anchorList:[],//各个导航内容的组件
      }
    },
    watch:{
      pageModules:function(n,o){
        // console.log('pageModules')
        this.createList();
      }
    },
    mounted(){
      //监听页面滚动
      this.createList();
    },
    methods:{
      onStart(item){
        // console.dir(item);
        let id = item.id;
        for(let [index, elem] of this.anchorList.entries()){
          if(elem.idStr===id){
            elem.status=1
          }else if(elem.idStr!==id&&elem.status===1){
            elem.status=2
          }
        }
      },
      //生成导航栏数据
      createList(){
        const title = {
          'baseInfo':'车辆信息',
          'imageInfo':'照片信息',
          'distribution':'配送信息',
          'fullLog':'完整日志',
          'keepRecord':'跟进记录',
          'linkedOrder':'关联订单',
          'payInfo':'支付信息',
          'phoneBook':'电话簿',
          'quoteTwo':'保单信息',
          'quote':'报价信息',
          'settlement':'结算信息',
        };
        let newList = [],count=0;
        let keyRules = [ // 快捷键规则文案
          '[Shift+1]','[Shift+2]','[Shift+3]','[Shift+4]','[Shift+5]','[Shift+Q]','[Shift+W]','[Shift+E]','[Shift+R]','[Shift+T]',
          '[Alt+1]','[Alt+2]','[Alt+3]','[Alt+4]','[Alt+5]','[Alt+Q]','[Alt+W]','[Alt+E]','[Alt+R]','[Alt+T]',
        ];
        // console.log(this.pageModules)
        for(let [key, value] of Object.entries(this.pageModules)){
          let idStr = value.$el.id;
          if(value.$el.style.display!=="none"){
            newList.push({
              name:key,
              title:title[key]+keyRules[count],
              idStr:idStr,
              status:2
            })
            count++
          }
        }
        this.anchorList = newList;
      },
      //显示隐藏导航栏
      toggleBar(){
        this.isShow = !this.isShow;
        if(this.isShow){
          let _that = this;
          document.onkeydown = function (e) {
            let key = window.event?e.keyCode:e.which;
            let shiftKey = e.shiftKey;//确定按了shift
            let altKey = e.altKey;//确定按了alt
            let codes = [
              shiftKey&&key===49,
              shiftKey&&key===50,
              shiftKey&&key===51,
              shiftKey&&key===52,
              shiftKey&&key===53,
              shiftKey&&key===81,
              shiftKey&&key===87,
              shiftKey&&key===69,
              shiftKey&&key===82,
              shiftKey&&key===84,
              altKey&&key===49,
              altKey&&key===50,
              altKey&&key===51,
              altKey&&key===52,
              altKey&&key===53,
              altKey&&key===81,
              altKey&&key===87,
              altKey&&key===69,
              altKey&&key===82,
              altKey&&key===84,
            ]; //控制key值对应的索引规则
            for(let [index, elem] of codes.entries()){
              if(elem&&_that.anchorList[index]&&_that.anchorList[index].status===2){ // 有这个键的监听通过有这个内容模块
                _that.$scrollTo('#'+_that.anchorList[index].idStr,100,{
                  onStart:_that.onStart
                }) //时间必须给出，不然有个诡异的bug
              }
            }
          }
        }else{
          document.onkeydown = null;
        }
      },
      //显示隐藏切换
      toggleShow(item){
        if(item.status===1) return;
        if(item.status===2){
          item.status=3;
          this.toggleModule(item.name);
        }else if(item.status===3){
          item.status=2;
          this.toggleModule(item.name);
        }
      },
      //隐藏当前内容模块
      toggleModule(key){
        let state = this.pageModules[key].$el.style.display;
        this.pageModules[key].$el.style.display = state==='none'?'block':'none';
        this.$emit('update:pageModules', this.pageModules);
      },
      //跳转至
      goTo(){},
    }
  }
</script>
<style lang="scss">
  #m-navibar{
    position: fixed;
    right: 0;
    top: 20%;
    .m-anchorList{
      width:161px;
      padding: 20px 0;
      background:#F5FBFF;
      border-radius:5px;
      color: #2D353F;
      box-shadow: -2px 2px 10px 0.1px rgba(0,0,0,0.25);
      .u-item{
        width: 90%;
        height: 29px;
        line-height: 29px;
        border-bottom: 1px solid #D4E1EA;
        >div{
          line-height: 22px;
          border-radius: 20px;
          background: #fff;
          box-shadow: 2px 1px 2px 0.1px rgba(0,0,0,0.25);
        }
      }
      .el-icon-diy1{
        &:before{
          content:'';
          display: inline-block;
          width: 14px;
          height: 11px;
          background: url('./icon_position.png') no-repeat center;
        }
      }
      .el-icon-diy2{
        &:before{
          content:'';
          display: inline-block;
          width: 14px;
          height: 11px;
          background: url('./icon_display.png') no-repeat center;
        }
      }
      .el-icon-diy3{
        &:before{
          content:'';
          display: inline-block;
          width: 14px;
          height: 12px;
          background: url('./icon_hide.png') no-repeat center;
        }
      }
    }
    .s-hide{
      color: #666;
      background: #fff;
    }
  }
</style>