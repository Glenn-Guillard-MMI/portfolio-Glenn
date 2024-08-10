export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/main.css"],
  modules: ["@hypernym/nuxt-gsap", "@nuxtjs/i18n"],
  i18n: {
    strategy: "no_prefix",
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "fr", iso: "fr-FR", name: "French" },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    vueI18n: "./i18n.config.ts",
  },
});
