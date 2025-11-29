// Email sending via Resend API
// Sends:
//   1. Admin notification to VITE_ADMIN_EMAIL
//   2. Confirmation email to visitor

import { Resend } from 'resend'

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@'
const fromEmail = import.meta.env.VITE_FROM_EMAIL || 'noreply@'

/**
 * Send a contact form submission
 * @param {Object} payload - { name, email, phone, message }
 */
export async function sendContactEmail(payload) {
  const { name, email, phone, message } = payload

  if (!import.meta.env.VITE_RESEND_API_KEY) {
    console.warn('VITE_RESEND_API_KEY not set; simulating email send')
    return new Promise((resolve) =>
      setTimeout(() => resolve({ ok: true, simulated: true }), 700)
    )
  }

  try {
    // Send admin notification
    const adminRes = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style type="text/css">
              body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
              table { border-collapse: collapse; width: 100%; }
              img { border: 0; display: block; outline: none; text-decoration: none; }
            </style>
          </head>
          <body style="margin:0; padding:0; min-width:100%!important;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table width="100%" style="max-width: 600px;" cellpadding="0" cellspacing="0" border="0">
                    <!-- Header -->
                    <tr>
                      <td align="left" style="padding-bottom: 30px; border-bottom: 3px solid #D4A024;">
                        <h2 style="margin: 0; color: #0A1F44; font-size: 24px; font-weight: 600;">New Contact Submission</h2>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 30px 0;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding: 12px 0;">
                              <span style="color: #0A1F44; font-weight: 600; font-size: 14px;">Name:</span><br />
                              <span style="color: #333; font-size: 14px;">${escapeHtml(name)}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <span style="color: #0A1F44; font-weight: 600; font-size: 14px;">Email:</span><br />
                              <span style="color: #333; font-size: 14px;">${escapeHtml(email)}</span>
                            </td>
                          </tr>
                          ${phone ? `<tr>
                            <td style="padding: 12px 0;">
                              <span style="color: #0A1F44; font-weight: 600; font-size: 14px;">Phone:</span><br />
                              <span style="color: #333; font-size: 14px;">${escapeHtml(phone)}</span>
                            </td>
                          </tr>` : ''}
                          <tr>
                            <td style="padding: 12px 0;">
                              <span style="color: #0A1F44; font-weight: 600; font-size: 14px;">Message:</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Message Box -->
                    <tr>
                      <td style="background-color: #F5E5C5; padding: 20px; border-radius: 6px; border-left: 4px solid #D4A024;">
                        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6; word-wrap: break-word; white-space: pre-wrap;">
                          ${escapeHtml(message).replace(/\n/g, '<br />')}
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding-top: 30px; border-top: 1px solid #D9DCE1; text-align: center;">
                        <p style="margin: 0; color: #666; font-size: 12px; line-height: 1.6;">
                          <strong style="color: #0A1F44;">Metsad</strong><br />
                          Energy Solutions
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    // Send confirmation to visitor
    const visitorRes = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'We received your message — Metsad',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style type="text/css">
              body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
              table { border-collapse: collapse; width: 100%; }
              img { border: 0; display: block; outline: none; text-decoration: none; }
            </style>
          </head>
          <body style="margin:0; padding:0; min-width:100%!important;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table width="100%" style="max-width: 600px;" cellpadding="0" cellspacing="0" border="0">
                    <!-- Header -->
                    <tr>
                      <td align="left" style="padding-bottom: 30px; border-bottom: 3px solid #D4A024;">
                        <h1 style="margin: 0; color: #0A1F44; font-size: 28px; font-weight: 600;">Thank you, ${escapeHtml(name)}!</h1>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 30px 0;">
                        <p style="margin: 0 0 20px 0; color: #333; font-size: 15px; line-height: 1.6;">
                          We've received your message and will get back to you shortly.
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Divider -->
                    <tr>
                      <td style="padding: 20px 0;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="border-top: 1px solid #D9DCE1; height: 1px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Message Summary -->
                    <tr>
                      <td style="padding: 20px 0;">
                        <p style="margin: 0 0 12px 0; color: #0A1F44; font-weight: 600; font-size: 14px;">Your message:</p>
                        <p style="margin: 0; background-color: #F5E5C5; padding: 16px; border-radius: 6px; border-left: 4px solid #D4A024; color: #333; font-size: 14px; line-height: 1.6; word-wrap: break-word; white-space: pre-wrap;">
                          ${escapeHtml(message).replace(/\n/g, '<br />')}
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Divider -->
                    <tr>
                      <td style="padding: 20px 0;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="border-top: 1px solid #D9DCE1; height: 1px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 20px 0; text-align: left;">
                        <p style="margin: 0; color: #666; font-size: 13px; line-height: 1.8;">
                          Best regards,<br />
                          <strong style="color: #0A1F44; font-size: 14px;">Metsad</strong><br />
                          <span style="color: #999; font-size: 12px;">Energy Solutions</span>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    if (!adminRes.data || !visitorRes.data) {
      throw new Error('Failed to send one or both emails')
    }

    return { ok: true, adminId: adminRes.data.id, visitorId: visitorRes.data.id }
  } catch (error) {
    console.error('Resend error:', error)
    throw new Error(`Email send failed: ${error.message}`)
  }
}

/**
 * Send a newsletter subscription confirmation
 * @param {Object} payload - { email }
 */
export async function sendNewsletterEmail(payload) {
  const { email } = payload

  if (!import.meta.env.VITE_RESEND_API_KEY) {
    console.warn('VITE_RESEND_API_KEY not set; simulating email send')
    return new Promise((resolve) =>
      setTimeout(() => resolve({ ok: true, simulated: true }), 700)
    )
  }

  try {
    // Send admin notification
    const adminRes = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style type="text/css">
              body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
              table { border-collapse: collapse; width: 100%; }
              img { border: 0; display: block; outline: none; text-decoration: none; }
            </style>
          </head>
          <body style="margin:0; padding:0; min-width:100%!important;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table width="100%" style="max-width: 600px;" cellpadding="0" cellspacing="0" border="0">
                    <!-- Header -->
                    <tr>
                      <td align="left" style="padding-bottom: 30px; border-bottom: 3px solid #D4A024;">
                        <h2 style="margin: 0; color: #0A1F44; font-size: 24px; font-weight: 600;">New Newsletter Subscriber</h2>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 30px 0;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding: 12px 0;">
                              <span style="color: #0A1F44; font-weight: 600; font-size: 14px;">Email:</span><br />
                              <span style="color: #333; font-size: 14px;">${escapeHtml(email)}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <span style="color: #0A1F44; font-weight: 600; font-size: 14px;">Subscribed on:</span><br />
                              <span style="color: #333; font-size: 14px;">${new Date().toLocaleString()}</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding-top: 30px; border-top: 1px solid #D9DCE1; text-align: center;">
                        <p style="margin: 0; color: #666; font-size: 12px; line-height: 1.6;">
                          <strong style="color: #0A1F44;">Metsad</strong><br />
                          Energy Solutions
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    // Send confirmation to subscriber
    const subscriberRes = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome to Metsad Newsletter',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style type="text/css">
              body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
              table { border-collapse: collapse; width: 100%; }
              img { border: 0; display: block; outline: none; text-decoration: none; }
            </style>
          </head>
          <body style="margin:0; padding:0; min-width:100%!important;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table width="100%" style="max-width: 600px;" cellpadding="0" cellspacing="0" border="0">
                    <!-- Header -->
                    <tr>
                      <td align="left" style="padding-bottom: 30px; border-bottom: 3px solid #D4A024;">
                        <h1 style="margin: 0; color: #0A1F44; font-size: 28px; font-weight: 600;">Welcome to Metsad!</h1>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 30px 0;">
                        <p style="margin: 0 0 20px 0; color: #333; font-size: 15px; line-height: 1.6;">
                          Thank you for subscribing to our newsletter.
                        </p>
                        <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">
                          You'll receive the latest updates on energy solutions, industry insights, and exclusive offers.
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Divider -->
                    <tr>
                      <td style="padding: 20px 0;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="border-top: 1px solid #D9DCE1; height: 1px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 20px 0; text-align: left;">
                        <p style="margin: 0; color: #666; font-size: 13px; line-height: 1.8;">
                          Best regards,<br />
                          <strong style="color: #0A1F44; font-size: 14px;">Metsad</strong><br />
                          <span style="color: #999; font-size: 12px;">Energy Solutions</span>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    if (!adminRes.data || !subscriberRes.data) {
      throw new Error('Failed to send one or both emails')
    }

    return { ok: true, adminId: adminRes.data.id, subscriberId: subscriberRes.data.id }
  } catch (error) {
    console.error('Resend error:', error)
    throw new Error(`Email send failed: ${error.message}`)
  }
}

/**
 * Escape HTML to prevent injection
 */
function escapeHtml(text) {
  if (!text) return ''
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

export default {
  sendContactEmail,
  sendNewsletterEmail,
}
