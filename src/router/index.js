import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Index.vue";
import About from "../views/About/Index.vue";
import Contact from "../views/Contact/Index.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
