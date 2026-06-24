<script setup lang="ts">
import type { IntroContent } from "~/composables/useSiteData";

defineProps<{ intro: IntroContent }>();

const { carousel: slides } = useSiteData();

// Public asset paths from useSiteData need the baseURL prefix for GitHub Pages.
const asset = useAsset();

const INTERVAL = 6000;
const current = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

function start(): void {
  timer = setInterval(() => go(current.value + 1), INTERVAL);
}

function stop(): void {
  if (timer) clearInterval(timer);
}

function go(i: number): void {
  current.value = (i + slides.length) % slides.length;
  stop();
  start();
}

const next = (): void => go(current.value + 1);
const prev = (): void => go(current.value - 1);

onMounted(start);
onBeforeUnmount(stop);
</script>

<template>
  <section class="mt-20 md:mt-28">
    <LandingIntro :content="intro" />
    <div
      class="mt-12 flex flex-col lg:flex-row gap-3 h-[550px] lg:h-[485px] xl:h-[550px]"
    >
      <div
        v-for="(s, i) in slides"
        :key="i"
        @click="go(i)"
        class="group relative overflow-hidden rounded-3xl cursor-pointer basis-0 min-h-0 min-w-0 transition-[flex-grow] duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        :class="{ 'hidden lg:block': i !== current }"
        :style="{ flexGrow: i === current ? 8 : 1 }"
      >
        <img
          :src="asset(s.img)"
          :alt="s.label"
          width="944"
          height="700"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out"
          :class="i === current ? 'scale-100' : 'scale-[1.08]'"
          loading="lazy"
        />

        <!-- Overlays crossfade between strip (solid) and active (gradient) -->
        <div
          class="absolute inset-0 bg-black/60 transition-opacity duration-700 ease-out"
          :class="
            i === current ? 'opacity-0' : 'opacity-100 group-hover:opacity-70'
          "
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10 transition-opacity duration-700 ease-out"
          :class="i === current ? 'opacity-100' : 'opacity-0'"
        />

        <!-- Collapsed strip: vertical label (fades out as it expands) -->
        <div
          class="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out"
          :class="i === current ? 'opacity-0 delay-0' : 'opacity-100 delay-200'"
        >
          <span
            class="text-white font-medium tracking-wide whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"
          >
            {{ s.label }}
          </span>
        </div>

        <!-- Active panel content: fades and rises in as the panel opens -->
        <div
          class="absolute inset-0 p-7 lg:p-10 flex flex-col text-white transition-all duration-700 ease-out"
          :class="
            i === current
              ? 'opacity-100 translate-y-0 delay-150'
              : 'opacity-0 translate-y-4 pointer-events-none'
          "
        >
          <div class="flex justify-end">
            <span
              class="flex items-center gap-2 text-sm font-medium whitespace-nowrap"
            >
              {{ s.label }}
              <span class="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </div>

          <div class="mt-auto max-w-xl">
            <h3
              class="text-3xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight"
            >
              {{ s.title }}
            </h3>
            <p class="mt-4 max-w-md text-white/85 leading-relaxed">
              {{ s.desc }}
            </p>

            <div class="flex items-center gap-5 mt-8">
              <div
                class="h-1 w-32 lg:w-56 bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  v-if="i === current"
                  :key="current"
                  class="progress-fill h-full bg-white"
                />
              </div>
              <div class="flex gap-3">
                <button
                  @click.stop="prev"
                  aria-label="Previous"
                  class="w-12 h-12 rounded-full border border-white/70 flex items-center justify-center hover:bg-white hover:text-ink transition"
                >
                  <Icon name="uil:arrow-left" class="w-5 h-5" />
                </button>
                <button
                  @click.stop="next"
                  aria-label="Next"
                  class="w-12 h-12 rounded-full border border-white/70 flex items-center justify-center hover:bg-white hover:text-ink transition"
                >
                  <Icon name="uil:arrow-right" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes progressGrow {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.progress-fill {
  animation: progressGrow 6s linear forwards;
}
</style>
