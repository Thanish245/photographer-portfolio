import { useEffect, useMemo, useRef, useState } from 'react'
import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Container from '../../ui/Container'
import ImageFrame from '../../ui/ImageFrame'
import Reveal from '../../ui/Reveal'
import { portfolioFilters } from '../../../data/portfolio'

const categoryOrder = { Brand: 0, Wedding: 1, Portrait: 2 }

function PortfolioGallery({ items, filters = portfolioFilters }) {
  const [activeFilter, setActiveFilter] = useState('All')
  // Deep link support: /portfolio?item=<id> opens straight to that project.
  const [lightboxIndex, setLightboxIndex] = useState(() => {
    if (typeof window === 'undefined') return null

    const deepLinkId = new URLSearchParams(window.location.search).get('item')
    if (!deepLinkId) return null

    const allSorted = [...items].sort((a, b) => {
      if (a.category !== b.category) return categoryOrder[a.category] - categoryOrder[b.category]
      return a.title.localeCompare(b.title)
    })
    const index = allSorted.findIndex((item) => item.id === deepLinkId)
    return index === -1 ? null : index
  })
  const [loadedImages, setLoadedImages] = useState({})
  const lastTriggerRef = useRef(null)

  const filteredItems = useMemo(() => {
    const matchingItems = activeFilter === 'All' ? items : items.filter((item) => item.category === activeFilter)

    return [...matchingItems].sort((a, b) => {
      if (a.category !== b.category) return categoryOrder[a.category] - categoryOrder[b.category]
      return a.title.localeCompare(b.title)
    })
  }, [activeFilter, items])

  const activeItem = lightboxIndex === null ? null : filteredItems[lightboxIndex]

  useEffect(() => {
    if (lightboxIndex === null) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null)
      }

      if (event.key === 'ArrowRight') {
        setLightboxIndex((current) => ((current + 1) % filteredItems.length))
      }

      if (event.key === 'ArrowLeft') {
        setLightboxIndex((current) => ((current - 1 + filteredItems.length) % filteredItems.length))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [filteredItems.length, lightboxIndex])

  useEffect(() => {
    if (lightboxIndex === null && lastTriggerRef.current) {
      lastTriggerRef.current.focus()
      lastTriggerRef.current = null
    }
  }, [lightboxIndex])

  // Keep the URL shareable/deep-linkable to whichever project is currently open.
  useEffect(() => {
    const url = new URL(window.location.href)
    if (activeItem) {
      url.searchParams.set('item', activeItem.id)
    } else {
      url.searchParams.delete('item')
    }
    window.history.replaceState({}, '', url)
  }, [activeItem])

  return (
    <section aria-label="Portfolio gallery" className="py-10 sm:py-14 lg:py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm text-slate-400">
                Browse a curated set of recent work. Tap a photo to open the lightbox.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={activeFilter === option ? 'primary' : 'secondary'}
                  size="sm"
                  className="capitalize"
                  aria-pressed={activeFilter === option}
                  onClick={() => {
                    setActiveFilter(option)
                    setLightboxIndex(null)
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </Reveal>

        {filteredItems.length === 0 ? (
          <p className="mt-10 rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center text-sm text-slate-300">
            No projects match this filter yet. Try another category.
          </p>
        ) : (
          <div className="mt-10 columns-1 gap-6 sm:columns-2 xl:columns-3 [column-fill:balance]">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 40} className="mb-6 break-inside-avoid">
                <Card variant="elevated" className="group overflow-hidden p-0">
                  <ImageFrame
                    src={item.src}
                    alt={item.alt}
                    label={`Open ${item.title}`}
                    aspectClassName={item.aspectClassName}
                    onClick={(event) => {
                      lastTriggerRef.current = event.currentTarget
                      setLightboxIndex(index)
                    }}
                    onLoad={() => setLoadedImages((current) => ({ ...current, [item.id]: true }))}
                  />
                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-slate-400">
                      <span>{item.type}</span>
                      <span>{item.year}</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.summary}</p>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                        {item.category}
                      </span>
                      <span
                        className={`h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.55)] transition-opacity duration-300 ${loadedImages[item.id] ? 'opacity-100' : 'opacity-40'}`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Container>

      {activeItem ? (
        <Lightbox
          item={activeItem}
          currentIndex={lightboxIndex}
          total={filteredItems.length}
          onClose={() => setLightboxIndex(null)}
          onPrevious={() => setLightboxIndex((current) => ((current - 1 + filteredItems.length) % filteredItems.length))}
          onNext={() => setLightboxIndex((current) => ((current + 1) % filteredItems.length))}
        />
      ) : null}
    </section>
  )
}

function Lightbox({ item, currentIndex, total, onClose, onPrevious, onNext }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    const container = dialogRef.current
    if (!container) return undefined

    function trapTab(event) {
      if (event.key !== 'Tab') return

      const focusable = container.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    container.addEventListener('keydown', trapTab)
    return () => container.removeEventListener('keydown', trapTab)
  }, [])

  return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title} image viewer`}
        className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950/92 px-4 py-6 backdrop-blur-2xl"
        onClick={onClose}
      >
      <div ref={dialogRef} className="mx-auto flex min-h-full max-w-6xl items-center" onClick={(event) => event.stopPropagation()}>
        <Card variant="elevated" className="w-full p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                {item.category} {currentIndex + 1} of {total}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <Button ref={closeButtonRef} type="button" variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-[72vh] w-full object-contain"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="space-y-5">
              <p className="text-sm leading-7 text-slate-300">{item.summary}</p>
              <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-400">Project type</span>
                  <span className="font-medium text-white">{item.type}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-400">Year</span>
                  <span className="font-medium text-white">{item.year}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="secondary" className="flex-1" onClick={onPrevious}>
                  Previous
                </Button>
                <Button type="button" className="flex-1" onClick={onNext}>
                  Next
                </Button>
              </div>
              <p className="text-center text-xs text-slate-500">
                Use <kbd className="rounded border border-white/10 px-1.5 py-0.5">←</kbd>{' '}
                <kbd className="rounded border border-white/10 px-1.5 py-0.5">→</kbd> to browse, {' '}
                <kbd className="rounded border border-white/10 px-1.5 py-0.5">Esc</kbd> to close
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PortfolioGallery
