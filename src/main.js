import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import Vuelidate from 'vuelidate'






Vue.use(Vuelidate)
Vue.use(VueRouter)

Vue.config.productionTip = false




const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
