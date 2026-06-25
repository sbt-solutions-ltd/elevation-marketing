<script setup lang="ts">
import type { ProcessSteps } from "~/composables/useSiteData";

defineProps<{ content: ProcessSteps }>();
</script>

<template>
  <section class="mt-20">
    <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight">
      {{ content.title }}
    </h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      <div
        v-for="item of content.selectionSteps"
        :key="item.step"
        class="bg-white rounded-2xl backdrop-blur-xl shadow-md h-full border border-gray-100 p-6"
      >
        <span class="text-2xl font-extrabold text-brand-dark-blue">{{
          item.step
        }}</span>
        <h3 class="font-bold text-xl mt-4">{{ item.title }}</h3>
        <h4 class="font-semibold text-lg mt-2">{{ item.highlight }}</h4>
        <p class="text-gray-600 mt-3 leading-relaxed whitespace-pre-line">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>
