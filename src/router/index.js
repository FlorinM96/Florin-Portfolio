import { createRouter, createWebHistory } from "vue-router";
import Home from "../views";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/projects/etsfactory",
    name: "projects-etsfactory",
    component: () => import("../views/Projects/etsfactory.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../views/Education.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/*",
    component: () => import("../views/404.vue"),
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
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;
