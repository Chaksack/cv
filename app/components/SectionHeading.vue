<template>
  <div class="flex items-end justify-between gap-6">
    <ClipReveal as="div">
      <p v-if="kicker" class="text-xs tracking-[0.5em] text-muted uppercase">
        {{ kicker }}
      </p>
      <h2 class="mt-3 text-2xl font-medium tracking-tightest md:text-3xl">
        <slot />
      </h2>
    </ClipReveal>
    <p v-if="aside" class="hidden max-w-xs text-right text-sm text-muted md:block">
      {{ aside }}
    </p>
  </div>
</template>

<script setup lang="ts">
import ClipReveal from '~/components/ClipReveal.vue'

type Props = {
  kicker?: string
  aside?: string
}

defineProps<Props>()
</script>
