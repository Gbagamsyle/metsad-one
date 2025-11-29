import React, { useEffect } from 'react'
import './Toast.modules.css'

export default function Toast({ message, type = 'info', visible, onClose, duration = 4000 }) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => onClose && onClose(), duration)
    return () => clearTimeout(t)
  }, [visible, duration, onClose])

  if (!visible) return null

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={onClose} aria-label="Close notification">×</button>
    </div>
  )
}
