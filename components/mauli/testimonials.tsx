'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useReducedMotion } from 'motion/react'
import { Star } from 'lucide-react'
import { Reveal } from './reveal'

type Testimonial = {
  name: string
  designation: string
  rating: number
  quote: string
  photo?: string
  initials: string
}

const FEATURED_TESTIMONIALS: Testimonial[] = [
  {
    photo: '/amol_vk_org.png',
    initials: 'AV',
    name: 'Adv. Amol VK',
    designation: 'Advocate, LLB',
    rating: 5,
    quote:
      'Mauli Wealth, led by Mr. Vikas Parab, exemplifies excellence in investment advisory. With a research-driven approach and profound market understanding, Mr. Parab provided unwavering guidance during the volatile COVID period. The platform’s integrity, transparency, and client-centric philosophy have been pivotal in securing my financial stability. I confidently recommend Mauli Wealth and Mr. Vikas Parab to individuals seeking a dependable and results-oriented financial partner.',
  },
  {
    photo: '/saurabh_org.png',
    initials: 'SB',
    name: 'Saurabh R. Bade',
    designation: '',
    rating: 5,
    quote:
      'I’m very happy with the service and guidance provided by Mauli Wealth. The support has been helpful in making my mutual fund investment decisions. Their proactive communication and dedication to wealth creation make them an outstanding partner for securing financial growth over the years.',
  },
  {
    initials: 'S.P.',
    name: 'Saee Parab',
    designation: '',
    rating: 5,
    quote:
      'Had a great experience with Mauli Wealth. The mutual fund products and features were explained clearly, with guidance aligned to my future financial goals and growth plans. Overall, a professional and well-planned approach.'
  },
  {
    initials: 'M.N.',
    name: 'Dr. Mansi Napanda',
    designation: 'M.B.B.S',
    rating: 5,
    quote:
      'My experience with Mauli Wealth has been very positive. As a new investor, I initially had very little understanding of how mutual funds work. Vikas explained everything in a simple and easy-to-understand way, which helped me feel more confident about starting my investment journey. The onboarding process was also very smooth and hassle-free. From completing the required formalities to starting my investment, I received proper guidance at every step. I truly appreciate the personal attention and support provided by the Mauli Wealth.',
  },
]

// const MORE_TESTIMONIALS: Testimonial[] = [
//   {
//     initials: 'S.P.',
//     name: 'Saee Parab',
//     designation: '',
//     rating: 5,
//     quote:
//       'Had a great experience with Mauli Wealth. The mutual fund products and features were explained clearly, with guidance aligned to my future financial goals and growth plans. Overall, a professional and well-planned approach.'
//   },
//   {
//     initials: 'P.M.',
//     name: 'Dr. Priya M.',
//     designation: 'M.B.B.S.',
//     rating: 5,
//     quote:
//       'I appreciated how everything was explained in plain language. No jargon, no pressure — just a clear plan I could actually understand and stick to.',
//   },
//   {
//     initials: 'A.K.',
//     name: 'Anand K.',
//     designation: 'Business Owner',
//     rating: 4,
//     quote:
//       'Regular check-ins made a real difference. It doesn’t feel like a one-time transaction — more like someone is actually keeping an eye on my portfolio.',
//   },
// ]

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
      {/* suppressHydrationWarning added here to prevent browser extension mismatches */}
      <p 
        suppressHydrationWarning 
        className="mt-4 flex-1 overflow-y-auto text-pretty text-sm leading-relaxed text-muted-foreground"
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
        {t.photo ? (
          <Image
            src={t.photo}
            alt={t.name}
            width={72}
            height={72}
            className="size-18 shrink-0 rounded-full border-2 border-border/50 object-cover shadow-sm"
          />
        ) : (
          <span className="flex size-18 shrink-0 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 font-serif text-base font-semibold text-accent-foreground shadow-sm">
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

// Helper: split array into pairs
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

/** Mobile carousel: two testimonials per slide, horizontally scrollable */
function MobileCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const pairs = chunkArray(testimonials, 2)

  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {pairs.map((pair, idx) => (
        <div key={idx} className="w-[85%] shrink-0 snap-center sm:w-[75%]">
          <div className="flex flex-col gap-4">
            {pair.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Testimonials() {
  const reduceMotion = useReducedMotion()
  const allTestimonials = [...FEATURED_TESTIMONIALS]
  // const allTestimonials = [...FEATURED_TESTIMONIALS, ...MORE_TESTIMONIALS]

  // State to track if the component has mounted on the client
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Prevent side-effects from rendering animations before React is fully mounted
  if (!isMounted) {
    return null 
  }

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

        {/* Desktop: plain grid */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
          {allTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        {/* Mobile: horizontal carousel with two per slide */}
        <div className="mt-10 lg:hidden">
          <MobileCarousel testimonials={allTestimonials} />
        </div>
      </div>
    </section>
  )
}