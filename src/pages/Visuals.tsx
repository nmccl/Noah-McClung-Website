import { ArchivePage } from '@/components/layout/ArchivePage'
import { visuals } from '@/content/visuals'

function VisualsPlaceholder() {
  /* const tiles = Array.from({ length: 6 }, (_, i) => i + 1) */

  return (
    <section>
      <p className="mb-8 font-mono text-xs tracking-[0.06em] text-mute uppercase">
        no images published yet
      </p>
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {visuals.map((visual) => (
          <article
            key={visual.slug}
            className="flex aspect-[4/5] items-center justify-center border border-dashed border-line-strong"
          >
            <span className="font-mono text-xs tracking-[0.06em] text-mute uppercase">
              {visual.caption}
            </span>
          </article>
        ))}
      </section>
    </section>
  )
}

export function Visuals() {
  return (
    <ArchivePage
      number="03"
      label="Visuals"
      title="Visuals"
      description="A visual archive — photography and image experiments, outside of code."
      items={visuals}
      renderItem={(visual) => (
        <li key={visual.slug} className="border-t border-line py-6 last:border-b">
          <span className="font-sans text-lg text-ink">{visual.caption}</span>
        </li>
      )}
      emptyMessage="Nothing published yet. First entry pending."
      placeholder={<VisualsPlaceholder />}
    />
  )
}
