'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Image 
            src="/bluelogo.png" 
            alt="Apps That Scale Logo" 
            width={40} 
            height={40}
            className="brand-logo"
          />
          <span>Apps That Scale</span>
          <span className="brand-short">ATS</span>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#what-you-get" className="nav-link" onClick={() => scrollToSection('what-you-get')}>
              What You Get
            </a>
          </li>
          <li className="nav-item">
            <a href="#course" className="nav-link" onClick={() => scrollToSection('course')}>
              Course
            </a>
          </li>
          <li className="nav-item">
            <a href="/dashboard" className="nav-link">
              Dashboard
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <button className="btn-primary">Get Started</button>
        </div>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 