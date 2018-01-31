<template>
  <div class='com-tag'>
        <div class='com-tag-tab'>
          <span>条件查找:</span>
          <el-tag
              v-for="tag in tags"
              :key="tag.name"
              :closable="true"
              type="primary"
              @close="closeTag(tag)"
              >
              {{tag.name}}
          </el-tag>
        </div>
        <div class='com-select-div'>
          <div class='com-select'>
            <div v-for='(item,index) in nameAry' 
            :key='index' 
            @mousemove.stop="showAry(index)">
                <span>{{item.name}}</span>
                <span class='com-select-tag-span'
                v-for='(items,index) in nameAry[index].dateAry' 
                :key='index'
                @click.stop='getSelectTag(index)' 
                >
                {{items.value}}
                </span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import {simpleClone} from '@/common/common.js'
export default {
  props:['nameAry'],
  data () {
    return {
      tags: [],
      tagValue:false,
      selectIndex:'',
    }
  },
  methods: {
    //点击事件选择
    getSelectTag(index){
      let select = this.nameAry[this.selectIndex].dateAry[index].value;
      for(let [key,value] of this.tags.entries()){
        //防止重复
        if(value.name === select){
              return
        }
        //每个选项只能单选
        if(value.key === this.selectIndex){
          this.tags.splice(key,1)
        }
      }
      //效果加200延迟
      setTimeout(()=> {
        this.tags.push({name:select, key:this.selectIndex});
      }, 200);
    },
    //显示选择内容
    showAry(index){
      this.selectIndex = index;
    },
    //删除tag
    closeTag(tag){
      this.tags.splice(this.tags.indexOf(tag), 1);
    }
  },
  computed: {
    
  }
}
</script>
<style lang="scss" scoped>
  //选择标签卡颜色
  $select-color: #f1f3f5;
  .com-tag{
    padding:10px 0px;
    .com-tag-tab{
      height: 25px;
      margin-bottom: 10px;
      span:nth-of-type(1){
        display: inline-block;
        height:25px;
        padding: 5px 5px 5px 0px;
      }
    }
    .com-select-div{
      position: relative;
    }
    .com-select{
        margin:10px 0px;
        div{
          margin-right:20px;
          position: relative;
          margin-top:5px;
        }
        span{
          display: inline-block;
          &:hover{
            cursor: pointer;
            color:#20a0ff;
          }
        }
        .com-select-tag-span{
          margin-right:15px;
          &:hover{
            color:red;
          }
        }
    }
    .com-select-value{
      background-color: $select-color;
      height: 80px;
      span{
        display: inline-block;
        margin: 5px 10px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        &:hover{
          color:red;
          text-decoration:underline;
        }
      }
    }
  }
</style>
