import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)



// 6.0 导入一个当前系统的全局基本样式
import '../static/css/site.css';

// 7.0 将vue-resource在vue中绑定，自动在vue实例对象上注入一个$http对象就可以使用ajax方法请求数据

import vueRouter  from 'vue-router';
Vue.use(vueRouter)

// import login  from './components/account/login.vue';
// import register  from './components/account/register.vue';



// var router = new vueRouter({
//     linkActiveClass:'miu-active',
//     routes:[
//         {
//             path:"/login",
//             component:login
//         },
//         {
//             path:"/register",
//             component:register
//         }
//     ]
// })
import router from './router/router.js'

new Vue({
	el:'#app',
    render: function (create) {
        return create(App)
    }, //es5的写法
    // render:c=>c(App)  // es6的函数写法 =>：goes to
    router
});