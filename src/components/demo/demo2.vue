<template>
    <div id="vehicleDispatch">
        <div class="input">
            <el-form :model="dispatchData" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="row ">
                    <el-form-item class="cell6" label="车辆状态" prop="resource">
                        <el-radio-group v-model="dispatchData.carStatus">
                            <el-radio label="全部"></el-radio>
                            <el-radio label="已完成"></el-radio>
                            <el-radio label="运输中"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="车辆服务区域" class="cell4" prop="region">
                        <el-select v-model="dispatchData.serviceArea" placeholder="车辆服务区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="车辆规格" class="cell4" prop="region">
                        <el-select v-model="dispatchData.carStandard" placeholder="车辆服务区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="车牌号" class="cell5" prop="carPlate">
                        <el-input v-model="dispatchData.carPlate"></el-input>
                    </el-form-item>
                    <div class="cell3">
                        <el-button type="primary" style="margin-left:2em"  @click="onSubmit">查询</el-button>
                    </div>
                </div>
                <div class="row">
                    <el-form-item class="cell6" label="车辆签约状态" prop="resource">
                        <el-radio-group v-model="dispatchData.carContract">
                            <el-radio label="全部"></el-radio>
                            <el-radio label="已签约"></el-radio>
                            <el-radio label="未签约"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div class="table">
             <el-table
                ref="multipleTable"
                :data="dispatchTable"
                border
                tooltip-effect="dark"
                style="width: 100%"
                fit
                height="400"
                @selection-change="handleSelectionChange">
                <el-table-column  type="selection" fixed width="55">
                </el-table-column>
                <el-table-column prop="driverName" label="司机" width='100' >
                </el-table-column>
                <el-table-column prop="carPlate" label="车牌号"  width='120'
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="comArea" label="常运输区域" width='140'
                    show-overflow-tooltip
                 >
                </el-table-column>
                <el-table-column prop="carStandard" label="车辆规格"  >
                </el-table-column>
                <el-table-column prop="carStatus" label="车辆状态" width='100' >
                </el-table-column>
                <el-table-column prop="distance" label="距离"  width='80'>
                </el-table-column>
                <el-table-column prop="carContract" label="签约状态"   >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dispatchData : {
                    carStatus:'车辆状态',
                    serviceArea:'车辆服务区域',
                    carStandard:'车辆规格',
                    carPlate:'车牌号',
                    carContract:'车辆签约状态'
                },
                dispatchTable:[
                        {
                            driverName:'司机姓名',
                            carPlate:'车牌号',
                            comArea:'常运输区域',
                            carStandard:'车辆规格',
                            carStatus:'车辆状态',
                            distance:'距离',
                            carContract:'车辆签约状态',
                        },
                        {
                            driverName:'黄飞鸿',
                            carPlate:'浙C890976',
                            comArea:'苍南',
                            carStandard:'7.8m',
                            carStatus:'已完成',
                            distance:'10km',
                            carContract:'已签约',
                        },

                    ],
                    multipleTable:[], //选中 对象
                rules:{
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.dispatchData);
                
            },
            handleSelectionChange(val) {//表格选中对象
                this.multipleSelection = val;
            }
        }
    }
</script>
<style lang="less" scoped>
    #vehicleDispatch {
        .input {
            width: 100%;
            // background-color: #eee;
            position: relative;
            .row {
                width: 100%;
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
        .table {

        }
    }
</style>
