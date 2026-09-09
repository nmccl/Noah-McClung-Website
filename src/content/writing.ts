/**
 * Writing archive.
 *
 * How to add a new article:
 *
 * 1. Add an object to the `writing` array below (newest first).
 * 2. Fill in the fields:
 *      number - two-digit string, next in sequence ('01', '02', ...)
 *      slug   - URL segment, becomes /writing/<slug>
 *      title  - the headline
 *      dek    - one-sentence subhead, shown under the title and in the archive list
 *      date   - 'YYYY-MM-DD'
 *      body   - the article text (see markdown syntax below)
 * 3. Save. The article is live at /writing/<slug> and listed on /writing
 *    and the homepage automatically. Reading time is calculated from the
 *    word count, so there's nothing to fill in for that.
 *
 * `body` markdown syntax (deliberately small — see src/lib/markdown.tsx):
 *
 *   Paragraphs   - separate with a blank line.
 *   **bold**     - double asterisks.
 *   *italic*     - single asterisks.
 *   ## Heading   - a line starting with "## " becomes a subheading.
 *   > Quote      - a line starting with "> " becomes a pull quote,
 *                  breaking across both columns on wide screens.
 *
 *   The very first letter of the first paragraph gets a drop cap
 *   automatically — no markup needed for that.
 *
 * Template (copy the block below, paste it as a new array entry, fill it in):
 *
 * {
 *   number: '01',
 *   slug: 'your-article-slug',
 *   title: 'Your Title',
 *   dek: 'One sentence describing what this is about.',
 *   date: '2026-01-01',
 *   body: `First paragraph. This is where the drop cap goes automatically.
 *
 * Second paragraph, with **bold** and *italic* if you want them.
 *
 * > A pulled-out line that reads as a quote.
 *
 * ## An optional subheading
 *
 * More paragraphs after the subheading.`,
 * },
 */

export type Article = {
  number: string
  slug: string
  title: string
  dek: string
  date: string
  body: string
}

export const writing: Article[] = []
