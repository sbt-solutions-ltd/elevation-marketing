<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted" | "muted";
  className?: string;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes = {
  lg: "px-7 py-3",
  md: "px-5 py-2.5 text-sm",
};

const styles = {
  outline:
    "bg-transparent border-2 border-ink hover:bg-ink hover:text-white text-ink",
  primary: "bg-brand-dark-blue rounded-pill text-white",
  inverted: "bg-white text-ink hover:bg-gray-100 border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200 text-ink border-2 border-transparent",
};
</script>

<template>
  <NuxtLink
    :to="href"
    :class="[
      'inline-block rounded-full font-bold text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-300',
      block && 'w-full',
      sizes[size],
      styles[styleName],
      className,
    ]"
    ><slot />
  </NuxtLink>
</template>
