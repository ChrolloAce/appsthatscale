'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ThankYouHero: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Elements - Match main page */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-600/20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto text-center">
        {/* Logo/Brand - Match main page */}
        <div className="mb-8 sm:mb-12">
          <img 
            src="/toplogo.png" 
            alt="Apps That Scale" 
            className="mx-auto h-16 sm:h-20 lg:h-24 w-auto mb-6 sm:mb-8"
          />
        </div>

        {/* Success Icon */}
        <div className={`mb-8 sm:mb-10 transform transition-all duration-1000 ${
          isAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <div className="mx-auto w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-2xl">
            <FontAwesomeIcon 
              icon={faCheckCircle} 
              className="text-white text-3xl sm:text-4xl lg:text-5xl"
            />
          </div>
        </div>

        {/* Main Message - Match main page styling */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
            <span className="block mb-2 sm:mb-3">Thank You!</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              You're In!
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Welcome to the Apps That Scale community! 🎉 
            <br className="hidden sm:block" />
            Get ready to transform your ideas into profitable apps.
          </p>
        </div>

        {/* Simple completion message */}
        <div className={`mt-8 sm:mt-12 px-4 transform transition-all duration-1000 delay-500 ${
          isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Check your email for your confirmation and get ready for an amazing journey! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThankYouHero 