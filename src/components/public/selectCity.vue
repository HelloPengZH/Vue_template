<template>
  <div id='common-select-city'>
    <span>所属区域：</span>
    <div class='common-select-value' @click.stop="showCity">
      <el-input placeholder="--请选择区域--" icon="caret-bottom" v-model="cityName"  :readonly='true'></el-input>
    </div>
    <transition name="el-zoom-in-top">
    <div class='address-city-city' v-show='isShowCity' v-on:click.stop="handleClick">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="proviceName" name="first">
          <div class='address-city-div' v-for='(provice, index) in letterAry' :key='index'>
            <span class='address-city-span'>{{provice.letter}}</span>
            <div v-for="(city, index) in cityArry[index]" class='address-select-citys' :key='index'>
              <span>{{city.name}}</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="城市" name="second" :disabled="cityName === '' ? true : false">
          <div v-for="(city, index) in cityAry" :key='index' class='address-city-postion'>
            <span :title='city.fcityname'>{{city.fcityname}}</span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    </transition>
  </div>
</template>

<script>
// import "../../../static/css/iconfont.css";
export default {
  data() {
    return {
      proviceName: "省份",
      cityAry: [], //对应城市列表
      isShowCity: false,
      saveError: false,
      activeName: "first",
      iconStyle: "caret-bottom",
      cityName: "",
      value: "",
      letterAry: [
        //选择省字母列表
        { letter: "A-G" },
        { letter: "H-K" },
        { letter: "L- S" },
        { letter: "T- Z" }
      ],
      itemsArray: {
        //各省数组
        arry0: [
          { name: "安徽", id: 34 },
          { name: "北京", id: 11 },
          { name: "重庆", id: 50 },
          { name: "福建", id: 35 },
          { name: "甘肃", id: 62 },
          { name: "广东", id: 44 },
          { name: "广西", id: 45 },
          { name: "贵州", id: 52 }
        ],
        arry1: [
          { name: "海南", id: 46 },
          { name: "河北", id: 13 },
          { name: "河南", id: 41 },
          { name: "湖北", id: 42 },
          { name: "湖南", id: 43 },
          { name: "江西", id: 36 },
          { name: "江苏", id: 32 },
          { name: "吉林", id: 22 },
          { name: "黑龙江", id: 23 }
        ],
        arry2: [
          { name: "辽宁", id: 21 },
          { name: "宁夏", id: 64 },
          { name: "青海", id: 63 },
          { name: "山东", id: 37 },
          { name: "上海", id: 31 },
          { name: "山西", id: 14 },
          { name: "陕西", id: 61 },
          { name: "四川", id: 51 },
          { name: "内蒙古", id: 15 }
        ],
        arry3: [
          { name: "天津", id: 12 },
          { name: "新疆", id: 65 },
          { name: "西藏", id: 54 },
          { name: "云南", id: 53 },
          { name: "浙江", id: 33 }
        ]
      }
    };
  },
  mounted() {
    document.addEventListener("click", _ => {
      this.isShowCity = false;
    });
  },
  computed: {
    //计算遍历数组
    cityArry() {
      var cityArry = [];
      for (var i = 0; i < 4; i++) {
        cityArry.push(this.itemsArray["arry" + i]);
      }
      return cityArry;
    }
  },
  methods: {
    //显示省市下拉列表
    showCity() {
      this.isShowCity = !this.isShowCity;
      this.activeName = "first";
    },
    //点击页面其他部分关闭弹框
    handleClick() {
      return false;
    }
  }
};
</script>
<style lang="less">
#common-select-city {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 22px;
  .common-select-value {
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
  .el-input,
  .el-input__inner {
    width: 178px;
    cursor: pointer;
  }
  .address-city-div {
    float: left;
    .address-city-span {
      display: inline-block;
      float: left;
      height: 50px;
      margin-left: 15px;
      margin-right: 25px;
    }
    .address-select-citys {
      display: inline-block;
      margin-right: 14px;
      float: left;
      &:hover {
        cursor: pointer;
        color: #20a0ff;
      }
    }
  }
  .address-city-city {
    width: 278px;
    min-height: 240px;
    position: absolute;
    background-color: #fff;
    border: 1px solid #c6c6c6;
    left: 117px;
    border-radius: 5px;
    padding-bottom: 10px;
    z-index: 1;
  }
  .address-city-postion {
    padding: 10px 0 0 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    margin-right: 14px;
    float: left;
    &:hover {
      cursor: pointer;
      color: #20a0ff;
    }
  }
}
</style>
