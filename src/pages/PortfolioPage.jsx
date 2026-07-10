import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/layout/PageHeader'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/sections/home/SiteFooter'
import PortfolioGallery from '../components/sections/portfolio/PortfolioGallery'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import useSeo from '../hooks/useSeo'
import { footerNavigation, primaryNavigation } from '../data/navigation'
import { portfolioFilters, portfolioItems } from '../data/portfolio'

function PortfolioPage() {
  useSeo({
    title: 'Portfolio | Frame & Light',
    description:
      'Selected work across brand campaigns, weddings, and portrait storytelling, with soft contrast and a clean editorial finish.',
    path: '/portfolio',
  })

  return (
    <>
      <SiteHeader links={primaryNavigation} />
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work across brands, weddings, and portrait storytelling."
        description="A curated collection of visual stories with soft contrast, elegant composition, and a clean editorial finish."
      />
      <AppShell>
        <PortfolioGallery items={portfolioItems} filters={portfolioFilters} />
        <Container className="py-4">
          <Reveal>
            <p className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-sm leading-7 text-slate-300">
              Hover previews are subtle, the grid adapts responsively, and the lightbox is fully keyboard accessible for a smoother viewing experience.
            </p>
          </Reveal>
        </Container>
      </AppShell>
      <SiteFooter links={footerNavigation} />
    </>
  )
}

export default PortfolioPage
