import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useRouter, Link } from '../router/Router'

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const

const navLinks = [
  { label: 'THESIS', href: '/#thesis', num: '01' },
  { label: 'CAPABILITIES', href: '/#capabilities', num: '02' },
  { label: 'WORK', href: '/work', num: '03' },
  { label: 'PROCESS', href: '/#process', num: '04' },
]

const serviceLinks = [
  { label: 'Lead Generation', href: '/lead-generation' },
  { label: 'Business Automation', href: '/business-automation' },
  { label: 'Digital Products', href: '/digital-products' },
  { label: 'Custom Software', href: '/custom-software' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { path, navigate } = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (mobileMenuOpen) {
      document.body.style.overflow = ''
      setMobileMenuOpen(false)
    }

    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return
    }

    e.preventDefault()
    navigate(href)
  }

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#292824] py-3.5 sm:py-4 shadow-2xl'
            : 'bg-transparent border-b border-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-[1520px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          
          {/* Brand Mark */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="group flex items-center gap-3 text-lg sm:text-xl font-medium tracking-[0.24em] text-[#F1EEE7] uppercase font-display transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E]"
          >
            <span className="text-[#F1EEE7] group-hover:text-[#FF4D2E] transition-colors duration-200">
              VALUME
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-xs font-mono tracking-[0.16em] uppercase text-[#A7A39B]">
            {navLinks.map((link) => {
              const isActive = path === link.href || (link.href === '/work' && path === '/work')
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative group transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E] ${
                    isActive ? 'text-[#F1EEE7]' : 'text-[#A7A39B] hover:text-[#F1EEE7]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-[#FF4D2E] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              )
            })}
          </nav>

          {/* Nav Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="group hidden sm:inline-flex items-center gap-2 text-xs font-mono tracking-[0.14em] text-[#F1EEE7] uppercase hover:text-[#FF4D2E] transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E]"
            >
              <span>START A PROJECT</span>
              <span className="text-[#FF4D2E] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                →
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#F1EEE7] p-2 hover:text-[#FF4D2E] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D2E]"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#FF4D2E]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: EASE_EDITORIAL }}
            className="md:hidden fixed inset-x-0 top-[60px] bg-[#0B0B0B]/98 backdrop-blur-xl border-b border-[#292824] px-6 py-8 z-40 flex flex-col gap-5 text-xs font-mono tracking-widest uppercase shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#F1EEE7] hover:text-[#FF4D2E] transition-colors py-2 flex items-center justify-between border-b border-[#292824]/50"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#A7A39B]/60 font-mono">{link.num}</span>
              </a>
            ))}

            <div className="pt-2 pb-1 border-b border-[#292824]/50">
              <span className="text-[10px] tracking-widest text-[#FF4D2E] font-medium block mb-2">SERVICES</span>
              <div className="flex flex-col gap-2">
                {serviceLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={(e) => handleNavClick(e, s.href)}
                    className="text-[#C2BFB8] hover:text-[#F1EEE7] text-[11px] py-1 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="text-[#FF4D2E] pt-2 flex items-center justify-between font-medium tracking-wider"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
