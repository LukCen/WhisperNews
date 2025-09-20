import { createRouter, createWebHistory } from "vue-router";
import ArticlePage from "../pages/ArticlePage.vue";
import Homepage from "../pages/Homepage.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/article:title", component: ArticlePage }
]
export const router = createRouter({
  history: createWebHistory(),
  routes
})
