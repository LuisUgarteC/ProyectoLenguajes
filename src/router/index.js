import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recetas from "../views/Recetas.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

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
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
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

router.beforeEach((to, from, next) => {
  const favicon = document.querySelector('link[rel="icon"]');
  favicon.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHFvdVmP5sbs2W3o-HCY8XH9VDR7GfN3yk9oRMOVsfg&s'; 
  next();
});

export default router;
