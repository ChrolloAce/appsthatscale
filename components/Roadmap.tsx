'use client'

import React from 'react'

const Roadmap: React.FC = () => {
  const timelineItems = [
    {
      title: "Week 1-2: Foundation",
      description: "Set up your development environment, choose your tech stack, and begin market research",
      metrics: [
        { label: "Time", value: "2 weeks" },
        { label: "Investment", value: "$0-500" }
      ]
    },
    {
      title: "Week 3-8: Development",
      description: "Build your MVP with core features and user-friendly design",
      metrics: [
        { label: "Time", value: "6 weeks" },
        { label: "Investment", value: "$1,000-3,000" }
      ]
    },
    {
      title: "Week 9-12: Launch",
      description: "Execute your launch strategy and acquire your first 100 users",
      metrics: [
        { label: "Time", value: "4 weeks" },
        { label: "Investment", value: "$2,000-5,000" }
      ]
    },
    {
      title: "Month 4-6: Growth",
      description: "Scale your user base and optimize for revenue generation",
      metrics: [
        { label: "Time", value: "3 months" },
        { label: "Revenue", value: "$1K-5K/month" }
      ]
    },
    {
      title: "Month 7-12: Scale",
      description: "Reach $10K+ monthly revenue and prepare for exponential growth",
      metrics: [
        { label: "Time", value: "6 months" },
        { label: "Revenue", value: "$10K+/month" }
      ]
    }
  ]

  return (
    <section id="roadmap" className="roadmap">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <h2>Your Journey to $10K+</h2>
          <p>Follow our proven roadmap to build your B2C app empire</p>
        </div>
        
        <div className="roadmap-timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                
                <p>{item.description}</p>
                
                <div className="timeline-metrics">
                  {item.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="metric">
                      {metric.label}: {metric.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap 