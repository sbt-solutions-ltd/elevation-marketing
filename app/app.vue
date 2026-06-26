<script setup lang="ts">
// Site-wide SEO defaults and structured data.
//
// @nuxtjs/seo handles the per-page canonical URL, og:url, sitemap and robots
// automatically from the `site` config in nuxt.config. Pages set their own
// title & description via useSeoMeta(), and the SEO module mirrors those into
// og:title / og:description per page — so only the shared defaults live here.
const { site } = useAppConfig();
const asset = useAsset();

useHead({
  // Pages already include the brand in their titles (e.g. "About Us —
  // Elevation Marketing"), so use them verbatim instead of letting the SEO
  // module append "| Elevation Marketing" a second time.
  titleTemplate: (title) => title || site.seoTitle,
  link: [
    // baseURL-aware so it resolves under the GitHub Pages sub-path too.
    { rel: "icon", type: "image/x-icon", href: asset("/favicon.ico") },
  ],
});

useSeoMeta({
  title: site.seoTitle,
  description: site.seoDescription,
  ogType: "website",
  ogSiteName: site.name,
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
});

// Organization node; @nuxtjs/seo adds the WebSite / WebPage schema per page.
useSchemaOrg([
  defineOrganization({
    name: site.name,
    url: site.url,
  }),
]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
