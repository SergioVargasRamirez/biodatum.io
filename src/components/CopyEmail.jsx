import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { site } from '../content'

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked: the address is visible next to the button, so nothing else to do.
    }
  }

  return (
    <button onClick={copy} className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-white">
      {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
    </button>
  )
}
