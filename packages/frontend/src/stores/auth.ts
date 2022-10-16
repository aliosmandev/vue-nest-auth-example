import type { User, LoginPayload } from "@/types";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "@/plugins/axios";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>();
  const isAuthenticated = computed<boolean>(() => !!user.value);
  const errorMessage = ref();

  const login = async (payload: LoginPayload): Promise<boolean> => {
    errorMessage.value = "";
    try {
      const response = await axios.post("/auth/login", payload);
      user.value = response.data.user;
      localStorage.setItem("token", response.data.accessToken);
      return true;
    } catch (err: any) {
      errorMessage.value = err.response.data.message;
      return false;
    }
  };

  return { user, isAuthenticated, errorMessage, login };
});
