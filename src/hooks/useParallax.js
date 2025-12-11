import { useEffect, useState } from 'react'

export default function useParallax(ref, speed = 0.25, { disableOnTouch = true } = {}) {
  const [y, setY] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    if (disableOnTouch && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return

    let rafId = null
    const onScroll = () => {
      const rect = ref.current.getBoundingClientRect()
      // move background a fraction of the element's top offset
      const offset = -rect.top * speed
      // small clamp to avoid huge values if needed:
      const clamped = Math.max(Math.min(offset, 200), -200)
      setY(clamped)
    }
    const handler = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(onScroll)
    }

    handler() // init
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler, { passive: true })
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [ref, speed, disableOnTouch])

  return { transform: `translateY(${y}px)` }
}