import { cn } from '../../utils/cn'

const buttonVariants = {
  primary:
    'bg-sky-400 text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.24)] hover:bg-sky-300',
  secondary:
    'border border-white/12 bg-white/5 text-slate-100 hover:bg-white/8',
  ghost: 'bg-transparent text-slate-200 hover:bg-white/5',
  destructive:
    'bg-rose-500 text-white shadow-[0_10px_30px_rgba(244,63,94,0.18)] hover:bg-rose-400',
}

const buttonSizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const sharedProps = Component === 'button' ? { type: 'button' } : {}

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50',
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...sharedProps}
      {...props}
    />
  )
}

export default Button
