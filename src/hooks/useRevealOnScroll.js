import { useEffect, useRef } from 'react'

export function useRevealOnScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
