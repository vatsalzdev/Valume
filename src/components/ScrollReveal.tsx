import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useReducedMotion, type MotionValue } from 'motion/react'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

interface ScrollRevealChunkProps {
  progress?: MotionValue<number>
  index: number
  total: number
  children: React.ReactNode
  className?: string
  yOffset?: number
}

/**
 * Editorial scroll-reveal chunk adhering to Phase 08 specifications:
 * - opacity 0 → 1
 * - y 18 → 0 (10px on mobile)
 * - Duration: 650ms, Ease: [0.16, 1, 0.3, 1]
 * - Latching once: true behavior — once revealed, IT STAYS.
 * - Never fades back out when scrolling upward.
 */
export function ScrollRevealChunk({
  progress,
  index,
  total,
  children,
  className = '',
  yOffset,
}: ScrollRevealChunkProps) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -6% 0px" })
  const [hasRevealed, setHasRevealed] = useState(false)
  const [effectiveY, setEffectiveY] = useState(yOffset ?? 18)

  useEffect(() => {
    if (yOffset !== undefined) {
      setEffectiveY(yOffset)
    } else {
      setEffectiveY(window.innerWidth < 640 ? 10 : 18)
    }
  }, [yOffset])

  // Latch reveal when section scroll progress advances
  useEffect(() => {
    if (hasRevealed || !progress) return
    const start = total <= 1 ? 0 : (index / (total - 1)) * 0.75
    const threshold = Math.min(start + 0.15, 0.95)
    
    // Check initial value
    if (progress.get() >= threshold) {
      setHasRevealed(true)
      return
    }

    const unsubscribe = progress.on('change', (v) => {
      if (v >= threshold) {
        setHasRevealed(true)
      }
    })
    return () => unsubscribe()
  }, [progress, index, total, hasRevealed])

  // Also latch reveal when component enters viewport directly
  useEffect(() => {
    if (isInView && !hasRevealed) {
      const delay = Math.min(index * 70, 300)
      const timer = setTimeout(() => {
        setHasRevealed(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, hasRevealed, index])

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: effectiveY }}
      animate={hasRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: effectiveY }}
      transition={{ duration: 0.65, ease: EASE_EDITORIAL }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}
