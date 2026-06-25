<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { site } = useAppConfig();

useSeoMeta({
  title: "Contact Us — Elevation Marketing",
  description:
    "Schedule a consultation with Elevation Marketing. Partner with us and unlock your business's full potential.",
});
</script>

<template>
  <LandingContainer>
    <section class="max-w-4xl mx-auto text-center pt-2 md:pt-6">
      <h1 class="text-4xl lg:text-6xl font-bold lg:tracking-tight">
        Schedule a Consultation
      </h1>
      <p class="text-lg md:text-xl mt-6 text-slate-600 max-w-2xl mx-auto">
        Partner with Elevation Marketing and unlock your business's full
        potential. See how we turn strategy into execution and ideas into
        results.
      </p>
    </section>

    <div class="grid md:grid-cols-2 gap-12 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-bold text-2xl text-gray-900">Partner With Us</h2>
        <p class="text-lg leading-relaxed text-gray-600 mt-3">
          Great things happen when the right people align. Ready to build what's
          next with us? Fill out the form or reach us directly.
        </p>
        <div class="mt-6 space-y-3">
          <div class="flex items-start gap-2 text-gray-600">
            <Icon
              class="text-gray-400 w-5 h-5 mt-0.5 shrink-0"
              name="uil:map-marker"
            />
            <span>{{ site.address }}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <Icon class="text-gray-400 w-5 h-5 shrink-0" name="uil:envelope" />
            <a :href="`mailto:${site.email}`" class="hover:text-gray-900">{{
              site.email
            }}</a>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <Icon class="text-gray-400 w-5 h-5 shrink-0" name="uil:envelope" />
            <a
              :href="`mailto:${site.careersEmail}`"
              class="hover:text-gray-900"
              >{{ site.careersEmail }}</a
            >
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <Icon
              class="text-gray-400 w-5 h-5 shrink-0"
              name="bxl:linkedin-square"
            />
            <a
              :href="site.linkedin"
              target="_blank"
              rel="noopener"
              class="hover:text-gray-900"
              >LinkedIn</a
            >
          </div>
        </div>

        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <LandingLink href="/about" styleName="outline" size="md"
            >More about us</LandingLink
          >
          <LandingLink href="/careers" styleName="muted" size="md"
            >Job vacancies</LandingLink
          >
        </div>
      </div>
      <div>
        <LandingContactForm />
      </div>
    </div>
  </LandingContainer>
</template>
