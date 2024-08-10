export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      function: "Web dévloppeur",
    },
    fr: {
      function: "Développeur web",
      about: "A propos",
    },
  },
}));
