<template>
  <div class='common-pageIng'>
    <div class="block">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageArry"
        :page-size="currentPageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pageArry", "total", "currentPageSize", "currentPage"], // 每页条数数组, 总条数, 当前显示的每页条数, 当前页数
  methods: {
    //每页多少条
    handleSizeChange(titleNumber) {
      this.$emit("handleSizeChange", titleNumber);
    },
    //当前页
    handleCurrentChange(currtPage) {
      this.$emit("setCurrentPage", currtPage);
    }
  },
  data() {
    return {};
  }
};
</script>
