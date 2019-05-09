<template>
  <div id="footer">
    <ul>
      <router-link v-for="(item,index) in tabBar" :key="index" :to="item.to" tag="li">
       <i :class="item.iconfont" aria-hidden="true"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabBar: [
        {
          iconfont: "fa fa-home",
          text: "首页",
          to: "/home"
        },
        {
          iconfont: "fa fa-play-circle-o",
          text: "视频",
          to: "/video"
        },
        {
          iconfont: "fa fa-bookmark",
          text: "订阅",
          to: "/dy"
        },
        {
          iconfont: "fa fa-user",
          text: "个人",
          to: "/mine"
        }
      ]
    };
  }
};
</script>

<style >
#footer {
  width: 100%;
  height: 0.98rem;
  border-top: 1px solid #f1f1f1;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0 -1px 0.075rem rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-top:1rem;
}

#footer > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#footer > ul > li {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #ccc;
}
#footer > ul > .router-link-active {
  color: #f39800;
}
#footer > ul > li > i {
  font-size: 0.4rem;
}
</style>