'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope, 
  faBell, 
  faUsers, 
  faCalendarAlt,
  faArrowRight,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

const ThankYouNextSteps: React.FC = () => {
  const nextSteps = [
    {
      icon: faEnvelope,
      title: "Check Your Email",
      description: "We've sent you a confirmation email with all the details",
      actionText: "Check inbox now",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: faBell,
      title: "Stay Tuned",
      description: "We'll notify you as soon as the course launches",
      actionText: "Enable notifications",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: faUsers,
      title: "Join the Community",
      description: "Connect with other future app builders in our community",
      actionText: "Join community",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: faCalendarAlt,
      title: "Mark Your Calendar",
      description: "Launch day is coming soon - don't miss your discount!",
      actionText: "Add to calendar",
      gradient: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          What Happens Next?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Here's what to expect while you wait for the course launch
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {nextSteps.map((step, index) => (
          <NextStepCard
            key={index}
            step={step}
            index={index}
          />
        ))}
      </div>

      {/* Social Proof & Encouragement */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12">
        <div className="mb-6">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 text-3xl mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            You're Part of Something Special
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join over <strong>1,000+ developers</strong> who are waiting to learn the proven framework 
            that's helped countless entrepreneurs scale their apps to <strong>$10K+ MRR</strong>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-sm text-gray-500">Waitlist Members</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">$156K+</div>
            <div className="text-sm text-gray-500">Student Revenue</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">4.9★</div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NextStepCardProps {
  step: {
    icon: any
    title: string
    description: string
    actionText: string
    gradient: string
  }
  index: number
}

const NextStepCard: React.FC<NextStepCardProps> = ({ step, index }) => {
  return (
    <div className="relative group">
      {/* Step Number */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 z-10">
        {index + 1}
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-4`}>
          <FontAwesomeIcon icon={step.icon} className="text-white text-xl" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>

        {/* Action Button */}
        <button className={`w-full text-sm font-semibold bg-gradient-to-r ${step.gradient} text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}>
          {step.actionText}
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="text-xs group-hover:transform group-hover:translate-x-1 transition-transform duration-200" 
          />
        </button>
      </div>
    </div>
  )
}

export default ThankYouNextSteps 