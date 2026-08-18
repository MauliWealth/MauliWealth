'use client'

import { Landmark, Users, Repeat } from 'lucide-react'
import { useInView, animate } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Reveal, Stagger, StaggerItem } from './reveal'

const STATS = [
  { icon: Landmark, value: 5, suffix: ' Cr+', label: 'Asset Under Management' },
  { icon: Users, value: 250, suffix: '+', label: 'Happy Clients' },
  { icon: Repeat, value: 12, suffix: ' Lakh+', label: 'Monthly SIP Book' },
]

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.1,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <p ref={ref} className="font-mono text-3xl font-semibold tabular-nums text-primary">
      {display}
      {suffix}
    </p>
  )
}

export function WelcomeStats() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            Welcome
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Welcome to Mauli Wealth
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Mauli Wealth is a trusted, AMFI Registered Mutual Fund Distributor committed to
            helping you make informed financial decisions. We believe every investor&apos;s
            journey is unique, and our personalized approach ensures your investments align with
            your goals, risk appetite, and life stage — building lasting wealth, one disciplined
            step at a time.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-14 grid max-w-2xl gap-10 sm:grid-cols-3" amount={0.12}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex flex-col items-center text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-accent/12">
                  <stat.icon className="size-6 text-accent-2" aria-hidden="true" />
                </span>
                <div className="mt-3">
                  <Counter to={stat.value} suffix={stat.suffix} />
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
