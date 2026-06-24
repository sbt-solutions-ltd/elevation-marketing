<script setup lang="ts">
const { site } = useAppConfig();
const menuitems = site.menu;

const open = ref(false);
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
</script>

<template>
  <header class="fixed w-full top-8 md:top-8 inset-x-0 z-50 px-6">
    <div class="max-w-full flex flex-col">
      <div
        class="relative overflow-hidden bg-brand-header-outer rounded-pill px-3 md:px-7 py-3 flex flex-row items-center justify-between gap-6 shadow-lg shadow-black/10 lg:min-w-[60vw] lg:mx-auto"
      >
        <!-- Blurred dark backing — mirrors the original's
             div_block-62-15 (absolute) > div_block-60-15 (#000000a3 + blur 20px) -->
        <div
          class="absolute inset-0 overflow-hidden rounded-pill pointer-events-none"
          aria-hidden="true"
        >
          <div
            class="w-full h-full rounded-pill bg-brand-header-inner blur-[20px]"
          ></div>
        </div>

        <NuxtLink to="/" class="relative z-10 shrink-0">
          <img
            src="/logo.svg"
            alt="Elevation Marketing"
            width="160"
            height="32"
            class="max-w-[166px] h-10 md:h-8 w-auto"
          />
        </NuxtLink>

        <nav class="relative z-10 hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="item of menuitems"
            :key="item.path"
            :to="item.path"
            class="px-3 py-2 text-sm text-white hover:text-brand-raspberry transition"
            >{{ item.title }}</NuxtLink
          >
        </nav>

        <div class="relative z-10 hidden lg:block shrink-0">
          <LandingLink href="/contact" styleName="inverted" size="md"
            >Contact Us</LandingLink
          >
        </div>

        <!-- Mobile burger: white pill with three black bars (matches elevationmarketing.com) -->
        <button
          @click="open = !open"
          class="relative z-10 lg:hidden flex flex-col items-center justify-center gap-1 bg-white rounded-full px-5 py-[0.875rem]"
          aria-label="Toggle menu"
          :aria-expanded="open"
          aria-controls="mobile-menu"
        >
          <span
            class="block w-[25px] h-[3px] bg-black rounded-full transition-all duration-300"
            :class="open ? 'translate-y-[7px] rotate-45' : ''"
          ></span>
          <span
            class="block w-[25px] h-[3px] bg-black rounded-full transition-all duration-300"
            :class="open ? 'opacity-0' : ''"
          ></span>
          <span
            class="block w-[25px] h-[3px] bg-black rounded-full transition-all duration-300"
            :class="open ? '-translate-y-[7px] -rotate-45' : ''"
          ></span>
        </button>
      </div>

      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        leave-active-class="transition duration-100 ease-in"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="open"
          id="mobile-menu"
          class="lg:hidden mt-3 bg-black/80 backdrop-blur-xl rounded-3xl p-5"
        >
          <ul class="flex flex-col gap-1">
            <li v-for="item of menuitems" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="block px-3 py-2 text-white/85 hover:text-white"
                >{{ item.title }}</NuxtLink
              >
            </li>
          </ul>
          <div class="mt-4">
            <LandingLink href="/contact" styleName="inverted" size="md" block
              >Contact Us</LandingLink
            >
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
