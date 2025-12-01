// Client-side email utility
// Calls backend API endpoints to send emails via Resend

const API_URL = import.meta.env.VITE_API_URL || 'https://metsad.onrender.com'

/**
 * Send a contact form submission via backend API
 * @param {Object} payload - { name, email, phone, message }
 */
export async function sendContactEmail(payload) {
  try {
    const response = await fetch(`${API_URL}/api/send-contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.error || `HTTP ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Contact email error:', error)
    throw new Error(`Failed to send contact email: ${error.message}`)
  }
}

/**
 * Send a newsletter subscription email via backend API
 * @param {Object} payload - { email }
 */
export async function sendNewsletterEmail(payload) {
  try {
    const response = await fetch(`${API_URL}/api/send-newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.error || `HTTP ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Newsletter email error:', error)
    throw new Error(`Failed to send newsletter email: ${error.message}`)
  }
}

export default {
  sendContactEmail,
  sendNewsletterEmail,
}
