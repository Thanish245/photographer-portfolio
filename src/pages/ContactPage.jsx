import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/layout/PageHeader'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/sections/home/SiteFooter'
import ContactCtaSection from '../components/sections/home/ContactCtaSection'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { contactContent } from '../data/contact'
import { footerNavigation, primaryNavigation } from '../data/navigation'

function ContactPage() {
  useDocumentTitle('Contact | Frame & Light')

  return (
    <>
      <SiteHeader links={primaryNavigation} />
      <PageHeader
        eyebrow={contactContent.eyebrow}
        title="Start your project with a clear brief and a calm creative process."
        description="Share the basics and we'll respond with the next steps, availability, and a tailored recommendation."
      />
      <AppShell>
        <ContactCtaSection content={contactContent} />
        <Container className="py-4">
          <Reveal>
            <p className="text-sm text-slate-400">{contactContent.typicalProjects}</p>
          </Reveal>
        </Container>
      </AppShell>
      <SiteFooter links={footerNavigation} />
    </>
  )
}

export default ContactPage
