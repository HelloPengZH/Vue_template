<template>
    <div id="zoom">
        <h3>城市x选择器</h3>
        <div id="city">
            <label for="cityInput">选择区域</label>
           <div class="input">
                <input type="text" @focus="getCity" v-model="cityName" id="cityInput">
           </div>

            <div class="showingBoc">

            </div>
        </div>
    </div>
</template>
<script>
     export default {
         data () {
             return {
                 
             }
         },
         methods: {
             
         },
         components:{
             
         }
     }
</script>
<style lang="less" scoped>
    #zoom {

    }
</style>
