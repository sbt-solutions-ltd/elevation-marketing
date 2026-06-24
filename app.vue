<script setup lang="ts">
// Site-wide SEO / social metadata. Pages can override title & description with
// their own useSeoMeta() call. Charset and viewport are added by Nuxt already.
const { site } = useAppConfig();
const asset = useAsset();

const home = `${site.url}/`;
const ogImage = `${site.url}${site.ogImage}`; // absolute URL required by OG/Twitter

useHead({
  htmlAttrs: { lang: "en" },
  link: [
    { rel: "canonical", href: home },
    { rel: "icon", type: "image/x-icon", href: asset("/favicon.ico") },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${home}#organization`,
            name: site.name,
            url: home,
            sameAs: [site.linkedin],
          },
          {
            "@type": "WebSite",
            "@id": `${home}#website`,
            url: home,
            name: site.name,
            publisher: { "@id": `${home}#organization` },
            inLanguage: "en-US",
          },
          {
            "@type": "WebPage",
            "@id": `${home}#webpage`,
            url: home,
            name: site.seoTitle,
            description: site.seoDescription,
            isPartOf: { "@id": `${home}#website` },
            inLanguage: "en-US",
          },
        ],
      }),
    },
  ],
});

useSeoMeta({
  title: site.seoTitle,
  description: site.seoDescription,
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  ogLocale: "en_US",
  ogType: "website",
  ogTitle: site.seoTitle,
  ogDescription: site.seoDescription,
  ogUrl: home,
  ogSiteName: site.name,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: site.name,
  ogImageType: "image/png",
  twitterCard: "summary_large_image",
  twitterTitle: site.seoTitle,
  twitterDescription: site.seoDescription,
  twitterImage: ogImage,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
