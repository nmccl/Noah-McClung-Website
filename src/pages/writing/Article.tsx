import { Navigate, useParams } from 'react-router-dom'
import { ArticlePage } from '@/components/layout/ArticlePage'
import { writing } from '@/content/writing'

export function WritingArticle() {
  const { slug } = useParams()
  const article = writing.find((entry) => entry.slug === slug)

  if (!article) return <Navigate to="/writing" replace />

  return (
    <ArticlePage
      number={article.number}
      label="Writing"
      title={article.title}
      dek={article.dek}
      date={article.date}
      body={article.body}
      backTo="/writing"
      backLabel="Back to Writing"
    />
  )
}
