import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CreativeHub - Creative Project Platform Demo',
  description: 'Creative project management and collaboration platform. Beautiful design portfolio and team workspace built with Shadcn/ui and Aceternity UI.',
  keywords: ['creative platform', 'project management', 'design collaboration', 'portfolio', 'creative workspace'],
  openGraph: {
    title: 'CreativeHub Demo - Creative Collaboration Platform',
    description: 'Explore our creative project management platform with beautiful design showcase and team collaboration tools',
    url: '/demo2',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreativeHub - Creative Platform Demo',
    description: 'Creative project management and collaboration made easy',
  },
  alternates: {
    canonical: '/demo2',
  },
}

export default function Demo2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
