import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Database, ShieldCheck, Send, MessageSquare, UserCheck, Inbox, AlertCircle } from 'lucide-react'
import SEO from '../components/SEO'
import AmbientLine from '../components/AmbientLine'
import { Link } from '../router/Router'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const lostPoints = [
  {
    title: 'Inquiries across fragmented channels',
    desc: 'Leads arrive through email, website forms, WhatsApp, direct messages, and phone calls without a single centralized intake.'
  },
  {
    title: 'Slow or inconsistent follow-up',
    desc: 'Response time degrades during busy operating hours, allowing high-intent prospects to explore competing alternatives.'
  },
  {
    title: 'Leads sitting in spreadsheets or inboxes',
    desc: 'Contact details get buried under daily message traffic or static spreadsheets that fail to reflect pipeline progress.'
  },
  {
    title: 'Poor qualification before meetings',
    desc: 'Valuable executive or sales time is spent talking to unqualified prospects, out-of-scope inquiries, or incomplete submissions.'
  },
  {
    title: 'Unclear operational ownership',
    desc: 'No single team member or system is explicitly responsible for driving the next touchpoint or confirming receipt.'
  },
  {
    title: 'Conversations being forgotten',
    desc: 'Without automated status tracking, warm opportunities slip through the cracks when initial calls end without follow-up.'
  }
]

const whatWeBuild = [
  {
    num: '01',
    title: 'Lead Capture',
    desc: 'Capture inquiries from the channels a business actually uses into a single reliable intake pipeline.'
  },
  {
    num: '02',
    title: 'Lead Organization',
    desc: 'Store and structure lead information so opportunities are visible, searchable, and current.'
  },
  {
    num: '03',
    title: 'Qualification',
    desc: 'Separate relevant opportunities from low-value or incomplete inquiries based on defined commercial criteria.'
  },
  {
    num: '04',
    title: 'Routing',
    desc: 'Send qualified opportunities to the appropriate person, internal system, or scheduled calendar slot.'
  },
  {
    num: '05',
    title: 'Follow-Up',
    desc: 'Automate appropriate follow-up while keeping human intervention where nuance and discretion matter.'
  },
  {
    num: '06',
    title: 'Human Handoff',
    desc: 'Make it obvious when a real person should take over the conversation and close the loop.'
  }
]

const workflowStages = [
  { stage: '01', label: 'LEAD SOURCE', icon: Inbox },
  { stage: '02', label: 'CAPTURE', icon: Database },
  { stage: '03', label: 'DATABASE', icon: ShieldCheck },
  { stage: '04', label: 'QUALIFICATION', icon: AlertCircle, isAccent: true },
  { stage: '05', label: 'OUTREACH / FOLLOW-UP', icon: Send },
  { stage: '06', label: 'REPLY', icon: MessageSquare },
  { stage: '07', label: 'HUMAN HANDOFF', icon: UserCheck, isHighlight: true }
]

const whenMakesSense = [
  'A business already receives meaningful inquiry volume each month.',
  'Leads arrive through multiple disconnected channels and platforms.',
  'Follow-up speed and cadence vary widely between team members.',
  'Staff spend significant time manually copying, sorting, and organizing inquiries.',
  'High-value opportunities are being lost because nobody owns the immediate next step.'
]

export default function LeadGenerationPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <article className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] pt-24 sm:pt-28 pb-20 sm:pb-24">
      <SEO 
        title="Lead Generation Systems for Businesses | Valume"
        description="Valume designs lead generation systems that capture, qualify, route, and organize potential customers so opportunities do not get lost."
        canonicalUrl="https://valume.studio/lead-generation"
        breadcrumbs={[
          { name: 'Home', url: 'https://valume.studio/' },
          { name: 'Lead Generation', url: 'https://valume.studio/lead-generation' }
        ]}
      />

      {/* Hero Section */}
      <header className="relative w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          {/* Breadcrumb / Category Marker */}
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
            <span className="text-[#F1EEE7]">SERVICE 01</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.1 }}
                className="text-[2.1rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.05] break-words"
              >
                LEAD GENERATION SYSTEMS
              </motion.h1>
              <motion.p 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.2 }}
                className="mt-6 text-xl sm:text-2xl text-[#F1EEE7] font-display font-light leading-snug max-w-3xl"
              >
                More leads are not useful if they disappear between the first inquiry and the next follow-up.
              </motion.p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <motion.div 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.3 }}
                className="max-w-md"
              >
                <p className="text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-[1.58]">
                  Valume designs systems that capture potential customers, organize incoming leads, qualify opportunities, and route conversations to the right person or workflow.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 w-full">
            <AmbientLine duration={6.0} delay={0} length="180px" opacity={0.25} className="w-full" />
          </div>
        </div>
      </header>

      {/* Section 01: Where Leads Get Lost */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">01</span>
                <span>/</span>
                <span>OPERATIONAL FRICTION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                WHERE LEADS GET LOST
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[16.5px] sm:text-[18px] text-[#C2BFB8] font-sans leading-relaxed max-w-2xl">
                Most lead generation problems are not traffic problems. They are handoff problems. When incoming prospects encounter friction or delays, commercial momentum collapses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lostPoints.map((item, idx) => (
              <div 
                key={item.title}
                className="bg-[#050505] border border-[#292824] p-6 sm:p-7 flex flex-col justify-between min-h-[170px]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#A7A39B] mb-4">
                  <span className="text-[#FF4D2E] font-medium">POINT 0{idx + 1}</span>
                  <span>BREAKDOWN</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#F1EEE7] font-display tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-[#A7A39B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: What We Build */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60 bg-[#080808]">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">02</span>
                <span>/</span>
                <span>CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight">
                WHAT WE BUILD
              </h2>
            </div>
            <div className="lg:col-span-6 flex lg:justify-end">
              <p className="text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed max-w-lg">
                Structured components designed to bridge the gap between initial contact and meaningful conversation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatWeBuild.map((item) => (
              <div 
                key={item.num}
                className="bg-[#050505] border border-[#292824] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#FF4D2E] font-medium tracking-widest block mb-4">
                    {item.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F1EEE7] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-sans text-[#C2BFB8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: The System Visual Workflow */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
            <span className="text-[#FF4D2E] font-medium">03</span>
            <span>/</span>
            <span>ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight mb-6 break-words">
            THE SYSTEM
          </h2>
          <p className="text-[16.5px] sm:text-[18px] text-[#C2BFB8] font-sans leading-relaxed max-w-2xl mb-10">
            A continuous sequence that moves prospects from inbound engagement to human confirmation without administrative leakage.
          </p>

          {/* Workflow Sequence Ribbon */}
          <div className="bg-[#050505] border border-[#292824] p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292824] pb-4 mb-8 text-xs font-mono text-[#A7A39B] uppercase tracking-wider">
              <span className="text-[#F1EEE7]">END-TO-END LEAD ROUTING PROTOCOL</span>
              <span className="text-[#FF4D2E]">VERIFIED PIPELINE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
              {workflowStages.map((stage, idx) => {
                const IconComponent = stage.icon
                return (
                  <div 
                    key={stage.stage}
                    className={`bg-[#0B0B0B] border p-4 flex flex-col justify-between min-h-[140px] relative ${
                      stage.isHighlight 
                        ? 'border-[#FF4D2E] bg-[#FF4D2E]/5' 
                        : stage.isAccent 
                          ? 'border-[#FF4D2E]/60' 
                          : 'border-[#292824]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A7A39B]">
                      <span className={stage.isHighlight ? 'text-[#FF4D2E] font-semibold' : ''}>{stage.stage}</span>
                      <IconComponent className={`w-3.5 h-3.5 ${stage.isHighlight || stage.isAccent ? 'text-[#FF4D2E]' : 'text-[#A7A39B]'}`} />
                    </div>

                    <div>
                      <span className="text-xs font-mono font-medium text-[#F1EEE7] block">
                        {stage.label}
                      </span>
                    </div>

                    {idx < workflowStages.length - 1 && (
                      <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#292824] text-xs z-10 font-mono">
                        →
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: When This Makes Sense */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60 bg-[#070707]">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">04</span>
                <span>/</span>
                <span>FEASIBILITY EVALUATION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight leading-[1.05] break-words">
                WHEN THIS MAKES SENSE
              </h2>
              <p className="mt-4 text-[16px] sm:text-[17.5px] text-[#A7A39B] font-sans leading-relaxed">
                Not every business needs dedicated pipeline software. Lead systems create the highest commercial leverage under clear operational conditions:
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3">
              {whenMakesSense.map((point, idx) => (
                <div 
                  key={idx}
                  className="bg-[#050505] border border-[#292824] p-5 sm:p-6 flex items-start gap-4"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF4D2E] mt-2 shrink-0" />
                  <p className="text-[16px] sm:text-[17px] text-[#F1EEE7] font-sans leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Related Services & Direct CTA */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="max-w-[1520px] mx-auto">
          <div className="bg-[#050505] border border-[#292824] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">+</span>
                <span>INITIATE ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                BUILD A LEAD SYSTEM
              </h2>
              <p className="mt-4 text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed">
                Tell us where your leads currently arrive and where opportunities are being missed. We will determine the right pipeline approach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#F1EEE7] hover:bg-[#FF4D2E] text-[#0B0B0B] hover:text-white transition-colors duration-300 px-8 py-4 rounded-full text-xs font-mono tracking-[0.16em] uppercase font-semibold active:translate-y-0.5"
              >
                <span>BUILD A LEAD SYSTEM</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Related Services Links */}
          <div className="mt-12 pt-8 border-t border-[#292824]/60 flex flex-wrap items-center justify-between gap-6 text-xs font-mono tracking-wider uppercase text-[#A7A39B]">
            <span className="text-[#F1EEE7]">EXPLORE RELATED SYSTEMS:</span>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/business-automation" className="hover:text-[#FF4D2E] transition-colors">
                BUSINESS AUTOMATION →
              </Link>
              <Link href="/custom-software" className="hover:text-[#FF4D2E] transition-colors">
                CUSTOM SOFTWARE →
              </Link>
              <Link href="/work" className="hover:text-[#FF4D2E] transition-colors">
                SELECTED WORK →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
