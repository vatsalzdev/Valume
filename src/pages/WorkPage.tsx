import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Star, Copy, ShieldCheck, Database, Send, MessageSquare, UserCheck, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import AmbientLine from '../components/AmbientLine'
import { Link } from '../router/Router'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const qrWorkflowNodes = [
  { label: 'SCAN' },
  { label: 'RATE' },
  { label: 'GENERATE' },
  { label: 'EDIT' },
  { label: 'COPY' },
  { label: 'GOOGLE REVIEW', isAccent: true },
]

const leadPipelineNodes = [
  { stage: 'STAGE 01', title: 'RESEARCH', sub: 'Prospect Discovery', icon: Database, isOrange: true },
  { stage: 'STAGE 02', title: 'DATABASE', sub: 'Schema Normalized', icon: ShieldCheck },
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

export default function WorkPage() {
  const shouldReduceMotion = useReducedMotion()
  const [selectedRating, setSelectedRating] = useState(5)
  const [copiedReview, setCopiedReview] = useState(false)

  const handleCopyReview = () => {
    const text = reviewDrafts[selectedRating] || reviewDrafts[5]
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text.replace(/^"|"$/g, ''))
    }
    setCopiedReview(true)
    setTimeout(() => setCopiedReview(false), 2400)
  }

  return (
    <article className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] pt-24 sm:pt-28 pb-20 sm:pb-24">
      <SEO 
        title="Work & Projects | Valume"
        description="Explore Valume projects, internal prototypes, and digital systems built around lead generation, customer experience, automation, and software."
        canonicalUrl="https://valume.studio/work"
        breadcrumbs={[
          { name: 'Home', url: 'https://valume.studio/' },
          { name: 'Work', url: 'https://valume.studio/work' }
        ]}
      />

      {/* Hero Header */}
      <header className="relative w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          {/* Category Marker */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#A7A39B] mb-6"
          >
            <span className="text-[#FF4D2E] font-semibold text-[13px] leading-none">+</span>
            <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
            <Link href="/" className="hover:text-[#F1EEE7] transition-colors">VALUME</Link>
            <span>/</span>
            <span className="text-[#F1EEE7]">INDEX 04</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-[2.1rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.05] break-words">
                SELECTED WORK
              </h1>
              <p className="mt-6 text-xl sm:text-2xl text-[#F1EEE7] font-display font-light leading-snug max-w-3xl">
                Projects, prototypes, and systems developed by Valume.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="max-w-md">
                <p className="text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-[1.58]">
                  We clearly distinguish deployed systems, internal prototypes, and ongoing R&amp;D. Zero fabricated client logos, zero invented statistics.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 w-full">
            <AmbientLine duration={6.8} delay={0} length="180px" opacity={0.25} className="w-full" />
          </div>
        </div>
      </header>

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ===================================================================== */}
        {/* PROJECT 01 — QR REVIEW ENGINE                                         */}
        {/* ===================================================================== */}
        <section className="py-16 sm:py-20 border-b border-[#292824]/60">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono tracking-[0.16em] uppercase text-[#A7A39B]">
              <span className="text-[#FF4D2E] font-medium">01</span>
              <span>/</span>
              <span>HOSPITALITY / CUSTOMER EXPERIENCE</span>
            </div>
            <div className="inline-block px-3 py-1 bg-[#141414] border border-[#292824] text-[#F1EEE7] text-xs font-mono uppercase tracking-widest">
              VALUME PROJECT
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-4xl lg:text-[3.5rem] font-display font-medium tracking-tight leading-[1.04] text-[#F1EEE7] break-words">
              QR REVIEW ENGINE
            </h2>
          </div>

          <div className="relative w-full">
            {/* Visual Photographic Spread */}
            <div className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2.35/1] w-full bg-[#050505] border border-[#292824] overflow-hidden group shadow-2xl">
              <img 
                src="/images/work/work-qr-review.jpg" 
                alt="QR review system displayed in a hospitality environment." 
                className="w-full h-full object-cover object-[center_35%] grayscale-[10%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/30 pointer-events-none" />
              <span className="absolute top-3 left-3 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
              <span className="absolute top-3 right-3 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
            </div>

            {/* Asymmetric Bottom Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8 lg:-mt-20 relative z-20">
              
              {/* Left Column: Description & System Flow */}
              <div className="lg:col-span-7 bg-[#060606]/95 backdrop-blur-md lg:p-8 border-t lg:border border-[#292824]">
                <p className="text-[16.5px] sm:text-[18px] lg:text-[18.5px] text-[#F1EEE7] font-sans leading-[1.6]">
                  A QR-based customer review system that guides customers from rating their experience to generating, editing, copying, and manually posting a Google review.
                </p>

                <div className="mt-6 pt-6 border-t border-[#292824]">
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A7A39B] block mb-3">
                    SYSTEM WORKFLOW
                  </span>
                  
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
                    Customers manually review, edit, copy, and post their review themselves.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Smartphone Review Simulator */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md bg-[#050505] border border-[#292824] p-6 sm:p-7 rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative">
                  
                  <div className="flex items-center gap-2 border-b border-[#292824] pb-4 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#FF4D2E]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F1EEE7]">
                      CLIENT INTERFACE PROTOTYPE
                    </span>
                  </div>

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

                  <div className="bg-[#0B0B0B] border border-[#292824] p-4 mb-5">
                    <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-[#A7A39B] uppercase">
                      <span>GENERATED REVIEW DRAFT</span>
                      <span className="text-[#FF4D2E] text-[10px]">[ EDITABLE ]</span>
                    </div>
                    <p className="text-sm sm:text-[15.5px] text-[#F1EEE7] font-sans leading-relaxed min-h-[54px]">
                      {reviewDrafts[selectedRating]}
                    </p>
                  </div>

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
                      TAP OPENS GOOGLE MAPS // PASTE REVIEW
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* PROJECT 02 — LEAD GENERATION SYSTEM                                   */}
        {/* ===================================================================== */}
        <section className="py-16 sm:py-20 border-b border-[#292824]/60">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono uppercase tracking-[0.16em] text-[#A7A39B]">
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
              <h2 className="text-2xl sm:text-4xl lg:text-[3.5rem] font-display font-medium tracking-tight leading-[1.04] text-[#F1EEE7] break-words">
                LEAD GENERATION SYSTEM
              </h2>
              <p className="mt-4 text-[16.5px] sm:text-[18px] lg:text-[18.5px] text-[#C2BFB8] font-sans leading-[1.6]">
                An internal lead-generation workflow for researching prospects, organizing leads, qualifying opportunities, managing outreach, detecting replies, and handing promising conversations to a human.
              </p>
            </div>
          </div>

          {/* Supporting Evidence Plate */}
          <div className="w-full max-w-sm bg-[#050505] border border-[#292824] p-3 relative group mb-10">
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

          {/* 6-Stage Pipeline Specification */}
          <div className="bg-[#050505] border border-[#292824] p-6 sm:p-10">
            <div className="flex items-center justify-between border-b border-[#292824] pb-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF4D2E]" />
                <span className="text-xs font-mono tracking-widest uppercase text-[#F1EEE7]">
                  6-STAGE WORKFLOW SPECIFICATION
                </span>
              </div>
            </div>

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
                <span>High Intent Response → Direct escalation to human partner queue</span>
                <span className="text-[#FF4D2E] font-mono">ROUTED HANDOFF</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* PROJECT 03 — VALUME LAB                                               */}
        {/* ===================================================================== */}
        <section className="py-16 sm:py-20 border-b border-[#292824]/60">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono tracking-[0.16em] uppercase text-[#A7A39B]">
              <span className="text-[#FF4D2E] font-medium">03</span>
              <span>/</span>
              <span>DIGITAL PRODUCTS / INTERNAL R&amp;D</span>
            </div>
            <div className="inline-block px-3 py-1 bg-[#141414] border border-[#FF4D2E]/40 text-[#FF4D2E] text-xs font-mono uppercase tracking-widest">
              INTERNAL R&amp;D
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-4xl lg:text-[3.5rem] font-display font-medium tracking-tight leading-[1.04] text-[#F1EEE7] break-words">
              VALUME LAB
            </h2>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/9] lg:aspect-[2.2/1] w-full bg-[#050505] border border-[#292824] overflow-hidden group shadow-2xl">
              <img 
                src="/images/work/work-valume-lab.jpg" 
                alt="Digital product development workspace with software prototypes and technical notes." 
                className="w-full h-full object-cover object-[center_40%] grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
              <span className="absolute top-3 right-3 text-[10px] font-mono text-[#FF4D2E] font-semibold pointer-events-none">+</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 lg:-mt-28 relative z-20">
              <div className="lg:col-span-6 bg-[#060606]/95 backdrop-blur-md p-6 sm:p-8 border border-[#292824]">
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

              <div className="lg:col-span-6 flex flex-col gap-4">
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
          </div>
        </section>

        {/* ===================================================================== */}
        {/* PHILOSOPHY STATEMENT                                                  */}
        {/* ===================================================================== */}
        <section className="py-16 sm:py-20 border-b border-[#292824]/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">+</span>
                <span>R&amp;D THESIS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight leading-[1.08]">
                BUILDING IN PUBLIC IS NOT THE POINT
              </h2>
            </div>
            <div className="lg:col-span-6">
              <blockquote className="border-l-2 border-[#FF4D2E] pl-6 sm:pl-8 py-2">
                <p className="text-xl sm:text-2xl font-display text-[#F1EEE7] leading-snug">
                  "The useful part of experimentation is what survives contact with a real workflow."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Section: CTA & Related Services */}
        <section className="py-16 sm:py-20">
          <div className="bg-[#050505] border border-[#292824] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">+</span>
                <span>COMMISSION A SYSTEM</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                START A PROJECT
              </h2>
              <p className="mt-4 text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed">
                Whether you need a bespoke lead generation workflow, an internal business automation, or purpose-built custom software, we can build it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#F1EEE7] hover:bg-[#FF4D2E] text-[#0B0B0B] hover:text-white transition-colors duration-300 px-8 py-4 rounded-full text-xs font-mono tracking-[0.16em] uppercase font-semibold active:translate-y-0.5"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-[#292824]/60 flex flex-wrap items-center justify-between gap-6 text-xs font-mono tracking-wider uppercase text-[#A7A39B]">
            <span className="text-[#F1EEE7]">BROWSE CORE SERVICES:</span>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/lead-generation" className="hover:text-[#FF4D2E] transition-colors">
                LEAD GENERATION →
              </Link>
              <Link href="/business-automation" className="hover:text-[#FF4D2E] transition-colors">
                BUSINESS AUTOMATION →
              </Link>
              <Link href="/digital-products" className="hover:text-[#FF4D2E] transition-colors">
                DIGITAL PRODUCTS →
              </Link>
              <Link href="/custom-software" className="hover:text-[#FF4D2E] transition-colors">
                CUSTOM SOFTWARE →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </article>
  )
}
