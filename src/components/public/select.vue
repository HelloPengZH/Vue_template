<template>
    <div class='carouse-select'>
        <span>{{textName}}</span>
        <el-select v-model="selectResoult"
        :placeholder="placeholder == undefined ? '--请选择--' : placeholder"
         @change='getSelect'
         @visible-change='getdata'
         :disabled='isDisabled'
         >
            <el-option v-for="(item,index) in region"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
  props: ["region", "textName", "regionName", "placeholder", "isDisableds"],
  data() {
    return {
      selectResoult: this.regionName,
      isDisabled: this.isDisableds
    };
  },
  methods: {
    //获取选中的值
    getSelect() {
      this.$emit("getSelect", this.selectResoult);
    },
    //点击下拉列表显示或隐藏触发,回调函数接受 true、false
    getdata(isOpen) {
      this.$emit("getdata", isOpen);
    }
  },
  computed: {},
  //监听父组件变化对子组件的影响
  watch: {
    regionName(val) {
      this.selectResoult = val;
    },
    isDisableds(val) {
      this.isDisabled = val;
    }
  }
};
</script>
