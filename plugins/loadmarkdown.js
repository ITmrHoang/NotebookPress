// nuxt2 inject global loadMarkDown
// import MarkdownIt from 'markdown-it';
// import fs from 'fs';
// import path from 'path';

// export default (context, inject) => {
//   const md = new MarkdownIt();

//   const loadMarkdown = (filePath) => {
//     const fullPath = path.join(process.cwd(), 'markdown', filePath);
//     const content = fs.readFileSync(fullPath, 'utf-8');
//     return md.render(content);
//   };
// provide markdown
//  context.$provideLoadMarkdown = loadMarkdown;
//   inject('loadMarkdown', loadMarkdown);
// };

// nuxt.config.js
// export default {
//     plugins: [
//       '~/plugins/markdown.js',
//     ],
//   };
// utizule
import MarkdownIt from "markdown-it";
import fs from "fs";
import path from "path";

export default defineNuxtPlugin((nuxtApp) => {
  const md = new MarkdownIt();

  const loadMarkdown = (filePath) => {
    const fullPath = path.join(process.cwd(), "markdown", filePath);
    const content = fs.readFileSync(fullPath, "utf-8");
    return md.render(content);
  };

  // Inject hàm loadMarkdown vào context của Nuxt app
  nuxtApp.provide("loadMarkdown", loadMarkdown);
});

// Để sử dụng toàn cục, bạn có thể định nghĩa một tệp mới
export const loadMarkdown = (filePath) => {
  const { $loadMarkdown } = useNuxtApp();
  return $loadMarkdown(filePath);
};

// use in component
/* <template>
  <div v-html="markdownContent"></div>
</template>

<script setup>
const { $loadMarkdown } = useNuxtApp();
const markdownContent = $loadMarkdown('your-file.md');
</script> */
