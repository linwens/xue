// 为组件提供 install 方法，供组件对外按需引入
import XuDialog from './src/dialog'
XuDialog.install = Vue => {
  Vue.component(XuDialog.name, XuDialog)
}
export default XuDialog
