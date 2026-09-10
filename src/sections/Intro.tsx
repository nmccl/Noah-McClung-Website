import { motion } from 'framer-motion'
import { site } from '@/content/site'
import { RevealLines, Reveal } from '@/components/editorial/Reveal'
import { Meta } from '@/components/editorial/Meta'
import { Rule } from '@/components/editorial/Rule'

export function Intro() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-between px-[var(--gutter)] pt-28 pb-8 md:pt-32">
      <Reveal delay={0.1}>
        <Meta
          items={[
            <span key="role">{site.role}</span>,
            <span key="platform">Apple Platforms</span>,
            <span key="location">{site.location}</span>,
          ]}
        />
      </Reveal>

      <div>
        <Reveal delay={0.05}>
          <Rule />
        </Reveal>
        <div className="my-8 md:my-10">
          <h1 className="font-mono text-display-xl font-medium tracking-tighter text-ink">
            <RevealLines lines={['Noah', 'McClung']} delay={0.15} stagger={0.1} />
          </h1>
        </div>
        <Reveal delay={0.5}>
          <Rule />
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-x-[var(--gutter)] gap-y-6 md:grid-cols-12 md:items-end">
        <Reveal
          delay={0.55}
          className="col-span-4 md:col-span-6 md:col-start-1 lg:col-span-5"
        >
          <p className="font-serif text-lg leading-[1.3] text-ink/80 italic">
            Indie developer building software for Apple platforms — with a standing
            interest in photography, video, music, and writing on the side.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="col-span-4 flex items-center gap-3 font-mono text-micro tracking-[0.14em] text-mute uppercase md:col-span-3 md:col-start-10 md:justify-self-end"
        >
          <span
            className="h-8 w-px origin-top bg-line-strong animate-scrollcue"
            aria-hidden="true"
          />
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
