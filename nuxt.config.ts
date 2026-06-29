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

// An explicit NUXT_APP_BASE_URL always wins (e.g. building for an independent
// host served from the domain root: NUXT_APP_BASE_URL="/"). Otherwise fall back
// to the GitHub Pages sub-path in production and root in dev.
const baseURL =
  process.env.NUXT_APP_BASE_URL ?? (isGhPages ? "/elevation-marketing/" : "/");

// Which deploy target this build is for, derived from the resolved base path:
// the GitHub Pages preview lives under the /elevation-marketing/ sub-path,
// production (elevation-marketing.net) at the domain root. NODE_ENV can't tell
// the two static builds apart (both run `nuxt generate` with NODE_ENV=production)
// — the base path can. Drives the Web3Forms key and canonical origin below.
const isGhPagesDeploy = baseURL.startsWith("/elevation-marketing");

// Web3Forms access keys are public by design (sent from the browser) and each
// is domain-restricted in the Web3Forms dashboard, so they live in source.
// Pick the key matching the deploy target. An explicit NUXT_PUBLIC_WEB3FORMS_KEY
// env var still overrides this (handy for local dev / one-off hosts).
const web3formsKey = isGhPagesDeploy
  ? "44b3325c-e645-4440-9985-cd86c14f639d" // GitHub Pages preview
  : "9f9e2e49-9e8a-4b02-9828-40cb30fe075f"; // production (elevation-marketing.net)

// Canonical origin per deploy target (the SEO module appends baseURL + path, so
// this is the origin only). Production: https://elevation-marketing.net/ — GitHub
// Pages: https://sbt-solutions-ltd.github.io/elevation-marketing/.
const siteUrl = isGhPagesDeploy
  ? "https://sbt-solutions-ltd.github.io"
  : "https://elevation-marketing.net";

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
    url: siteUrl,
    name: "Elevation Marketing",
  },

  // Production is served from the domain root on elevation-marketing.net, so it
  // can own /robots.txt — @nuxtjs/seo generates it (allow-all) and links the
  // sitemap. The GitHub Pages preview lives under a sub-path and can't own the
  // domain-root robots.txt, so skip the file there (the per-page robots meta
  // tags it injects still apply in both).
  robots: {
    robotsTxt: !isGhPagesDeploy,
  },

  // No brand OG image yet — skip auto-generating placeholder ones. Re-enable
  // (delete this line) once a real share image / template exists.
  ogImage: { enabled: false },

  // Bundle the icons into the client so they render offline on static hosting
  // (no runtime requests to the Iconify API). `scan` catches icons named
  // statically in templates; the explicit list covers the value-card icons that
  // come from useSiteData via :name="item.icon" (the scanner can't see those).
  // Keep this list in sync with the `icon` fields in composables/useSiteData.ts
  // (companyValues.careers + companyValues.aboutUs valueItems).
  icon: {
    clientBundle: {
      scan: true,
      icons: [
        // companyValues.careers value cards
        "bx:bxs-hand",
        "bx:bxs-shield",
        "bx:bxs-book-open",
        "bx:bxs-bulb",
        "bx:bxs-star",
        // companyValues.aboutUs value cards (mission / vision / motto)
        "bx:bxs-flag",
        "bx:bxs-zap",
      ],
      sizeLimitKb: 512,
    },
  },

  // Web3Forms access key for the contact form, selected per deploy target above
  // (web3formsKey). Override per environment with NUXT_PUBLIC_WEB3FORMS_KEY.
  runtimeConfig: {
    public: {
      web3formsKey,
    },
  },

  app: {
    baseURL,
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
