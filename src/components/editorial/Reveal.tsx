import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  amount = 0.4,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  amount?: number
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
}: {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
  stagger?: number
}) {
  const reduced = useReducedMotion()

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden pb-[0.15em]">
          {reduced ? (
            <div className={lineClassName}>{line}</div>
          ) : (
            <motion.div
              className={lineClassName}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{
                duration: 1,
                delay: delay + i * stagger,
                ease: EASE,
              }}
            >
              {line}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
