import Card from '../../ui/Card'
import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import SectionHeading from './SectionHeading'

function AboutPreviewSection({ title, description, profile }) {
  return (
    <section id="about" className="py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading eyebrow="About" title={title} description={description} />
          </div>

          <Reveal>
            <Card variant="elevated" className="grid gap-5 p-0 md:grid-cols-[0.9fr_1.1fr]">
              <div
                className="min-h-[26rem] rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(7,17,31,0.12),rgba(7,17,31,0.8)),var(--about-image)] bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                style={{ '--about-image': `url('${profile.image}')` }}
                aria-label={profile.alt}
                role="img"
              />
              <div className="flex flex-col justify-between gap-6 p-6 md:p-8">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    {profile.title}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">{profile.name}</h3>
                  <p className="text-sm leading-7 text-slate-300">{profile.bio}</p>
                </div>

                <div className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Focus</p>
                    <p className="mt-1 text-sm text-white">{profile.focus}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Approach</p>
                    <p className="mt-1 text-sm text-white">{profile.approach}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Delivery
                    </p>
                    <p className="mt-1 text-sm text-white">{profile.delivery}</p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default AboutPreviewSection
