<template>
  <div>
      <home :name="name"></home>
      <router-view></router-view>
  </div>
</template>
<script>
import home from './components/home/home.vue';
export default {
  data(){
      return {
          name: '你好,try everything'
      }
    },
  methods:{

  },
  created(){

  },
  components: {
    home
  }
}
</script>
<style scoped>
    .red {
       background-color: #213212 
    }
</style>

