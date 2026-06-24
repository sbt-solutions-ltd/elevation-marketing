<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

// Title, description and social tags are set site-wide in app.vue.
const { hero, intro, stats, solutions } = useSiteData();

useHead({
  title: "Elevation Marketing",
  meta: [
    {
      name: "description",
      content:
        "Everything you need, working as one — marketing, retention, creative, acquisition, software, project management, compliance, and finance.",
    },
  ],
});
</script>

<template>
  <LandingHero :content="hero.index" />
  <LandingContainer>
    <LandingCarousel :intro="intro.index" />
  </LandingContainer>
  <LandingStats :content="stats.index" />
  <LandingContainer>
    <LandingSolutions :content="solutions" />
  </LandingContainer>
  <LandingCta />
</template>
