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
  const nodes: ReactNode[] = []
  let i = 0

  while (i < blocks.length) {
    const block = blocks[i]

    if (block.type === 'quote') {
      nodes.push(
        <blockquote
          key={i}
          className="my-10 border-y border-line py-8 font-serif text-[var(--text-lg)] leading-[1.4] text-ink italic md:my-14 md:py-10"
        >
          {parseInline(block.text)}
        </blockquote>
      )
      i++
      continue
    }

    if (block.type === 'heading') {
      // Pair the heading with its immediately following paragraph so they
      // are never separated across columns.
      const paired: ReactNode[] = [
        <h3
          key="h"
          className="mt-10 mb-4 font-sans text-xl font-medium tracking-tight text-ink"
        >
          {parseInline(block.text)}
        </h3>,
      ]
      if (i + 1 < blocks.length && blocks[i + 1].type === 'paragraph') {
        const pBlock = blocks[i + 1]
        const isFirst = !sawFirstParagraph
        sawFirstParagraph = true
        paired.push(
          <p
            key="p"
            className="mb-6 font-serif text-[var(--text-base)] leading-[1.75] text-ink/85"
          >
            {isFirst ? withDropCap(parseInline(pBlock.text)) : parseInline(pBlock.text)}
          </p>
        )
        i += 2
      } else {
        i++
      }
      nodes.push(
        <div key={`section-${i}`} className="break-inside-avoid">
          {paired}
        </div>
      )
      continue
    }

    // Standalone paragraph (intro or extra paragraphs within a section)
    const isFirst = !sawFirstParagraph
    sawFirstParagraph = true
    const inline = parseInline(block.text)
    nodes.push(
      <p
        key={i}
        className="mb-6 break-inside-avoid font-serif text-[var(--text-base)] leading-[1.75] text-ink/85"
      >
        {isFirst ? withDropCap(inline) : inline}
      </p>
    )
    i++
  }

  return <div className={className}>{nodes}</div>
}
