import axios from "axios";
import router from '@/router'
import store from '@/store'

//对axios的配置
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 创建axios实例
const service = axios.create({
  //  baseURL: process.env.NODE_ENV === "development" ? "" : "djtms", // api的base_url
  baseURL: process.env.NODE_ENV === "development" ? "" : "", // api的base_url
  timeout: 10000 // 请求超时时间
})



service.interceptors.request.use((config) => {
  // 判断请求的类型

  return config;
}, (error) => {
  return Promise.reject(error);
})

//返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    // console.log('返回',res)
    //登录校验失败强制跳转

    if (res.data.code === 2) {
      store.commit('removeToken')
      router.push({
        name: "login"
      })
    }

    if (!res.config.data || typeof res.config.data === 'object') {
      return res;
    }

    return res;
  },
  error => {
    return Promise.reject(error)
  }
);
export default service;