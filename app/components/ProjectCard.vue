<template>
  <a
    class="group relative overflow-visible h-full flex items-center justify-center px-6 md:px-24"
    :href="project.link || '#'"
    :target="project.link ? '_blank' : undefined"
    :rel="project.link ? 'noopener noreferrer' : undefined"
    @mouseenter="$emit('hover', project.title)"
    @mouseleave="$emit('hover', null)"
  >
    <div class="relative border-l border-white/10 pl-8 md:pl-20 py-8 md:py-12 flex flex-col h-full justify-center">
      <div
        class="absolute -left-10 md:-left-16 top-10 font-serif italic text-7xl md:text-[10vw] text-white/5 font-bold leading-none pointer-events-none select-none transition-colors duration-500 group-hover:text-white/10"
      >
        {{ project.id }}
      </div>

      <div class="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
        <span class="font-mono text-[9px] md:text-[10px] text-neutral-500 tracking-[0.6em] uppercase font-bold">
          {{ project.category }}
        </span>
        <div class="h-px w-8 md:w-16 bg-neutral-800" />
        <span class="font-mono text-[9px] md:text-[10px] text-neutral-600 italic tracking-[0.2em] uppercase">
          {{ project.year }}
        </span>
      </div>

      <h3 class="text-7xl md:text-[6vw] font-serif font-bold italic tracking-tighter leading-[0.9] text-white">
        {{ project.title }}
      </h3>

      <p class="text-neutral-500 font-light font-serif italic text-xl mt-8 leading-relaxed max-w-lg">
        {{ project.description }}
      </p>

      <div class="mt-12 flex flex-wrap gap-2">
        <span
          v-for="t in project.tech"
          :key="t"
          class="font-mono text-[9px] border border-white/10 px-4 py-2 rounded bg-black/50 text-neutral-500 uppercase tracking-[0.2em] font-bold text-white/50"
        >
          {{ t }}
        </span>
      </div>

      <div v-if="project.link" class="mt-12">
        <span class="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-400">
          Open ↗
        </span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { ProjectCard as Project } from '~/data/content'

defineProps<{ project: Project }>()

defineEmits<{
  (e: 'hover', value: string | null): void
}>()
</script>
