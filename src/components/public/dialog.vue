<template>
    <div class='common-dialog'>
        <el-dialog :title="title" 
        :visible.sync="showDialog" 
        size='small' 
        :show-close='false'
        :close-on-click-modal='false'>
            <img src='../../../static/image/close.png' @click='closeDialog'>
            <slot></slot>
            <div slot="footer" class="dialog-footer">
              <el-button @click="closeDialog">取 消</el-button>
              <el-button type="primary" @click="saveConfig">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props:['showDialog','title'],
    data () {
        return {
        
        }
    },
    computed:{
        // dialogFormVisible:{
        //     get () {
        //         return this.showDialog;
        //     },
        //     set (newValue) {
        //         return newValue;
        //     }
        // }
    },
    methods: {
        saveConfig(){
            this.$emit('saveConfig')
        },
        closeDialog(){
            this.$emit('closeDialog')
        }
    }
}
</script>
