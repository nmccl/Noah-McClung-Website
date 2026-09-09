import { Link } from 'react-router-dom'
import { Kicker } from '@/components/editorial/Kicker'
import { Rule } from '@/components/editorial/Rule'
import { Reveal } from '@/components/editorial/Reveal'
import { work } from '@/content/work'

export function NowWorkingOn() {
  const featured = work[0]

  return (
    <section className="px-[var(--gutter)] py-[var(--rhythm-sm)]">
      <Rule className="mb-8" />

      <Reveal y={32}>
        <Link to={`/work/${featured.slug}`} className="group block">
          <div className="relative aspect-[21/9] w-full overflow-hidden border border-line md:aspect-[21/6]">
            <div className="absolute inset-0 flex items-center justify-center bg-paper">
              <span className="font-sans text-[clamp(3rem,12vw,9rem)] leading-none font-semibold tracking-tighter text-ink/[0.07] transition-colors duration-500 group-hover:text-ink/[0.12]">
                {featured.title.toUpperCase()}
              </span>
            </div>

            <span className="absolute top-4 left-4 h-3 w-3 border-t border-l border-line-strong md:top-6 md:left-6" />
            <span className="absolute top-4 right-4 h-3 w-3 border-t border-r border-line-strong md:top-6 md:right-6" />
            <span className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-line-strong md:bottom-6 md:left-6" />
            <span className="absolute right-4 bottom-4 h-3 w-3 border-r border-b border-line-strong md:right-6 md:bottom-6" />

            <Kicker label="Now working on" className="absolute top-8 left-8 md:top-10 md:left-10" />

            <span className="absolute inset-x-0 bottom-8 flex translate-y-2 justify-center font-mono text-xs tracking-[0.08em] text-ink uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View project →
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  )
}
