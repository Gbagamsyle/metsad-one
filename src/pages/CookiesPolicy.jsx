import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import './CookiesPolicy.modules.css'
import { setMeta } from '../utils/seo'

export default function CookiesPolicy() {
  useEffect(() => {
    setMeta({
      title: 'Cookies Policy — Metsad',
      description: 'Information about how Metsad uses cookies and tracking technologies.',
      url: window.location.href,
    })
  }, [])

  return (
    <>
      <main className="cookies-page">
        <div className="cookies-container">
          <div className="cookies-hero">
            <h1>Cookies Policy</h1>
            <div className="underline"></div>
            <p className="cookies-sub">Learn about the cookies and tracking technologies we use to improve your experience on our website.</p>
          </div>

          <section className="cookies-content">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when you visit our website. They help us remember information about your visit and improve your browsing experience.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              Metsad uses Google Analytics, a web analytics service provided by Google Inc., to analyze how visitors use our website. This helps us understand user behavior, measure website performance, and improve our services.
            </p>

            <h3>Google Analytics</h3>
            <ul className="cookies-list">
              <li><strong>Purpose:</strong> To track visitor behavior, understand site usage patterns, and optimize website performance</li>
              <li><strong>Cookies Set:</strong> _ga, _gat, _gid (and related analytics cookies)</li>
              <li><strong>Duration:</strong> These cookies typically expire after 2 years</li>
              <li><strong>Data Collected:</strong> Pages visited, time spent on pages, traffic sources, user demographics (aggregated)</li>
              <li><strong>Privacy:</strong> Data is anonymized and does not personally identify you</li>
            </ul>

            <h2>Cookie Categories</h2>

            <div className="cookie-category">
              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for our website to function properly. Without them, certain features may not work as intended.
              </p>
            </div>

            <div className="cookie-category">
              <h3>Analytics Cookies</h3>
              <p>
                We use analytics cookies to understand how our website is used and to measure its effectiveness. Google Analytics is our primary analytics tool.
              </p>
            </div>

            <h2>Your Cookie Choices</h2>
            <p>
              When you first visit our website, you will see a cookie consent banner at the bottom of the page. You can:
            </p>
            <ul className="cookies-list">
              <li><strong>Accept:</strong> Accept all analytics cookies and continue browsing</li>
              <li><strong>Dismiss:</strong> Decline non-essential cookies (you can still use our site)</li>
              <li><strong>Learn More:</strong> Visit this page to understand our cookie usage</li>
            </ul>

            <p>
              Your choice is saved in your browser for future visits. You can change your cookie preferences at any time by clearing your browser cookies and revisiting the site.
            </p>

            <h2>Managing Cookies in Your Browser</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can typically find these options under "Settings," "Preferences," or "Options." Here's how to manage cookies in popular browsers:
            </p>
            <ul className="cookies-list">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/windows-10-microsoft-edge-browsing-data-and-privacy-bb15687b-338d-0dba-9421-51160cee4a81" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              Our website uses Google Analytics, a service provided by Google Inc. Google may use cookies and similar technologies to collect information about your browsing activities. You can learn more about Google's privacy practices at:
            </p>
            <ul className="cookies-list">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">How Google Uses Data</a></li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our cookie usage or privacy practices, please contact us at:
            </p>
            <div className="cookies-contact-info">
              <p>Email: <a href="mailto:info@metsad.com">info@metsad.com</a></p>
            </div>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The date of the last update is shown below.
            </p>
            <p className="last-updated">Last updated: December 2025</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
