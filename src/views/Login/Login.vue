<template>
  <div class="login">
    <div class="login-bg"></div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账 号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="记住密码" style="text-align:left;">
          <el-switch v-model="form.rember"></el-switch>
        </el-form-item>
        <div style="text-align:center;">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Login extends Vue {
  public form: object = {
    username: '',
    password: '',
    rember: false
  };

  public onSubmit(): void {
    this.$router.push({
      path: '/'
    });
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url(~@/assets/images/bg.png);
  background-position: center top;
  background-size: 100% 100%;
  background-repeat: no-repeat;
 
  .login-bg{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);

  }
  .form-box {
    width: 400px;
    height: 300px;
    background-color: rgb(255,255,255);
    box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0%, -50%);
    padding:40px 20px;
    box-sizing: border-box;
  }
}
</style>
