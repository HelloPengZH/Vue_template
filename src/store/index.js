import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import getters from './getters'
import login from './modules/login'
 
export default new Vuex.Store({
    getters,
    modules:{
        login,
    },
})

