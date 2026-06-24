<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

// Title, description and social tags are set site-wide in app.vue.
const { hero, intro, stats, solutions } = useSiteData();
</script>

<template>
  <LandingHero :content="hero.index" />
  <LandingContainer>
    <LandingCarousel :intro="intro.index" />
  </LandingContainer>
  <LandingStats :content="stats.index" />
  <LandingContainer>
    <LandingSolutions :content="solutions.index" />
  </LandingContainer>
  <LandingCta />
</template>
