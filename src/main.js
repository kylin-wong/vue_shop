import Vue from 'vue'
import App from './App.vue'
import router from './router'
// element
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
import Mbx from './components/Mbx/Mbx.vue'

// 配置axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
// 请求拦截器
axios.interceptors.request.use(config => {
  // console.log(config)
  // 将服务器发出的token放入 请求头中的Authorization字段 第一次登录期间 服务器没有颁发token令牌
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 面包屑导航
Vue.component('mbx', Mbx)
// 每一个vue的组件 都可以通过this 直接访问到$http 发起ajax请求
// this.$http 就是axios请求
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
