import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'
import { useReducedMotion } from './useReducedMotion'

export type InViewOptions = {
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

export function useInView<T extends Element>(
  target: Ref<T | null>,
  options: InViewOptions = {}
) {
  const inView = ref(false)
  const reducedMotion = useReducedMotion()

  let observer: IntersectionObserver | undefined

  const cleanup = () => {
    observer?.disconnect()
    observer = undefined
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    if (!target.value) return

    if (reducedMotion.value) {
      inView.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        const isIntersecting = entry.isIntersecting
        if (isIntersecting) {
          inView.value = true
          if (options.once !== false) cleanup()
        } else if (options.once === false) {
          inView.value = false
        }
      },
      {
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
        threshold: options.threshold ?? 0.15
      }
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(cleanup)

  return inView
}
