/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import XuButton from './button'
import XuIcon from './icon'
const version = '0.1.0'
const components = [
  XuButton,
  XuIcon
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
  XuIcon
}
export default {
  install,
  version
}
