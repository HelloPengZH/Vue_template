<template>
  <div>
        <span class='red' v-text='name'></span>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/editor">editor</router-link>
        <router-link to="/demo1">demo1</router-link>
        <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
      return {
          name: '你好,try everything'
      }
    },
  methods:{

  },
  created(){

  }
}
</script>
<style scoped>
    .red {
       background-color: #213212 
    }
</style>

