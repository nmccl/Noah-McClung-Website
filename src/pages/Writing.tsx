import { Link } from 'react-router-dom'
import { ArchivePage } from '@/components/layout/ArchivePage'
import { Meta } from '@/components/editorial/Meta'
import { writing } from '@/content/writing'
import { readingTime } from '@/lib/reading-time'

export function Writing() {
  return (
    <ArchivePage
      number="02"
      label="Writing"
      title="Writing"
      description="Technical essays and notes from building software — published here as they're written."
      items={writing}
      renderItem={(article) => (
        <li key={article.slug} className="group border-t border-line py-8 last:border-b">
          <Link to={`/writing/${article.slug}`} className="block">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <span className="font-sans text-2xl font-medium tracking-tight text-ink transition-transform duration-300 ease-out group-hover:translate-x-2">
                {article.title}
              </span>
              <Meta
                items={[
                  new Date(article.date + 'T00:00:00').toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  }),
                  readingTime(article.body),
                ]}
                className="shrink-0"
              />
            </div>
            <p className="mt-2 max-w-2xl font-serif text-base text-ink/70 italic">{article.dek}</p>
          </Link>
        </li>
      )}
      emptyMessage="Nothing published yet. First entry pending."
    />
  )
}
