import type { ReactNode } from 'react'

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'heading'; text: string }

function parseBlocks(source: string): Block[] {
  const raw = source
    .trim()
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)

  return raw.map((block) => {
    if (block.startsWith('> ')) {
      return {
        type: 'quote',
        text: block
          .split('\n')
          .map((line) => line.replace(/^>\s?/, ''))
          .join(' ')
          .trim(),
      }
    }
    if (block.startsWith('## ')) {
      return { type: 'heading', text: block.slice(3).trim() }
    }
    return { type: 'paragraph', text: block.replace(/\n/g, ' ') }
  })
}

/** Parses `**bold**` and `*italic*` into React nodes. */
function parseInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter((p) => p !== '')

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

function withDropCap(nodes: ReactNode[]): ReactNode[] {
  const [first, ...rest] = nodes
  if (typeof first !== 'string' || first.length === 0) return nodes

  const letter = first[0]
  const remainder = first.slice(1)

  return [
    <span key="dropcap" className="drop-cap" aria-hidden="true">
      {letter}
    </span>,
    remainder,
    ...rest,
  ]
}

export function ArticleBody({ content, className }: { content: string; className?: string }) {
  const blocks = parseBlocks(content)
  let sawFirstParagraph = false

  return (
    <div className={className}>
      {blocks.map((block, i) => {
        if (block.type === 'quote') {
          return (
            <blockquote
              key={i}
              className="[column-span:all] my-10 border-y border-line py-8 font-serif text-[var(--text-lg)] leading-[1.4] text-ink italic md:my-14 md:py-10"
            >
              {parseInline(block.text)}
            </blockquote>
          )
        }
        if (block.type === 'heading') {
          return (
            <h3
              key={i}
              className="[column-span:all] mt-2 mb-4 font-sans text-xl font-medium tracking-tight text-ink"
            >
              {parseInline(block.text)}
            </h3>
          )
        }

        const isFirst = !sawFirstParagraph
        sawFirstParagraph = true
        const inline = parseInline(block.text)

        return (
          <p key={i} className="mb-6 font-serif text-[var(--text-base)] leading-[1.75] text-ink/85">
            {isFirst ? withDropCap(inline) : inline}
          </p>
        )
      })}
    </div>
  )
}
