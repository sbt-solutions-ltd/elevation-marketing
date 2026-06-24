<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { solutions, services } = useSiteData();

useHead({
  title: "Services — Elevation Marketing",
  meta: [
    {
      name: "description",
      content:
        "Everything you need, working as one — marketing, retention, creative, acquisition, software, project management, compliance, and finance.",
    },
  ],
});

const pills: string[] = [
  "Strategic marketing",
  "Seamless retention",
  "Impactful creative",
  "Targeted acquisition",
  "Scalable software",
  "Structured delivery",
  "Trusted compliance",
  "Efficient finance",
];

</script>

<template>
  <LandingContainer>
    <section class="max-w-4xl mx-auto text-center pt-2 md:pt-6">
      <h1 class="text-4xl lg:text-6xl font-bold lg:tracking-tight">
        Everything You Need, Working as One
      </h1>
      <div class="flex flex-wrap gap-2 justify-center mt-8">
        <span
          v-for="pill of pills"
          :key="pill"
          class="text-sm text-slate-600 border border-gray-200 rounded-full px-3 py-1"
          >{{ pill }}</span
        >
      </div>
    </section>

    <section class="max-w-3xl mt-20">
      <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">
        What we offer
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
        What's the value of true integration?
      </h2>
      <p class="text-lg mt-4 text-slate-600 leading-relaxed">
        When strategy, technology, and operations are aligned, execution becomes
        seamless. Our integrated service suite runs on a single, unified model —
        reducing friction and accelerating outcomes across every layer of your
        digital business.
      </p>
    </section>

    <section class="grid md:grid-cols-2 gap-8 mt-12">
      <div
        v-for="item of services"
        :key="item.number"
        class="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition"
      >
        <div class="flex items-baseline gap-3">
          <span class="text-3xl font-bold text-gray-200">{{
            item.number
          }}</span>
          <h3 class="font-semibold text-xl">{{ item.title }}</h3>
        </div>
        <p class="text-slate-500 mt-3 leading-relaxed">{{ item.offer }}</p>
        <p class="text-sm font-semibold text-slate-700 mt-5">In a nutshell</p>
        <ul class="mt-2 space-y-2">
          <li
            v-for="point of item.nutshell"
            :key="point"
            class="flex items-start gap-2 text-slate-600"
          >
            <LandingTick className="w-5 h-5 text-ink shrink-0 mt-0.5" />
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>
    </section>

    <LandingSolutions :content="solutions.services" />
    <LandingTestimonials />
    <LandingCta />
  </LandingContainer>
</template>
