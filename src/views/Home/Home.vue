<template>
  <div class="home">
    <el-container>
      <el-header style="position:relative;z-index:2;">
        <head-top></head-top>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <aside-com></aside-com>
        </el-aside>
        <el-main style="padding:10px;">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {HeadTop} from '@/components';
import asideCom from './AsideCom.vue';
@Component({
  components: {
    'aside-com': asideCom,
    'head-top': HeadTop,
  }
})
export default class Home extends Vue {
    public name1: string = 'wyx';
}
</script>
<style lang="scss">
.home{
  .el-header{
    padding:0px;
  }
}
</style>
