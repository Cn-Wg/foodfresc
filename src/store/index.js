import Vue from 'vue'
import Vuex from 'vuex'
import goods from './goods/index.js'
import Listshopcar from './listshopcar/index.js'
import elect from './elect/index.js'
import elect_1 from './elect_1/index.js'
import List from './list/index.js'
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
    List
  }
})
