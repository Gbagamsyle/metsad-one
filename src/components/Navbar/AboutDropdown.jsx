import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import './AboutDropdown.css'

const aboutItems = [
  { id: 'value-proposition', title: 'Our Value Proposition', to: '/about/value-proposition' },
  { id: 'hse', title: 'Health, Safety And Environmental Policy (HSE)', to: '/about/hse' },
  { id: 'environmental', title: 'Environmental Privacy', to: '/about/environmental' },
  { id: 'privacy', title: 'Privacy Policy', to: '/about/privacy' },
]

export default function AboutDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const prevPathnameRef = useRef(location.pathname)
  const closeTimeoutRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if (prevPathnameRef.current !== location.pathname) {
      prevPathnameRef.current = location.pathname
      queueMicrotask(() => setIsOpen(false))
    }
  }, [location.pathname])

  const handleDropdownClose = () => setIsOpen(false)

  const scheduleClose = (delay = 150) => {
    clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), delay)
  }

  const cancelScheduledClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = undefined
    }
  }

  const handleTrigger = () => {
    // If already on any /about route, toggle dropdown; otherwise navigate to /about
    if (location.pathname && location.pathname.startsWith('/about')) {
      // Toggle and cancel any pending close so the clicked action wins
      cancelScheduledClose()
      setIsOpen((v) => !v)
    } else {
      navigate('/about')
      setIsOpen(false)
    }
  }

  // detect touch devices (no hover) safely
  const isTouchDevice = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: none)').matches

  return (
    <div
      className="about-dropdown-wrapper"
      onMouseEnter={() => {
        if (!isTouchDevice()) {
          cancelScheduledClose()
          setIsOpen(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchDevice()) scheduleClose()
      }}
      onFocus={() => {
        if (!isTouchDevice()) {
          cancelScheduledClose()
          setIsOpen(true)
        }
      }}
      onBlur={() => {
        if (!isTouchDevice()) scheduleClose()
      }}
      onTouchStart={() => {
        // ensure any scheduled close is cancelled on touch so taps open the menu reliably
        cancelScheduledClose()
      }}
    >
      <button
        className={`about-dropdown-trigger ${isOpen ? 'active' : ''}`}
        onClick={handleTrigger}
        aria-label="Toggle about dropdown"
        title="About"
      >
        About
        <FaChevronDown className="dropdown-icon" />
      </button>

      {isOpen && (
        <div className="about-dropdown-menu">
          <div className="dropdown-content">
            {aboutItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className="dropdown-item"
                onClick={handleDropdownClose}
              >
                <span className="item-title">{item.title}</span>
                <span className="item-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
