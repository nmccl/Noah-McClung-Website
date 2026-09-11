import { site } from '@/content/site'
import { Rule } from '@/components/editorial/Rule'

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="px-[var(--gutter)] pt-[var(--rhythm-sm)] pb-10">
        <Rule invert className="mb-8" />
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md font-sans text-lg leading-[1.3] tracking-tight">
            Currently building in Las Vegas. Open to working with you, I'm only an email away!
          </p>
          <div className="flex flex-col gap-4 font-mono text-xs tracking-[0.08em] text-mute-on-ink uppercase md:items-end">
            <a href={`mailto:${site.email}`} className="text-paper hover:text-mute-on-ink">
              {site.email}
            </a>
            <div className="flex gap-5">
              <a href={site.links.github} target="_blank" rel="noreferrer" className="hover:text-paper">
                GitHub
              </a>
              <a href={site.links.x} target="_blank" rel="noreferrer" className="hover:text-paper">
                X
              </a>
              <a href={site.links.instagram} target="_blank" rel="noreferrer" className="hover:text-paper">
                Instagram
              </a>
              <a href={site.links.youtube} target="_blank" rel="noreferrer" className="hover:text-paper">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col-reverse gap-2 font-mono text-micro tracking-[0.08em] text-mute-on-ink uppercase md:flex-row md:items-center md:justify-between">
          <span>© {site.founded} {site.name}</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  )
}
