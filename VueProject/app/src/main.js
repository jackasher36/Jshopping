import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/pages/Home/TypeNav'

console.log(TypeNav.name);
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false
import router from '@/router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
