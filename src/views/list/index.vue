<template>
  <div id="aa">
    <a href="/search" class="dd">
      <input type="text" class="cd" id="demo">
      <img src="https:/wechatx.34580.com/static/img/home_search_cont.427135f.png" alt>
    </a>

    <div class="al">
      <ul>
        <li
          v-for="(item,index) in arr"
          :key="index"
          :class="[indexcur === index ? 'active' : '']"
          @click="Tab(index)"
        >{{item}}</li>
      </ul>
    </div>

    <div class="da">
      <routerLink
        tag="dl"
        :to="'/listshopcar/'+item.ProductId"
        v-for="item in List.arr_s"
        :key="item.PictureId"
      >
        <dt>
          <img :src="item.PictureId | toPath" alt>
        </dt>
        <dd>
          <p class="po">{{item.ProductName}}</p>
          <span>{{item.PvStandard}}</span>
          <div class="aaw">
            <div class="ff">
              <span>￥</span>
              <p>{{item.PictureId}}</p>
            </div>
            <i class="fa fa-superpowers" aria-hidden="true"></i>
          </div>
        </dd>
      </routerLink>
    </div>

    <div class="fffs">
      <span>点击加载更多</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      indexcur: 0,
      arr: ["默认", "最新", "销量", "价格"]
    };
  },
  computed: {
    ...mapState(["List", "arr_s"])
  },

  created() {
    var id = this.$route.params.type;
    this.getLink(id);
  },
  methods: {
    ...mapActions(["getLink"]),
    Tab(index){
      this.indexcur = index
    }
  }
};
</script>

<style lang="scss" scope>
.active {
  color: green;
  border-bottom: 5px solid green;
}
#aa {
  width: 100%;
  height: 100%;
  background: #f4f3f3;
  margin-top: 2rem;
  flex: 1;
  overflow: auto;
}
.dd {
  width: 100%;
  height: 1rem;
  background: #f4f3f3;
  border: 1px solid #999;
  position: fixed;
  top: 0;
  z-index: 99999;
}
.cd {
  width: 7.1rem;
  height: 0.64rem;
  border-radius: 0.3rem;
  margin-left: 0.25rem;
  margin-top: 0.2rem;
}
#demo {
  background: #e9e5e5;
}
#aa > .dd > img {
  width: 2.44rem;
  height: 0.36rem;
  position: fixed;
  top: 0.35rem;
  left: 2.5rem;
}
#aa > .al {
  width: 100%;
  height: 1rem;
  background: white;
  position: fixed;
  top: 1rem;
}
#aa > .al > ul {
  display: flex;
  justify-content: space-around;
  position: relative;
}
#aa > .al > ul > li {
  font-size: 0.35rem;
  width: 0.94rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}

.da {
  width: 100%;
  min-height: 18rem;
  background: #e9e5e5;
}
.da > dl {
  width: 3.4rem;
  height: 5.75rem;
  background: white;
  margin: 0.15rem;
  border-radius: 0.2rem;
  float: left;
}
.da > dl > dt > img {
  width: 3.4rem;
  height: 3.51rem;
}
.da > dl > dd > .po {
  width: 2.5rem;
  height: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.3rem;
  margin-top: 0.2rem;
}
.da > dl > dd {
  margin-left: 0.2rem;
}
.aaw {
  display: flex;
  justify-content: space-between;
}
.aaw > .ff {
  display: flex;
  margin-top: 0.3rem;
  color: red;
}
#aa > .fffs {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.2rem;
}
#aa > .fffs > span {
  width: 6rem;
  height: 0.8rem;
  background: green;
  display: block;
  /* z-index:1000; */
  border-radius: 0.3rem;
  /* text-align: start; */
  color: white;
  /* line-height: 0.8rem; */
  margin-left: 0.8rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.aqa {
  width: 0.6rem;
  height: 0.6rem;
  background: orangered;
  position: absolute;
  bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
}
</style>