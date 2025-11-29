import React from 'react'
import './WhyChoose.modules.css'

const items = [
  { id: 1, number: '01', title: 'Innovation', text: 'Pioneering new technologies in energy production.' },
  { id: 2, number: '02', title: 'Safety', text: 'Unwavering commitment to workplace and environmental safety.' },
  { id: 3, number: '03', title: 'Reliability', text: 'Delivering consistent results and meeting all commitments.' },
  { id: 4, number: '04', title: 'Sustainability', text: 'Protecting our planet for future generations.' }
]

export default function WhyChoose(){
  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="why-inner">
        <header className="whychoose-header">
          <h2 id="why-heading">Why Choose Metsad?</h2>
          <p className="why-sub">Our core values drive excellence in every operation</p>
        </header>

        <div className="why-gridd">
          {items.map((it) => (
            <article key={it.id} className="why-card" aria-labelledby={`why-${it.id}-title`}>
              <div className="why-card-left">
                <div className="why-number">{it.number}</div>
              </div>

              <div className="why-card-right">
                <h3 id={`why-${it.id}-title`}>{it.title}</h3>
                <p className="why-desc">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
