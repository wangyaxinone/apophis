<template>
    <div class="h5Container">
        <!-- <CardItem title="创建H5" @click="clickHandle"></CardItem> -->
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {CardItem} from '@/components';
@Component({
    components: {
        CardItem
    }
})
export default class Mobeil extends Vue {

    // mehods
    protected clickHandle(title: string): void {
        this.$router.push('/mobeilEdit');
    }
}
</script>
<style lang="scss" scoped>
.h5Container{
    min-height:500px;
}
</style>