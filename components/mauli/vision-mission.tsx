import { Eye, Compass } from 'lucide-react'
import { Reveal } from './reveal'

const ITEMS = [
  {
    icon: Eye,
    title: 'Our Vision',
    badgeClass: 'bg-accent/15 text-accent-foreground',
    body: 'To empower every Indian to achieve financial stability, prosperity, and long-term financial goals through disciplined investing and informed financial decisions.',
  },
  {
    icon: Compass,
    title: 'Our Mission',
    badgeClass: 'bg-accent-2 text-accent-2-foreground',
    body: 'To educate, guide, and handhold investors throughout their financial journey by providing trustworthy information, transparent service, and suitable mutual fund solutions aligned with their financial goals and needs.',
  },
]

export function VisionMission() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-border bg-card p-8 shadow-sm sm:p-10">
                <span className={`flex size-12 items-center justify-center rounded-full ${item.badgeClass}`}>
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
