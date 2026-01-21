import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { getServiceById } from '../../utils/servicesData'
import { setMeta } from '../../utils/seo'
import Footer from '../../components/Footer/Footer'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = getServiceById(id)

  useEffect(() => {
    if (service) {
      setMeta({
        title: `${service.title} — Metsad Services`,
        description: service.fullDescription,
        url: window.location.href
      })
      window.scrollTo(0, 0)
    }
  }, [id, service])

  if (!service) {
    return (
      <main className="service-detail-main">
        <section className="service-not-found">
          <div className="container">
            <h1>Service Not Found</h1>
            <p>The service you're looking for doesn't exist.</p>
            <Link to="/services" className="back-link">
              <FaArrowRight /> Back to Services
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="service-detail-main">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="hero-content">
          <Link to="/services" className="breadcrumb">
            ← Back to Services
          </Link>
          <h1>{service.title}</h1>
          <p className="hero-subtitle">{service.subtitle}</p>
        </div>
        <div className="hero-image">
          <img src={service.image} alt={service.title} />
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Overview</h2>
            <p className="overview-text">{service.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="service-features-detailed">
        <div className="container">
          <div className="features-header">
            <h2>Our Offerings</h2>
          </div>
          <div className="features-grid">
            {service.detailedFeatures.map((feature, idx) => (
              <div key={idx} className="feature-card-detailed">
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
                {idx === 0 && (
                  <Link to="/services/coating-insulation" className="gallery-link-card">Coating & Insulation — Photos & Details</Link>
                )}
                {feature.name && feature.name.toLowerCase().includes('corrosion') && (
                  <Link to="/services/corrosion-monitoring" className="gallery-link-card">Corrosion Monitoring — Photos & Details</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2>Why Choose This Service?</h2>
          <div className="benefits-list">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
