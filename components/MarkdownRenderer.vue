<template>
  <div v-html="renderedMarkdown"></div>
</template>

<!--  defiend name -->
<!-- <script>
export default {
  name: "CustomName",
  inheritAttrs: false,
  customOptions: {},
};
</script> -->
<!-- components/MarkdownRenderer.vue -->
<script setup>
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";

defineOptions({
  name: "MarkdownRenderer",
});
const props = defineProps({
  filePath: {
    type: String,
    required: true,
  },
});
const { $loadMarkdown, $md, $loadData } = useNuxtApp();

const renderedMarkdown = ref("");

// c1 using function to render
// const loadData = () => {
//   renderedMarkdown.value = $loadMarkdown("test.md");
// };
// loadData();

// Sử dụng useAsyncData để load nội dung trong SSR
const { data } = await useAsyncData(props.filePath, () => {
  return new Promise((resolve) => {
    const content = $loadMarkdown(props.filePath);
    resolve(content);
  });
});
onMounted(() => {
  renderedMarkdown.value = data.value;
});
</script>

<style>
/* Thêm các kiểu ở đây nếu cần */
code {
  white-space: break-spaces;
}
</style>
