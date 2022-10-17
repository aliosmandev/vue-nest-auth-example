import { createApp } from "vue";
import { createPinia } from "pinia";
import VeeValidatePlugin from "@/plugins/vee-validate";

import App from "./App.vue";
import router from "./router";

import "@/assets/css/tailwind.css";

const app = createApp(App);

app.use(VeeValidatePlugin);
app.use(router);
app.use(createPinia());

app.mount("#app");
