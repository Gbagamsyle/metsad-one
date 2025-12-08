// Client-side email utility
// Calls backend API endpoints to send emails via serverless functions

const API_URL = import.meta.env.VITE_API_URL || ''

function buildUrl(path) {
  return API_URL ? `${API_URL}${path}` : path
}

async function postJson(path, payload) {
  const response = await fetch(buildUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.error || `HTTP ${response.status}`)
  }

  return await response.json()
}

export async function sendContactEmail(payload) {
  try {
    return await postJson('/api/send-contact', payload)
  } catch (error) {
    console.error('Contact email error:', error)
    throw new Error(`Failed to send contact email: ${error.message}`)
  }
}

export async function sendNewsletterEmail(payload) {
  try {
    return await postJson('/api/send-newsletter', payload)
  } catch (error) {
    console.error('Newsletter email error:', error)
    throw new Error(`Failed to send newsletter email: ${error.message}`)
  }
}

export default {
  sendContactEmail,
  sendNewsletterEmail,
}
