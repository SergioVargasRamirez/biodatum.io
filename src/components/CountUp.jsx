import { useEffect, useRef, useState } from 'react'

const format = (n) => n.toLocaleString('en-US')

// Counts from 0 to `value` once the element scrolls into view. Honours prefers-reduced-motion.
export default function CountUp({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const el = ref.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || reduced || !('IntersectionObserver' in window)) {
      setShown(value)
      return
    }

    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          setShown(Math.round(value * (1 - Math.pow(1 - t, 3)))) // ease-out
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span ref={ref}>
      <span aria-hidden="true">{format(shown)}{suffix}</span>
      <span className="sr-only">{format(value)}{suffix}</span>
    </span>
  )
}
