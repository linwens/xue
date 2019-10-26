/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import XuButton from './button'
import XuDialog from './dialog'
import XuIcon from './icon'
import XuNavigation from './navigation'
const version = '0.2.2'
const components = [
  XuButton,
  XuDialog,
  XuIcon,
  XuNavigation
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  XuButton,
  XuDialog,
  XuIcon,
  XuNavigation
}
export default {
  install,
  version
}
