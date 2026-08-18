/**
 * The site's signature motif: a line that climbs left-to-right, echoing
 * compounding growth. Rendered statically (no draw-in or scroll-linked
 * animation) — a quiet, fixed graphic rather than a moving one.
 */
export function AscentLineOnLoad({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 720 220" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 176 C 100 176, 140 118, 210 128 C 300 140, 314 66, 392 58 C 470 50, 488 112, 566 88 C 630 68, 654 34, 714 20"
        stroke="url(#ascent-gradient-load)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="714" cy="20" r="5.5" fill="oklch(0.72 0.12 78)" />
      <defs>
        <linearGradient id="ascent-gradient-load" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.4 0.13 25)" />
          <stop offset="100%" stopColor="oklch(0.72 0.12 78)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/** A static vertical rule used as the spine of the process timeline. */
export function AscentLineStatic({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 4 400" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
        <line x1="2" y1="0" x2="2" y2="400" stroke="var(--border)" strokeWidth="2" />
        <line x1="2" y1="0" x2="2" y2="400" stroke="url(#ascent-gradient-static)" strokeWidth="2" />
        <defs>
          <linearGradient id="ascent-gradient-static" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.4 0.13 25)" />
            <stop offset="100%" stopColor="oklch(0.72 0.12 78)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
