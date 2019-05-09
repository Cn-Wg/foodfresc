<template>
  <div>
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
        <li v-for="n in 16" :key="n" :class="{'list':bool===n}" @click="borderLeft(n)">推选分类</li>
      </ul>
      <div class="right">
        <component :is="t"></component>
      </div>
    </div>

    <Footer/>
  </div>
</template>
<script>
import Footer from "@/common/TabBar";
import One from "../elect";
export default {
  components: {
    Footer
  },
  data() {
    return {
      list: [],
      bool: 0,
      t: One
    };
  },
  created() {
    console.log("aa");
    this.$jsonp("https://api1.34580.com/sz/Products/HotCategoryRequest").then(
      res => {
        console.log(res);
      }
    );
  },

  methods: {
    borderLeft(n) {
      this.bool = n;
    }
  },
  components: {
    One
  }
};
</script>
<style lang="scss" scoped>
$t: 50;
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
}
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

.list {
  background: white !important;
  border-left: 0.05rem solid #45ac2a;
}
.right {
  flex: 1;
  // height: 618.33/$t + rem;
  background: pink;
  height: 1273 / $t + rem;
  display: flex;
  justify-content: center;
}
</style>