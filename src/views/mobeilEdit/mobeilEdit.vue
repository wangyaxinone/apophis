<template>
    <div class="mobelEdit">
        <el-container>
            <el-header style="position:relative;z-index:2;">
                <head-top>
                    <headBtns @update:scale="scale=$event" :scale="scale"></headBtns>
                </head-top>
            </el-header>
            <el-container>
                <el-aside width="65px">
                    <leftContail></leftContail>
                </el-aside>
                <el-main style="padding:0px;display:flex;">
                    <componentsLib></componentsLib>
                    <editContainer  :scale="scale"></editContainer>
                    <settingMenu></settingMenu>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import leftContail from './components/leftContail.vue';
import componentsLib from './components/componentsLib.vue';
import editContainer from './components/editContainer.vue';
import settingMenu from './components/settingMenu.vue';
import headBtns from './components/headBtns.vue';
import {HeadTop} from '@/components';
@Component({
    components: {
        leftContail,
        'head-top': HeadTop,
        componentsLib,
        settingMenu,
        editContainer,
        headBtns
    }
})
export default class MobeilEdit extends Vue {
    public scale: number = 1;
    public updateScale(scale: any) {
        console.log(scale);
    }
}
</script>
<style lang="scss" scoped>
.mobelEdit{
    .el-header{
        padding:0px;
    }
}
</style>