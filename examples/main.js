import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import XuUI from '../packages'
import '../packages/theme-default/lib/index.css'

import icon from './icon.json'
Vue.prototype.$icon = icon
Vue.config.productionTip = false
Vue.use(XuUI)
Vue.component('demo-block', demoBlock)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
