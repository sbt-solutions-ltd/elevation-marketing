<script setup lang="ts">
import type { Solutions } from "~/composables/useSiteData";

defineProps<{ content: Solutions }>();
</script>

<template>
  <section class="mt-20">
    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <div class="lg:sticky lg:top-36">
        <h2 class="text-3xl lg:text-5xl font-extrabold tracking-tight">
          {{ content.title }}
        </h2>
        <p class="text-lg mt-4 text-slate-600">
          {{ content.description }}
        </p>
        <picture>
          <!-- tablet & desktop: 768px and up -->
          <source
            media="(min-width: 768px)"
            srcset="/solutions-tablet-and-desktop.webp"
            type="image/webp"
          />
          <!-- mobile: up to 767px (default img) -->
          <img
            src="/solutions-mobile.webp"
            alt="Elevation Marketing team"
            width="300"
            height="169"
            class="rounded-[2rem] mt-8 w-full object-cover"
            loading="lazy"
          />
        </picture>
        <div class="mt-8">
          <LandingLink href="/contact">{{ content.buttonText }}</LandingLink>
        </div>
      </div>

      <div class="space-y-8">
        <div
          v-for="item of content.solutionItems"
          :key="item.number"
          class="bg-white rounded-2xl backdrop-blur-xl shadow-md h-full border border-gray-100 p-6"
        >
          <span class="text-2xl font-extrabold text-brand-dark-blue">{{
            item.number
          }}</span>
          <h3 class="font-bold text-2xl mt-4">{{ item.title }}</h3>
          <p class="text-gray-600 mt-3 leading-relaxed whitespace-pre-line">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
