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
    meta: {
      title: "Pilin",
    },
  },
  {
    path: "/recetas",
    name: "Recetas",
    component: Recetas,
    meta: {
      title: "Recetas",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 𐐘💥╾━╤デ╦︻ඞා`;
  next(); 
});

export default router;
