import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { SkipToContent } from "@/components/skip-to-content";
import Script from "next/script";
import { CookieConsentProvider } from "@/components/cookie-consent";
import { OrganizationSchema, WebsiteSchema } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saasup.me'),
  title: {
    default: 'SaaS Showcase - Premium UI Components | Shadcn/ui + Aceternity + MagicUI',
    template: '%s | SaaS Showcase'
  },
  description: 'A comprehensive showcase featuring 6 amazing SaaS demo pages combining Shadcn/ui, Aceternity UI, and MagicUI components. Production-ready templates for your next project.',
  keywords: [
    'SaaS templates',
    'Shadcn/ui',
    'Aceternity UI',
    'MagicUI',
    'React components',
    'Next.js templates',
    'UI components',
    'dashboard templates',
    'landing page templates',
    'TypeScript templates',
    'Radix UI',
    'Tailwind CSS'
  ],
  authors: [{ name: 'SaaS Showcase' }],
  creator: 'SaaS Showcase',
  publisher: 'SaaS Showcase',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saasup.me',
    siteName: 'SaaS Showcase',
    title: 'SaaS Showcase - Premium UI Components Library',
    description: 'A comprehensive showcase featuring 6 amazing SaaS demo pages combining Shadcn/ui, Aceternity UI, and MagicUI components',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SaaS Showcase - 6 Premium Demo Pages',
        type: 'image/png',
      }
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Showcase - Premium UI Components',
    description: 'A comprehensive showcase featuring 6 amazing SaaS demo pages',
    images: ['/twitter-image.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Additional
  category: 'technology',
  alternates: {
    canonical: 'https://saasup.me',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PFLBBKLM');`}
        </Script>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFLBBKLM"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CookieConsentProvider />
          <SkipToContent />
          <Navbar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
