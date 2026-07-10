import Card from '../../ui/Card'
import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import SectionHeading from './SectionHeading'

function ClientTestimonialsSection({ title, description, testimonials }) {
  return (
    <section id="testimonials" className="py-10 sm:py-14 lg:py-16">
      <Container>
        <SectionHeading eyebrow="Testimonials" title={title} description={description} />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal key={item.name} delay={60}>
              <Card className="space-y-5">
                <p className="text-lg leading-8 text-slate-200">"{item.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ClientTestimonialsSection
