import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import './AboutPolicies.modules.css'
import downloadIcon from '../../assets/icons/download.svg'
import { setMeta } from '../../utils/seo'

export default function Environmental(){
  useEffect(()=>{
    setMeta({ title: 'Environmental Policy — Metsad', description: 'Environmental commitments and practices.', url: window.location.href })
  }, [])

  return (
    <>
      <main className="policy-page">
        <div className="policy-container">
          <h1>Environmental Policy</h1>
          <div className="underline"></div>
          <p>Our environmental policy prioritizes minimizing ecological impact through waste reduction, responsible sourcing, and investments in low-carbon solutions across our projects.</p>

          <a className="download-btn" href="https://drive.google.com/file/d/1cDmmuD2ZN7sDadBhVefQGne9rgbjrIFy/view?usp=sharing" target="_blank" rel="noreferrer">
            <img src={downloadIcon} alt="download" />
            Download Environmental Policy
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
