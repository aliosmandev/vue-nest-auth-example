import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
app.use(router);
app.use(createPinia());

app.mount("#app");
