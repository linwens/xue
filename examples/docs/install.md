# 安装与使用
<!-- {.md} -->

----
<!-- {.md} -->

## 使用 npm 安装
<!-- {.md} -->

推荐使用 npm 的方式安装

```bash
// 安装
npm install xu --save-dev
```
## 开始使用
<!-- {.md} -->

```bash
// 引入全部组件
import Vue from 'vue';
import Xu from 'xu-ui';
import '../node_modules/xu-ui/lib/theme-default/index.css'
Vue.use(Xu);

// 按需引入部分组件
import { Button, Icon } from 'xu-ui';
import '../node_modules/xu-ui/lib/theme-default/index.css'
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
```


