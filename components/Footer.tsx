'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <img 
            src="/toplogo.png" 
            alt="Apps That Scale" 
            className="h-8 w-auto mx-auto mb-4"
          />
          <p className="text-gray-400 text-sm">
            © 2025 Apps That Scale. Building the future of scalable applications.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 