import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import './AboutPolicies.modules.css'
import downloadIcon from '../../assets/icons/download.svg'
import { setMeta } from '../../utils/seo'

export default function HsePolicy(){
  useEffect(()=>{
    setMeta({ title: 'HSE Policy — Metsad', description: 'Health, Safety and Environmental Policy.', url: window.location.href })
  }, [])

  return (
    <>
      <main className="policy-page">
        <div className="policy-container">
          <h1>Health, Safety And Environmental Policy (HSE)</h1>
          <div className="underline"></div>
          <p>We maintain a proactive HSE program that places the well-being of people and protection of the environment at the center of every activity. Our approach combines rigorous risk assessment, continuous training, and a commitment to regulatory compliance.</p>

          <a className="download-btn" href="https://drive.google.com/file/d/1cDmmuD2ZN7sDadBhVefQGne9rgbjrIFy/view?usp=sharing" target="_blank" rel="noreferrer">
            <img src={downloadIcon} alt="download" />
            Download HSE Policy
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
