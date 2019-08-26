# 安装
<!-- {.md} -->

----
<!-- {.md} -->

## 使用 npm 安装
<!-- {.md} -->

推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用

```bash
// 安装
npm install xue --save-dev
```

```bash
// 引入全部组件
import Vue from 'vue';
import Xue from 'xue-ui';
Vue.use(Xue);

// 按需引入部分组件
import { Button, Icon } from 'xue-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```


