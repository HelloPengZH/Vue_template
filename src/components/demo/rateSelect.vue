<template>
    <div id="rate" @click.stop="cityChange">
            <div class="input" >
                <div class="el-input">
                    <i class="el-input__icon el-icon-caret-top "   :class="rateSelect==false?'appear':''"></i>
                    <input autocomplete="off"
                            id="cityInput"
                            placeholder="请选择评分等级"
                            readonly="readonly"
                            icon="caret-top"
                            type="text"
                            rows="2"
                            class="el-input__inner"
                    >
                </div>
                <div :class="tagClass">
                    <el-tag type="success" class="tag" v-for="(value,index) in selected.fliter" :key="index" v-text="value.tip"></el-tag>
                   
                   
                    <el-popover v-if="selected.num>3"
                            trigger="hover" placement="top">
                            <p style="z-index:9999">
                                 
                                <el-tag class="tag" type="success" v-for="(value,index) in selected.hide" :key="index" v-text="value.tip"></el-tag>
                              
                            </p>
                            <span slot="reference" class="name-wrapper">
                                
                               <el-tag type="success">......</el-tag>
                                
                            </span>
                     </el-popover>
                </div>
            </div>
    <transition name="el-zoom-in-top">
                <div v-if="rateSelect" class="showingBox" v-on:click.stop="disapper">
                   <ul>
                       <li v-for="(value,index) in arrData"
                            :class="value.class"
                            @click="selectRate(index)"
                            :key="index" >
                           
                            <el-rate
                                v-model="value.value"
                                disabled
                                show-text
                                text-color="#ff9900"
                                >
                            </el-rate>

                       </li>
                   </ul>
                </div>
    </transition>
    </div>
            
</template>
<script>

     export default {
         data () {
             return {
                // 控制变量
                rateSelect:false,
                arrData:[
                    {value:1,tip:'一星',class:'selected'},
                    {value:2,tip:'二星',class:'selected'},
                    {value:3,tip:'三星',class:'selected'},
                    {value:4,tip:'四星',class:'selected'},
                    {value:5,tip:'五星',class:'selected'},
                ],
                tagClass:'showTag tagBgc',
                //fliter 和 hide 是显示过滤数据 ,arr为所有选中数据
                selected:{num:0,fliter:[],hide:[],arr:[]},
                activeName:"first",
             }
         },
        mounted() {
            document.addEventListener("click", _ => {
                this.rateSelect = false;
            });
        },
         methods: {
             cityChange() {
                const rate=this.rateSelect
                this.rateSelect=!rate
             },
             disapper() {
                //  return false
             },
             
             
             sendNumber(num) {
                alert(num)
             },
             selectRate (index){
                
                //控制选择样式
                if (this.arrData[index].class=='selected') {
                    this.arrData[index].class=''
                } else {
                    this.arrData[index].class='selected'
                }
                //添加数据
                this.selected={num:0,fliter:[],hide:[],arr:[]}
                this.tagClass='showTag tagBgc'
                for (let i = 0; i < this.arrData.length; i++) {
                    const element = this.arrData[i];
                    if (element.class=='selected') {
                        this.selected.arr.push(element)
                        this.selected.num  ++
                    }
                }
                if (this.selected.num==0) {
                    this.tagClass = "showTag"
                }
                if (this.selected.num>3) {
                    this.selected.fliter = this.selected.arr.slice(0,2)
                    this.selected.hide = this.selected.arr.slice(2,-1)
                } else {
                    this.selected.fliter = this.selected.arr
                }
             }
         },

     }
</script>
<style lang="less" type='text/less' scoped>
        #rate {
            width: 100%;
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
                li {
                    margin: 0;
                    padding: 0;
                }
            }
            position: relative;

            .input {
                display: inline-block;
                position: relative;
                width:100%;
                z-index: 9999;
                .appear {
                    transform:rotate(-180deg)
                }
                .showTag{
                    position: absolute;
                    top: 2px;
                    bottom: 2px;
                    left: 2px;
                    right: 35px;
                   
                }
                .tagBgc{
                    background-color: rgba(255, 255, 255,1);
                }
                .tag {
                    margin: 0px 0  2px 2px;
                }
            }
            .showingBox {
                width: 100%;
                z-index: 9999;
                background-color: #fff;
                // height: 100px;
                // background-color: #ff3040;
                border: 1px solid #d1dbe5;
                position: absolute;
                border-radius: 2px;
                box-sizing: border-box;
                box-shadow:0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
                top: 40px;
                //简单通用样式
                .part {
                    .left {
                        float: left;
                        width: 30%;
                    }
                    .right {
                        float: left;
                        width: 70%;
                    }
                }
                ul > li {
                    background-color: #eee;
                    margin: 2px;
                    cursor: pointer
                }
                .selected {
                    background-color: skyblue;
                }
            }

        }
    
</style>