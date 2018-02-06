<template>
    <div id="home">
        <span class='red' v-text='name'></span>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/editor">editor</router-link>
        <router-link to="/demo1">测试组件</router-link>
        <router-link to="/demo2">pickBig</router-link>
        <router-link to="/demo5">城市选择插件</router-link>
        <router-link to="/demo4">路由测试</router-link>
        <router-link to="/demo3">异常弹出</router-link>

       
    </div>
</template>
<script>
    export default {
        props:['name']
    }    
</script>
<style lang="less">

</style>
