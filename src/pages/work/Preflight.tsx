import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Kicker } from '@/components/editorial/Kicker'
import { Rule } from '@/components/editorial/Rule'
import { Meta } from '@/components/editorial/Meta'
import { Reveal, RevealLines } from '@/components/editorial/Reveal'
import { work } from '@/content/work'

const screenshots = [
  '/images/preflight/screenshot-1.jpg',
  '/images/preflight/screenshot-2.jpg',
  '/images/preflight/screenshot-3.jpg',
  '/images/preflight/screenshot-4.jpg',
  '/images/preflight/screenshot-5.jpg',
]

function ScreenshotSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(id)
  }, [current])

  const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length)
  const next = () => setCurrent((c) => (c + 1) % screenshots.length)

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-line md:aspect-[16/8]">
      {screenshots.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`PreFlight screenshot ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <span className="absolute top-6 left-6 z-10 h-3 w-3 border-t border-l border-paper/70" />
      <span className="absolute top-6 right-6 z-10 h-3 w-3 border-t border-r border-paper/70" />
      <span className="absolute bottom-6 left-6 z-10 h-3 w-3 border-b border-l border-paper/70" />
      <span className="absolute right-6 bottom-6 z-10 h-3 w-3 border-r border-b border-paper/70" />
      <button
        onClick={prev}
        aria-label="Previous screenshot"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 px-2 py-3 font-mono text-xs text-paper/50 transition-colors hover:text-paper"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next screenshot"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 px-2 py-3 font-mono text-xs text-paper/50 transition-colors hover:text-paper"
      >
        →
      </button>
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-px w-6 transition-colors duration-300 ${i === current ? 'bg-paper' : 'bg-paper/30'}`}
          />
        ))}
      </div>
    </div>
  )
}

export function Preflight() {
  const project = work.find((item) => item.slug === 'preflight')!

  return (
    <div className="pb-[var(--rhythm)]">
      <div className="px-[var(--gutter)] pt-32 md:pt-40">
        <Kicker number={project.number} label={project.category} className="mb-8" />

        <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-8 md:grid-cols-12 md:items-end">
          <h1 className="col-span-4 font-sans text-display font-medium tracking-tight text-ink md:col-span-9">
            <RevealLines lines={[project.title]} />
          </h1>
          <Reveal delay={0.2} className="col-span-4 flex flex-col gap-3 md:col-span-3">
            <Meta items={[project.category, project.year]} />
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase"
            >
              pre-flight.info
              <span
                className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-x-[var(--gutter)] md:grid-cols-12">
          <Reveal delay={0.3} className="col-span-4 md:col-span-6">
            <p className="font-serif text-lg leading-[1.4] text-ink italic">
              {project.tagline}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 px-[var(--gutter)]">
        <Reveal y={40}>
          <ScreenshotSlideshow />
          <p className="mt-3 font-mono text-xs tracking-[0.04em] text-mute uppercase">
            PreFlight in action — swipe through to see the full experience.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 px-[var(--gutter)] md:mt-24">
        <Rule className="mb-14" />
        <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-8 md:grid-cols-12">
          <Kicker label="The Product" className="col-span-4 md:col-span-3" />
          <Reveal className="col-span-4 md:col-span-7 md:col-start-5">
            <p className="text-balance font-sans text-xl leading-[1.25] tracking-tight text-ink">
              {project.description}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 px-[var(--gutter)] md:mt-24">
        <Rule className="mb-14" />
        <div className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-10 md:grid-cols-12">
          <Kicker label="How It Thinks" className="col-span-4 md:col-span-3" />
          <div className="col-span-4 grid grid-cols-1 gap-10 md:col-span-9 md:grid-cols-3 md:gap-8">
            {project.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <span className="font-mono text-xs tracking-[0.08em] text-mute uppercase">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-sans text-lg font-medium tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-[1.6] text-ink/70">
                  {pillar.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 px-[var(--gutter)]">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase text-mute hover:text-ink"
        >
          <span aria-hidden="true">←</span>
          Back to Work
        </Link>
      </div>
    </div>
  )
}
