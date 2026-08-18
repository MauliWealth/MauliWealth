import {
  TrendingUp,
  CalendarClock,
  HeartPulse,
  ShieldPlus,
  Home,
  Car,
} from 'lucide-react'
import { Reveal } from './reveal'

const SERVICES = [
  {
    icon: TrendingUp,
    title: 'Mutual Fund',
    description: 'Curated fund portfolios designed to grow and protect your wealth over time.',
    badgeClass: 'bg-primary text-primary-foreground',
  },
  {
    icon: CalendarClock,
    title: 'SIP',
    description: 'Systematic Investment Plans that build disciplined, long-term wealth habits.',
    badgeClass: 'bg-accent-2 text-accent-2-foreground',
  },
  {
    icon: ShieldPlus,
    title: 'Term Insurance',
    description: 'Affordable life cover to safeguard your family\u2019s financial future.',
    badgeClass: 'bg-primary text-primary-foreground',
  },
  {
    icon: HeartPulse,
    title: 'Mediclaim',
    description: 'Comprehensive health insurance plans for you and your loved ones.',
    badgeClass: 'bg-accent-2 text-accent-2-foreground',
  },
  {
    icon: Home,
    title: 'Housing Loan / Car Loan',
    description: 'End-to-end assistance in securing the best loan terms for your needs.',
    badgeClass: 'bg-primary text-primary-foreground',
  },
  {
    icon: Car,
    title: 'Vehicle Insurance',
    description: 'Reliable coverage to keep you protected on every journey.',
    badgeClass: 'bg-accent-2 text-accent-2-foreground',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            What We Offer
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A complete suite of financial solutions, tailored to every stage of your journey.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-xl border border-border bg-card p-7 shadow-sm transition-colors hover:border-accent/40">
                <span className={`flex size-12 items-center justify-center rounded-full ${service.badgeClass}`}>
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
