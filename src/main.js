import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from'axios';
Vue.config.productionTip = false;

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import "./assets/css/style.scss";
import "./assets/css/font_1643557_dv9m338xp2f/iconfont.css";
Vue.use(VueAwesomeSwiper);

import  mCard from './components/Card';
Vue.component('mCard',mCard);

import  mCardList from './components/CardList';
Vue.component('mCardList',mCardList);
Vue.prototype.$http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/api/web/'
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
