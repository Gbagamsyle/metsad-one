import React from 'react'
import './Services.modules.css'
import { FaOilCan, FaTools, FaChartLine } from 'react-icons/fa'
import image1 from '../../assets/images/oil-drill.jpg'
import image2 from '../../assets/images/drilling.jpg'
import image4 from '../../assets/images/consulting.jpg'

const services = [
  {
    id: 1,
    icon: <FaOilCan />,
    title: 'Crude Oil Extraction',
    desc: 'Advanced extraction technologies with minimal environmental impact.',
    image: image1
  },
  {
    id: 2,
    icon: <FaTools />,
    title: 'Maintenance & Support',
    desc: '24/7 technical support and preventive maintenance services.',
    image: image2
  },

  {
    id: 3,
    icon: <FaChartLine />,
    title: 'Consulting',
    desc: 'Expert consulting for optimization and resource management.',
    image: image4
  }
]

export default function Services() {
  return (
    <section id="home-services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive energy solutions backed by decades of industry expertise</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.id} className="service-card">
              <div className="service-image">
                <img src={s.image} alt={s.title} />
              </div>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
