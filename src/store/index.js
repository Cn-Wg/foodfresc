import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD:src/store/index.js
Vue.use(Vuex)

export default new Vuex.Store({
modules:{
    
}
=======
import Goods from './goods'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    Goods
  }
>>>>>>> items:src/store/index.js
})
