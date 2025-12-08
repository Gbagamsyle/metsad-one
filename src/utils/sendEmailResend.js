// Client-safe email helpers that call serverless endpoints.
// IMPORTANT: Do NOT include secret API keys in client bundles.
// This file provides a safe wrapper that posts to server endpoints
// (for example Vercel Serverless Functions at `/api/*`).

const API_URL = import.meta.env.VITE_API_URL || ''

function buildUrl(path) {
  // If API_URL is set (e.g. https://example.com), prefix it, otherwise use relative path
  return API_URL ? `${API_URL}${path}` : path
}

async function postJson(url, payload) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Email send failed: ${res.status} ${text}`)
  }

  return res.json().catch(() => ({}))
}

/**
 * Send a contact form submission via your serverless endpoint.
 * @param {{name:string,email:string,phone?:string,message:string}} payload
 */
export async function sendContactEmail(payload) {
  // Use /api/send-contact which maps to `api/send-contact.js` on Vercel
  return postJson(buildUrl('/api/send-contact'), payload)
}

/**
 * Send a newsletter subscription via your serverless endpoint.
 * @param {{email:string}} payload
 */
export async function sendNewsletterEmail(payload) {
  return postJson(buildUrl('/api/send-newsletter'), payload)
}

export default {
  sendContactEmail,
  sendNewsletterEmail,
}
