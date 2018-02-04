import vueRouter  from 'vue-router';

import login  from './../components/account/login.vue';
import register  from './../components/account/register.vue';
import editor  from './../components/editor/editor.vue';
import demo1  from './../components/demo/demo1.vue';
import demo2  from './../components/demo/demo2.vue';
import demo3  from './../components/demo/demo3.vue';
import demo4  from './../components/demo/demo4.vue';
import demo5  from './../components/demo/demo5.vue';

const router = new vueRouter({
    linkActiveClass:'miu-active',
    routes:[
        {
            path:"/login",
            component:login
        },
        {
            path:"/register",
            component:register
        },
        {
            path:"/editor",
            component:editor
        },
        {
            path:"/demo1",
            component:demo1
        },
        {
            path:"/demo2",
            component:demo2
        },
        {
            path:"/demo3",
            component:demo3
        },
        {
            path:"/demo4",
            component:demo4
        },
        {
            path:"/demo5",
            component:demo5
        }
    ]
})

export default  router 