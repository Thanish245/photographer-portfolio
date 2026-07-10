import Card from '../../ui/Card'
import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import SectionHeading from './SectionHeading'

function FeaturedWorkSection({ title, description, items }) {
  return (
    <section id="featured-work" className="py-10 sm:py-14 lg:py-16">
      <Container>
        <SectionHeading eyebrow="Featured work" title={title} description={description} />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.title} delay={80}>
              <Card variant="elevated" className="group overflow-hidden p-0">
                <div
                  className="min-h-[24rem] bg-cover bg-center p-5 transition-transform duration-700 group-hover:scale-[1.03] sm:min-h-[28rem]"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(7,17,31,0.05), rgba(7,17,31,0.86)), url('${item.image}')` }}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-slate-200/80">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-sm transition-colors duration-300 group-hover:bg-slate-950/60">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedWorkSection
