<script lang="ts" setup>
import Header from "@/components/Header/index.vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

authStore.me();
</script>

<template>
  <Header />
  <RouterView />
</template>
