<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

useSeoMeta({
  title: "About Us — Elevation Marketing",
  description:
    "United by purpose, focused on results. Every result starts with the right minds working in sync.",
});

const { hero, intro, companyValues } = useSiteData();
</script>

<template>
  <LandingHero :content="hero.aboutUs" />
  <LandingContainer>
    <LandingIntro :content="intro.aboutUs" />
    <LandingCompanyValues :content="companyValues.aboutUs" />
  </LandingContainer>
  <LandingCta />
</template>
