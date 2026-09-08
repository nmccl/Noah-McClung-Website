import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Kicker } from '@/components/editorial/Kicker'
import { Rule } from '@/components/editorial/Rule'
import { Reveal } from '@/components/editorial/Reveal'

export function ArchiveTeaser({
  number,
  label,
  title,
  description,
  linkLabel,
  linkHref,
  external,
  isEmpty = true,
  emptyNote,
}: {
  number: string
  label: string
  title: string
  description: string
  linkLabel: string
  linkHref: string
  external?: boolean
  isEmpty?: boolean
  emptyNote?: string
}) {
  const body: ReactNode = (
    <>
      <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-6 md:grid-cols-12 md:items-start">
        <Reveal className="col-span-4 md:col-span-4" y={28}>
          <h2 className="font-sans text-3xl font-medium tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-2">
            {title}
          </h2>
        </Reveal>

        <div className="col-span-4 md:col-span-6 md:col-start-6">
          <Reveal delay={0.1}>
            <p className="font-sans text-base leading-[1.6] text-ink/70">
              {description}
            </p>
            {isEmpty && emptyNote && (
              <p className="mt-4 font-mono text-xs tracking-[0.04em] text-mute">
                {emptyNote}
              </p>
            )}
          </Reveal>
          <Reveal delay={0.2}>
            <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase">
              {linkLabel}
              <span
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </Reveal>
        </div>
      </div>
    </>
  )

  return (
    <section className="px-[var(--gutter)] py-[var(--rhythm-sm)]">
      <Rule className="mb-8" />
      <Kicker number={number} label={label} className="mb-10" />
      {external ? (
        <a href={linkHref} target="_blank" rel="noreferrer" className="group block">
          {body}
        </a>
      ) : (
        <Link to={linkHref} className="group block">
          {body}
        </Link>
      )}
    </section>
  )
}
