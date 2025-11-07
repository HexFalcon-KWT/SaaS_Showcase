import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VelocityOS - Operating System Interface Demo',
  description: 'Modern operating system interface with file management, applications, and seamless multitasking. Built with Aceternity UI and Shadcn/ui.',
  keywords: ['operating system', 'OS interface', 'file management', 'desktop environment', 'web OS', 'system interface'],
  openGraph: {
    title: 'VelocityOS Demo - Modern Operating System Interface',
    description: 'Explore our modern OS interface with file management, applications, and seamless multitasking',
    url: '/demo6',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VelocityOS - OS Interface Demo',
    description: 'Modern operating system interface for the web',
  },
  alternates: {
    canonical: '/demo6',
  },
}

export default function Demo6Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
