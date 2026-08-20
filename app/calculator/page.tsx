import type { Metadata } from 'next'
import { Header } from '@/components/mauli/header'
import { Calculator } from '@/components/mauli/calculator'
import { Footer } from '@/components/mauli/footer'
import { FloatingActions } from '@/components/mauli/floating-actions'

export const metadata: Metadata = {
  title: 'Financial Calculator',
  description:
      'Get in touch with Mauli Wealth — call, WhatsApp, email, or find us on Instagram.',
  alternates: { canonical: 'https://www.mauliwealth.com/calculator' },
}

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main>
        <Calculator />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
