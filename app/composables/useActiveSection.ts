import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeId = ref<string | null>(null)

  let observer: IntersectionObserver | undefined

  const cleanup = () => {
    observer?.disconnect()
    observer = undefined
  }

  onMounted(() => {
    if (typeof window === 'undefined') return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        const top = visible[0]
        if (top?.target instanceof HTMLElement) {
          activeId.value = top.target.id
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75]
      }
    )

    for (const el of elements) observer.observe(el)
  })

  onBeforeUnmount(cleanup)

  return activeId
}
