<template>
  <div id="vehicleType">
      <div class="input">
            <div class="inputAdd">
                <el-button type="primary">新增车辆名称</el-button>
            </div>
        </div>
        <div class="table">
          <el-table
              :data="mainTableDate"
              height="580"
              >
              <el-table-column prop="number" label="测量名称" >
              </el-table-column>
              <el-table-column  prop="valueAdded" label="车型" >
              </el-table-column>
              <el-table-column prop="valueAdded" label="外廓" >
              </el-table-column>
              <el-table-column prop="valueAdded" label="载重" >
              </el-table-column>
              <el-table-column prop="reference" label="体积">
              </el-table-column>
              <el-table-column prop="valueAdded" label="关联车型" >
              </el-table-column>
              <el-table-column label="操作" width="260">
                  <template slot-scope="scope">
                    <el-button size="small" type='primary' @click='buttonEvent(scope.row)'>编辑</el-button>
                    <el-button size="small" type='primary' @click='buttonDelete(scope.row)'>删除</el-button>
                  </template>
              </el-table-column>
          </el-table>
        </div>
        <div class="alert">
          <div class="alertInput">
            <com-dialog
            :showDialog="alertShow"
            @saveConfig="saveConfig"
            @closeDialog="alertShow=false"
            title="新增车辆"
            >
        
            <div class="form">
              <el-form label-position="right" label-width="120px" :model="changeData">
                <el-form-item label="货物类型">
                  <span v-text="changeData.goodType"></span>
                </el-form-item>
                <el-form-item label="收费系数">
                  <el-input class='width' v-model="changeData.ratio"></el-input>
                </el-form-item>
              </el-form>
            </div>

            </com-dialog>           
          </div>
          <div class="alertTable">

          </div>
          <div class="alertWaring">

            <com-dialog
                :showDialog="waringShow"
                @saveConfig="deleteData"
                @closeDialog="waringShow=false"
                title="新增车辆"
                >
        
                <div style="text-align: center;">确认删除</div>

            </com-dialog> 

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
import selectCity from "../public/selectCity.vue";
import comDialog from "../public/dialog.vue";
import paging from "../public/paging.vue";

export default {
  // 数据
  data() {
    return {
            //弹窗出现条件
            alertShow:false,
            waringShow:false,
            //input 输入数据 
            
            auditStatus:123,
            //input 数据
            
            //主要数据
            mainTableDate:[
                {
                    number:123,
                    valueAdded:'增值服务名称',
                    reference:'参考区间',
                }
            ],
            // 缓冲的数据 -- 弹框
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
            }

		};
	},
	methods:{
        //按钮事件
		buttonEvent(row){
			this.alertShow=true
			// console.log(row)
        },
        buttonDelete() {
            this.waringShow = true
        },
        //删除确认事件
        deleteData() {
            this.waringShow = false
        },
        // 弹窗保存时间
		saveConfig() {
			this.alertShow=false
        },
        //page事件
		getTitle(){

        },
		getCurrentPage(){

		}

	},

  //组件注册
  components: {
		selectCity,
		comDialog,
    paging,
    
  }
};
</script>
<style lang="less" scoped>
 #vehicleType {
    padding: 30px;
    position: relative;
  

    .input{
        padding-bottom: 80px;
        .inputAdd {
          display: inline-block;
          margin-right: 40px;
          vertical-align: bottom;
        }
    }
    .table {

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
        top: 65px;
        right: 34px;
      }
    }
}
</style>
