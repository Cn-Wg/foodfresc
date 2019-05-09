<template>
  <div id="mine">
    <header>
      <button class="login">请登录</button>
    </header>
    <div class="order">
      <ul>
        <li v-for="(item,index) in order" :key="index">
          <i :class="item.font"></i>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="account">
      <ul>
        <li>
          <i class="red">0.00</i>
          <span>余额</span>
        </li>
        <li>
          <i>0.00</i>
          <span>余额</span>
        </li>
        <li>
          <i>0</i>
          <span>积分</span>
        </li>
        <li>
          <i>0</i>
          <span>优惠券</span>
        </li>
      </ul>
    </div>
    <div class="plug-in">
      <div>
        <ul class="plug-in-con">
          <li>
            <i style="color:rgb(240, 84, 35);" class="fa fa-jpy"></i>
            <span>充值</span>
          </li>
          <li>
            <i style="color:#9ce2f3" class="fa fa-fort-awesome"></i>
            <span>地址管理</span>
          </li>
          <li>
            <i style="color:#fa5d5d" class="fa fa-heart-o"></i>
            <span>收藏</span>
          </li>
          <li>
            <i style="color:#ba917a" class="fa fa-history"></i>
            <span>浏览记录</span>
          </li>
          
        </ul>
        <ul class="plug-in-con">
          <li>
            <i style="color:#9eda00" class="fa fa-cc-visa"></i>
            <span>食行卡
            </span>
          </li>
          <li>
            <i style="color:#5cb1fc" class="fa fa-comments"></i>
            <span>客户服务</span>
          </li>
          <li>
            <i style="color:#fcdb13" class="fa fa-question-circle-o"></i>
            <span>帮助中心</span>
          </li>
          <li>
            <i style="color:#f0f9df" class="fa fa-handshake-o"></i>
            <span>商务合作</span>
          </li>
          
        </ul>
        <ul class="plug-in-con">
          <li>
            <i style="color:#2cd4ac"  class="fa fa-credit-card"></i>
            <span>食行粮票</span>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/common/TabBar'
export default {
  component:{
    Footer
  },
    data(){
        return {
            order : [
                {
                    name : "全部订单",
                    font : "fa fa-reorder"
                },
                 {
                    name : "待配送",
                    font : "fa fa-truck"
                },
                 {
                    name : "待自提",
                    font : "fa fa-arrow-circle-down"
                },
                 {
                    name : "待评价",
                    font : "fa fa-commenting-o"
                },
                 {
                    name : "轻松退",
                    font : "fa fa-times-rectangle-o"
                }
            ],
            plugIn : [
                {
                    name : "充值",
                    font : "fa fa-jpy"
                },
                 {
                    name : "地址管理",
                    font : "fa fa-fort-awesome"
                },
                 {
                    name : "收藏",
                    font : "fa fa-heart-o"
                },
                 {
                    name : "浏览记录",
                    font : "fa fa-history"
                },
                 {
                    name : "食行卡",
                    font : "fa fa-cc-visa"
                },
                 {
                    name : "客服服务",
                    font : "fa fa-comments"
                },
                 {
                    name : "帮助中心",
                    font : "fa fa-question-circle-o"
                },
                 {
                    name : "商务合作",
                    font : "fa fa-handshake-o"
                },
                 {
                    name : "食行粮票",
                    font : "fa fa-credit-card"
                },
            ]
        }
    }
};
</script>
<style lang="scss" scoped>
$t: 50;
#mine {
  flex: 1;
  overflow: auto;
  padding-bottom: 1.5rem;
}
header {
  width: 100%;
  height: 4.26rem;
  background: url(https://wechatx.34580.com/static/img/user_bg_day.3c70519.png)
    no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
header > .login {
  width: 2.24rem;
  height: 0.88rem;
  background: #4cd964;
  color: #fff;
  border: 1px solid #4cd964;
  text-align: center;
  line-height: 0.88rem;
  border-radius: 0.1rem;
  font-size: 0.3rem;
}
.order {
  width: 100%;
  height: 1.46rem;
  padding: 0.24rem;
  background: #fff;
}
.order > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: #f2f2f2;
}
.order > ul > li {
  height: 49 / $t + rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.order > ul > li > i {
  font-size: 0.48rem;
}
.order > ul > li > span {
  font-size: 0.28rem;
  color: #333;
}
.account {
  width: 100%;
  height: 82 / $t + rem;
  background: #fff;
  margin-top: 0.32rem;
}
.account > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.account > ul > li {
  width: 1rem;
  height: 49 / $t + rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.account > ul > li > span {
  font-size: 0.28rem;
  color: #333;
}
.plug-in {
  width: 100%;
  height: 245 / $t + rem;
  background: #fff;
  margin-top: 0.32rem;
}
.plug-in-con {
  width: 100%;
  height: 82 / $t + rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
}
.plug-in-con > li {
  width: 93.75 / $t + rem;
  height: 49 / $t + rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.plug-in-con > li > i{
      font-size: 0.48rem;
}
.red{
    color:red;
}
</style>