import { useEffect } from 'react'

// Hook returns null but must be called from a component (we call it in App)
export default function useScrollReveal() {
  useEffect(() => {
    const selectors = [
      'section',
      '.service-card',
      '.why-card',
      '.foundation-card',
      '.achievement-card',
      '.process-card',
      '.newsletter-section',
      '.history-content',
      '.certification-card',
      '.services-grid > *'
    ]

    const elements = new Set()
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => elements.add(el))
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )

    elements.forEach((el) => {
      // avoid re-animating elements already visible
      if (!el.classList.contains('reveal--visible')) {
        el.classList.add('reveal')
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
