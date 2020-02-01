<template>
    <div class="HeadTop">
        <div class="item">
            <span>魔剑-阿波菲斯</span>
        </div>
        <div class="item">
            <slot></slot>
        </div>
        <el-dropdown  class="item"  @command="clickHandle">
            <el-avatar class="avatar " size="medium " src="../assets/logo.png" style="cursor:pointer;"></el-avatar>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="center">个人中心</el-dropdown-item>
                <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class HeadTop extends Vue {
    public clickHandle(data: any) {
        console.log(data);
        switch (data) {
            case 'logout':
                this.$router.push('/login');
                break;
        }
    }
}
</script>
<style lang="scss" scoped>
.HeadTop{
    height: 60px;
    line-height: 60px;
    padding-left: 12px;
    padding-right: 12px;
    background: #fff;
    box-shadow: 0 1px 4px 0 hsla(0,0%,76.5%,.6);
    text-align: left;
    display: flex;
    .item{
        flex-grow:8;
        &:first-child{
            flex-grow:1;
            max-width:150px;
        }
        &:last-child{
            flex-grow:1;
            max-width:150px;
        }
    }
    .avatar{
        float: right;
        margin-top:10px;
    }
}
</style>