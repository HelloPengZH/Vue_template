<template>
    <div id="billPush">
        <div class="input">
            <el-form :model="pushData" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="row ">
                    <el-form-item class="cell6" label="车辆状态" prop="resource">
                        <el-radio-group v-model="pushData.carStatus">
                            <el-radio label="全部"></el-radio>
                            <el-radio label="已完成"></el-radio>
                            <el-radio label="运输中"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="推送半径/m" class="cell4" prop="region">
                        <el-input v-model="pushData.pushRadius"></el-input>
                    </el-form-item>
                </div>
                <div class="row">
                    <el-form-item label="车辆规格" class="cell6" multiple  prop="region">
                        <el-select v-model="pushData.carStandardArr" multiple placeholder="车辆规格">
                            <el-option
                            v-for="item in arrData.carStandard"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                        <el-form-item class="cell6" label="车辆签约状态" prop="resource">
                            <el-radio-group v-model="pushData.carContract">
                                <el-radio label="全部"></el-radio>
                                <el-radio label="已签约"></el-radio>
                                <el-radio label="未签约"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                   
                </div>
                <div class="row btns">
                        <el-button type="primary" style="margin-left:2em"  @click="onSubmit">查询</el-button>
                        
                        <el-button type="primary" style="margin-left:2em"  @click="onSubmit">刷新</el-button>
                        
                        <el-popover 
                            trigger="click" class="detail" placement="top">
                            <p v-for="(item,index) in multipleTable" :key="index">
                                <span> {{ item.driverName||'未选中' }}</span>
                                <span>{{item.comArea ||''}}</span>
                                <span>{{ item.carPlate ||''}}</span>
                                <span>{{item.carStandard ||''}}</span>
                            </p>
                            <div slot="reference" class="name-wrapper">

                                <el-button type="primary" :disabled='!detailShow' style="margin-left:2em" >查看已选中车辆</el-button>
                                
                            </div>
                        </el-popover>


                </div>
            </el-form>
        </div>
        <div class="table">
             <el-table
                ref="multipleTable"
                :data="dispatchTable"
                border
                height='280'
                tooltip-effect="dark"
                style="width: 100%"
                fit
                @selection-change="handleSelectionChange">
                <el-table-column  type="selection" fixed width="60">
                </el-table-column>
                <el-table-column prop="driverName" label="司机" width='90' >
                </el-table-column>
                <el-table-column prop="carPlate" label="车牌号"  width='100'
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="comArea" label="常运输区域" width='120'
                    show-overflow-tooltip
                 >
                </el-table-column>
                <el-table-column prop="carStandard" label="车辆规格"  >
                </el-table-column>
                <el-table-column prop="carStatus" label="车辆状态" width='80' >
                </el-table-column>
                <el-table-column prop="distance" label="距离"  width='80'>
                </el-table-column>
                <el-table-column prop="carContract" label="签约状态"   >
                </el-table-column>
            </el-table>
        </div>
        <div class="alert">
            
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // 弹窗
                details:false,
                pushData : {
                    carStatus:'车辆状态',
                    carStandard:'车辆规格',
                    carStandardArr:[],
                    carContract:'车辆签约状态',
                    pushRadius:'推送半径'
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
                detailShow:false,
                arrData:{
                    carStandard:[
                        {label:'a',value:'12'}
                        ,{label:'d',value:'2232'}
                        ,{label:'c',value:'212'}
                        ,{label:'e',value:'234'}
                    ]
                },
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
                console.log(this.multipleTable);
                this.details=true
            },
            handleSelectionChange(val) {//表格选中对象
                this.multipleTable = val;

                 if (val.length>0) {
                    this.detailShow=true
                } else {
                    this.detailShow=false
                }
            },  
        },
       
    }
</script>
<style lang="scss" scoped>
    #billPush {
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
            .btns {
                margin: 5px 0;
                
                el-button {
                    margin: 0 10px;
                } 
            }
        }
        .table {
            .detal {
                width: 400px;
                span {
                    margin:0 5px;
                }
            }
        }
    }
</style>
