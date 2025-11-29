import React, { useState, useEffect } from 'react'
import './Contact.modules.css'
import Footer from '../../components/Footer/Footer'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { sendContactEmail } from '../../utils/sendEmailClient'
import { setMeta } from '../../utils/seo'
import Toast from '../../components/Toast/Toast'

export default function Contact() {
	useEffect(()=>{
		setMeta({
			title: 'Contact Metsad — Request consultation or support',
			description: 'Get in touch with Metsad for consultations, support and service inquiries.',
			url: window.location.href
		})
	}, [])
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')

	const [sending, setSending] = useState(false)
	const [error, setError] = useState(null)
	const [toastMessage, setToastMessage] = useState('')
	const [toastType, setToastType] = useState('info')
	const [showToast, setShowToast] = useState(false)

	return (
		<main className="contact-page">
			<h1 className="page-title sr-only">Contact Metsad</h1>
			<section className="contact-section">
				<div className="contact-container">
					<div className="contact-left">
						<h2>Get in touch</h2>
						<p className="contact-lead">Need help or have a question? Our team at Metsad is here to provide the answers and support you need.</p>

						<form className="contact-form" onSubmit={async (e) => {
							e.preventDefault()
							setSending(true)
							setError(null)
							try {
								await sendContactEmail({ name, email, phone, message })
								setToastMessage('Thanks — your message was sent.')
								setToastType('success')
								setShowToast(true)
								setName('')
								setEmail('')
								setPhone('')
								setMessage('')
							} catch (err) {
								console.error('sendContactEmail error', err)
								setError('Unable to send message right now. Please try again later.')
								setToastMessage('Unable to send message right now. Please try again later.')
								setToastType('error')
								setShowToast(true)
							} finally {
								setSending(false)
							}
						}}>
							<label>
								Full name
								<input type="text" name="name" placeholder="Enter your full name" value={name} onChange={(e)=>setName(e.target.value)} required />
							</label>

							<div className="contact-row">
								<label>
									Email
									<input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
								</label>

								<label>
									Phone (Optional)
									<input type="tel" name="phone" placeholder="Enter your phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
								</label>
							</div>

							<label>
								Message (Optional)
								<textarea name="message" rows="5" placeholder="Write your message here..." value={message} onChange={(e)=>setMessage(e.target.value)} />
							</label>

							<button className="btn-submit" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</button>

							{error && <div className="contact-error">{error}</div>}
						</form>
						<Toast message={toastMessage} type={toastType} visible={showToast} onClose={() => setShowToast(false)} />
					</div>

					<aside className="contact-right">
						<div className="contact-panel">
							<h3>Our Quick Contacts</h3>
							<p className="panel-sub">From 08:00AM - 05:00PM CST (Mon - Fri)</p>

							<div className="panel-card">
								<h4>Sales</h4>
								<p className="muted">sales@metsadgroup.com<br/>(469) 324-9792</p>
							</div>

							<div className="panel-card">
								<h4>Tech Support</h4>
								<p className="muted">support@metsadgroup.com<br/>(972) 992-1668</p>
							</div>

							<div className="panel-card">
								<h4>Billing</h4>
								<p className="muted">billing@metsadgroup.com<br/>(972) 992-1668</p>
							</div>

							<div className="panel-socials">
								<a href="#" aria-label="facebook"><FaFacebookF /></a>
								<a href="#" aria-label="linkedin"><FaLinkedinIn /></a>
								<a href="#" aria-label="whatsapp"><FaWhatsapp /></a>
							</div>
						</div>
					</aside>
				</div>
			</section>

			<Footer />
		</main>
	)
}