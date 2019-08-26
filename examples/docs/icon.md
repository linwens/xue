# Icon 图标
<!-- {.md} -->

---
<!-- {.md} -->

### 使用方法
<!-- {.md} -->

直接通过<!-- {.md} -->设置类名为 `xu-icon-iconName` 来使用即可。例如：

<div class="demo-block">
  <xu-icon class="xu-icon-taobao fs-24"></xu-icon>
  <xu-icon class="xu-icon-github fs-24"></xu-icon>
  <xu-icon class="xu-icon-facebook fs-24"></xu-icon>
</div>

:::demo
```html
<xu-icon class="xu-icon-taobao fs-24"></xu-icon>
<xu-icon class="xu-icon-github fs-24"></xu-icon>
<xu-icon class="xu-icon-facebook fs-24"></xu-icon>

```
:::

### 图标集合
<!-- {.md} -->

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'xu-icon-' + name"></i>
      <span class="icon-name">{{'xu-icon-' + name}}</span>
    </span>
  </li>
</ul>

## Attributes
<!-- {.md} -->
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 图标名称  | string  | -          |    -     |
| color    | 图标颜色  | string  | -           |    -    |
| size    | 图标大小  | number  | -           |    -    |
| symbol    | 是否多色（开启将以`svg`标签方式引入图标）  | boolean  | `true`,`false`          |    `true`     |


<style lang="scss">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #3f536e;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>