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
  {
    number: '02',
    slug: 'onefocus',
    category: 'iOS · macOS',
    title: 'OneFocus',
    tagline: 'A cleaner way to get things done.',
    url: 'https://www.onefocus.info',
    description:
      'OneFocus brings tasks, focus sessions, clipboard history, and quick notes into one minimal app. A generous free tier is included; Pro unlocks unlimited everything, streak tracking, custom themes, and seamless sync across Mac and iPhone.',
    year: 2026,
    pillars: [
      {
        title: 'Tasks',
        description:
          'Capture, prioritize, and track what matters — with reminders, drag-and-drop ordering, and recurring tasks.',
      },
      {
        title: 'Focus',
        description:
          'Stay in flow with a customizable timer. Track streaks and see your productivity trends over time.',
      },
      {
        title: 'Sync',
        description:
          'Tasks, notes, and clipboard history stay perfectly in sync across your Mac and iPhone — automatically.',
      },
    ],
  },
  {
    number: '03',
    slug: 'haze',
    category: 'iOS',
    title: 'HazeOS',
    tagline: 'Weather, redefined.',
    url: 'https://www.hazeos.info',
    description:
      'HazeOS is a minimalistic weather app that trades data overload for a calm, visually immersive experience. Real-time conditions, thoughtfully presented.',
    year: 2025,
    pillars: [
      {
        title: 'Calm',
        description:
          'A relaxing interface that surfaces what you need and hides the rest — no clutter, no noise.',
      },
      {
        title: 'Elegant',
        description:
          'Refined aesthetics with purposeful visual choices at every detail.',
      },
      {
        title: 'Immersive',
        description:
          'An engaging experience that draws you into the current conditions rather than just reporting them.',
      },
    ],
  },
  {
    number: '04',
    slug: 'pomodorofocus',
    category: 'Web',
    title: 'PomodoroFocus',
    tagline: 'Stay in the zone.',
    url: 'https://web-pomodorofocus.netlify.app',
    description:
      'PomodoroFocus is a browser-based Pomodoro timer built for deep work. Customizable intervals, ambient music from lo-fi beats to nature sounds, and lightweight task tracking — all without leaving the tab.',
    year: 2025,
    pillars: [
      {
        title: 'Timer',
        description:
          'Flexible Pomodoro, short break, and long break durations you can tune to your own rhythm.',
      },
      {
        title: 'Ambiance',
        description:
          'Background music — lo-fi, classical, jazz, nature sounds — keeps distraction at bay without switching off your brain.',
      },
      {
        title: 'Tasks',
        description:
          'Lightweight task list so every session has a clear purpose.',
      },
    ],
  },
]
