import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import usePathname from './hooks/usePathname'

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

  return <Page />
}

export default App
