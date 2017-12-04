import Vue from 'vue';
//引入vue
import App from './App.vue';
//引入 注主模块
import vueRouter  from 'vue-router';
//引入路由
Vue.use(vueRouter)
//注入分模块
import login  from './components/account/login.vue';
import register  from './components/account/register.vue';

var router = new vueRouter({
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