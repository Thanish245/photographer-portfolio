import Container from '../../ui/Container'

function SiteFooter({ links }) {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">
          © 2026 Frame & Light. Crafted for editorial, wedding, and portrait work.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}

export default SiteFooter
