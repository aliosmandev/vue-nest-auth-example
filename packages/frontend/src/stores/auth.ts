import type { User, LoginBody } from "@/types";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import * as auth from "@/services/auth";

export const useAuthStore = defineStore("auth", () => {
  const toast = useToast();
  const router = useRouter();
  const user = ref<User | null>();
  const isAuthenticated = computed<boolean>(() => !!user.value);

  const login = async (payload: LoginBody) => {
    try {
      const { data } = await auth.login(payload);
      user.value = data.user;
      localStorage.setItem("token", data.token);
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
    const response = await auth.getUser();
    user.value = response.data;
  };

  return { user, isAuthenticated, login, logout, me };
});
