import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Hero from "../views/Hero.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component:Main,
    children:[{path:'/',name:'home',component:Home},{path:'/articles/:id',component:Article,props:true}],
  },
  {
    path:'/hero/:id',
    name:'hero',
    component:Hero,
    props:true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
