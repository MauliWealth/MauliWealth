import Image from 'next/image'
import { GraduationCap, ShieldCheck, Award, ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const FOUNDER_PHOTO: string | undefined = "/founder.png"

export function About() {
  return (
    <section id="about" className="relative bg-background">
      {/* Subtle noise texture overlay (only on the card, but we'll put it inside the card) */}
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
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0 group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-[#faf7f0] p-[1px] shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              {/* Decorative accent bar on the left */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-accent via-accent-2 to-accent/40" />

              {/* Noise texture via SVG filter */}
              <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.03]">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="1" stitchTiles="stitch" />
                  <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.2 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>

              <div className="relative rounded-2xl bg-card/80 p-8 backdrop-blur-sm sm:p-10">
                {/* Subtle background glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-accent/5 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-accent-2/5 blur-3xl"
                />

                <div className="relative flex flex-col items-center text-center">
                  {/* Founder image with glow and hover scale */}
                  <div className="relative group/image">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-2/30 blur-2xl group-hover/image:blur-3xl transition-all duration-500" />
                    <div className="relative rounded-full border-2 border-accent p-1 shadow-lg transition-all duration-500 group-hover/image:scale-[1.03]">
                      <div className="rounded-full border-2 border-accent/30 p-1">
                        {FOUNDER_PHOTO ? (
                          <Image
                            src={FOUNDER_PHOTO}
                            alt="Vikas Deepak Parab"
                            width={220}
                            height={220}
                            className="size-44 rounded-full object-cover transition-all duration-500 group-hover/image:scale-[1.04] sm:size-52"
                          />
                        ) : (
                          <span className="flex size-44 items-center justify-center rounded-full bg-secondary font-serif text-5xl font-semibold text-accent-2 sm:size-52">
                            VP
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Decorative golden divider */}
                  <div className="mt-6 flex w-full max-w-[12rem] items-center justify-center gap-3">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                    <Award className="size-4 text-accent-2/80" />
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  </div>

                  <p className="mt-4 font-serif text-xl font-semibold tracking-wide text-primary sm:text-2xl">
                    Vikas Deepak Parab
                  </p>
                  <p className="text-sm font-medium tracking-widest text-muted-foreground/80 uppercase">
                    Founder, Mauli Wealth
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-foreground shadow-sm transition-all hover:bg-accent/10">
                      <GraduationCap className="size-3.5 text-accent-2" aria-hidden="true" />
                      MBA Finance
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-foreground shadow-sm transition-all hover:bg-accent/10">
                      <ShieldCheck className="size-3.5 text-accent-2" aria-hidden="true" />
                      AMFI Registered
                    </span>
                  </div>

                  {/* Connect button */}
                  <a
                    href="/contact"
                    className="group/btn mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-sm font-medium text-accent-2 transition-all hover:bg-accent hover:text-white hover:shadow-lg"
                  >
                    Let’s Connect
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
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