import { cn } from '../../utils/cn'

const cardVariants = {
  default: 'border-white/10 bg-slate-900/60',
  elevated: 'border-white/12 bg-slate-900/80 shadow-[0_24px_60px_rgba(15,23,42,0.28)]',
  outline: 'border-white/14 bg-transparent',
}
const baseCardClasses = 'rounded-3xl border p-6 backdrop-blur-sm'

function Card({ children, className = '', variant = 'default' }) {
  return (
    <div
      className={cn(
        baseCardClasses,
        'transition-transform duration-300 hover:-translate-y-1',
        cardVariants[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
