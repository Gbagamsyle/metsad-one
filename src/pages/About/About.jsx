import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import './About.modules.css'
import engineer from '../../assets/images/engineer.png'
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
                  Metsad Engineering Services Limited (MESL) is an indigenous engineering, construction, and procurement company. MESL is a premier, multi-disciplinary engineering and infrastructure conglomerate dedicated to shaping resilient communities and advancing a sustainable future. With a foundation built on technical expertise, unwavering integrity, and a client-centric approach, we deliver integrated solutions across three core pillars: engineering services, Comprehensive Construction, and Global Procurement.
                </p>
                <p>
                  With a collective experience spanning over 98 years, our team embodies a legacy of knowledge dedicated to advancing Africa's energy infrastructure, MESL provide quality services delivered by a team of qualified, certified, and experienced professionals.
We have our offices located in Lagos State, and Abuja FCT. MESL team is a unique resource in the industry, providing high quality, independent analytical and operational skills to a wide variety of companies and organizations in a range of different ways.
                </p>
                <p>
                  We are rapidly growing our capability having acquired appropriate assets to position ourselves appropriately. Our operational objective is to render Quality Services at very competitive terms. We are an equal opportunity employer, and we place priority on the technical competency of our personnel, whilst recognizing the need to be always community friendly.
At Metsad, safety is not a policy; it is our core value and the first step in every procedure. We operate with an uncompromising "Zero-Harm" philosophy. Our integrated Health, Safety, Security, and Environment (HSSE) management system is designed to proactively identify and mitigate risks. Every member of the Metsad team is empowered and obligated to stop any unsafe act or condition. Our outstanding safety record is a testament to a culture where every employee returns home safely, every day.

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

        {/* Removed inlined value & policy sections — now each policy has its own page */}



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
