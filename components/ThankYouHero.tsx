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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-green-400/20 to-blue-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-400/20 to-green-600/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-600/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto text-center">
        {/* Success Icon */}
        <div className={`mb-8 transform transition-all duration-1000 ${
          isAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-2xl">
            <FontAwesomeIcon 
              icon={faCheckCircle} 
              className="text-white text-4xl sm:text-5xl"
            />
          </div>
        </div>

        {/* Main Message */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="block mb-2">Thank You!</span>
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              You're In!
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to the Apps That Scale community! 🎉 
            <br className="hidden sm:block" />
            Get ready to transform your ideas into profitable apps.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transform transition-all duration-1000 delay-500 ${
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
            gradient="from-yellow-500 to-orange-500"
          />
          
          <BenefitCard
            icon={faRocket}
            title="Exclusive Content"
            description="Bonus materials just for waitlisters"
            gradient="from-blue-500 to-purple-500"
          />
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
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-4 mx-auto`}>
        <FontAwesomeIcon icon={icon} className="text-white text-xl" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default ThankYouHero 