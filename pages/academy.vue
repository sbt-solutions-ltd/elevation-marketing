<script setup lang="ts">
interface Team {
  title: string;
  icon: string;
}

definePageMeta({
  layout: "landing",
});

useHead({
  title: "Elevation Marketing Academy — Elevation Marketing",
  meta: [
    {
      name: "description",
      content:
        "Step forward with Elevation Marketing Academy. Learn. Build. Contribute. Grow. A paid summer internship with real projects, mentorship, and a path to a full-time role.",
    },
  ],
});

const benefits: string[] = [
  "Real Projects",
  "Professional Mentorship",
  "Skill Development",
  "Flexible Hours",
  "Paid Internship",
  "Online Learning Access",
  "Transportation Allowance",
  "Food Vouchers",
  "Potential Full-Time Offer",
];

const teams: Team[] = [
  { title: "Finance", icon: "bx:bxs-bank" },
  { title: "Customer Support", icon: "bx:bxs-headphone" },
  { title: "Business Development", icon: "bx:bxs-briefcase" },
  { title: "Digital Marketing", icon: "bx:bxs-megaphone" },
  { title: "Human Resources", icon: "bx:bxs-group" },
  { title: "Product Design", icon: "bx:bxs-palette" },
  { title: "Software Engineering", icon: "bx:bxs-data" },
];

const results = {
  title: "Our results",
  subtitle: "Turning potential into performance.",
  items: [
    { value: "186+", label: "Applicants" },
    { value: "90%", label: "Hires After Internship" },
    { value: "11+", label: "Open Positions" },
    { value: "3", label: "Years of Internship Cycles" },
  ],
};
</script>

<template>
  <LandingContainer>
    <section class="max-w-4xl mx-auto text-center pt-2 md:pt-6">
      <h1 class="text-4xl lg:text-6xl font-bold lg:tracking-tight">
        Step Forward with Elevation Marketing Academy
      </h1>
      <p class="text-lg md:text-xl mt-6 text-slate-600">
        Learn. Build. Contribute. Grow.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <LandingLink href="/contact">Apply now</LandingLink>
        <LandingLink href="/about" styleName="outline"
          >More about us</LandingLink
        >
      </div>
    </section>

    <section class="mt-20 md:mt-28 max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">
        About Elevation Marketing Academy
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
        Step Forward into Action
      </h2>
      <p class="text-lg mt-4 text-slate-600 leading-relaxed">
        Our summer internship gives you hands-on experience across strategy,
        software, and operations. You'll work on real projects alongside
        experienced mentors — and for many interns, it's the first step toward a
        full-time role at Elevation Marketing.
      </p>
    </section>

    <section class="mt-20">
      <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Our Benefits
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
        Not Just Another Internship
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-2xl">
        Structured learning, real mentorship, and the perks to support you along
        the way.
      </p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div
          v-for="item of benefits"
          :key="item"
          class="flex items-center gap-3 border border-gray-100 rounded-2xl p-4"
        >
          <LandingTick className="w-6 h-6 text-ink shrink-0" />
          <span class="text-slate-700">{{ item }}</span>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Where you can fit
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
        Teams searching for interns
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div
          v-for="item of teams"
          :key="item.title"
          class="flex items-center gap-4 border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition"
        >
          <div
            class="bg-ink rounded-full p-2 w-10 h-10 flex items-center justify-center shrink-0"
          >
            <Icon class="text-white w-5 h-5" :name="item.icon" />
          </div>
          <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        </div>
      </div>
    </section>

    <LandingStats :content="results" />

    <LandingCta
      title="Ready to take the first step?"
      desc="Apply to Elevation Marketing Academy and start building your future today."
      buttonText="Apply now"
      buttonLink="/contact"
    />
  </LandingContainer>
</template>
