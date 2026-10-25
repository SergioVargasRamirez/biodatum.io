import { Check, ExternalLink } from 'lucide-react'
import { about, audiences, services, process, faq, rates, work } from '../content'
import { bookingLink } from './mail'

function Section({ id, eyebrow, title, intro, tone = 'light', children }) {
  return (
    <section id={id} className={tone === 'tint' ? 'bg-white' : ''}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

export function Audiences() {
  return (
    <Section id="who" eyebrow="Who I work with" title="Have the data, need extra help?">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a) => (
          <div key={a.name} className="border-t-2 border-accent pt-5">
            <h3 className="text-lg font-semibold">{a.name}</h3>
            <p className="mt-2 text-muted">{a.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function About() {
  return (
    <Section id="about" tone="tint" eyebrow="About me" title={about.name}>
      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-4 text-lg text-muted md:col-span-2">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="self-start rounded-xl border border-line bg-paper p-7">
          {about.photo && <img src={about.photo} alt={about.name} className="mb-6 aspect-square w-full rounded-lg object-cover" />}
          <p className="font-semibold">{about.title}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {about.facts.map((f) => (
              <li key={f} className="flex gap-2">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I can take off your plate.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => (
          <article key={s.name} className={`${services.length % 3 === 0 || i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'} rounded-xl border border-line bg-paper p-7`}>
            <h3 className="text-lg font-semibold">{s.name}</h3>
            <p className="mt-2 text-muted">{s.text}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Process() {
  return (
    <Section id="process" tone="tint" eyebrow="How it works" title="Simple, transparent, no surprises.">
      <ol className="grid gap-8 md:grid-cols-3">
        {process.map((p, i) => (
          <li key={p.title}>
            <span className="font-display text-5xl font-bold text-accent/40">{i + 1}</span>
            <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-muted">{p.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Clear rates, flexible formats."
      intro="Prices are net of VAT. Fixed-price offers are available for well-defined projects."
    >
      <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
        {[
          { label: 'Hourly', price: rates.hourly, unit: 'per hour', note: 'Ideal for short tasks and open-ended support.' },
          { label: 'Daily', price: rates.daily, unit: 'per day', note: 'Best for focused project work and on-site days.', extra: `Academic labs and start-ups: €${rates.dailyReduced} per day.` },
        ].map((r) => (
          <div key={r.label} className="rounded-xl border border-line bg-paper p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">{r.label}</p>
            <p className="mt-4 font-display text-5xl font-semibold">
              €{r.price}
              <span className="ml-2 font-sans text-base font-normal text-muted">{r.unit}</span>
            </p>
            <p className="mt-4 text-muted">{r.note}</p>
            {r.extra && <p className="mt-3 text-sm font-medium text-accent">{r.extra}</p>}
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Work() {
  if (work.length === 0) return null
  return (
    <Section id="work" eyebrow="Selected work" title="Research and collaborations.">
      <ul className="divide-y divide-line border-y border-line">
        {work.map((w) => (
          <li key={w.title} className="flex items-start justify-between gap-6 py-5">
            <div>
              <p className="font-medium">{w.title}</p>
              <p className="mt-1 text-sm text-muted">
                {w.venue}, {w.year}
                {w.note && ` · ${w.note}`}
              </p>
            </div>
            {w.href && (
              <a href={w.href} className="shrink-0 text-accent hover:text-accent-strong" aria-label={`Open ${w.title}`}>
                <ExternalLink size={18} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function FAQ() {
  return (
    <Section id="faq" tone="tint" eyebrow="FAQ" title="Common questions.">
      <div className="max-w-3xl divide-y divide-line border-y border-line">
        {faq.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="cursor-pointer list-none font-medium marker:hidden">
              <span className="mr-3 text-accent transition group-open:rotate-45 inline-block">+</span>
              {f.q}
            </summary>
            <p className="mt-3 pl-6 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="sr-only">
        <a href={bookingLink}>Book a call</a>
      </p>
    </Section>
  )
}
