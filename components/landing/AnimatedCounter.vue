<template>
  <span class="counter" ref="el">{{ display }}{{ suffix }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: number | string;
  duration?: number;
  suffix?: string;
}>();
const el = ref<HTMLElement | null>(null);
const display = ref(typeof props.value === "string" ? props.value : "0");

const animate = () => {
  if (typeof props.value !== "number") return;
  const duration = props.duration ?? 1800;
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    display.value = Math.floor(eased * (props.value as number)).toString();
    if (progress < 1) requestAnimationFrame(tick);
    else display.value = props.value.toString();
  };
  requestAnimationFrame(tick);
};

onMounted(() => {
  const target = el.value;
  if (!target) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 },
  );
  observer.observe(target);
});
</script>
