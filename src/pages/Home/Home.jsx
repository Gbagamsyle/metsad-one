import React, { useEffect } from 'react'
import Hero from './Hero'
import Services from './Services'
import WhyChoose from './WhyChoose'
import Certifications from './Certifications'
import Newsletter from './Newsletter'
import Footer from '../../components/Footer/Footer'
import './Home.modules.css'
import { setMeta, addJsonLd } from '../../utils/seo'

export default function Home(){
  useEffect(()=>{
    setMeta({
      title: 'Metsad — Reliable petroleum and energy solutions',
      description: 'Metsad provides engineering, operations and asset integrity services for oil, gas and energy sectors.',
      url: window.location.href
    })

    addJsonLd({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Metsad",
      "url": window.location.origin,
      "logo": `${window.location.origin}/assets/icons/logo.png`
    })
  }, [])
  return (
    <main>
      <Hero />
      <Services />
      <WhyChoose />
      <Certifications />
      <Newsletter />
      <Footer/>
    </main>
  )
}
