import { useState } from 'react'
import { cn } from '../../utils/cn'

function ImageFrame({
  src,
  alt,
  label,
  className = '',
  imgClassName = '',
  aspectClassName = 'aspect-[4/5]',
  loading = 'lazy',
  decoding = 'async',
  onClick,
  onLoad,
  onError,
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <button
      type="button"
      aria-label={label || alt}
      onClick={onClick}
      className={cn(
        'group relative block w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 text-left outline-none',
        'focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        className,
      )}
    >
      <div className={cn('relative overflow-hidden', aspectClassName)}>
        {!isLoaded ? (
          <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,0.04),rgba(255,255,255,0.12),rgba(255,255,255,0.04))] bg-[length:200%_100%]" />
        ) : null}
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={(event) => {
            setIsLoaded(true)
            onLoad?.(event)
          }}
          onError={onError}
          className={cn(
            'h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100',
            isLoaded ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      </div>
    </button>
  )
}

export default ImageFrame
