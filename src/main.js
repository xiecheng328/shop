import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

// vant 完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// 按需引入vant 推荐
import {
  SubmitBar,
  Card,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn, PullRefresh, List, Row, Col, Toast, CellGroup, Field, Tab, Tabs, Button, Icon, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload
} from 'vant'
Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(PullRefresh).use(List).use(Row).use(Col).use(Toast).use(CellGroup).use(Field).use(Tab).use(Tabs).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)

import '@/mock/mock.js';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
