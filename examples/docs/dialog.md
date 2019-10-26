# Dialog 对话框
<!-- {.md} -->

---
<!-- {.md} -->

### 使用方法
<!-- {.md} -->

这里是使用说明

<div class="demo-block">
  <xu-button type='text' @click="dialogVisible = true">打开对话框</xu-button>
  
  <xu-dialog title="提示" :visible.sync="dialogVisible" width="30%">
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

## Attributes
<!-- {.md} -->
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 图标名称  | string  | -          |    -     |

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