import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import './AboutPolicies.modules.css'
import downloadIcon from '../../assets/icons/download.svg'
import { setMeta } from '../../utils/seo'

export default function PrivacyPolicy(){
  useEffect(()=>{
    setMeta({ title: 'Privacy Policy — Metsad', description: 'How we collect and handle personal information.', url: window.location.href })
  }, [])

  return (
    <>
      <main className="policy-page">
        <div className="policy-container">
          <h1>Privacy Policy</h1>
          <div className="underline"></div>
          <p>We respect the privacy of our stakeholders and maintain robust data handling practices to protect personal information and ensure transparency in how data is collected and used.</p>

          <a className="download-btn" href="https://drive.google.com/file/d/1cDmmuD2ZN7sDadBhVefQGne9rgbjrIFy/view?usp=sharing" target="_blank" rel="noreferrer">
            <img src={downloadIcon} alt="download" />
            Download Privacy Policy
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
