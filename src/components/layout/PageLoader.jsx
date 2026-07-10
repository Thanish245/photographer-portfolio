import Container from '../ui/Container'

function PageLoader() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-screen items-center justify-center">
      <Container className="py-16">
        <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-sky-300 motion-reduce:animate-none" />
          <span className="text-sm text-slate-400">Loading page…</span>
        </div>
      </Container>
    </div>
  )
}

export default PageLoader
