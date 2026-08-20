import Image from 'next/image'
import { GraduationCap, ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'

// Once a real photo of the founder is available, drop it in /public (e.g.
// "/founder.jpg") and set the path below — the card will use it instead of
// the initials avatar automatically.
const FOUNDER_PHOTO: string | undefined = undefined

export function About() {
  return (
    <section id="about" className="relative bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            Who We Are
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            About Mauli Wealth
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-[linear-gradient(155deg,var(--accent-2)_0%,color-mix(in_oklch,var(--accent)_55%,black_30%)_100%)] p-8 shadow-lg sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-white/10 blur-2xl"
              />
              <div className="relative flex flex-col items-center text-center">
                {FOUNDER_PHOTO ? (
                  <Image
                    src={FOUNDER_PHOTO}
                    alt="Vikas Deepak Parab"
                    width={160}
                    height={160}
                    className="size-28 rounded-full border-4 border-accent/60 object-cover shadow-md sm:size-32"
                  />
                ) : (
                  <span className="flex size-28 items-center justify-center rounded-full border-2 border-accent/60 bg-white/10 font-serif text-3xl font-semibold text-accent sm:size-32 sm:text-4xl">
                    VP
                  </span>
                )}
                <p className="mt-5 font-serif text-lg font-semibold text-white sm:text-xl">
                  Vikas Deepak Parab
                </p>
                <p className="text-sm text-white/70">Founder, Mauli Wealth</p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    <GraduationCap className="size-3.5" aria-hidden="true" />
                    MBA Finance
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    <ShieldCheck className="size-3.5" aria-hidden="true" />
                    AMFI Registered Mutual Fund Distributor
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Founded by Mr. Vikas Deepak Parab (MBA, Finance), Mauli Wealth empowers individuals
              to make informed financial decisions and achieve long-term prosperity.
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              What began as a specialized mutual fund distribution firm has evolved into a
              comprehensive financial solutions provider, offering Health Insurance (Mediclaim),
              Life Insurance, and Loan Assistance — all under one roof.
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We celebrate the uniqueness of every investor. By thoroughly understanding your
              specific goals, risk appetite, and life circumstances, we design personalized
              investment strategies crafted exclusively for you.
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our mission is to foster a financially literate society through disciplined
              investing, absolute transparency, and dedicated guidance at every step of your
              financial journey.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
