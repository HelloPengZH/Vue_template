import Vue from 'vue';
//引入vue
import App from './App.vue';
//引入 注主模块

//注入分模块


// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';

// 6.0 导入一个当前系统的全局基本样式
import '../statics/css/site.css';

// 7.0 将vue-resource在vue中绑定，自动在vue实例对象上注入一个$http对象就可以使用ajax方法请求数据

import vueRouter  from 'vue-router';
Vue.use(vueRouter)

import login  from './components/account/login.vue';
import register  from './components/account/register.vue';



var router = new vueRouter({
    linkActiveClass:'miu-active',
    routes:[
        {
            path:"/login",
            component:login
        },
        {
            path:"/register",
            component:register
        }
    ]
})

new Vue({
	el:'#app',
    render: function (create) {
        return create(App)
    }, //es5的写法
    // render:c=>c(App)  // es6的函数写法 =>：goes to
    router
});