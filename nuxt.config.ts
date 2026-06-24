// https://nuxt.com/docs/api/configuration/nuxt-config

// When deploying to GitHub Pages the site is served from a sub-path
// (https://sbt-solutions-ltd.github.io/elevation-marketing/), so every asset
// URL must be prefixed with the repo name. Production static builds
// (`nuxt generate`, run locally and in CI) set NODE_ENV=production and get the
// sub-path; `nuxt dev` runs with NODE_ENV=development and keeps the root base.
const isGhPages =
  process.env.NODE_ENV === "production" ||
  process.env.DEPLOY_ENV === "gh-pages";

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2026-06-24",
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
        // Load fonts without blocking render: fetch as `print` (non-blocking),
        // then flip to `all` once loaded. Only the weights actually used are
        // requested (Poppins 400-800; Plus Jakarta Sans only 600/700).
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700&display=swap",
          media: "print",
          onload: "this.media='all'",
        },
      ],
      // Fallback for users with JavaScript disabled.
      noscript: [
        {
          innerHTML:
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700&display=swap">',
        },
      ],
    },
  },
  modules: ["nuxt-icon"],
});
