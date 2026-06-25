<script setup lang="ts">
import type { Benefits } from "~/composables/useSiteData";

defineProps<{ content: Benefits }>();
</script>

<template>
  <section class="mt-20">
    <p class="text-sm font-semibold uppercase tracking-wide text-gray-600">
      {{ content.title }}
    </p>
    <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
      {{ content.highlight }}
    </h2>
    <p class="text-slate-600 mt-4">
      {{ content.description }}
    </p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div
        v-for="item of content.benefitItems"
        :key="item"
        class="flex items-start gap-2 bg-white rounded-2xl backdrop-blur-xl shadow-md h-full border border-gray-100 p-4"
      >
        <LandingTick className="w-6 h-6 text-brand-dark-blue shrink-0" />
        <span class="text-slate-700">{{ item }}</span>
      </div>
    </div>
  </section>
</template>
