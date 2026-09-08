import { Link } from 'react-router-dom'
import { Kicker } from '@/components/editorial/Kicker'
import { Rule } from '@/components/editorial/Rule'
import { Meta } from '@/components/editorial/Meta'
import { Reveal, RevealLines } from '@/components/editorial/Reveal'
import { ArticleBody } from '@/lib/markdown'
import { readingTime } from '@/lib/reading-time'
import { site } from '@/content/site'

export function ArticlePage({
  number,
  label,
  title,
  dek,
  date,
  body,
  backTo = '/',
  backLabel = 'Back home',
}: {
  number: string
  label: string
  title: string
  dek: string
  date: string
  body: string
  backTo?: string
  backLabel?: string
}) {
  const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="pb-[var(--rhythm)]">
      <div className="px-[var(--gutter)] pt-32 md:pt-40">
        <Kicker number={number} label={label} className="mb-8" />

        <h1 className="max-w-4xl font-sans text-3xl leading-[var(--text-3xl--line-height)] font-medium tracking-tight text-ink">
          <RevealLines lines={[title]} />
        </h1>

        <Reveal delay={0.15} className="mt-6 max-w-2xl">
          <p className="font-serif text-lg leading-[1.4] text-ink/80 italic">{dek}</p>
        </Reveal>

        <Reveal delay={0.25}>
          <Meta
            items={[site.name, formattedDate, readingTime(body)]}
            className="mt-8"
          />
        </Reveal>
      </div>

      <div className="mt-14 px-[var(--gutter)] md:mt-20">
        <Rule className="mb-14" />
        <ArticleBody
          content={body}
          className="md:columns-2 md:gap-[var(--gutter)] [&>p]:break-inside-avoid"
        />
      </div>

      <div className="mt-10 px-[var(--gutter)]">
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-mute uppercase hover:text-ink"
        >
          <span aria-hidden="true">←</span>
          {backLabel}
        </Link>
      </div>
    </div>
  )
}
