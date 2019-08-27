// 为组件提供 install 方法，供组件对外按需引入
import XuNavigation from './src/navigation'
XuNavigation.install = Vue => {
  Vue.component(XuNavigation.name, XuNavigation)
}
export default XuNavigation
