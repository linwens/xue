# Navigation导航条
<!-- {.md} -->

---
<!-- {.md} -->

### 使用方法
<!-- {.md} -->

直接通过<!-- {.md} -->设置类名为 `xu-icon-iconName` 来使用即可。例如：

<div class="demo-block">
  <xu-navigation class="xu-icon-taobao fs-24"></xu-navigation>
</div>

:::demo
```html
<div class="demo-block">
  <xu-navigation class="xu-icon-taobao fs-24"></xu-navigation>
</div>

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
  
</style>