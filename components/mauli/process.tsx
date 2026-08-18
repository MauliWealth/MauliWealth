import { PhoneCall, Target, ListChecks, RefreshCcw } from 'lucide-react'
import { Reveal } from './reveal'
import { AscentLineStatic } from './ascent-line'

const STEPS = [
  {
    icon: PhoneCall,
    title: 'Discovery Conversation',
    body: 'We start by listening \u2014 your goals, timeline, income, and comfort with risk shape everything that follows.',
  },
  {
    icon: Target,
    title: 'Goal-Based Plan',
    body: 'Every goal \u2014 retirement, a home, your child\u2019s education \u2014 gets its own strategy, not a generic portfolio.',
  },
  {
    icon: ListChecks,
    title: 'Fund Selection & Setup',
    body: 'We shortlist suitable schemes, handle your KYC, and set up your SIP or lumpsum investment end-to-end.',
  },
  {
    icon: RefreshCcw,
    title: 'Ongoing Review',
    body: 'Markets move and life changes. We review your portfolio regularly and rebalance when it genuinely helps.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative bg-secondary/60">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            How It Works
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Your Investment Journey
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-16 sm:pl-20">
          <AscentLineStatic className="absolute left-[27px] top-2 bottom-2 w-[4px]" />

          <ol className="space-y-14">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-16 top-0 flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 bg-card text-accent-2 shadow-sm sm:-left-20">
                  <step.icon className="size-6" aria-hidden="true" />
                  <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-semibold text-accent-foreground">
                    {i + 1}
                  </span>
                </span>

                <Reveal delay={0.05}>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-7">
                    <h3 className="font-serif text-lg font-semibold text-primary sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
