<template>
    <div id="input" class="clr">
        <el-form :model="inputData" :rules="rules" ref="inputData" label-width="100px" class="demo-inputData">

            <div class="row clr">
                <div class="cell">
                    <el-form-item label="地区选择" >
                        <select-city></select-city>
                    </el-form-item>
                </div>
                <div class="cell">
                    <el-form-item label="运单状态" prop="billStatus">
                        <el-select v-model="inputData.waybillStatus" placeholder="请选择活动区域">
                            <el-option
                                v-for="item in billStatus"
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
                <div class="button">
                   
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
import selectCity from "@/components/public/pzhCity";
export default {
    data() {
      return {
        inputData: {
          name: '样板',
          date:'',
          city:'北京',
          billStatus:'运单状态',
          billNum:'运单编号',
          postTel:'货主手机号',
          driverName:'司机姓名',
          carPlate:'车牌号',
          operator:'操作人',
        },
        billStatus:[
            { label: "待付款", value: "1" },
            { label: "已关闭", value: "2" },
            { label: "待派车", value: "3" },
            { label: "待提货", value: "4" },
            { label: "运输中", value: "5" },
            { label: "部分送达", value: "6" },
            { label: "已完成", value: "7" }
        ],
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
        selectCity
    }
  }
</script>
<style lang="scss" scoped>
    #input {
        width: 100%;
        // background-color: #eee;
        position: relative;
        .row {
            width: 100%;

            .cell {
                width: 22%;
                // background-color: #f0ca7a;
                float: left;
                .timeClass {
                    width: 100%;
                }
            }
            .cell2 {
                width: 44%;
            }
            .cell3 {
                width: 66%;
            }
            .button {
                float: right;
                width: 10%;
                // background-color: #0094ff;
            }
        }
    }
</style>
