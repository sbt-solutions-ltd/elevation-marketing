<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

useSeoMeta({
  title: "Academy — Elevation Marketing",
  description:
    "Step forward with Elevation Marketing Academy. Learn. Build. Contribute. Grow.",
});

const { hero, intro, benefits } = useSiteData();
</script>

<template>
  <LandingHero :content="hero.academy" />
  <LandingContainer>
    <LandingIntro :content="intro.academy" />
    <LandingBenefits :content="benefits.academy" />
  </LandingContainer>
  <LandingCta />
</template>
