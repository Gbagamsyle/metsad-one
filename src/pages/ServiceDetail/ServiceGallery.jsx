import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { getServiceById } from '../../utils/servicesData'
import Footer from '../../components/Footer/Footer'
import './ServiceGallery.css'

import img1 from '../../assets/images/oil-drill.jpg'
import img2 from '../../assets/images/drilling.jpg'
import img3 from '../../assets/images/oil-tank.jpg'
import img4 from '../../assets/images/oil-tower.jpg'
import img5 from '../../assets/images/sustainable2.webp'
import img6 from '../../assets/images/fab.png'

export default function ServiceGallery() {
  const { id } = useParams()
  const service = getServiceById(id)

  useEffect(() => {
    if (service) {
      window.scrollTo(0, 0)
    }
  }, [id, service])

  if (!service) {
    return (
      <main className="service-gallery-main">
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

  const photos = [img1, img2, img3, img4, img5, img6]

  return (
    <main className="service-gallery-main">
      <section className="service-gallery-hero">
        <div className="container">
          <Link to={`/service/${id}`} className="breadcrumb">
            ← Back to Service
          </Link>
          <h1>Project Photos — {service.title}</h1>
          <p className="lead">A selection of recent project photos and examples of our work for this service.</p>
        </div>
      </section>

      <section className="service-gallery-explain">
        <div className="container">
          <h2>About this Work</h2>
          <p>{service.fullDescription}</p>
          <p>Below are representative photos from completed projects — showing planning, execution and finished installations.</p>
        </div>
      </section>

      <section className="service-photos">
        <div className="container">
          <div className="photos-grid">
            {photos.map((src, i) => (
              <div className="photo-card" key={i}>
                <img src={src} alt={`${service.title} photo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
