<template>
  <component
    :is="as"
    ref="root"
    :class="[
      'will-change-transform will-change-opacity transition-[opacity,transform]',
      inView ? 'opacity-100' : 'opacity-0',
      className
    ]"
    :style="{
      transform: inView ? 'translateY(0px)' : `translateY(${distance}px)`,
      transitionTimingFunction: 'var(--ease-out-expo)',
      transitionDelay: `${delay}ms`,
      transitionDuration: `${duration}ms`
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useInView } from '~/composables/useInView'

type Props = {
  as?: string
  delay?: number
  duration?: number
  distance?: number
  class?: string
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  delay: 0,
  duration: 650,
  distance: 18,
  once: true
})

const root = ref<HTMLElement | null>(null)
const inView = useInView(root, { once: props.once })

const className = computed(() => props.class)
</script>
