import { useRouter } from './router/Router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LeadGenerationPage from './pages/LeadGenerationPage'
import BusinessAutomationPage from './pages/BusinessAutomationPage'
import DigitalProductsPage from './pages/DigitalProductsPage'
import CustomSoftwarePage from './pages/CustomSoftwarePage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import ThankYouPage from './pages/ThankYouPage'
import NotFoundPage from './pages/NotFoundPage'

const validRoutes = [
  '/',
  '/index.html',
  '/lead-generation',
  '/business-automation',
  '/digital-products',
  '/custom-software',
  '/work',
  '/contact',
  '/thank-you'
]

export default function App() {
  const { path } = useRouter()

  const renderContent = () => {
    switch (path) {
      case '/':
      case '/index.html':
        return <HomePage />
      case '/lead-generation':
        return <LeadGenerationPage />
      case '/business-automation':
        return <BusinessAutomationPage />
      case '/digital-products':
        return <DigitalProductsPage />
      case '/custom-software':
        return <CustomSoftwarePage />
      case '/work':
        return <WorkPage />
      case '/contact':
        return <ContactPage />
      case '/thank-you':
        return <ThankYouPage />
      default:
        return <NotFoundPage />
    }
  }

  if (!validRoutes.includes(path)) {
    return <NotFoundPage />
  }

  return (
    <div className="min-h-screen w-full bg-[#0B0B0B] text-[#F1EEE7] relative overflow-x-hidden selection:bg-[#FF4D2E] selection:text-white">
      {/* Subtle editorial film grain texture across entire canvas */}
      <div className="fixed inset-0 grain-overlay pointer-events-none z-40 opacity-35" />

      {/* Global Fixed Navigation Header */}
      <Navigation />

      {/* Main Content Area */}
      <main className="relative z-10 w-full flex flex-col">
        {renderContent()}
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  )
}
