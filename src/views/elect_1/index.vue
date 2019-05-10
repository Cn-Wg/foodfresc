<template>
  <div class="video-right">
    <div class="bannder">
      <mt-swipe :auto="2000" class="mt">
     <mt-swipe-item  v-for="(item,index) in list" :key="index">  <img :src="item" alt></mt-swipe-item>
     </mt-swipe>  
    </div>
    <li class="list" v-for="item in arr" :key="item.id">

      <img :src="item.PictureId | toPath" alt>
      <p>{{item.Name}}</p>
    </li>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data() {
    return {
      arr: [],
      list: [
        "http://pic2.34580.cn/group1/M00/AC/19/wKgNY1zSdwyAQP9_AADkNupIw70968.jpg",
        "http://pic2.34580.cn/group1/M00/AB/4F/wKgNY1zQH7SAEguxAACmIkuWvfI404.jpg",
        "http://pic2.34580.cn/group1/M00/96/82/wKgNYlzQbZGAVRcyAAFfWbDL95s127.jpg"
      ]
    };
  },
  created() {
    fetch("https://api1.34580.com/sz/Products/HotCategoryRequest")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.arr = res.Data.HotCategoryList;
      });
  },

  methods: {
    
    
  },
  watch: {
    list() {
      this.$nextTick(() => {
        //延迟执行回调函数，直到dom就绪
        var mySwiper = new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });
      });
    }
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
    .mt{
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