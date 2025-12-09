import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import './AboutPolicies.modules.css'
import downloadIcon from '../../assets/icons/download.svg'
import { setMeta } from '../../utils/seo'

export default function QualityPolicies(){
  useEffect(()=>{
    setMeta({ title: 'Quality Policy — Metsad', description: 'Quality assurance and control', url: window.location.href })
  }, [])

  return (
    <>
      <main className="policy-page">
        <div className="policy-container">
          <h1>Quality Policy</h1>
          <div className="underline"></div>
          <p>At Metsad, we are dedicated to delivering products and services that meet the highest standards of quality. Our commitment to continuous improvement, customer satisfaction, and adherence to industry best practices ensures that we consistently exceed expectations.</p>

          <a className="download-btn" href="https://drive.google.com/file/d/12xeJWOSRpu-PG_PP07M8xGePSgD6h8Eo/view?usp=sharing" target="_blank" rel="noreferrer">
            <img src={downloadIcon} alt="download" />
            Download Quality Policy
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
