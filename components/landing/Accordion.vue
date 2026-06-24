<script setup lang="ts">
import type { ServiceItem } from "~/composables/useSiteData";

defineProps<{ items: ServiceItem[] }>();

// Single-open accordion; all items start collapsed (-1 = none open).
const openIndex = ref(-1);
const toggle = (i: number): void => {
  openIndex.value = openIndex.value === i ? -1 : i;
};
</script>

<template>
  <!--
    Services accordion (services page only). Full-bleed dark band of rows.
    Collapsed: a wide title with a chevron in a narrow cell on the right.
    Open: the row turns light, the title shrinks to ~1/3 and a
    "Description / What we offer / In a nutshell" panel fills the rest, growing
    in height (grid-template-rows 0fr -> 1fr) so the rows below slide down.
    Content comes from `services` in useSiteData.
  -->
  <section class="bg-ink text-left mt-20 md:mt-28">
    <div
      v-for="(item, i) in items"
      :key="item.number"
      class="border-t transition-colors duration-500"
      :class="
        openIndex === i
          ? 'bg-line text-ink border-ink/10'
          : 'text-white border-white/10'
      "
    >
      <div class="lg:flex lg:items-stretch">
        <!-- Title / toggle (fills the row collapsed, shrinks to 1/3 when open) -->
        <button
          type="button"
          @click="toggle(i)"
          :aria-expanded="openIndex === i"
          class="flex w-full items-center justify-between gap-6 px-6 py-8 text-left sm:px-10 lg:flex-1 lg:items-start lg:py-14 lg:pl-[5vw] lg:pr-10"
        >
          <span>
            <span
              class="block text-sm font-semibold transition-colors duration-500"
              :class="openIndex === i ? 'text-brand-raspberry' : 'text-white/50'"
              >{{ item.number }}</span
            >
            <span
              class="mt-3 block font-display font-bold leading-[1.1] text-2xl md:text-4xl lg:text-[2.5rem]"
              >{{ item.title }}</span
            >
          </span>
          <!-- Mobile indicator: rotates from › to ⌄ when open -->
          <Icon
            name="uil:angle-right"
            class="h-7 w-7 shrink-0 transition-transform duration-500 lg:hidden"
            :class="openIndex === i ? 'rotate-90 text-brand-raspberry' : ''"
          />
        </button>

        <!-- Right cell: chevron when closed, panel when open -->
        <div
          class="relative shrink-0 transition-colors duration-500 lg:border-l"
          :class="
            openIndex === i
              ? 'lg:w-2/3 lg:border-ink/10'
              : 'lg:w-[16%] lg:border-white/10'
          "
        >
          <!-- Closed chevron (clickable, fades out as the panel opens) -->
          <button
            type="button"
            @click="toggle(i)"
            aria-label="Expand"
            tabindex="-1"
            class="group absolute inset-0 hidden items-center justify-center transition-opacity duration-300 lg:flex"
            :class="
              openIndex === i ? 'pointer-events-none opacity-0' : 'opacity-100'
            "
          >
            <Icon
              name="uil:angle-right"
              class="h-9 w-9 text-white/40 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <!-- Panel: animates height via grid-template-rows -->
          <div
            class="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            :style="{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }"
          >
            <div class="min-h-0 overflow-hidden">
              <div
                class="px-6 pb-10 transition-all duration-500 sm:px-10 lg:px-12 lg:py-14"
                :class="
                  openIndex === i
                    ? 'translate-y-0 opacity-100 delay-200'
                    : 'translate-y-2 opacity-0'
                "
              >
                <div class="flex items-center gap-4 border-b border-ink/10 pb-4">
                  <button
                    type="button"
                    @click="toggle(i)"
                    aria-label="Close"
                    class="text-brand-raspberry transition-transform duration-300 hover:rotate-90"
                  >
                    <Icon name="uil:multiply" class="h-6 w-6" />
                  </button>
                  <span
                    class="text-sm font-semibold uppercase tracking-wide text-slate-500"
                    >Description</span
                  >
                </div>
                <div class="mt-6 grid gap-8 md:grid-cols-2 md:gap-10">
                  <div>
                    <h4 class="text-xl font-bold">What we offer</h4>
                    <p class="mt-4 leading-relaxed text-slate-600">
                      {{ item.offer }}
                    </p>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold">In a nutshell</h4>
                    <ul class="mt-4 space-y-2.5">
                      <li
                        v-for="point in item.nutshell"
                        :key="point"
                        class="flex gap-3 text-slate-600"
                      >
                        <span
                          class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-raspberry"
                        />
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Close the last row -->
    <div
      class="border-t"
      :class="
        openIndex === items.length - 1 ? 'border-ink/10' : 'border-white/10'
      "
    />
  </section>
</template>
