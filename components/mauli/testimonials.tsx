import Image from 'next/image'
import { Star } from 'lucide-react'
import { Reveal } from './reveal'

type Testimonial = {
  name: string
  designation: string
  rating: number
  quote: string
  /** Optional path to a real client photo (e.g. '/testimonials/rohan.jpg').
   *  Falls back to an initials avatar when not provided. */
  photo?: string
  initials: string
}

/**
 * Placeholder testimonials — swap these for real client feedback (with
 * their permission) before publishing. Add a `photo` path once real client
 * photos are available; until then, initials avatars are shown instead.
 */
const TESTIMONIALS: Testimonial[] = [
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

export function Testimonials() {
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

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-sm">
                <Stars rating={t.rating} />
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {t.photo ? (
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="size-11 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-serif text-sm font-semibold text-accent-foreground">
                      {t.initials}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.designation}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
