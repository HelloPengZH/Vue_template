<template>
    <div id="input">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <div class="row clr">
                <div class="cell">
                    <el-form-item label="活动名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="活动名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="活动名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="活动名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </div>
                <div class="button">
                    132123
                </div>
            </div>
            
        </el-form>        
    </div>
</template>
<script>
export default {
    props:[],
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>
    #input {
        width: 100%;
        background-color: #eee;
        position: relative;
        .row {
            width: 100%;

            .cell {
                width: 22%;
                padding-top: 8px;
                margin-bottom: 8px;
                background-color: #ff3040;
                float: left;
            }
            .cell1,.cell2,.cell3,.cell4,.cell5,.cell6,.cell7,.cell8,.cell9,.cell10,.cell11,.cell12{
                float: left;
            }
            .cell1{width: 100%*(1/12)}
            .cell2{width: 100%*(2/12)}
            .cell3{width: 100%*(3/12)}
            .cell4{width: 100%*(4/12)}
            .cell5{width: 100%*(5/12)}
            .cell6{width: 100%*(6/12)}
            .cell7{width: 100%*(7/12)}
            .cell8{width: 100%*(8/12)}
            .cell9{width: 100%*(9/12)}
            .cell10{width: 100%*(10/12)}
            .cell11{width: 100%*(11/12)}
            .button {
                float: right;
                width: 10%;
                background-color: #0094ff;
            }
        }
    }
</style>
