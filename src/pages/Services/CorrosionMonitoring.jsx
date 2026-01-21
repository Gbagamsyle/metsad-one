import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './CorrosionMonitoring.css'

import u1 from '../../assets/corrosion/ultrasonic1.png'
import u2 from '../../assets/corrosion/ultrasonic2.png'
import u3 from '../../assets/corrosion/ultrasonic3.png'
import u4 from '../../assets/corrosion/ultrasonic4.png'
import r1 from '../../assets/corrosion/rotary.png'

export default function CorrosionMonitoring() {
  useEffect(() => window.scrollTo(0, 0), [])

  const gallery = [
    { src: u1, caption: 'Long Range Ultrasonic Testing on a pipeline' },
    { src: u2, caption: 'Long Range Ultrasonic Testing on a pipeline' },
    { src: u3, caption: 'Automated Ultrasonic Testing on a vessel' },
    { src: u4, caption: 'Automated Ultrasonic Testing on a tank' },
    { src: r1, caption: 'Internal Rotary Inspections of tube bundle' }
  ]

  return (
    <main className="corrosion-main">
      <section className="corrosion-hero">
        <div className="container">
          <Link to="/services" className="breadcrumb">← Back to Services</Link>
          <h1>Asset Integrity & Corrosion Management</h1>
          <p className="hero-lead">Non-Destructive Examinations (NDE): Comprehensive strategy for platforms, pipelines and pressure equipment.</p>
        </div>
      </section>

      <section className="corrosion-content">
        <div className="container">
          <h2>Executive Summary</h2>
          <p>This document provides a systematic framework for implementing NDE programs on offshore oil and gas platforms in Nigeria and Angola, addressing regional challenges including corrosive environments, fatigue damage, and regulatory requirements.</p>

          <h2>1. Core NDE Techniques</h2>

          <h3>1.1 Visual Testing (VT)</h3>
          <ul>
            <li>Purpose: Primary examination for surface defects, corrosion, erosion, leaks, structural alignment</li>
            <li>Applications: Routine platform inspections, pre-and post-weld examination, corrosion monitoring</li>
            <li>Tools: Boroscopes, video probes, drones, calibrated lighting, magnification tools</li>
          </ul>

          <h3>1.2 Ultrasonic Testing (UT)</h3>
          <p>Thickness Testing (UTT), PAUT, TOFD — for thickness, weld imaging and crack sizing. Applications include CUI assessment and weld quality checks.</p>

          <h3>1.3 Radiographic Testing (RT)</h3>
          <p>X-ray & Gamma-ray, CR; used for critical weld inspection and complex geometry checks.</p>

          <h3>1.4 Magnetic Particle Testing (MT)</h3>
          <p>Surface and near-surface defect detection for ferromagnetic materials.</p>

          <h3>1.5 Liquid Penetrant Testing (PT)</h3>
          <p>Surface-breaking defect detection in non-porous materials.</p>

          <h3>1.6 Eddy Current Testing (ET)</h3>
          <p>Tube inspections, surface crack detection, conductivity measurements.</p>

          <h3>1.7 Acoustic Emission Testing (AET)</h3>
          <p>Real-time monitoring of active defect growth for vessels and structures.</p>

          <h3>1.8 Long-Range Ultrasonic Testing (LRUT)</h3>
          <p>Screening of long pipe runs for corrosion or damage — risers and subsea pipelines.</p>

          <h3>1.9 Automated & Other Techniques</h3>
          <p>AUT, PEC/PECA, IRIS — used where repeatable, high-quality data or through-coating measurements are required.</p>

          <hr />

          <h2>Jobs Completed</h2>
          <p>Niger Delta Offshore Platform - Corrosion Management Program</p>

          <h2>Picture Gallery</h2>
          <div className="gallery-grid">
            {gallery.map((g, i) => (
              <figure className="gallery-item" key={i}>
                <img src={g.src} alt={g.caption} />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
