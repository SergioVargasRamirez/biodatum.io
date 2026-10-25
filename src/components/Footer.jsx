import { site } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <nav className="flex gap-6" aria-label="Legal">
          <a href="#/impressum" className="hover:text-white">Impressum</a>
          <a href="#/datenschutz" className="hover:text-white">Datenschutz</a>
        </nav>
      </div>
    </footer>
  )
}
