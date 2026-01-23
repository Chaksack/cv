<template>
  <main class="relative min-h-screen bg-black text-white px-6 md:px-16">
    <div class="w-full max-w-5xl mx-auto pt-32 md:pt-40 pb-28 md:pb-40">
      <NuxtLink
        :to="{ path: '/', hash: '#blog' }"
        class="interactive inline-flex items-center gap-3 font-mono text-[9px] tracking-[0.5em] uppercase text-neutral-500 hover:text-white transition-colors"
      >
        <span aria-hidden="true">←</span>
        Back
      </NuxtLink>

      <div class="mt-14">
        <div class="flex items-center gap-4 md:gap-6 mb-10">
          <span class="font-mono text-[9px] md:text-[10px] text-neutral-500 tracking-[0.6em] uppercase font-bold">
            {{ post.category }}
          </span>
          <div class="h-px w-10 md:w-16 bg-neutral-800" />
          <span class="font-mono text-[9px] md:text-[10px] text-neutral-600 italic tracking-[0.2em] uppercase">
            {{ post.date }}
          </span>
        </div>

        <h1 class="text-[12vw] md:text-[6vw] font-serif font-bold italic tracking-tighter leading-[0.9] text-white reveal-mask is-active">
          {{ post.title }}
        </h1>

        <p class="text-neutral-500 font-light font-serif italic text-xl mt-10 leading-relaxed max-w-3xl">
          {{ post.excerpt }}
        </p>

        <div v-if="post.tags?.length" class="mt-12 flex flex-wrap gap-2">
          <span
            v-for="t in post.tags"
            :key="t"
            class="font-mono text-[9px] border border-white/10 px-4 py-2 rounded bg-black/50 uppercase tracking-[0.2em] font-bold text-white/50"
          >
            {{ t }}
          </span>
        </div>

        <article class="mt-20 max-w-3xl space-y-10">
          <p
            v-for="(p, idx) in post.body"
            :key="idx"
            class="text-neutral-400 font-light font-serif italic text-xl leading-relaxed"
          >
            {{ p }}
          </p>
        </article>

        <div class="mt-24 border-t border-white/10 pt-14">
          <NuxtLink
            :to="{ path: '/', hash: '#blog' }"
            class="interactive inline-flex items-center justify-center border border-white/10 px-10 py-3 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500 font-mono text-[9px] tracking-[0.3em] uppercase font-bold"
          >
            More posts
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { blogPosts } from '~/data/content'
import type { BlogPost } from '~/data/content'

const route = useRoute()

const slug = computed(() => String(route.params.slug || ''))
const post = computed<BlogPost>(() => {
  const found = blogPosts.find((p) => p.slug === slug.value)
  if (!found) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
  }
  return found
})

useHead({
  title: `${post.value.title} — ${post.value.category}`
})
</script>
