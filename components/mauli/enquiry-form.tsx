'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { Send } from 'lucide-react'
import { Reveal } from './reveal'

export function EnquiryForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // No backend is wired up yet, so this opens the visitor's email client
    // with the enquiry pre-filled — swap for a form service or API route
    // later if you'd like silent, in-page submission.
    const subject = encodeURIComponent(`Investment enquiry from ${name || 'website visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`)
    window.location.href = `mailto:vikas122@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-2">
            Still Have Questions?
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Send Us an Enquiry
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tell us a little about your goals and we&apos;ll get back to you.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="cf-name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="cf-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cf-phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="10-digit mobile number"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cf-message" className="text-sm font-medium text-foreground">
                  What are you looking to invest in?
                </label>
                <textarea
                  id="cf-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Tell us a bit about your goals…"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:brightness-105 sm:w-auto"
            >
              <Send className="size-4" aria-hidden="true" />
              Send Enquiry
            </motion.button>
            {sent && (
              <p className="mt-3 text-xs text-muted-foreground">
                Opening your email app with this enquiry pre-filled…
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
