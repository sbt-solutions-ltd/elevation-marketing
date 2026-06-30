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
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/seo",
  ],

  // Self-host the brand fonts instead of loading them from the Google Fonts CDN.
  // @nuxt/fonts downloads the woff2 files at build time, serves them same-origin
  // (no cross-origin preconnect/round-trip on the critical path), and generates
  // size-adjusted fallback @font-face rules so swapping in the web font causes no
  // layout shift. Only the weights actually used are fetched — keep these in sync
  // with main.css (Poppins font-sans / Plus Jakarta Sans font-display) and the
  // font-weight utilities used in templates.
  fonts: {
    families: [
      { name: "Poppins", provider: "google", weights: [400, 500, 600, 700, 800] },
      { name: "Plus Jakarta Sans", provider: "google", weights: [600, 700] },
    ],
  },

  // Tailwind CSS v4 is wired in as a Vite plugin (the old @nuxtjs/tailwindcss
  // module is v3-only). All theme config now lives CSS-first in main.css via
  // @theme, so there is no tailwind.config.ts.
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle these dev-only deps so Vite doesn't discover them mid-session
    // and trigger a full page reload (dependency re-optimization). Dev only —
    // Vite ignores optimizeDeps during `nuxt generate`/`build`.
    optimizeDeps: {
      include: [
        "@unhead/schema-org/vue",
        "@vue/devtools-core",
        "@vue/devtools-kit",
      ],
    },
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
      // Brand fonts are now self-hosted via @nuxt/fonts (see `fonts` above), so
      // the Google Fonts CDN preconnect/preload/noscript links are gone — the
      // module injects same-origin @font-face + preload for the first used font.
      link: [
        // Preload the hero image — it's the LCP element (full-bleed background
        // of the first section). The <picture> in components/landing/Hero.vue
        // already sets fetchpriority="high", but a <head> preload lets the
        // browser start the fetch before it parses down to the markup. The
        // `media` queries MUST mirror Hero.vue's <source> breakpoints exactly so
        // only the variant that will actually render is fetched (no double
        // download), and the hrefs match the <img>/<source> paths verbatim.
        {
          rel: "preload",
          as: "image",
          href: "/hero/hero-mobile.webp",
          type: "image/webp",
          media: "(max-width: 767px)",
          fetchpriority: "high",
        },
        {
          rel: "preload",
          as: "image",
          href: "/hero/hero-tablet.webp",
          type: "image/webp",
          media: "(min-width: 768px) and (max-width: 1023px)",
          fetchpriority: "high",
        },
        {
          rel: "preload",
          as: "image",
          href: "/hero/hero-desktop.webp",
          type: "image/webp",
          media: "(min-width: 1024px)",
          fetchpriority: "high",
        },
      ],
    },
  },
});
