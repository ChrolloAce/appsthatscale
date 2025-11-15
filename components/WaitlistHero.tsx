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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden web3-hero">
      {/* Deep Navy to Black Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020611] via-[#0b1a35] to-[#020611]"></div>

      {/* Liquid Glass Pastel Backdrop */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-pink-300 via-blue-200 to-purple-300 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300 blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Container with glassmorphism */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="hero-card backdrop-blur-xl bg-gradient-to-b from-white/5 to-white/2 rounded-[28px] shadow-2xl border border-white/10 p-8 md:p-16 overflow-hidden">
          
          {/* Luminescent Arc at Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none">
            {/* Main Arc */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]">
              <div className="neon-arc"></div>
            </div>
            
            {/* Particles */}
            <div className="particles-container">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Social Proof - Stacked Avatars */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-[#0b1a35] overflow-hidden ring-2 ring-cyan-400/20"
                  >
                    <img 
                      src={avatar} 
                      alt={`User ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="ml-4 text-sm text-gray-400 font-medium">1420+ monthly users</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Supercharge Your{' '}
              <span className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent glow-text">
                Web 3 Venture
              </span>
              <br />
              with the Best On Ramp
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              Onboarding the right way, connecting seamlessly to the blockchain ecosystem with enterprise-grade infrastructure.
            </p>

            {/* Countdown Timer */}
            <div className="mb-12">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-2">Early Bird Offer Ends:</h3>
              </div>
              <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-12">
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                    <div className="text-xl sm:text-3xl font-bold text-cyan-400">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">Days</div>
                  </div>
                </div>
                <div className="text-xl sm:text-3xl text-gray-400 font-bold">:</div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                    <div className="text-xl sm:text-3xl font-bold text-cyan-400">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">Hours</div>
                  </div>
                </div>
                <div className="text-xl sm:text-3xl text-gray-400 font-bold">:</div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                    <div className="text-xl sm:text-3xl font-bold text-cyan-400">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">Mins</div>
                  </div>
                </div>
                <div className="text-xl sm:text-3xl text-gray-400 font-bold">:</div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                    <div className="text-xl sm:text-3xl font-bold text-cyan-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">Secs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
              {/* Our Services Button - Transparent with outline */}
              <button className="btn-outline px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                Our Services
              </button>

              {/* Connect Button - Solid white */}
              <button className="btn-solid px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:shadow-xl hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistHero 