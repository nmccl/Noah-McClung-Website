import { Link } from 'react-router-dom'
import { work } from '@/content/work'
import { Kicker } from '@/components/editorial/Kicker'
import { Rule } from '@/components/editorial/Rule'
import { Meta } from '@/components/editorial/Meta'
import { Reveal } from '@/components/editorial/Reveal'

export function WorkSection() {
  const featured = work[0]

  return (
    <section className="px-[var(--gutter)] py-[var(--rhythm)]" id="work">
      <Rule className="mb-8" />
      <Link to="/work" className="inline-block w-fit hover:opacity-60">
        <Kicker number="01" label="Work" className="mb-10" />
      </Link>

      <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-8 md:grid-cols-12">
        <Link to={`/work/${featured.slug}`} className="group col-span-4 block md:col-span-8">
          <Reveal y={32}>
            <h2 className="font-sans text-display font-medium tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-2">
              {featured.title}
            </h2>
          </Reveal>
        </Link>

        <div className="col-span-4 flex flex-col justify-between gap-8 md:col-span-4">
          <Reveal delay={0.15}>
            <p className="font-serif text-md leading-[1.35] text-ink/75 italic">
              {featured.tagline}
            </p>
            <p className="mt-4 font-sans text-base leading-[1.6] text-ink/70">
              {featured.description}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <Meta items={[featured.category, featured.year]} className="mb-4" />
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                to={`/work/${featured.slug}`}
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase"
              >
                View project
                <span
                  className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
              <a
                href={featured.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-mute uppercase hover:text-ink"
              >
                pre-flight.info
                <span
                  className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-mute uppercase hover:text-ink"
              >
                All work
                <span
                  className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
