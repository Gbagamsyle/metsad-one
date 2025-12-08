import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import './ValueProposition.modules.css'
import './About.modules.css'
import { setMeta } from '../../utils/seo'

export default function ValueProposition() {
  useEffect(() => {
    setMeta({
      title: 'Our Value Proposition — Metsad',
      description: 'Integrated expertise, sustainability, and proven track record.',
      url: window.location.href,
    })
  }, [])

  return (
    <>
      <main className="vp-page">
        <div className="vp-container">
          <div className="vp-hero">
            <h1>Our Value Proposition</h1>
            <div className="underline"></div>
            <p className="vp-sub">Metsad delivers an integrated, sustainability-first approach across engineering, construction and procurement — reducing risk, improving predictability and creating measurable value for clients.</p>
          </div>

          <div className="vp-grid">
            <div>
              <ul className="vp-list">
                <li><strong>Integrated Expertise:</strong> Unique capability to manage the intersection of energy, infrastructure, and supply chain, reducing interface risks for clients.</li>
                <li><strong>Sustainability at the Core:</strong> We embed sustainable practices in all projects, from green building materials to renewable energy integration.</li>
                <li><strong>Proven Track Record:</strong> A portfolio of successfully delivered projects, on time and within budget, across public and private sectors.</li>
                <li><strong>Global Network, Local Execution:</strong> We leverage our international procurement reach while maintaining deep understanding of local regulations, terrains, and markets.</li>
                <li><strong>Innovation & Technology:</strong> Utilization of cutting-edge software for BIM (Building Information Modeling), project management, and sustainable design.</li>
              </ul>
            </div>
          </div>

          <section className="vp-philosophy-section">
            <h2 className="vp-section-title">Our Philosophy</h2>
            <div className="vp-philosophy">
              <h4>Vision</h4>
              <p>To be a globally recognized leader in delivering sustainable engineering and infrastructure solutions that endure for generations.</p>

              <h4>Mission</h4>
              <p>To empower progress and improve quality of life by constructing essential infrastructure, advancing renewable energy adoption, and providing seamless access to global resources through exemplary engineering and ethical practices.</p>

              <h4>Core Values</h4>
              <p>Integrity, Excellence, Sustainability, Collaboration, Innovation.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
