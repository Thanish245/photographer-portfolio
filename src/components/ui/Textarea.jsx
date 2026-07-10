import { cn } from '../../utils/cn'

function Textarea({ className = '', label, hint, error, id, ...props }) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className="grid gap-2">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-slate-200">
          {label}
        </label>
      ) : null}
      <textarea
        id={id}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        className={cn(
          'min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition-colors duration-200 focus:border-sky-300/50 focus:ring-2 focus:ring-sky-300/20',
          error && 'border-rose-400/60 focus:border-rose-400/60 focus:ring-rose-400/20',
          className,
        )}
        {...props}
      />
      {hint && !error ? (
        <span id={hintId} className="text-sm text-slate-400">
          {hint}
        </span>
      ) : null}
      {error ? (
        <span id={errorId} className="text-sm text-rose-300">
          {error}
        </span>
      ) : null}
    </div>
  )
}

export default Textarea
