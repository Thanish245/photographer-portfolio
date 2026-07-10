import Button from '../../ui/Button'
import Container from '../../ui/Container'

function HomeNavigation({ links, cta }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
            FP
          </span>
          <span className="grid">
            <span className="text-sm font-semibold tracking-[0.22em] text-white uppercase">
              Frame & Light
            </span>
            <span className="text-xs text-slate-400">Photography portfolio</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            as="a"
            href={cta.secondary.href}
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {cta.secondary.label}
          </Button>
          <Button as="a" href={cta.primary.href} size="sm">
            {cta.primary.label}
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default HomeNavigation
