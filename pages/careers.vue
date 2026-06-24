<script setup lang="ts">
interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface Faq {
  q: string;
  a: string;
}

definePageMeta({
  layout: "landing",
});

useHead({
  title: "Careers — Elevation Marketing",
  meta: [
    {
      name: "description",
      content:
        "Work that shapes your future. Join a cross-functional team built on respect, trust, curiosity, innovation, and leadership.",
    },
  ],
});

const values: ValueItem[] = [
  {
    title: "Respect",
    description:
      "We treat people with attention, courtesy, and kindness — every interaction, every day.",
    icon: "bx:bxs-hand",
  },
  {
    title: "Trust",
    description:
      "We give each other the autonomy and transparency to do great work and own the outcome.",
    icon: "bx:bxs-shield",
  },
  {
    title: "Learning & Curiosity",
    description:
      "We stay curious, ask questions, and keep growing our skills and perspectives.",
    icon: "bx:bxs-book-open",
  },
  {
    title: "Innovation",
    description:
      "We challenge the status quo and look for smarter, simpler ways to solve problems.",
    icon: "bx:bxs-bulb",
  },
  {
    title: "Leadership",
    description:
      "We take initiative, support our teammates, and lead by example at every level.",
    icon: "bx:bxs-star",
  },
];

const benefits: string[] = [
  "Premium health insurance (dental + optical)",
  "25 days paid annual leave",
  "Multisport card",
  "Monthly transportation allowance",
  "Life insurance fully covered",
  "Paid team-building events",
  "Free coffee, snacks & meals",
  "Learning & development programs",
];

const process: ProcessStep[] = [
  {
    step: "01",
    title: "HR Interview",
    desc: "A first conversation to get to know you and your goals.",
  },
  {
    step: "02",
    title: "Task",
    desc: "A practical task to see how you approach real problems.",
  },
  {
    step: "03",
    title: "Second Interview",
    desc: "Meet the team and dive deeper into the role.",
  },
  {
    step: "04",
    title: "Offer",
    desc: "We align on terms and welcome you on board.",
  },
];

const stats = {
  title: "Cultural Impact",
  subtitle: "How our team feels about working at Elevation Marketing.",
  items: [
    { value: "90%", label: "Would recommend Elevation Marketing" },
    { value: "99.5%", label: "Developed new skills" },
    { value: "8", label: "Years of growth" },
    { value: "170+", label: "Team members" },
  ],
};

const faqs: Faq[] = [
  {
    q: "Where are you located?",
    a: "Our office is at the Collider activity center, 111V Tsarigradsko Shosse Blvd., floor 3, Sofia 1784, Bulgaria.",
  },
  {
    q: "How do I apply?",
    a: "Apply directly through our open positions, or send your CV to careers@elevationmarketing.com.",
  },
  {
    q: "What if there's no open vacancy for my profile?",
    a: "We're always interested in great people. Send us your CV and we'll reach out when a fitting role opens.",
  },
  {
    q: "Will I get feedback after applying?",
    a: "Yes. Our HR team follows up with every candidate throughout the process.",
  },
  {
    q: "Do you offer part-time or internship roles?",
    a: "Yes — explore Elevation Marketing Academy for internships, and check open positions for part-time opportunities.",
  },
  {
    q: "How long does the process take?",
    a: "It typically runs over a couple of weeks, depending on the role and scheduling.",
  },
  {
    q: "Can I apply for more than one position?",
    a: "Absolutely. Apply to every role that matches your skills and interests.",
  },
  {
    q: "How is my data handled?",
    a: "Your application data is processed confidentially and in line with our privacy policy.",
  },
];
</script>

<template>
  <LandingContainer>
    <section class="max-w-4xl mx-auto text-center pt-2 md:pt-6">
      <h1 class="text-4xl lg:text-6xl font-bold lg:tracking-tight">
        Work That Shapes Your Future
      </h1>
      <p class="text-lg md:text-xl mt-6 text-slate-600 max-w-2xl mx-auto">
        Join a cross-functional team where strategy, technology, and creativity
        meet — and where your growth is part of the plan.
      </p>
      <div class="mt-8 flex justify-center">
        <LandingLink href="#open-positions">View open positions</LandingLink>
      </div>
    </section>

    <section class="mt-20 md:mt-28 max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Inside Elevation Marketing
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
        A Culture You Can Grow In
      </h2>
      <p class="text-lg mt-4 text-slate-600 leading-relaxed">
        We work across functions, not in silos. Our Value Ambassadors champion
        an inclusive environment, and regular team events keep us connected — so
        you're supported by people who genuinely have your back.
      </p>
    </section>

    <section class="mt-16">
      <h2 class="text-2xl lg:text-3xl font-bold">Our Values</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div
          v-for="item of values"
          :key="item.title"
          class="flex gap-4 items-start"
        >
          <div
            class="mt-1 bg-ink rounded-full p-2 w-9 h-9 shrink-0 flex items-center justify-center"
          >
            <Icon class="text-white w-5 h-5" :name="item.icon" />
          </div>
          <div>
            <h3 class="font-semibold text-lg">{{ item.title }}</h3>
            <p class="text-slate-500 mt-1 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Benefits
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
        Support That Powers Your Progress
      </h2>
      <div class="grid sm:grid-cols-2 gap-4 mt-8">
        <div
          v-for="item of benefits"
          :key="item"
          class="flex items-start gap-3 border border-gray-100 rounded-2xl p-4"
        >
          <LandingTick className="w-6 h-6 text-ink shrink-0" />
          <span class="text-slate-700">{{ item }}</span>
        </div>
      </div>
    </section>

    <section id="open-positions" class="mt-20">
      <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Open Positions
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight mt-3">
        Find Where You Fit
      </h2>
      <div
        class="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-100 rounded-2xl p-6"
      >
        <div>
          <h3 class="font-semibold text-lg">
            Creative Team Lead (Marketing Communication Lead)
          </h3>
          <p class="text-slate-500 mt-1">Sofia, Bulgaria · Full-time</p>
        </div>
        <LandingLink href="/contact" size="md">Apply now</LandingLink>
      </div>
    </section>

    <section class="mt-20">
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight">
        Our Selection Process
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div v-for="item of process" :key="item.step">
          <span class="text-4xl font-bold text-gray-200">{{ item.step }}</span>
          <h3 class="font-semibold text-lg mt-2">{{ item.title }}</h3>
          <p class="text-slate-500 mt-1 leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <LandingStats :content="stats" />

    <section class="mt-20">
      <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight">
        Questions & Answers
      </h2>
      <div class="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
        <div v-for="item of faqs" :key="item.q">
          <h3 class="font-semibold text-lg">{{ item.q }}</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">{{ item.a }}</p>
        </div>
      </div>
    </section>

    <LandingCta
      title="Ready to build your future with us?"
      desc="Explore open roles or send us your CV — we'd love to meet you."
      buttonText="Get in touch"
      buttonLink="/contact"
    />
  </LandingContainer>
</template>
