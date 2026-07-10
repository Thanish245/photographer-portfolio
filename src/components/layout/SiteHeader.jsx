import { useState } from 'react'
import Button from '../ui/Button'
import AppLink from '../ui/AppLink'
import Container from '../ui/Container'
import SkipLink from '../ui/SkipLink'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm'

function SiteHeader({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <SkipLink />
      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
        <Container className="flex h-20 items-center justify-between">
          <AppLink href="/" className={`flex items-center gap-3 ${focusRing}`}>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
              FP
            </span>
            <span className="grid">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                Frame & Light
              </span>
              <span className="text-xs text-slate-400">Photography portfolio</span>
            </span>
          </AppLink>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <AppLink
                key={link.label}
                href={link.href}
                className={`text-sm text-slate-300 transition-colors hover:text-white ${focusRing}`}
              >
                {link.label}
              </AppLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              as="a"
              href="/contact"
              variant="secondary"
              size="sm"
              className="hidden! sm:inline-flex!"
            >
              Book a session
            </Button>
            <Button as="a" href="/portfolio" size="sm" className="hidden! lg:inline-flex!">
              View work
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="lg:hidden!"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation-mobile"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </Button>
          </div>
        </Container>

        {isMenuOpen ? (
          <nav
            id="primary-navigation-mobile"
            aria-label="Primary"
            className="border-t border-white/8 bg-slate-950/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <AppLink
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white ${focusRing}`}
                >
                  {link.label}
                </AppLink>
              ))}
              <AppLink
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white ${focusRing}`}
              >
                Book a session
              </AppLink>
            </Container>
          </nav>
        ) : null}
      </header>
    </>
  )
}

export default SiteHeader
