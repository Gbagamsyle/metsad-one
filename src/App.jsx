import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import './styles/global.css'
import useScrollReveal from './hooks/useScrollReveal'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'

function App() {
  // initialize scroll reveal (runs once across the app)
  useScrollReveal()

  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
