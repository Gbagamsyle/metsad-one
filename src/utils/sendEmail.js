// sendEmail utility
// Behavior:
// - If `import.meta.env.VITE_SEND_EMAIL_ENDPOINT` is set, it will POST the payload as JSON to that endpoint.
// - Otherwise, it will simulate a successful send (useful for local dev).

async function sendEmail(payload) {
  const endpoint = import.meta.env.VITE_SEND_EMAIL_ENDPOINT || ''

  if (endpoint) {
    const res = await fetch(endpoint, {
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

  // No endpoint configured — simulate a network call for local development
  return new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 700))
}

export { sendEmail }
export default sendEmail
