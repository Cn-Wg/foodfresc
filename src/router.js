import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Video from './views/video'
import Dy from './views/Dy'
import Mine from './views/mine'
<<<<<<< HEAD
import ListShopcar from './views/list-shopcar'
=======
import Search from './views/search'
>>>>>>> han
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
<<<<<<< HEAD
        path:'/listshopcar',
        component:ListShopcar
=======
        path:'/search',
        component:Search,
>>>>>>> han
      }
  ]
})
