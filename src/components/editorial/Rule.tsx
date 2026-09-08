import { cn } from '@/lib/utils'

export function Rule({ className, invert }: { className?: string; invert?: boolean }) {
  return (
    <div
      className={cn('h-px w-full', invert ? 'bg-white/15' : 'bg-line', className)}
      role="presentation"
    />
  )
}
