import { ArchivePage } from '@/components/layout/ArchivePage'
import { watch, channel } from '@/content/watch'

function WatchPlaceholder() {
  const rows = Array.from({ length: 3 }, (_, i) => i + 1)

  return (
    <div>
      <p className="mb-8 font-mono text-xs tracking-[0.06em] text-mute uppercase">
        Layout preview — no videos published yet
      </p>
      <ul className="flex flex-col">
        {rows.map((n) => (
          <li key={n} className="flex items-center gap-6 border-t border-line py-6 last:border-b">
            <div className="flex aspect-video w-32 shrink-0 items-center justify-center border border-dashed border-line-strong md:w-44">
              <span className="font-mono text-xs text-mute">{String(n).padStart(2, '0')}</span>
            </div>
            <div className="h-3 w-2/3 max-w-xs bg-line" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Watch() {
  return (
    <ArchivePage
      number="04"
      label="Watch"
      title="Watch"
      description="Video, on YouTube — development notes and whatever else ends up in front of a camera."
      items={watch}
      renderItem={(video) => (
        <li key={video.slug} className="border-t border-line py-6 last:border-b">
          <span className="font-sans text-lg text-ink">{video.title}</span>
        </li>
      )}
      emptyMessage="Nothing embedded here yet — find the channel below."
      placeholder={<WatchPlaceholder />}
      externalCta={{ label: 'Watch on YouTube', href: channel.url }}
    />
  )
}
