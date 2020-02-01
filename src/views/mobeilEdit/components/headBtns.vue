
<template>
  <div class="components-contrl-bar">
    <div class="button-item scale-wrappper">
      <span class="scale-btn" @click="updateScale('reduce')">
        <i class="el-icon-zoom-out"></i>
      </span>
      <span class="scale-input" @click="updateScale('reset')">{{parseFloat(scaleValue * 100).toFixed(0)}}%</span>
      <span class="scale-btn" @click="updateScale('plus')">
        <i class="el-icon-zoom-in"></i>
      </span>
    </div>
    <div class="button-item" :class="{disabled: !canUndo}" @click="editorUndo">
      <i class="iconfont iconundo1"></i>
      <p>撤销</p>
    </div>
    <div class="button-item" :class="{disabled: !canRedo}" @click="editorRedo">
      <i class="iconfont iconredo1"></i>
      <p>重做</p>
    </div>
    <div class="button-item" @click="showPreview">
      <i class="iconfont iconyulan"></i>
      <p>预览</p>
    </div>
    <div class="button-item" @click="save">
      <i class="iconfont iconbaocun"></i>
      <p>保存</p>
    </div>
    <div class="button-item" @click="publishFn">
      <i class="iconfont iconfabu"></i>
      <p>发布</p>
    </div>
    <div class="button-item" @click="cancelFn">
      <i class="iconfont icontuichu"></i>
      <p>退出</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Emit} from 'vue-property-decorator';
@Component
export default class HeadBtns extends Vue {
    public scaleValue: number = 1;
    public canUndo: boolean = false;
    public canRedo: boolean = false;
    @Prop({default: false}) public loading!: boolean;
    @Prop({default: 1}) public scale!: number;
    public created() {
        this.scaleValue = this.scale;
    }
    public editorUndo() {
      console.log('uploadSuccessPsd');
    }
    public editorRedo() {
      console.log('uploadSuccessPsd');
    }
    @Emit('update:scale')
    public updateScale(type: string, value: number) {
      if (type === 'plus') {
        this.scaleValue =
          this.scaleValue + (value || 0.1) > 2
            ? 2
            : this.scaleValue + (value || 0.1);
      } else if (type === 'reduce') {
        this.scaleValue =
          this.scaleValue - (value || 0.1) > 0.5
            ? this.scaleValue - (value || 0.1)
            : 0.5;
      } else if (type === 'reset') {
        this.scaleValue = value || 1;
      }
      return this.scaleValue;
    }
    /**
     * 获取psd数据
     */
    @Emit('import-psd-data')
    public uploadSuccessPsd(dataList: any) {
        console.log('uploadSuccessPsd');
    }
    /**
     * 点击保存按钮
     */
    @Emit()
    public save() {
        console.log('save');
    }
    /**
     * 显示预览
     */
    @Emit()
    public showPreview() {
        console.log('showPreview');
    }
    /**
     * 发布
     */
    @Emit('publish')
    public publishFn() {
        console.log('publish');
    }
    @Emit('cancel')
    public cancelFn() {
        console.log('cancel');
    }
}
</script>

<style lang="scss" scoped>
.components-contrl-bar {
  display: inline-block;
  z-index: 3;
  padding: 2px 12px;
  height: 30px;
  width:100%;
  text-align: center;
  .button-item {
    display: inline-block;
    width: 60px;
    line-height:30px;
    cursor: pointer;
    text-align: center;
    vertical-align: top;
    font-size: 14px;
    transition: color 0.28s, transform 0.28s;
    user-select: none;
    &:first-child{
      line-height:43px;
    }
    &.scale-wrappper {
      width: 110px;
      margin-right: 10px;
      &:hover {
        color: inherit;
        transform: none;
      }
      & > .scale-btn {
        display: inline-block;
        vertical-align: middle;
        padding: 6px 2px;
        font-size: 20px;
        transition: all 0.28s;
        &:hover {
        //   color: $primary;
        }
      }
    }
    &:hover {
    //   color: $primary;
      transform: scale(1.02);
      font-weight: bold;
    }
    &.disabled {
      cursor: not-allowed;
    //   color: $gray !important;
    }
    & > i {
      font-size: 18px;
      display: inline-block;
      transition: all 0.28s;
    }
    & > p {
      font-size: 14px;
    }
  }
}

.scale-input {
  display: inline-block;
  position: relative;
  padding: 7px 0;
  width: 46px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 17px;
  margin: 0 4px;
  &:hover {
    background: #dfdfdf;
  }
}
</style>
