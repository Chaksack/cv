<template>
  <a
    class="group relative overflow-visible block"
    :href="row.link"
    target="_blank"
    rel="noopener noreferrer"
    @mouseenter="$emit('hover', row.company)"
    @mouseleave="$emit('hover', null)"
  >
    <div class="relative border-l border-white/10 pl-8 md:pl-20 py-12 md:py-16">
      <div
        class="absolute -left-10 md:-left-16 top-10 font-serif italic text-7xl md:text-[10vw] text-white/5 font-bold leading-none pointer-events-none select-none transition-colors duration-500 group-hover:text-white/10"
      >
        {{ index }}
      </div>

      <div class="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-10">
        <span class="font-mono text-[9px] md:text-[10px] text-neutral-500 tracking-[0.6em] uppercase font-bold">
          {{ row.role }}
        </span>
        <div class="h-px w-8 md:w-16 bg-neutral-800" />
        <span class="font-mono text-[9px] md:text-[10px] text-neutral-600 italic tracking-[0.2em] uppercase">
          {{ row.period }}
        </span>
      </div>

      <h3 class="text-7xl md:text-[6vw] font-serif font-bold italic tracking-tighter leading-[0.9] text-white">
        {{ row.company }}
      </h3>

      <p
        v-if="primaryLine"
        class="text-neutral-500 font-light font-serif italic text-xl mt-8 leading-relaxed max-w-2xl"
      >
        {{ primaryLine }}
      </p>

      <div v-if="(row.achievements?.length ?? 0) > 1" class="mt-8 max-w-2xl">
        <ul class="space-y-3 text-neutral-500 font-light">
          <li
            v-for="(a, i) in row.achievements?.slice(1, 4)"
            :key="i"
            class="text-sm leading-relaxed"
          >
            {{ a }}
          </li>
        </ul>
      </div>

      <div class="mt-12 flex flex-wrap gap-2">
        <span
          v-for="t in row.tech"
          :key="t"
          class="font-mono text-[9px] border border-white/10 px-4 py-2 rounded bg-black/50 text-neutral-500 uppercase tracking-[0.2em] font-bold text-white/50"
        >
          {{ t }}
        </span>
      </div>

      <div v-if="row.location" class="mt-12">
        <span class="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-400">
          {{ row.location }}
        </span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ExperienceRow } from '~/data/content'

const props = defineProps<{
  row: ExperienceRow
  index: string
}>()

defineEmits<{
  (e: 'hover', value: string | null): void
}>()

const primaryLine = computed(() => {
  const achievements = props.row.achievements ?? []
  return achievements[0] ?? props.row.location ?? ''
})
</script>
