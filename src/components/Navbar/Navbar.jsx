import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.modules.css'
import logo from '../../assets/images/logo.png'
import ServiceDropdown from './ServiceDropdown'
import AboutDropdown from './AboutDropdown'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Determine if we're on the home page
  const isHomePage = location && location.pathname === '/'

  // Derive initial navbar visibility from current route: show on non-home pages
  const [showNav, setShowNav] = useState(!isHomePage)

  useEffect(() => {
    if (!isHomePage) {
      // Always show navbar on non-home pages
      const timer = setTimeout(() => setShowNav(true), 0)
      return () => clearTimeout(timer)
    }

    // On home page, show based on scroll position
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run handler once to ensure correct state on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Scroll to top and close menu when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setOpen(false), 0)
    return () => clearTimeout(timer)
  }, [location.pathname])

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Overlay backdrop when menu is open */}
      {open && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            zIndex: 49,
          }}
          onClick={() => setOpen(false)}
        />
      )}
      <header className={`metsad-nav ${showNav ? 'show' : ''}`}>
        <div className="nav-inner">
          <Link className="brand" to="/">
            <img src={logo}  alt="Metsad logo" className="brand-logo" />
          </Link>

          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger" />
          </button>

          <nav className={open ? 'nav-links open' : 'nav-links'}>
            <Link to="/">Home</Link>
            <AboutDropdown />
            <ServiceDropdown />
            <Link to="/csr">CSR</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  )
}
