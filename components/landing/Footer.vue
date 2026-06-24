<script setup lang="ts">
const { site } = useAppConfig();
</script>

<template>
  <!--
    Replicates the original Oxygen footer (breakpoint at 1024px / lg):
      • Full-bleed top/bottom borders wrap a centered 90vw / max-1440px box
        with #f7f7f7 side borders.
      • Desktop (lg+): logo/contact block flush-left, then the Company and
        Follow blocks as side-by-side vertical columns flush-right
        (space-between), with thin vertical dividers.
      • Below lg: everything stacks; Company/Follow become label-left /
        links-right rows separated by horizontal dividers.
      • Bottom bar: centered + stacked below lg, copyright-left / legal-right
        on lg.
  -->
  <footer class="mt-24 text-left">
    <!-- Main box: full-bleed horizontal borders + 90vw side borders -->
    <div class="border-y border-brand-footer-border">
      <div
        class="w-[90vw] max-w-[1440px] mx-auto flex flex-col border-x border-brand-footer-border lg:flex-row lg:items-stretch lg:justify-between"
      >
        <!-- Logo / address / emails -->
        <div
          class="flex flex-col gap-8 py-10 px-6 w-full lg:w-[300px] lg:border-r lg:border-brand-footer-border"
        >
          <a href="/" class="inline-block">
            <img
              src="/footer-logo.svg"
              :alt="site.name"
              class="w-[150px] h-auto"
            />
          </a>
          <p class="text-[.88rem] leading-relaxed text-black">
            {{ site.address }}
          </p>
          <div class="flex flex-col gap-2 text-[.88rem]">
            <a
              :href="`mailto:${site.email}`"
              class="font-medium text-black transition-colors hover:text-brand-raspberry"
              >{{ site.email }}</a
            >
            <a
              :href="`mailto:${site.careersEmail}`"
              class="font-medium text-black transition-colors hover:text-brand-raspberry"
              >{{ site.careersEmail }}</a
            >
          </div>
        </div>

        <!-- Company + Follow group: stacked below lg, side-by-side on lg -->
        <div class="flex flex-col w-full lg:w-auto lg:flex-row">
          <!-- Company -->
          <div
            class="flex flex-row gap-8 py-10 px-6 w-full border-t border-brand-footer-border lg:w-[230px] lg:flex-col lg:gap-5 lg:border-t-0 lg:border-l"
          >
            <h3
              class="w-[130px] shrink-0 text-xl font-medium text-slate-900 md:w-1/2 lg:w-auto"
            >
              Company
            </h3>
            <ul class="flex flex-col md:w-1/2 lg:w-auto">
              <li v-for="item of site.menu" :key="item.path">
                <NuxtLink
                  :to="item.path"
                  class="block py-1 text-[.9rem] text-black transition-colors hover:text-brand-raspberry"
                  >{{ item.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Follow -->
          <div
            class="flex flex-row gap-8 py-10 px-6 w-full border-t border-brand-footer-border lg:w-[200px] lg:flex-col lg:gap-5 lg:border-t-0 lg:border-l"
          >
            <h3
              class="w-[130px] shrink-0 text-xl font-medium text-slate-900 md:w-1/2 lg:w-auto"
            >
              Follow
            </h3>
            <ul class="flex flex-col md:w-1/2 lg:w-auto">
              <li>
                <a
                  :href="site.linkedin"
                  target="_blank"
                  rel="noopener"
                  class="block py-1 text-[.9rem] text-black transition-colors hover:text-brand-raspberry"
                  >LinkedIn</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar: centered + stacked below lg, split on lg -->
    <div
      class="w-[90vw] max-w-[1440px] mx-auto flex flex-col items-center gap-4 py-6 px-6 text-center lg:flex-row lg:justify-between lg:text-left"
    >
      <p class="text-[14px] text-black">
        Copyright © {{ new Date().getFullYear() }} {{ site.name }}. All rights
        reserved.
      </p>
      <div
        class="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[.88rem] text-black"
      >
        <template v-for="(item, i) of site.legal" :key="item.title">
          <span v-if="i > 0" class="text-slate-300">–</span>
          <a
            :href="item.path"
            class="transition-colors hover:text-brand-raspberry"
            >{{ item.title }}</a
          >
        </template>
      </div>
    </div>
  </footer>
</template>
