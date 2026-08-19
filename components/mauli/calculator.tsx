'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { animate, motion, useMotionValue } from 'motion/react'
import {
  CalendarClock,
  Wallet,
  Heart,
  PiggyBank,
  GraduationCap,
} from 'lucide-react'
import { calculateLumpsum, calculateRequiredSip, calculateSip, formatINR } from '@/lib/finance'
import { Reveal } from './reveal'

type Mode = 'sip' | 'lumpsum' | 'marriage' | 'retirement' | 'education'

const MODE_CONFIG: Record<
  Mode,
  {
    label: string
    icon: typeof CalendarClock
    kind: 'forward' | 'goal'
    amountLabel: string
    min: number
    max: number
    step: number
    defaultAmount: number
    defaultYears: number
  }
> = {
  sip: {
    label: 'Monthly SIP',
    icon: CalendarClock,
    kind: 'forward',
    amountLabel: 'Monthly Investment',
    min: 500,
    max: 100000,
    step: 500,
    defaultAmount: 10000,
    defaultYears: 10,
  },
  lumpsum: {
    label: 'Lumpsum',
    icon: Wallet,
    kind: 'forward',
    amountLabel: 'Lumpsum Investment',
    min: 10000,
    max: 5000000,
    step: 10000,
    defaultAmount: 200000,
    defaultYears: 10,
  },
  marriage: {
    label: 'Marriage Planning',
    icon: Heart,
    kind: 'goal',
    amountLabel: 'Marriage Goal Amount',
    min: 100000,
    max: 20000000,
    step: 50000,
    defaultAmount: 2500000,
    defaultYears: 15,
  },
  retirement: {
    label: 'Retirement',
    icon: PiggyBank,
    kind: 'goal',
    amountLabel: 'Retirement Corpus Goal',
    min: 1000000,
    max: 100000000,
    step: 100000,
    defaultAmount: 20000000,
    defaultYears: 25,
  },
  education: {
    label: 'Child Education',
    icon: GraduationCap,
    kind: 'goal',
    amountLabel: 'Education Goal Amount',
    min: 100000,
    max: 20000000,
    step: 50000,
    defaultAmount: 3000000,
    defaultYears: 15,
  },
}

const MODES = Object.keys(MODE_CONFIG) as Mode[]

/** Picks a smaller type size as the formatted rupee string gets longer, so
 *  the headline number in the donut never spills outside the ring — even
 *  at the biggest slider values (e.g. a 30-year, ₹1L/month SIP at 18%). */
function amountFontClass(formatted: string): string {
  const len = formatted.length
  if (len <= 9) return 'text-lg sm:text-xl'
  if (len <= 11) return 'text-base sm:text-lg'
  if (len <= 13) return 'text-sm sm:text-base'
  return 'text-xs sm:text-sm'
}

function AnimatedAmount({ value, className }: { value: number; className?: string }) {
  const mv = useMotionValue(value)
  const [display, setDisplay] = useState(() => formatINR(value))

  useEffect(() => {
    const controls = animate(mv, value, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(formatINR(v)),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <span className={`font-mono tabular-nums ${className ?? ''}`}>{display}</span>
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  display: ReactNode
}) {
  const fillPct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <label className="text-sm font-medium text-foreground/85">{label}</label>
        <span className="font-mono text-base font-semibold tabular-nums text-accent-2">{display}</span>
      </div>
      <input
        type="range"
        className="mw-slider mt-3"
        style={{ ['--fill' as string]: `${fillPct}%` }}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
      />
    </div>
  )
}

export function Calculator() {
  const [mode, setMode] = useState<Mode>('sip')
  const config = MODE_CONFIG[mode]

  const [amount, setAmount] = useState(config.defaultAmount)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(config.defaultYears)

  // Re-seed amount & tenure with sensible defaults for the newly selected
  // calculator, while leaving the expected-return slider untouched.
  function handleModeChange(next: Mode) {
    setMode(next)
    setAmount(MODE_CONFIG[next].defaultAmount)
    setYears(MODE_CONFIG[next].defaultYears)
  }

  const forwardResult = useMemo(
    () => (mode === 'sip' ? calculateSip(amount, rate, years) : calculateLumpsum(amount, rate, years)),
    [mode, amount, rate, years]
  )
  const goalResult = useMemo(() => calculateRequiredSip(amount, rate, years), [amount, rate, years])

  const isGoal = config.kind === 'goal'
  const totalValue = isGoal ? goalResult.targetAmount : forwardResult.totalValue
  const investedAmount = isGoal ? goalResult.totalInvested : forwardResult.investedAmount
  const growthAmount = isGoal ? goalResult.totalGrowth : forwardResult.estimatedReturns

  const investedPct = totalValue > 0 ? (investedAmount / totalValue) * 100 : 100

  // Two-segment donut via stroke-dasharray/offset — invested (burgundy) + growth (gold).
  const radius = 64
  const circumference = 2 * Math.PI * radius
  const investedLen = (investedPct / 100) * circumference
  const returnsLen = circumference - investedLen

  return (
    <section id="calculator" className="relative overflow-hidden bg-secondary/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(55%_50%_at_50%_0%,color-mix(in_oklch,var(--accent)_14%,transparent),transparent)]"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            Plan Ahead
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            See Your Money Grow
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Illustrative projections for every stage of your financial journey — pick a goal to
            get started.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <div className="flex flex-wrap justify-center gap-2">
              {MODES.map((m) => {
                const Icon = MODE_CONFIG[m].icon
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handleModeChange(m)}
                    className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                      mode === m ? 'text-accent-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {mode === m && (
                      <motion.span
                        layoutId="calc-mode-pill"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-accent"
                      />
                    )}
                    <Icon className="relative size-3.5 shrink-0 sm:size-4" aria-hidden="true" />
                    <span className="relative">{MODE_CONFIG[m].label}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="space-y-8">
                <SliderField
                  label={config.amountLabel}
                  value={amount}
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  onChange={setAmount}
                  display={formatINR(amount)}
                />
                <SliderField
                  label="Expected Annual Return"
                  value={rate}
                  min={1}
                  max={18}
                  step={0.5}
                  onChange={setRate}
                  display={`${rate}%`}
                />
                <SliderField
                  label="Time Period"
                  value={years}
                  min={1}
                  max={35}
                  step={1}
                  onChange={setYears}
                  display={`${years} yr${years > 1 ? 's' : ''}`}
                />
              </div>

              <div className="flex flex-col items-center gap-8">
                <div className="relative shrink-0">
                  <svg viewBox="0 0 160 160" className="size-40 sm:size-48">
                    <circle cx="80" cy="80" r={radius} fill="none" stroke="var(--border)" strokeWidth="14" />
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      fill="none"
                      stroke="oklch(0.4 0.13 25)"
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={`${investedLen} ${circumference - investedLen}`}
                      strokeDashoffset={0}
                      transform="rotate(-90 80 80)"
                      className="transition-[stroke-dasharray] duration-700 ease-out"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      fill="none"
                      stroke="oklch(0.72 0.12 78)"
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={`${returnsLen} ${circumference - returnsLen}`}
                      strokeDashoffset={-investedLen}
                      transform="rotate(-90 80 80)"
                      className="transition-[stroke-dasharray,stroke-dashoffset] duration-700 ease-out"
                    />
                  </svg>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                      {isGoal ? 'Target Amount' : 'Total Value'}
                    </span>
                    <span
                      className={`mt-1 w-full font-semibold leading-tight text-primary ${amountFontClass(formatINR(totalValue))}`}
                    >
                      <AnimatedAmount value={totalValue} />
                    </span>
                  </div>
                </div>

                <dl className="w-full max-w-xs space-y-3">
                  {isGoal && (
                    <div className="flex items-center justify-between rounded-lg border border-accent/30 bg-accent/10 px-4 py-3">
                      <dt className="text-sm font-medium text-accent-foreground">
                        Required Monthly SIP
                      </dt>
                      <dd className="text-sm font-bold text-accent-foreground">
                        <AnimatedAmount value={goalResult.requiredMonthlySip} />
                      </dd>
                    </div>
                  )}
                  <div className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3">
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-2.5 rounded-full bg-accent-2" aria-hidden="true" />
                      {isGoal ? 'Total Invested' : 'Invested Amount'}
                    </dt>
                    <dd className="text-sm font-semibold text-primary">
                      <AnimatedAmount value={investedAmount} />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3">
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
                      {isGoal ? 'Total Growth' : 'Est. Returns'}
                    </dt>
                    <dd className="text-sm font-semibold text-primary">
                      <AnimatedAmount value={growthAmount} />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <p className="mt-10 border-t border-border pt-6 text-center text-xs leading-relaxed text-muted-foreground">
              This calculator is for illustrative purposes only and assumes a constant annual
              rate of return. Mutual fund investments are subject to market risk; actual returns
              will vary and are not guaranteed. Please read all scheme-related documents
              carefully before investing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
