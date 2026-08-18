import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

const SITE_URL = 'https://mauli-wealth.vercel.app'
const SITE_NAME = 'Mauli Wealth'
const SITE_DESCRIPTION =
  'Mauli Wealth is an AMFI Registered Mutual Fund Distributor offering personalized guidance on Mutual Funds, SIP, Insurance, and Loans for long-term financial stability.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Strategic Wealth Creation & Mutual Fund Distribution`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Mauli Wealth',
    'mutual fund distributor',
    'SIP calculator',
    'AMFI registered',
    'wealth management India',
    'systematic investment plan',
    'mutual fund investment',
    'financial planning India',
  ],
  authors: [{ name: 'Vikas Deepak Parab' }],
  creator: SITE_NAME,
  generator: 'v0.app',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Strategic Wealth Creation & Mutual Fund Distribution`,
    description: SITE_DESCRIPTION,
    locale: 'en_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Strategic Wealth Creation & Mutual Fund Distribution`,
    description: SITE_DESCRIPTION,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon-light-32x32.png',
    apple: '/apple-icon.png',
    shortcut: '/logo-mark.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf8f4',
}

function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    founder: { '@type': 'Person', name: 'Vikas Deepak Parab' },
    address: { '@type': 'PostalAddress', addressLocality: 'Bhayandar (East), Thane', addressCountry: 'IN' },
    telephone: '+91-8355960124',
    email: 'info@mauliwealth.com',
    areaServed: 'IN',
    sameAs: ['https://www.instagram.com/mauli.wealth'],
    knowsAbout: [
      'Mutual Funds',
      'Systematic Investment Plans',
      'Term Insurance',
      'Mediclaim',
      'Loans',
    ],
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${plexMono.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        <OrganizationJsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
