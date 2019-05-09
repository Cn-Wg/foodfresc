import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Video from './views/video'
import Dy from './views/Dy'
import Mine from './views/mine'
import ListShopcar from './views/list-shopcar'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path:'/',
        redirect:'home'
      },
      {
        path : '/home',
        component:Home,
      },
      {
        path:'/classify',
        component:Video,
      },
      {
        path:'/shopcar',
        component:Dy,
      },
      {
        path:'/mine',
        component:Mine,
      },
      {
        path:'/listshopcar',
        component:ListShopcar
      }
  ]
})
