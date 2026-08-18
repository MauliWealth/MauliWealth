'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'

const FAQS = [
  {
    q: 'What exactly is a SIP?',
    a: 'A Systematic Investment Plan (SIP) lets you invest a fixed amount in a mutual fund scheme at regular intervals \u2014 usually monthly \u2014 instead of investing a large sum at once. It builds discipline and averages your purchase cost over time.',
  },
  {
    q: 'How much money do I need to start investing?',
    a: 'Most SIPs can be started with as little as \u20b9500 a month. There\u2019s no need to wait for a large sum \u2014 you can always increase your investment as your income grows.',
  },
  {
    q: 'Is investing through a distributor safe?',
    a: 'Mauli Wealth is an AMFI Registered Mutual Fund Distributor. Your investments are held directly in your name with the respective fund houses (AMCs) and registrars \u2014 we facilitate and advise, but your money is never routed through us.',
  },
  {
    q: 'What documents do I need to get started?',
    a: 'You\u2019ll need a completed KYC (PAN, address proof, and a photograph), plus your bank account details for the mandate used to debit your SIP or lumpsum investment. We\u2019ll guide you through the entire process.',
  },
  {
    q: 'Can I withdraw my money anytime?',
    a: 'Most open-ended mutual funds (barring ELSS, which has a 3-year lock-in) allow you to redeem your units on any business day. Do note that some schemes may charge a small exit load if redeemed within a short period.',
  },
  {
    q: 'How is a mutual fund different from a fixed deposit?',
    a: 'A fixed deposit offers a pre-set interest rate with capital protection, while mutual funds invest in market-linked instruments and returns are not fixed or guaranteed \u2014 they carry market risk but have historically offered the potential for higher long-term growth.',
  },
]

function FaqJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  const panelId = useId()
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-serif text-base font-medium text-foreground sm:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-accent"
        >
          <Plus className="size-4" aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-pretty leading-relaxed text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background">
      <FaqJsonLd />
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            Common Questions
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
