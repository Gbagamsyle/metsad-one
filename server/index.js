import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'
import path from 'path'
import { fileURLToPath } from 'url'

/* global process */

// Load env from .env in server directory
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()

// Check for API key
if (!process.env.RESEND_API_KEY) {
  console.error('ERROR: RESEND_API_KEY is not set in .env file')
  process.exit(1)
}

const resend = new Resend(process.env.RESEND_API_KEY)

const adminEmail = process.env.ADMIN_EMAIL || 'admin@metsadgroup.com'
const fromEmail = process.env.FROM_EMAIL || 'contact@metsadgroup.com'

// Logo removed from templates to prevent email clipping
// If needed in future, implement logo as URL reference instead of base64

// Middleware
app.use(cors())
app.use(express.json())

// Helper to escape HTML
function escapeHtml(text) {
  if (!text) return ''
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

/**
 * POST /api/send-contact
 * Send contact form email (admin notification + visitor confirmation)
 */
app.post('/api/send-contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' })
    }

    console.log(`[Contact] Sending email from: ${email}`)

    // Send admin notification
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9f9f9;">
            <tr>
              <td align="center" style="padding: 20px 10px;">
                <table width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 4px;" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 24px 24px 0 24px; border-bottom: 2px solid #D4A024;">
                      <h2 style="margin: 0 0 8px 0; color: #0A1F44; font-size: 22px; font-weight: bold;">New Contact Submission</h2>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 24px;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding: 8px 0;">
                            <span style="color: #0A1F44; font-weight: bold; font-size: 13px;">Name:</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 12px 0; color: #333; font-size: 13px;">
                            ${escapeHtml(name)}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <span style="color: #0A1F44; font-weight: bold; font-size: 13px;">Email:</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 12px 0; color: #333; font-size: 13px;">
                            ${escapeHtml(email)}
                          </td>
                        </tr>
                        ${phone ? `<tr>
                          <td style="padding: 8px 0;">
                            <span style="color: #0A1F44; font-weight: bold; font-size: 13px;">Phone:</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 12px 0; color: #333; font-size: 13px;">
                            ${escapeHtml(phone)}
                          </td>
                        </tr>` : ''}
                        <tr>
                          <td style="padding: 12px 0 8px 0;">
                            <span style="color: #0A1F44; font-weight: bold; font-size: 13px;">Message:</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="background-color: #F5E5C5; padding: 16px 24px; margin: 0;">
                      <p style="margin: 0; color: #333; font-size: 13px; line-height: 1.5; white-space: pre-wrap; word-break: break-word;">
                        ${escapeHtml(message)}
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 24px; border-top: 1px solid #e5e5e5; color: #666; font-size: 12px; line-height: 1.4;">
                      <strong style="color: #0A1F44;">Metsad Group</strong><br />
                      <a href="mailto:${escapeHtml(adminEmail)}" style="color: #D4A024; text-decoration: none;">${escapeHtml(adminEmail)}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
    // Plain-text fallback for clients that don't render HTML fully
    const adminText = `New contact submission\n\nName: ${escapeHtml(name)}\nEmail: ${escapeHtml(email)}${phone ? `\nPhone: ${escapeHtml(phone)}` : ''}\n\nMessage:\n${escapeHtml(message)}`

    const adminRes = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: adminHtml,
      text: adminText,
    })

    console.log(`[Contact] Admin email result:`, adminRes)

    // Send confirmation to visitor
    const visitorHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9f9f9;">
            <tr>
              <td align="center" style="padding: 20px 10px;">
                <table width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 4px;" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 24px 24px 0 24px; border-bottom: 2px solid #D4A024;">
                      <h1 style="margin: 0 0 8px 0; color: #0A1F44; font-size: 24px; font-weight: bold;">Thank you, ${escapeHtml(name)}!</h1>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 24px; color: #333; font-size: 13px; line-height: 1.6;">
                      <p style="margin: 0 0 16px 0;">
                        We've received your message and will get back to you shortly.
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 0 24px;">
                      <p style="margin: 8px 0; color: #0A1F44; font-weight: bold; font-size: 13px;">
                        Your message:
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 0 24px 24px 24px;">
                      <p style="margin: 0; background-color: #F5E5C5; padding: 14px; border-left: 3px solid #D4A024; color: #333; font-size: 13px; line-height: 1.5; white-space: pre-wrap; word-break: break-word;">
                        ${escapeHtml(message)}
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 24px; border-top: 1px solid #e5e5e5; color: #666; font-size: 12px; line-height: 1.6;">
                      Best regards,<br />
                      <strong style="color: #0A1F44;">Metsad</strong><br />
                      <a href="mailto:${escapeHtml(adminEmail)}" style="color: #D4A024; text-decoration: none;">${escapeHtml(adminEmail)}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
    const visitorText = `Thank you ${escapeHtml(name)}\n\nWe've received your message and will get back to you shortly.\n\nYour message:\n${escapeHtml(message)}`

    const visitorRes = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'We received your message — Metsad',
      html: visitorHtml,
      text: visitorText,
    })

    console.log(`[Contact] Visitor email result:`, visitorRes)

    if (!adminRes.data || !visitorRes.data) {
      console.error('[Contact] One or both emails failed to send')
      return res.status(500).json({ error: 'Failed to send one or both emails' })
    }

    console.log('[Contact] Both emails sent successfully')
    res.json({ ok: true, adminId: adminRes.data.id, visitorId: visitorRes.data.id })
  } catch (error) {
    console.error('[Contact] Send contact error:', error)
    res.status(500).json({ error: error.message || 'Internal server error' })
  }
})

/**
 * POST /api/send-newsletter
 * Send newsletter subscription email (admin notification + subscriber confirmation)
 */
app.post('/api/send-newsletter', async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Missing required field: email' })
    }

    // Send admin notification
    const adminNewsletterHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9f9f9;">
            <tr>
              <td align="center" style="padding: 20px 10px;">
                <table width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 4px;" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 24px 24px 0 24px; border-bottom: 2px solid #D4A024;">
                      <h2 style="margin: 0 0 8px 0; color: #0A1F44; font-size: 22px; font-weight: bold;">New Newsletter Subscriber</h2>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 24px;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding: 8px 0;">
                            <span style="color: #0A1F44; font-weight: bold; font-size: 13px;">Email:</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 12px 0; color: #333; font-size: 13px;">
                            ${escapeHtml(email)}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <span style="color: #0A1F44; font-weight: bold; font-size: 13px;">Subscribed on:</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 12px 0; color: #333; font-size: 13px;">
                            ${new Date().toLocaleString()}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 24px; border-top: 1px solid #e5e5e5; color: #666; font-size: 12px; line-height: 1.4;">
                      <strong style="color: #0A1F44;">Metsad Group</strong><br />
                      <span style="color: #999; font-size: 11px;">Energy Solutions</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
    const adminNewsletterText = `New newsletter subscriber\n\nEmail: ${escapeHtml(email)}\nSubscribed on: ${new Date().toLocaleString()}`

    const adminRes = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Newsletter Subscriber: ${escapeHtml(email)}`,
      html: adminNewsletterHtml,
      text: adminNewsletterText,
    })

    // Send confirmation to subscriber
    const subscriberHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9f9f9;">
            <tr>
              <td align="center" style="padding: 20px 10px;">
                <table width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 4px;" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 24px 24px 0 24px; border-bottom: 2px solid #D4A024;">
                      <h1 style="margin: 0 0 8px 0; color: #0A1F44; font-size: 24px; font-weight: bold;">Welcome to Metsad!</h1>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 24px; color: #333; font-size: 13px; line-height: 1.6;">
                      <p style="margin: 0 0 12px 0;">
                        Thank you for subscribing to our newsletter.
                      </p>
                      <p style="margin: 0;">
                        You'll receive the latest updates on energy solutions, industry insights, and exclusive offers.
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 24px; border-top: 1px solid #e5e5e5; color: #666; font-size: 12px; line-height: 1.6;">
                      Best regards,<br />
                      <strong style="color: #0A1F44;">Metsad</strong><br />
                      <span style="color: #999; font-size: 11px;">Energy Solutions</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
    const subscriberText = `Welcome to Metsad!\n\nThank you for subscribing to our newsletter. You'll receive updates on energy solutions, industry insights, and offers.`

    const subscriberRes = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome to Metsad Newsletter',
      html: subscriberHtml,
      text: subscriberText,
    })

    if (!adminRes.data || !subscriberRes.data) {
      return res.status(500).json({ error: 'Failed to send one or both emails' })
    }

    res.json({ ok: true, adminId: adminRes.data.id, subscriberId: subscriberRes.data.id })
  } catch (error) {
    console.error('Send newsletter error:', error)
    res.status(500).json({ error: error.message })
  }
})

/**
 * Health check
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Email API server running on http://localhost:${PORT}`)
})
