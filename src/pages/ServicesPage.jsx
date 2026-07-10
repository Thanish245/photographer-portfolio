import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/layout/PageHeader'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/sections/home/SiteFooter'
import ServicesSection from '../components/sections/home/ServicesSection'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { footerNavigation, primaryNavigation } from '../data/navigation'
import { serviceWorkflow, services } from '../data/services'

function ServicesPage() {
  useDocumentTitle('Services | Frame & Light')

  return (
    <>
      <SiteHeader links={primaryNavigation} />
      <PageHeader
        eyebrow="Services"
        title="Photography services shaped for clarity, ease, and premium results."
        description="From launches to ceremonies, every package is built to make planning simple and the final imagery feel elevated."
      />
      <AppShell>
        <ServicesSection
          title="Built around calm direction and a highly polished final image."
          description="Every package is structured to keep the experience simple on set and predictable for clients, with a clear process from planning through delivery."
          services={services.map((service) => ({
            ...service,
            ctaLabel: 'Inquire about this service',
            ctaHref: '/contact',
          }))}
        />
        <Container className="py-8">
          <Reveal>
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-4">
              {serviceWorkflow.map((step, index) => (
                <div key={step} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">0{index + 1}</p>
                  <p className="text-sm leading-6 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </AppShell>
      <SiteFooter links={footerNavigation} />
    </>
  )
}

export default ServicesPage
