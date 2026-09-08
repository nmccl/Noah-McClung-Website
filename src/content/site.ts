export const site = {
  name: 'Noah McClung',
  role: 'Indie Developer',
  location: 'Las Vegas, NV',
  founded: 2026,
  email: 'noah_mcclung@icloud.com',
  links: {
    github: 'https://github.com/nmccl',
    x: 'https://x.com/imnoahmcclung',
    instagram: 'https://instagram.com/imnoahmcclung',
    youtube: 'https://youtube.com/@imnoahmcclung',
  },
} as const

export type NavItem = {
  number: string
  label: string
  to: string
}

export const nav: NavItem[] = [
  { number: '01', label: 'Work', to: '/work' },
  { number: '02', label: 'Writing', to: '/writing' },
  { number: '03', label: 'Visuals', to: '/visuals' },
  { number: '04', label: 'Watch', to: '/watch' },
  { number: '05', label: 'About', to: '/about' },
]
