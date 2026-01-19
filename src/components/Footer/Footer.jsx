import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.modules.css'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Brand */}
        <div className="footer-col footer-brand">
          <img src={logo} alt="Metsad logo" className="footer-logo" />
          <h3>Metsad</h3>
          <p>Leading provider of innovative oil and gas solutions with many years of industry expertise and global operations.</p>
          
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/metsad-engineering-service-86aa603a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
            <a href="http://x.com/Metsadgroup" aria-label="Twitter" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-right">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="contact-info">
            <p><span className="icon">📧</span> <a href="mailto:info@metsadgroup.com">info@metsadgroup.com</a></p>
            <p><span className="icon">🕐</span> 24/7 Support Available</p>
          </div>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <nav className="footer-nav">
            <span className="footer-text">Privacy Policy</span>
            <span className="footer-text">Terms of Service</span>
          </nav>
        </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Metsad Oil & Gas. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}
