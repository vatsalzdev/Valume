import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import AmbientLine from '../components/AmbientLine'
import { Link } from '../router/Router'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const productOfferings = [
  {
    num: '01',
    title: 'Customer Portals',
    desc: 'Interfaces that give customers self-service access to accounts, project tracking, documentation, or services.'
  },
  {
    num: '02',
    title: 'Internal Products',
    desc: 'Purpose-built applications engineered for high-leverage business operations, onboarding, or client delivery.'
  },
  {
    num: '03',
    title: 'Web Applications',
    desc: 'Interactive software products engineered around a defined user journey, clear permissions, and secure infrastructure.'
  },
  {
    num: '04',
    title: 'Product Prototypes',
    desc: 'Working software prototypes used to validate customer demand and user flows before committing substantial capital.'
  },
  {
    num: '05',
    title: 'Workflow Products',
    desc: 'Software that packages a recurring business process into an autonomous tool or standalone digital product.'
  }
]

const productLifecycle = [
  { step: '01', title: 'DISCOVER', desc: 'Isolate user friction, commercial goals, and primary functional requirements.' },
  { step: '02', title: 'DEFINE', desc: 'Establish user flows, data models, technical scope, and core UX boundaries.' },
  { step: '03', title: 'PROTOTYPE', desc: 'Develop clickable and functional prototypes to validate assumptions early.' },
  { step: '04', title: 'BUILD', desc: 'Engineer production-grade frontend interfaces, databases, and APIs.' },
  { step: '05', title: 'TEST', desc: 'Verify usability, device responsiveness, security, and edge behaviors.' },
  { step: '06', title: 'DEPLOY', desc: 'Launch into production with continuous monitoring, performance logging, and rollout controls.' }
]

export default function DigitalProductsPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <article className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] pt-24 sm:pt-28 pb-20 sm:pb-24">
      <SEO 
        title="Digital Products & Web Applications | Valume"
        description="Valume designs and builds customer-facing web applications, portals, and digital products around specific business models and workflows."
        canonicalUrl="https://valume.studio/digital-products"
        breadcrumbs={[
          { name: 'Home', url: 'https://valume.studio/' },
          { name: 'Digital Products', url: 'https://valume.studio/digital-products' }
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
            <span className="text-[#F1EEE7]">SERVICE 03</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.1 }}
                className="text-[2.1rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.05] break-words"
              >
                DIGITAL PRODUCTS
              </motion.h1>
              <motion.p 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_EDITORIAL, delay: 0.2 }}
                className="mt-6 text-xl sm:text-2xl text-[#F1EEE7] font-display font-light leading-snug max-w-3xl"
              >
                Some business opportunities need more than another tool. They need a product.
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
                  Valume designs and builds web applications, portals, and digital products around a specific customer experience, business model, or operational workflow.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 w-full">
            <AmbientLine duration={6.4} delay={0} length="180px" opacity={0.25} className="w-full" />
          </div>
        </div>
      </header>

      {/* Section 01: What We Build */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">01</span>
                <span>/</span>
                <span>PRODUCT TAXONOMY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                WHAT WE BUILD
              </h2>
            </div>
            <div className="lg:col-span-6 flex lg:justify-end">
              <p className="text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed max-w-lg">
                Software solutions tailored for modern browsers, mobile viewports, and mission-critical workflows.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productOfferings.map((item) => (
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

      {/* Section 02: From Idea to Working Product */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60 bg-[#080808]">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
            <span className="text-[#FF4D2E] font-medium">02</span>
            <span>/</span>
            <span>PRODUCT DELIVERY LIFECYCLE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight mb-6 break-words">
            FROM IDEA TO WORKING PRODUCT
          </h2>
          <p className="text-[16.5px] sm:text-[18px] text-[#C2BFB8] font-sans leading-relaxed max-w-2xl mb-12">
            A disciplined development cadence taking products from initial concept to deployed runtime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {productLifecycle.map((item, idx) => (
              <div 
                key={item.step}
                className="bg-[#050505] border border-[#292824] p-5 flex flex-col justify-between min-h-[170px]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#A7A39B] mb-4">
                  <span className="text-[#FF4D2E] font-medium">{item.step}</span>
                  {idx < productLifecycle.length - 1 && <span className="hidden lg:inline text-[#292824]">→</span>}
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

      {/* Section 03: The Product Has to Solve Something */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-b border-[#292824]/60">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39B] mb-3">
                <span className="text-[#FF4D2E] font-medium">03</span>
                <span>/</span>
                <span>FOUNDATIONAL THESIS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight leading-[1.08] break-words">
                THE PRODUCT HAS TO SOLVE SOMETHING
              </h2>
            </div>
            <div className="lg:col-span-6">
              <blockquote className="border-l-2 border-[#FF4D2E] pl-6 sm:pl-8 py-2">
                <p className="text-xl sm:text-2xl font-display text-[#F1EEE7] leading-snug">
                  "Technology is only useful when the product has a clear user, a real problem, and a reason to exist."
                </p>
              </blockquote>
              <p className="mt-6 text-[16px] sm:text-[17px] text-[#A7A39B] font-sans leading-relaxed">
                We avoid building software for vanity. Every digital product we engineer is designed around a distinct business dynamic—reducing transaction friction, replacing manual back-and-forth, or opening an entirely new revenue channel.
              </p>
            </div>
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
                <span>PRODUCT DEVELOPMENT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F1EEE7] tracking-tight break-words">
                BUILD A DIGITAL PRODUCT
              </h2>
              <p className="mt-4 text-[16px] sm:text-[17.5px] text-[#C2BFB8] font-sans leading-relaxed">
                Whether you need a customer portal, an internal application, or a focused product prototype, we can build it around your business model.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#F1EEE7] hover:bg-[#FF4D2E] text-[#0B0B0B] hover:text-white transition-colors duration-300 px-8 py-4 rounded-full text-xs font-mono tracking-[0.16em] uppercase font-semibold active:translate-y-0.5"
              >
                <span>BUILD A DIGITAL PRODUCT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-[#292824]/60 flex flex-wrap items-center justify-between gap-6 text-xs font-mono tracking-wider uppercase text-[#A7A39B]">
            <span className="text-[#F1EEE7]">EXPLORE RELATED SYSTEMS:</span>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/custom-software" className="hover:text-[#FF4D2E] transition-colors">
                CUSTOM SOFTWARE →
              </Link>
              <Link href="/work" className="hover:text-[#FF4D2E] transition-colors">
                SELECTED WORK →
              </Link>
              <Link href="/lead-generation" className="hover:text-[#FF4D2E] transition-colors">
                LEAD GENERATION →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
