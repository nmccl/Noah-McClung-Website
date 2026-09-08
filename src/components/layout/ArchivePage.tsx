import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Kicker } from '@/components/editorial/Kicker'
import { Rule } from '@/components/editorial/Rule'
import { Reveal, RevealLines } from '@/components/editorial/Reveal'

export function ArchivePage<T>({
  number,
  label,
  title,
  description,
  items,
  renderItem,
  emptyMessage,
  placeholder,
  externalCta,
}: {
  number: string
  label: string
  title: string
  description: string
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  emptyMessage: string
  placeholder?: ReactNode
  externalCta?: { label: string; href: string }
}) {
  return (
    <div className="min-h-[100svh] px-[var(--gutter)] pt-32 pb-[var(--rhythm)] md:pt-40">
      <Kicker number={number} label={label} className="mb-8" />

      <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-8 md:grid-cols-12 md:items-end">
        <h1 className="col-span-4 font-sans text-3xl font-medium tracking-tight text-ink md:col-span-8">
          <RevealLines lines={[title]} />
        </h1>
        <Reveal delay={0.15} className="col-span-4 md:col-span-4">
          <p className="font-sans text-base leading-[1.6] text-ink/70">
            {description}
          </p>
          {externalCta && (
            <a
              href={externalCta.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase"
            >
              {externalCta.label}
              <span aria-hidden="true">→</span>
            </a>
          )}
        </Reveal>
      </div>

      <Rule className="mt-14 mb-14" />

      {items.length === 0 ? (
        placeholder ?? (
          <Reveal>
            <p className="font-mono text-sm tracking-[0.02em] text-mute">{emptyMessage}</p>
          </Reveal>
        )
      ) : (
        <ul className="flex flex-col">{items.map((item, i) => renderItem(item, i))}</ul>
      )}

      <div className="mt-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase text-mute hover:text-ink"
        >
          <span aria-hidden="true">←</span>
          Back home
        </Link>
      </div>
    </div>
  )
}
