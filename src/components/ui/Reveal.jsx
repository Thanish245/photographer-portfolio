import { useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { cn } from '../../utils/cn'

function Reveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.18,
  as: Component = 'div',
}) {
  const ref = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [prefersReducedMotion, threshold])

  return (
    <Component
      ref={ref}
      data-visible={isVisible}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
      style={prefersReducedMotion ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}

export default Reveal
