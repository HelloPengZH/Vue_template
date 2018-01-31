<template>
  <div id='sidebar'>
    <div class="bars-toggle" @click="openCollapse">
        <i class="iconfont icon-msnui-menu" :class="[isCollapse ? 'yicon' : 'xicon']"></i>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo"
        theme="dark"
        @select='selectRoute'
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse">
        <el-submenu v-for="(item, index) in nestingMenu"
        :key='item.number'
        :index='item.number'
        >
            <template slot="title">
                <i :class='item.icon'></i>
                <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item v-for="(items, index) in nestingMenu[index].children"
                :key='index'
                :index="items.number">{{items.name}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-for="(item, index) in menuList" :key='index' :index="item.number + ''">
            <i :class='item.icon'></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    menuList: Array,
    nestingMenu: Array,
    index: String
  },
  data() {
    return {
      isCollapse: false,
      activeIndex: ""
    };
  },
  methods: {
    //展开菜单
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    //关闭菜单
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    //选择菜单路由跳转
    selectRoute(key, keyPath) {
      this.activeIndex = key;
      if (keyPath.length === 1) {
        for (let data of this.menuList) {
          if (key == data.number) {
            this.$router.push({ name: data.routerPath });
            window.localStorage.setItem("currentPage", key);
            return;
          }
        }
      }
      if (keyPath.length === 2) {
        for (let data of this.nestingMenu) {
          if (keyPath[0] == data.number) {
            for (let child of data.children) {
              if (key == child.number) {
                this.$router.push({ path: child.routerPath });
              }
            }
          }
        }
      }
    },
    //展开,或者关闭侧边栏
    openCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("openCollapse", this.isCollapse);
    }
  },
  mounted() {
    this.activeIndex = window.localStorage.getItem("currentPage");
  }
};
</script>

<style lang="scss" scoped>
#sidebar {
  position: absolute;
  z-index: 10;
  padding-bottom: 10000px;
  margin-bottom: -10000px;
  background: #182432;
  overflow: hidden;
  //height: calc(100% - 142px);
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
  .el-menu--collapse {
    height: 100%;
  }
  .el-menu--dark {
    background: #172331;
  }
  .bars-toggle {
    height: 30px;
    background: #172331;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    .iconfont {
      display: inline-block;
      transition: all 0.1s;
    }
    .xicon {
      transform: rotate(0deg);
    }
    .yicon {
      transform: rotate(90deg);
    }
  }
}
</style>
