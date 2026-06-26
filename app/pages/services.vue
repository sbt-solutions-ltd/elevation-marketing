<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { hero, intro, services, solutions } = useSiteData();

useSeoMeta({
  title: "Services — Elevation Marketing",
  description:
    "Everything You Need, Working as One. Strategic marketing | Seamless retention | Targeted acquisition | Scalable software | Structured delivery | Trusted compliance | Efficient finance",
});
</script>

<template>
  <LandingHero :content="hero.services" />
  <LandingContainer>
    <LandingIntro :content="intro.services" />
    <LandingServices :content="services" />
    <LandingSolutions :content="solutions" />
  </LandingContainer>
  <LandingCta />
</template>
