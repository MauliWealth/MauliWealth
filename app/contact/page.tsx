import type { Metadata } from 'next'
import { Header } from '@/components/mauli/header'
import { ContactHero } from '@/components/mauli/contact-hero'
import { Footer } from '@/components/mauli/footer'
import { FloatingActions } from '@/components/mauli/floating-actions'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Mauli Wealth — call, WhatsApp, email, or find us on Instagram.',
  alternates: { canonical: 'https://mauli-wealth.vercel.app/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
