<template>
  <div class="CardItem" @click="click(title)">
    <div class="ouline">
      <div class="ctx">
        <i class="el-icon-plus"></i>
        <p>{{title}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class CardItem extends Vue {
  @Prop() private title!: string;

  // methods
  @Emit()
  protected click(title: string): object {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.CardItem {
  width: 224px;
  height: 296px;
  border-radius: 4px;
  overflow: hidden;
  float: left;
  margin-bottom: 24px;
  background: #fff;
  position: relative;
  -webkit-transition: all .28s;
  transition: all .28s;
  border: 1px solid #ddd;
  padding:15px;
  box-sizing: border-box;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.16);
  cursor: pointer;
  &:hover{
    transform: translate3d(0,-2px,0);
    box-shadow: 0 0 16px 0 rgba(0,0,0,.3);
  }
  .ouline{
    border: 1px solid #e6ebed;
    height:100%;
    position: relative;
    &:hover{
      color: #25a589;
      border-color: #25a589;
    }
    .ctx{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%)
    }
  }
}

</style>
