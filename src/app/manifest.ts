import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SaaS Showcase - UI Component Library',
    short_name: 'SaaS Showcase',
    description: 'A comprehensive showcase featuring 6 amazing SaaS demo pages combining Shadcn/ui, Aceternity UI, and MagicUI',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    // Icons array removed until actual icon files are created
    // To add icons later, create the following files in the public folder:
    // - /public/icon-192x192.png (192x192px)
    // - /public/icon-512x512.png (512x512px)
    // - /public/apple-touch-icon.png (180x180px)
  }
}
