// 为组件提供 install 方法，供组件对外按需引入
import XuIcon from './src/icon'
XuIcon.install = Vue => {
  Vue.component(XuIcon.name, XuIcon)
}
export default XuIcon
