// 为组件提供 install 方法，供组件对外按需引入
import XuButton from './src/button'
XuButton.install = Vue => {
  Vue.component(XuButton.name, XuButton)
}
export default XuButton
