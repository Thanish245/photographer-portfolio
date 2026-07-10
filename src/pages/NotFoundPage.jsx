import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import SiteHeader from '../components/layout/SiteHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { primaryNavigation } from '../data/navigation'

function NotFoundPage() {
  useDocumentTitle('Page not found | Frame & Light')

  return (
    <>
      <SiteHeader links={primaryNavigation} />
      <Container className="flex min-h-[calc(100vh-5rem)] items-center py-16">
        <Card variant="elevated" className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">404</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            The page you are looking for does not exist.
          </h1>
          <p className="text-base leading-7 text-slate-300">
            The content may have moved, or the URL may be incorrect. Use the navigation above to continue exploring the studio.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="a" href="/" size="lg">
              Back to home
            </Button>
            <Button as="a" href="/portfolio" variant="secondary" size="lg">
              View portfolio
            </Button>
          </div>
        </Card>
      </Container>
    </>
  )
}

export default NotFoundPage
