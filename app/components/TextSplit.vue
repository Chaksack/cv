<template>
  <span ref="root" class="inline-flex flex-wrap">
    <span
      v-for="(part, idx) in parts"
      :key="idx"
      class="inline-block will-change-transform will-change-opacity"
      :class="inView ? 'opacity-100' : 'opacity-0'"
      :style="{
        transform: inView ? 'translateY(0px)' : 'translateY(18px)',
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'var(--ease-out-expo)',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay + idx * stagger}ms`
      }"
    >
      {{ part }}<span v-if="mode === 'words'">&nbsp;</span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useInView } from '~/composables/useInView'

type Props = {
  text: string
  mode?: 'words' | 'chars'
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'words',
  delay: 0,
  duration: 900,
  stagger: 30,
  once: true
})

const root = ref<HTMLElement | null>(null)
const inView = useInView(root, { once: props.once, threshold: 0.35 })

const parts = computed(() => {
  if (props.mode === 'chars') return props.text.split('')
  return props.text.split(' ')
})
</script>
