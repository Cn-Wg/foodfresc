import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import VueJsonp from 'vue-jsonp'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(VueJsonp);
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
