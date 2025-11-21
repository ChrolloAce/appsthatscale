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
      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto text-center">
        {/* Logo/Brand - Match main page */}
        <div className="mb-8 sm:mb-12">
          <img 
            src="/logo.png" 
            alt="Apps That Scale" 
            className="mx-auto h-12 sm:h-16 lg:h-20 w-auto mb-6 sm:mb-8 opacity-90"
          />
        </div>

        {/* Success Icon */}
        <div className={`mb-8 sm:mb-10 transform transition-all duration-1000 ${
          isAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            <span className="block mb-2 sm:mb-3">Thank You</span>
            <span className="block text-gray-100">
              You're In
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
            Welcome to the Apps That Scale community
            <br className="hidden sm:block" />
            Get ready to transform your ideas into profitable apps
          </p>
        </div>

        {/* Simple completion message */}
        <div className={`mt-8 sm:mt-12 px-4 transform transition-all duration-1000 delay-500 ${
          isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Check your email for your confirmation and get ready for an amazing journey
            </p>
          </div>
        </div>

        {/* Telegram Button */}
        <div className={`mt-10 sm:mt-14 px-4 transform transition-all duration-1000 delay-700 ${
          isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <a 
            href="https://t.me/appsthatscale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg lg:text-xl px-10 sm:px-14 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-600/50 active:scale-95"
          >
            Join Free Telegram for Exclusive Content and Updates
          </a>
        </div>
      </div>
    </section>
  )
}

export default ThankYouHero 