import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import AmbientLine from '../components/AmbientLine'
import { Link } from '../router/Router'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

export default function ThankYouPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <article className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] pt-28 sm:pt-36 pb-20 sm:pb-28">
      <SEO 
        title="Brief Received | Valume"
        description="We have received your project brief and will review what you are trying to build or fix."
        canonicalUrl="https://valume.studio/thank-you"
        noIndex={true}
      />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Category Marker */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#A7A39B] mb-8"
        >
          <span className="text-[#FF4D2E] font-semibold text-[13px] leading-none">+</span>
          <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
          <Link href="/" className="hover:text-[#F1EEE7] transition-colors">VALUME</Link>
          <span>/</span>
          <span className="text-[#F1EEE7]">CONFIRMATION</span>
        </motion.div>

        {/* Ambient Signal Line */}
        <div className="w-full mb-12 sm:mb-16">
          <AmbientLine duration={6.4} delay={0} length="200px" opacity={0.25} className="w-full" />
        </div>

        {/* Core Message Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.0] break-words">
              BRIEF RECEIVED.
            </h1>

            <p className="mt-8 text-xl sm:text-2xl text-[#F1EEE7] font-display font-light leading-snug max-w-2xl">
              Thanks for reaching out to Valume. We've received your project brief and will review what you're trying to build or fix.
            </p>

            <p className="mt-4 text-[16px] sm:text-[17.5px] text-[#A7A39B] font-sans leading-relaxed max-w-xl">
              Your inquiry has been submitted successfully.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 bg-[#F1EEE7] hover:bg-[#FF4D2E] text-[#0B0B0B] hover:text-white transition-colors duration-300 px-8 py-4 rounded-full text-xs font-mono tracking-[0.16em] uppercase font-semibold active:translate-y-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E]"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>BACK TO VALUME</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Direct Engineering Review Note */}
          <div className="lg:col-span-4 bg-[#050505] border border-[#292824] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F1EEE7]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
              <span>DIRECT COMMERCIAL REVIEW</span>
            </div>
            <p className="text-sm font-sans text-[#A7A39B] leading-relaxed">
              Every inquiry is reviewed directly by a systems engineer to assess technical feasibility, scope, and operational architecture.
            </p>
            <div className="pt-4 border-t border-[#292824]/60 text-xs font-mono uppercase tracking-wider text-[#A7A39B]">
              <span className="block text-[#C2BFB8] mb-1">DIRECT INQUIRIES:</span>
              <a 
                href="mailto:valume.studios@gmail.com" 
                className="text-[#F1EEE7] hover:text-[#FF4D2E] transition-colors lowercase"
              >
                valume.studios@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </article>
  )
}
