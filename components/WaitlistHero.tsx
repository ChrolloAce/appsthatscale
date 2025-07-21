'use client'

import React, { useState, useEffect } from 'react'

const WaitlistHero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 14 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-600/20 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8 sm:mb-12">
          <img 
            src="/toplogo.png" 
            alt="Apps That Scale" 
            className="mx-auto h-16 sm:h-20 lg:h-24 w-auto mb-6 sm:mb-8"
          />
        </div>

        {/* Main Headline - Better mobile sizing */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
          <span className="block mb-2 sm:mb-3">Build Apps That</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Actually Scale
          </span>
        </h1>

        {/* Updated Subheadline - Better mobile sizing */}
        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
          Join 1000+ developers on this waitlist learning to build production-ready applications 
          with modern architecture, scalability patterns, and industry best practices.
        </p>

        {/* Launch Discount Offer - Mobile responsive */}
        <div className="mb-6 sm:mb-8 px-4">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-orange-800">
              🚀 Join the waitlist to get 50% OFF at launch!
            </span>
          </div>
        </div>

        {/* Countdown Timer - Mobile optimized */}
        <div className="mb-12 sm:mb-16 px-4">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Early Bird Offer Ends In:</h3>
          </div>
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 lg:space-x-6">
            <div className="text-center">
              <div className="bg-white rounded-lg sm:rounded-xl shadow-md px-2 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Days</div>
              </div>
            </div>
            <div className="text-lg sm:text-2xl text-gray-400 font-bold">:</div>
            <div className="text-center">
              <div className="bg-white rounded-lg sm:rounded-xl shadow-md px-2 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Hours</div>
              </div>
            </div>
            <div className="text-lg sm:text-2xl text-gray-400 font-bold">:</div>
            <div className="text-center">
              <div className="bg-white rounded-lg sm:rounded-xl shadow-md px-2 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Mins</div>
              </div>
            </div>
            <div className="text-lg sm:text-2xl text-gray-400 font-bold">:</div>
            <div className="text-center">
              <div className="bg-white rounded-lg sm:rounded-xl shadow-md px-2 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Secs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistHero 