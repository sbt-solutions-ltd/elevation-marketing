<script setup lang="ts">
interface Person {
  name: string;
  title: string;
}

interface Principle {
  title: string;
  description: string;
  icon: string;
}

definePageMeta({
  layout: "landing",
});

useHead({
  title: "About Us — Elevation Marketing",
  meta: [
    {
      name: "description",
      content:
        "United by purpose, focused on results. From five people in 2018 to 170+ professionals delivering strategy, technology, and operations as one.",
    },
  ],
});

const leadership: Person[] = [
  { name: "Svetlin Georgiev", title: "CEO" },
  { name: "Radomira Gyurova", title: "Deputy CEO" },
  { name: "Lazar Petrov", title: "CMO" },
  { name: "Ivan Chomakov", title: "CTO" },
  { name: "Konstantin Kostov", title: "CPO" },
  { name: "Petyo Stoykov", title: "CLCO" },
  { name: "Victor Todorov", title: "CFO" },
  { name: "Elena Gocic", title: "Head of HR" },
  { name: "Asen Conev", title: "Head of PMO" },
];

const momentum = {
  title: "What We've Built So Far",
  subtitle: "The Elevation Marketing Momentum in numbers.",
  items: [
    { value: "547", label: "Projects Delivered" },
    { value: "219", label: "Active Partnerships" },
    { value: "8", label: "Years of Experience" },
    { value: "170+", label: "Team Members" },
  ],
};

const principles: Principle[] = [
  {
    title: "Mission",
    description:
      "We innovate in digital business to provide marketing strategies, services, and tools to scale e-business.",
    icon: "bx:bxs-flag",
  },
  {
    title: "Vision",
    description:
      "Building niche expertise to simplify future technologies for unique customer experiences.",
    icon: "bx:bxs-bulb",
  },
  {
    title: "Motto",
    description: "We create 2-click solutions — simple and straightforward.",
    icon: "bx:bxs-zap",
  },
];

const initials = (name: string): string =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");
</script>

<template>
  <LandingContainer>
    <section class="max-w-4xl mx-auto text-center pt-2 md:pt-6">
      <h1 class="text-4xl lg:text-6xl font-bold lg:tracking-tight">
        United by Purpose. Focused on Results.
      </h1>
      <p class="text-lg md:text-xl mt-6 text-slate-600 max-w-2xl mx-auto">
        Every result starts with the right minds working in sync.
      </p>
    </section>

    <section class="mt-20 md:mt-28 max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Our Team
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
        The Impact of Collaboration
      </h2>
      <p class="text-lg mt-4 text-slate-600 leading-relaxed">
        We began in 2018 with just five people. Today we're a team of over 140
        professionals working across strategy, technology, and operations.
        Cross-functional collaboration is at the heart of everything we build —
        it's what lets us move fast without losing alignment.
      </p>
    </section>

    <section class="mt-12">
      <h3 class="text-2xl font-bold">Leadership</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div
          v-for="person of leadership"
          :key="person.name"
          class="flex items-center gap-4 border border-gray-100 rounded-2xl p-5"
        >
          <div
            class="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center font-semibold shrink-0"
          >
            {{ initials(person.name) }}
          </div>
          <div>
            <p class="font-semibold text-slate-900">{{ person.name }}</p>
            <p class="text-sm text-slate-500">{{ person.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <LandingStats :content="momentum" />

    <section class="mt-20">
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight">
        Mission, Vision & Values
      </h2>
      <div class="grid md:grid-cols-3 gap-8 mt-8">
        <div
          v-for="item of principles"
          :key="item.title"
          class="border border-gray-100 rounded-2xl p-6"
        >
          <div
            class="bg-ink rounded-full p-2 w-10 h-10 flex items-center justify-center"
          >
            <Icon class="text-white w-5 h-5" :name="item.icon" />
          </div>
          <h3 class="font-semibold text-xl mt-4">{{ item.title }}</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>

    <LandingCta
      title="Want to work with us?"
      desc="Let's turn your vision into action."
      buttonText="Our services"
      buttonLink="/services"
    />
  </LandingContainer>
</template>
