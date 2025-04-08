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
// import markdownit from "markdown-it";
import markdownIt from "markdown-it";
import fs from "fs";
import path from "path";

export default defineNuxtPlugin((nuxtApp) => {
  const md = markdownIt({ html: true, breaks: true });

  const renderMarkdown = (str) => {
    return md.render(str);
  };

  const loadMarkdown = (filePath) => {
    // if (process.server) {
    //   const fullPath = path.join(process.cwd(), "markdown", filePath);
    //   const content = fs.readFileSync(fullPath, "utf-8");
    //   return md.render(content);
    // } else {
    //   console.error("loadMarkdown should only be called on the server-side.");
    //   return null;
    // }
  };

  // Inject hàm loadMarkdown vào context của Nuxt app

  nuxtApp.provide("loadMarkdown", loadMarkdown);
  nuxtApp.provide("md", md);
  nuxtApp.provide("renderMarkdown", renderMarkdown);
});

// export default defineNuxtPlugin((nuxtApp) => {
//   const loadMarkdown = (filePath) => {
//     const fullPath = path.join(process.cwd(), "markdown", filePath);
//     if (fs.existsSync(fullPath)) {
//       return fs.readFileSync(fullPath, "utf-8");
//     } else {
//       console.error(`File not found: ${fullPath}`);
//       return null;
//     }
//   };

//   nuxtApp.provide("loadMarkdown", loadMarkdown);
// });

// Để sử dụng toàn cục, bạn có thể định nghĩa một tệp mới
// export const loadMarkdown = (filePath) => {
//   const { $loadMarkdown } = useNuxtApp();
//   return $loadMarkdown(filePath);
// };

// use in component
/* <template>
  <div v-html="markdownContent"></div>
</template>

<script setup>
const { $loadMarkdown } = useNuxtApp();
const markdownContent = $loadMarkdown('your-file.md');
</script> */
