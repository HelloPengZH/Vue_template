import store from '../store';

//路由redirect的函数
export function urlRedirect(to, firstChildren) {
  var t = store.getters.tagAry.filter(item => item.content === to.name)[0];
  if (t && t.content != t.subContent) {
    store.commit('SET_SESSIONSTORAGE', {
      name: 'activeIndex',
      content: t.key
    });
    return {
      name: t.subContent
    };
  } else {
    store.commit('SET_SESSIONSTORAGE', {
      name: 'activeIndex',
      content: '1'
    });
    return {
      name: firstChildren
    };
  }
}
//拿到路由参数
export function urlRoute(that) {
  var urlPath = that.$route.matched[that.$route.matched.length - 1].path.split("/");
  return urlPath[urlPath.length - 2];
}
//路由参数数组
export function urlAry(that) {
  return that.$route.matched[that.$route.matched.length - 1].path.split("/");
}
//3级菜单的共同路由组件
export function appMain(that) {
  if (that.$route.meta.hasSidebar && !that.$route.hidden) {
    var pathName1 = that.$route.path.split("/")[1];
    var pathName2 = that.$route.path.split("/")[2];
    var obj1 = that.$store.getters.addRouters.filter(
      item => item.name == pathName1
    );
    var obj2 = obj1[0].children.filter(item => item.name == pathName2);
    that.$store.commit("SET_SESSIONSTORAGE", {
      name: "menuList",
      content: obj2[0].children
    });
  } else {
    that.$store.commit("SET_SESSIONSTORAGE", {
      name: "menuList",
      content: []
    });
  }
}
//清除所有缓存
export function clearAll() {
  store.commit("REMOVE_SESSIONSTORAGE", "currentPage");
  store.commit("REMOVE_SESSIONSTORAGE", "subCurrentPage");
  store.commit("REMOVE_SESSIONSTORAGE", "activeIndex");
  // window.sessionStorage.removeItem('tagAry');
  // window.sessionStorage.removeItem('subCurrentPage');
  // window.sessionStorage.removeItem('activeIndex');
  // window.sessionStorage.removeItem('menuList');
  store.commit("SET_SESSIONSTORAGE", {
    name: "currentPage",
    content: "0"
  });
  setTimeout(() => {
    store.commit("REMOVE_SESSIONSTORAGE", "menuList");
    store.commit("REMOVE_SESSIONSTORAGE", "tagAry");
  }, 1000);
}