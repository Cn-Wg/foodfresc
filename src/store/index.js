import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import goods from './goods/index.js'
import Listshopcar from './listshopcar/index.js'
import elect from './elect/index.js'
import elect_1 from './elect_1/index.js'
=======
import Goods from './goods'
import Listshopcar from './listshopcar'
import elect from './elect'
import elect_1 from './elect_1'
import list from './list'
>>>>>>> han
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    goods,
    Listshopcar,
    elect_1,
    elect,
    list
  }
})
