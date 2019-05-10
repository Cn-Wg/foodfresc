import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from './store/index.js'
=======
import store from './store/index'
>>>>>>> items
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
