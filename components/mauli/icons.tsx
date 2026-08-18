import type { SVGProps } from 'react'

/**
 * Simple line-art brand glyphs drawn to match lucide-react's visual style
 * (stroke-based, rounded caps) — lucide doesn't ship brand/social icons, so
 * these fill that gap without pulling in an extra icon-set dependency.
 */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M14 8.5h-1.5A1.5 1.5 0 0 0 11 10v1h3M11 11v7M9.5 14H14" />
    </svg>
  )
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <line x1="8" y1="10.5" x2="8" y2="16" />
      <circle cx="8" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16v-3.2a1.8 1.8 0 0 1 3.6 0V16" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16" />
    </svg>
  )
}
