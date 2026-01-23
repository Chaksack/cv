<template>
  <div id="app" class="bg-black text-white">
    <NuxtRouteAnnouncer />

    <CursorFx />
    <NoiseOverlay />

    <div
      class="fixed inset-0 pointer-events-none z-40 flex items-center justify-center transition-all duration-1000 ease-out"
      :class="hoverTitle ? 'opacity-100 scale-100' : 'opacity-0 scale-110'"
    >
      <h3
        class="text-[15vw] md:text-[20vw] font-serif font-bold italic text-white/3 uppercase tracking-tighter leading-none select-none blur-sm text-center px-12"
      >
        {{ hoverTitle }}
      </h3>
    </div>

    <SiteNav />

    <section
      id="hero"
      class="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden"
      @mousemove="onHeroMove"
    >
      <div class="relative z-10 w-full max-w-450 mx-auto [perspective:1000px]">
        <div class="flex justify-end items-end mb-4 md:mb-8">
          <span class="hero-meta font-mono text-[9px] tracking-[0.3em] uppercase text-right text-white">
            {{ content.hero.role }}
          </span>
        </div>

        <div class="relative flex flex-col" :style="heroTiltStyle">
          <div class="overflow-hidden pb-4 md:pb-8 relative z-10 mix-blend-difference">
            <h1
              class="hero-reveal text-[15vw] leading-[0.8] font-serif font-light italic tracking-[-0.03em] reveal-mask"
            >
              {{ content.hero.firstName }}
            </h1>
          </div>

          <div class="overflow-hidden pb-4 md:pb-8 relative z-10 mix-blend-difference">
            <h1
              class="hero-reveal text-[15vw] leading-[0.8] font-serif font-light italic tracking-[-0.03em] reveal-mask"
            >
              {{ content.hero.lastName }}
            </h1>
          </div>

          <p class="hero-desc mt-8 text-neutral-500 font-light font-serif italic text-xl leading-relaxed">
            {{ content.hero.description }}
          </p>

          <div class="mt-12 flex items-center gap-6">
            <button
              type="button"
              class="interactive font-mono text-[9px] tracking-[0.5em] uppercase text-neutral-500 hover:text-white transition-colors"
              @click="scrollTo('about')"
            >
              About
            </button>
            <button
              type="button"
              class="interactive font-mono text-[9px] tracking-[0.5em] uppercase text-neutral-500 hover:text-white transition-colors"
              @click="scrollTo('projects')"
            >
              Projects
            </button>
          </div>
        </div>
      </div>

      <div class="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <span class="font-mono text-[9px] tracking-[0.5em] uppercase text-neutral-500">
          {{ content.hero.scrollIndicator }}
        </span>
        <div class="flex items-end gap-2 h-18">
          <span class="w-0.5 bg-white/20 rounded-full animate-[bar-anim_0.8s_ease-in-out_infinite]" style="height:20%" />
          <span class="w-0.5 bg-white/20 rounded-full animate-[bar-anim_1s_ease-in-out_infinite]" style="height:20%" />
          <span class="w-0.5 bg-white/20 rounded-full animate-[bar-anim_1.1s_ease-in-out_infinite]" style="height:20%" />
          <span class="w-0.5 bg-white/20 rounded-full animate-[bar-anim_1.2s_ease-in-out_infinite]" style="height:20%" />
        </div>
      </div>
    </section>

    <section id="about" class="relative bg-black px-6 md:px-16">
      <div class="w-full max-w-3xl mx-auto py-40 md:py-60">
        <SectionHeading :kicker="content.about.headingNumber" :aside="undefined">
          {{ content.about.headingTitle }}
        </SectionHeading>

        <div class="mt-12 space-y-12">
          <p
            v-for="(p, idx) in content.about.intro"
            :key="idx"
            class="text-neutral-500 font-light font-serif italic text-xl leading-relaxed"
          >
            {{ p.start }}<span class="text-white">{{ p.highlight1 }}</span>{{ p.middle }}<span class="text-white">{{ p.highlight2 }}</span>{{ p.end }}
          </p>
        </div>
      </div>
    </section>

    <div id="experience" ref="expRoot" class="relative bg-black h-screen w-full overflow-hidden experience-bg">
      <div ref="expTrack" class="flex px-16 md:px-40 h-full items-center will-change-transform gap-20 relative z-10">
        <div class="w-[80vw] md:w-[40vw] shrink-0 flex items-center relative h-full">
          <div class="max-w-md z-30 relative">
            <SectionHeading :kicker="content.experience.headingNumber" :aside="undefined">
              {{ content.experience.headingTitle }}
            </SectionHeading>
            <p class="text-neutral-500 font-light font-serif italic text-xl mt-8 leading-relaxed">
              {{ content.experience.intro }}
            </p>
            <div class="mt-12 w-24 h-px bg-white/20" />
            <div class="mt-12 flex items-center justify-between">
              <span class="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">{{ content.experience.startLabel }}</span>
              <span class="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">{{ content.experience.endLabel }}</span>
            </div>
          </div>
        </div>

        <div
          v-for="(row, idx) in experienceMain"
          :key="row.company"
          class="w-[90vw] md:w-[70vw] h-full shrink-0"
        >
          <div class="h-full flex items-center">
            <ExperienceCard :row="row" :index="formatIndex(idx)" @hover="setHover" />
          </div>
        </div>
      </div>
    </div>

    <div id="advisory" ref="advisoryRoot" class="relative bg-black h-screen w-full overflow-hidden">
      <div ref="advisoryTrack" class="flex px-16 md:px-40 h-full items-center will-change-transform gap-20 relative z-10">
        <div class="w-[80vw] md:w-[40vw] shrink-0 flex items-center relative h-full">
          <div class="max-w-md z-30 relative">
            <SectionHeading :kicker="content.advisory.headingNumber" :aside="undefined">
              {{ content.advisory.headingTitle }}
            </SectionHeading>
            <p class="text-neutral-500 font-light font-serif italic text-xl mt-8 leading-relaxed">
              {{ content.advisory.intro }}
            </p>
            <div class="mt-12 w-24 h-px bg-white/20" />
            <div class="mt-12 flex items-center justify-between">
              <span class="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">{{ content.advisory.startLabel }}</span>
              <span class="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">{{ content.advisory.endLabel }}</span>
            </div>
          </div>
        </div>

        <div
          v-for="(row, idx) in experienceAdvisory"
          :key="row.company"
          class="w-[90vw] md:w-[70vw] h-full shrink-0"
        >
          <div class="h-full flex items-center">
            <ExperienceCard :row="row" :index="formatIndex(idx)" @hover="setHover" />
          </div>
        </div>
      </div>
    </div>

    <div id="projects" ref="projectsRoot" class="relative bg-black h-screen w-full overflow-hidden">
      <div ref="projectsTrack" class="flex px-16 md:px-40 h-full items-center will-change-transform gap-20">
        <div class="w-[80vw] md:w-[40vw] shrink-0 flex items-center relative h-full">
          <div class="max-w-md z-30 relative">
            <SectionHeading :kicker="content.projects.headingNumber" :aside="undefined">
              {{ content.projects.headingTitle }}
            </SectionHeading>
            <p class="text-neutral-500 font-light font-serif italic text-xl mt-8 leading-relaxed">
              {{ content.projects.intro }}
            </p>
            <div class="mt-12 w-24 h-px bg-white/20" />

            <div class="mt-12 flex items-center justify-between">
              <span class="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">{{ content.projects.startLabel }}</span>
              <span class="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">{{ content.projects.endLabel }}</span>
            </div>
          </div>
        </div>

        <div v-for="p in projects" :key="p.id" class="w-[90vw] md:w-[70vw] h-full shrink-0">
          <ProjectCard :project="p" @hover="setHover" />
        </div>
      </div>
    </div>

    <footer id="contact" class="relative h-screen flex flex-col justify-center bg-white text-black overflow-hidden px-8 md:px-16">
      <div class="w-full max-w-400 mx-auto relative z-10">
        <span class="font-mono text-[10px] tracking-[1em] uppercase mb-16 block text-neutral-400 font-bold">
          {{ content.footer.availability }}
        </span>

        <a :href="`mailto:${content.app.email}`" class="interactive block group">
          <h2 class="text-[12vw] md:text-[10vw] font-serif font-bold tracking-tighter italic leading-[0.8] group-hover:line-through transition-all duration-1000">
            {{ content.footer.header }}
          </h2>
          <p class="text-4xl md:text-8xl font-serif font-bold italic mt-8 text-neutral-400 group-hover:text-black transition-colors">
            {{ content.app.email }}
          </p>
        </a>

        <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-16 mt-32 border-t border-black/10 pt-16">
          <div class="flex flex-wrap items-center gap-10 md:gap-16 font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
            <!-- <a class="interactive hover:text-black transition-colors" href="https://x.com/ooade" target="_blank" rel="noopener noreferrer">X</a> -->
            <a class="interactive hover:text-black transition-colors" href="https://github.com/chaksack" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a class="interactive hover:text-black transition-colors" href="https://linkedin.com/in/chaksack" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <!-- <a class="interactive hover:text-black transition-colors" href="https://ooade.substack.com" target="_blank" rel="noopener noreferrer">Substack</a> -->

            <a
              class="interactive inline-flex items-center justify-center border border-black/10 px-6 py-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-500"
              :href="content.footer.cv.href"
              download
            >
              {{ content.footer.cv.label }}
            </a>
          </div>

          <div class="text-neutral-500 font-mono text-[10px] tracking-[0.3em] uppercase text-center md:text-right">
            © {{ content.footer.copyrightYear }} {{ content.footer.copyrightName }} — {{ content.footer.copyrightRole }}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { content, experienceAdvisory, experienceMain, projects } from '~/data/content'

import CursorFx from '~/components/CursorFx.vue'
import NoiseOverlay from '~/components/NoiseOverlay.vue'
import SiteNav from '~/components/SiteNav.vue'
import ExperienceCard from '~/components/ExperienceCard.vue'
import ProjectCard from '~/components/ProjectCard.vue'

const { $gsap, $ScrollTrigger } = useNuxtApp()

const hoverTitle = ref<string | null>(null)
const setHover = (value: string | null) => {
  hoverTitle.value = value
}

const formatIndex = (n: number) => String(n + 1).padStart(2, '0')

const expRoot = ref<HTMLDivElement | null>(null)
const expTrack = ref<HTMLDivElement | null>(null)

const advisoryRoot = ref<HTMLDivElement | null>(null)
const advisoryTrack = ref<HTMLDivElement | null>(null)

const projectsRoot = ref<HTMLDivElement | null>(null)
const projectsTrack = ref<HTMLDivElement | null>(null)

const heroTiltX = ref(0)
const heroTiltY = ref(0)
const heroTiltStyle = computed(() => {
  return {
    transform: `rotateX(${heroTiltX.value}deg) rotateY(${heroTiltY.value}deg)`
  }
})

const onHeroMove = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement | null
  if (!el) return
  const rect = el.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  heroTiltX.value = (0.5 - py) * 6
  heroTiltY.value = (px - 0.5) * 8
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

let activeObserver: IntersectionObserver | undefined
let cleanupPinned: Array<() => void> = []

onMounted(() => {
  if (typeof window === 'undefined') return

  // GSAP hero entrance (match expo.out feel)
  const tl = $gsap.timeline()
  tl.fromTo(
    '.hero-reveal',
    { y: 140, opacity: 0 },
    { y: 0, opacity: 1, duration: 2.4, ease: 'expo.out', stagger: 0.08 },
    0
  ).fromTo(
    '.hero-meta',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.2, stagger: 0.05, ease: 'expo.out' },
    '-=1.8'
  )

  // Active-section observer for reveal-mask
  activeObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-section')
        }
      }
    },
    { threshold: 0.1 }
  )

  document
    .querySelectorAll('section, footer, .reveal-trigger')
    .forEach((el) => activeObserver?.observe(el))

  const setupPinnedHorizontal = (root: HTMLElement, track: HTMLElement, id: string) => {
    const setup = () => {
      $ScrollTrigger.getById(id)?.kill(true)
      $gsap.killTweensOf(track)

      const getScrollLength = () => Math.max(0, track.scrollWidth - window.innerWidth)
      const scrollLength = getScrollLength()

      // If there is nothing to scroll horizontally, don't pin.
      if (scrollLength <= 1) {
        $gsap.set(track, { x: 0 })
        return
      }

      $gsap.to(track, {
        x: () => -getScrollLength(),
        ease: 'none',
        scrollTrigger: {
          id,
          trigger: root,
          start: 'top top',
          end: () => `+=${getScrollLength()}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
          preventOverlaps: true
        }
      })
    }

    setup()
    window.addEventListener('resize', setup)

    cleanupPinned.push(() => {
      window.removeEventListener('resize', setup)
      $ScrollTrigger.getById(id)?.kill(true)
    })
  }

  // Pinned horizontal sections (setup in DOM order, then refresh so pin spacing is correct)
  void nextTick(() => {
    const experienceRoot = expRoot.value
    const experienceTrack = expTrack.value
    if (experienceRoot && experienceTrack) {
      setupPinnedHorizontal(experienceRoot, experienceTrack, 'experience-scroll')
    }

    const advisoryRootEl = advisoryRoot.value
    const advisoryTrackEl = advisoryTrack.value
    if (advisoryRootEl && advisoryTrackEl) {
      setupPinnedHorizontal(advisoryRootEl, advisoryTrackEl, 'advisory-scroll')
    }

    const projectsRootEl = projectsRoot.value
    const projectsTrackEl = projectsTrack.value
    if (projectsRootEl && projectsTrackEl) {
      setupPinnedHorizontal(projectsRootEl, projectsTrackEl, 'projects-scroll')
    }

    $ScrollTrigger.refresh()
  })
})

onBeforeUnmount(() => {
  activeObserver?.disconnect()
  cleanupPinned.forEach((fn) => fn())
  cleanupPinned = []
})

useHead({
  htmlAttrs: { class: 'scroll-smooth' },
  bodyAttrs: { class: 'antialiased selection:bg-white selection:text-black' }
})
</script>
