import React from 'react'
import './Certifications.modules.css'
import addax from '../../assets/images/companies/addax.jpg'
import iso from '../../assets/images/companies/certlogo_iso_r-150x150.png'
import chevron from '../../assets/images/companies/chevron.jpg'
import exxon from '../../assets/images/companies/exxonmobil-nigeria.png'
import fg from '../../assets/images/companies/FG.jpg'
import nnpc from '../../assets/images/companies/nnpc.jpg'
import shell from '../../assets/images/companies/shell.jpg'
import total from '../../assets/images/companies/total.png'

const logos = [addax,  iso, chevron, exxon, fg, nnpc, shell, total]

export default function Certifications(){
  return (
    <section className="certs-section">
      <div className="certs-inner">
        <h2>Certifications & Affiliations</h2>
        <p className="certs-sub">Our certifications and memberships reflect our dedication to complying with regulations and industry standards.</p>

        <div className="certs-grid">
          {logos.map((logo, idx) => (
            <div key={idx} className="cert-item">
              <img src={logo} alt="partner logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
