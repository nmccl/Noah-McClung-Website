import { Link } from 'react-router-dom'
import { Kicker } from '@/components/editorial/Kicker'
import { Rule } from '@/components/editorial/Rule'
import { Reveal } from '@/components/editorial/Reveal'

export function AboutTeaser() {
  return (
    <section className="px-[var(--gutter)] py-[var(--rhythm-sm)]">
      <Rule className="mb-8" />
      <Kicker number="05" label="About" className="mb-10" />

      <Link to="/about" className="group block">
        <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-6 md:grid-cols-12 md:items-start">
          <Reveal className="col-span-4 md:col-span-4" y={28}>
            <h2 className="font-sans text-3xl font-medium tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-2">
              Noah
            </h2>
          </Reveal>

          <div className="col-span-4 md:col-span-6 md:col-start-6">
            <Reveal delay={0.1}>
              <p className="font-serif text-md leading-[1.45] text-ink/80 italic">
                Self-taught developer building for Apple platforms, and just as
                interested in what happens around the code.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase">
                Read more
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
    </section>
  )
}
