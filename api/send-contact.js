/* eslint-env node */
/* global process */
import { Resend } from 'resend'

// Small server-side HTML escape
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
    const { name, email, phone, message } = await parseJsonBody(req)

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const adminEmail = process.env.ADMIN_EMAIL
    const fromEmail = process.env.FROM_EMAIL

    // Admin notification
    const adminHtml = `<!doctype html><html><body><div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <h2 style="color:#0A1F44">New Contact Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
      <hr />
      <div style="background:#F5E5C5;padding:12px;border-radius:4px;white-space:pre-wrap;">${escapeHtml(message)}</div>
      <p style="color:#666;font-size:12px;margin-top:18px">Metsad Group</p>
    </div></body></html>`

    const adminText = `New contact submission\n\nName: ${escapeHtml(name)}\nEmail: ${escapeHtml(email)}${phone ? `\nPhone: ${escapeHtml(phone)}` : ''}\n\nMessage:\n${escapeHtml(message)}`

    const adminRes = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: adminHtml,
      text: adminText,
    })

    // Visitor confirmation
    const visitorHtml = `<!doctype html><html><body><div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <h2 style="color:#0A1F44">Thank you, ${escapeHtml(name)}!</h2>
      <p>We've received your message and will get back to you shortly.</p>
      <hr />
      <div style="background:#F5E5C5;padding:12px;border-radius:4px;white-space:pre-wrap;">${escapeHtml(message)}</div>
      <p style="color:#666;font-size:12px;margin-top:18px">Best regards,<br/>Metsad</p>
    </div></body></html>`

    const visitorText = `Thank you ${escapeHtml(name)}\n\nWe've received your message and will get back to you shortly.\n\nYour message:\n${escapeHtml(message)}`

    const visitorRes = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'We received your message — Metsad',
      html: visitorHtml,
      text: visitorText,
    })

    if (!adminRes || !visitorRes) {
      return res.status(500).json({ error: 'Failed to send one or both emails' })
    }

    return res.json({ ok: true })
  } catch (err) {
    console.error('send-contact error:', err)
    return res.status(500).json({ error: err.message || 'Internal server error' })
  }
}
