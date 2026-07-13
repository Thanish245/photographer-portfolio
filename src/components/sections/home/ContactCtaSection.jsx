import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Container from '../../ui/Container'
import Input from '../../ui/Input'
import Reveal from '../../ui/Reveal'
import Textarea from '../../ui/Textarea'
import useContactForm from '../../../hooks/useContactForm'
import SectionHeading from './SectionHeading'

function ContactCtaSection({ content }) {
  const { values, errors, status, errorMessage, isSubmitting, handleChange, handleBlur, handleSubmit } =
    useContactForm()

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
              {status === 'success' ? (
                <div role="status" aria-live="polite" className="space-y-3 py-4 text-center">
                  <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
                    Message sent
                  </p>
                  <p className="text-lg font-medium text-white">Thanks for reaching out.</p>
                  <p className="text-sm leading-6 text-slate-300">{content.responseBody}</p>
                </div>
              ) : (
                <form noValidate className="space-y-5" onSubmit={handleSubmit}>
                  <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="honeypot"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.honeypot}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      id="name"
                      name="name"
                      label={content.form.name}
                      placeholder="Ava Johnson"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.name}
                      disabled={isSubmitting}
                      required
                    />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      label={content.form.email}
                      placeholder="ava@brand.co"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <Input
                    id="project"
                    name="project"
                    label={content.form.project}
                    placeholder="Wedding, brand, or portrait"
                    value={values.project}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.project}
                    disabled={isSubmitting}
                    required
                  />
                  <Textarea
                    id="details"
                    name="details"
                    label={content.form.details}
                    placeholder={content.form.detailsPlaceholder}
                    hint={content.form.detailsHint}
                    value={values.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.details}
                    disabled={isSubmitting}
                    required
                  />
                  {status === 'error' ? (
                    <p role="alert" className="text-sm text-rose-300">
                      {errorMessage}
                    </p>
                  ) : null}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-400">{content.note}</p>
                    <Button type="submit" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
                      {isSubmitting ? 'Sending…' : content.form.submit}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default ContactCtaSection
