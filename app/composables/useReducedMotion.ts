import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useReducedMotion() {
  const reduced = ref(false)

  let mq: MediaQueryList | undefined
  let onChange: ((event: MediaQueryListEvent) => void) | undefined

  onMounted(() => {
    if (typeof window === 'undefined') return

    mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduced.value = mq.matches

    onChange = (event: MediaQueryListEvent) => {
      reduced.value = event.matches
    }

    mq.addEventListener?.('change', onChange)
  })

  onBeforeUnmount(() => {
    if (!mq || !onChange) return
    mq.removeEventListener?.('change', onChange)
  })

  return reduced
}
