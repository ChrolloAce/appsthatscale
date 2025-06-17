'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDashboard, 
  faLightbulb, 
  faGraduationCap, 
  faChartLine, 
  faUsers, 
  faCog, 
  faPlay,
  faCheck,
  faLock,
  faStar,
  faClock,
  faRocket,
  faBrain,
  faBullseye,
  faCode,
  faGamepad
} from '@fortawesome/free-solid-svg-icons'

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [completedLessons, setCompletedLessons] = useState<string[]>(['lesson-1-1', 'lesson-1-2'])

  const sidebarItems = [
    { id: 'overview', icon: faDashboard, label: 'Overview' },
    { id: 'learn', icon: faGraduationCap, label: 'Learn' },
    { id: 'ideas', icon: faLightbulb, label: 'Idea Generator' },
    { id: 'progress', icon: faChartLine, label: 'Progress' },
    { id: 'community', icon: faUsers, label: 'Community' },
    { id: 'settings', icon: faCog, label: 'Settings' }
  ]

  const courseModules = [
    {
      id: 'module-1',
      title: 'Foundation & Ideation',
      description: 'Learn the fundamentals of B2C app development and validate your ideas',
      progress: 75,
      lessons: [
        { id: 'lesson-1-1', title: 'Introduction to B2C Apps', duration: '15 min', type: 'video' },
        { id: 'lesson-1-2', title: 'Market Research Techniques', duration: '20 min', type: 'video' },
        { id: 'lesson-1-3', title: 'Competitor Analysis Framework', duration: '25 min', type: 'interactive' },
        { id: 'lesson-1-4', title: 'User Persona Development', duration: '30 min', type: 'workshop' }
      ]
    },
    {
      id: 'module-2',
      title: 'Development & Design',
      description: 'Build stunning apps with modern frameworks and design principles',
      progress: 30,
      lessons: [
        { id: 'lesson-2-1', title: 'UI/UX Fundamentals', duration: '35 min', type: 'video' },
        { id: 'lesson-2-2', title: 'React Native Setup', duration: '20 min', type: 'hands-on' },
        { id: 'lesson-2-3', title: 'Database Design', duration: '40 min', type: 'interactive' },
        { id: 'lesson-2-4', title: 'API Development', duration: '45 min', type: 'coding' }
      ]
    },
    {
      id: 'module-3',
      title: 'Launch & Marketing',
      description: 'Successfully launch and market your app to reach your first customers',
      progress: 0,
      lessons: [
        { id: 'lesson-3-1', title: 'App Store Optimization', duration: '30 min', type: 'video' },
        { id: 'lesson-3-2', title: 'Launch Strategy', duration: '25 min', type: 'planning' },
        { id: 'lesson-3-3', title: 'Influencer Outreach', duration: '35 min', type: 'workshop' },
        { id: 'lesson-3-4', title: 'Growth Hacking', duration: '40 min', type: 'strategy' }
      ]
    },
    {
      id: 'module-4',
      title: 'Scale to $10K+',
      description: 'Advanced strategies to scale your app to $10K+ monthly revenue',
      progress: 0,
      lessons: [
        { id: 'lesson-4-1', title: 'Revenue Optimization', duration: '50 min', type: 'advanced' },
        { id: 'lesson-4-2', title: 'Team Building', duration: '35 min', type: 'management' },
        { id: 'lesson-4-3', title: 'Scaling Infrastructure', duration: '45 min', type: 'technical' },
        { id: 'lesson-4-4', title: 'Exit Strategies', duration: '30 min', type: 'business' }
      ]
    }
  ]

  const ideaPrompts = [
    "A productivity app for remote workers that tracks energy levels",
    "Social platform for local community events and meetups",
    "AI-powered fitness coach with personalized meal plans",
    "Language learning through augmented reality experiences",
    "Mental health support app with peer-to-peer connections",
    "Sustainable living tracker with gamification elements"
  ]

  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0)

  const generateNewIdea = () => {
    setCurrentIdeaIndex((prev) => (prev + 1) % ideaPrompts.length)
  }

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return faPlay
      case 'hands-on': return faCode
      case 'interactive': return faGamepad
      case 'workshop': return faUsers
      case 'coding': return faCode
      case 'planning': return faBullseye
      case 'strategy': return faBrain
      case 'advanced': return faRocket
      case 'management': return faUsers
      case 'technical': return faCog
      case 'business': return faChartLine
      default: return faPlay
    }
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <Image 
            src="/bluelogo.png" 
            alt="Apps That Scale" 
            width={32} 
            height={32}
            className="sidebar-logo"
          />
          <span className="sidebar-title">Apps That Scale</span>
        </div>
        
        <nav className="sidebar-nav">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">JD</div>
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-level">Pro Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>Welcome back, John! 👋</h1>
          <p>Ready to build your next $10K+ app?</p>
        </div>

        <div className="dashboard-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="overview-tab">
              <div className="stats-grid">
                <div className="stat-card">
                  <FontAwesomeIcon icon={faGraduationCap} className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">12</span>
                    <span className="stat-label">Lessons Completed</span>
                  </div>
                </div>
                <div className="stat-card">
                  <FontAwesomeIcon icon={faClock} className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">8.5h</span>
                    <span className="stat-label">Time Invested</span>
                  </div>
                </div>
                <div className="stat-card">
                  <FontAwesomeIcon icon={faLightbulb} className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">5</span>
                    <span className="stat-label">Ideas Generated</span>
                  </div>
                </div>
                <div className="stat-card">
                  <FontAwesomeIcon icon={faRocket} className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Apps Launched</span>
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-grid">
                  <button className="action-card" onClick={() => setActiveTab('learn')}>
                    <FontAwesomeIcon icon={faPlay} />
                    <span>Continue Learning</span>
                  </button>
                  <button className="action-card" onClick={() => setActiveTab('ideas')}>
                    <FontAwesomeIcon icon={faLightbulb} />
                    <span>Generate Ideas</span>
                  </button>
                  <button className="action-card">
                    <FontAwesomeIcon icon={faUsers} />
                    <span>Join Community</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Learn Tab */}
          {activeTab === 'learn' && (
            <div className="learn-tab">
              <div className="learn-header">
                <h2>Your Learning Journey</h2>
                <p>Master B2C app development step by step</p>
              </div>

              <div className="course-modules">
                {courseModules.map(module => (
                  <div key={module.id} className="module-card">
                    <div className="module-header">
                      <h3>{module.title}</h3>
                      <div className="module-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        <span>{module.progress}%</span>
                      </div>
                    </div>
                    <p className="module-description">{module.description}</p>
                    
                    <div className="lessons-list">
                      {module.lessons.map(lesson => {
                        const isCompleted = completedLessons.includes(lesson.id)
                        const isLocked = module.progress === 0 && lesson.id !== module.lessons[0].id
                        
                        return (
                          <div 
                            key={lesson.id} 
                            className={`lesson-item ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}
                            onClick={() => !isLocked && toggleLessonComplete(lesson.id)}
                          >
                            <div className="lesson-icon">
                              <FontAwesomeIcon 
                                icon={isCompleted ? faCheck : isLocked ? faLock : getLessonIcon(lesson.type)} 
                              />
                            </div>
                            <div className="lesson-content">
                              <span className="lesson-title">{lesson.title}</span>
                              <div className="lesson-meta">
                                <span className="lesson-duration">{lesson.duration}</span>
                                <span className="lesson-type">{lesson.type}</span>
                              </div>
                            </div>
                            {!isLocked && !isCompleted && (
                              <button className="lesson-play">
                                <FontAwesomeIcon icon={faPlay} />
                              </button>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Idea Generator Tab */}
          {activeTab === 'ideas' && (
            <div className="ideas-tab">
              <div className="idea-generator">
                <h2>💡 AI Idea Generator</h2>
                <p>Get inspired with data-driven B2C app ideas</p>
                
                <div className="idea-card">
                  <div className="idea-content">
                    <FontAwesomeIcon icon={faLightbulb} className="idea-icon" />
                    <h3>Your Next App Idea</h3>
                    <p className="idea-text">{ideaPrompts[currentIdeaIndex]}</p>
                  </div>
                  <button className="generate-btn" onClick={generateNewIdea}>
                    <FontAwesomeIcon icon={faRocket} />
                    Generate New Idea
                  </button>
                </div>

                <div className="idea-analysis">
                  <h4>Market Analysis</h4>
                  <div className="analysis-grid">
                    <div className="analysis-item">
                      <span className="analysis-label">Market Size</span>
                      <span className="analysis-value">$2.3B</span>
                    </div>
                    <div className="analysis-item">
                      <span className="analysis-label">Competition Level</span>
                      <span className="analysis-value">Medium</span>
                    </div>
                    <div className="analysis-item">
                      <span className="analysis-label">Development Time</span>
                      <span className="analysis-value">3-4 months</span>
                    </div>
                    <div className="analysis-item">
                      <span className="analysis-label">Revenue Potential</span>
                      <div className="stars">
                        {[...Array(4)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would go here */}
          {activeTab === 'progress' && (
            <div className="progress-tab">
              <h2>Your Progress</h2>
              <p>Track your journey to $10K+ MRR</p>
              {/* Progress content */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard 