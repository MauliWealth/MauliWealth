import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { InstagramIcon } from './icons'
import { Reveal, Stagger, StaggerItem } from './reveal'

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: 'Call or WhatsApp',
    value: '+91 83559 60124',
    href: 'tel:+918355960124',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'vikas122@gmail.com',
    href: 'mailto:vikas122@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ramavtar Area',
    href: undefined,
  },
]

/** The lean "reach us" page — contact details and direct-chat links only.
 *  The enquiry form and FAQs live on the dedicated /faq page instead. */
export function ContactHero() {
  return (
    <section className="relative bg-secondary/60">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            Let&apos;s Talk
          </span>
          <h1 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Ready to Start Investing?
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Reach out any way that&apos;s convenient \u2014 no obligation, no pressure.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {CONTACT_CARDS.map((card) => {
            const content = (
              <div className="flex h-full flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-colors hover:border-accent/40">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <card.icon className="size-6" aria-hidden="true" />
                </span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {card.label}
                </p>
                <p className="font-medium text-foreground">{card.value}</p>
              </div>
            )
            return (
              <StaggerItem key={card.label}>
                {card.href ? (
                  <a href={card.href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-md space-y-3">
          <a
            href="https://wa.me/918355960124"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a
            href="https://instagram.com/mauliwealth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] px-5 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <InstagramIcon className="size-5" aria-hidden="true" />
            Follow on Instagram
          </a>
        </Reveal>

        <p className="mx-auto mt-8 max-w-md text-center text-sm text-muted-foreground">
          Have a question?{' '}
          <a href="/faq" className="font-medium text-accent-2 underline underline-offset-2">
            Browse our FAQs or send us an enquiry
          </a>
          .
        </p>
      </div>
    </section>
  )
}
