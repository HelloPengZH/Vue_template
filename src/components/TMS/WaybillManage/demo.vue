<template>
    <div id="WaybillManage">
        <div id="input">
              <input-data>
              </input-data>
          <div class="row clr">
              <el-button type="primary" :disabled='btnClick' @click="onSubmit1">车辆调度</el-button>
              <el-button type="primary" :disabled='btnClick' @click="onSubmit2">新增异常</el-button>
              <el-button type="primary" :disabled='btnClick' @click="onSubmit3">运单推送</el-button>
              <div class="button">
                <span>自动推送</span>
                <el-switch
                  v-model="value2"
                  on-color="#13ce66"
                  off-color="#ff4949">
                </el-switch>
              </div>
          </div>
        </div>
        <div class="table">
          <el-table
            :data="mainTableDate"
            border
            height="580"
            ref="multipleTable"
            @selection-change="handleSelectionChange"
            style="width: 100%">
                <el-table-column   type="selection" width="50" >
                </el-table-column>
                <el-table-column  fixed  prop="number"   label="序号"   width="80">
                </el-table-column>
                <el-table-column prop="billStatus" label="运单状态" width="120" >
                </el-table-column>
                <el-table-column prop="postStatus" label="派单状态" width="120">
                </el-table-column>
                <el-table-column prop="refund" label="是否退款" width="120" >
                </el-table-column>
                <el-table-column prop="billNum" label="运单编号" width="120">
                </el-table-column>
                <el-table-column prop="postName" label="货主姓名" width="120">
                </el-table-column>
                <el-table-column prop="postTel" label="货主手机号" width="120" >
                </el-table-column>
                <el-table-column prop="addService" label="附加服务" width="120" >
                </el-table-column>
                <el-table-column  prop="driverBill" label="司机运费" width="120">
                </el-table-column>
                <el-table-column prop="driverName"  label="司机"  width="120">
                </el-table-column>
                <el-table-column  prop="carPlate" label="车牌号" width="120">
                </el-table-column>
                <el-table-column  prop="driverTel" label="司机联系电话" width="120">
                </el-table-column>
                <el-table-column  prop="comArea" label="常运输区域" width="120">
                </el-table-column>
                <el-table-column  prop="carKinds" label="车辆类型" width="120">
                </el-table-column>
                <el-table-column  prop="carStandard" label="车辆规格" width="120">
                </el-table-column>
                <el-table-column  prop="createTime" label="创建时间" width="120">
                </el-table-column>
                <el-table-column  prop="operation" label="操作" width="120">
                </el-table-column>
                <el-table-column  prop="operator" label="操作人" width="120">
                </el-table-column>
            </el-table>
        </div>
        <div class="alert">
          <div class="alertInput">
            <com-dialog
              :showDialog="showing.vehicleDispatch"
              @saveConfig="dispatchConfig"
              @closeDialog="showing.vehicleDispatch=false"
              title="车辆调度"
              >
        
              <vehicle-dispatch></vehicle-dispatch>

            </com-dialog>
          <com-dialog
              :showDialog="showing.abnormal"
              @saveConfig="abnormalConfig"
              @closeDialog="showing.abnormal=false"
              title="异常事件"
              >
              <!-- 异常事件 -->
              <abnormal></abnormal>

          </com-dialog>
          <com-dialog
              :showDialog="showing.billPush"
              @saveConfig="billPushConfig"
              @closeDialog="showing.billPush=false"
              title="运单推送"
              >
              <bill-push></bill-push>
          </com-dialog>

          </div>
          <div class="alertAlert">

          </div>
        </div>
        <div class="common">
          <div class="page">
            <paging  
              :pageArry='[4]'
              @handleSizeChange='getTitle'
              @setCurrentPage='getCurrentPage'
              :total='page.total'
              :currentPageSize='80'
              :currentPage='2'
              >
            </paging>
          </div>
        </div>
    </div>
</template>
<script>
// import * as requset from "../interface";
import selectCity from "@/components/public/selectCity";
import comDialog from "@/components/public/dialog";
import paging from "@/components/public/paging";
import inputData from "./inputData";
import vehicleDispatch from "./vehicleDispatch";
import abnormal from "./abnormal";
import billPush from "./billPush";
// import comInput from "@/components/public/comInput";

export default {
  // 数据
  data() {
    return {
            //弹窗出现条件
            alertShow:false,
            //input 输入数据 
             //input button 数据
             value2:false,
            auditStatus:123,
            btnClick:true,
            //input 数据
            statusNumber:[
                { value: '1', label: '1'  },
                { value: '2', label: '2'  },
                { value: '3', label: '3'  },
                { value: '4', label: '4'  },
                { value: '5', label: '5'  },
            ],
            //主要数据
            mainTableDate:[
                {
                  number:123,
                  billStatus:'运单状态',
                  billNum:'运单编号',
                  postTel:'货主手机号',
                  postName:'货主姓名',
                  driverName:'司机姓名',
                  driverBill:'司机运费',
                  driverTel:'司机电话',
                  carPlate:'车牌号',
                  operator:'操作人',
                  date:'时间',
                  postStatus:'派单状态',
                  refund:'是否退款',
                  addService:'附加服务',
                  comArea:'常运输区域',
                  carKinds:'车辆类型',
                  carStandard:'车辆规格',
                  createTime:'创建时间',
                  operation:'操作',
              },
              {
                  number:123,
                  billStatus:'运单状态',
                  billNum:'运单编号',
                  postTel:'货主手机号',
                  postName:'货主姓名',
                  driverName:'司机姓名',
                  driverBill:'司机运费',
                  driverTel:'司机电话',
                  carPlate:'车牌号',
                  operator:'操作人',
                  date:'时间',
                  postStatus:'派单状态',
                  refund:'是否退款',
                  addService:'附加服务',
                  comArea:'常运输区域',
                  carKinds:'车辆类型',
                  carStandard:'车辆规格',
                  createTime:'创建时间',
                  operation:'操作',
              }              
            ],
            /// 缓冲的数据 -- 弹框
            changeData:
                {
                    number:123,
                    valueAdded:'增值服务名称',
                    reference1:'参考区间',
                    reference2:'参考区间',
                }
            ,
            //page数据
            page:{
                total:100,
            },
            //弹控变量
            showing:{
              vehicleDispatch:false,
              abnormal:false,
              billPush:false
            }

		};
	},
	methods:{
        //按钮事件
		buttonEvent(row){
			this.alertShow=true
			// console.log(row)
        },
        // 弹窗保存时间
		saveConfig() {
			this.alertShow=false
        },
        //page事件
		getTitle(){

        },
		getCurrentPage(){

    },
    //表格多选按钮事件
    handleSelectionChange(val) {
      this.multipleSelection = val;
      if (this.multipleSelection.length==1) {
          this.btnClick = false
      } else {
        this.btnClick=true
      }
      
    },
    //input 按钮事件
    onSubmit3(){
      this.showing.billPush=true
    },
    onSubmit1() {
      this.showing.vehicleDispatch=true
      
    },
    onSubmit2() {
      this.showing.abnormal=true
    },
    //车辆调度事件
    carDispatch() {

    },
    //车辆覅度 确认事件
    dispatchConfig() {
      this.showing.vehicleDispatch=false
    },  
    //异常调度 事件
    abnormalConfig(){
      this.showing.abnormal=false
    },
    //运单推送
    billPushConfig(){
      this.showing.billPush=false
    }

	},

  //组件注册
  components: {
		selectCity,
		comDialog,
    paging,
  inputData,
  abnormal,
  billPush,
  vehicleDispatch
    // comInput
  }
};
</script>
<style lang="scss" scoped>
#WaybillManage {
    padding: 30px;
    position: relative;
  


	#input {
		width: 100%;
		// background-color: #eee;
		position: relative;
		.row {
			width: 100%;

			.cell {
				width: 22%;
				// background-color: #ff3040;
				float: left;
			}
			.button {
        display: inline-block;
				// background-color: #0094ff;
			}
		}
    
    }
    .table {
		margin-top: 50px;

    }
    .alert{




      .form {

        .width {
          width: 200px;
        }
      }
    }
    .common {
      .page {
        position: absolute;
        top: 164px;
        right: 34px;
      }
    }
}
</style>
