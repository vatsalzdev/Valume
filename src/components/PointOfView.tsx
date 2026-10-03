import { useRef } from 'react'
import { motion, useInView, useReducedMotion, useScroll } from 'motion/react'
import { ScrollRevealChunk } from './ScrollReveal'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

export default function PointOfView() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-12% 0px" })
  const shouldReduceMotion = useReducedMotion()

  // Section-specific scroll progress for segmented editorial reveals
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "center 0.45"]
  })

  return (
    <section 
      id="thesis"
      ref={sectionRef}
      className="relative w-full bg-[#080808] text-[#F1EEE7] flex flex-col justify-center py-16 sm:py-20 lg:py-22 px-6 sm:px-10 lg:px-16 border-t border-[#292824]/40 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* ----------------------------------------------------------------------- */}
      {/* ARCHITECTURAL BLUEPRINT (SIMPLIFIED PER PHASE 08B SPECIFICATION)         */}
      {/* One main path + visible traveling orange signal + central node           */}
      {/* ----------------------------------------------------------------------- */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] sm:w-[840px] lg:w-[1080px] h-[680px] sm:h-[860px] pointer-events-none select-none z-0 translate-x-[20%] sm:translate-x-[15%] lg:translate-x-[6%] opacity-65">
        <svg 
          viewBox="0 0 1100 880" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Subtle Grid Guidelines */}
          <g stroke="#1A1916" strokeWidth="0.7">
            <line x1="180" y1="40" x2="180" y2="840" />
            <line x1="520" y1="40" x2="520" y2="840" />
            <line x1="840" y1="40" x2="840" y2="840" />
            <line x1="1040" y1="40" x2="1040" y2="840" />
            <line x1="100" y1="180" x2="1080" y2="180" />
            <line x1="100" y1="520" x2="1080" y2="520" />
          </g>

          {/* Central Concentric Ring */}
          <circle cx="840" cy="520" r="180" stroke="#1A1916" strokeWidth="0.75" />
          <circle cx="840" cy="520" r="80" stroke="#252420" strokeWidth="0.75" strokeDasharray="3 6" />

          {/* MAIN CONDUIT PATH (Static Track) */}
          <path
            d="M 180 180 L 520 180 L 700 360 L 840 520 L 840 220 L 1040 220"
            stroke="#262521"
            strokeWidth="1.2"
            fill="none"
          />

          {/* TRAVELING SIGNAL: Signal Orange pulse moving along the main path */}
          {!shouldReduceMotion && (
            <motion.path
              d="M 180 180 L 520 180 L 700 360 L 840 520 L 840 220 L 1040 220"
              stroke="#FF4D2E"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0.18, pathOffset: -0.18 }}
              animate={isInView ? {
                pathOffset: [-0.18, 1.1]
              } : {}}
              transition={{
                duration: 5.8,
                delay: 2.4,
                ease: [0.25, 0.1, 0.25, 1],
                repeat: Infinity,
                repeatDelay: 1.6
              }}
            />
          )}

          {/* SECONDARY FEEDBACK PATH (Static Restrained Loop) */}
          <path
            d="M 840 520 L 980 520 L 1040 600 L 1040 740 L 840 740 L 680 620"
            stroke="#22211E"
            strokeWidth="0.9"
            strokeDasharray="4 6"
            fill="none"
          />

          {/* CENTRAL NODE // VALUME CORE */}
          <motion.g 
            transform="translate(840, 520)"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.g
              style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
              animate={isInView && !shouldReduceMotion ? {
                scale: [1, 1.08, 1],
                opacity: [0.8, 1, 0.8]
              } : { scale: 1, opacity: 1 }}
              transition={{
                duration: 4.5,
                ease: "easeInOut",
                repeat: Infinity
              }}
            >
              <rect x="-14" y="-14" width="28" height="28" transform="rotate(45)" fill="#080808" stroke="#FF4D2E" strokeWidth="1.2" />
              <circle r="4" fill="#FF4D2E" />
            </motion.g>

            <text x="24" y="4" fill="#F1EEE7" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.22em">
              VALUME CORE
            </text>
          </motion.g>

          {/* Start and End Terminal Dots */}
          <circle cx="180" cy="180" r="3" fill="#A7A39B" opacity="0.6" />
          <circle cx="1040" cy="220" r="3.5" fill="#F1EEE7" opacity="0.8" />

        </svg>
      </div>

      {/* ----------------------------------------------------------------------- */}
      {/* EDITORIAL CONTENT SPREAD                                                */}
      {/* ----------------------------------------------------------------------- */}
      <div className="relative z-10 max-w-[1520px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Section Marker (Compact + 02 / THESIS only) */}
          <div className="lg:col-span-3 flex flex-col justify-between pt-2">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
            >
              <h2 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#A7A39B]">
                <span className="text-[#FF4D2E] font-semibold text-[13px] leading-none">+</span>
                <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
                <span>02 / THE THESIS</span>
              </h2>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Statement & Supporting Rationale (Columns 4–12) */}
          <div className="lg:col-span-9 flex flex-col">
            
            {/* THE CENTRAL STATEMENT — Refined Editorial Hierarchy */}
            <div className="font-display">
              
              {/* STANZA 01: The Calm Editorial Premise */}
              <div className="text-[clamp(1.6rem,3.2vw,3.25rem)] text-[#A7A39B] font-light leading-[1.18] tracking-tight flex flex-col gap-1">
                <ScrollRevealChunk progress={scrollYProgress} index={0} total={4}>
                  Most businesses
                </ScrollRevealChunk>
                <ScrollRevealChunk progress={scrollYProgress} index={1} total={4}>
                  don't need more tools.
                </ScrollRevealChunk>
              </div>

              {/* STANZA 02: Generous Breathing Room → The Decisive Commercial Conclusion */}
              <div className="mt-6 sm:mt-8 lg:mt-10 text-[clamp(2.25rem,4.8vw,4.85rem)] font-medium leading-[1.02] tracking-tighter text-[#F1EEE7] flex flex-col gap-1">
                <ScrollRevealChunk progress={scrollYProgress} index={2} total={4}>
                  They need
                </ScrollRevealChunk>

                {/* "BETTER SYSTEMS." — The Conclusion */}
                <ScrollRevealChunk progress={scrollYProgress} index={3} total={4} className="text-[#F1EEE7]">
                  <span className="text-[#FF4D2E] font-editorial-serif italic font-normal inline-block mr-2 sm:mr-3">
                    better
                  </span>
                  <span>systems.</span>
                </ScrollRevealChunk>
              </div>

            </div>

            {/* SUPPORTING RATIONALE PARAGRAPH (Separated by whitespace, NO horizontal divider) */}
            <div className="mt-8 sm:mt-10 max-w-2xl lg:max-w-[680px]">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease: EASE_EDITORIAL, delay: 0.25 }}
              >
                <p className="text-[16.5px] sm:text-[18px] lg:text-[19.5px] leading-[1.55] text-[#C2BFB8] font-sans font-normal max-w-[660px]">
                  Valume helps businesses identify where leads, time, and revenue are being lost, then designs and builds the systems to fix those problems.
                </p>

                {/* Operational Disciplines Marker */}
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] font-mono tracking-[0.16em] uppercase text-[#C2BFB8]/90">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                    LEAD GENERATION
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                    BUSINESS AUTOMATION
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                    DIGITAL PRODUCTS
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                    CUSTOM SOFTWARE
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
