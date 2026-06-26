<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { hero, intro, companyValues, benefits, selectionProcess } =
  useSiteData();

useSeoMeta({
  title: "Careers — Elevation Marketing",
  description:
    "Work that shapes your future. One mission, many roles. United to create lasting impact.",
});
</script>

<template>
  <LandingHero :content="hero.careers" />
  <LandingContainer>
    <LandingIntro :content="intro.careers" />
    <LandingCompanyValues :content="companyValues.careers" />
    <LandingBenefits :content="benefits.careers" />
    <LandingSelectionProcess :content="selectionProcess" />
  </LandingContainer>
  <LandingCta />
</template>
