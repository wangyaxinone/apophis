<template>
    <div class="editContainer">
        <div class="edit-box" :style="{transform:`scale(${scale})`}">

        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class EditContainer extends Vue {
    @Prop() public scale!: number;
}
</script>
<style lang="scss" scoped>
.editContainer{
    width:calc(100vw - 629px);
    height: calc(100vh - 60px);
    box-sizing: border-box;
    overflow: auto;
    padding:20px;
    .edit-box{
        margin:0 auto;
        width:375px;
        height:664px;
        outline: 10000px solid rgba(236,238,240,.87);
        background-image: url(~@/assets/images/bgBorder.png)
    }
}
</style>