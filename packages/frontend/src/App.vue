<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/auth/login">Login</RouterLink>
    <RouterLink to="/auth/register">Register</RouterLink>
  </header>

  <RouterView />
</template>