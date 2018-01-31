<template>
  <el-tabs v-model="activeName" class="common-tab-style">
    <el-tab-pane v-for="(item,index) of tabAry" :key="index" :label="item.label" :name="item.name">
      <slot :name="item.name"></slot>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  props: ["tabAry"],
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {},
  watch: {
    activeName(val) {
      this.$emit("changeTab", val);
    }
  }
};
</script>
<style>
.common-tab-style {
  padding-top: 30px;
  width: 100%;
}
.common-tab-style .el-tabs__header {
  border: 0;
  margin: 0;
}
</style>
