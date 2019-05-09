<template>
  <div id="list-shopcar">
    <header>
      <li
        :class="[indexcur === index ? 'active' : '']"
        v-for="(item,index) in list"
        :key="index"
        @click="Tab(index)"
      >{{item}}</li>
    </header>

    <mt-swipe class="banner" :auto="0">
      <mt-swipe-item>
        <img src="http://picpro-sz.34580.com/sz/ImageUrl/547058/800.jpeg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://picpro-sz.34580.com/sz/ImageUrl/546822/800.jpeg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://picpro-sz.34580.com/sz/ImageUrl/546821/800.jpeg" alt>
      </mt-swipe-item>
    </mt-swipe>

    <div class="show">
      <h1>埃及橙</h1>
      <h2>
        <span>￥6.90</span>
        <i>/500g</i>
      </h2>
      <h3>
        <span>￥ 9.90/500g</span>
        <i>已售115785</i>
      </h3>
      <h4>
        <div class="left">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8ZyBpZD0i5ZWG5ZOB6K+m5oOFIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICA8ZyBpZD0iMS1tYXgt5rS75p2A6bG8LeeJueS7tyIgc3Ryb2tlPSIjNDlBQTM0IiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1IC01MTEpIj4KICAgICAgPGcgaWQ9Iuavj+S7veS7t+agvC1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQ5NykiPgogICAgICAgIDxnIGlkPSLmgLvku7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEyKSI+CiAgICAgICAgICA8ZyBpZD0iZGV0YWlsc19pY29uX1dlaWdoaW5nX2Rpc2FibGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMpIj4KICAgICAgICAgICAgPHBhdGggaWQ9IlN0cm9rZS0xIiBkPSJNMTQsLTMuNTUyNzEzNjhlLTE1IEMxNCwtMy41NTI3MTM2OGUtMTUgMTIuOTc2OTIzMSwxLjczOTc2OTIzIDEyLjM4NDYxNTQsMS43Mzk3NjkyMyBMMS42MTUzODQ2MiwxLjczOTc2OTIzIEMxLjAyMzA3NjkyLDEuNzM5NzY5MjMgMCwtMy41NTI3MTM2OGUtMTUgMCwtMy41NTI3MTM2OGUtMTUiLz4KICAgICAgICAgICAgPHBhdGggaWQ9IlN0cm9rZS0zIiBkPSJNMi4yMjQ0MzQ2Miw3LjIyNDQzNDYyIEMyLjIyNDQzNDYyLDQuNTg3MzY3NDEgNC4zNjI0NTUyNCwyLjQ0ODg2OTIzIDcsMi40NDg4NjkyMyBDOS42MzcwNjcyMSwyLjQ0ODg2OTIzIDExLjc3NTU2NTQsNC41ODczNjc0MSAxMS43NzU1NjU0LDcuMjI0NDM0NjIgQzExLjc3NTU2NTQsOS44NjE5NzkzOCA5LjYzNzA2NzIxLDEyIDcsMTIgQzQuMzYyNDU1MjQsMTIgMi4yMjQ0MzQ2Miw5Ljg2MTk3OTM4IDIuMjI0NDM0NjIsNy4yMjQ0MzQ2MiBaIi8+CiAgICAgICAgICAgIDxwYXRoIGlkPSJTdHJva2UtNSIgZD0iTTUuNzQ3OTY5MjMsNy44MzM0ODQ2MiBDNS43NDc5NjkyMyw3LjE0MjEgNi45OTk4OTIzMSw1LjY0MzU2MTU0IDYuOTk5ODkyMzEsNS42NDM1NjE1NCBDNi45OTk4OTIzMSw1LjY0MzU2MTU0IDguMjUxODE1MzgsNy4xNDIxIDguMjUxODE1MzgsNy44MzM0ODQ2MiBDOC4yNTE4MTUzOCw4LjUyNDg2OTIzIDcuNjkxMjc2OTIsOS4wODU0MDc2OSA2Ljk5OTg5MjMxLDkuMDg1NDA3NjkgQzYuMzA4NTA3NjksOS4wODU0MDc2OSA1Ljc0Nzk2OTIzLDguNTI0ODY5MjMgNS43NDc5NjkyMyw3LjgzMzQ4NDYyIFoiLz4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtNyIgcG9pbnRzPSIxMS44MjkgMTAuNDggMTMuNSAxMy45MjIgLjUgMTMuOTIyIDIuMTcyIDEwLjQ4Ii8+CiAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
            alt
          > 每份约
          <span>￥13.80</span>
          <i>称重</i>
        </div>
        <p class="fa fa-chevron-right"></p>
      </h4>
    </div>

    <div class="youhui">
      <h1>
        <i>促销</i>
        <b>换购</b>
        <span>【全场】购物满49元可换购1件</span>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTkgNSI+CiAgPGcgaWQ9Im7ku7botbfllK4v5om+55u45Ly8IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9IjItbuS7tui1t+WUri3llYblk4Hor6bmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDAgLTUzNCkiPgogICAgICA8ZyBpZD0i5L+D6ZSA5qih5Z2XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxNCkiPgogICAgICAgIDxnIGlkPSJkZXRhaWxzX2ljb25fbW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwIDIwKSI+CiAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIxLjUiIGN5PSIyLjUiIHI9IjEuNSIgZmlsbD0iI0Q4RDhEOCIvPgogICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHkiIGN4PSIxNy41IiBjeT0iMi41IiByPSIxLjUiIGZpbGw9IiNEOEQ4RDgiLz4KICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGN4PSI5LjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzMzMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
          alt
        >
      </h1>
      <h1>
        <i>服务</i>
         <span>轻松退 · 站点自提 · 全场免运费</span>
         <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTkgNSI+CiAgPGcgaWQ9Im7ku7botbfllK4v5om+55u45Ly8IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9IjItbuS7tui1t+WUri3llYblk4Hor6bmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDAgLTUzNCkiPgogICAgICA8ZyBpZD0i5L+D6ZSA5qih5Z2XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxNCkiPgogICAgICAgIDxnIGlkPSJkZXRhaWxzX2ljb25fbW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwIDIwKSI+CiAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIxLjUiIGN5PSIyLjUiIHI9IjEuNSIgZmlsbD0iI0Q4RDhEOCIvPgogICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHkiIGN4PSIxNy41IiBjeT0iMi41IiByPSIxLjUiIGZpbGw9IiNEOEQ4RDgiLz4KICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGN4PSI5LjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzMzMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
          alt
        >
      </h1>
    </div>

    <div class="title">
      <i>商品评价(1060)</i>
      <span>好评92% <p class="fa fa-chevron-right"></p></span>
    </div>

    <div class="good">
      <div class="left">
        <div class="top">
          <img src="data:image/png;base64,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" alt="">
          <div class="top-right">
            <i>137*****0505</i>
            <span><p></p><b>4分</b></span>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="http://pic2.34580.cn/group1/M00/98/36/wKgNYlzUlxOAcDt8AAF0quQPaN872.jpeg" alt="">
      </div>
    </div>

    <div class="like">
      <span>您可能会喜欢</span>
    </div>

  </div>
</template>

<script>

import { Swipe, SwipeItem } from "mint-ui";
export default {
  data() {
    return {
      indexcur: 0,
      list: ["商品", "详情", "评价"]
    };
  },
  methods: {
    Tab(index) {
      this.indexcur = index;
    }
  }
};
</script>

<style lang="scss" scoped>
#list-shopcar {
  flex: 1;
  overflow: auto;
  margin-bottom: 1.5rem;
}
header {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #eee;
  background: #fafafa;
  display: flex;
  position:fixed;
  top:0;
  z-index: 999;
}
header > li {
  width: 2.49rem;
  height: 100%;
  color: #666;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.35rem;
}
header > .active {
  border-bottom: 2px solid #49aa34;
  color: #49aa34;
}
.banner {
  width: 100%;
  height: 7.5rem;
}
.banner > img {
  width: 100%;
  height: 7.5rem;
}
.show {
  width: 100%;
  height: 3.04rem;
  background: #fff;
  padding: 0.4rem;
}
.show > h1 {
  height: 0.54rem;
  color: #333;
  font-size: 0.4rem;
  margin-bottom: 0.25rem;
}
.show > h2 {
  width: 100%;
  height: 0.58rem;
  color: #ff3e3e;
  margin-bottom: 0.16rem;
  font-size: 0.3rem;
}
.show > h2 > i {
  color: rgb(153, 153, 153);
  font-size: 0.2rem;
}
.show > h3 {
  width: 100%;
  height: 0.42rem;
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.24rem;
  margin-bottom: 0.16rem;
}
.show > h4 {
  width: 100%;
  height: 0.68rem;
  display: flex;
  justify-content: space-between;
}
.show > h4 > .left {
  display: flex;
  width: 5rem;
  height: 0.44rem;
  font-size: 0.26rem;
}
.show > h4 > .left > img {
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.2rem;
}
.show > h4 > .left > span {
  color: #ff3834;
}
.show > h4 > .left > i {
  width: 0.64rem;
  height: 0.44rem;
  background-color: rgba(255, 166, 85, 0.2);
  color: #ff9535;
  text-align: center;
  margin-left: 0.2rem;
  line-height: 0.44rem;
  border-radius: 0.25rem;
}
.show > h4 > p {
  line-height: 0.35rem;
  font-size: 0.26rem;
  color: #333;
}
.youhui {
  width: 100%;
  height: 1.66rem;
  padding: 0.24rem 0.32rem;
  background: #fff;
  margin-top: 0.3rem;
}
.youhui > h1 {
  width: 100%;
  height: 0.7rem;
  display: flex;
  font-size: 0.26rem;
  position: relative;
}
.youhui > h1 > i {
  color: #999;
  margin-right: 0.3rem;
}
.youhui > h1 > b {
  width: 0.64rem;
  height: 0.44rem;
  color: #ff550f;
  text-align: center;
  border: 1px solid #f05423;
  line-height: 0.44rem;
  border-radius: 0.25rem;
  margin-right:.2rem;
}
.youhui > h1 > span{

  margin-right:.8rem;
}
.youhui > h1 > img{
  width:0.48rem;
  height:0.48rem;
  position: absolute;
  right:0.2rem;
}
.title{
  width:100%;
  height:0.8rem;
  background: #fff;
  margin-top:0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 .4rem;
}
.title>i{
      color: #333;
    font-weight: 700;
    font-size: .3rem;
    line-height: 0.8rem;
}
.title>span{
  color:#ff3f57;
  font-size: .23rem;
  line-height: .8rem;
}
.title>span>p{
  color:#ccc;
  font-size:.26rem;
}
.good{
  height:2.88rem;
  width:100%;
  background: #fff;
  padding: .25rem;
  display: flex;
}
.good>.left{
  width:3.28rem;
  height:2.44rem;
  border:1px solid #ccc;
  padding:.25rem;
}
.good>.left>.top{
  width:2.86rem;
  height:0.56rem;
  display: flex;
}
.good>.left>.top>img{
  width:.46rem;
  height:.46rem;
}

// 需修改

.gppd>.left>.top>.top-right{
    margin-left:.2rem;
}
.good>.right{
  width:2.46rem;
  height:2.44rem;
}
.good>.right>img{
  width:100%;
  height:100%;
}



</style>