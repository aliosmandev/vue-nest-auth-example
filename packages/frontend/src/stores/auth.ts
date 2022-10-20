import type { User, LoginBody } from "@/types";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import axios from "@/plugins/axios";

export const useAuthStore = defineStore("auth", () => {
  const toast = useToast();
  const router = useRouter();
  const user = ref<User | null>();
  const isAuthenticated = computed<boolean>(() => !!user.value);

  const login = async (payload: LoginBody) => {
    try {
      const response = await axios.post("/auth/login", payload);
      user.value = response.data.user;
      localStorage.setItem("token", response.data.accessToken);
      router.replace("/dashboard");
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const logout = async () => {
    user.value = null;
    localStorage.removeItem("token");
  };

  const me = async () => {
    const response = await axios.get("/users/me");
    user.value = response.data;
  };

  return { user, isAuthenticated, login, logout, me };
});
