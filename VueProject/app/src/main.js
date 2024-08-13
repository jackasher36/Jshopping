import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/pages/Home/TypeNav'
import { reqCategoryList } from '@/api';
import store from './store';

console.log(reqCategoryList().then((data) => {
  
}));

console.log(TypeNav.name);
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false
import router from '@/router'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
