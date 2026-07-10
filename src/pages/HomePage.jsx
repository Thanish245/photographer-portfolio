import AppShell from '../components/layout/AppShell'
import AboutPreviewSection from '../components/sections/home/AboutPreviewSection'
import ClientTestimonialsSection from '../components/sections/home/ClientTestimonialsSection'
import ContactCtaSection from '../components/sections/home/ContactCtaSection'
import FeaturedWorkSection from '../components/sections/home/FeaturedWorkSection'
import HomeHero from '../components/sections/home/HomeHero'
import HomeNavigation from '../components/sections/home/HomeNavigation'
import ServicesSection from '../components/sections/home/ServicesSection'
import SiteFooter from '../components/sections/home/SiteFooter'
import useSeo from '../hooks/useSeo'
import { aboutProfile } from '../data/about'
import { contactContent } from '../data/contact'
import { footerNavigation } from '../data/navigation'
import { heroContent } from '../data/hero'
import { portfolioItems } from '../data/portfolio'
import { services as serviceItems } from '../data/services'
import { testimonials } from '../data/testimonials'

function HomePage() {
  useSeo({
    title: 'Frame & Light | Editorial photography for brands, weddings & portraits',
    description:
      'Frame & Light creates quietly cinematic photography for brands, weddings, and portraits, with soft contrast and an editorial sensibility that feels timeless.',
    path: '/',
  })

  return (
    <>
      <HomeNavigation
        links={[
          { label: 'Work', href: '#featured-work' },
          { label: 'Services', href: '#services' },
          { label: 'About', href: '#about' },
          { label: 'Testimonials', href: '#testimonials' },
          { label: 'Contact', href: '#contact' },
        ]}
        cta={{ primary: { label: 'View work', href: '/portfolio' }, secondary: { label: 'Book a session', href: '/contact' } }}
      />
      <AppShell>
        <HomeHero content={heroContent} />
        <FeaturedWorkSection
          title="A curated selection of recent commissions."
          description="A closer look at brand, wedding, and portrait projects delivered with a consistent editorial tone."
          items={portfolioItems.slice(0, 3).map((item) => ({
            title: item.title,
            category: item.category,
            year: item.year,
            description: item.summary,
            image: item.src,
          }))}
        />
        <ServicesSection
          title="Built around calm direction and a highly polished final image."
          description="Every package is structured to keep the experience simple on set and predictable for clients, with a clear process from planning through delivery."
          services={serviceItems.map((service) => ({
            ...service,
            ctaLabel: 'Inquire about this service',
            ctaHref: '/contact',
          }))}
        />
        <AboutPreviewSection
          title="A careful approach that keeps the subject at the center."
          description="The work is shaped by an editorial eye, a calm on-set pace, and a focus on images that feel polished without losing warmth."
          profile={aboutProfile}
        />
        <ClientTestimonialsSection
          title="Trusted by clients who care about image quality and ease."
          description="The best feedback is simple: clients feel supported on set and confident in the final gallery."
          testimonials={testimonials}
        />
        <ContactCtaSection content={contactContent} />
      </AppShell>
      <SiteFooter links={footerNavigation} />
    </>
  )
}

export default HomePage
