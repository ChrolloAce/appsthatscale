'use client'

import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/toplogo.png" 
              alt="Apps That Scale" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 