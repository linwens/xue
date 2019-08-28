# Navigation导航条
<!-- {.md} -->

---
<!-- {.md} -->
当页面展示很多内容时候，navigation组件会很有用，它基于scroll快速定位到想要看的内容块，同时可以设置内容块(必须是vue组件)的展示与隐藏
<!-- {.md} -->

### 基础用法
<div class="fs20 cl-red df">
  <xu-icon class="xu-icon-taobao fs24" ref="basicUse" id="basicUse" title="基础用法"></xu-icon>
  锚点一
</div>
<!-- {.md} -->

pageModules规定了要用到导航栏的模块信息，用来控制scroll滑动，内容块的显示隐藏等。
需要展示的内容块，可以通过 `ref` ,`id`来标记；`title`用于设置导航栏上展示的文案，每个条目会自动配置导航快捷键

<div class="demo-block">
  请查看右侧---->
  <xu-navigation :pageModules.sync="pageModules" :duration="800" easing="ease-in-out" :width="200" :offset="-20"></xu-navigation>
</div>

:::demo
```html
  <template>
    <div>
      <xu-icon class="xu-icon-taobao fs-24" ref="basicUse" id="basicUse" title="基础用法"></xu-icon>
      <xu-icon class="xu-icon-taobao fs-24" ref="width" id="width" title="设置样式"></xu-icon>
      <xu-icon class="xu-icon-taobao fs-24" ref="easeStyle" id="easeStyle" title="调整滚动效果"></xu-icon>
      <xu-icon class="xu-icon-taobao fs-24" ref="attribute" id="attribute" title="参数配置"></xu-icon>
      <xu-navigation :pageModules.sync="pageModules"></xu-navigation>
    </div>
  <template>
  <script>
    export default{
      data(){
        return {
          pageModules: {}
        }
      },
      mounted(){
        this.pageModules = this.$refs
      }
    }
  </script>
```
:::

### 定位偏移
<div class="fs20 cl-red df">
  <xu-icon class="xu-icon-taobao fs24" ref="offset" id="offset" title="定位偏移"></xu-icon>
  锚点二
</div>
<!-- {.md} -->

可以通过 `offset` 设置定位偏移。其中  `负值` 向上偏移，`正值` 向下偏移

:::demo
```html
  <template>
    <div>
      <xu-navigation :pageModules.sync="pageModules" :offset="20"></xu-navigation>
    </div>
  <template>
  <script>
    export default{
      data(){
        return {
          pageModules: {}
        }
      },
      mounted(){
        this.pageModules = this.$refs
      }
    }
  </script>
```
:::

### 设置样式
<div class="fs20 cl-red df">
  <xu-icon class="xu-icon-taobao fs24" ref="width" id="width" title="设置样式"></xu-icon>
  锚点三
</div>
<!-- {.md} -->

可以通过 `width` 设置导航栏宽度; 通过`position`设置定位

:::demo
```html
  <template>
    <div>
      <xu-navigation :pageModules.sync="pageModules" :width="200" position="left"></xu-navigation>
    </div>
  <template>
  <script>
    export default{
      data(){
        return {
          pageModules: {}
        }
      },
      mounted(){
        this.pageModules = this.$refs
      }
    }
  </script>
```
:::

### 调整滚动效果
<div class="fs20 cl-red df">
  <xu-icon class="xu-icon-taobao fs24" ref="easeStyle" id="easeStyle" title="调整滚动效果"></xu-icon>
  锚点四
</div>
<!-- {.md} -->

可以通过`duration`,`easing`两个属性分别控制过度时间，以及过度效果

:::demo
```html
  <template>
    <div>
      <xu-navigation :pageModules.sync="pageModules" :duration="1000" easing="linear"></xu-navigation>
    </div>
  <template>
  <script>
    export default{
      data(){
        return {
          pageModules: {}
        }
      },
      mounted(){
        this.pageModules = this.$refs
      }
    }
  </script>
```
:::

### 参数配置
<div class="fs20 cl-red df">
  <xu-icon class="xu-icon-taobao fs24" ref="attribute" id="attribute" title="参数配置"></xu-icon>
  锚点五
</div>

<!-- {.md} -->
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| pageModules | 内容块数据 | object | - | - |
| position | 导航栏定位 | string  | left, right | right |
| offset | 定位偏移 | number | 值 < 0 向上，值 > 0 向下 | 0 |
| width | 导航栏宽度 | number | - | 160 |
| duration | 滑动时间 | number | - | 500 |
| easing | 过度动画 | string | ease， linear， ease-in， ease-out， ease-in-out | ease |

<script>
  export default{
    data(){
      return {
        pageModules: {}
      }
    },
    mounted(){
      this.pageModules = this.$refs;
      console.log(this.pageModules)
    }
  }
</script>
<style lang="scss">
  
</style>