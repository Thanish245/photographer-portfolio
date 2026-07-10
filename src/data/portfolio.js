import atelierLight from '../assets/images/portfolio/atelier-light.jpg'
import brandPortrait from '../assets/images/portfolio/brand-portrait.jpg'
import ceramicNotes from '../assets/images/portfolio/ceramic-notes.jpg'
import coastalVows from '../assets/images/portfolio/coastal-vows.jpg'
import northlightPortrait from '../assets/images/portfolio/northlight-portrait.jpg'
import studioCouple from '../assets/images/portfolio/studio-couple.jpg'

export const portfolioItems = [
  {
    id: 'atelier-light',
    title: 'Maison Atelier campaign',
    category: 'Brand',
    type: 'Brand imagery',
    year: '2026',
    aspectClassName: 'aspect-[4/5]',
    src: atelierLight,
    alt: 'A minimalist interior campaign setup with soft daylight and a styled chair.',
    summary: 'A restrained product and lifestyle set for a design studio launch.',
  },
  {
    id: 'coastal-vows',
    title: 'Astra wedding story',
    category: 'Wedding',
    type: 'Wedding editorial',
    year: '2025',
    aspectClassName: 'aspect-[3/4]',
    src: coastalVows,
    alt: 'A couple standing together in soft coastal light during an intimate wedding portrait.',
    summary: 'An intimate ceremony on the coast with soft contrast and natural tones.',
  },
  {
    id: 'northlight-portrait',
    title: 'Northlight portrait series',
    category: 'Portrait',
    type: 'Portrait session',
    year: '2026',
    aspectClassName: 'aspect-[5/6]',
    src: northlightPortrait,
    alt: 'An editorial portrait with warm sunlight and a calm, confident expression.',
    summary: 'Outdoor portraits shaped around movement, texture, and late-afternoon light.',
  },
  {
    id: 'ceramic-notes',
    title: 'Soft objects study',
    category: 'Brand',
    type: 'Editorial still life',
    year: '2026',
    aspectClassName: 'aspect-[4/3]',
    src: ceramicNotes,
    alt: 'A neutral still life of ceramics and linen on a textured surface.',
    summary: 'Still life framing for a homewares launch with tactile materials.',
  },
  {
    id: 'studio-couple',
    title: 'Evening rehearsal',
    category: 'Wedding',
    type: 'Couple session',
    year: '2025',
    aspectClassName: 'aspect-[3/4]',
    src: studioCouple,
    alt: 'A couple walking together in evening light during a pre-wedding portrait session.',
    summary: 'A quiet portrait sequence created before a city wedding ceremony.',
  },
  {
    id: 'brand-portrait',
    title: 'Founders in frame',
    category: 'Portrait',
    type: 'Brand portrait',
    year: '2026',
    aspectClassName: 'aspect-[4/5]',
    src: brandPortrait,
    alt: 'A founder portrait with a deep neutral background and confident framing.',
    summary: 'Portraits for a modern studio with a strong but understated tone.',
  },
]

export const portfolioFilters = ['All', 'Brand', 'Wedding', 'Portrait']
