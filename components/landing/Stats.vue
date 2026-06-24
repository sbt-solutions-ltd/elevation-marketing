<script setup lang="ts">
import type { StatsContent } from "~/composables/useSiteData";

defineProps<{ content: StatsContent }>();
</script>

<template>
  <!--
    Replicates the original Oxygen #counter section:
    full-bleed #1d1d1f background, a centered 90vw / max-1408px band laid out as
    a flex row (left heading 50% | right 2x2 counter grid) that stacks below lg.
  -->
  <section class="bg-ink text-left mt-20 md:mt-28">
    <div
      class="w-[90vw] max-w-[1408px] mx-auto py-20 md:py-24 flex flex-col gap-12 lg:flex-row lg:gap-12"
    >
      <!-- Left: heading + subtitle -->
      <div class="flex flex-col gap-4 lg:w-1/2">
        <h2
          class="font-display font-bold text-white leading-tight text-[2rem] lg:text-[2.4rem] xl:text-[2.5rem]"
        >
          {{ content.title }}
        </h2>
        <p class="text-line text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]">
          {{ content.subtitle }}
        </p>
      </div>

      <!-- Right: 2-column counter grid -->
      <div
        class="grid grid-cols-2 items-stretch gap-x-6 gap-y-5 lg:gap-y-[2.1rem] lg:flex-1"
      >
        <div
          v-for="(s, i) in content.items"
          :key="i"
          class="min-h-[78px] lg:min-h-[100px] xl:min-h-[120px]"
        >
          <div class="flex items-center gap-1.5">
            <span
              class="font-display font-bold text-white leading-[1.2] text-[2.25rem] lg:text-[3rem] xl:text-[4rem]"
            >
              <LandingAnimatedCounter :value="s.value" />
            </span>
            <span
              v-if="s.suffix"
              class="font-display font-semibold text-white leading-none text-[2.4rem] lg:text-[3rem] xl:text-[3.7rem]"
              >{{ s.suffix }}</span
            >
          </div>
          <p class="mt-2 text-line text-base lg:text-[1.25rem]">
            {{ s.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
