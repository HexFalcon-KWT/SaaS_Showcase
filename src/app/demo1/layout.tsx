import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DataInsight Pro - Data Analytics Platform Demo',
  description: 'Data analytics platform with real-time dashboards and predictive modeling. Built with Shadcn/ui. Explore our enterprise analytics solution demo.',
  keywords: ['data analytics', 'dashboard', 'real-time analytics', 'predictive modeling', 'business intelligence', 'data visualization'],
  openGraph: {
    title: 'DataInsight Pro Demo - Enterprise Analytics Platform',
    description: 'Explore our data analytics platform featuring real-time dashboards, AI-powered insights, and automated reporting',
    url: '/demo1',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataInsight Pro - Analytics Platform Demo',
    description: 'Real-time dashboards and predictive modeling for enterprise',
  },
  alternates: {
    canonical: '/demo1',
  },
}

export default function Demo1Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
