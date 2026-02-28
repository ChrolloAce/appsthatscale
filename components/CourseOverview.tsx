'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLightbulb, 
  faCode, 
  faRocket, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons'

const CourseOverview: React.FC = () => {
  const modules = [
    {
      icon: faLightbulb,
      title: "Phase 1: Ideation & Validation",
      description: "Discover profitable niches and validate your app idea before building",
      features: [
        "Market research techniques",
        "Competitor analysis", 
        "User persona development",
        "MVP validation strategies"
      ]
    },
    {
      icon: faCode,
      title: "Phase 2: Development & Design",
      description: "Build a user-centric app with modern design principles",
      features: [
        "UI/UX best practices",
        "Technical architecture",
        "Development frameworks", 
        "Quality assurance"
      ]
    },
    {
      icon: faRocket,
      title: "Phase 3: Launch & Growth",
      description: "Execute a successful launch and implement growth strategies",
      features: [
        "Launch strategies",
        "Marketing campaigns",
        "User acquisition",
        "Retention optimization"
      ]
    },
    {
      icon: faChartLine,
      title: "Phase 4: Scale & Optimize",
      description: "Scale your app to $10K+ and beyond with advanced strategies",
      features: [
        "Revenue optimization",
        "Scaling infrastructure",
        "Team building",
        "Exit strategies"
      ]
    }
  ]

  return (
    <section id="course" className="course-overview">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <h2>Your Complete B2C Success Blueprint</h2>
          <p>Everything you need to build, launch, and scale your B2C application to $10K+ monthly revenue</p>
        </div>
        
        <div className="course-modules">
          {modules.map((module, index) => (
            <div key={index} className="module-card">
              <div className="module-icon">
                <FontAwesomeIcon icon={module.icon} />
              </div>
              
              <h3>{module.title}</h3>
              
              <p>{module.description}</p>
              
              <ul>
                {module.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseOverview 