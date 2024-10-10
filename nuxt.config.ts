// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  alias: {
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    assets: "/<srcDir>/assets",
    public: "/<srcDir>/public",
  },
  // config
  modules: ["@nuxtjs/storybook"],
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
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
