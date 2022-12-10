import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Index.vue";
import About from "../views/About/Index.vue";
import Contact from "../views/Contact/Index.vue";
import ArticlesIndex from "../views/Articles/Index.vue";
import ArticlesShow from "../views/Articles/Show.vue";

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
    name: "articles.index",
    component: ArticlesIndex,
  },
  {
    path: "/articles/:slug",
    name: "articles.show",
    component: ArticlesShow,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
