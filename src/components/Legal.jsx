import { site } from '../content'

function Page({ title, children }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <a href="#" className="text-sm text-accent hover:underline">&larr; Back to home</a>
      <h1 className="mt-6 font-display text-4xl font-semibold">{title}</h1>
      <div className="mt-8 space-y-4 text-muted">{children}</div>
    </article>
  )
}

export function Impressum() {
  return (
    <Page title="Impressum">
      <p><strong className="text-ink">Biodatum.io</strong><br />Nadistraße 06<br />80809 München, Germany</p>
      <p><strong className="text-ink">Managing Director:</strong> Dr. rer. nat. habil. Sergio Vargas Ramirez</p>
      <p>
        <strong className="text-ink">Phone:</strong> {site.phone}<br />
        <strong className="text-ink">Email:</strong> <a className="text-accent hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      {/* TODO: add VAT ID (USt-IdNr.) / Steuernummer and legal form if required */}
    </Page>
  )
}

// DRAFT: needs review by a qualified person before going live.
export function Privacy() {
  return (
    <Page title="Datenschutzerklärung / Privacy policy">
      <p>
        <strong className="text-ink">Controller:</strong> Biodatum.io, Dr. Sergio Vargas Ramirez, Nadistraße 06, 80809 München,{' '}
        <a className="text-accent hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Hosting</h2>
      <p>
        This website is hosted on GitHub Pages (GitHub Inc., USA). When you visit the site, GitHub processes technical data such as your
        IP address in server logs. We have no access to this data. See GitHub’s privacy statement for details.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Cookies and tracking</h2>
      <p>This site sets no cookies and uses no analytics or third-party fonts or scripts.</p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Contact</h2>
      <p>
        If you email us, we process your message and address to answer your request (Art. 6(1)(b) and (f) GDPR) and delete it once the
        matter is closed, unless legal retention duties apply.
      </p>
      {site.bookingUrl && (
        <>
          <h2 className="pt-4 text-xl font-semibold text-ink">Appointment booking</h2>
          <p>
            If you book a call, you are directed to a Google Calendar booking page (Google Ireland Ltd. / Google LLC). Google processes the
            data you enter there (name, email, message) and your usage data under its own privacy policy. We use your details only to hold
            the appointment. You can avoid this by contacting us by email instead.
          </p>
        </>
      )}
      <h2 className="pt-4 text-xl font-semibold text-ink">Your rights</h2>
      <p>
        You have the right to access, rectification, erasure, restriction, portability and objection, and to complain to a supervisory
        authority (in Bavaria: BayLDA).
      </p>
    </Page>
  )
}
