import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./CoatingAndInsulation.css";

import img1 from "../../assets/structural/structural1.png";
import img2 from "../../assets/structural/structural2.png";
import img3 from "../../assets/structural/structural3.png";
import img4 from "../../assets/structural/structural4.png";

export default function StructuralHealthManagement() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="coating-main">
      <section className="coating-hero">
        <div className="container">
          <Link to="/services" className="breadcrumb">
            ← Back to Services
          </Link>
          <h1>Structural Health Management</h1>
          <p className="hero-lead">
            Preservation, analysis and life-extension solutions for offshore and
            onshore structures.
          </p>
        </div>
      </section>

      <section className="coating-section">
        <div className="container">
          <h2>1. Executive Summary</h2>
          <p>
            Metsad Engineering Services Limited is a premier engineering
            consultancy and asset integrity management firm, specializing
            exclusively in the preservation, analysis, and life extension of
            offshore and onshore oil and gas structures. We exist to solve the
            most complex structural challenges in the most hostile marine
            environments.
          </p>
          <p>
            While many firms offer inspection services, Metsad offers diagnosis,
            engineering judgement, and cure. We do not just identify defects; we
            engineer the solution to ensure continuous, safe operation beyond
            original design life.
          </p>

          <hr />

          <h2>2. Core Competencies</h2>
          <p>Our practice is anchored by four specialized technical pillars:</p>
          <ul className="services-list">
            <li>
              <strong>Offshore Structural Health Management:</strong> Lifecycle
              integrity management, RBI methodology, real-time monitoring, and
              degradation forecasting.
            </li>
            <li>
              <strong>
                Structural Facility Analysis &amp; Load Bearing Calculations:
              </strong>{" "}
              Linear and non-linear FEA for accurate capacity assessment.
            </li>
            <li>
              <strong>Stress Analysis &amp; Fatigue Life Assessment:</strong>{" "}
              Hotspot stress analysis and fracture mechanics using ANSYS, SACS,
              Abaqus.
            </li>
            <li>
              <strong>
                Repair &amp; Rehabilitation of Vulnerable Structures:
              </strong>{" "}
              Grouted clamps, member replacement, composite rehabilitation, and
              engineered repairs.
            </li>
          </ul>

          <hr />

          <h2>3. Why Metsad is the Best in the Field</h2>
          <p>
            We treat structural integrity as a scientific discipline. Our team
            comprises senior structural engineers with backgrounds in offshore
            construction, naval architecture, and materials science.
            Deliverables are accepted by classification societies and regulatory
            bodies worldwide.
          </p>

          <h2>4. Why Clients Choose Metsad</h2>
          <ul className="why-list">
            <li>Accuracy: Traceable load paths and verifiable calculations.</li>
            <li>
              Speed: Digital twin technology and rapid assessment protocols.
            </li>
            <li>
              Innovation: Pioneering hybrid repairs and high-strength grout
              techniques.
            </li>
          </ul>

          <hr />

          <h2>5. Conclusion</h2>
          <p>
            Metsad Engineering Services Limited exists to ensure that the
            world’s offshore energy infrastructure remains standing, safe, and
            productive.
          </p>

          <hr />

          <h2>6. Project Portfolio and Capabilities (Picture Gallery)</h2>
          <p>
            Representative imagery from structural analysis and repair projects.
          </p>

          <div className="gallery-grid">
            {(() => {
              const captions = [
                "Structural analysis of an offshore platform",
                "Structural analysis of platform legs",
                "Repairs of underwater jacket legs",
                "Fabricated support for piping",
              ];
              const imgs = [img1, img2, img3, img4];
              return imgs.map((src, i) => (
                <figure className="gallery-item" key={i}>
                  <img
                    src={src}
                    alt={captions[i] || `structural project ${i + 1}`}
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
