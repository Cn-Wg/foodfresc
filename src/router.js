import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Elect from './views/elect-con'
import Mine from './views/mine'
import Shopcar from './views/shopcar'
import ListShopcar from './views/list-shopcar'
import Index from './views/index'
import Search from './views/search'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component:Home,
      redirect:'/home/index',
      children: [
        {
          path: '/home/elect',
          component: Elect,
        },
        {
          path: '/home/shopcar',
          component: Shopcar,
        },
        {
          path: '/home/mine',
          component: Mine,
        },
        {
          path: '/home/index',
          component: Index
        }
      ]
    },

  ]
})