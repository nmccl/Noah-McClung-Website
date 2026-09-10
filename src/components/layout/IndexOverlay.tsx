import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { nav, site } from '@/content/site'
import { useNav } from '@/lib/nav-context'

const EASE = [0.16, 1, 0.3, 1] as const

export function IndexOverlay() {
  const { isOpen, close } = useNav()
  const location = useLocation()

  useEffect(() => {
    close()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-[var(--gutter)] pt-24 pb-10 text-paper"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <nav aria-label="Primary">
            <ol>
              {nav.map((item, i) => (
                <li key={item.to} className="border-t border-white/10 last:border-b">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
                  >
                    <Link
                      to={item.to}
                      className="group flex items-baseline justify-between gap-6 py-4 md:py-5"
                    >
                      <span className="flex items-baseline gap-4 md:gap-8">
                        <span className="font-mono text-xs text-mute-on-ink">
                          {item.number}
                        </span>
                        <span className="font-sans text-[clamp(2.5rem,4vw+1rem,5rem)] leading-none font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-3">
                          {item.label}
                        </span>
                      </span>
                      <span className="hidden font-serif text-md italic text-mute-on-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                        View
                      </span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-col gap-6 font-mono text-micro tracking-[0.1em] text-mute-on-ink uppercase md:flex-row md:items-end md:justify-between">
            <span>
              {site.location} — {site.founded}
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
              <a href={site.links.github} target="_blank" rel="noreferrer" className="hover:text-paper">
                GitHub
              </a>
              <a href={site.links.x} target="_blank" rel="noreferrer" className="hover:text-paper">
                X
              </a>
              <a href={site.links.instagram} target="_blank" rel="noreferrer" className="hover:text-paper">
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
