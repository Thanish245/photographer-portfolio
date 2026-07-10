import { lazy, Suspense, useEffect } from 'react'
import PageLoader from './components/layout/PageLoader'
import usePathname from './hooks/usePathname'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const routeMap = {
  '/': HomePage,
  '/about': AboutPage,
  '/services': ServicesPage,
  '/portfolio': PortfolioPage,
  '/contact': ContactPage,
}

function App() {
  const pathname = usePathname()
  const Page = routeMap[pathname] || NotFoundPage

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <Suspense fallback={<PageLoader />}>
      <div key={pathname} className="animate-[fade-in_0.25s_ease-out] motion-reduce:animate-none">
        <Page />
      </div>
    </Suspense>
  )
}

export default App
