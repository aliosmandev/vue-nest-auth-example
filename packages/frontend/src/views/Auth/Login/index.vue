<template>
    <div>
        Login Page
        <p>{{authStore.errorMessage}}</p>
        <form @submit="onSubmit">
            <div>
                <Field name="email" placeholder="Enter email" rules="required|email" />
                <ErrorMessage name="email" />
            </div>
            <div>
                <Field name="password" placeholder="Enter password" rules="required" />
                <ErrorMessage name="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();

const { handleSubmit } = useForm<{ email: string, password: string }>();

const onSubmit = handleSubmit(async (values) => {
    const result = await authStore.login(values);
    if (result) router.push("/dashboard");
});

</script>