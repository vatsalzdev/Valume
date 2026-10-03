import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import AmbientLine from '../components/AmbientLine'
import { Link } from '../router/Router'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const whenMakesSense = [
  {
    title: 'Off-the-shelf software forces inefficient workarounds',
    desc: 'Teams spend hours adapting their natural workflow to accommodate the rigid limitations or missing features of generic tools.'
  },
  {
    title: 'Multiple systems need reliable synchronization',
    desc: 'Critical customer, operational, or financial records live in silos, requiring manual reconciliation or unreliable third-party bridges.'
  },
  {
    title: 'A core operational workflow is unique to the business',
    desc: 'Your competitive advantage relies on a proprietary process or delivery model that no commercial software accommodates.'
  },
  {
    title: 'Internal operations have become unmanageable manually',
    desc: 'Spreadsheets, messy inbox folders, and fragmented message threads have reached operational breaking points.'
  },
  {
    title: 'An existing product needs capabilities it does not provide',
    desc: 'You need focused extensions, custom integration layers, or specialized interfaces connected to an established database.'
  }
]

const whatWeCanBuild = [
  {
    num: '01',
    title: 'Internal Business Tools',
    desc: 'Dedicated back-office applications built around team task assignment, review flows, and operational execution.'
  },
  {
    num: '02',
    title: 'Dashboards',
    desc: 'Focused monitoring interfaces that consolidate real-time operational status, project states, and business metrics.'
  },
  {
    num: '03',
    title: 'Workflow Applications',
    desc: 'Software engineered to guide complex multi-step processes from initial input through validation and delivery.'
  },
  {
    num: '04',
    title: 'APIs & Integrations',
    desc: 'Robust communication interfaces that connect third-party platforms, proprietary databases, and payment runtimes.'
  },
  {
    num: '05',
    title: 'Customer-Facing Applications',
    desc: 'Secure digital interfaces where clients submit requests, inspect deliverables, and manage ongoing engagements.'
  },
  {
    num: '06',
    title: 'Purpose-Built Management Systems',
    desc: 'Targeted systems for scheduling, resource tracking, inventory flow, or specialized commercial transactions.'
  }
]

const approachSteps = [
  { step: '01', title: 'UNDERSTAND', desc: 'Dissect the core operational requirements and underlying business model.' },
  { step: '02', title: 'ARCHITECT', desc: 'Design schemas, APIs, security boundaries, and resilient state machines.' },
  { step: '03', title: 'BUILD', desc: 'Develop TypeScript runtimes, secure databases, and tailored React interfaces.' },
  { step: '04', title: 'TEST', desc: 'Validate error states, concurrent access, edge constraints, and performance.' },
  { step: '05', title: 'DEPLOY', desc: 'Launch into production with verified pipelines and backup redundancies.' },
  { step: '06', title: 'REFINE', desc: 'Iterate based on observed user interaction and real business load.' }
]

export default function CustomSoftwarePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <article className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] pt-24 sm:pt-28 pb-20 sm:pb-24">
      <SEO 
        title="Custom Software Development for Businesses | Valume"
        description="Valume builds custom software for business workflows that existing tools cannot solve efficiently."
        canonicalUrl="https://valume.studio/custom-software"
        breadcrumbs={[
          { name: 'Home', url: 'https://valume.studio/' },
          { name: 'Custom Software', url: 'https://valume.studio/custom-software' }
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
            <span className="text-[#F1EEE7]">SERVICE 04</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.1 }}
                className="text-[2.1rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.05] break-words"
              >
                CUSTOM SOFTWARE
              </motion.h1>
              <motion.p 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.2 }}
                className="mt-6 text-xl sm:text-2xl text-[#F1EEE7] font-display font-light leading-snug max-w-3xl"
              >
                Sometimes the problem is not finding the right software. It is that the right software does not exist yet.
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
                  Valume designs and builds purpose-built software around business workflows, operational requirements, and specific problems that existing tools cannot handle efficiently.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 w-full">
            <AmbientLine duration={6.5} delay={0} length="180px" opacity={0.25} className="w-full" />
          </div>
        </div>
      </header>

      {/* Section 01: When Custom Software Makes Sense */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">01</span>
                <span>/</span>
                <span>EVALUATION CRITERIA</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight leading-[1.05] break-words">
                WHEN CUSTOM SOFTWARE MAKES SENSE
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[16.5px] sm:text-[18px] text-[#C2BFB8] font-sans leading-relaxed max-w-2xl">
                Custom software requires focused engineering effort. We advise clients to invest in purpose-built software when generic SaaS subscriptions cost more in lost productivity and workarounds than building the right tool.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whenMakesSense.map((item, idx) => (
              <div 
                key={item.title}
                className="bg-[#050505] border border-[#292824] p-6 sm:p-7 flex flex-col justify-between min-h-[170px]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#A7A39B] mb-4">
                  <span className="text-[#FF4D2E] font-medium">SCENARIO 0{idx + 1}</span>
                  <span>TRIGGER</span>
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

      {/* Section 02: What We Can Build */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60 bg-[#080808]">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">02</span>
                <span>/</span>
                <span>ENGINEERING CAPABILITY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                WHAT WE CAN BUILD
              </h2>
            </div>
            <div className="lg:col-span-6 flex lg:justify-end">
              <p className="text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed max-w-lg">
                Practical, maintainable software engineered to solve defined operational problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatWeCanBuild.map((item) => (
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

      {/* Section 03: Build Around the Workflow */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">03</span>
                <span>/</span>
                <span>CORE ADVANTAGE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight leading-[1.08] break-words">
                BUILD AROUND THE WORKFLOW
              </h2>
            </div>
            <div className="lg:col-span-6">
              <blockquote className="border-l-2 border-[#FF4D2E] pl-6 sm:pl-8 py-2">
                <p className="text-xl sm:text-2xl font-display text-[#F1EEE7] leading-snug">
                  "Instead of forcing a business into the limitations of an existing tool, custom software can be designed around the way the operation actually works."
                </p>
              </blockquote>
              <p className="mt-6 text-[16px] sm:text-[17px] text-[#A7A39B] font-sans leading-relaxed">
                When software matches your operating reality, onboarding is natural, manual workarounds disappear, and data stays clean. Designing software around the way the business actually works, rather than forcing the workflow into an existing tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Our Approach */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60 bg-[#080808]">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
            <span className="text-[#FF4D2E] font-medium">04</span>
            <span>/</span>
            <span>DEVELOPMENT ROADMAP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight mb-6 break-words">
            OUR APPROACH
          </h2>
          <p className="text-[16.5px] sm:text-[18px] text-[#C2BFB8] font-sans leading-relaxed max-w-2xl mb-12">
            Engineered step-by-step from operational clarity through tested production deployment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
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

      {/* Section 05: CTA & Related Services */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="max-w-[1520px] mx-auto">
          <div className="bg-[#050505] border border-[#292824] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">+</span>
                <span>CUSTOM ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                DISCUSS CUSTOM SOFTWARE
              </h2>
              <p className="mt-4 text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed">
                Tell us about the workflow bottleneck you are experiencing. We will evaluate whether custom software makes commercial sense for your operation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#F1EEE7] hover:bg-[#FF4D2E] text-[#0B0B0B] hover:text-white transition-colors duration-300 px-8 py-4 rounded-full text-xs font-mono tracking-[0.16em] uppercase font-semibold active:translate-y-0.5"
              >
                <span>DISCUSS CUSTOM SOFTWARE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-[#292824]/60 flex flex-wrap items-center justify-between gap-6 text-xs font-mono tracking-wider uppercase text-[#A7A39B]">
            <span className="text-[#F1EEE7]">EXPLORE RELATED SYSTEMS:</span>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/business-automation" className="hover:text-[#FF4D2E] transition-colors">
                BUSINESS AUTOMATION →
              </Link>
              <Link href="/digital-products" className="hover:text-[#FF4D2E] transition-colors">
                DIGITAL PRODUCTS →
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
