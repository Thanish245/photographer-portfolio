import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import SectionHeading from './SectionHeading'

function ServicesSection({ title, description, services }) {
  return (
    <section id="services" className="py-10 sm:py-14 lg:py-16">
      <Container>
        <SectionHeading eyebrow="Services" title={title} description={description} />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 60}>
              <Card className="group space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.55)] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-sm leading-7 text-slate-300">{service.description}</p>
                <p className="text-sm text-slate-400">{service.details}</p>
                <Button as="a" href={service.ctaHref} variant="secondary" size="sm" className="w-fit">
                  {service.ctaLabel}
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
