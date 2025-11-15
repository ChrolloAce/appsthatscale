'use client'

import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-center items-center">
          {/* Logo - Centered and Minimal */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="text-white font-medium text-sm tracking-wide">AppsMath</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 