import { useState, useRef } from 'react'
import { motion, useReducedMotion, useScroll } from 'motion/react'
import { Star, Copy, ShieldCheck, Database, Send, MessageSquare, UserCheck, CheckCircle2 } from 'lucide-react'
import { ScrollRevealChunk } from './ScrollReveal'
import AmbientLine from './AmbientLine'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const qrWorkflowNodes = [
  { label: 'SCAN' },
  { label: 'RATE' },
  { label: 'GENERATE' },
  { label: 'EDIT' },
  { label: 'COPY' },
  { label: 'GOOGLE REVIEW (MANUAL POST)', isAccent: true },
]

const leadPipelineNodes = [
  { stage: 'STAGE 01', title: 'LEAD RESEARCH', sub: 'Source Discovery', icon: Database, isOrange: true },
  { stage: 'STAGE 02', title: 'LEAD DATABASE', sub: 'Schema Normalized', icon: ShieldCheck },
  { stage: 'STAGE 03', title: 'QUALIFICATION', sub: 'Criteria Evaluated', badge: 'GATE' },
  { stage: 'STAGE 04', title: 'OUTREACH', sub: 'Targeted Context', icon: Send },
  { stage: 'STAGE 05', title: 'REPLY DETECTION', sub: 'Intent Scored', icon: MessageSquare, isOrange: true },
  { stage: 'STAGE 06', title: 'HUMAN HANDOFF', sub: 'Executive Routing', icon: UserCheck, isAccent: true },
]

const reviewDrafts: Record<number, string> = {
  5: '"Exceptional single-origin espresso and the sourdough breakfast plate was perfect. Warm atmosphere and very attentive staff. Easily one of the best morning spots in the neighborhood."',
  4: '"Great specialty coffee and thoughtfully prepared breakfast. Atmospheric space with excellent seating, though peak service can be busy. Highly recommended."',
  3: '"Solid coffee service and clean interior design. Reliable breakfast options with friendly staff."',
  2: '"Good coffee quality, but service pace during morning rush had friction."',
  1: '"Experience did not meet standards; operational bottleneck during peak hour."'
}

export default function CaseStudies() {
  const shouldReduceMotion = useReducedMotion()
  const [selectedRating, setSelectedRating] = useState(5)
  const [copiedReview, setCopiedReview] = useState(false)

  // Project-specific scroll progresses for sequential segmented reveals
  const project1Ref = useRef<HTMLDivElement>(null)
  const project2Ref = useRef<HTMLDivElement>(null)
  const project3Ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress: p1Progress } = useScroll({
    target: project1Ref,
    offset: ["start 0.85", "center 0.4"]
  })
  const { scrollYProgress: p2Progress } = useScroll({
    target: project2Ref,
    offset: ["start 0.85", "center 0.4"]
  })
  const { scrollYProgress: p3Progress } = useScroll({
    target: project3Ref,
    offset: ["start 0.85", "center 0.4"]
  })

  const handleCopyReview = () => {
    const text = reviewDrafts[selectedRating] || reviewDrafts[5]
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text.replace(/^"|"$/g, ''))
    }
    setCopiedReview(true)
    setTimeout(() => setCopiedReview(false), 2400)
  }

  return (
    <section 
      id="work"
      className="relative w-full bg-[#0B0B0B] text-[#F1EEE7] py-18 sm:py-22 lg:py-28 px-6 sm:px-10 lg:px-16 border-t border-[#292824] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-[1520px] mx-auto w-full">
        
        {/* Section Header with Brand Signature */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: EASE_EDITORIAL }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16"
        >
          <div className="lg:col-span-6">
            <h2 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#A7A39B]">
              <span className="text-[#FF4D2E] font-semibold text-[13px] leading-none">+</span>
              <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
              <span>04 / SELECTED WORK</span>
            </h2>
            <div className="mt-4 text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-medium tracking-tight text-[#F1EEE7]">
              SELECTED WORK
            </div>
          </div>
          <div className="lg:col-span-6 flex lg:justify-end">
            <p className="max-w-lg text-[16px] sm:text-[17.5px] lg:text-[18.5px] text-[#C2BFB8] font-sans leading-[1.55]">
              Real systems, verified workflows, and internal studio prototypes. Zero fabricated client logos, zero invented statistics.
            </p>
          </div>
        </motion.div>

        {/* Ambient Signal Line — Visible Signal Orange head gliding across whitespace */}
        <div className="w-full my-6 sm:my-8">
          <AmbientLine 
            duration={7.0} 
            delay={3.2} 
            length="180px" 
            opacity={0.25} 
            className="w-full" 
          />
        </div>

        {/* ===================================================================== */}
        {/* CASE STUDY 01 — QR REVIEW ENGINE (PHOTOGRAPHIC / HUMAN HERO)          */}
        {/* Composition: 65–75% Viewport Photographic Hero + Overlapping Phone UI */}
        {/* ===================================================================== */}
        <div 
          ref={project1Ref}
          className="py-12 sm:py-16 border-t border-[#292824]"
        >
          {/* Segment 0: Top Title & Metadata Row + Headline */}
          <ScrollRevealChunk progress={p1Progress} index={0} total={3}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4 text-xs font-mono tracking-[0.2em] uppercase text-[#A7A39B]">
                <span className="text-[#FF4D2E] font-medium">01</span>
                <span>/</span>
                <span>HOSPITALITY / CUSTOMER EXPERIENCE</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-medium tracking-tight leading-[1.04] text-[#F1EEE7]">
                QR REVIEW ENGINE
              </h3>
            </div>
          </ScrollRevealChunk>

          {/* Hero Visual Spread: Massive Photographic Landscape + Subtly Overlapping Mobile Interface */}
          <div className="relative w-full">
            {/* 1. Massive Photographic Hero Plate (65–75% Dominant Visual) */}
            <ScrollRevealChunk progress={p1Progress} index={1} total={3}>
              <div className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2.35/1] w-full bg-[#050505] border border-[#292824] overflow-hidden group shadow-2xl">
                <img 
                  src="/images/work/work-qr-review.jpg" 
                  alt="QR review system displayed in a hospitality environment." 
                  className="w-full h-full object-cover object-[center_35%] grayscale-[10%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                {/* Subtle directional vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/30 pointer-events-none" />
                
                {/* Subtle corner registration marks */}
                <span className="absolute top-3 left-3 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
                <span className="absolute top-3 right-3 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
              </div>
            </ScrollRevealChunk>

            {/* 2. Asymmetric Bottom Spread: Left Narrative & Flow + Overlapping Digital Interface */}
            <ScrollRevealChunk progress={p1Progress} index={2} total={3}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8 lg:-mt-20 relative z-20">
                
                {/* Left Side: Narrative & Workflow Ribbon (Columns 1–7) */}
                <div className="lg:col-span-7 bg-[#060606]/95 backdrop-blur-md lg:p-8 border-t lg:border border-[#292824]">
                  <p className="text-[16.5px] sm:text-[18px] lg:text-[18.5px] text-[#F1EEE7] font-sans leading-[1.6]">
                    A QR-based customer review system that guides customers from rating their experience to generating, editing, copying, and manually posting a Google review.
                  </p>

                  {/* Honest Architectural System Flow */}
                  <div className="mt-6 pt-6 border-t border-[#292824]">
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A7A39B] block mb-3">
                      SYSTEM WORKFLOW
                    </span>
                    
                    {/* Flow Ribbon: Sequentially Activated Nodes */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#F1EEE7]">
                      {qrWorkflowNodes.map((node, idx) => (
                        <div key={node.label} className="inline-flex items-center gap-2">
                          <span 
                            className={`px-2.5 py-1 rounded-sm border ${
                              node.isAccent 
                                ? 'bg-[#FF4D2E]/10 border-[#FF4D2E]/50 text-[#FF4D2E] font-medium' 
                                : 'bg-[#141414] border-[#292824] text-[#F1EEE7]'
                            }`}
                          >
                            {node.label}
                          </span>
                          {idx < qrWorkflowNodes.length - 1 && (
                            <span className="text-[#FF4D2E]">→</span>
                          )}
                        </div>
                      ))}
                    </div>

                    <p className="mt-4 text-[14.5px] sm:text-[16px] font-sans text-[#C2BFB8] leading-[1.55]">
                      * Policy Compliant: The system never attempts automated posting. The guest maintains complete agency, copying their customized review and manually submitting it to Google Maps.
                    </p>
                  </div>
                </div>

                {/* Right Side: Overlapping Digital Smartphone Interface (Columns 8–12) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full max-w-md bg-[#050505] border border-[#292824] p-6 sm:p-7 rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative">
                    
                    {/* Smartphone Header */}
                    <div className="flex items-center gap-2 border-b border-[#292824] pb-4 mb-5">
                      <span className="w-2 h-2 rounded-full bg-[#FF4D2E]" />
                      <span className="text-xs font-mono uppercase tracking-wider text-[#F1EEE7]">
                        CLIENT INTERFACE
                      </span>
                    </div>

                    {/* Rating State */}
                    <div className="flex items-center justify-between mb-5 bg-[#0B0B0B] p-3.5 border border-[#292824]/60">
                      <span className="text-xs font-mono uppercase text-[#A7A39B]">EXPERIENCE RATING</span>
                      <div className="flex items-center gap-1" role="radiogroup" aria-label="Experience Rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setSelectedRating(star)}
                            className="p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E] transition-transform hover:scale-115 active:scale-95"
                            aria-label={`${star} star rating`}
                            aria-checked={selectedRating === star}
                            role="radio"
                          >
                            <Star 
                              className={`w-4 h-4 transition-colors ${
                                star <= selectedRating ? 'text-[#FF4D2E] fill-current' : 'text-[#292824]'
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Assisted Review Draft */}
                    <div className="bg-[#0B0B0B] border border-[#292824] p-4 mb-5">
                      <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-[#A7A39B] uppercase">
                        <span>GENERATED REVIEW DRAFT</span>
                        <span className="text-[#FF4D2E] text-[10px]">[ EDITABLE ]</span>
                      </div>
                      <p className="text-sm sm:text-[15.5px] text-[#F1EEE7] font-sans leading-relaxed min-h-[54px] transition-opacity duration-200">
                        {reviewDrafts[selectedRating]}
                      </p>
                    </div>

                    {/* Manual Action CTA */}
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={handleCopyReview}
                        className="w-full bg-[#F1EEE7] hover:bg-[#FF4D2E] hover:text-white text-[#0B0B0B] transition-colors py-3.5 px-4 rounded-sm text-xs font-mono uppercase tracking-widest font-semibold flex items-center justify-center gap-2 active:translate-y-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E]"
                      >
                        {copiedReview ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-current" />
                            <span>COPIED TO CLIPBOARD ✓</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY &amp; OPEN GOOGLE MAPS</span>
                          </>
                        )}
                      </button>
                      <span className="text-[10px] font-mono text-center text-[#A7A39B]/70 tracking-wider">
                        TAP OPENS GOOGLE MAPS // PASTE TO PUBLISH
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </ScrollRevealChunk>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* CASE STUDY 02 — LEAD GENERATION SYSTEM (TECHNICAL / SYSTEMIC DOC)     */}
        {/* Composition: Engineering Specification Document + Dominant 6-Stage    */}
        {/* Pipeline + Secondary Research Plate Inset                             */}
        {/* ===================================================================== */}
        <div 
          ref={project2Ref}
          className="py-14 sm:py-20 border-t border-[#292824]"
        >
          {/* Segment 0: Engineering Header Stamp + Title & Rationale */}
          <ScrollRevealChunk progress={p2Progress} index={0} total={3}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B]">
                <span className="text-[#FF4D2E] font-medium">02</span>
                <span>/</span>
                <span>ACQUISITION &amp; AUTOMATION</span>
              </div>
              <div className="inline-block px-3 py-1 bg-[#141414] border border-[#FF4D2E]/40 text-[#FF4D2E] text-xs font-mono uppercase tracking-widest">
                VALUME INTERNAL PROTOTYPE
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-8">
                <h3 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-medium tracking-tight leading-[1.04] text-[#F1EEE7]">
                  LEAD GENERATION SYSTEM
                </h3>
                <p className="mt-4 text-[16.5px] sm:text-[18px] lg:text-[18.5px] text-[#C2BFB8] font-sans leading-[1.6]">
                  An internal lead-generation workflow for researching prospects, organizing leads, qualifying opportunities, managing outreach, detecting replies, and handing promising conversations to a human.
                </p>
              </div>
            </div>
          </ScrollRevealChunk>

          {/* Segment 1: Secondary Research Plate (Inset / Supporting Evidence) */}
          <ScrollRevealChunk progress={p2Progress} index={1} total={3} className="mb-10">
            <div className="w-full max-w-sm bg-[#050505] border border-[#292824] p-3 relative group">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#292824]">
                <img 
                  src="/images/work/work-lead-generation.jpg" 
                  alt="Lead research and qualification workflow documentation." 
                  className="w-full h-full object-cover object-center grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs font-mono text-[#A7A39B] px-1">
                <span>Studio research operations</span>
              </div>
            </div>
          </ScrollRevealChunk>

          {/* Segment 2: DOMINANT ARTIFACT: 6-Stage Engineering Pipeline Specification */}
          <ScrollRevealChunk progress={p2Progress} index={2} total={3}>
            <div className="bg-[#050505] border border-[#292824] p-6 sm:p-10">
              <div className="flex items-center justify-between border-b border-[#292824] pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D2E]" />
                  <span className="text-xs font-mono tracking-widest uppercase text-[#F1EEE7]">
                    6-STAGE PIPELINE ARCHITECTURE
                  </span>
                </div>
              </div>

              {/* 6 Sequential Stages Layout with Directional Flow */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mb-8">
                {leadPipelineNodes.map((node, idx) => {
                  const IconComponent = node.icon
                  return (
                    <div 
                      key={node.stage}
                      className={`bg-[#0B0B0B] border p-4 flex flex-col justify-between min-h-[130px] relative transition-colors ${
                        node.isAccent ? 'border-[#FF4D2E]/60 bg-[#FF4D2E]/5' : 'border-[#292824]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#A7A39B]">
                        <span className={node.isAccent ? 'text-[#FF4D2E] font-semibold' : ''}>{node.stage}</span>
                        {IconComponent && (
                          <IconComponent className={`w-3.5 h-3.5 ${node.isAccent || node.isOrange ? 'text-[#FF4D2E]' : 'text-[#A7A39B]'}`} />
                        )}
                        {node.badge && (
                          <span className="text-[#FF4D2E] text-[10px] font-mono font-semibold">{node.badge}</span>
                        )}
                      </div>
                      
                      <div>
                        <span className="text-xs font-mono font-medium text-[#F1EEE7] block">{node.title}</span>
                        <span className={`text-[10px] font-mono ${node.isAccent ? 'text-[#FF4D2E]' : 'text-[#A7A39B]/70'}`}>
                          {node.sub}
                        </span>
                      </div>

                      {idx < leadPipelineNodes.length - 1 && (
                        <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#292824] text-xs z-10 font-mono">
                          →
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Qualification Protocol */}
              <div className="bg-[#0B0B0B] p-5 border border-[#292824] text-xs font-mono text-[#A7A39B] space-y-2">
                <span className="text-xs text-[#F1EEE7] uppercase font-mono tracking-wider block mb-2">
                  QUALIFICATION LOGIC
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#292824]/60 pb-2">
                  <span>Industry Match: High-value B2B and scaled commercial services</span>
                  <span className="text-[#A7A39B] font-mono">CRITERIA 01</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#292824]/60 pb-2">
                  <span>Operational Bottleneck Verified against defined engagement scope</span>
                  <span className="text-[#A7A39B] font-mono">CRITERIA 02</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>High Intent Response → Direct escalation to partner operational queue</span>
                  <span className="text-[#FF4D2E] font-mono">ROUTED HANDOFF</span>
                </div>
              </div>
            </div>
          </ScrollRevealChunk>
        </div>

        {/* ===================================================================== */}
        {/* CASE STUDY 03 — VALUME LAB (EXPERIMENTAL / ARTIFACT COLLAGE)          */}
        {/* Composition: Oversized Workbench Photo + Overlapping Wireframes,      */}
        {/* Software Terminal & Thesis Notes                                      */}
        {/* ===================================================================== */}
        <div 
          ref={project3Ref}
          className="py-14 sm:py-20 border-t border-[#292824]"
        >
          {/* Segment 0: Header & Title */}
          <ScrollRevealChunk progress={p3Progress} index={0} total={3}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4 text-xs font-mono tracking-[0.2em] uppercase text-[#A7A39B]">
                <span className="text-[#FF4D2E] font-medium">03</span>
                <span>/</span>
                <span>DIGITAL PRODUCTS / INTERNAL R&amp;D</span>
              </div>
              <div className="inline-block px-3 py-1 bg-[#141414] border border-[#FF4D2E]/40 text-[#FF4D2E] text-xs font-mono uppercase tracking-widest">
                INTERNAL R&amp;D
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-medium tracking-tight leading-[1.04] text-[#F1EEE7]">
                VALUME LAB
              </h3>
            </div>
          </ScrollRevealChunk>

          {/* Overlapping R&D Workbench Collage Spread */}
          <div className="relative">
            
            {/* Segment 1: Base Plate: Oversized, Partially Cropped Workbench Photograph */}
            <ScrollRevealChunk progress={p3Progress} index={1} total={3}>
              <div className="relative aspect-[16/9] lg:aspect-[2.2/1] w-full bg-[#050505] border border-[#292824] overflow-hidden group shadow-2xl">
                <img 
                  src="/images/work/work-valume-lab.jpg" 
                  alt="Digital product development workspace with software prototypes and technical notes." 
                  className="w-full h-full object-cover object-[center_40%] grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent pointer-events-none" />
                
                {/* Subtle corner registration marks */}
                <span className="absolute top-3 left-3 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
                <span className="absolute top-3 right-3 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
              </div>
            </ScrollRevealChunk>

            {/* Segment 2: Overlapping Content Layer: Left Thesis Notes + Right Studio Architecture Pillars */}
            <ScrollRevealChunk progress={p3Progress} index={2} total={3}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 lg:-mt-28 relative z-20">
                
                {/* Left Column: Experimental Thesis Notes (Columns 1–5) */}
                <div className="lg:col-span-5 bg-[#060606]/95 backdrop-blur-md p-6 sm:p-8 border border-[#292824]">
                  <p className="text-[16.5px] sm:text-[18px] lg:text-[18.5px] text-[#F1EEE7] font-sans leading-[1.6]">
                    We turn recurring business problems into reusable software products when a solution can create value beyond a single project.
                  </p>

                  <div className="mt-6 space-y-4 pt-6 border-t border-[#292824] text-sm font-sans">
                    {[
                      { num: '[01]', title: 'Bottleneck Extraction:', desc: 'Converting common workflow breakdowns into standardized logic modules.' },
                      { num: '[02]', title: 'Tactile Interface Design:', desc: 'Consumer-grade micro-interactions applied to mission-critical business software.' },
                      { num: '[03]', title: 'Autonomous Assets:', desc: 'Standalone digital products that operate independently of agency service hours.' },
                    ].map((frag) => (
                      <div key={frag.num} className="flex items-start gap-3">
                        <span className="text-[#FF4D2E] font-mono text-xs sm:text-[13px] mt-0.5 shrink-0">{frag.num}</span>
                        <p className="text-[#C2BFB8] text-[14px] sm:text-[15px] leading-relaxed"><strong className="text-[#F1EEE7] font-medium">{frag.title}</strong> {frag.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Focus Areas (Columns 6–12) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#050505] border border-[#292824] p-5 shadow-2xl flex flex-col justify-between min-h-[140px]">
                      <div className="flex items-center justify-between text-xs font-mono text-[#FF4D2E]">
                        <span>FOCUS 01</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-base font-medium text-[#F1EEE7] block font-display">Client Portals &amp; Tools</span>
                        <p className="text-xs font-sans text-[#A7A39B] leading-relaxed">Self-serve interfaces eliminating operational coordination friction.</p>
                      </div>
                    </div>

                    <div className="bg-[#050505] border border-[#292824] p-5 shadow-2xl flex flex-col justify-between min-h-[140px]">
                      <div className="flex items-center justify-between text-xs font-mono text-[#FF4D2E]">
                        <span>FOCUS 02</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-base font-medium text-[#F1EEE7] block font-display">Modular Software Architecture</span>
                        <p className="text-xs font-sans text-[#A7A39B] leading-relaxed">Engineered building blocks deployed across recurring business models.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#050505] border border-[#292824] p-6 shadow-2xl text-xs font-mono text-[#A7A39B] space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#F1EEE7] border-b border-[#292824] pb-2 mb-2">
                      <span>PRODUCTION TECH STACK</span>
                      <span className="text-[#FF4D2E]">VERIFIED STACK</span>
                    </div>
                    <p className="font-sans text-sm text-[#C2BFB8] leading-relaxed">
                      Modern TypeScript runtimes, automated workflows, relational Postgres storage, and precision-built React interfaces.
                    </p>
                  </div>
                </div>

              </div>
            </ScrollRevealChunk>

          </div>
        </div>

      </div>
    </section>
  )
}
