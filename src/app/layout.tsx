import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ave Caipira em Foco',
  description:
    'Transforme suas ideias em landing pages profissionais que convertem. Nossa plataforma oferece templates modernos, otimização automática e analytics detalhados.',
  keywords: [
    'landing page',
    'conversão',
    'marketing digital',
    'templates',
    'analytics',
  ],
  authors: [{ name: 'LandingPro Team' }],
  creator: 'LandingPro',
  publisher: 'LandingPro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://landingpro.exemplo.com'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://landingpro.exemplo.com',
    title: 'Ave Caipira em Foco',
    description:
      'Transforme suas ideias em landing pages profissionais que convertem.',
    siteName: 'LandingPro',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LandingPro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ave Caipira em Foco',
    description:
      'Transforme suas ideias em landing pages profissionais que convertem.',
    images: ['/og-image.png'],
    creator: '@landingpro',
  },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
