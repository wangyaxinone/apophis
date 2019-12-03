<template>
    <div class="myProje">
        <el-tabs type="border-card">
            <el-tab-pane label="h5">
                <mobeil></mobeil>
            </el-tab-pane>
            <el-tab-pane label="pc">
                <pc></pc>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import mobeil from './mobeil.vue';
import pc from './pc.vue';
@Component({
    components: {
        mobeil,
        pc
    }
})
export default class MyProject extends Vue {

}
</script>
<style lang="scss" scoped>
.myProje{

}
</style>