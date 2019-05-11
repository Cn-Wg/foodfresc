<template>
  <div id="aa">
    <div class="top">
      <div class="left">
        <div class="shang">
          <div class="hg">全场换购</div>
          <div class="txt">全场满49元可换购1件,满59元可换购1件</div>
        </div>
        <div class="xia">{{wz}}</div>
      </div>
      <div class="right">
        <span>查看换购</span>
        <div class="pic">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAnCAYAAAFiXLgWAAAABGdBTUEAALGPC/xhBQAAA9hJREFUSA21ljtoVEEUhvfuxt1goUnQRgVNCkWD3Yrk0RlRsLGIFiKilQo+QAsLo6I2lgbUWGnlG6yNRKs8NiRitQo+QUFBBEENeXl3/f67mcvcvY8YkwzMnplz/nPOnMfM3VSqevT395cDPBiltMVxvDXcPxbTWg4ODu6wtqkUjDdG5463GBgYcAMQOR0dHV0RYNobAbDTI17lAJYUc53lcvmRz4LxOeBjaGhoo0z4CLOQwKxtmnZd91XAhC3F1BgzOgEICpG+ZAGTXUYYikMmHcf5abtKCY1WX4hJOo6FmIVCYVOIWSwWswEmG0eRK0gJ6uvrc83NzVPVIHvvn1ZZIdtqCTeTyWxuaWl5bQPN2lcwDBQ/o7iGEEvMk62trdeMTDSkYISkQH2zzwM5zrO2trYOb20AcRSPaoz7yDN4/GG3cUgH8FnADwVOp9Nv8dIQeSSOUwC0VRYA3iSOo1pr1FRI5RfgGKulTBfgToC9tlxrT0E11kaZyeVyK/P5/HftY0eozLHIGcHw8HDjbBgjT+s409PTH6APDDOJKq1XZgB7URpNAkvmpRXgEQK+rl6CfiHfq+MU/TrQtR107ROAGeZ4e3u70hsavoIkeNoAKTLVBmU8hTohoCAlrldDqVRSHTwZSlIuSaYRUhCTN2zJxMSEd5Hkqa6ubhkX63esggQaHNHugEY64FOkhwq88kvHTpG9JezcmpqahlBQNjhqHejWaoCOxDBN2cSRfkYeaU5Bz5bWQAwqHDX4xtHIplOm2qJ+DXRkXwHL29h7VYaOR1XZV8DyEYJ7CkN99DWujzwF8qz27kFB3l4AXiVB3EgDPDMjfAg4HwcM8EdGRpoCjISNVweOdRtPB5UZRjcBn67OToKNRJGD8bUgPmLYL7ocwXtOV+82XZ1oJUHoG6US58FdZMq4x5+J4h1v4XbdhAQ7sSLfgUHQH3uI5g5TVVTZU6z1Mv/S68x3bNhg/4WGHBglIsoTQS/Gl8PzHEFdpY95gM/APYNNorEOjBIRrcZJH3M9PEWl4aWRiC7h6EKFFf07qwOjxg1fOjk5+RhHwb92AIjoEQ2xP+r/wz87MI5w4BBVN/S44YnipATvZW1t7U774zhnB7ZRHB3G6A2m2CZ9+mf6jfTtIn0v5+XAOOMudeHkstlbdEviE2wBI5dVERjM/CLgpKrBVegJY1F03jVYtC7itLH3gINf5gnWExM7You8aDeZjujkOHfJ8cK+RaTiHF/MSxgPvKYU7302m+3479eUP17rMPxB3WESiVE5WbjvAWm5hYNDcoDxbm7gKbWdcTgf+hdsVRSvP/xD2wAAAABJRU5ErkJggg=="
            alt
          >
        </div>
      </div>
    </div>
    <div class="azz" v-for="(item,index) in goods.todo" :key="index">
      <div class="w">
        <div class="q">
          <input type="checkbox" v-model="item.published" class="select" :id="'item'+index">
          <label :for="'item'+index" :class="[item.published ? 'green' : '']"></label>
          <div class="tp">
            <img :src="item.productId | toPath()" alt>
          </div>
        </div>

        <div class="l">
          <h2>{{item.productName}}</h2>
          <h3>{{item.pvStandard}}</h3>
          <ul>
            <span>￥</span>
            <p>{{item.unitPeriodMoney}}</p>
            <div class="des">
              <p @click="change({id:item.pictureId,flag:false})">-</p>
              {{item.salesQuantityStart}}
              <p @click="change({id:item.pictureId,flag:true})">+</p>
            </div>
          </ul>
        </div>
      </div>
      <div class="dibu">
        <span>特价商品 库存有限 请尽快下单</span>
        <button @click="remove(index)">删除</button>
      </div>

     
    </div>
     <div class="ren">
        <div class="xxa">
          <input type="checkbox" v-model="allComplete" class="sasct" :id="'item'+index">
          <label :for="'item'+index" :class="[allComplete ? 'allgreen' : '']"></label>
          <span>全选</span>
        </div>

        <div class="ql">
          <div class="ssq">
            <h2>合计</h2>
            <span>￥</span>
            <p>{{money}}</p>
          </div>
          <div class="aas">
            <h2>已省</h2>
            <span>￥</span>
            <p>0.00</p>
            <p class="ola">(已免邮费)</p>
          </div>
        </div>

        <div class="az">
          <a href="/login">去结算</a>
          <p>({{sum}})</p>
        </div>
      </div>
    <Footer/>
  </div>
</template>
<script>
import Vuex from "vuex";
import { mapState, mapMutations, mapGetters } from "vuex";
import Footer from "@/common/TabBar";
export default {
  data() {
    return {
      wz: "还差3.1元"
    };
  },
  computed: {
    ...mapState(["goods", "todo", "allComplete"]),
    ...mapGetters(["sum", "arr", "money"])
  },
  methods: {
    ...mapMutations(["change", "statechange", "changeIndex", "remove"])
  },
  component: {
    Footer
  }
};
</script>
<style lang="scss" scoped>
#aa {
  width: 100%;
  height: 100%;
  background: #f4f3f3;
  margin-top: 0;
}
.top {
  width: 7rem;
  height: 1.74rem;
  background: white;
  margin: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.25rem;
  color: #333;
  .left {
    width: 5.12rem;
    height: 1.26rem;
    display: flex;
    flex-direction: column;
    .shang {
      width: 5.12rem;
      height: 0.84rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .hg {
        width: 1.02rem;
        height: 0.46rem;
        border: 1px solid #ff550f;
        color: #ff550f;
        border-radius: 2rem;
        font-size: 0.225rem;
        text-align: center;
        line-height: 0.46rem;
      }
      .txt {
        width: 3.84rem;
        height: 0.84rem;
        color: #333;
        font-size: 0.275rem;
      }
    }
    .xia {
      width: 5.12rem;
      height: 0.36rem;
      margin-top: 0.2rem;
      font-size: 0.25rem;
      color: #666;
    }
  }
  .right {
    width: 1.4rem;
    height: 1.26rem;
    display: flex;
    color: #49aa34;
    justify-content: space-around;
    align-items: center;
    .pic {
      width: 0.16rem;
      height: 0.26rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.azz {
  width: 7rem;
  height: 2.86rem;
  margin: 0.2rem;
  background: white;
  .dibu {
    width: 100%;
    height: 0.66rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      width: 4.5rem;
      height: 0.66rem;
      padding-left: 0.4rem;
      line-height: 0.66rem;
      color: #333;
      font-size: 0.275rem;
    }
    button {
      width: 1rem;
      height: 0.44rem;
      font-size: 0.26rem;
      background: #c33;
      color: #fff;
      border: 1px solid #c33;
    }
  }
}
.tp {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.2rem;
}
.tp > img {
  width: 100%;
  height: 100%;
}
.w {
  width: 7rem;
  height: 2.14rem;
  background: white;
  // margin: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.w > .q {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 0.7rem;
    height: 0.7rem;
  }
}
.l {
  width: 4.2rem;
  height: 1.5rem;
}
.l > h2 {
  width: 4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.3rem;
}
.l > h3 {
  font-size: 0.3rem;
  color: #ccc;
}
.l > ul {
  display: flex;
}
.l > ul > span {
  color: red;
}
.l > ul > p {
  color: red;
}
.des {
  width: 0.8rem;
  height: 0.3rem;
  margin-left: 2.5rem;
  display: flex;
  justify-content: space-between;
}
.ren {
  width: 100%;
  height: 1rem;
  background: white;
  position: fixed;
  bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.xxa {
  display: flex;
}
.ssq {
  display: flex;
}
.ssq > h2 {
  font-size: 0.3rem;
}
.ssq > span {
  color: red;
}
.ssq > p {
  color: red;
}
.aas {
  display: flex;
  color: black;
}
.aas > h2 {
  font-size: 0.2rem;
}
.aas > .ola {
  color: #999;
}
.az {
  display: flex;
  width: 1.5rem;
  height: 0.6rem;
  background: #d25b5b;
  border-radius: 0.4rem;
  color: white;
  line-height: 0.6rem;
  padding-left: 0.2rem;
}
.az > a{
    color: white;
}
.select {
  display: none;
}
.select + label {
    display: flex;
  width: 0.4rem;
  height: 0.4rem;
  border: 1px solid #000;
  border-radius: 50%;
  position: relative;
  color:#fff;
  padding-left:0.1rem;
  justify-content: center;
}
.select:checked + label::after {
  display: inline-block;
  content: "\2713";
  position: absolute;
  left: 0.05rem;
}
.sasct {
  display: none;
}
.sasct + label {
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid #000;
  border-radius: 50%;
  position: relative;
}
.sasct:checked + label::after {
  display: inline-block;
  content: "\2713";
  position: absolute;
  left: 0.05rem;
}
.w > .q > .green {
  background: #49aa34 !important;
}
.ren > .xxa > .allgreen {
  background: #49aa34 !important;
}

</style>