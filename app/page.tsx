import { Header } from '@/components/mauli/header'
import { Hero } from '@/components/mauli/hero'
import { Services } from '@/components/mauli/services'
import { Calculator } from '@/components/mauli/calculator'
import { Process } from '@/components/mauli/process'
import { WelcomeStats } from '@/components/mauli/welcome-stats'
import { Testimonials } from '@/components/mauli/testimonials'
import { ContactInfo } from '@/components/mauli/contact-info'
import { Footer } from '@/components/mauli/footer'
import { FloatingActions } from '@/components/mauli/floating-actions'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Calculator />
        <Process />
        <WelcomeStats />
        <Testimonials />
        <ContactInfo />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
