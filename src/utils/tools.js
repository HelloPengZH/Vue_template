import { Message } from 'element-ui'
import Axios from "@/utils/axios";
import {form} from "@/utils/axios";
import qs from 'qs'
import formateDate from '@/utils/formateDate'
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}
let utils = {
    //克隆
    deepClone,
    //弹窗提示封装
    msg(tpe, msg){
        let type = tpe
        let message = msg

        if(msg){
            type = tpe
            message = msg
        } else{
            type = 'info'
            message = tpe
        }

        Message({
            showClose: true,
            type,
            message
        })
    },
    formateDate,
    //数组时间格式化
    /**
     * post函数封装
     * @param {string} addr 传入地址
     * @param {object} data 请求数据
     * @param {function} fn 请求成功回调函数
     * @param {string} msg  请求失败回调弹出
     * 
     * 本函数返回permise对象支持 .then 及 .catch 用法 报错时控制台会打印出所有参数
     */ 
    post(addr,data,fn,msg,msgConfig){
        let message ='未能获取正确数据'
        if(msg){
            message= msg
        }
        let middele = 'Ajax无返回数据'
        return new Promise((resolve,reject)=>{
            Axios.post(addr,data).then(res=>{
                middele = res
                if(res.data.success == true){
                    fn?fn(res):''
                    resolve(res)
                }else{
                    console.log(addr,'\n \n'+JSON.stringify(data),'\n ----------传入数据---------- \n',data,'\n ----------返回数据报错---------- \n\n',res);
                    if(!msgConfig){
                        Message({
                            showClose: true,
                            message:res.data.msg||message
                        })
                    }
                    reject(res)
                }
            }).catch(res=>{
                console.log(addr,'\n ----------传入数据---------- \n',data,'\n\n'+JSON.stringify(data),'\n ----------其他报错---------- \n',middele,'\n ----------报错内容---------- \n\n',res);
                // console.log({请求地址:addr,传入数据:data,ajax返回数据:middele,传入数据Str:JSON.stringify(data)},'\n ----------报错内容---------- \n',res);
                let msg = res.data?res.data.msg:message
                Message({
                    showClose: true,
                    type:"error",
                    message:msg
                })
                reject(res)
            })
        })
    },
    //延时执行函数 通常使用在loading中
    timeout(fn,times){
        let time =setTimeout(() => {
            if(fn){
                fn()
            }
            clearTimeout(time)
        }, (times||500));
        return time
    },
    //打印字符串数据
    log(str){
        console.log(JSON.stringify(str))
    }
   
}

export default utils