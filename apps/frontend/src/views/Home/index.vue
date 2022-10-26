<template>
    <div>
        <h1>Home</h1>
        <p>{{ store.user }}</p>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
</script>
