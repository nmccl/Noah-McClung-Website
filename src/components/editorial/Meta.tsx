import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Meta({
  items,
  className,
  invert,
}: {
  items: ReactNode[]
  className?: string
  invert?: boolean
}) {
  return (
    <ul
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-micro tracking-[0.08em] uppercase',
        invert ? 'text-white/50' : 'text-mute',
        className,
      )}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-4">
          {i > 0 && <span className="opacity-40" aria-hidden="true">/</span>}
          {item}
        </li>
      ))}
    </ul>
  )
}
