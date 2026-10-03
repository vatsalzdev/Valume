import Hero from '../components/Hero'
import PointOfView from '../components/PointOfView'
import Capabilities from '../components/Capabilities'
import CaseStudies from '../components/CaseStudies'
import Methodology from '../components/Methodology'
import Initiation from '../components/Initiation'
import SEO from '../components/SEO'

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Valume — Lead Generation, Business Automation & Custom Software"
        description="Valume designs and builds lead generation systems, business automations, digital products, and custom software for businesses."
        canonicalUrl="https://valume.studio/"
      />
      
      {/* Scene 01 — The Hero */}
      <Hero />

      {/* Scene 02 — Point of View */}
      <PointOfView />

      {/* Scene 03 — Capabilities Directory */}
      <Capabilities />

      {/* Scene 04 — Selected Work */}
      <CaseStudies />

      {/* Scene 05 — How We Work */}
      <Methodology />

      {/* Scene 06 — Initiation */}
      <Initiation />
    </>
  )
}
