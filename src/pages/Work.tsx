import { Link } from 'react-router-dom'
import { Kicker } from '@/components/editorial/Kicker'
import { Rule } from '@/components/editorial/Rule'
import { Meta } from '@/components/editorial/Meta'
import { Reveal, RevealLines } from '@/components/editorial/Reveal'
import { work } from '@/content/work'

export function Work() {
  const [featured, ...rest] = work

  return (
    <div className="min-h-[100svh] px-[var(--gutter)] pt-32 pb-[var(--rhythm)] md:pt-40">
      <Kicker number="01" label="Work" className="mb-8" />

      <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-8 md:grid-cols-12 md:items-end">
        <h1 className="col-span-4 font-sans text-3xl font-medium tracking-tight text-ink md:col-span-8">
          <RevealLines lines={['Work']} />
        </h1>
        <Reveal delay={0.15} className="col-span-4 md:col-span-4">
          <p className="font-sans text-base leading-[1.6] text-ink/70">
            Software, built independently.
          </p>
        </Reveal>
      </div>

      <Rule className="mt-14 mb-14" />

      <div>
        <Kicker label="Featured" className="mb-8" />
        <Link to={`/work/${featured.slug}`} className="group block">
          <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-8 md:grid-cols-12">
            <Reveal className="col-span-4 md:col-span-8" y={28}>
              <h2 className="font-sans text-display font-medium tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-2">
                {featured.title}
              </h2>
            </Reveal>
            <div className="col-span-4 flex flex-col justify-between gap-8 md:col-span-4">
              <Reveal delay={0.1}>
                <p className="font-serif text-md leading-[1.35] text-ink/75 italic">
                  {featured.tagline}
                </p>
                <p className="mt-4 font-sans text-base leading-[1.6] text-ink/70">
                  {featured.description}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Meta items={[featured.category, featured.year]} className="mb-4" />
                <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase">
                  View project
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
        </Link>
      </div>

      <Rule className="mt-14 mb-14" />

      {rest.length === 0 ? (
        <Reveal>
          <p className="font-mono text-sm tracking-[0.02em] text-mute">
            More projects in progress.
          </p>
        </Reveal>
      ) : (
        <ul className="flex flex-col">
          {rest.map((item) => (
            <li key={item.slug} className="border-t border-line py-8 last:border-b">
              <Link to={`/work/${item.slug}`} className="group block">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                  <span className="font-sans text-2xl font-medium tracking-tight text-ink transition-transform duration-300 ease-out group-hover:translate-x-2">
                    {item.title}
                  </span>
                  <Meta items={[item.category, item.year]} className="shrink-0" />
                </div>
                <p className="mt-2 max-w-2xl font-serif text-base text-ink/70 italic">
                  {item.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>
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
