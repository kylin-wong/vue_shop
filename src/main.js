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
import TreeTable from 'vue-table-with-tree-grid'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

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

Vue.component('tree-table', TreeTable)
// 将富文本编辑器,注册为全局可用的组件
Vue.use(VueQuillEditor)
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
