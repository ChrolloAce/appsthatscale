'use client'

import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-white font-semibold text-xl tracking-tight">Fluidity</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-white/90 hover:text-white transition-all duration-200 text-sm font-medium">
              Services
            </Link>
            <Link href="#blockchains" className="text-white/90 hover:text-white transition-all duration-200 text-sm font-medium">
              Blockchains
            </Link>
            <Link href="#clients" className="text-white/90 hover:text-white transition-all duration-200 text-sm font-medium">
              Clients
            </Link>
            
            {/* Connect Button */}
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-105">
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 