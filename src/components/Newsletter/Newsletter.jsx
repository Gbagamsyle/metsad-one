import React, { useState } from 'react'
import './Newsletter.modules.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setMessage('Thank you for subscribing!')
      setEmail('')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-inner">
        <h2>Stay Informed</h2>
        <p className="newsletter-sub">Join our mailing list to receive updates on our activities</p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>

        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </section>
  )
}
