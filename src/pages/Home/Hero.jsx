import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.modules.css'
import img1 from '../../assets/images/enginnering-men.jpg'
import img2 from '../../assets/images/sustainable2.webp'
import img3 from '../../assets/images/oil-tank.jpg'

const images = [img1, img2, img3]

export default function Hero(){
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=>{
      setIndex(i => (i + 1) % images.length)
    }, 3000)
    return ()=> clearInterval(id)
  },[])

  return (
<section 
  id="home" 
  className="hero"
  style={{ backgroundImage: `url(${images[index]})` }}
>
  {/* preload hero images to avoid visible loading flash */}
  <div style={{display: 'none'}} aria-hidden>
    {images.map((src, i) => (
      <img key={i} src={src} alt="" />
    ))}
  </div>
  <div className="hero-container">
    <div className="hero-content">
      <div className="eyebrow">Energy | Infrastructure | Safety</div>
      <h1>Metsad</h1>
      <h2 className="subtitle">
        Reliable petroleum and energy solutions — engineering, operations and asset integrity.
      </h2>

      <ul className="feature-list" aria-hidden>
        <li>Regulatory compliance & HSE leadership</li>
        <li>Frontline engineering & operational excellence</li>
        <li>End-to-end project delivery</li>
      </ul>

      <div className="hero-cta">
        <Link className="btn primary" to="/contact">Request Consultation</Link>
        <Link className="btn ghost" to="/services">View Services</Link>
      </div>
    </div>
  </div>
</section>

  )
}
