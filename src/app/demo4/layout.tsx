import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer Platform - API & Development Tools Demo',
  description: 'Developer-focused platform with API management, documentation, monitoring, and collaboration tools. Built with Aceternity UI.',
  keywords: ['developer platform', 'API management', 'developer tools', 'API documentation', 'monitoring', 'DevOps'],
  openGraph: {
    title: 'Developer Platform Demo - API Management Tools',
    description: 'Explore our developer platform with powerful API management, monitoring, and collaboration features',
    url: '/demo4',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Platform - API Tools Demo',
    description: 'API management and developer collaboration platform',
  },
  alternates: {
    canonical: '/demo4',
  },
}

export default function Demo4Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
