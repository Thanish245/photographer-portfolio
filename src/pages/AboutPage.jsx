import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/layout/PageHeader'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/sections/home/SiteFooter'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { aboutHighlights, aboutMeta } from '../data/about'
import { footerNavigation, primaryNavigation } from '../data/navigation'

function AboutPage() {
  useDocumentTitle('About | Frame & Light')

  return (
    <>
      <SiteHeader links={primaryNavigation} />
      <PageHeader
        eyebrow="About"
        title="A studio built around careful light, clear direction, and timeless imagery."
        description="Frame & Light works with brands and couples who want images that feel polished, human, and enduring."
        meta={
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {aboutMeta.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
        }
      />
      <AppShell>
        <Container className="py-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutHighlights.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <Card className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">{value.title}</h2>
                  <p className="text-sm leading-7 text-slate-300">{value.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </AppShell>
      <SiteFooter links={footerNavigation} />
    </>
  )
}

export default AboutPage
