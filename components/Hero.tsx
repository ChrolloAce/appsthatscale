'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDollarSign, faRocket, faUsers, faChartLine, faClock, faStar } from '@fortawesome/free-solid-svg-icons'

const Hero: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateCounter = (element: HTMLElement, target: number, suffix: string) => {
      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        element.textContent = Math.floor(current) + suffix
      }, 20)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number')
          statNumbers.forEach((stat, index) => {
            const targets = [10, 2.5, 94]
            const suffixes = ['K+', 'M+', '%']
            setTimeout(() => {
              animateCounter(stat as HTMLElement, targets[index], suffixes[index])
            }, index * 200)
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="hero">
      {/* Floating Elements */}
      <div className="floating-elements">
        {/* Left Side Floating Elements */}
        <div className="floating-card floating-card-1">
          <FontAwesomeIcon icon={faDollarSign} className="floating-icon" />
          <div className="floating-content">
            <span className="floating-number">$16.8K</span>
            <span className="floating-label">Monthly Revenue</span>
          </div>
        </div>
        
        <div className="floating-card floating-card-2">
          <FontAwesomeIcon icon={faUsers} className="floating-icon" />
          <div className="floating-content">
            <span className="floating-number">2,500+</span>
            <span className="floating-label">Students</span>
          </div>
        </div>
        
        <div className="floating-card floating-card-3">
          <FontAwesomeIcon icon={faClock} className="floating-icon" />
          <div className="floating-content">
            <span className="floating-number">7 Days</span>
            <span className="floating-label">To Launch</span>
          </div>
        </div>

        {/* Right Side Floating Elements */}
        <div className="floating-card floating-card-4">
          <FontAwesomeIcon icon={faChartLine} className="floating-icon" />
          <div className="floating-content">
            <span className="floating-number">+6.7%</span>
            <span className="floating-label">Growth Rate</span>
          </div>
        </div>
        
        <div className="floating-card floating-card-5">
          <FontAwesomeIcon icon={faRocket} className="floating-icon" />
          <div className="floating-content">
            <span className="floating-number">$10K</span>
            <span className="floating-label">MRR Goal</span>
          </div>
        </div>
        
        <div className="floating-card floating-card-6">
          <FontAwesomeIcon icon={faStar} className="floating-icon" />
          <div className="floating-content">
            <span className="floating-number">4.9★</span>
            <span className="floating-label">Rating</span>
          </div>
        </div>
      </div>

      <h1 className="hero-title-new">
        Ship your B2C app in 7 Days<br />
        Scale to $10K MRR in Less Than 30 Days
      </h1>
      <div className="hero-cta">
        <button className="btn-primary-new">
          Get Started
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="analytics-showcase">
        <div className="analytics-wrapper">
          <div className="analytics-header">
            <h3>Real Results from Our Students</h3>
            <p>$16.8K in sales with 6.7% growth in just one month</p>
          </div>
          <div className="analytics-image">
            <Image 
              src="/analytics-dashboard.png" 
              alt="Analytics Dashboard showing $16.8K sales with 6.7% growth" 
              width={800} 
              height={400}
              className="dashboard-img"
              priority
              onError={(e) => {
                console.log('Image failed to load:', e);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 