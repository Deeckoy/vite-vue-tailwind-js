import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    //https://next.router.vuejs.org/guide/advanced/lazy-loading.html
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
