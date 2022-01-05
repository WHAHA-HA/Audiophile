import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import CategoryPage from "../pages/CategoryPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/:category", name: "CategoryPage", component: CategoryPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
