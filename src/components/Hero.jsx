import { ArrowRight } from 'lucide-react'
import { hero } from '../content'
import { bookingLink, bookingProps } from './mail'

// Decorative "heatmap" motif: deterministic so it renders identically on every load.
const cells = Array.from({ length: 12 * 8 }, (_, i) => {
  const x = i % 12
  const y = Math.floor(i / 12)
  return Math.abs(Math.sin(x * 1.7 + y * 2.3) * Math.cos(x * 0.6 - y * 1.1))
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 12 8"
        className="absolute -right-24 top-1/2 hidden w-[36rem] -translate-y-1/2 2xl:block"
      >
        {cells.map((v, i) => (
          <rect
            key={i}
            x={(i % 12) + 0.06}
            y={Math.floor(i / 12) + 0.06}
            width="0.88"
            height="0.88"
            rx="0.12"
            fill="#5eead4"
            opacity={0.05 + v * 0.4}
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-glow">{hero.eyebrow}</p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-white/75 text-pretty sm:text-xl">{hero.text}</p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={bookingLink}
            {...bookingProps}
            className="inline-flex items-center gap-2 rounded-md bg-glow px-6 py-3 font-semibold text-ink transition hover:bg-white"
          >
            Book a free 30-minute call <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="#services" className="font-medium text-white/80 underline-offset-4 hover:text-white hover:underline">
            See services
          </a>
        </div>
      </div>
    </section>
  )
}
