import Vue from 'vue'

import App from './App.vue'
import router from './route'

Vue.config.productionTip = false

import { 
  Tabbar, 
  TabbarItem 
} from 'vant';
import 'vant/lib/index.css';

Vue.use(Tabbar).use(TabbarItem);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
