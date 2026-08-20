import type { Metadata } from 'next'
import { Header } from '@/components/mauli/header'
import { Services } from '@/components/mauli/services'
import { Footer } from '@/components/mauli/footer'
import { FloatingActions } from '@/components/mauli/floating-actions'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
      'Get in touch with Mauli Wealth — call, WhatsApp, email, or find us on Instagram.',
  alternates: { canonical: 'https://www.mauliwealth.com/services' },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
