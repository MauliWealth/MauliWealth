'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  className,
  y = 14,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Parent for a staggered group of children — pair with <StaggerItem>. */
export function Stagger({
  children,
  className,
  amount = 0.08,
}: {
  children: ReactNode
  className?: string
  amount?: number
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: amount, delayChildren: 0.05 } },
  }
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 14,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  const reduceMotion = useReducedMotion()
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
  }
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
