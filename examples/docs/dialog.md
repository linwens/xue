# Dialog 对话框
<!-- {.md} -->

---
<!-- {.md} -->

### 使用方法
<!-- {.md} -->

这里是使用说明，支持标题、内容、尾部内容的自定义；注意自定义页头会覆盖title字段的内容。

<div class="demo-block">
  <xu-button type='text' @click="dialogVisible = true">打开对话框</xu-button>
  
  <xu-dialog title="提示" :visible.sync="dialogVisible" width="30%">
    <span slot="header">
      <div>自定义页头会覆盖title</div>
    </span>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible = false">确 定</xu-button>
    </span>
  </xu-dialog>
</div>

:::demo
```html
  <xu-button></xu-button>

  <xu-dialog></xu-dialog>

```
:::

### 可拖动
文字说明
<div class="demo-block"></div>

:::demo
```html

```

:::

### 页面间停留
将对话框插入的body元素下，当希望切换页面并且保留弹窗时，非常有用。注意，当前情况下不显示遮罩。

<div class="demo-block">
  <xu-button type='text' @click="dialogVisible = true">打开对话框</xu-button>
  
  <xu-dialog
    title="插入到body"
    :visible.sync="dialogVisible"
    width="30%"
    appendToBody>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible = false">确 定</xu-button>
    </span>
  </xu-dialog>
</div>

:::demo
```html

```

:::

## Attributes
<!-- {.md} -->
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 标题名称  | string  | -          |    -     |
| show-close | 显示关闭按钮 | boolean | true/false | true |

<script>
  export default{
    data(){
      return {
        dialogVisible: false
      }
    },
    mounted(){
     
    }
  }
</script>
<style lang="scss">
  
</style>