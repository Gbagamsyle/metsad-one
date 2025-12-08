import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { servicesData } from '../../utils/servicesData'
import { FaChevronDown } from 'react-icons/fa'
import './ServiceDropdown.css'

export default function ServiceDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const prevPathnameRef = useRef(location.pathname)
  const navigate = useNavigate()
  const closeTimeoutRef = useRef()

  // Close dropdown when route changes. We intentionally do NOT auto-open
  // when navigating to `/services` — the dropdown should open only when
  // the user explicitly clicks the Services trigger while already on `/services`.
  useEffect(() => {
    if (prevPathnameRef.current !== location.pathname) {
      prevPathnameRef.current = location.pathname
      // Defer state update to avoid synchronous setState in effect
      queueMicrotask(() => {
        setIsOpen(false)
      })
    }
  }, [location.pathname])

  const handleDropdownClose = () => {
    setIsOpen(false)
  }

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
    // If already on the services page, toggle dropdown. Otherwise navigate to services
    // and keep the dropdown closed (user can click Services again to open it).
    if (location.pathname === '/services') {
      // clicking while on /services should toggle; cancel any scheduled close
      cancelScheduledClose()
      setIsOpen((v) => !v)
    } else {
      navigate('/services')
      // ensure dropdown remains closed when navigating to the services page
      setIsOpen(false)
    }
  }

  // detect touch devices (no hover) safely
  const isTouchDevice = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: none)').matches

  return (
    <div
      className="service-dropdown-wrapper"
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
        cancelScheduledClose()
      }}
    >
      <button
        className={`service-dropdown-trigger ${isOpen ? 'active' : ''}`}
        onClick={handleTrigger}
        aria-label="Toggle services dropdown"
        title="Click to view all services"
      >
        Services
        <FaChevronDown className="dropdown-icon" />
      </button>

      {isOpen && (
        <div className="service-dropdown-menu">
          <div className="dropdown-content">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="dropdown-item"
                onClick={handleDropdownClose}
              >
                <span className="service-title">{service.title}</span>
                <span className="service-icon-indicator">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
