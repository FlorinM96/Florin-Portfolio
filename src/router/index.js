import { createRouter, createWebHistory } from "vue-router";
import Home from "../views";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

const DEFAULT_TITLE = "Florin Mihalcea - frontend developer";

router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
