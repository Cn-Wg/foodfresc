import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Elect from './views/elect-con'
import Mine from './views/mine'
import Shopcar from './views/shopcar'
import ListShopcar from './views/list-shopcar'
import Index from './views/index'
import Search from './views/search'
import Login from './views/login/index'
import Register from './views/login/register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
<<<<<<< HEAD
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
        },
<<<<<<< HEAD
        {
          path: '/home/list',
          component: ListShopcar
        }
=======
>>>>>>> items
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register 
    },
    {
      path:'**',
      component:Index 
    }
=======
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
        path:'/video',
        component:Video,
      },
      {
        path:'/dy',
        component:Dy,
      },
      {
        path:'/mine',
        component:Mine,
      },
>>>>>>> tian
  ]
})