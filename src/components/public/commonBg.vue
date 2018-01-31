<template>
  <div>
    <sidebar
    @openCollapse='openCollapse'
    :menuList='menuList'
    :nestingMenu='nestingMenu'
    v-if='$route.meta.hasSidebar||$route.meta.hh'>
    </sidebar>
    <div :id="[hasSidebar && isCloseSidebar ? 'common-bg-sideBar-close' : hasSidebar && !isCloseSidebar ? 'common-bg-sideBar-open' : 'common-bg']">
        <div class='common-value'>
            <slot></slot>
            <router-view v-if="$route.meta.hh"></router-view>
        </div>
        <div class='common-bottom'>
            联系我们 | 2009-2017 Alisdaun.com 东经科技股份有限公司 版权所有ICP证: 浙B2-20508010
        </div>
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/public/sidebar";
export default {
  props: ["menuList", "nestingMenu"],
  mounted() {
    //侧边栏
    if (this.$route.meta.hasSidebar || this.$route.meta.hh) {
      this.hasSidebar = true;
    }
  },
  data() {
    return {
      hasSidebar: false,
      isCloseSidebar: false
    };
  },
  methods: {
    openCollapse(isClose) {
      this.isCloseSidebar = isClose;
    }
  },
  components: {
    sidebar
  },
  watch: {
    menuList(val) {
      for (let item of val) {
        if (item.num === window.localStorage.getItem("currentPage")) {
          this.$router.push({ name: item.routerPath });
        }
      }
    }
  }
};
</script>
