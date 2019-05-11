import Vue from 'vue'
import Vuex from 'vuex'
import Goods from './goods'
import Listshopcar from './listshopcar'
import elect from './elect'
import elect_1 from './elect_1'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    Goods,
    Listshopcar,
    elect_1,
    elect
  }
})
