import { plugin } from "postcss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: false,
  devtools: { enabled: true },
  alias: {
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    assets: "/<srcDir>/assets",
    public: "/<srcDir>/public",
  },
  // config

  render: {
    resourceHints: false
  },
  router: {
    base: "/NotebookPress/", // Thay <NotebookPress> bằng tên repository của bạn
    prefetchLinks: false,
    // mode: 'hash'
  },
  build: {
    extend(config: any, { isClient }: any) {
      if (isClient) {
        config.node = {
          process: true,
        };
      }
    },
  },
  modules: ["@nuxtjs/storybook"],
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    "/testa/**": { ssr: true },
    "/games/**": { ssr: false },

    // Static page generated on-demand, revalidates in background (ISG)
    // là feature testing code nên cache 1 day ago
    "/storybook/**": { swr: 86400 },

    // Static page generated on-demand once (SSG - or at least mighty close)
    // note: các ghi chú nen server side generated các file tĩnh trước
    "/note/**": { static: true },

    // Render these routes on the client (SPA)
    "/admin/**": { ssr: false },
    // Automatically adds cors headers with - you can customize the output by overriding with cors: trueheaders
    "/api/**": { cors: true },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
