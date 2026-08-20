import type { Metadata } from 'next'
import { Header } from '@/components/mauli/header'
import { Faq } from '@/components/mauli/faq'
import { EnquiryForm } from '@/components/mauli/enquiry-form'
import { Footer } from '@/components/mauli/footer'
import { FloatingActions } from '@/components/mauli/floating-actions'

export const metadata: Metadata = {
  title: 'FAQs & Enquiry',
  description:
    'Find answers to common questions about SIPs, mutual funds, and KYC — or send Mauli Wealth a direct investment enquiry.',
  alternates: { canonical: 'https://www.mauliwealth.com/faq' },
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <Faq />
        <EnquiryForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
