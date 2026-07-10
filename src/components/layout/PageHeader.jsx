import Container from '../ui/Container'
import Reveal from '../ui/Reveal'

function PageHeader({ eyebrow, title, description, meta }) {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-16">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[0.95]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            {description}
          </p>
          {meta ? <div className="mt-8">{meta}</div> : null}
        </Reveal>
      </Container>
    </section>
  )
}

export default PageHeader
