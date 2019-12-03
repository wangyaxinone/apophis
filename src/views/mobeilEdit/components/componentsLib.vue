<template>
    <div class="componentsLib">
        <div class="title">组件库</div>
        <div class="comList">
            <div class="comListBox" v-for="(item,idx) in comList" :key="idx">
                <div class="comListBox-title">{{item.title}}</div>
                <el-row :gutter="10">
                    <el-col :span="12" v-for="(children,index) in item.children" :key="index" style="margin-bottom:10px;">
                        <div class="children-box">
                            <i :class="children.icon"></i>
                            <p>{{children.title}}</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import comList from '@/config/h5CompentsConfig';
@Component
export default class ComponentsLib extends Vue {
    protected comList: any = comList;
}
</script>
<style lang="scss" scoped>
.componentsLib{
    width:200px;
    border-right:1px solid #ddd;
    height: calc(100vh - 60px);
    padding:10px;
    box-sizing: border-box;
    .title{
        height:40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: bold;
        color:#333;
    }
    .comList{
        height: calc(100% - 30px);
        overflow-y: auto;
        overflow-x: hidden;
        .comListBox-title{
            text-align: left;
            line-height: 40px;
            height:40px;
        }
        .children-box{
            border:1px solid #ddd;
            height:50px;
            padding-top:8px;
            box-sizing: border-box;
            cursor: pointer;
            user-select: none; 
            p{
                font-size: 12px;
            }
        }
    }
}
</style>