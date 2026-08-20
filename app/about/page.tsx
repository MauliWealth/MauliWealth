import type { Metadata } from 'next'
import { Header } from '@/components/mauli/header'
import { About } from '@/components/mauli/about'
import { VisionMission } from '@/components/mauli/vision-mission'
import { CoreValues } from '@/components/mauli/core-values'
import { Footer } from '@/components/mauli/footer'
import { FloatingActions } from '@/components/mauli/floating-actions'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Mauli Wealth, an AMFI Registered Mutual Fund Distributor founded by Vikas Deepak Parab (MBA Finance) — our vision, mission, and core values.',
  alternates: { canonical: 'https://www.mauliwealth.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <VisionMission />
        <CoreValues />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
