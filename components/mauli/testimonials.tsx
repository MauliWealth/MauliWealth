'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'motion/react'
import { ChevronDown, Star } from 'lucide-react'
import { Reveal } from './reveal'

type Testimonial = {
  name: string
  designation: string
  rating: number
  quote: string
  /** Path to a real client photo. Falls back to an initials avatar when
   *  not provided. */
  photo?: string
  initials: string
}

// The 3 featured testimonials shown first, on both mobile and desktop.
const FEATURED_TESTIMONIALS: Testimonial[] = [
  {
    photo: '/image_f200a3.png',
    initials: 'AV',
    name: 'Adv. Amol VK',
    designation: 'Advocate, LLB',
    rating: 5,
    quote:
      'Mauli Wealth, led by Mr. Vikas Parab, exemplifies excellence in investment advisory. With a research-driven approach and profound market understanding, Mr. Parab provided unwavering guidance during the volatile COVID period. The platform\u2019s integrity, transparency, and client-centric philosophy have been pivotal in securing my financial stability. I confidently recommend Mauli Wealth and Mr. Vikas Parab to individuals seeking a dependable and results-oriented financial partner.',
  },
  {
    photo: '/image_f20c07.jpg',
    initials: 'SB',
    name: 'Saurabh R. Bade',
    designation: '',
    rating: 5,
    quote:
      'I\u2019m very happy with the service and guidance provided by Mauli Wealth. The support has been helpful in making my mutual fund investment decisions.',
  },
  {
    initials: 'M.N.',
    name: 'Dr. Mansi Napanda',
    designation: 'M.B.B.S',
    rating: 5,
    quote:
      'My experience with Mauli Wealth has been very positive. As a new investor, I initially had very little understanding of how mutual funds work. Vikas explained everything in a simple and easy-to-understand way, which helped me feel more confident about starting my investment journey. The onboarding process was also very smooth and hassle-free. From completing the required formalities to starting my investment, I received proper guidance at every step. I truly appreciate the personal attention and support provided by Mauli Wealth.',
  },
]

// Revealed after "View More" is tapped (mobile) or shown directly alongside
// the featured three on desktop. Swap these for further real client
// feedback (with permission) as it comes in.
const MORE_TESTIMONIALS: Testimonial[] = [
  {
    initials: 'R.S.',
    name: 'Rohan S.',
    designation: 'Software Engineer',
    rating: 5,
    quote:
      'Patient and transparent from day one \u2014 every recommendation came with a clear "why", never just a sales pitch. My SIPs are finally aligned with actual goals.',
  },
  {
    initials: 'P.M.',
    name: 'Dr. Priya M.',
    designation: 'M.B.B.S.',
    rating: 5,
    quote:
      'I appreciated how everything was explained in plain language. No jargon, no pressure \u2014 just a clear plan I could actually understand and stick to.',
  },
  {
    initials: 'A.K.',
    name: 'Anand K.',
    designation: 'Business Owner',
    rating: 4,
    quote:
      'Regular check-ins made a real difference. It doesn\u2019t feel like a one-time transaction \u2014 more like someone is actually keeping an eye on my portfolio.',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? 'fill-accent text-accent' : 'fill-transparent text-border'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function TestimonialCard({ t, className = '' }: { t: Testimonial; className?: string }) {
  return (
    <div className={`flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm sm:p-7 ${className}`}>
      <Stars rating={t.rating} />
      <p className="mt-4 flex-1 overflow-y-auto text-pretty text-sm leading-relaxed text-muted-foreground">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        {t.photo ? (
          <Image
            src={t.photo}
            alt={t.name}
            width={44}
            height={44}
            className="size-11 shrink-0 rounded-full border border-border object-cover"
          />
        ) : (
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-serif text-sm font-semibold text-accent-foreground">
            {t.initials}
          </span>
        )}
        <div>
          <p className="text-sm font-semibold text-primary">{t.name}</p>
          {t.designation && <p className="text-xs text-muted-foreground">{t.designation}</p>}
        </div>
      </div>
    </div>
  )
}

const HEADER_OFFSET = 72 // px — clears the sticky site header

/** Mobile-only: pins the section and turns further vertical scroll into a
 *  horizontal reveal of the 3 featured testimonials, ending on a "View
 *  More" prompt. Scrolling past without tapping it simply unpins the
 *  section (plain CSS sticky behaviour — nothing to unwind in JS). Tapping
 *  it permanently swaps to a normal, natively-scrollable strip with every
 *  testimonial, so the scroll-jacking never re-engages.
 */
function MobileScrollJack() {
  const [expanded, setExpanded] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })
  const cardCount = FEATURED_TESTIMONIALS.length
  const rowWidthPct = cardCount * 100 // e.g. 300% for 3 cards
  const finalXPct = -((cardCount - 1) / cardCount) * 100 // e.g. -66.6667% of the row's own width
  const x = useTransform(scrollYProgress, [0, 0.8, 1], ['0%', `${finalXPct}%`, `${finalXPct}%`])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setShowButton(v > 0.78)
  })

  useEffect(() => {
    if (expanded) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [expanded])

  const allTestimonials = [...FEATURED_TESTIMONIALS, ...MORE_TESTIMONIALS]

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      {!expanded ? (
        <div ref={trackRef} style={{ height: '320vh' }} className="relative overflow-x-hidden">
          <div
            className="sticky overflow-hidden overscroll-x-none [touch-action:pan-y]"
            style={{ top: HEADER_OFFSET, height: `calc(100svh - ${HEADER_OFFSET}px)` }}
          >
            <div className="flex h-full items-center overflow-hidden">
              <motion.div style={{ x, width: `${rowWidthPct}%` }} className="flex">
                {FEATURED_TESTIMONIALS.map((t) => (
                  <div
                    key={t.name}
                    style={{ width: `${100 / cardCount}%` }}
                    className="shrink-0 px-4"
                  >
                    <TestimonialCard t={t} className="max-h-[65svh]" />
                  </div>
                ))}
              </motion.div>
            </div>

            <AnimatePresence>
              {showButton && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-x-0 bottom-6 flex justify-center px-4"
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg"
                  >
                    View More
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
              {FEATURED_TESTIMONIALS.map((t) => (
                <span key={t.name} className="size-1.5 rounded-full bg-border" aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {allTestimonials.map((t) => (
            <div key={t.name} className="w-[85%] shrink-0 snap-center">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function Testimonials() {
  const reduceMotion = useReducedMotion()
  const allTestimonials = [...FEATURED_TESTIMONIALS, ...MORE_TESTIMONIALS]

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            Client Stories
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            What Our Clients Say
          </h2>
        </Reveal>

        {/* Desktop: a plain grid, no scroll-jacking */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
          {allTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        {/* Mobile: pinned horizontal reveal, or a plain scroll strip when
            reduced motion is requested */}
        <div className="mt-10 lg:hidden">
          {reduceMotion ? (
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
              {allTestimonials.map((t) => (
                <div key={t.name} className="w-[85%] shrink-0 snap-center">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          ) : (
            <MobileScrollJack />
          )}
        </div>
      </div>
    </section>
  )
}