import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import Checkout from "../pages/Checkout.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/category/:category",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/product/:product",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
