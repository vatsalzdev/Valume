import { useRef } from 'react'
import { motion, useReducedMotion, useInView } from 'motion/react'
import AmbientLine from './AmbientLine'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const phases = [
  {
    num: '01',
    title: 'COMMERCIAL DECONSTRUCTION',
    desc: 'Map the business, identify bottlenecks, and find where leads, time, or revenue are being lost.',
  },
  {
    num: '02',
    title: 'SYSTEM FABRICATION',
    desc: 'Design and build the software, automation, integration, or digital product needed to solve the problem.',
  },
  {
    num: '03',
    title: 'DEPLOYMENT & CALIBRATION',
    desc: 'Deploy the system, test it against the real workflow, and refine it based on how the business actually operates.',
  }
]

export default function Methodology() {
  const shouldReduceMotion = useReducedMotion()

  // Individual phase refs for viewport-triggered reveals (each phase has its own trigger)
  const phase01Ref = useRef<HTMLDivElement>(null)
  const phase02Ref = useRef<HTMLDivElement>(null)
  const phase03Ref = useRef<HTMLDivElement>(null)

  const isPhase01InView = useInView(phase01Ref, {
    once: true,
    margin: "0px 0px -15% 0px"
  })

  const isPhase02InView = useInView(phase02Ref, {
    once: true,
    margin: "0px 0px -15% 0px"
  })

  const isPhase03InView = useInView(phase03Ref, {
    once: true,
    margin: "0px 0px -15% 0px"
  })

  const phaseConfigs = [
    { ...phases[0], ref: phase01Ref, isInView: isPhase01InView },
    { ...phases[1], ref: phase02Ref, isInView: isPhase02InView },
    { ...phases[2], ref: phase03Ref, isInView: isPhase03InView }
  ]

  return (
    <section 
      id="process"
      className="relative w-full bg-[#090909] text-[#F1EEE7] py-18 sm:py-22 lg:py-28 px-6 sm:px-10 lg:px-16 border-t border-[#292824] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-[1520px] mx-auto w-full">
        
        {/* Section Header: Printed Engineering Specification Sheet */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: EASE_EDITORIAL }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-14"
        >
          <div className="lg:col-span-8">
            <h2 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#A7A39B]">
              <span className="text-[#FF4D2E] font-semibold text-[13px] leading-none">+</span>
              <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
              <span>05 / PROCESS</span>
            </h2>
            <div className="mt-4 text-2xl sm:text-3xl lg:text-[2.35rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.12]">
              The problem comes first.<br />
              The technology comes second.
            </div>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <p className="max-w-md text-[16px] sm:text-[17px] lg:text-[18px] text-[#C2BFB8] font-sans leading-[1.55]">
              We map the business mechanics before writing software. Every phase is planned around solving the bottleneck and building what your business actually needs.
            </p>
          </div>
        </motion.div>

        {/* Ambient Signal Line — Visible Signal Orange head gliding across top border */}
        <div className="w-full my-6 sm:my-8">
          <AmbientLine 
            duration={6.2} 
            delay={0.8} 
            length="200px" 
            opacity={0.26} 
            className="w-full" 
          />
        </div>

        {/* Technical Specification Sheet Layout: Three Equal Columns (33.33% each) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 py-8 sm:py-12">
          
          {phaseConfigs.map((phase, idx) => {
            const isLast = idx === phaseConfigs.length - 1
            return (
              <motion.div
                key={phase.num}
                ref={phase.ref}
                initial={shouldReduceMotion ? false : {
                  opacity: 0,
                  y: 24,
                  clipPath: "inset(100% 0% 0% 0%)"
                }}
                animate={shouldReduceMotion ? {
                  opacity: 1,
                  y: 0,
                  clipPath: "none"
                } : {
                  opacity: phase.isInView ? 1 : 0,
                  y: phase.isInView ? 0 : 24,
                  clipPath: phase.isInView ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)"
                }}
                transition={{
                  duration: 0.7,
                  ease: EASE_EDITORIAL
                }}
                className={`flex flex-col justify-between ${
                  !isLast ? 'border-b lg:border-b-0 lg:border-r border-[#292824] pb-10 lg:pb-0 lg:pr-8 xl:pr-10' : ''
                }`}
              >
                <div>
                  {/* Technical Numbering + Cadence */}
                  <motion.div 
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={shouldReduceMotion ? { opacity: 1, y: 0 } : {
                      opacity: phase.isInView ? 1 : 0,
                      y: phase.isInView ? 0 : 8
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0,
                      ease: EASE_EDITORIAL
                    }}
                    className="flex items-center text-xs font-mono text-[#FF4D2E] font-medium tracking-[0.2em] mb-4"
                  >
                    <span>{phase.num}</span>
                  </motion.div>

                  {/* Phase Title */}
                  <motion.h3 
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={shouldReduceMotion ? { opacity: 1, y: 0 } : {
                      opacity: phase.isInView ? 1 : 0,
                      y: phase.isInView ? 0 : 10
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08,
                      ease: EASE_EDITORIAL
                    }}
                    className="text-[22px] sm:text-[25px] lg:text-[28px] xl:text-[30px] font-display font-medium text-[#F1EEE7] tracking-tight leading-[1.12]"
                  >
                    {phase.title}
                  </motion.h3>

                  <motion.p 
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={shouldReduceMotion ? { opacity: 1, y: 0 } : {
                      opacity: phase.isInView ? 1 : 0,
                      y: phase.isInView ? 0 : 10
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15,
                      ease: EASE_EDITORIAL
                    }}
                    className="mt-4 text-[16px] sm:text-[16.5px] lg:text-[17.5px] text-[#C2BFB8] font-sans leading-[1.58]"
                  >
                    {phase.desc}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}

        </div>

        {/* Operating Philosophy Stamp */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: EASE_EDITORIAL, delay: 0.3 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono tracking-widest text-[#A7A39B] uppercase"
        >
          <span>HOW WE WORK</span>
          <span className="text-[#FF4D2E]">WE BUILD ONLY WHAT CREATES REAL COMMERCIAL LEVERAGE</span>
        </motion.div>

      </div>
    </section>
  )
}
