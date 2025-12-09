import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import './styles/global.css'
import useScrollReveal from './hooks/useScrollReveal'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ValueProposition from './pages/About/ValueProposition'
import HsePolicy from './pages/About/HsePolicy'
import QualityPolicies from './pages/About/Environmental'
import PrivacyPolicy from './pages/About/PrivacyPolicy'
import Services from './pages/Services/Services'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import Contact from './pages/Contact/Contact'
import CSR from './pages/CSR'

function App() {
  // initialize scroll reveal (runs once across the app)
  useScrollReveal()

  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/value-proposition" element={<ValueProposition />} />
        <Route path="/about/hse" element={<HsePolicy />} />
        <Route path="/about/quality-policies" element={<QualityPolicies />} />
        <Route path="/about/privacy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
