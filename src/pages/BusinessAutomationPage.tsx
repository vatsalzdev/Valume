import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import AmbientLine from '../components/AmbientLine'
import { Link } from '../router/Router'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const automationAreas = [
  {
    num: '01',
    title: 'Lead Handling',
    desc: 'Capture, organize, qualify, and route incoming inquiries without manual copy-pasting between mailboxes and databases.'
  },
  {
    num: '02',
    title: 'Scheduling',
    desc: 'Connect requests, calendar availability, timezone routing, buffer periods, and booking notifications automatically.'
  },
  {
    num: '03',
    title: 'Communication',
    desc: 'Trigger appropriate confirmations, appointment reminders, onboarding instructions, and status follow-ups.'
  },
  {
    num: '04',
    title: 'Internal Workflows',
    desc: 'Move information between tools and teams without repetitive manual entry or missing handoffs.'
  },
  {
    num: '05',
    title: 'Notifications',
    desc: 'Surface important events, pipeline changes, or client issues to the specific team members responsible for acting on them.'
  },
  {
    num: '06',
    title: 'Reporting',
    desc: 'Collect operational information into centralized summaries that are clear, real-time, and easy to understand.'
  }
]

const approachSteps = [
  { step: '01', title: 'MAP', desc: 'Document the end-to-end human and software steps across the active business operation.' },
  { step: '02', title: 'IDENTIFY', desc: 'Isolate high-friction bottlenecks, repetitive tasks, and frequent sources of human data error.' },
  { step: '03', title: 'DESIGN', desc: 'Architect logic paths that preserve human judgment where nuance and discretion matter.' },
  { step: '04', title: 'BUILD', desc: 'Develop resilient API connections, webhook triggers, data transformers, and validation checks.' },
  { step: '05', title: 'TEST', desc: 'Stress-test all edge cases, exceptions, rate limits, and fallback routines under realistic conditions.' },
  { step: '06', title: 'DEPLOY', desc: 'Implement into production workflows alongside team guidance and monitoring safeguards.' },
  { step: '07', title: 'CALIBRATE', desc: 'Refine workflow timing, thresholds, and filters based on observed operational feedback.' }
]

export default function BusinessAutomationPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <article className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] pt-24 sm:pt-28 pb-20 sm:pb-24">
      <SEO 
        title="Business Automation Systems | Valume"
        description="Valume builds business automation systems for lead handling, scheduling, communication, internal workflows, and repetitive operational work."
        canonicalUrl="https://valume.studio/business-automation"
        breadcrumbs={[
          { name: 'Home', url: 'https://valume.studio/' },
          { name: 'Business Automation', url: 'https://valume.studio/business-automation' }
        ]}
      />

      {/* Header / Hero */}
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
            <span className="text-[#F1EEE7]">SERVICE 02</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.1 }}
                className="text-[2.1rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.05] break-words"
              >
                BUSINESS AUTOMATION
              </motion.h1>
              <motion.p 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.2 }}
                className="mt-6 text-xl sm:text-2xl text-[#F1EEE7] font-display font-light leading-snug max-w-3xl"
              >
                Automation is useful when it removes repetitive work without making the business harder to operate.
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
                  Valume maps how a business actually works, identifies repetitive or error-prone steps, and builds workflows around the existing operation.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 w-full">
            <AmbientLine duration={6.2} delay={0} length="180px" opacity={0.25} className="w-full" />
          </div>
        </div>
      </header>

      {/* Section 01: What Can Be Automated */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">01</span>
                <span>/</span>
                <span>OPERATIONAL DOMAINS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                WHAT CAN BE AUTOMATED
              </h2>
            </div>
            <div className="lg:col-span-6 flex lg:justify-end">
              <p className="text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed max-w-lg">
                Practical workflow automation across the day-to-day coordination requirements of growing operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {automationAreas.map((item) => (
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

      {/* Section 02: Automation Should Remove Friction */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60 bg-[#080808]">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">02</span>
                <span>/</span>
                <span>ENGINEERING PRINCIPLE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight leading-[1.08] break-words">
                AUTOMATION SHOULD REMOVE FRICTION
              </h2>
            </div>
            <div className="lg:col-span-6">
              <blockquote className="border-l-2 border-[#FF4D2E] pl-6 sm:pl-8 py-2">
                <p className="text-xl sm:text-2xl font-display text-[#F1EEE7] leading-snug">
                  "Not every process should be automated. The goal is to remove unnecessary manual work while preserving the decisions that require people."
                </p>
              </blockquote>
              <p className="mt-6 text-[16px] sm:text-[17px] text-[#A7A39B] font-sans leading-relaxed">
                When automation is forced onto processes that lack structure, it amplifies confusion. Valume builds workflows that align cleanly with the business model, reducing operational drag while giving human managers complete oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: How We Approach It */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
            <span className="text-[#FF4D2E] font-medium">03</span>
            <span>/</span>
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight mb-6 break-words">
            HOW WE APPROACH IT
          </h2>
          <p className="text-[16.5px] sm:text-[18px] text-[#C2BFB8] font-sans leading-relaxed max-w-2xl mb-12">
            A linear progression designed to ensure workflows reflect reality before deployment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {approachSteps.map((item, idx) => (
              <div 
                key={item.step}
                className="bg-[#050505] border border-[#292824] p-5 flex flex-col justify-between min-h-[170px]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#A7A39B] mb-4">
                  <span className="text-[#FF4D2E] font-medium">{item.step}</span>
                  {idx < approachSteps.length - 1 && <span className="hidden lg:inline text-[#292824]">→</span>}
                </div>
                <div>
                  <h3 className="text-base font-medium font-mono text-[#F1EEE7] tracking-wider mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-sans text-[#A7A39B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: CTA & Related Services */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="max-w-[1520px] mx-auto">
          <div className="bg-[#050505] border border-[#292824] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">+</span>
                <span>SYSTEM FABRICATION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                AUTOMATE A WORKFLOW
              </h2>
              <p className="mt-4 text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed">
                Identify the repetitive tasks slowing down your operation. We will design and build an automated system around how you operate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#F1EEE7] hover:bg-[#FF4D2E] text-[#0B0B0B] hover:text-white transition-colors duration-300 px-8 py-4 rounded-full text-xs font-mono tracking-[0.16em] uppercase font-semibold active:translate-y-0.5"
              >
                <span>AUTOMATE A WORKFLOW</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-[#292824]/60 flex flex-wrap items-center justify-between gap-6 text-xs font-mono tracking-wider uppercase text-[#A7A39B]">
            <span className="text-[#F1EEE7]">EXPLORE RELATED SYSTEMS:</span>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/lead-generation" className="hover:text-[#FF4D2E] transition-colors">
                LEAD GENERATION →
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
