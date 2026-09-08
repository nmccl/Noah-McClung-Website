export type WorkItem = {
  number: string
  slug: string
  category: string
  title: string
  tagline: string
  description: string
  year: number
  url: string
  pillars: { title: string; description: string }[]
}

export const work: WorkItem[] = [
  {
    number: '01',
    slug: 'preflight',
    category: 'Software',
    title: 'PreFlight',
    tagline: 'Know before you submit.',
    url: 'https://www.pre-flight.info',
    description:
      "PreFlight is a virtual App Review engineer. It reads a macOS or iOS project the way Apple's own reviewers would, and answers one question before you do: if this were reviewed today, what would get flagged?",
    year: 2026,
    pillars: [
      {
        title: 'Configuration',
        description:
          'Deterministic checks against build settings, bundle configuration, the privacy manifest, and App Store Connect metadata.',
      },
      {
        title: 'Experience',
        description:
          'Whether the app behaves like a polished Apple application — navigation, accessibility, device support, onboarding.',
      },
      {
        title: 'Compliance',
        description:
          'The patterns App Review actually flags: subscription disclosures, demo accounts, broken links, permission timing.',
      },
    ],
  },
]
