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
    value: 'info@mauliwealth.com',
    href: 'mailto:info@mauliwealth.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bhayandar (East), Thane',
    href: "https://maps.app.goo.gl/f9D5e2q3Q5xYEYvF6",
  },
]

/** A compact, form-free contact strip for the home page — the full enquiry
 *  form and FAQ live on the dedicated /contact page. */
export function ContactInfo() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            Reach Us Directly
          </span>
          <h2 className="mt-3 text-balance font-serif text-2xl font-semibold text-primary sm:text-3xl">
            Get in Touch
          </h2>
        </Reveal>

        <Stagger className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {CONTACT_CARDS.map((card) => {
            const content = (
              <div className="flex h-full flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-colors hover:border-accent/40">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
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

        <Reveal delay={0.15} className="mx-auto mt-6 max-w-3xl space-y-3">
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
            href="https://www.instagram.com/mauli.wealth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] px-5 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <InstagramIcon className="size-5" aria-hidden="true" />
            Follow on Instagram
          </a>
        </Reveal>

        <p className="mx-auto mt-6 max-w-md text-center text-sm text-muted-foreground">
          Have a detailed question?{' '}
          <a href="/faq" className="font-medium text-accent-2 underline underline-offset-2">
            Browse our FAQs or send us an enquiry
          </a>
          .
        </p>
      </div>
    </section>
  )
}
