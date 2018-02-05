<template>
    <div id="zoom">
        <h3>城市x选择器</h3>
        <div id="city">
            <label for="cityInput">地区选择</label>
           <div class="input">
               <div class="el-input" @click="cityChange">
                   <i class="el-input__icon el-icon-caret-top " :class="citySelect==false?'appear':''"></i>
                   <input autocomplete="off"
                          id="cityInput"
                          placeholder="请选择活动区域"
                          readonly="readonly"
                          icon="caret-top"
                          type="text"
                          rows="2"
                          class="input  el-input__inner"
                   >
               </div>
           </div>
   <transition name="el-zoom-in-top">
            <div v-if="citySelect" class="showingBox">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane class="part" label="省份" name="first">
                       <div style="display:none">
                           <div class="left">

                           </div>
                           <div class="right">

                           </div>
                       </div>
                        <span   class="cell" 
                                v-for="(value, key, index) in placeData[areaNumber]" 
                                :key="index"
                                @click="getNumber(key)"

                                >
                                {{value}}

                        </span>
                   
                    </el-tab-pane>
                    
                    <el-tab-pane label="城市"  class="part" name="second">
                        <span   class="cell" 
                                v-for="(value, key, index) in placeData[areaNumber]" 
                                :key="index"
                                @click="sendNumber(key)"

                                >
                                {{value}}

                        </span>
                    </el-tab-pane>
                </el-tabs>
            </div>
   </transition>
        </div>
        
    </div>
</template>
<script>
import areaData from './areaData.js'
     export default {
         data () {
             return {
                citySelect:true,
                selectedCity:'假定selectedCity;',
                simpleTip:['A-G','H-K',''],
                areaNumber:-1,
                placeData:areaData,
                activeName:"first",
             }
         },
         methods: {
             cityChange() {
                const city=this.citySelect
                this.citySelect=!city
             },
             handleClick() {
                this.areaNumber=100000
             },
             getNumber(num){
                // alert(num)
                this.areaNumber=num
                this.activeName="second"
             },
             sendNumber(num) {
                alert(num)
             }
         },
         components:{

         }
     }
</script>
<style lang="less" type='text/less' scoped>
    #zoom {
        #city {
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
            label{
                width: 20%;
                text-align: right;
            }
            .input {
                display: inline-block;
                width: 60%!important;
                .appear {
                    transform:rotate(180deg)
                }
            }
            .showingBox {
                width: 100%;
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
                .cell {
                    display: inline-block;
                    margin: 3px;
                    cursor: pointer
                }

            }

        }
    }
</style>
