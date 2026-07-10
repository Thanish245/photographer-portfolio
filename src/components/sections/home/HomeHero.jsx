import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'

function HomeHero({ content }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200">
              {content.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[0.95]">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={content.primaryCta.href} size="lg">
                {content.primaryCta.label}
              </Button>
              <Button as="a" href={content.secondaryCta.href} variant="secondary" size="lg">
                {content.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {content.highlights.map((item) => (
                <Card key={item.label} className="p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">{item.value}</p>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card variant="elevated" className="relative overflow-hidden p-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.2),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
              <div className="relative grid min-h-[34rem] gap-4 p-5 sm:p-6">
                <div
                  className="grid flex-1 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.78)),var(--spotlight-image)] bg-cover bg-center bg-[length:110%] p-6 transition-all duration-700 hover:bg-[length:115%] motion-reduce:transition-none motion-reduce:hover:bg-[length:110%]"
                  style={{ '--spotlight-image': `url('${content.spotlight.image}')` }}
                >
                  <div className="self-end">
                    <p className="text-sm uppercase tracking-[0.24em] text-sky-200">
                      {content.spotlight.label}
                    </p>
                    <p className="mt-2 max-w-xs text-lg leading-7 text-white">
                      {content.spotlight.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {content.details.map((detail) => (
                    <div key={detail.label} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">{detail.label}</p>
                      <p className="mt-1 text-lg font-medium text-white">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default HomeHero
