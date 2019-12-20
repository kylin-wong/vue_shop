import Vue from 'vue'
import App from './App.vue'
import router from './router'
// element
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'

// 配置axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
// 每一个vue的组件 都可以通过this 直接访问到$http 发起ajax请求
// this.$http 就是axios请求
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
