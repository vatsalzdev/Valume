import { useState, useRef, FormEvent } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { submitBrief } from '../services/contact'
import AmbientLine from './AmbientLine'
import { useRouter } from '../router/Router'
import { getTrafficSource } from '../utils/source'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const projectTypes = [
  'Lead Generation',
  'Business Automation',
  'Digital Product',
  'Custom Software'
] as const

type FormStatus = 'IDLE' | 'SUBMITTING' | 'ERROR'

export default function Initiation() {
  const { navigate } = useRouter()
  const [selectedType, setSelectedType] = useState<string>(projectTypes[0])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [objective, setObjective] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [source] = useState<string>(() => getTrafficSource())
  const [status, setStatus] = useState<FormStatus>('IDLE')
  const [errorMessage, setErrorMessage] = useState('')
  
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })
  const shouldReduceMotion = useReducedMotion()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setErrorMessage('Please enter your name.')
      return
    }

    const emailTrim = email.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailTrim || !emailRegex.test(emailTrim)) {
      setErrorMessage('Please provide a valid work email address.')
      return
    }

    if (!objective.trim()) {
      setErrorMessage("Please tell us what you're trying to build or fix.")
      return
    }

    setStatus('SUBMITTING')
    setErrorMessage('')

    try {
      await submitBrief({
        projectType: selectedType,
        name: name.trim(),
        email: emailTrim,
        phone: phone.trim() ? phone.trim() : undefined,
        message: objective.trim(),
        source,
        hp_field: honeypot,
      })
      navigate('/thank-you')
    } catch (err) {
      setStatus('ERROR')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong while submitting the brief. Please try again.'
      )
    }
  }

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#050505] text-[#F1EEE7] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-t border-[#292824] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-[1520px] mx-auto w-full">
        
        {/* Ambient Signal Line — Calm hairline signal traversing whitespace */}
        <div className="w-full mb-10 sm:mb-14">
          <AmbientLine 
            duration={6.8} 
            delay={4.1} 
            length="200px" 
            opacity={0.25} 
            className="w-full" 
          />
        </div>

        {/* Two-Column Composition: Left (45-50%) / Right (50-55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* LEFT SIDE (approximately 45-50% width) */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Index Marker: Keep only + 06 / INITIATION */}
            <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#A7A39B]">
              <span className="text-[#FF4D2E] font-semibold text-[13px] leading-none">+</span>
              <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
              <span>06 / INITIATION</span>
            </div>

            {/* Monumental Headline: 64-90px desktop */}
            <h2 className="mt-6 text-4xl sm:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[0.98]">
              BUILD SOMETHING<br />
              THAT ACTUALLY WORKS.
            </h2>

            {/* Short Supporting Copy: 17-18px desktop, 16-17px mobile */}
            <p className="mt-6 sm:mt-8 text-[16.5px] sm:text-[17.5px] lg:text-[18px] text-[#C2BFB8] font-sans leading-[1.6] max-w-md">
              Tell us what you're trying to build, improve, or fix.
            </p>
          </motion.div>

          {/* RIGHT SIDE (approximately 50-55% width): Minimal Inquiry Form */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: EASE_EDITORIAL, delay: 0.15 }}
            className="lg:col-span-7 bg-[#050505] border border-[#292824] p-6 sm:p-10 lg:p-12 rounded-sm"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
              {/* Invisible Honeypot Spam Protection Field */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="initiation_verification">Leave this empty</label>
                <input
                  type="text"
                  id="initiation_verification"
                  name="initiation_verification"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
              
              {/* 01 — PROJECT TYPE (Compact selectable options) */}
                <div>
                  <label className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block mb-3">
                    PROJECT TYPE
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {projectTypes.map((type) => {
                      const isSelected = selectedType === type
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-3 text-xs sm:text-[13px] font-mono tracking-wider text-left transition-colors duration-200 border rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E] ${
                            isSelected
                              ? 'bg-[#F1EEE7] text-[#0B0B0B] border-[#F1EEE7] font-medium'
                              : 'bg-transparent text-[#A7A39B] border-[#292824] hover:border-[#A7A39B]/70 hover:text-[#F1EEE7]'
                          }`}
                        >
                          {type}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Subtle 1px Separator */}
                <div className="w-full h-[1px] bg-[#292824]/60 my-1" />

                {/* 02 & 03 — YOUR NAME & WORK EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block mb-2">
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-[#0B0B0B] border border-[#292824] hover:border-[#A7A39B]/50 focus:border-[#FF4D2E] focus:ring-1 focus:ring-[#FF4D2E]/30 text-[16px] sm:text-[17px] text-[#F1EEE7] px-4 py-3 sm:py-3.5 font-sans focus:outline-none transition-colors duration-200 placeholder:text-[#55534E]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block mb-2">
                      WORK EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-[#0B0B0B] border border-[#292824] hover:border-[#A7A39B]/50 focus:border-[#FF4D2E] focus:ring-1 focus:ring-[#FF4D2E]/30 text-[16px] sm:text-[17px] text-[#F1EEE7] px-4 py-3 sm:py-3.5 font-mono focus:outline-none transition-colors duration-200 placeholder:text-[#55534E]"
                    />
                  </div>
                </div>

                {/* 04 — PHONE / WHATSAPP — OPTIONAL */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="phone" className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block">
                      PHONE / WHATSAPP
                    </label>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#A7A39B]/60 uppercase">
                      OPTIONAL
                    </span>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0B0B0B] border border-[#292824] hover:border-[#A7A39B]/50 focus:border-[#FF4D2E] focus:ring-1 focus:ring-[#FF4D2E]/30 text-[16px] sm:text-[17px] text-[#F1EEE7] px-4 py-3 sm:py-3.5 font-mono focus:outline-none transition-colors duration-200 placeholder:text-[#55534E]"
                  />
                </div>

                {/* 05 — WHAT ARE YOU TRYING TO BUILD OR FIX? */}
                <div>
                  <label htmlFor="objective" className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block mb-2">
                    WHAT ARE YOU TRYING TO BUILD OR FIX?
                  </label>
                  <textarea
                    id="objective"
                    rows={4}
                    required
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="Tell us what you're trying to build, improve, or fix."
                    className="w-full bg-[#0B0B0B] border border-[#292824] hover:border-[#A7A39B]/50 focus:border-[#FF4D2E] focus:ring-1 focus:ring-[#FF4D2E]/30 text-[16px] sm:text-[17px] text-[#F1EEE7] px-4 py-3 sm:py-3.5 font-sans focus:outline-none transition-colors duration-200 placeholder:text-[#55534E] resize-none leading-relaxed"
                  />
                </div>

                {/* Simple Inline Error if needed */}
                {status === 'ERROR' && (
                  <div className="p-3 bg-[#FF4D2E]/10 border border-[#FF4D2E]/40 text-xs font-mono text-[#F1EEE7]">
                    <p className="text-[#C2BFB8] font-sans text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Submit Action: INITIATE PROJECT → */}
                <div className="pt-2 flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={status === 'SUBMITTING'}
                    className="group inline-flex items-center gap-2 bg-[#F1EEE7] hover:bg-[#FF4D2E] disabled:bg-[#292824] text-[#0B0B0B] hover:text-white disabled:text-[#A7A39B] transition-colors duration-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-[13px] font-mono tracking-[0.16em] uppercase font-semibold active:translate-y-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E]"
                  >
                    {status === 'SUBMITTING' ? (
                      <span>SUBMITTING...</span>
                    ) : (
                      <>
                        <span>INITIATE PROJECT</span>
                        <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
