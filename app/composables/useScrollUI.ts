import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useScrollUI() {
  const isScrolled = ref(false)
  const isVisible = ref(true)

  let lastY = 0

  const onScroll = () => {
    const y = window.scrollY || 0
    isScrolled.value = y > 10

    const goingUp = y < lastY
    const nearTop = y < 80
    isVisible.value = nearTop || goingUp

    lastY = y
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    lastY = window.scrollY || 0
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    if (typeof window === 'undefined') return
    window.removeEventListener('scroll', onScroll)
  })

  return { isScrolled, isVisible }
}
