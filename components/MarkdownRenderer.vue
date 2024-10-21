<template>
  <div v-html="renderedMarkdown"></div>
  <div>test markdown</div>
</template>

<script>
// import { inject } from "vue";

// export default {
//   props: {
//     filePath: {
//       type: String,
//       required: true,
//     },
//   },
//   data() {
//     return {
//       renderedMarkdown: "",
//     };
//   },
//   async asyncData() {
//     const loadMarkdown = inject("$loadMarkdown"); // Sử dụng inject để lấy hàm
//     this.renderedMarkdown = loadMarkdown(this.filePath);
//   },
// };
//
</script>

<!-- components/MarkdownRenderer.vue -->
<script setup>
import { useNuxtApp } from "#app";
import { inject, ref, onMounted } from "vue";

const { $loadMarkdown } = useNuxtApp();
const props = defineProps({
  filePath: {
    type: String,
    required: true,
  },
});

const renderedMarkdown = ref("");

onMounted(async () => {
  const data = await $loadMarkdown(props.filePath);
  renderedMarkdown.value = data;
});
</script>

<style>
/* Thêm các kiểu ở đây nếu cần */
</style>
