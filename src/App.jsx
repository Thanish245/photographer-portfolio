import { lazy, Suspense } from 'react'
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

  return (
    <Suspense fallback={<PageLoader />}>
      <Page />
    </Suspense>
  )
}

export default App
