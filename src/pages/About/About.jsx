import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import './About.modules.css'
import engineer from '../../assets/images/enginner.jpg'
import { setMeta } from '../../utils/seo'

export default function About() {
  useEffect(()=>{
    setMeta({
      title: 'About Metsad — Our history & values',
      description: 'Learn about Metsad\'s history, mission, vision and achievements in the energy sector.',
      url: window.location.href
    })
  }, [])
  return (
    <>
      <main className="about-main">
        <h1 className="page-title sr-only">About Metsad</h1>
        <section className="history-section">
          <div className="history-container">
            <div className="history-content">
              <div className="history-text">
                <h2>Our History</h2>
                <div className="underline"></div>
                <p>
                  Founded in 2004, Metsad Oil & Gas began with a simple vision: to provide reliable, innovative energy solutions while maintaining the highest standards of safety and environmental responsibility.
                </p>
                <p>
                  Over the past two decades, we've grown from a regional operator to a global energy leader, with operations spanning multiple continents and a workforce of over 5,000 dedicated professionals.
                </p>
                <p>
                  Our commitment to technological advancement and sustainable practices has positioned us as an industry innovator, consistently delivering superior results while protecting the environment for future generations.
                </p>
              </div>
              <div className="history-image">
                <img src={engineer} alt="Oil and gas worker" />
              </div>
            </div>
          </div>
        </section>
        
        
        <section className="foundation-section">
          <div className="foundation-container">
            <header className="foundation-header">
              <h2>Our Foundation</h2>
              <p className="foundation-sub">The values that drive our success</p>
            </header>

            <div className="foundation-grid">
              <article className="foundation-card">
                <h3>Our Mission</h3>
                <p>
                  To deliver world-class energy solutions that power economic growth while
                  advancing environmental stewardship through innovation, integrity, and
                  operational excellence.
                </p>
              </article>

              <article className="foundation-card">
                <h3>Our Vision</h3>
                <p>
                  To be the global leader in sustainable energy production, recognized for our
                  commitment to technological innovation, environmental responsibility, and
                  creating value for all stakeholders.
                </p>
              </article>

              <article className="foundation-card">
                <h3>Our Values</h3>
                <ul className="values-list">
                  <li>Safety First</li>
                  <li>Environmental Care</li>
                  <li>Innovation &amp; Excellence</li>
                  <li>Integrity &amp; Transparency</li>
                  <li>Community Responsibility</li>
                </ul>
              </article>
            </div>
          </div>
        </section>



        <section className="achievements-section">
          <div className="achievements-container">
            <header className="achievements-header">
              <h2>Achievements & Recognition</h2>
              <div className="underline small"></div>
              <p className="achievements-sub">Our commitment to excellence and innovation has earned us recognition across the industry and recognition from leading international organizations.</p>
            </header>

            <div className="achievements-grid">
              <div className="achievement-card">
                <h3>Industry Excellence Award</h3>
                <p>Recognized for outstanding operational performance and innovation in energy production.</p>
              </div>

              <div className="achievement-card">
                <h3>Environmental Leadership</h3>
                <p>Awarded for our commitment to sustainable practices and carbon reduction initiatives.</p>
              </div>

              <div className="achievement-card">
                <h3>Safety Excellence Certification</h3>
                <p>Maintained zero-accident record across all operations with comprehensive safety programs.</p>
              </div>

              <div className="achievement-card">
                <h3>Technology Innovation Award</h3>
                <p>Honored for implementing cutting-edge exploration and production technologies.</p>
              </div>

              <div className="achievement-card">
                <h3>Corporate Responsibility Recognition</h3>
                <p>Acknowledged for community development and stakeholder value creation.</p>
              </div>

              <div className="achievement-card">
                <h3>ISO 9001 &amp; 14001 Certified</h3>
                <p>Maintaining highest standards in quality management and environmental management systems.</p>
              </div>
            </div>
          </div>
        </section>

        

      </main>
      <Footer />
    </>
  )
}
