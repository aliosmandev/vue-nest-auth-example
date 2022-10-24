<template>
  <div class="h-full m-auto max-w-xl">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to
        your account</h1>
      <form class="space-y-4 md:space-y-6" @submit="login">
        <VeeField name="email" v-slot="{ field }" rules="required|email">
          <Input v-bind="field" name="email" label="Your Email" placeholder="Email" />
        </VeeField>
        <VeeField name="password" v-slot="{ field }" rules="required">
          <Input v-bind="field" name="password" type="password" rules="required" label="Password"
            placeholder="••••••••" />
        </VeeField>
        <button type="submit"
          class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Sign in
        </button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <RouterLink to="/auth/register"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { LoginBody } from "@/types";
import { useForm } from "vee-validate";
import { useAuthStore } from "@/stores/auth";
import Input from "@/components/Input/index.vue";
const authStore = useAuthStore();

const { handleSubmit } = useForm<LoginBody>();

const login = handleSubmit(async (values) => await authStore.login(values));
</script>
