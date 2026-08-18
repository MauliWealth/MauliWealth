import { ShieldCheck, Eye, HeartHandshake } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './reveal'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'We uphold the highest ethical standards, ensuring our advice is always honest, objective, and dependable.',
    badgeClass: 'bg-primary text-primary-foreground',
  },
  {
    icon: Eye,
    title: 'Transparency',
    body: 'We believe in absolute clarity, keeping you fully informed about your investments with straightforward, open communication.',
    badgeClass: 'bg-accent-2 text-accent-2-foreground',
  },
  {
    icon: HeartHandshake,
    title: 'Client-First',
    body: 'Your financial well-being is our highest priority. We align every solution with your unique goals and best interests.',
    badgeClass: 'bg-accent text-accent-foreground',
  },
]

export function CoreValues() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            💎 What Guides Us
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Core Values &amp; Integrity
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-8 md:grid-cols-3" amount={0.1}>
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="h-full rounded-xl border border-border bg-card p-8 shadow-sm">
                <span
                  className={`flex size-12 items-center justify-center rounded-full ${value.badgeClass}`}
                >
                  <value.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
