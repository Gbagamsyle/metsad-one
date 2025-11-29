import React, { useState } from 'react'
import './Newsletter.modules.css'
import { sendNewsletterEmail } from '../../utils/sendEmailClient'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setSending(true)
    setMessage('')
    setMessageType('')

    try {
      await sendNewsletterEmail({ email })
      setMessageType('success')
      setMessage('Thank you for subscribing!')
      setEmail('')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Newsletter subscription error:', err)
      setMessageType('error')
      setMessage('Subscription failed. Please try again later.')
      setTimeout(() => setMessage(''), 3000)
    } finally {
      setSending(false)
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
            disabled={sending}
          />
          <button type="submit" className="newsletter-btn" disabled={sending}>
            {sending ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>

        {message && <p className={`newsletter-message ${messageType}`}>{message}</p>}
      </div>
    </section>
  )
}
