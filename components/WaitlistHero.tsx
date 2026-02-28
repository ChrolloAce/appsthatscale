'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const WaitlistHero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to March 18, 2026 at 23:59:59
    const targetDate = new Date('2026-03-18T23:59:59');
    
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

      <div className="relative w-full max-w-5xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8 sm:mb-12">
          <img 
            src="/logo.png" 
            alt="Apps That Scale" 
            className="mx-auto h-12 sm:h-16 lg:h-20 w-auto mb-6 sm:mb-8"
          />
        </div>

                {/* Main Headline - Better mobile sizing */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
          <span className="block mb-2 sm:mb-3">Achieve Financial Freedom</span>
          <span className="block text-gray-100">
            With Apps That Scale
          </span>
        </h1>

        {/* Updated Subheadline - Better mobile sizing */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-normal px-4">
          Build once, sell forever. Make money while you sleep with no meetings or tight schedules.
          <br className="hidden sm:block" />
          <span className="text-gray-300">I scaled my apps to $20K+ MRR in 30 days</span> — and I'll teach you how.
        </p>

        {/* Launch Discount Offer - Mobile responsive */}
        <div className="mb-6 sm:mb-8 px-4">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-white/5 border border-white/10">
            <span className="text-xs sm:text-sm font-medium text-gray-300">
              Join the waitlist to get 50% OFF at launch
            </span>
          </div>
        </div>

        {/* Countdown Timer - Mobile optimized */}
        <div className="mb-12 sm:mb-16 px-4">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-xs sm:text-sm font-normal text-gray-500 mb-2 uppercase tracking-wider">Launching March 18</h3>
          </div>
          <div className="flex justify-center items-center space-x-2 sm:space-x-3">
            <div className="text-center">
              <div className="bg-white/5 border border-white/10 rounded-md px-2 sm:px-3 py-2 sm:py-3 min-w-[50px] sm:min-w-[70px]">
                <div className="text-xl sm:text-3xl font-light text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 font-normal mt-1">Days</div>
              </div>
            </div>
            <div className="text-lg sm:text-2xl text-gray-600 font-light">:</div>
            <div className="text-center">
              <div className="bg-white/5 border border-white/10 rounded-md px-2 sm:px-3 py-2 sm:py-3 min-w-[50px] sm:min-w-[70px]">
                <div className="text-xl sm:text-3xl font-light text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 font-normal mt-1">Hours</div>
              </div>
            </div>
            <div className="text-lg sm:text-2xl text-gray-600 font-light">:</div>
            <div className="text-center">
              <div className="bg-white/5 border border-white/10 rounded-md px-2 sm:px-3 py-2 sm:py-3 min-w-[50px] sm:min-w-[70px]">
                <div className="text-xl sm:text-3xl font-light text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 font-normal mt-1">Mins</div>
              </div>
            </div>
            <div className="text-lg sm:text-2xl text-gray-600 font-light">:</div>
            <div className="text-center">
              <div className="bg-white/5 border border-white/10 rounded-md px-2 sm:px-3 py-2 sm:py-3 min-w-[50px] sm:min-w-[70px]">
                <div className="text-xl sm:text-3xl font-light text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 font-normal mt-1">Secs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated CTA Button */}
        <div className="flex justify-center px-4">
          <Link href="/join-waitlist" className="group">
            <button className="bg-white/5 border border-white/10 text-white font-normal py-3 px-8 sm:px-10 rounded-md hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base">
              Join the Waitlist
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="text-xs group-hover:transform group-hover:translate-x-1 transition-transform duration-200" 
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WaitlistHero 