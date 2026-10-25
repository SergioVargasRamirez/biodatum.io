import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { About, Audiences, Services, Process, Pricing, Work, FAQ } from './components/Sections'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Impressum, Privacy } from './components/Legal'

// Legal pages use hash routes (#/impressum) so the site stays a single static file on GitHub Pages.
const legalPages = { '#/impressum': Impressum, '#/datenschutz': Privacy }

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash)
      if (window.location.hash.startsWith('#/')) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const Legal = legalPages[hash]

  return (
    <>
      <Header />
      <main>
        {Legal ? (
          <Legal />
        ) : (
          <>
            <Hero />
            <Audiences />
            <About />
            <Services />
            <Process />
            <Pricing />
            <Work />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
