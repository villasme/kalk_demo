import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import App from './App.vue'
import router from './route'

Vue.config.productionTip = false


import { 
  Tabbar, 
  TabbarItem,
  Search,
  Panel,
  Row,
  Col,
  Icon,
  List,
  Popup,
  Cell,
  SwipeCell,
  NavBar,
  Button
} from 'vant';
import 'vant/lib/index.css';

Vue.use(Tabbar).use(TabbarItem);
Vue.use(Search)
Vue.use(Panel)
Vue.use(Row).use(Col)
Vue.use(Icon);
Vue.use(List);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(SwipeCell);
Vue.use(NavBar);
Vue.use(Button);

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
