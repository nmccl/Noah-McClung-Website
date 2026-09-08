import { cn } from '@/lib/utils'

type KickerProps = {
  number?: string
  label: string
  className?: string
  invert?: boolean
}

export function Kicker({ number, label, className, invert }: KickerProps) {
  return (
    <div
      className={cn(
        'flex items-baseline gap-3 font-mono text-micro tracking-[0.14em] uppercase',
        invert ? 'text-white/60' : 'text-mute',
        className,
      )}
    >
      {number && <span className={invert ? 'text-white' : 'text-ink'}>{number}</span>}
      <span>{label}</span>
    </div>
  )
}
