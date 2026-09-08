import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import { useNav } from '@/lib/nav-context'
import { cn } from '@/lib/utils'

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])
  return now
}

export function Masthead() {
  const { isOpen, toggle } = useNav()
  const now = useClock()

  const date = now
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replaceAll('/', '.')

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isOpen
          ? 'text-paper'
          : 'border-b border-line/60 bg-paper/85 text-ink backdrop-blur-md',
      )}
    >
      <div className="flex items-center justify-between px-[var(--gutter)] py-4 md:py-5">
        <Link
          to="/"
          onClick={() => isOpen && toggle()}
          className="font-mono text-micro tracking-[0.12em] uppercase"
        >
          Noah McClung
        </Link>

        <div
          className={cn(
            'hidden items-center gap-6 font-mono text-micro tracking-[0.1em] uppercase md:flex',
            isOpen ? 'text-mute-on-ink' : 'text-mute',
          )}
        >
          <span>{site.location}</span>
          <span>{date}</span>
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="group flex items-center gap-2.5 font-mono text-micro tracking-[0.12em] uppercase"
        >
          <span>{isOpen ? 'Close' : 'Index'}</span>
          <span className="relative flex h-2.5 w-4 flex-col justify-between">
            <span
              className={cn(
                'h-px w-full transition-transform duration-300',
                isOpen ? 'translate-y-[4.5px] rotate-45 bg-paper' : 'bg-ink',
              )}
            />
            <span
              className={cn(
                'h-px w-full transition-transform duration-300',
                isOpen ? '-rotate-45 -translate-y-[4.5px] bg-paper' : 'bg-ink',
              )}
            />
          </span>
        </button>
      </div>
    </header>
  )
}
