'use client'

import React, { useState, useEffect } from 'react'

const WaitlistHero: React.FC = () => {
  // Avatar images for social proof
  const avatars = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5'
  ]

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date to November 30, 2025, 23:59:59
    const targetDate = new Date('2025-11-30T23:59:59')
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden dark-tech-hero">
      {/* Pure Black Background with Subtle Grid */}
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Subtle Glow Effects - Very Muted */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500 blur-[150px]"></div>
      </div>

      {/* Hero Container - Minimal and Centered */}
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="stealth-card backdrop-blur-sm bg-black/40 rounded-2xl shadow-2xl border border-white/5 p-8 md:p-12 overflow-hidden">
          
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Minimal Badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Launching Soon</span>
              </div>
            </div>

            {/* Main Heading - Minimal and Bold */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Coming Before 2025
              <br />
              <span className="text-gray-400 text-3xl md:text-4xl font-normal">Ends</span>
            </h1>

            {/* Subheading - Subtle */}
            <p className="text-base md:text-lg text-gray-500 mb-12 max-w-md mx-auto font-light">
              We're putting the finishing touches on something amazing.
            </p>

            {/* Access Code Section - Minimal */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-3">Have an access code?</p>
              <div className="max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors mb-3"
                />
                <button className="w-full px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200">
                  Unlock Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistHero 