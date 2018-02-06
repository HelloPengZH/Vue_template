<template>
    <div class="abnormal">
        <div class="input">
            <el-form :model="abnormalData" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="row">
                    <el-form-item class="cell6" label="异常原因" prop="resource">
                        <el-select v-model="abnormalData.resion" placeholder="请选择活动区域">
                            <el-option v-for="(value ,index) in arrData.resion" :key='index'
                            :label="value.lable" :value="value.value"></el-option>
                            
                        </el-select>
                    </el-form-item>
                </div>
                <el-form-item label="详细描述" class="row"  prop="desc">
                    <el-input type="textarea" class="cell10" resize="none" :rows='5' v-model="abnormalData.desc"></el-input>
                </el-form-item>
                <div class="row">
                    <el-form-item label="上传图片" class="row"  prop="desc">
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog v-model="pic.dialogVisible" size="tiny">
                            <img width="100%" :src="pic.url" alt="">
                        </el-dialog>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                //渲染数据
                arrData:{
                    resion:[
                        {lable:'货物损坏',value:'1'}
                        ,{lable:'货物缺件',value:'2'}
                        ,{lable:'客户拒收',value:'3'}
                        ,{lable:'配送错误',value:'4'}
                        ,{lable:'货品不符',value:'5'}
                    ]
                },
                abnormalData:{
                     resion:"异常原因"
                    ,desc:"异常原因"
                },
                //图片上传数据
                pic:{
                    dialogVisible:false,
                    imgUrl:''
                },
                rules:{
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .abnormal {
        .input {
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
    }
</style>
