import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '50+ Premium React Components',
  description: 'Beautifully designed, accessible components built with Radix UI and Tailwind CSS. Explore buttons, inputs, cards, dialogs, forms, navigation, feedback, and data display components with live interactive demos.',
  keywords: [
    'React components',
    'Shadcn/ui',
    'Radix UI',
    'Tailwind CSS',
    'UI components',
    'accessible components',
    'button components',
    'form components',
    'dialog components',
    'card components'
  ],
  openGraph: {
    title: '50+ Premium React Components | SaaS Showcase',
    description: 'Explore our comprehensive library of Shadcn/ui components with live demos and code examples. Built with Radix UI and Tailwind CSS.',
    url: '/components',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '50+ Premium React Components',
    description: 'Beautifully designed, accessible components built with Radix UI and Tailwind CSS',
  },
  alternates: {
    canonical: '/components',
  },
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
