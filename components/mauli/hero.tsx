import { ShieldCheck, TrendingUp, Landmark, Users, Repeat } from 'lucide-react'
import { Reveal } from './reveal'
import { AscentLineOnLoad } from './ascent-line'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* A soft, fixed glow for warmth and depth — static, not animated. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--accent)_16%,transparent),transparent)]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-[10%] mx-auto max-w-4xl px-6 opacity-[0.4] sm:top-[14%] sm:px-8 sm:opacity-[0.5]">
        <AscentLineOnLoad className="h-24 w-full sm:h-40 lg:h-52" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Reveal>
          <span className="inline-flex max-w-full items-center gap-2 text-balance rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-foreground sm:text-sm">
            <ShieldCheck className="size-4 shrink-0 text-accent-2" aria-hidden="true" />
            AMFI Registered Mutual Fund Distributor
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl lg:text-6xl">
            Secure Your Future with <span className="text-accent-2">Strategic Wealth Creation</span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Expert guidance for disciplined investing and long-term financial stability — goal by
            goal, review by review.
          </p>
        </Reveal>

        <Reveal delay={0.17}>
          <p className="mt-5 text-sm font-medium text-accent-2">
            Founded and personally led by Vikas Parab, MBA Finance
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-base"
            >
              <TrendingUp className="size-4" aria-hidden="true" />
              Start Investing
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-secondary sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-14 grid w-full max-w-xl grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-3 sm:gap-4">
            {[
              { icon: Landmark, label: 'AUM Managed', value: '5 Cr+' },
              { icon: Users, label: 'Happy Clients', value: '250+' },
              { icon: Repeat, label: 'Monthly SIP Book', value: '12 L+' },
            ].map((chip) => (
              <span
                key={chip.label}
                className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
              >
                <chip.icon className="size-5 shrink-0 text-accent-2" aria-hidden="true" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="font-mono text-lg font-bold text-accent-2 sm:text-xl">
                    {chip.value}
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">{chip.label}</span>
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
