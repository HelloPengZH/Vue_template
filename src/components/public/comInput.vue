<template>
    <div class='com-input'>
        <el-input 
        v-model="input" 
        :class="[this.error ? 'check-error' : '']" 
        :placeholder="defaultName == undefined ? '请输入内容' : defaultName" 
        @change='setValue'  
        :maxlength='maxlength'>
        </el-input>
        <p v-if = 'this.error'>{{errorPropt}}</p>
    </div>
</template>


<script>
export default {
    props:['defaultName', 'maxlength', 'inputValue','error','errorPropt'],
	data () {
		return {
          input:this.inputValue
		}
    },
	methods:{
       setValue(){
           this.$emit('setValue', this.input);
       }
    },
    watch:{
        inputValue(val){
            this.input = val;
        }
    }
}
</script>