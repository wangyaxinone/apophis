<template>
    <div class="HeadTop">
        <span>魔剑-阿波菲斯</span>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class HeadTop extends Vue {
    // protected name: string = 'HeadTop';
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

}
</style>