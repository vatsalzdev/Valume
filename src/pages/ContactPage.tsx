import { useState, FormEvent } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { submitBrief } from '../services/contact'
import SEO from '../components/SEO'
import AmbientLine from '../components/AmbientLine'
import { Link, useRouter } from '../router/Router'
import { getTrafficSource } from '../utils/source'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const projectTypes = [
  'Lead Generation',
  'Business Automation',
  'Digital Product',
  'Custom Software'
] as const

type FormStatus = 'IDLE' | 'SUBMITTING' | 'ERROR'

export default function ContactPage() {
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
        phone: phone.trim() || undefined,
        message: objective.trim(),
        source,
        hp_field: honeypot,
      })

      // Seamless client-side navigation to /thank-you upon verified submission
      navigate('/thank-you')
    } catch (err) {
      setStatus('ERROR')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong while submitting the brief. Please try again.'
      )
    }
  }

  return (
    <article className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] pt-24 sm:pt-28 pb-20 sm:pb-24">
      <SEO 
        title="Start a Project | Valume"
        description="Tell us what you are trying to build, improve, or fix. Valume designs and builds lead generation systems, business automations, digital products, and custom software."
        canonicalUrl="https://valume.studio/contact"
        breadcrumbs={[
          { name: 'Home', url: 'https://valume.studio/' },
          { name: 'Contact', url: 'https://valume.studio/contact' }
        ]}
      />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        
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
          <span className="text-[#F1EEE7]">PROJECT BRIEFING</span>
        </motion.div>

        {/* Ambient Signal Line */}
        <div className="w-full mb-10 sm:mb-14">
          <AmbientLine duration={6.8} delay={0} length="200px" opacity={0.25} className="w-full" />
        </div>

        {/* Two-Column Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Side: Headline & Narrative */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 className="text-[2.2rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.04] break-words">
              BUILD SOMETHING<br />
              THAT ACTUALLY WORKS.
            </h1>

            <p className="mt-6 sm:mt-8 text-[16.5px] sm:text-[17.5px] lg:text-[18px] text-[#C2BFB8] font-sans leading-[1.6] max-w-md">
              Tell us what you're trying to build, improve, or fix.
            </p>

            <div className="mt-10 pt-8 border-t border-[#292824]/60 space-y-4 text-xs font-mono tracking-wider uppercase text-[#A7A39B]">
              <div className="flex items-center gap-3 text-[#F1EEE7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                <span>DIRECT COMMERCIAL REVIEW</span>
              </div>
              <p className="font-sans normal-case text-sm text-[#A7A39B] leading-relaxed">
                Every inquiry is reviewed directly by a systems engineer. We assess feasibility, technical scope, and whether custom development makes commercial sense.
              </p>
            </div>

            {/* Direct Channel Links */}
            <div className="mt-8 pt-6 border-t border-[#292824]/60 flex flex-wrap items-center gap-6 text-xs font-mono tracking-wider uppercase text-[#A7A39B]">
              <a 
                href="mailto:valume.studios@gmail.com" 
                className="hover:text-[#FF4D2E] transition-colors lowercase"
              >
                valume.studios@gmail.com
              </a>
              <span className="text-[#292824]">•</span>
              <a 
                href="https://www.instagram.com/valume.lab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FF4D2E] transition-colors flex items-center gap-1.5"
              >
                <span>INSTAGRAM</span>
                <span className="text-[11px]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-[#050505] border border-[#292824] p-6 sm:p-10 lg:p-12 rounded-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
              
              {/* Invisible Honeypot Spam Protection Field */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="contact_verification">Leave this empty</label>
                <input
                  type="text"
                  id="contact_verification"
                  name="contact_verification"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* 01 — PROJECT TYPE */}
              <div>
                <label className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block mb-3">
                  01 — PROJECT TYPE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {projectTypes.map((type) => {
                    const isSelected = selectedType === type
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`text-left px-4 py-3 sm:py-3.5 text-xs sm:text-[13px] font-mono transition-colors duration-200 border ${
                          isSelected
                            ? 'bg-[#F1EEE7] text-[#0B0B0B] border-[#F1EEE7] font-medium'
                            : 'bg-[#0B0B0B] text-[#A7A39B] border-[#292824] hover:border-[#A7A39B]/50'
                        }`}
                      >
                        {type}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 02 — YOUR NAME */}
              <div>
                <label htmlFor="name" className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block mb-2">
                  02 — YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-[#0B0B0B] border border-[#292824] hover:border-[#A7A39B]/50 focus:border-[#FF4D2E] focus:ring-1 focus:ring-[#FF4D2E]/30 text-[16px] sm:text-[17px] text-[#F1EEE7] px-4 py-3 sm:py-3.5 font-sans focus:outline-none transition-colors duration-200 placeholder:text-[#55534E]"
                />
              </div>

              {/* 03 — WORK EMAIL */}
              <div>
                <label htmlFor="email" className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block mb-2">
                  03 — WORK EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#0B0B0B] border border-[#292824] hover:border-[#A7A39B]/50 focus:border-[#FF4D2E] focus:ring-1 focus:ring-[#FF4D2E]/30 text-[16px] sm:text-[17px] text-[#F1EEE7] px-4 py-3 sm:py-3.5 font-sans focus:outline-none transition-colors duration-200 placeholder:text-[#55534E]"
                />
              </div>

              {/* 04 — PHONE / WHATSAPP - OPTIONAL */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="phone" className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B]">
                    04 — PHONE / WHATSAPP
                  </label>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A7A39B]/70">
                    OPTIONAL
                  </span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#0B0B0B] border border-[#292824] hover:border-[#A7A39B]/50 focus:border-[#FF4D2E] focus:ring-1 focus:ring-[#FF4D2E]/30 text-[16px] sm:text-[17px] text-[#F1EEE7] px-4 py-3 sm:py-3.5 font-sans focus:outline-none transition-colors duration-200 placeholder:text-[#55534E]"
                />
              </div>

              {/* 05 — WHAT ARE YOU TRYING TO BUILD OR FIX? */}
              <div>
                <label htmlFor="objective" className="text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-widest text-[#A7A39B] block mb-2">
                  05 — WHAT ARE YOU TRYING TO BUILD OR FIX?
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

              {status === 'ERROR' && (
                <div className="p-3 bg-[#FF4D2E]/10 border border-[#FF4D2E]/40 text-xs font-mono text-[#F1EEE7]">
                  <p className="text-[#C2BFB8] font-sans text-sm">{errorMessage}</p>
                </div>
              )}

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
          </div>

        </div>

      </div>
    </article>
  )
}
