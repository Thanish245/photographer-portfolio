import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Container from '../../ui/Container'
import Input from '../../ui/Input'
import Reveal from '../../ui/Reveal'
import Textarea from '../../ui/Textarea'
import SectionHeading from './SectionHeading'

function ContactCtaSection({ content }) {
  return (
    <section id="contact" className="py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="space-y-6">
            <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
            <Card className="space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{content.responseTitle}</p>
              <p className="text-xl font-medium text-white">{content.responseBody}</p>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card variant="elevated">
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input id="name" label={content.form.name} placeholder="Ava Johnson" />
                  <Input id="email" label={content.form.email} placeholder="ava@brand.co" />
                </div>
                <Input
                  id="project"
                  label={content.form.project}
                  placeholder="Brand campaign, wedding, or portrait session"
                />
                <Textarea
                  id="details"
                  label={content.form.details}
                  placeholder={content.form.detailsPlaceholder}
                  hint={content.form.detailsHint}
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-400">{content.note}</p>
                  <Button type="submit" size="lg">
                    {content.form.submit}
                  </Button>
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default ContactCtaSection
