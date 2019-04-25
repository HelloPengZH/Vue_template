import Vue from 'vue'
import App from './App.vue'
import router from '@/route'

Vue.config.productionTip = false
// 注入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)   
// 注入公共JS
import Axios from './utils/axios'
Vue.prototype.$http = Axios 
// 注入公共样式
import '@/styles/index.less'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
