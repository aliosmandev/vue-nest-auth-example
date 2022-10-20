import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Home from "@/views/Home/index.vue";
import Login from "@/views/Auth/Login/index.vue";
import Register from "@/views/Auth/Register/index.vue";
import DashboardHome from "@/views/Dashboard/Home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { userOnly: true },
    },
    {
      path: "/auth",
      name: "auth",
      children: [
        {
          path: "login",
          component: Login,
        },
        {
          path: "register",
          component: Register,
        },
      ],
    },
    {
      path: "/dashboard",
      name: "dashboard",
      children: [
        {
          path: "",
          component: DashboardHome,
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
