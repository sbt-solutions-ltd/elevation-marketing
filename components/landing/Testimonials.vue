<script setup lang="ts">
interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Having strategy, creative, and development under one roof removed the friction we used to have across agencies. Launches that took months now take weeks.",
    name: "Head of Marketing",
    company: "Fintech Platform",
  },
  {
    quote:
      "Elevation Marketing modernized our infrastructure without disrupting operations. The team understood both the technology and the business behind it.",
    name: "Chief Operations Officer",
    company: "SaaS Company",
  },
  {
    quote:
      "Their lifecycle and retention work changed how we think about our customers. Engagement and repeat revenue are both up.",
    name: "Business Owner",
    company: "Digital Services Company",
  },
  {
    quote:
      "Reliable delivery, clear governance, and genuine partnership. They feel like an extension of our own team.",
    name: "Operations Lead",
    company: "Gaming Company",
  },
];
</script>

<template>
  <section class="mt-20 md:mt-28">
    <div class="max-w-3xl">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        What partners say
      </h2>
      <p class="text-lg mt-4 text-slate-600">
        Results from teams who chose integration over fragmentation.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-8 mt-12">
      <figure
        v-for="item of testimonials"
        :key="item.name"
        class="border border-gray-100 rounded-2xl p-6"
      >
        <Icon name="bxs:quote-alt-left" class="w-7 h-7 text-gray-300" />
        <blockquote class="text-slate-700 mt-3 leading-relaxed">
          {{ item.quote }}
        </blockquote>
        <figcaption class="mt-4">
          <p class="font-semibold text-slate-900">{{ item.name }}</p>
          <p class="text-sm text-slate-500">{{ item.company }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
