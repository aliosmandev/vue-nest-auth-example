import { createApp } from "vue";
import { createPinia } from "pinia";
import VeeValidatePlugin from "@/plugins/vee-validate";
import Toast from "vue-toastification";

import App from "./App.vue";
import router from "./router";

import "@/assets/css/tailwind.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(VeeValidatePlugin);
app.use(router);
app.use(Toast, { position: "top-center" });
app.use(createPinia());

app.mount("#app");
