import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aceternity UI & MagicUI Component Showcase',
  description: 'Explore 40+ premium animated components from Aceternity UI and MagicUI. Interactive demos of backgrounds, animations, hero sections, cards, buttons, text effects, and more. Beautiful, production-ready components for modern web applications.',
  keywords: [
    'Aceternity UI',
    'MagicUI',
    'animated components',
    'background effects',
    'hero sections',
    'animated cards',
    'text animations',
    'UI animations',
    'motion components',
    'interactive components'
  ],
  openGraph: {
    title: 'Component Showcase - Aceternity UI & MagicUI | SaaS Showcase',
    description: 'Interactive showcase of 40+ premium animated components. Backgrounds, animations, cards, buttons, and text effects.',
    url: '/showcase',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aceternity UI & MagicUI Showcase',
    description: 'Explore 40+ premium animated components with interactive demos',
  },
  alternates: {
    canonical: '/showcase',
  },
}

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
