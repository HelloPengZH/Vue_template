<template>
    <div id="input" class="clr">
        <el-form :model="inputData" :rules="rules" ref="inputData" label-width="100px" class="demo-inputData">

            <div class="row clr">
                <div class="cell">
                    <el-form-item label="评分选择" >
                        <rate-select></rate-select>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="处理状态" prop="handleStatus">
                        <el-select v-model="inputData.handleStatus" placeholder="请选择活动区域">
                            <el-option
                                v-for="item in arrData.handleStatus"
                                class='timeClass'
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="运单编号" prop="billNum">
                        <el-input v-model="inputData.billNum"></el-input>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="货主手机号" prop="postTel">
                        <el-input v-model="inputData.postTel"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="row clr">
                <div class="cell">
                    <el-form-item label="司机" prop="driverName">
                        <el-input v-model="inputData.driverName"></el-input>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="车牌号" prop="carPlate">
                        <el-input v-model="inputData.carPlate"></el-input>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="操作人" prop="operator">
                        <el-input v-model="inputData.operator"></el-input>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="时间" prop="date">
                            <el-date-picker
                            v-model="inputData.date"
                            type="datetimerange"
                            class="timeClass"
                            :picker-options="pickerOptions2"
                            placeholder="选择时间范围"
                            align="right">
                            </el-date-picker>
                    </el-form-item>
                </div>
                <div class="button">
                    <el-button type="primary" style="float:right;" @click="onSubmit">查询</el-button>
                </div>
            </div>
        </el-form>        
    </div>
</template>
<script>
import rateSelect from './rateSelect.vue'
export default {
    data() {
      return {
        inputData: {
          name: '样板',
          date:'', //时间
          city:'北京', //城市
          handleStatus:'处理状态',  //处理状态 -- 更换为  handleStatus
          billNum:'运单编号',  
          postTel:'货主手机号',   //更换为事件类型 postTel
          driverName:'司机姓名',
          carPlate:'车牌号',  
          operator:'操作人',   
        },
        alertData:{
            rateSelect:false
        },
        arrData:{
            handleStatus:[
                { label: "全部", value: "1" },
                { label: "待处理", value: "2" },
                { label: "已处理", value: "3" },
            ],
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          waybillStatus:[]
        },
        // 时间选择器快捷操作数据
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      };
    },
    methods: {
        //提交验证样板
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
      //提交重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      onSubmit() {

      }
    },
    components : {
        rateSelect
    }
  }
</script>
<style lang="less" scoped>
    #input {
        width: 100%;
        // background-color: #eee;
        position: relative;

        .input {
                display: inline-block;
                width:100%;
                z-index: 9999;
                .appear {
                    transform:rotate(-180deg)
                }
            }
        
        .row {
            width: 100%;
            .cell1,.cell2,.cell3,.cell4,.cell5,.cell6,.cell7,.cell8,.cell9,.cell10,.cell11,.cell12{
                float: left !important; 
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
            .cell {
                width: 22%;
                // background-color: #f0ca7a;
                float: left;
                .timeClass {
                    width: 100%;
                }
            }
            .button {
                float: right;
                width: 10%;
                // background-color: #0094ff;
            }
        }
        .row::after {
            content:  '.';
            height: 0;
            width: 0;
            visibility: hidden;
            display: block;
            clear: both;
        }
        .row {
            zoom: 1;
        }
    }
</style>
