import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import AmbientLine from './AmbientLine'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const rotatingWords = [
  'GROWTH.',
  'DEVELOP.',
  'PROGRESS.',
  'MOMENTUM.',
  'SCALE.'
] as const

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  
  // Fast mechanical typewriter state
  const [displayedText, setDisplayedText] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText('GROWTH.')
      return
    }

    let timer: ReturnType<typeof setTimeout>

    // Delay typewriter start by 2.6s so initial hero choreography establishes
    if (!hasStarted) {
      timer = setTimeout(() => {
        setHasStarted(true)
      }, 2600)
      return () => clearTimeout(timer)
    }

    const currentWord = rotatingWords[wordIndex]

    if (!isDeleting) {
      // Fast mechanical typing: ~42ms per character
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, 42)
      } else {
        // Hold word for ~1300ms before deletion
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 1300)
      }
    } else {
      // Fast reverse deletion: ~24ms per character (faster than typing)
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1))
        }, 24)
      } else {
        // Advance immediately to next word after full deletion
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
      }
    }

    return () => clearTimeout(timer)
  }, [shouldReduceMotion, hasStarted, displayedText, isDeleting, wordIndex])

  // ---------------------------------------------------------------------------
  // POINTER PARALLAX (Desktop only, max 8-10px)
  // ---------------------------------------------------------------------------
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 60, mass: 0.5 }
  const smoothImageX = useSpring(mouseX, springConfig)
  const smoothImageY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const normX = (e.clientX / innerWidth) - 0.5
      const normY = (e.clientY / innerHeight) - 0.5
      mouseX.set(normX * 10)
      mouseY.set(normY * 8)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // ---------------------------------------------------------------------------
  // SCROLL RESPONSE — Camera Movement as Hero Scrolls Out
  // ---------------------------------------------------------------------------
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Subtle camera movement: scale 1.06 -> 1.00 -> 0.98, opacity 1 -> 0.85
  const scrollImageScale = useTransform(scrollYProgress, [0, 1], [1.0, 0.98])
  const scrollImageOpacity = useTransform(scrollYProgress, [0, 1], [1.0, 0.85])
  const scrollImageY = useTransform(scrollYProgress, [0, 1], [0, 32])
  const scrollTextY = useTransform(scrollYProgress, [0, 1], [0, -32])
  const scrollMetadataOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.5])

  const combinedImageY = useTransform(
    [smoothImageY, scrollImageY],
    ([my, sy]) => (Number(my) || 0) + (Number(sy) || 0)
  )

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden"
    >
      
      {/* ----------------------------------------------------------------------- */}
      {/* CINEMATIC PHOTOGRAPHIC FIELD (ART DIRECTION ASSET: hero_cinematic.jpg)  */}
      {/* Expansive composition retaining person, desk, laptop, lamp, city lights */}
      {/* ----------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 1.06, opacity: 0.4 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ duration: 2.0, ease: EASE_EDITORIAL }}
          style={{
            x: shouldReduceMotion ? 0 : smoothImageX,
            y: shouldReduceMotion ? 0 : combinedImageY,
            scale: shouldReduceMotion ? 1 : scrollImageScale,
            opacity: shouldReduceMotion ? 1 : scrollImageOpacity,
          }}
          className="absolute -inset-[2%] w-[104%] h-[104%] will-change-transform"
        >
          <img 
            src="/hero_cinematic.jpg" 
            alt="Dark editorial studio workspace with a laptop, technical drawings, desk lamp, and founder working at a desk."
            className="w-full h-full object-cover object-[center_right_6%] md:object-[60%_center] lg:object-[center_right_4%]"
          />
        </motion.div>

        {/* Directional Vignettes & Gradient Masks: Balanced for environment + text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] from-15% via-[#0B0B0B]/88 md:via-[#0B0B0B]/72 via-55% to-transparent w-full md:w-[62%] lg:w-[56%] z-10" />
        <div className="absolute bottom-0 inset-x-0 h-48 md:h-36 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-transparent z-10" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent z-10" />
      </div>

      {/* Top Spacer corresponding to Fixed Navigation */}
      <div className="w-full h-16 sm:h-20 pointer-events-none shrink-0" />

      {/* ----------------------------------------------------------------------- */}
      {/* EDITORIAL HERO CORE (100% REAL SELECTABLE HTML / STAGGERED REVEALS)    */}
      {/* ----------------------------------------------------------------------- */}
      <motion.div 
        style={{
          y: shouldReduceMotion ? 0 : scrollTextY,
        }}
        className="relative z-20 w-full px-6 sm:px-10 lg:px-16 my-auto py-8 sm:py-12"
      >
        <div className="max-w-[1520px] mx-auto">
          
          {/* Studio Metadata Marker with Recurring Brand Signature */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 0.3 }}
            className="flex items-center gap-3 mb-5 sm:mb-7 text-[11px] font-mono uppercase tracking-[0.22em] text-[#A7A39B]"
          >
            <span className="text-[#FF4D2E] font-semibold text-[13px] leading-none">+</span>
            <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
            <span>VALUME / INDEPENDENT STUDIO</span>
          </motion.div>

          {/* Monumental Headline with Dynamic Rotating Wordmark */}
          <h1 
            className="display-headline text-[#F1EEE7] max-w-full"
            aria-label="We build the systems behind growth."
          >
            
            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: '105%' }}
                animate={{ opacity: 1, y: '0%' }}
                transition={{ duration: 0.95, ease: EASE_EDITORIAL, delay: 0.45 }}
                className="block will-change-transform"
              >
                WE BUILD
              </motion.span>
            </div>

            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: '105%' }}
                animate={{ opacity: 1, y: '0%' }}
                transition={{ duration: 0.95, ease: EASE_EDITORIAL, delay: 0.62 }}
                className="block will-change-transform"
              >
                THE SYSTEMS
              </motion.span>
            </div>

            <div className="overflow-hidden py-0.5 flex flex-wrap items-baseline gap-x-3 sm:gap-x-5">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: '105%' }}
                animate={{ opacity: 1, y: '0%' }}
                transition={{ duration: 0.95, ease: EASE_EDITORIAL, delay: 0.80 }}
                className="inline-block will-change-transform"
              >
                BEHIND
              </motion.span>

              {/* Dynamic Word Container with Reserved Stable Width */}
              <span 
                aria-hidden="true"
                className="inline-block relative align-baseline min-w-[6.2ch] sm:min-w-[7.2ch] lg:min-w-[8ch] h-[1.12em]"
              >
                <span className="text-[#FF4D2E] font-editorial-serif italic font-normal inline-block whitespace-nowrap">
                  {shouldReduceMotion ? 'GROWTH.' : (displayedText || '\u00A0')}
                </span>
              </span>
            </div>

          </h1>

          {/* Supporting Copy & CTA Block (Reveals @ 1.05s, 1.20s) */}
          <div className="mt-7 sm:mt-10 max-w-sm sm:max-w-xl lg:max-w-[620px]">
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASE_EDITORIAL, delay: 1.05 }}
              className="text-[16px] sm:text-[17.5px] lg:text-[18.5px] leading-[1.58] text-[#C2BFB8] font-sans font-normal max-w-[600px]"
            >
              Valume designs and builds lead generation systems, business automations, digital products, and custom software for businesses. We turn repetitive work, missed opportunities, and operational bottlenecks into practical systems that work with the way your business operates.
            </motion.p>

            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 1.20 }}
              className="mt-7 sm:mt-9 flex items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#F1EEE7] text-[#0B0B0B] hover:bg-[#FF4D2E] hover:text-white transition-colors duration-300 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-mono tracking-[0.14em] uppercase font-semibold active:translate-y-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E]"
              >
                <span>INITIATE PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
              </a>
            </motion.div>
          </div>

        </div>

        {/* Ambient Signal Line — Visible Signal Orange head gliding across dark image lower field */}
        <div className="max-w-[1520px] mx-auto mt-8 sm:mt-12 w-full">
          <AmbientLine 
            duration={5.8} 
            delay={0} 
            length="160px" 
            opacity={0.26} 
            className="w-full" 
          />
        </div>
      </motion.div>

      {/* ----------------------------------------------------------------------- */}
      {/* FACTUAL STUDIO BASELINE METADATA                                        */}
      {/* ----------------------------------------------------------------------- */}
      <motion.footer 
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85, ease: EASE_EDITORIAL, delay: 1.35 }}
        style={{
          opacity: shouldReduceMotion ? 1 : scrollMetadataOpacity,
        }}
        className="relative z-30 w-full px-6 sm:px-10 lg:px-16 pb-6 sm:pb-8 pt-4 border-t border-[#292824]/40 flex flex-row items-center justify-between text-[11px] font-mono tracking-[0.16em] uppercase text-[#A7A39B]"
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-[#F1EEE7]">VALUME / 2026</span>
          <span className="text-[#292824] hidden sm:inline">•</span>
          <span className="hidden sm:inline text-[#A7A39B]/70">LEAD GENERATION, BUSINESS AUTOMATION &amp; CUSTOM SOFTWARE</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-[#A7A39B]/80 font-mono">INDEPENDENT STUDIO</span>
        </div>
      </motion.footer>

    </section>
  )
}
