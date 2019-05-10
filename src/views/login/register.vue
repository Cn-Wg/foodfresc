<template>
  <div class="login">
    <div class="input">
      <p>
        请输入
        <span class="tel"></span> 账号的密码
      </p>
    </div>
    <div class="password">
      <div class="input">
        <div class="input-password">
          <input type="password" placeholder="请输入密码" maxlength="16" class="input-control">
        </div>
        <div class="eyes"> 
        </div>
      </div>
    </div>
    <div class="button">
      <a href="/home/index" class="code">登录</a>
    </div>
    <div class="sign-btn">
      <div class="forgrt">忘记密码？</div>
    </div>
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  computed: {

  },
};
</script>
<style lang="scss" scope>
$t: 50;
.login {
  width: 100%;
  height: 100%;
  background: #fff;
}
.login > .input {
  margin: 40 / $t + rem 0 64 / $t + rem;
  text-align: center;
  font-size: 16 / $t + rem;
  line-height: 24 / $t + rem;
  display: block;
}
.tel {
  color: #49aa34;
}
.password {
  margin-bottom: 10 / $t + rem !important;
  height: 34.5 / $t + rem;
}
.password > .input {
  width: 89%;
  padding: 0 0 9.6 / $t + rem;
  margin: 0 20.625 / $t + rem;
  border-bottom: 1 / $t + rem solid rgb(242, 243, 246);
}
.password > .input > .input-password {
  display: flex;
}
.password > .input > .input-password > .input-control {
  display: block;
  width: 89%;
  height: 24 / $t + rem;
  line-height: 24 / $t + rem;
  border: none;
  padding: 0;
  background: transparent;
  font-size: 16 / $t + rem;
  color: #000;
}
.login> .input > .input-password > .eyes {
  margin-left: 16 / $t + rem;
  display: block;
  height: 24 / $t + rem;
  line-height: 24 / $t + rem;
  font-size: 16 / $t + rem;
}
.login> .button {
  height: 44 / $t + rem;
  margin-top: 40 / $t + rem;
  padding: 0 20 / $t + rem;
  display: block;
  line-height:  44 / $t + rem;
  font-size: 16 / $t + rem;
  text-align: center;
}
.login > .button >.code{
 
  width: 100%;
  display: inline-block;
  color: #fff;
  height: 44 / $t + rem;
  line-height:  44 / $t + rem;
  border-radius: 48 / $t + rem ;
  font-size: 16/ $t + rem;
  background: #25c949;
  }
 .login>.sign-btn {
  margin: 16/ $t + rem 20/ $t + rem 8/ $t + rem;
  height: 21/ $t + rem;
  text-align: right;
  font-size: 14/ $t + rem;
  color: #666;
 }
</style>