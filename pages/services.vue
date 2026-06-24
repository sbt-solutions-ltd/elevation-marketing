<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { hero, intro, services, solutions } = useSiteData();

useHead({
  title: "Services — Elevation Marketing",
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
  <LandingHero :content="hero.services" />
  <LandingContainer>
    <LandingIntro :content="intro.services" />
  </LandingContainer>
  <LandingAccordion :items="services" />
  <LandingContainer>
    <LandingSolutions :content="solutions" />
    <LandingTestimonials />
    <LandingCta />
  </LandingContainer>
</template>
