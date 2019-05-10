<template>
  <div class="video-right">
    <div class="bannder">
      <mt-swipe :auto="2000" class="mt">
     <mt-swipe-item  v-for="(item,index) in list" :key="index">  <img :src="item" alt></mt-swipe-item>
     </mt-swipe>  
    </div>


    <div class="list_cont" v-for="item in arr" >
    <h2 >{{item.MetaKeywords}}<span>全部</span></h2>
    <li class="list" v-for="items in item.SmallCategories">
      <img :src="items.PictureId|toPath" alt>
   
      <p>{{items.Name}}</p>
    </li>
    </div>


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
     fetch("https://api1.34580.com/sz/Products/SubCategoryRequest?accesstoken=384eb6e0fd6dff1a&customerguid=5fc281aa-f73a-4fc9-b652-1ac1495bbe18&sourcetype=9&Id=100840").then((res)=>{
      return res.json()
    }).then((res)=>{
          this.arr=res.Data.SubCategories
    })

  },





  methods: {
    
    
  },
  
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
  .list_cont{
    width: 259 / $t + rem;
    overflow: hidden;
    h2{
    width: 100%;
    height: 26/$t+rem;
    margin-top:13/$t+rem; 
    font-size: 30px;
    line-height: 26/$t+rem;
    span{
      width: 64/$t+rem;
      height: 26/$t+rem;
     display: block;
    float: right;
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