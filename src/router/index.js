import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recetas from "../views/Recetas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recetas",
    name: "Recetas",
    component: Recetas,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
