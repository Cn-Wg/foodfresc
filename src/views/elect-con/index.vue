<template>
  <div class="fenlei">
    <div class="header">
      <div>
        <router-link to="/search">
          <div class="search">
            <i class="fa fa-search" aria-hidden="true"></i>酸奶低至买一送一
          </div>
        </router-link>
      </div>
    </div>
    <div class="contents">
      <ul class="left">
        <li :class="{'list':elect.bools}" @click="first">推选分类</li>
        <li
          v-for="item in elect.list"
          :key="item.PictureId"
          :class="{'list':elect.bool===item.PictureId}"
          @click="add(item)"
        >{{item.Name}}</li>
      </ul>
      <div class="right">
        <component :is="elect.one"></component>
      </div>
    </div>

    <Footer/>
  </div>
</template>
<script>
import Footer from "@/common/TabBar";
import One from "../elect_1";
import Two from "../elect_2";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Footer
  },
  computed: {
    ...mapState(["elect", "list", "bools", "bool", "one"])
  },

  created() {
    console.log(this.elect.list);
    this.getData();
  },

  methods: {
    ...mapActions(["getData", "getDates"]),
    ...mapMutations(["first", "borderLeft"]),
    add(item) {
      this.borderLeft(item);
      this.getDates(item.Id);
    }
  },
  components: {
    One,
    Two
  }
};
</script>
<style lang="scss" scoped>
$t: 50;
.fenlei {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
.header {
  height: 0.96rem;
  width: 100%;
  border-bottom: 0.01rem solid #ddd;
}
.search {
  background: rgba(51, 51, 51, 0.06);
  height: 0.64rem;
  width: 7.18rem;
  border-radius: 2rem;
  font-size: 30px;
  text-align: center;
  line-height: 0.64rem;
  color: #999;
  margin-top: 0.16rem;
  i {
    font-size: 50px;
  }
}
.contents {
  display: flex;
  .left {
    width: 90 / $t + rem;
    height: 618.33 / $t + rem;
    overflow: auto;
    border-right: 0.02rem solid #ddd;
    li {
      width: 99 / $t + rem;
      height: 46 / $t + rem;
      background: #f2f2f2;
      margin: 0;
      border-bottom: 0.02rem solid #ddd;
      line-height: 46 / $t + rem;
      text-align: center;
      font-size: 32px;
    }
  }
}
.list {
  background: white !important;
  border-left: 0.05rem solid #45ac2a;
}
.right {
  flex: 1;
}
</style>