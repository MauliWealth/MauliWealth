import Image from 'next/image'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './icons'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Financial Calculator', href: '/#calculator' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
]

const SOCIAL_LINKS = [
  { icon: FacebookIcon, label: 'Facebook', href: undefined },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/mauli.wealth' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/918355960124',
  },
  { icon: LinkedinIcon, label: 'LinkedIn', href: undefined },
]

const COMPLIANCE_LINKS = [
  'Risk Factors',
  'Terms & Conditions',
  'SID/SAI/KIM',
  'Code of Conduct',
  'Investor Grievance Redressal',
  'Important Links',
  'SEBI Circulars',
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[linear-gradient(180deg,var(--secondary)_0%,color-mix(in_oklch,var(--secondary)_85%,var(--accent)_15%)_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="/" className="inline-flex items-center" aria-label="Mauli Wealth home">
              <Image
                src="/logo.png"
                alt="Mauli Wealth"
                width={1439}
                height={716}
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Welcome to Mauli Wealth, where we believe that every financial journey is personal
              and every goal deserves thoughtful guidance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent-2">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-accent-2">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent-2">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>Founder: Vikas Deepak Parab</li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-2" aria-hidden="true" />
                Bhayandar (East), Thane
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-accent-2" aria-hidden="true" />
                <a href="tel:+918355960124" className="hover:text-accent-2">
                  +91 8355960124
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-accent-2" aria-hidden="true" />
                <a href="mailto:info@mauliwealth.com" className="hover:text-accent-2">
                  info@mauliwealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-accent-2 transition-colors hover:border-accent-2/50 hover:text-primary"
            >
              <social.icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mt-10 space-y-3 border-t border-border pt-8 text-center">
          <p className="text-xs font-medium text-foreground/85">
            Mauli Wealth is an AMFI Registered Mutual Fund Distributor.{' '}
            <span className="font-mono">ARN - 162460</span> &nbsp;|&nbsp;{' '}
            <span className="font-mono">EUIN - 304458</span>
          </p>

          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-wide text-muted-foreground">
            {COMPLIANCE_LINKS.map((label, i) => (
              <span key={label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">|</span>}
                {label}
              </span>
            ))}
          </p>

          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Disclaimer: Mutual Fund investments are subject to market risks, read all scheme
            related documents carefully. The NAVs of the schemes may go up or down depending upon
            the factors and forces affecting the securities market including the fluctuations in
            the interest rates. The past performance of the mutual funds is not necessarily
            indicative of future performance of the schemes. Mauli Wealth is not guaranteeing or
            assuring any dividend under any of the schemes and the same is subject to the
            availability and adequacy of distributable surplus.
            All existing and prospective investors are advised to check and evaluate the Exit loads and 
            other cost structure (TER) applicable at the time of making the investment before finalizing 
            on any investment decision for Mutual Funds schemes. We deal in Regular Plans only for 
            Mutual Fund Schemes and earn a Trailing Commission on client investments. 
            Disclosure For Commission earnings is made to clients at the time of investments.
          </p>

          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Mauli Wealth makes no warranties or representations, express or implied, on products
            offered through this website. It accepts no liability for any damages or losses,
            however caused, in connection with the use of, or reliance on, its products or
            related services. Terms and conditions of the website are applicable. Investments in
            securities markets are subject to market risks, read all related documents carefully
            before investing.
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mauli Wealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
