<template>
  <div v-if="enabled" ref="cursorEl" class="custom-cursor" :class="{ active }" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const enabled = ref(false)
const active = ref(false)
const cursorEl = ref<HTMLDivElement | null>(null)

let rafId = 0
let mouseX = 0
let mouseY = 0
let cursorX = 0
let cursorY = 0

let cleanup: (() => void) | undefined

const isInteractive = (node: EventTarget | null) => {
  if (!(node instanceof Element)) return false
  return Boolean(node.closest('a, button, [role="button"], [data-cursor="active"]'))
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const finePointer = window.matchMedia('(pointer: fine)')
  if (!finePointer.matches) return

  enabled.value = true
  document.body.classList.add('cursor-none')

  const onMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  const onOver = (e: MouseEvent) => {
    active.value = isInteractive(e.target)
  }

  const onOut = (e: MouseEvent) => {
    if (!isInteractive(e.relatedTarget)) active.value = false
  }

  const tick = () => {
    const el = cursorEl.value
    if (el) {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      el.style.left = `${cursorX}px`
      el.style.top = `${cursorY}px`
    }
    rafId = window.requestAnimationFrame(tick)
  }

  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)
  rafId = window.requestAnimationFrame(tick)

  cleanup = () => {
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseover', onOver)
    document.removeEventListener('mouseout', onOut)
    window.cancelAnimationFrame(rafId)
    document.body.classList.remove('cursor-none')
  }
})

onBeforeUnmount(() => {
  cleanup?.()
})
</script>
