import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NexusAI - AI-Powered Collaboration Platform Demo',
  description: 'AI-powered collaboration platform that learns and adapts to your team. Smart automation, intelligent workflows, and AI assistants built with MagicUI.',
  keywords: ['AI platform', 'artificial intelligence', 'AI collaboration', 'smart automation', 'AI assistant', 'machine learning'],
  openGraph: {
    title: 'NexusAI Demo - AI-Powered Collaboration Platform',
    description: 'Explore our AI-powered platform with smart automation, intelligent workflows, and AI assistants',
    url: '/demo5',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexusAI - AI Collaboration Demo',
    description: 'AI-powered platform that learns and adapts to your team',
  },
  alternates: {
    canonical: '/demo5',
  },
}

export default function Demo5Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
