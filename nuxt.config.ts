// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

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

  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/seo",
  ],

  // Tailwind CSS v4 is wired in as a Vite plugin (the old @nuxtjs/tailwindcss
  // module is v3-only). All theme config now lives CSS-first in main.css via
  // @theme, so there is no tailwind.config.ts.
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  // Read by @nuxtjs/seo to build per-page canonical URLs, og:url and the
  // sitemap. `url` is the origin only — the SEO modules append app.baseURL
  // (the GitHub Pages "/elevation-marketing/" sub-path) automatically.
  site: {
    url: "https://sbt-solutions-ltd.github.io",
    name: "Elevation Marketing",
  },

  // A project Pages site can't own /robots.txt at the domain root (it lives
  // under the sub-path), so skip the file — the per-page robots meta tags that
  // @nuxtjs/seo injects still apply. The sitemap is still generated.
  robots: {
    robotsTxt: false,
  },

  // No brand OG image yet — skip auto-generating placeholder ones. Re-enable
  // (delete this line) once a real share image / template exists.
  ogImage: { enabled: false },

  // Bundle the icons into the client so they render offline on static hosting
  // (no runtime requests to the Iconify API). `scan` catches icons named
  // statically in templates; the explicit list covers the value-card icons that
  // come from useSiteData via :name="item.icon" (the scanner can't see those).
  icon: {
    clientBundle: {
      scan: true,
      icons: [
        "bx:bxs-hand",
        "bx:bxs-shield",
        "bx:bxs-book-open",
        "bx:bxs-bulb",
        "bx:bxs-star",
      ],
      sizeLimitKb: 512,
    },
  },

  // Web3Forms access key for the contact form. Set NUXT_PUBLIC_WEB3FORMS_KEY in
  // the environment (or a .env file) — never commit the real key. Get a free
  // key at https://web3forms.com/.
  runtimeConfig: {
    public: {
      web3formsKey: "",
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
        // Load fonts non-blocking but at HIGH priority (preload as style, then
        // promote to a stylesheet on load). This keeps render unblocked while
        // making the display font available early so the LCP heading doesn't
        // wait on a late font swap. Only used weights are requested
        // (Poppins 400-800; Plus Jakarta Sans only 600/700).
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700&display=swap",
          onload: "this.onload=null;this.rel='stylesheet'",
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
});
