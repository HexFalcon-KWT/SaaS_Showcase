import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Platform - Enterprise Management Demo',
  description: 'Comprehensive business management platform with workflow automation, team collaboration, and analytics. Built with MagicUI and Shadcn/ui.',
  keywords: ['business platform', 'enterprise management', 'workflow automation', 'team collaboration', 'business analytics'],
  openGraph: {
    title: 'Business Platform Demo - Enterprise Management Solution',
    description: 'Explore our enterprise business platform with workflow automation, integrations, and powerful analytics',
    url: '/demo3',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Platform - Enterprise Demo',
    description: 'Enterprise management with workflow automation',
  },
  alternates: {
    canonical: '/demo3',
  },
}

export default function Demo3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
