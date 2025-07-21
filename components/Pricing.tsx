'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "497",
      period: "one-time",
      features: [
        "Complete course access",
        "Community access",
        "Basic templates",
        "Email support"
      ],
      featured: false
    },
    {
      name: "Pro",
      price: "997",
      period: "one-time",
      features: [
        "Everything in Starter",
        "1-on-1 coaching calls",
        "Advanced templates",
        "Priority support",
        "Revenue tracking tools"
      ],
      featured: true
    },
    {
      name: "Elite",
      price: "1,997",
      period: "one-time",
      features: [
        "Everything in Pro",
        "Custom app development",
        "Marketing strategy",
        "24/7 support",
        "Exit strategy planning"
      ],
      featured: false
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <h2>Choose Your Success Path</h2>
          <p>Select the plan that fits your goals and timeline</p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && (
                <div className="featured-badge">Most Popular</div>
              )}
              
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <FontAwesomeIcon icon={faCheck} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="btn-primary">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing 