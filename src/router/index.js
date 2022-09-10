import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import addCategory from "../views/Category/addCategory.vue";
import Category from "../views/Category/Category.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/addCategory",
      name: "addCategory",
      component: addCategory,
    },
    {
      path: "/Category",
      name: "Category",
      component: Category,
    },
  ],
});

export default router;
