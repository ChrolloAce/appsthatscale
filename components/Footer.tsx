'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <img 
            src="/toplogo.png" 
            alt="Apps That Scale" 
            className="h-8 w-auto mx-auto mb-4"
          />
          <p className="text-gray-500 text-sm">
            © 2024 Apps That Scale. Building the future of scalable applications.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 