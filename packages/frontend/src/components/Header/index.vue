<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div class="flex items-center lg:order-2">
          <template v-if="!authStore.isAuthenticated">
            <RouterLink
              to="/auth/login"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >Log in</RouterLink
            >
            <RouterLink to="/auth/register" class="btn-primary">Register</RouterLink>
          </template>
          <template v-else>
            <RouterLink to="/dashboard" class="btn-primary">Dashboard</RouterLink>
            <button @click="authStore.logout" class="btn-warning">Logout</button>
          </template>
        </div>
        <div class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/dashboard" class="nav-link">Private Route</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
