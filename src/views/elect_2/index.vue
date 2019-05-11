<template>
  <div class="video-right">
    <div class="bannder">
      <mt-swipe :auto="2000" class="mt">
        <mt-swipe-item v-for="(item,index) in elect_1.list" :key="index">
          <img :src="item" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="list_cont" v-for="item in elect.cook" :key="item.SmallCategories.Id">
      <h2>
        {{item.MetaKeywords}}
        <span>全部<i class="fa fa-caret-right" aria-hidden="true"></i></span>
      </h2>
      <li class="list" v-for="items in item.SmallCategories" :key="items.Id">
        
         <router-link :to="'/list/'+items.Id">
        
        <img :src="items.PictureId|toPath" alt>

        <p>{{items.Name}}</p>
        </router-link>
      </li>
      
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["elect_1", "list", "elect", "cook"])
  },

  methods: {
    ...mapMutations(["getId"])
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
  .list_cont {
    width: 259 / $t + rem;
    overflow: hidden;
    h2 {
      width: 100%;
      height: 26 / $t + rem;
      margin-top: 13 / $t + rem;
      font-size: 30px;
      line-height: 26 / $t + rem;
      span {
        width: 64 / $t + rem;
        height: 26 / $t + rem;
        display: block;
        float: right;
        color: #999;
        i{
          padding-left:5/$t+rem; 
        }
      }
    }
    .list {
      width: 86 / $t + rem;
      height: 109 / $t + rem;
      float: left;
      padding: 0 4 / $t + rem;
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
}
</style>