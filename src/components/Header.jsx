import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../content'
import { bookingLink, bookingProps } from './mail'

const links = [
  { name: 'Services', href: '#services' },
  { name: 'How it works', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-semibold tracking-tight">
          Biodatum<span className="text-glow">.io</span>
          <span className="sr-only"> {site.name} home</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/75 transition hover:text-white">
              {l.name}
            </a>
          ))}
          <a href={bookingLink} {...bookingProps} className="rounded-md bg-glow px-4 py-2 font-semibold text-ink transition hover:bg-white">
            Book a call
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 py-3 md:hidden" aria-label="Mobile">
          {[...links, { name: 'Book a call', href: bookingLink }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-white/90">
              {l.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
