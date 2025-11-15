'use client'

import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Apps That Scale" 
              className="h-7 w-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 