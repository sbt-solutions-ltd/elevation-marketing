<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

// Title, description and social tags are set site-wide in app.vue.
const { hero, intro, solutions } = useSiteData();

useSeoMeta({
  title: "Elevation Marketing",
  description:
    "Strategy. Business. Technology. One solution that turns digital complexity into growth.",
});
</script>

<template>
  <LandingHero :content="hero.index" />
  <LandingContainer>
    <LandingCarousel :intro="intro.index" />
    <LandingSolutions :content="solutions" />
  </LandingContainer>
  <LandingCta />
</template>
