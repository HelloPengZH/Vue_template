import vueRouter  from 'vue-router';

import login  from './../components/account/login.vue';
import register  from './../components/account/register.vue';
import editor  from './../components/editor/editor.vue';
import demo1  from './../components/demo/demo1.vue';

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
        }
    ]
})

export default  router 