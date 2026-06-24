<script setup lang="ts">
import type { IntroContent } from "~/composables/useSiteData";

defineProps<{ content: IntroContent }>();
</script>
<template>
  <div class="grid lg:grid-cols-2 gap-8 items-start mt-20 md:mt-28">
    <div>
      <p class="text-base font-semibold uppercase tracking-wide">
        {{ content.title }}
      </p>
      <h2 class="text-3xl lg:text-6xl font-extrabold tracking-tight mt-3">
        {{ content.highlight }}
      </h2>
    </div>
    <p class="text-lg text-slate-600 lg:pt-2">
      {{ content.text }}
    </p>
  </div>
</template>
