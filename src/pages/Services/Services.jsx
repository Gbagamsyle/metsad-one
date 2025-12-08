import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Services.modules.css'
import { setMeta } from '../../utils/seo'
import { servicesData } from '../../utils/servicesData'
import Footer from '../../components/Footer/Footer'
import { FaOilCan, FaTools, FaLeaf, FaWater, FaChartLine, FaShieldAlt, FaArrowRight } from 'react-icons/fa'

const renderIcon = (type) => {
  const iconProps = { className: 'service-icon-svg' }
  switch(type) {
    case 'oil': return <FaOilCan {...iconProps} />
    case 'tools': return <FaTools {...iconProps} />
    case 'leaf': return <FaLeaf {...iconProps} />
    case 'water': return <FaWater {...iconProps} />
    case 'chart': return <FaChartLine {...iconProps} />
    case 'shield': return <FaShieldAlt {...iconProps} />
    default: return null
  }
}

export default function Services() {
  useEffect(()=>{
    setMeta({
      title: 'Metsad Services — Integrated energy solutions',
      description: 'Explore Metsad\'s integrated services including extraction, maintenance, sustainable solutions, reservoir management and consulting.',
      url: window.location.href
    })
  }, [])
  return (
    <main className="services-main">
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h1>Integrated Energy Solutions</h1>
            <p>From extraction to sustainability, we provide end-to-end services tailored to your operational excellence</p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img 
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                
                <div className="service-icon-wrapper">
                  <div className="service-icon-bg">
                    {renderIcon(service.iconType)}
                  </div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-dot">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={`/service/${service.id}`} className="learn-more-btn">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="whychoose-section">
        <div className="whychoose-container">
          <div className="why-header">
            <h2>Why Choose Metsad Services?</h2>
            <div className="why-underline" />
          </div>

          <div className="service-why-grid">
            <div className="service-why-card">
              <h4>Expert Team</h4>
              <p>Decades of combined experience in energy production and management.</p>
            </div>

            <div className="service-why-card">
              <h4>24/7 Support</h4>
              <p>Round-the-clock technical assistance and emergency response.</p>
            </div>

            <div className="service-why-card">
              <h4>Latest Technology</h4>
              <p>Cutting-edge equipment and software for optimal performance.</p>
            </div>

            <div className="service-why-card">
              <h4>Proven Track Record</h4>
              <p>Successful projects and satisfied clients worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2>Our Process</h2>
            <p className="process-sub">A proven methodology for operational excellence</p>
            <div className="process-underline" />
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h4>Assessment</h4>
              <p>Evaluate your operational needs</p>
            </div>

            <div className="process-card">
              <div className="process-number">02</div>
              <h4>Planning</h4>
              <p>Develop customized strategies</p>
            </div>

            <div className="process-card">
              <div className="process-number">03</div>
              <h4>Implementation</h4>
              <p>Execute with precision</p>
            </div>

            <div className="process-card">
              <div className="process-number">04</div>
              <h4>Optimization</h4>
              <p>Monitor and improve continuously</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
