import { Mail } from 'lucide-react'
import { site } from '../content'
import CopyEmail from './CopyEmail'
import { bookingLink, bookingProps } from './mail'

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Tell me about your project.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
          A free 30-minute call is the quickest way to find out whether I can help.
        </p>
        <a
          href={bookingLink}
          {...bookingProps}
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-glow px-6 py-3 font-semibold text-ink transition hover:bg-white"
        >
          <Mail size={18} aria-hidden="true" /> Book a free call
        </a>
        <p className="mt-6 text-sm text-white/60">
          or write to <a className="underline underline-offset-4 hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>{' · '}<CopyEmail />
        </p>
      </div>
    </section>
  )
}
