import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './CoatingAndInsulation.css'

import img1 from '../../assets/coating/paint.jpg'
import img5 from '../../assets/coating/paint2.png'
import img3 from '../../assets/coating/spray.png'
import img4 from '../../assets/coating/insulation.png'
import img2 from '../../assets/coating/biastrac.png'

export default function CoatingAndInsulation() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <main className="coating-main">
      <section className="coating-hero">
        <div className="container">
          <Link to="/services" className="breadcrumb">← Back to Services</Link>
          <h1>Coating and Insulation / Lagging Installation</h1>
          <p className="hero-lead">High-performance protective coating, painting, and insulation services for oil, gas, petrochemical, and energy assets.</p>
        </div>
      </section>

      <section className="coating-section">
        <div className="container">
          <h2>1.0 Executive Summary</h2>
          <p>Metsad Engineering Services Limited (MESL) is a global leader in providing high-performance protective coating and painting solutions exclusively for the oil, gas, petrochemical, and energy sectors. With extensive years of specialized experience, we deliver engineering integrity through corrosion prevention, fire protection, and aesthetic maintenance for assets that operate in the world's most demanding environments—from offshore platforms and subsea pipelines to refineries and LNG terminals.</p>
          <p>Our mission is to extend asset lifespan, maximize safety, reduce lifecycle costs, and ensure unwavering compliance with the strictest international standards. We combine certified expertise, cutting-edge materials technology, and an uncompromising commitment to Quality, Health, Safety, and Environment (QHSE).</p>

          <hr />

          <h2>2.0 Services</h2>
          <ul className="services-list">
            <li>Engineering &amp; Corrosion Management: Specification review, coating system selection, and lifecycle cost analysis.</li>
            <li>Surface Preparation: Automated blasting, hydro-blasting (UHP Water Jetting), and manual preparation to exact standards (SA, SP).</li>
            <li>High-Performance Coating Application: Epoxy, Polyurethane, Zinc-rich primers, Thermal Spray Aluminum (TSA), and Intumescent Fire-Proofing.</li>
            <li>Deck Plate blasting and coating, leveraging the Blastrac equipment and steel shots.</li>
            <li>High temperature painting with Mascoat and Eon coat.</li>
            <li>Specialist Linings: Tank linings for corrosion and product purity (e.g., potable water, chemical storage).</li>
            <li>Insulation &amp; Cladding: Application of insulation materials and protective metal cladding for piping, pipeline and vessels.</li>
            <li>Inspection &amp; Quality Assurance: NACE/CIPSS-certified inspectors providing full third-party or client-representative services.</li>
          </ul>

          <hr />

          <h2>3.0 Why Choose Metsad Engineering Services?</h2>
          <ul className="why-list">
            <li>Sector-Specific Expertise: We speak the language of oil &amp; gas and understand critical asset uptime.</li>
            <li>Certified Workforce: Teams hold NACE, SSPC, FROSIO, and ICORR certifications with rigorous training.</li>
            <li>Global Reach, Local Execution: Headquartered in Nigeria with strategic hubs in the Middle East.</li>
            <li>Technology-Driven: Drones for inspection, digital surface profile analysis, and environmental monitoring.</li>
            <li>Uncompromising QHSE Culture: Incident rates well below industry averages; ISO 9001 certified.</li>
          </ul>

          <hr />

          <h2>4.0 Project Portfolio &amp; Capabilities (Picture Gallery)</h2>
          <p>Representative imagery from recent coating, blasting, and insulation activities.</p>

          <div className="gallery-grid">
            {(() => {
              const captions = [
                'Painting Activity at an offshore location',
                'Blastrac Activity at a facility location',
                'Spraying/Painting Activity at an offshore location',
                'Insulation/Lagging Repair activity',
                'Painting Activity at an offshore location'
              ]
              const imgs = [img1, img2, img3, img4, img5]
              return imgs.map((src, i) => (
                <figure className="gallery-item" key={i}>
                  <img src={src} alt={captions[i] || `coating project ${i + 1}`} />
                  <figcaption>{captions[i] || `Project image ${i + 1}`}</figcaption>
                </figure>
              ))
            })()}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
