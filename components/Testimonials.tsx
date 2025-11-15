'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCode, 
  faRocket, 
  faComments, 
  faCheckCircle, 
  faCalendarAlt, 
  faVideo, 
  faUsers, 
  faChartLine, 
  faPalette, 
  faFileCode 
} from '@fortawesome/free-solid-svg-icons'

const WhatYouGet: React.FC = () => {
  const resources = [
    {
      title: "Full Development Tech Stack",
      description: "Complete development environment setup with all the tools you need to build professional apps",
      icon: faCode,
      image: "/full-dev-stack.png"
    },
    {
      title: "Cursor Rules for Optimal Development",
      description: "Advanced IDE configurations and rules to maximize your coding efficiency and productivity",
      icon: faRocket,
      image: "/analytics-dashboard.png"
    },
    {
      title: "Text Message Templates to Book Influencers",
      description: "Proven message templates that get responses from top influencers in your niche",
      icon: faComments,
      image: "/full-dev-stack.png"
    },
    {
      title: "Step By Step Checklist To Pass App Store Review",
      description: "Comprehensive checklist ensuring your app gets approved on first submission",
      icon: faCheckCircle,
      image: "/launch-one-week.png"
    },
    {
      title: "How to Launch in 1 Week Checklist",
      description: "Fast-track launch strategy to get your app live and generating revenue quickly",
      icon: faCalendarAlt,
      image: "/launch-one-week.png"
    },
    {
      title: "How to Create Viral Organic Content",
      description: "Content creation strategies that drive organic growth and user acquisition",
      icon: faVideo,
      image: "/analytics-dashboard.png"
    },
    {
      title: "How to Hire Influencers for $0 Upfront",
      description: "Revenue-sharing strategies to work with influencers without upfront costs",
      icon: faUsers,
      image: "/full-dev-stack.png"
    },
    {
      title: "How to Scale to $10K/MRR in First Month",
      description: "Proven scaling strategies to reach $10K monthly recurring revenue fast",
      icon: faChartLine,
      image: "/analytics-dashboard.png"
    },
    {
      title: "Good vs Bad Design Principles",
      description: "Design guidelines and examples showing what works and what doesn't in app design",
      icon: faPalette,
      image: "/launch-one-week.png"
    },
    {
      title: "App Starter Template",
      description: "Ready-to-use app template with best practices and optimized code structure",
      icon: faFileCode,
      image: "/full-dev-stack.png"
    }
  ]

  return (
    <section id="what-you-get" className="what-you-get">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <h2>Here's What You Get</h2>
          <p>Everything you need to build, launch, and scale your B2C app to $10K+ revenue</p>
        </div>
        
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-image">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) {
                      placeholder.classList.remove('hidden');
                      placeholder.style.display = 'flex';
                    }
                  }}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'block';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) {
                      placeholder.style.display = 'none';
                    }
                  }}
                />
                <div className="image-placeholder hidden">
                  <FontAwesomeIcon icon={resource.icon} />
                </div>
              </div>
              
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatYouGet 