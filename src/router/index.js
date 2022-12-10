import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Index.vue";
import About from "../views/About/Index.vue";
import Contact from "../views/Contact/Index.vue";
import Articles from "../views/Articles/Index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/articles",
    name: "articles",
    component: Articles,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
