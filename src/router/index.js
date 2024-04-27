import { createRouter, createWebHistory } from "vue-router";
import TodosView from "@/views/TodosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TodosView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
