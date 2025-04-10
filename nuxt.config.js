// other config can not set in config.ts with export default can use defineNuxtConfig
import fs from "fs";

const styleFiles = (path) => {
  const fs = require("fs");
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    return files.map((i) => path + i);
  } else return [];
};
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL:
        typeof process != undefined ? process?.env.NUXT_APP_BASE_URL || "http://localhost:3000/" : "/NotebookPress/",
    },
  },
  // ssr: false,
  // mode: "static",
  router: {
    base: typeof process != undefined ? process?.env.NUXT_APP_BASE_URL || "http://localhost:3000/" : "/NotebookPress/",
  },
  generate: { subFolders: true, fallback: "404.html" },
  app: {
    // rootId: "_himo",
    rootAttrs: {
      id: "_himo",
    },
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        { children: ":root {  }", type: "text/css" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },

  css: ["~/assets/css/main.css", ...styleFiles("assets/css/globals/")],
  compatibilityDate: "2025-04-08",
});
