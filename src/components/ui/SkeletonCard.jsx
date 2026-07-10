function SkeletonCard({ className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 ${className}`}
    >
      <div className="animate-pulse space-y-4 p-4">
        <div className="aspect-[4/5] rounded-[1.25rem] bg-[linear-gradient(110deg,rgba(255,255,255,0.04),rgba(255,255,255,0.12),rgba(255,255,255,0.04))] bg-[length:200%_100%]" />
        <div className="space-y-3">
          <div className="h-4 w-2/3 rounded-full bg-white/10" />
          <div className="h-4 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
