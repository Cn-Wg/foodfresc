<template>
  <div id="login">
    <div class="top">
      <img class="logo" src="https://wechatx.34580.com/static/img/login_icon_logo%202.f2684c4.png">
    </div>
    <div class="bottom">
      <div class="container">
        <div class="tel">
          <input placeholder="请输入真实有效的手机号" maxlength="11" class="input-control">
          <div class="mn-input-clear">
          </div>
        </div>
      </div>
      <div class="button">
        <a href="/register" class="code">输入登录密码</a>
      </div>
    </div>

    <div class="tips">
      <p>未注册手机验证后即完成注册</p>
      <p>登录后：</p>
      <p>1、账号将关联微信账号，可快捷登录微商城/小程序/APP/团购等；</p>
      <p>2、可通过微信接受下单/取货等消息通知。</p>
    </div>
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {

};
</script>
<style lang="scss" scoped>
$t: 50;
#login {
  flex: 1;
  overflow: auto;
  background: #ffffff;
}
.top {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 72 / $t + rem;
  padding-bottom: 8 / $t + rem;
}
.top > img {
  height: 37.23 / $t + rem;
}
.bottom {
  width: 100%;
  height: 141 / $t + rem;
  margin-top: 68 / $t + rem;
}
.bottom > .container {
  margin: 0 20 / $t + rem;
  padding: 16/$t+rem 0;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
}
.bottom > .container > .tel > .input-control {
  flex: 1 1;  
  display: block;
  width: 100%;
  height: 24 / $t + rem;
  border: none;
  line-height: 24 / $t + rem;
  padding: 0;
  background: transparent;
  font-family: sans-serif;
  font-size: 16 / $t + rem;
  color: #000;
}
.bottom > .button {
  height: 44 / $t + rem;
  margin-top: 40 / $t + rem;
  padding: 0 20 / $t + rem;
  display: block;
  line-height:  44 / $t + rem;
  font-size: 16 / $t + rem;
  text-align: center;
}
.bottom > .button >.code{
 
  width: 100%;
  display: inline-block;
  color: #fff;
  height: 44 / $t + rem;
  line-height:  44 / $t + rem;
  border-radius: 48 / $t + rem ;
  font-size: 16/ $t + rem;
  background: #25c949;

}
.tips{
  margin: 56/ $t + rem 20.625/ $t + rem 0;
  font-size: 14/ $t + rem;
  line-height: 21/ $t + rem;
  color: #999;
}
</style>