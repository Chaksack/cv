<template>
  <nav
    class="fixed top-0 w-full z-50 transition-all duration-700 px-6 md:px-16 flex justify-between items-center h-24"
    :class="[
      isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent border-transparent',
      isVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div class="interactive group cursor-pointer" @click="scrollTo('hero')">
      <span class="font-serif text-2xl font-bold italic tracking-tighter text-white">
        {{ content.app.logo }}
      </span>
    </div>

    <div class="hidden md:flex gap-12">
      <button
        v-for="item in content.navigation"
        :key="item.id"
        type="button"
        class="font-mono text-[9px] tracking-[0.5em] uppercase text-neutral-500 hover:text-white transition-colors duration-500 relative group"
        @click="scrollTo(item.id)"
      >
        {{ item.label }}
        <span
          class="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500"
        />
      </button>
    </div>

    <button
      type="button"
      class="interactive font-mono text-[9px] border border-white/10 px-8 py-2.5 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500 tracking-[0.2em] uppercase font-bold text-white bg-transparent"
      @click="scrollTo('contact')"
    >
      {{ content.navContact }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useScrollUI } from '~/composables/useScrollUI'
import { content } from '~/data/content'

const route = useRoute()
const router = useRouter()

const { isScrolled, isVisible } = useScrollUI()

const scrollTo = (id: string) => {
  if (route.path !== '/') {
    void router.push({ path: '/', hash: `#${id}` })
    return
  }

  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>
