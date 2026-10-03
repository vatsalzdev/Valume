import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion, useScroll } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { ScrollRevealChunk } from './ScrollReveal'
import AmbientLine from './AmbientLine'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

interface CapabilityItem {
  id: string
  num: string
  title: string
  description: string
  image: string
  imageCaption: string
}

const capabilities: CapabilityItem[] = [
  {
    id: 'lead-generation-systems',
    num: '01',
    title: 'LEAD GENERATION SYSTEMS',
    description: "Systems that capture, qualify, and route potential customers so leads don't get lost between inquiry and follow-up.",
    image: '/images/capabilities/capability-lead-systems.jpg',
    imageCaption: 'Lead qualification and routing architecture'
  },
  {
    id: 'business-automation',
    num: '02',
    title: 'BUSINESS AUTOMATION',
    description: 'Automated workflows that reduce repetitive work across lead handling, scheduling, communication, and day-to-day business operations.',
    image: '/images/capabilities/capability-business-automation.jpg',
    imageCaption: 'Workflow orchestration and business automation'
  },
  {
    id: 'digital-products',
    num: '03',
    title: 'DIGITAL PRODUCTS',
    description: 'Customer-facing web applications, portals, and digital products built around a specific business model, workflow, or opportunity.',
    image: '/images/capabilities/capability-digital-products.jpg',
    imageCaption: 'Customer-facing digital products and web portals'
  },
  {
    id: 'custom-software',
    num: '04',
    title: 'CUSTOM SOFTWARE',
    description: 'Purpose-built software for operational problems that existing tools cannot solve efficiently.',
    image: '/images/capabilities/capability-custom-software.jpg',
    imageCaption: 'Purpose-built operational software'
  }
]

export default function Capabilities() {
  const [activeItem, setActiveItem] = useState<CapabilityItem>(capabilities[0])
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  // Section-specific scroll progress for staggered capability row reveals
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "center 0.35"]
  })

  // Track active capability as user scrolls past rows on desktop
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return

      const targetY = 220
      let closestItem: CapabilityItem | null = null
      let closestDist = Infinity

      for (const item of capabilities) {
        const el = document.getElementById(`capability-row-${item.id}`)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= targetY && rect.bottom >= targetY) {
            closestItem = item
            break
          }
          const dist = Math.abs(rect.top - targetY)
          if (dist < closestDist) {
            closestDist = dist
            closestItem = item
          }
        }
      }

      if (closestItem && closestDist < 350) {
        setActiveItem(closestItem)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="capabilities"
      ref={sectionRef}
      className="relative w-full bg-[#0B0B0B] text-[#F1EEE7] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-t border-[#292824] scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-[1520px] mx-auto w-full">
        
        {/* Section Header with Typographic Index Personality and Brand Signature */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: EASE_EDITORIAL }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-14"
        >
          <div className="lg:col-span-6">
            <h2 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#A7A39B]">
              <span className="text-[#FF4D2E] font-semibold text-[13px] leading-none">+</span>
              <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
              <span>03 / CAPABILITIES</span>
            </h2>
            <div className="mt-4 text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-medium tracking-tight text-[#F1EEE7]">
              WHAT WE BUILD.
            </div>
          </div>
          <div className="lg:col-span-6 flex lg:justify-end">
            <p className="max-w-lg text-[16px] sm:text-[17.5px] lg:text-[18.5px] text-[#C2BFB8] font-sans leading-[1.55]">
              We help businesses capture leads, automate repetitive operations, build customer-facing digital products, and develop custom software.
            </p>
          </div>
        </motion.div>

        {/* Ambient Signal Line — Visible Signal Orange head gliding across whitespace */}
        <div className="w-full my-6 sm:my-8">
          <AmbientLine 
            duration={6.5} 
            delay={1.1} 
            length="180px" 
            opacity={0.25} 
            className="w-full" 
          />
        </div>

        {/* Editorial True Two-Column Grid: 50% Left / 50% Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Main Typographic Directory Rows (50% Column, clean whitespace without repetitive borders) */}
          <div role="tablist" aria-label="Valume Capabilities Directory" className="flex flex-col">
            {capabilities.map((item, idx) => {
              const isActive = activeItem.id === item.id
              return (
                <ScrollRevealChunk
                  key={item.id}
                  progress={scrollYProgress}
                  index={idx}
                  total={capabilities.length}
                >
                  <div 
                    id={`capability-row-${item.id}`}
                    role="tab"
                    tabIndex={0}
                    aria-selected={isActive}
                    aria-label={`${item.num} ${item.title}`}
                    onMouseEnter={() => setActiveItem(item)}
                    onClick={() => setActiveItem(item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActiveItem(item)
                      }
                    }}
                    className={`group relative py-3.5 sm:py-4 lg:py-4.5 cursor-pointer transition-colors duration-250 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E] focus-visible:z-10 rounded-sm px-2 -mx-2 ${
                      isActive ? 'bg-[#050505]/60' : 'hover:bg-[#050505]/30'
                    }`}
                  >
                    <div className="flex flex-col gap-1.5">
                      {/* Top Row: Index Numeral */}
                      <div className="flex items-center">
                        <span className="text-xs sm:text-sm font-mono font-medium tracking-[0.2em] text-[#FF4D2E]">
                          {item.num}
                        </span>
                      </div>

                      {/* Monumental Capability Title (32-46px per spec) */}
                      <div className="flex items-center justify-between gap-4">
                        <motion.h3 
                          animate={shouldReduceMotion ? {} : { 
                            x: isActive ? 6 : 0 
                          }}
                          transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                          className={`text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.5rem] font-display font-medium tracking-tight leading-[1.08] transition-colors duration-250 ${
                            isActive ? 'text-[#F1EEE7]' : 'text-[#A7A39B]/85 group-hover:text-[#F1EEE7]'
                          }`}
                        >
                          {item.title}
                        </motion.h3>

                        <div className={`w-8 h-8 rounded-full border border-[#292824] flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isActive ? 'border-[#FF4D2E] text-[#FF4D2E] rotate-0 scale-105' : 'text-[#A7A39B] group-hover:border-[#A7A39B] -rotate-45'
                        }`}>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Description (17-18px per spec) */}
                      <div className="mt-0.5">
                        <p className="text-[16.5px] sm:text-[17px] lg:text-[17.5px] text-[#C2BFB8] font-sans leading-[1.5] max-w-[560px]">
                          {item.description}
                        </p>
                      </div>

                      {/* MOBILE ONLY (< 1024px): Active Dossier Accordion directly below active capability */}
                      <div className="lg:hidden">
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                            isActive
                              ? 'grid-rows-[1fr] opacity-100 pt-4 mt-2 border-t border-[#292824]/60'
                              : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="min-h-0 overflow-hidden">
                            {/* 4:3 Mobile Image Frame */}
                            <div className="relative w-full aspect-[4/3] max-h-[300px] bg-[#050505] border border-[#292824] overflow-hidden mb-2.5 shadow-lg">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
                              <span className="absolute top-2 left-2 text-[9px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
                              <span className="absolute top-2 right-2 text-[9px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
                            </div>
                            
                            <p className="text-xs font-mono text-[#A7A39B] tracking-wide py-1">
                              {item.imageCaption}
                            </p>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
              </ScrollRevealChunk>
            )
          })}
        </div>

          {/* RIGHT: DESKTOP STICKY DOSSIER (>= 1024px) */}
          <aside className="hidden lg:block relative">
            <div className="sticky top-[96px] xl:top-[104px] flex flex-col">
              
              {/* Dossier Visual Plate with AnimatePresence */}
              <div className="relative pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1.0, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01, y: -8 }}
                    transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
                    className="flex flex-col"
                  >
                    {/* Main Visual Image Wrapper: Genuine 4/3 Aspect Ratio */}
                    <div className="relative w-full aspect-[4/3] max-h-[580px] bg-[#050505] border border-[#292824] overflow-hidden group shadow-2xl">
                      <img 
                        src={activeItem.image} 
                        alt={activeItem.title}
                        className="w-full h-full object-cover object-center grayscale-[12%] contrast-[1.05] brightness-[0.96] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      
                      {/* Atmospheric Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Studio Precision Registration Marks */}
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
                    </div>

                    {/* Metadata Below Image */}
                    <div className="pt-3 pb-1">
                      <p className="text-xs font-mono text-[#A7A39B] tracking-wide">
                        {activeItem.imageCaption}
                      </p>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </aside>

        </div>

      </div>
    </section>
  )
}
