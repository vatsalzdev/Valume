import { motion, useReducedMotion } from 'motion/react'

interface AmbientLineProps {
  /** Total animation duration in seconds (5–8s per Phase 08B spec) */
  duration?: number
  /** Initial delay before animation starts (for staggered section rhythms) */
  delay?: number
  /** Pause between repeating loops (seconds) */
  repeatDelay?: number
  /** Overall container opacity (0.18–0.30 per spec) */
  opacity?: number
  /** Length of the traveling signal pulse (e.g. '140px', '200px') */
  length?: string
  /** Whether to show the base static track */
  showTrack?: boolean
  /** Custom CSS classes for positioning */
  className?: string
}

export default function AmbientLine({
  duration = 6.2,
  delay = 0,
  repeatDelay = 1.8,
  opacity = 0.25,
  length = '180px',
  showTrack = true,
  className = '',
}: AmbientLineProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div 
      className={`relative w-full h-[6px] flex items-center overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* 1. Base Static Track Line (Dark Gray Hairline) */}
      {showTrack && (
        <div 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#292824]"
          style={{ opacity: Math.max(opacity, 0.4) }}
        />
      )}

      {/* 2. Traveling Signal Pulse with Signal Orange Head (Phase 08B Spec) */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ left: '-25%' }}
          animate={{ left: ['-25%', '105%'] }}
          transition={{
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
            repeat: Infinity,
            repeatDelay,
          }}
          style={{ width: length }}
          className="absolute top-1/2 -translate-y-1/2 h-[2px] flex items-center"
        >
          {/* Signal Gradient Body */}
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF4D2E]/50 to-[#FF4D2E]" />

          {/* Signal Orange Glowing Head Dot: ───────────────● */}
          <div className="relative shrink-0 -ml-[1px]">
            <div className="w-2 h-2 rounded-full bg-[#FF4D2E] shadow-[0_0_10px_2px_rgba(255,77,46,0.85)]" />
          </div>
        </motion.div>
      )}
    </div>
  )
}
