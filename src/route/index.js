import Vue from 'vue'
import Router from 'vue-router'
import content from './routers'
import store from '@/store'

Vue.use(Router)
let routes = content
let router = new Router({
    routes
})
//权限控制
router.beforeEach((to, from, next) => {
    // 权限控制于预留位
    next()
});

export default router