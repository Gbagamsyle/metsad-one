import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./CoatingAndInsulation.css";

import img1 from "../../assets/composite/capabilties1.png";
import img2 from "../../assets/composite/capabilties2.png";
import img3 from "../../assets/composite/capabilties3.png";
import img4 from "../../assets/composite/capabilties4.png";

export default function CompositeWrap() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="coating-main">
      <section className="coating-hero">
        <div className="container">
          <Link to="/services" className="breadcrumb">
            ← Back to Services
          </Link>
          <h1>Composite Wrap Repair Systems</h1>
          <p className="hero-lead">
            Engineered composite repair solutions for piping, pipelines and
            vessels — onshore and offshore.
          </p>
        </div>
      </section>

      <section className="coating-section">
        <div className="container">
          <h2>1. Executive Summary</h2>
          <p>
            Metsad Engineering Services limited is the undisputed global
            benchmark for integrity and innovation in piping, pipeline and
            vessel rehabilitation, ensuring the safe, sustainable, and
            uninterrupted operation of energy infrastructure worldwide.
          </p>
          <p>
            We provide the most reliable, code-compliant, and engineered
            composite repair solutions for defective and vulnerable piping,
            pipelines &amp; vessels both onshore and offshore. We deliver
            unparalleled safety, cost efficiency, and operational continuity
            through our deep technical expertise, superior materials, and
            flawless execution.
          </p>

          <hr />

          <h2>2. Why Metsad is the Best in the Field</h2>
          <p>
            <strong>Unrivaled Technical Depth:</strong> Our core team comprises
            materials engineers, corrosion specialists, and ASME/ISO-certified
            designers with decades of direct, hands-on experience. We engineer
            site-specific solutions for the most complex integrity challenges.
          </p>

          <ul className="services-list">
            <li>
              <strong>Through-Wall Leaks &amp; Pinholes:</strong> Live leak
              sealing using proprietary encapsulation techniques and
              pressure-activated resins, allowing secure repairs under full
              operational pressure.
            </li>
            <li>
              <strong>Localized Corrosion &amp; Erosion:</strong> Repair of
              areas with significant metal loss, restoring hoop and axial
              strength to meet or exceed original design parameters.
            </li>
            <li>
              <strong>Crack Remediation:</strong> Repair of stress corrosion
              cracks (SCC), fatigue cracks, and other fractures, arresting their
              propagation.
            </li>
            <li>
              <strong>External Damage &amp; Dents:</strong> Rehabilitation of
              mechanically damaged pipes, including gouges and dents, to restore
              pressure containment.
            </li>
            <li>
              <strong>Weld Defects &amp; Flange Encapsulation:</strong> Repair
              of faulty welds and sealing of leaking flange connections without
              bolt tightening or gland packing.
            </li>
            <li>
              <strong>
                Insulation Under Support (CUI) &amp; Annular Ring Repairs:
              </strong>{" "}
              Targeted solutions for Corrosion Under Insulation.
            </li>
          </ul>

          <hr />

          <h2>3. Offshore &amp; Onshore Proven</h2>
          <p>
            Our systems and installation protocols are engineered for all
            environments—from harsh, saline offshore platforms and FPSOs to
            UV-exposed onshore refineries and desert pipelines.
          </p>

          <h2>4. Our Services</h2>
          <ul className="services-list">
            <li>
              Technical Survey &amp; Feasibility Studies: On-site assessment and
              solution scoping.
            </li>
            <li>
              Engineered Design &amp; Stress Analysis: Proprietary design
              packages for each repair location.
            </li>
            <li>
              Composite Repair System Supply: We partner with OEM-certified
              composite material providers.
            </li>
            <li>
              Professional Installation by Certified Technicians: Trained under
              our Metsad Certified Installer (MCI) program.
            </li>
            <li>
              Integrity Management &amp; Monitoring: Post-installation
              monitoring and long-term support.
            </li>
            <li>
              Emergency 24/7 Response: Rapid deployment teams for critical leak
              situations.
            </li>
          </ul>

          <hr />

          <h2>5. Markets &amp; Applications Served</h2>
          <ul className="why-list">
            <li>
              Offshore: Platforms, FPSOs, subsea jacket legs, topside process
              piping, risers.
            </li>
            <li>
              Onshore: Refineries, petrochemical plants, gas processing
              facilities, transmission pipelines, compressor/pump stations, tank
              farms.
            </li>
            <li>
              Assets Repaired: Straight pipes, elbows, tees, reducers, valves,
              flanges, vessel shells, and tank walls.
            </li>
          </ul>

          <hr />

          <h2>6. Our Commitment to Excellence</h2>
          <p>
            Quality is engineered into every step of our process. We adhere to a
            strict Quality Management System aligned with ISO 9001 standards and
            deliver detailed engineering packages, stress analyses, and QA
            documentation.
          </p>

          <hr />

          <h2>7. Conclusion</h2>
          <p>
            In an industry where downtime is unacceptable and safety is
            paramount, Metsad Engineering Services Limited stands as the
            definitive partner for composite repair solutions. Choosing Metsad
            means investing in the safest, smartest, and most reliable path to
            long-term asset integrity.
          </p>

          <hr />

          <h2>8. Project Portfolio and Capabilities (Picture Gallery)</h2>
          <p>
            Representative imagery from composite wrap projects and field
            installations.
          </p>

          <div className="gallery-grid">
            {(() => {
              const captions = [
                "Composite wrap application at a client facility",
                "Personnel applying composite repair system",
                "Structural reinforcement of piping with composite wrap",
                "Pipeline buried site composite rehabilitation",
              ];
              const imgs = [img1, img2, img3, img4];
              return imgs.map((src, i) => (
                <figure className="gallery-item" key={i}>
                  <img
                    src={src}
                    alt={captions[i] || `composite project ${i + 1}`}
                  />
                  <figcaption>{captions[i]}</figcaption>
                </figure>
              ));
            })()}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
