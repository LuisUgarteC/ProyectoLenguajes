import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recetas from "../views/Recetas.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from "../views/BlogPreview.vue";
import ViewRecipe from "../views/ViewRecipe.vue";
import EditBlog from "../views/EditBlog.vue";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Inicio",
      requiresAuth: false,
    },
  },
  {
    path: "/recetas",
    name: "Recetas",
    component: Recetas,
    meta: {
      title: "Recetas",
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      requiresAuth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Olvidaste Constraseña",
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: "Admin",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },  
  {
  path: "/create-post",
  name: "CreatePost",
  component: CreatePost,
  meta: {
    title: "Crear Post",
    requiresAuth: true,
    requiresAdmin: true,
  },
}, 
{
  path: "/post-preview",
  name: "BlogPreview",
  component: BlogPreview,
  meta: {
    title: "Preview receta",
    requiresAuth: true,
    requiresAdmin: true,
  },
},
{
  path: "/view-recipe/:blogid",
  name: "ViewRecipe",
  component: ViewRecipe,
  meta: {
    title: "Ver publicación receta",
    requiresAuth: false,
  },
},
{
  path: "/edit-blog/:blogid",
  name: "EditBlog",
  component: EditBlog,
  meta: {
    title: "Editar Receta",
    requiresAuth: true,
    requiresAdmin: true,
  },
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Yojada`;
  next(); 
});

router.beforeEach((to, from, next) => {
  const favicon = document.querySelector('link[rel="icon"]');
  favicon.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHFvdVmP5sbs2W3o-HCY8XH9VDR7GfN3yk9oRMOVsfg&s'; 
  next();
});

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({ name: "Home" });
      }
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
});

export default router;
