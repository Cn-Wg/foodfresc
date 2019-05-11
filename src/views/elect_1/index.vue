<template>
  <div class="video-right">
    <div class="bannder">
      <mt-swipe :auto="2000" class="mt">
        <mt-swipe-item v-for="(item,index) in elect_1.list" :key="index">
          <img :src="item" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <li class="list" v-for="item in elect_1.arr" :key="item.id">
      <img :src="item.PictureId | toPath" alt>
      <p>{{item.Name}}</p>
    </li>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["elect_1", "list", "arr"])
  },

  created() {
    this.getDate();
  },

  methods: {
    ...mapActions(["getDate"])
  }
};
</script>
<style lang="scss" scoped>
$t: 50;
.video-right {
  width: 100%;
  height: 563 / $t + rem;
  overflow: auto;
  padding-left: 13 / $t + rem;
  padding-top: 13 / $t + rem;
  .bannder {
    width: 259 / $t + rem;
    height: 97 / $t + rem;
    background: yellow;
    .mt {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .list {
    width: 86 / $t + rem;
    height: 109 / $t + rem;
    float: left;
    padding: 0 4 / $t + rem;
    background: white;
    img {
      width: 81 / $t + rem;
      height: 81 / $t + rem;
    }
    p {
      width: 100%;
      height: 20 / $t + rem;
      font-size: 28px;
      line-height: 20 / $t + rem;
      text-align: center;
    }
  }
}
</style>