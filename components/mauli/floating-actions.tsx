'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { InstagramIcon } from './icons'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3 sm:right-6">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-md transition-colors hover:border-primary/30"
          >
            <ArrowUp className="size-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/918355960124"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" aria-hidden="true" fill="white" />
      </a>

      <a
        href="https://instagram.com/mauliwealth"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="flex size-12 items-center justify-center rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-white shadow-lg transition-transform hover:scale-105"
      >
        <InstagramIcon className="size-6" aria-hidden="true" />
      </a>
    </div>
  )
}
