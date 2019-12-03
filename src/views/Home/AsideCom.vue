<template>
    <div class="AsideCom">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            >
            <el-menu-item index="1" route="/myProject">
                <i class="el-icon-menu"></i>
                <span slot="title">我的作品</span>
            </el-menu-item>
            <el-menu-item index="2" route="/myPartake">
                <i class="el-icon-menu"></i>
                <span slot="title">我的参与</span>
            </el-menu-item>
            
        </el-menu>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class AsideCom extends Vue {
    protected name: string = 'AsideCom';
    public handleOpen(): void {
        alert(1);
    }
    public handleClose(): void {
        alert(1);
    }
}
</script>
<style lang="scss" scoped>
.AsideCom{
    .el-menu-vertical-demo{
        height: calc(100vh - 48px);
    }
}

</style>