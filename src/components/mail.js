import { site } from '../content'

const body = `Hi,

I would like to book a free 30-minute call about my project.

Project / topic:
Data available:
What I need:
Timeline:

Best regards,`

const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent('Consultation request')}&body=${encodeURIComponent(body)}`

export const bookingLink = site.bookingUrl || mailtoLink

// External booking pages open in a new tab; mailto links should not.
export const bookingProps = site.bookingUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {}
