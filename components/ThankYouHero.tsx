'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faStar, faGift, faRocket } from '@fortawesome/free-solid-svg-icons'

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

        {/* Success Offer Badge - Match main page */}
        <div className="mb-8 sm:mb-12 px-4">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-orange-800">
              🎯 Your 50% OFF discount is secured!
            </span>
          </div>
        </div>

        {/* Benefits Cards - Better mobile spacing */}
        <div className="px-4 sm:px-6">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto transform transition-all duration-1000 delay-500 ${
            isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <BenefitCard
              icon={faGift}
              title="50% OFF Secured"
              description="Your early bird discount is locked in"
              gradient="from-orange-500 to-red-500"
            />
            
            <BenefitCard
              icon={faStar}
              title="Priority Access"
              description="First to know when we launch"
              gradient="from-blue-500 to-purple-600"
            />
            
            <BenefitCard
              icon={faRocket}
              title="Exclusive Content"
              description="Bonus materials just for waitlisters"
              gradient="from-purple-500 to-blue-600"
            />
          </div>
        </div>

        {/* Social Proof Stats - Match main page */}
        <div className={`mt-12 sm:mt-16 px-4 transform transition-all duration-1000 delay-700 ${
          isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">1,247</div>
              <div className="text-sm text-gray-500 font-medium">Waitlist Members</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">$156K+</div>
              <div className="text-sm text-gray-500 font-medium">Student Revenue</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">4.9★</div>
              <div className="text-sm text-gray-500 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface BenefitCardProps {
  icon: any
  title: string
  description: string
  gradient: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 h-full">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-3 sm:mb-4 mx-auto`}>
        <FontAwesomeIcon icon={icon} className="text-white text-lg sm:text-xl" />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default ThankYouHero 