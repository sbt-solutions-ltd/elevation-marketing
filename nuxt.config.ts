// https://nuxt.com/docs/api/configuration/nuxt-config

// When deploying to GitHub Pages the site is served from a sub-path
// (https://sbt-solutions-ltd.github.io/elevation-marketing/), so every asset
// URL must be prefixed with the repo name. The `deploy` script sets
// DEPLOY_ENV=gh-pages; local `dev`/`generate` keep the root base URL.
const isGhPages = process.env.DEPLOY_ENV === "gh-pages";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: isGhPages ? "/elevation-marketing/" : "/",
    head: {
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },
  modules: ["nuxt-icon"],
});
