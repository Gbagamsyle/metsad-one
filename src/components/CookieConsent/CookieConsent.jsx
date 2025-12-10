import React, { useState, useEffect } from 'react'
import './CookieConsent.modules.css'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 0)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDismiss = () => {
    localStorage.setItem('cookieConsent', 'dismissed')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          We use Google Analytics to understand how you use our site and improve your experience. 
          By continuing to browse, you accept our use of cookies.
        </p>
        <a href="/cookies" className="cookie-link">Learn more</a>
      </div>
      <div className="cookie-actions">
        <button onClick={handleAccept} className="cookie-accept">
          Accept
        </button>
        <button onClick={handleDismiss} className="cookie-dismiss">
          Dismiss
        </button>
      </div>
    </div>
  )
}
