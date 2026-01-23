<template>
  <a
    :href="row.link"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative border-t border-white/20 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start transition-all duration-700 ease-out hover:bg-white/2"
    @mouseenter="$emit('hover', row.company)"
    @mouseleave="$emit('hover', null)"
  >
    <div class="md:col-span-2 pt-2">
      <span class="font-mono text-[10px] text-neutral-500 tracking-widest uppercase block mb-1">
        {{ content.ui.period }}
      </span>
      <span class="font-mono text-xs text-white">
        {{ row.period }}
      </span>
    </div>

    <div class="md:col-span-7 flex flex-col relative">
      <h3 class="text-6xl md:text-8xl font-serif font-bold text-white leading-none">
        {{ row.company }}
      </h3>

      <div class="mt-6 grid gap-4 md:grid-cols-[1fr_3fr]">
        <div>
          <span class="font-mono text-[10px] text-neutral-500 tracking-widest uppercase block mb-1">
            {{ content.ui.role }}
          </span>
          <span class="font-mono text-xs text-white">
            {{ row.role }}
          </span>
        </div>

        <div v-if="(row.achievements?.length ?? 0) > 0" class="text-neutral-500 font-light">
          <ul class="space-y-3">
            <li v-for="(a, idx) in row.achievements" :key="idx" class="text-sm leading-relaxed">
              {{ a }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 flex flex-wrap gap-2">
        <span
          v-for="t in row.tech"
          :key="t"
          class="font-mono text-[9px] border border-white/10 px-4 py-2 rounded bg-black/50 text-neutral-500 uppercase tracking-[0.2em] font-bold text-white/50 group-hover:border-white/20 transition-colors"
        >
          {{ t }}
        </span>
      </div>
    </div>

    <div class="md:col-span-3 md:justify-self-end pt-2">
      <span class="font-mono text-[10px] text-neutral-500 tracking-widest uppercase block mb-1">Location</span>
      <span class="font-mono text-xs text-white">{{ row.location ?? '—' }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { ExperienceRow } from '~/data/content'
import { content } from '~/data/content'

defineProps<{ row: ExperienceRow }>()

defineEmits<{
  (e: 'hover', value: string | null): void
}>()
</script>
