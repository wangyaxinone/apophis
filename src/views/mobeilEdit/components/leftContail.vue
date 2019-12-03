<template>
    <div class="leftContail">
        <el-menu 
            default-active="1" 
            class="el-menu-vertical-demo"
            @select="selectMenu" 
            :collapse="true">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">组件管理</span>
            </el-menu-item>
            <el-menu-item index="2" >
                <i class="el-icon-eleme"></i>
                <span slot="title">页面管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class LeftContail extends Vue {
    // methods
    protected selectMenu(index: number, indexPath: string) {
        console.log(index);
        console.log(indexPath);
    }
}
</script>
<style lang="scss" scoped>
.leftContail{
     .el-menu-vertical-demo{
        height: calc(100vh - 60px);
    }
}
</style>