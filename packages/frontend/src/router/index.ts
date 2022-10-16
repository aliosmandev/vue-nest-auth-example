import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Home from "@/views/Home/index.vue";
import Login from "@/views/Auth/Login/index.vue";
import Register from "@/views/Auth/Register/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ],
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  next();
});

export default router;
