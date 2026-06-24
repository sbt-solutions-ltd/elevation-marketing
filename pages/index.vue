<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

useHead({
  title: "Elevation Marketing — Strategy. Business. Technology.",
  meta: [
    {
      name: "description",
      content:
        "Elevation Marketing is your all-in-one partner for digital growth — strategy, software, and operations under one roof.",
    },
  ],
});

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
