/* eslint-env node */
import { Resend } from 'resend'

function escapeHtml(text) {
  if (!text) return ''
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function parseJsonBody(req) {
  if (req.body && Object.keys(req.body).length) return req.body
  return await new Promise((resolve, reject) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {})
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const { email } = await parseJsonBody(req)
    if (!email) return res.status(400).json({ error: 'Missing required field: email' })

    const resend = new Resend(process.env.RESEND_API_KEY)
    const adminEmail = process.env.ADMIN_EMAIL
    const fromEmail = process.env.FROM_EMAIL

    // Admin notification
    const adminHtml = `<!doctype html><html><body><div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <h2 style="color:#0A1F44">New Newsletter Subscriber</h2>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subscribed on:</strong> ${escapeHtml(new Date().toLocaleString())}</p>
      <p style="color:#666;font-size:12px;margin-top:18px">Metsad Group</p>
    </div></body></html>`

    const adminText = `New newsletter subscriber\n\nEmail: ${escapeHtml(email)}\nSubscribed on: ${new Date().toLocaleString()}`

    const adminRes = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Newsletter Subscriber: ${escapeHtml(email)}`,
      html: adminHtml,
      text: adminText,
    })

    // Subscriber confirmation
    const subscriberHtml = `<!doctype html><html><body><div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <h1 style="color:#0A1F44">Welcome to Metsad!</h1>
      <p>Thank you for subscribing to our newsletter.</p>
      <p style="color:#666;font-size:12px;margin-top:18px">Best regards,<br/>Metsad</p>
    </div></body></html>`

    const subscriberText = `Welcome to Metsad!\n\nThank you for subscribing to our newsletter.`

    const subscriberRes = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome to Metsad Newsletter',
      html: subscriberHtml,
      text: subscriberText,
    })

    if (!adminRes || !subscriberRes) return res.status(500).json({ error: 'Failed to send one or both emails' })

    return res.json({ ok: true })
  } catch (err) {
    console.error('send-newsletter error:', err)
    return res.status(500).json({ error: err.message || 'Internal server error' })
  }
}
