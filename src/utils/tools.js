import { Message } from 'element-ui'
import Axios from "@/utils/axios";
import {form} from "@/utils/axios";
import { log } from 'core-js';
import qs from 'qs'
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
    getNumb(val){
        let str = val ||''
        let num =  str.replace(/[^0-9]/ig,"");
        return num
    },
    //数组时间格式化
    formatTwo(date){
        function a (time) {
            let date    =   new Date(time)
            let year    =   date.getFullYear()
            let month   =   date.getMonth()+1
            let day     =   date.getDate()
            let hour    =   date.getHours()
            let min     =   date.getMinutes()
            let sec     =   date.getSeconds()
            return  year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec
        }
        return [a(date[0]),a(date[1])]
    },
    getTime(time){
        if(time){
            let date    =   new Date(time)
            let year    =   date.getFullYear()
            let month   =   date.getMonth()+1
            let day     =   date.getDate()
            let hour    =   date.getHours()
            let min     =   date.getMinutes()
            let sec     =   date.getSeconds()
            return  year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec
        } else{
            return false
        }
        
    },

    //获取字符中的数字
    eachItem(obj,fn){
        if(Array.isArray(obj)){
            obj.forEach(fn)
        }else{
            let index = 0
            for (const key in obj) {
                fn(obj[key],key,index)
                index ++
            }
        }
    },
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
    sleep(fn,times){
        let time =setTimeout(() => {
            if(fn){
                fn()
            }
            clearTimeout(time)
        }, (times||500));
        return time
    },
    //打印字符串数据
    logStr(str){
        console.log(JSON.stringify(str))
    },
    formPost(addr,data,fn,msg,msgConfig){
        let message ='未能获取正确数据'
        if(msg){
            message= msg
        }
        let middele = 'Ajax无返回数据'
        return new Promise((resolve,reject)=>{
            form.post(addr,data,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res=>{
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

                Message({
                    showClose: true,
                    type:"error",
                    message:res.data.msg||message
                })
                reject(res)
            })
        })
    },
}

export function mmce (keys,obj){
    //获取第一个数据
    let startArr =[]
    if (obj[keys[0]]) {
        obj[keys[0]].forEach(val=>{
            let a = {}
            a[keys[0]] =val
            startArr.push(a)
        })
    } else{
        return []
    }
    
    //设置递归控制变量
    let max = keys.length
    let i = 1 
    //连接两个数组获取[{...}]
    function concatArr(arr,arr2,txtkey){
        let arrs =[]
        for (let i = 0; i < arr.length; i++) {
            if(arr2.length>0){
                for (let j = 0; j < arr2.length; j++) {
                    let a ={}
                    a[txtkey] =arr2[j]
                    arrs.push({...arr[i],...a})
                }
            }else{
                arrs.push(arr[i])
            }
        }
        return arrs
    }
    //递归调用遍历所有数据
    function controlfnuc(str,obj,keys,i,max){
        let addArr =obj[keys[i]]
        //获取开始数据
        if (i<max) {
            let arr = concatArr(str,addArr,keys[i])
            return controlfnuc(arr,obj,keys,++i,max)
        } else{
            return str
        }
    }
    return controlfnuc(startArr,obj,keys,i,max)
}
export const formatte = {
    itemMap(item,maps){
        let obj = {}
        debugger
        Object.keys(maps).forEach(key=>{
            item[key] = obj[maps[key]]
        })
        return obj
        
    }
    
}
/**
 * [{id:1},{id:1},{id:1}]=>[{id,others:[{id:1},{id:1}]}]
 * @param {array} initData //修改的列表数据
 * @param {string} attr  //分组标识数据
 */
export function transformTableData(initData,attr){
    let data  = [
        {goodsId:'1',demo:'sadf',languageId:'2050'},
        {goodsId:'1',demo:'sadf',languageId:'1103'},
        {goodsId:'1',demo:'sadf',languageId:'1231'},
        {goodsId:'1',demo:'sadf',languageId:'1235'},
    ]
    data=initData||data
    let middle = {}
    //中文初始化
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let id =  data[index][attr]
        if(element.languageId==='2052'){
            middle[id] = element
            middle[id].others=[]
        }
    }

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let id =  data[index][attr]
        if(middle[id]){
            if(element.languageId!=='2052'){
                middle[id].others.push(element)
            }
        }else{
            middle[id]=element
            middle[id].others=[]
            middle[id].others.push(element)
        }
    }
    
   
    let list = Object.keys(middle).map(key=>{
        return middle[key]
    })
    return list
}
export const tools = utils

export class Acquire {
    constructor(obj){
        this.object = obj
    }
    formatte(paths){
        let path = paths ||''
        let list = path.split('.')
        if(list[0]===''){
            list=[]
        }

        function listName(obj,list,i) {
            let len = list.length
            if(i<len){
                let nextObj = obj[list[i]]
                if(typeof nextObj==='object'){
                    return listName(nextObj,list,++i)
                } else{
                    return obj[list[i]]
                }
            }else{
                return obj
            }
        }
        return listName(this.object,list,0)
    }
}