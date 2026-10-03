import { ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import { Link } from '../router/Router'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden font-sans">
      <SEO 
        title="404 — Page Not Found | Valume"
        description="The requested coordinate does not exist. Return to the Valume homepage."
        canonicalUrl="https://valume.studio/404"
        noIndex={true}
      />

      {/* Background Subtle Datum Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full border border-[#292824]/40" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-medium tracking-[0.24em] text-[#F1EEE7] uppercase font-display hover:text-[#FF4D2E] transition-colors"
        >
          VALUME
        </Link>
        <span className="text-xs font-mono tracking-widest uppercase text-[#FF4D2E]">
          404 // PAGE NOT FOUND
        </span>
      </header>

      {/* Center Typography */}
      <main className="relative z-10 my-auto py-12 max-w-2xl">
        <div className="flex items-center gap-3 mb-6 text-xs font-mono uppercase tracking-[0.22em] text-[#A7A39B]">
          <span className="text-[#FF4D2E] font-semibold text-sm leading-none">+</span>
          <span className="w-1.5 h-3 bg-[#FF4D2E] inline-block" />
          <span>PAGE NOT FOUND</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-[#F1EEE7] leading-[1.02]">
          PAGE NOT FOUND.
        </h1>

        <p className="mt-6 text-base text-[#A7A39B] font-sans leading-relaxed max-w-lg">
          The requested page does not exist. Check the URL or return to the homepage.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-[#F1EEE7] hover:bg-[#FF4D2E] text-[#0B0B0B] hover:text-white transition-colors duration-300 px-7 py-3.5 rounded-full text-xs font-mono tracking-[0.14em] uppercase font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>RETURN TO HOMEPAGE</span>
          </Link>
        </div>
      </main>

      {/* Baseline Metadata */}
      <footer className="relative z-10 pt-6 border-t border-[#292824] flex items-center justify-between text-xs font-mono text-[#A7A39B]/60 tracking-wider">
        <span>VALUME // 2026</span>
        <span>DIGITAL SYSTEMS AGENCY</span>
      </footer>
    </div>
  )
}
