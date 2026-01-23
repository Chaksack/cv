<template>
  <component :is="as" ref="root" :class="['reveal-mask', inView && 'is-active', className]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useInView } from '~/composables/useInView'

type Props = {
  as?: string
  class?: string
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  once: true
})

const root = ref<HTMLElement | null>(null)
const inView = useInView(root, { once: props.once, threshold: 0.25, rootMargin: '0px 0px -5% 0px' })

const className = computed(() => props.class)
</script>
