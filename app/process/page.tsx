import type { Metadata } from 'next'
import { Header } from '@/components/mauli/header'
import { Process } from '@/components/mauli/process'
import { Footer } from '@/components/mauli/footer'
import { FloatingActions } from '@/components/mauli/floating-actions'

export const metadata: Metadata = {
  title: 'Our Process',
  description:
      'Learn about our step-by-step approach to helping you achieve your financial goals.',
  alternates: { canonical: 'https://www.mauliwealth.com/process' },
}

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <Process />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
