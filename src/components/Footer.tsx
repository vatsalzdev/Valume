import { Link, useRouter } from '../router/Router'

const services = [
  { label: 'Lead Generation', href: '/lead-generation' },
  { label: 'Business Automation', href: '/business-automation' },
  { label: 'Digital Products', href: '/digital-products' },
  { label: 'Custom Software', href: '/custom-software' },
]

const studio = [
  { label: 'Selected Work', href: '/work' },
  { label: 'Thesis', href: '/#thesis' },
  { label: 'Process', href: '/#process' },
  { label: 'Start a Project', href: '/contact', isAccent: true },
]

export default function Footer() {
  const { navigate } = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return
    }
    e.preventDefault()
    navigate(href)
  }

  return (
    <footer className="w-full bg-[#050505] text-[#A7A39B] border-t border-[#292824] py-14 sm:py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1520px] mx-auto flex flex-col gap-10">
        
        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Col 1-4: Studio Identity */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Link 
                href="/"
                className="text-lg sm:text-xl font-medium tracking-[0.24em] text-[#F1EEE7] uppercase font-display hover:text-[#FF4D2E] transition-colors"
              >
                VALUME
              </Link>
              <span className="text-[#292824]">•</span>
              <span className="text-xs sm:text-[12.5px] font-mono tracking-[0.18em] uppercase text-[#A7A39B]">
                DIGITAL SYSTEMS AGENCY
              </span>
            </div>
            <p className="text-sm font-sans text-[#A7A39B] max-w-sm leading-relaxed">
              Valume designs and builds lead generation systems, business automations, digital products, and custom software for businesses.
            </p>
          </div>

          {/* Col 5-7: Services Directory */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#F1EEE7]">
              SERVICES
            </span>
            <ul className="flex flex-col gap-2 text-xs sm:text-[13px] font-mono tracking-[0.14em] uppercase">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#C2BFB8] hover:text-[#FF4D2E] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 8-9: Studio Directory */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#F1EEE7]">
              STUDIO
            </span>
            <ul className="flex flex-col gap-2 text-xs sm:text-[13px] font-mono tracking-[0.14em] uppercase">
              {studio.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-colors duration-200 ${
                      item.isAccent 
                        ? 'text-[#FF4D2E] hover:text-[#F1EEE7] font-medium' 
                        : 'text-[#C2BFB8] hover:text-[#F1EEE7]'
                    }`}
                  >
                    {item.label} {item.isAccent && '→'}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 10-12: Connect / Direct */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#F1EEE7]">
              CONNECT
            </span>
            <ul className="flex flex-col gap-2 text-xs sm:text-[13px] font-mono tracking-[0.14em] uppercase">
              <li>
                <a
                  href="mailto:valume.studios@gmail.com"
                  className="text-[#C2BFB8] hover:text-[#FF4D2E] transition-colors duration-200 lowercase"
                >
                  valume.studios@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/valume.lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C2BFB8] hover:text-[#FF4D2E] transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  <span>INSTAGRAM</span>
                  <span className="text-[11px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Baseline Divider & Copyright */}
        <div className="pt-8 border-t border-[#292824]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono tracking-[0.18em] uppercase text-[#A7A39B]/70">
          <div className="flex items-center gap-4">
            <span>© 2026 VALUME</span>
            <span className="text-[#292824]">•</span>
            <span>SYSTEMS BEHIND GROWTH</span>
          </div>
          <div>
            <span>GLOBAL / REMOTE STUDIO</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
