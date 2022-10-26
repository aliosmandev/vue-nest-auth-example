// my purpose for using defineComponent here vue does not support inheritAttrs in setup.
<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { defineComponent, toRef } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
});
const { value, errorMessage } = useField(toRef(props, "name"), undefined);
</script>

<template>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <input
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      v-model="value"
      :type="props.type"
      :placeholder="props.placeholder"
    />
    <p class="mt-2 text-red-500">{{ errorMessage }}</p>
  </div>
</template>
