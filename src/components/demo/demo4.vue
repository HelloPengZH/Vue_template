<template>
    <div class="onRoadData">
        <el-steps :space="100" direction="vertical" :active="1">
          <el-step v-for="(item,index) in onRoadData" :key="index">
            <div slot="title">
              <span v-text="item.title"></span>
              <span v-text="item.time" style="font-size:10px"></span>
            </div>
            <div slot="description" class="clr row">
                <div class="cell8" style="width:200px"> 
                  <div v-if="item.event">
                     <span v-text="item.event"></span>
                     <el-popover 
                            trigger="click" placement="right">
                            <p>
                              {{item.des}}                               
                            </p>
                            <span slot="reference" class="name-wrapper">

                                <el-button size='mini'>详情</el-button>
                                
                            </span>
                     </el-popover>
                  </div>
                  <div class="img">
                    <img v-for="(url,index) in item.url" :key="index" :src="url" alt="事件图片" style="  width: 50px;height: 50px;">  
                  </div>
                </div>
                <div class="cell4" style="width:130px">
                  <p>
                    <span>更新来源 : </span>
                    <span v-text="item.source"></span>
                  </p>
                  <p>
                    <span> 收货人 </span>
                    <span v-text="item.receivePeo"></span>
                  </p>
                  <p>
                    <span> Tel </span>
                    <span v-text="item.tel"></span>
                  </p>
                  <p>
                    <span> 地点 </span>
                    <span v-text="item.site"></span>
                  </p>
                </div>
            </div>
          </el-step>
          
        </el-steps>
    </div>
</template>
<script>
    export default {
        data () {
            return {
              active:1,
              onRoadData:[
                  {title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人',tel:123123123231}
                  ,{title:'测试',time:'2018-2-31',status:'已提货',event:'交通拥堵',des:"出现原因那个及详情",url:[1,2,3],source:"司机段",site:'测试',receivePeo:'收货人'}
              ]
            }
        },
        methods: {

        },
        
    }
</script>
<style lang="less" scoped>
    .onRoadData {
        .clr  {
          background-color: #eee;
        }
        #left,#right {
          float: left !important;
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
        .cell4 {
            p{
              padding: 0%;
              margin: 0;
              padding: 2px
            }
        }
    }
</style>
