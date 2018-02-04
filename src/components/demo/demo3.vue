<template>
    <fieldset id="test">
        <legend>标签评级管理</legend>
        <header>
            <span class="title" > 评分 : star</span>
            <div class="rateInput">
                <el-rate
                v-model="value3"
                @change="rateSelect"
                show-text>
                </el-rate>
            </div>
        </header>
        <main>
            <header>
                <span class="title">评价标签设置</span> 
                <div class="inputTag">
                    <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
                </div>
            </header>
            <el-tag
                :key="tag"
                class="tagShow"
                v-for="tag in dynamicTags"
                :closable="true"
                :close-transition="false"
                @close="handleClose(tag)"
            >
                {{tag}}
            </el-tag>
            
        </main>
    </fieldset>
</template>
<script>

export default {
    data(){
        return {
            name:"ceshi",
            value3:4,
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue:'',
        }
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick( _ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        rateSelect (input) {
            switch(input)
            {
                case 5:
                    this.dynamicTags=['服务极好','速度极快']
                    break;
                case 4:
                    this.dynamicTags=['服务好','速度快']
                    break;
                case 3:
                    this.dynamicTags=['服务一般','速度还可以']
                    break;
                case 2:
                    this.dynamicTags=['服务差','速度慢']
                    break;
                case 1:
                    this.dynamicTags=['服务极差','速度极慢']
                    break;
                default:
                    alert ('请选择你要的评分')
            }
        }
    },
}
</script>
<style lang="less">
    #test{
        width: 400px;
        height: 400px;
        margin: 0 auto;
        border: 1px solid #000;
        padding: 20px;
        header {
            border-bottom: 1px solid #000;
            .title {
                display: inline-block;
                margin: 10px
            }
            .rateInput  {
                margin-left: 40px;
                padding: 10px 0;
            }
        }
        .tagShow {
            margin: 5px 5px;
        }
        .inputTag {
            margin-left: 20px;
            height: 36px;
            width: 200px;
            vertical-align: middle;
       }
    }
</style>
