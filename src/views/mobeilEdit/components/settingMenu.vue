<template>
    <div class="settingMenu">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="属性" name="first">属性</el-tab-pane>
            <el-tab-pane label="事件" name="second">事件</el-tab-pane>
            <el-tab-pane label="动画" name="third">动画</el-tab-pane>
            <el-tab-pane label="JS脚本" name="fourth">JS脚本</el-tab-pane>
            <el-tab-pane label="页面设置" name="fourth">页面设置</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class SettingMenu extends Vue {
    protected activeName: string = 'first';
}
</script>
<style lang="scss" scoped>
.settingMenu{
    width:385px;
    height: calc(100vh - 60px);
    border:1px solid #ddd;
    box-sizing: border-box;
    padding:10px;
}
</style>