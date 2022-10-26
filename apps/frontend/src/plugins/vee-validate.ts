import { Form as VeeForm, Field as VeeField, defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";

export default {
  install(app: any) {
    Object.keys(AllRules).forEach((rule) => {
      defineRule(rule, AllRules[rule]);
    });

    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
  },
};
