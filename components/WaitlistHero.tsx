'use client'

import React from 'react'

const WaitlistHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-600/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-16">
          <img 
            src="/toplogo.png" 
            alt="Apps That Scale" 
            className="mx-auto h-24 w-auto mb-12"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-12 leading-tight">
          Build Apps That
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mt-4">
            Actually Scale
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl sm:text-3xl text-gray-600 mb-20 max-w-4xl mx-auto leading-relaxed font-light">
          Join thousands of developers learning to build production-ready applications 
          with modern architecture, scalability patterns, and industry best practices.
        </p>
      </div>
    </section>
  )
}

export default WaitlistHero 