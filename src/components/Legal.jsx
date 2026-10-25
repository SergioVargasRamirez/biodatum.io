import { controller, site } from '../content'

function Page({ title, children }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <a href="#" className="text-sm text-accent hover:underline">&larr; Back to home</a>
      <h1 className="mt-6 font-display text-4xl font-semibold">{title}</h1>
      <div className="mt-8 space-y-4 text-muted">{children}</div>
    </article>
  )
}

function Row({ label, children }) {
  return (
    <div>
      <dt className="inline">{label}: </dt>
      <dd className="inline text-ink">{children}</dd>
    </div>
  )
}

export function Impressum() {
  return (
    <Page title="Legal notice (Impressum)">
      <p className="text-sm">Information according to §5 of the German Digital Services Act (DDG, formerly §5 TMG)</p>
      <dl className="space-y-1">
        <Row label="Name">{controller.name}</Row>
        <Row label="Address">{controller.street}, {controller.cityLine}</Row>
        <Row label="Email">
          <a className="text-accent hover:underline" href={`mailto:${controller.email}`}>{controller.email}</a>
        </Row>
        <Row label="Phone">{site.phone}</Row>
        <Row label="VAT identification number (§ 27a UStG)">{controller.vatId}</Row>
        <Row label="Business identification number (Wirtschafts-ID)">{controller.wirtschaftsId}</Row>
      </dl>
      <h2 className="pt-4 text-xl font-semibold text-ink">Responsible for content</h2>
      <p>Responsible for content per §18(2) of the German Interstate Media Treaty (MStV): the person named above.</p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Liability for content</h2>
      <p>
        As a service provider, we are responsible for our own content on these pages under general law, per §7(1) DDG. Under §§8–10 DDG,
        however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances indicating
        unlawful activity. Obligations to remove or block the use of information under general law remain unaffected; liability in this
        respect is only possible from the point in time at which we become aware of a specific infringement. Upon becoming aware of any
        such infringement, we will remove the relevant content immediately.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Liability for links</h2>
      <p>
        Our site may contain links to external third-party websites over whose content we have no influence. We therefore cannot assume any
        liability for this external content; the respective provider or operator of the linked page is always responsible for it. Upon
        becoming aware of any legal violations, we will remove such links immediately.
      </p>
      <h2 className="pt-4 text-xl font-semibold text-ink">Copyright</h2>
      <p>
        Content and works created by the operator of this site are subject to German copyright law. Reproduction, editing, distribution, or
        any use outside the limits of copyright law requires the prior written consent of the respective author or creator.
      </p>
    </Page>
  )
}

// DRAFT: needs review by a qualified person before going live.
export function Privacy() {
  return (
    <Page title="Datenschutzerklärung / Privacy policy">
      <p>
        <strong className="text-ink">Controller:</strong> {controller.name}, {controller.street}, {controller.cityLine},{' '}
        <a className="text-accent hover:underline" href={`mailto:${controller.email}`}>{controller.email}</a>.
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
