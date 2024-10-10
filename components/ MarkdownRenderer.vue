<template>
  <div v-html="renderedMarkdown"></div>
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
import { inject, ref, onMounted } from "vue";

const props = defineProps({
  filePath: {
    type: String,
    required: true,
  },
});

const renderedMarkdown = ref("");

const loadMarkdown = inject("loadMarkdown"); // Nhận hàm từ plugin

onMounted(() => {
  renderedMarkdown.value = loadMarkdown(props.filePath);
});
</script>

<style>
/* Thêm các kiểu ở đây nếu cần */
</style>
