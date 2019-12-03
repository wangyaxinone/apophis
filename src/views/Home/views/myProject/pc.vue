<template>
    <div class="pcContainer">
        <CardItem title="创建PC"></CardItem>
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
export default class Pc extends Vue {

}
</script>