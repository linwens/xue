# Dialog 对话框
<!-- {.md} -->

---
<!-- {.md} -->

### 使用方法
<!-- {.md} -->

这里是使用说明，支持标题、内容、尾部内容的自定义；注意自定义页头会覆盖title字段的内容。

<div class="demo-block">
  <xu-button type='text' @click="dialogVisible = true">打开对话框</xu-button>
  
  <xu-dialog title="提示" :visible.sync="dialogVisible">
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
  <xu-button type='text' @click="dialogVisible = true">打开对话框</xu-button>
  
  <xu-dialog title="提示" :visible.sync="dialogVisible">
    <span slot="header">
      <div>自定义页头会覆盖title</div>
    </span>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible = false">确 定</xu-button>
    </span>
  </xu-dialog>

```
:::

### 位置与尺寸
<!-- {.md} -->
我们可以直接调整dialog的位置 `top` 及宽度 `width`

<div class="demo-block">
  <xu-button type='text' @click="dialogVisible2 = true">打开对话框</xu-button>
  <xu-dialog 
    title="提示"
    width="30%"
    top="10%"
    :before-close="beforeClose"
    @open="openHandle"
    @close="closeHandle"
    @opened="openedHandle"
    @closed="closedHandle"
    :visible.sync="dialogVisible2">
    <span slot="header">
      <div>提示</div>
    </span>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible2 = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible2 = false">确 定</xu-button>
    </span>
  </xu-dialog>
</div>

:::demo
```html
  <xu-button type='text' @click="dialogVisible2 = true">打开对话框</xu-button>
  <xu-dialog 
    title="提示"
    width="30%"
    top="10%"
    :visible.sync="dialogVisible2">
    <span slot="header">
      <div>提示</div>
    </span>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible2 = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible2 = false">确 定</xu-button>
    </span>
  </xu-dialog>
```

:::

### 可拖动
<!-- {.md} -->
有时候弹窗会遮挡住原页面的内容，当我们需要确认原页面上的信息时，一个可以拖放的弹窗就很有必要。
<div class="demo-block">
  <xu-button type='text' @click="dialogVisible3 = true">打开可拖放的对话框</xu-button>
  <xu-dialog 
    title="提示"
    drag 
    :visible.sync="dialogVisible3">
    <span slot="header">
      <div>鼠标上移拖放</div>
    </span>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible3 = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible3 = false">确 定</xu-button>
    </span>
  </xu-dialog>
</div>

:::demo
```html
  <xu-button type='text' @click="dialogVisible3 = true">打开可拖放的对话框</xu-button>
  <xu-dialog 
    title="提示"
    drag 
    :visible.sync="dialogVisible3">
    <span slot="header">
      <div>鼠标上移拖放</div>
    </span>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible3 = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible3 = false">确 定</xu-button>
    </span>
  </xu-dialog>
```

:::

### 页面间停留
<!-- {.md} -->
将对话框插入的body元素下，当希望切换页面并且保留弹窗时，非常有用。注意，当前情况下不显示遮罩。

<div class="demo-block">
  <xu-button type='text' @click="dialogVisible4 = true">打开对话框</xu-button>
  
  <xu-dialog
    title="插入到body"
    :visible.sync="dialogVisible4"
    append-to-body>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible4 = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible4 = false">确 定</xu-button>
    </span>
  </xu-dialog>
</div>

:::demo
```html
  <xu-button type='text' @click="dialogVisible4 = true">打开对话框</xu-button>
  <xu-dialog
    title="插入到body"
    :visible.sync="dialogVisible4"
    width="50%"
    append-to-body>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <xu-button @click="dialogVisible4 = false">取 消</xu-button>
      <xu-button type="primary" @click="dialogVisible4 = false">确 定</xu-button>
    </span>
  </xu-dialog>
```
:::

## Attributes
<!-- {.md} -->
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 标题名称  | string  | -          |    -     |
| width     | 设置Dialog宽度  | string | -          | 50% |
| center      | dialog内容居中展示  | boolean | true/false | true |
| mask      | 是否显示遮罩层  | boolean | true/false | true |
| closeOnClickModal | 通过点击遮罩层关闭弹窗 | boolean | true/false | true |
| top       | 设置Dialog距离顶部的距离  | string | - | 30% |
| show-close | 显示关闭按钮 | boolean | true/false | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | - | - |
| drag | 弹窗是否可拖放 | boolean | true/false | false |
| appendToBody | Dialog 自身是否插入至 body 元素上 | boolean | true/false | false |

## Event
<!-- {.md} -->
| 事件名称      | 说明    | 回调参数 |
|---------- |-------- |---------- |
| open | Dialog 打开的回调  |  -     |
| close | Dialog 关闭的回调  |  -     |


<script>
  export default{
    data(){
      return {
        dialogVisible: false,
        dialogVisible2: false,
        dialogVisible3: false,
        dialogVisible4: false
      }
    },
    mounted(){
     
    },
    methods: {
      beforeClose(done){
        console.log("确定要关闭吗")
        done()
      },
      openHandle(){
        console.log("打开了弹窗")
      },
      closeHandle(){
        console.log("关闭了弹窗")
      },
      openedHandle(){
        console.log("打开后")
      },
      closedHandle(){
        console.log("关闭后")
      }
    }
  }
</script>
<style lang="scss">
  .dialog-footer {
    button:first-child {
      margin-right: 10px;
    }
  }
</style>