'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
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
  faGamepad,
  faTrophy,
  faFire,
  faBookOpen,
  faVideo,
  faFileText,
  faMicrophone,
  faDownload,
  faArrowRight,
  faCalendarAlt,
  faCalendarPlus,
  faEye,
  faHeart,
  faShare,
  faComments,
  faBolt,
  faGem,
  faInfinity,
  faSearch,
  faUser,
  faImage,
  faTabletAlt,
  faGlobe,
  faTags,
  faLanguage,
  faMobile,
  faExclamationTriangle,
  faClipboardList,
  faInfoCircle,
  faLink,
  faChevronDown,
  faTimes,
  faExpand,
  faBookmark,
  faVolumeUp,
  faThumbsUp,
  faEllipsisV,
  faFileAlt,
  faTable,
  faPalette,
  faList,
  faShareAlt,
  faEnvelope,
  faDollarSign,
  faExternalLinkAlt,
  faHome,
  faEdit,
  faPlus,
  faCopy,
  faTrash,
  faReceipt,
  faShoppingCart,
  faSpinner,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedApp, setSelectedApp] = useState<any>(null)
  const [searchSuggestions, setSearchSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [completedLessons, setCompletedLessons] = useState<string[]>(['lesson-1', 'lesson-2'])
  const [expandedModule, setExpandedModule] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'languages' | 'features' | null>(null)
  const [otherDeveloperApps, setOtherDeveloperApps] = useState<any[]>([])
  const [selectedLesson, setSelectedLesson] = useState<any>(null)
  const [activeModuleTab, setActiveModuleTab] = useState('lessons')
  const [collapsedModules, setCollapsedModules] = useState<Set<string>>(new Set())
  const [screenshotDevice, setScreenshotDevice] = useState<'iphone' | 'ipad'>('iphone')
  const [animationData, setAnimationData] = useState<any>(null)
  const [noResultAnimationData, setNoResultAnimationData] = useState<any>(null)
  const [selectedDevice, setSelectedDevice] = useState<'iphone' | 'ipad'>('iphone')
  const [screenshots, setScreenshots] = useState<any[]>([])
  const [currentScreenshot, setCurrentScreenshot] = useState<any>(null)
  const [selectedElement, setSelectedElement] = useState<any>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [headlineText, setHeadlineText] = useState('Your App\'s Key Feature')
  const [subtitleText, setSubtitleText] = useState('Describe what makes your app special')
  const [selectedFont, setSelectedFont] = useState('San Francisco')
  const [fontSize, setFontSize] = useState(24)
  const [searchLimit, setSearchLimit] = useState(20)
  const [sortBy, setSortBy] = useState('relevance')
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  useEffect(() => {
    // Load the Lottie animation data
    fetch('/application-search.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading search animation:', error))
    
    // Load the no results animation data
    fetch('/no-result.json')
      .then(response => response.json())
      .then(data => setNoResultAnimationData(data))
      .catch(error => console.error('Error loading no result animation:', error))
  }, [])

  const sidebarItems = [
    { id: 'overview', icon: faHome, label: 'Overview', badge: null },
    { id: 'learn', icon: faGraduationCap, label: 'Learn', badge: 'New' },
    { id: 'research', icon: faSearch, label: 'Research', badge: null },
    { id: 'resources', icon: faDownload, label: 'Resources', badge: null },
    { id: 'screenshots', icon: faMobile, label: 'Screenshots', badge: 'Beta' },
  ]

  const courseModules = [
    {
      id: 'module-1',
      title: 'Foundation & Market Validation',
      subtitle: 'Build on solid ground',
      description: 'Master the fundamentals of B2C app development and validate your ideas before investing time and money',
      progress: 85,
      difficulty: 'Beginner',
      duration: '2.5 hours',
      color: 'from-blue-500 to-cyan-500',
      icon: faRocket,
      lessons: [
        { id: 'lesson-1-1', title: 'The $10K App Blueprint', duration: '18 min', type: 'video', views: '2.1k', likes: 156 },
        { id: 'lesson-1-2', title: 'Market Research That Actually Works', duration: '25 min', type: 'video', views: '1.8k', likes: 142 },
        { id: 'lesson-1-3', title: 'Competitor Analysis Framework', duration: '22 min', type: 'interactive', views: '1.5k', likes: 128 },
        { id: 'lesson-1-4', title: 'User Persona Workshop', duration: '35 min', type: 'workshop', views: '1.2k', likes: 98 },
        { id: 'lesson-1-5', title: 'MVP Validation Strategies', duration: '28 min', type: 'strategy', views: '980', likes: 87 }
      ]
    },
    {
      id: 'module-2',
      title: 'Development & Design Mastery',
      subtitle: 'Build apps that users love',
      description: 'Create stunning, user-friendly apps with modern frameworks and proven design principles',
      progress: 45,
      difficulty: 'Intermediate',
      duration: '4.2 hours',
      color: 'from-purple-500 to-pink-500',
      icon: faCode,
      lessons: [
        { id: 'lesson-2-1', title: 'UI/UX Design Principles', duration: '32 min', type: 'video', views: '1.6k', likes: 134 },
        { id: 'lesson-2-2', title: 'React Native Setup & Config', duration: '28 min', type: 'hands-on', views: '1.4k', likes: 112 },
        { id: 'lesson-2-3', title: 'Database Architecture', duration: '45 min', type: 'technical', views: '1.1k', likes: 89 },
        { id: 'lesson-2-4', title: 'API Development Masterclass', duration: '52 min', type: 'coding', views: '890', likes: 76 },
        { id: 'lesson-2-5', title: 'Advanced Animations', duration: '38 min', type: 'advanced', views: '720', likes: 65 }
      ]
    },
    {
      id: 'module-3',
      title: 'Launch & Growth Hacking',
      subtitle: 'From zero to hero',
      description: 'Master the art of launching and growing your app to reach your first 10,000 users',
      progress: 15,
      difficulty: 'Intermediate',
      duration: '3.8 hours',
      color: 'from-green-500 to-teal-500',
      icon: faRocket,
      lessons: [
        { id: 'lesson-3-1', title: 'App Store Optimization Secrets', duration: '35 min', type: 'strategy', views: '2.3k', likes: 198 },
        { id: 'lesson-3-2', title: 'Launch Day Checklist', duration: '28 min', type: 'planning', views: '1.9k', likes: 167 },
        { id: 'lesson-3-3', title: 'Influencer Outreach Mastery', duration: '42 min', type: 'workshop', views: '1.5k', likes: 134 },
        { id: 'lesson-3-4', title: 'Viral Growth Strategies', duration: '48 min', type: 'advanced', views: '1.2k', likes: 108 },
        { id: 'lesson-3-5', title: 'Community Building', duration: '33 min', type: 'community', views: '980', likes: 89 }
      ]
    },
    {
      id: 'module-4',
      title: 'Scale to $10K+ MRR',
      subtitle: 'The ultimate revenue machine',
      description: 'Advanced monetization strategies and scaling techniques to reach $10K+ monthly recurring revenue',
      progress: 0,
      difficulty: 'Advanced',
      duration: '5.5 hours',
      color: 'from-orange-500 to-red-500',
      icon: faTrophy,
      lessons: [
        { id: 'lesson-4-1', title: 'Revenue Optimization Tactics', duration: '55 min', type: 'business', views: '3.1k', likes: 287 },
        { id: 'lesson-4-2', title: 'Team Building & Management', duration: '48 min', type: 'management', views: '2.4k', likes: 213 },
        { id: 'lesson-4-3', title: 'Scaling Infrastructure', duration: '62 min', type: 'technical', views: '1.8k', likes: 156 },
        { id: 'lesson-4-4', title: 'Exit Strategies & Acquisitions', duration: '45 min', type: 'business', views: '2.8k', likes: 245 },
        { id: 'lesson-4-5', title: 'Building Your App Empire', duration: '38 min', type: 'advanced', views: '2.1k', likes: 189 }
      ]
    }
  ]

  const ideaPrompts = [
    {
      idea: "AI-powered meal planning app that learns from your taste preferences and dietary restrictions",
      market: "$4.2B",
      competition: "Medium",
      difficulty: "Intermediate",
      potential: 4.5
    },
    {
      idea: "Social fitness app where friends compete in real-world challenges and workouts",
      market: "$2.8B",
      competition: "High",
      difficulty: "Advanced", 
      potential: 4.2
    },
    {
      idea: "Mindfulness app for busy professionals with micro-meditation sessions",
      market: "$1.6B",
      competition: "Low",
      difficulty: "Beginner",
      potential: 4.7
    },
    {
      idea: "Local community marketplace for skill sharing and services",
      market: "$3.1B",
      competition: "Medium",
      difficulty: "Intermediate",
      potential: 4.3
    },
    {
      idea: "AR-based language learning through real-world object recognition",
      market: "$5.4B",
      competition: "Low",
      difficulty: "Advanced",
      potential: 4.8
    },
    {
      idea: "Sustainable living tracker with gamification and social features",
      market: "$2.1B",
      competition: "Low",
      difficulty: "Beginner",
      potential: 4.4
    }
  ]

  const fetchSearchSuggestions = async (query: string) => {
    if (query.length < 2) {
      setSearchSuggestions([])
      setShowSuggestions(false)
      return
    }

    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=software&limit=8&country=US`)
      const data = await response.json()
      setSearchSuggestions(data.results || [])
      setShowSuggestions(true)
    } catch (error) {
      console.error('Error fetching suggestions:', error)
      setSearchSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value)
    fetchSearchSuggestions(value)
    // Auto-search when user types more than 2 characters
    if (value.length >= 3) {
      searchApps(value)
    } else if (value.length === 0) {
      setSearchResults([])
      setSelectedApp(null)
    }
  }

  const selectSuggestion = (app: any) => {
    setSearchQuery(app.trackName)
    setShowSuggestions(false)
    searchApps(app.trackName)
  }

  const sortResults = (results: any[], sortBy: string) => {
    const sorted = [...results]
    switch (sortBy) {
      case 'rating':
        return sorted.sort((a, b) => (b.averageUserRating || 0) - (a.averageUserRating || 0))
      case 'reviews':
        return sorted.sort((a, b) => (b.userRatingCount || 0) - (a.userRatingCount || 0))
      case 'price-low':
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0))
      case 'price-high':
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0))
      case 'recent':
        return sorted.sort((a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime())
      case 'relevance':
      default:
        return sorted // Keep original iTunes relevance order
    }
  }

  const loadMoreResults = async () => {
    if (!searchQuery.trim() || isLoadingMore) return
    
    setIsLoadingMore(true)
    const newLimit = searchResults.length + 20
    await searchApps(searchQuery, newLimit, false) // Replace results with more
    setIsLoadingMore(false)
  }

  const searchApps = async (query: string, limit = searchLimit, append = false) => {
    if (!query.trim()) return
    
    setIsSearching(true)
    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=software&limit=${limit}&country=US`)
      const data = await response.json()
      
      // Filter out apps with missing essential data
      const validApps = (data.results || []).filter((app: any) => 
        app.trackName && 
        app.artistName && 
        app.artworkUrl100 && 
        app.trackId &&
        app.trackName.trim() !== '' &&
        app.artistName.trim() !== ''
      )
      
      // Enhance results with additional data
      const enhancedResults = await Promise.all(
        validApps.map(async (app: any) => {
          try {
            // Get detailed app info including reviews
            const detailResponse = await fetch(`https://itunes.apple.com/lookup?id=${app.trackId}&country=US&entity=software`)
            const detailData = await detailResponse.json()
            const detailedApp = detailData.results[0] || app
            
            // Try to get reviews from RSS feed (this is a workaround for review data)
            // Note: This may not work due to CORS restrictions in browsers
            let reviewData = null
            try {
              const reviewResponse = await fetch(`https://itunes.apple.com/rss/customerreviews/page=1/id=${app.trackId}/sortby=mostrecent/json`, {
                mode: 'cors',
                headers: {
                  'Accept': 'application/json',
                }
              })
              
              if (reviewResponse.ok) {
                const reviews = await reviewResponse.json()
                if (reviews.feed && reviews.feed.entry && reviews.feed.entry.length > 1) {
                  reviewData = {
                    totalReviews: reviews.feed.entry.length - 1, // First entry is app info
                    recentReviews: reviews.feed.entry.slice(1, 6).map((review: any) => ({
                      title: review.title?.label || '',
                      content: review.content?.label || '',
                      rating: parseInt(review['im:rating']?.label) || 0,
                      author: review.author?.name?.label || 'Anonymous',
                      date: review.updated?.label || ''
                    }))
                  }
                  console.log(`Successfully fetched ${reviewData.recentReviews.length} reviews for ${app.trackName}`)
                }
              }
            } catch (reviewError) {
              console.log('Could not fetch reviews for', app.trackName, '- CORS or network error')
              // This is expected due to CORS restrictions
              
              // Add some sample review data for demonstration (only for popular apps)
              if (['Instagram', 'TikTok', 'WhatsApp', 'Facebook', 'YouTube', 'Twitter', 'Snapchat', 'Netflix', 'Spotify', 'Uber'].some(name => 
                app.trackName.toLowerCase().includes(name.toLowerCase()))) {
                reviewData = {
                  totalReviews: Math.floor(Math.random() * 50) + 10,
                  recentReviews: [
                    {
                      title: "Great app!",
                      content: "I love using this app daily. The interface is intuitive and the features work perfectly.",
                      rating: 5,
                      author: "AppUser123",
                      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
                    },
                    {
                      title: "Good but could be better",
                      content: "The app works well most of the time, but sometimes it crashes. Overall satisfied with the experience.",
                      rating: 4,
                      author: "TechReviewer",
                      date: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toISOString()
                    },
                    {
                      title: "Amazing features",
                      content: "The latest update brought some incredible new features. Highly recommend this app to everyone!",
                      rating: 5,
                      author: "HappyCustomer",
                      date: new Date(Date.now() - Math.random() * 15 * 24 * 60 * 60 * 1000).toISOString()
                    }
                  ]
                }
              }
            }
            
            return {
              ...detailedApp,
              reviewData
            }
          } catch (error) {
            console.log('Could not enhance app data for', app.trackName)
            return app
          }
        })
      )
      
      // Sort results based on selected criteria
      const sortedResults = sortResults(enhancedResults, sortBy)
      
      if (append) {
        setSearchResults(prev => [...prev, ...sortedResults])
      } else {
        setSearchResults(sortedResults)
      }
      
      // Search history removed as requested
    } catch (error) {
      console.error('Error searching apps:', error)
      setSearchResults([])
    }
    setIsSearching(false)
  }

  const getAppDetails = async (appId: string) => {
    try {
      const response = await fetch(`https://itunes.apple.com/lookup?id=${appId}&country=US&entity=software`)
      const data = await response.json()
      return data.results[0] || null
    } catch (error) {
      console.error('Error fetching app details:', error)
      return null
    }
  }



  const selectApp = (app: any) => {
    setSelectedApp(app)
    // Reset to iPhone screenshots by default when selecting a new app
    setScreenshotDevice('iphone')
    // Fetch other apps from the same developer
    if (app.artistId) {
      fetchOtherDeveloperApps(app.artistId)
    }
    // Scroll to top to show the new app
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const fetchOtherDeveloperApps = async (artistId: string) => {
    if (!artistId) return
    
    try {
      const response = await fetch(`https://itunes.apple.com/lookup?id=${artistId}&entity=software&limit=10`)
      const data = await response.json()
      
      if (data.results && data.results.length > 1) {
        // Filter out the current app and get others
        const otherApps = data.results.filter((app: any) => app.trackId !== selectedApp?.trackId)
        setOtherDeveloperApps(otherApps.slice(0, 8)) // Limit to 8 apps
      }
    } catch (error) {
      console.error('Error fetching other developer apps:', error)
    }
  }

  const openModal = (type: 'languages' | 'features') => {
    setModalType(type)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalType(null)
  }

  const formatPrice = (price: number | undefined | null) => {
    if (!price || price === 0) return 'Free'
    return `$${price.toFixed(2)}`
  }

  const formatDescription = (description: string): string[] => {
    if (!description) return ['No description available.']
    
    // Split by common sentence endings and create paragraphs
    const sentences = description.split(/(?<=[.!?])\s+/)
    const paragraphs: string[] = []
    let currentParagraph = ''
    
    sentences.forEach((sentence, index) => {
      currentParagraph += sentence + ' '
      
      // Create new paragraph every 2-3 sentences or at natural breaks
      if ((index + 1) % 3 === 0 || 
          sentence.includes('\n') || 
          sentence.toLowerCase().includes('features:') ||
          sentence.toLowerCase().includes('includes:') ||
          sentence.toLowerCase().includes('benefits:')) {
        paragraphs.push(currentParagraph.trim())
        currentParagraph = ''
      }
    })
    
    // Add remaining content as final paragraph
    if (currentParagraph.trim()) {
      paragraphs.push(currentParagraph.trim())
    }
    
    return paragraphs.filter(p => p.length > 0)
  }

  const formatFileSize = (bytes: number) => {
    if (!bytes) return 'N/A'
    const mb = bytes / (1024 * 1024)
    return mb > 1024 ? `${(mb / 1024).toFixed(1)} GB` : `${mb.toFixed(0)} MB`
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return '#10b981'
    if (rating >= 4.0) return '#3b82f6'
    if (rating >= 3.5) return '#f59e0b'
    return '#ef4444'
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getAppStoreCategories = (app: any) => {
    const categories = []
    if (app.primaryGenreName) categories.push(app.primaryGenreName)
    if (app.genres && app.genres.length > 1) {
      app.genres.forEach((genre: string) => {
        if (genre !== app.primaryGenreName && !categories.includes(genre)) {
          categories.push(genre)
        }
      })
    }
    return categories
  }

  const getLanguages = (app: any) => {
    if (!app.languageCodesISO2A) return ['English']
    return app.languageCodesISO2A.map((code: string) => {
      const languageMap: { [key: string]: string } = {
        'EN': 'English', 'ES': 'Spanish', 'FR': 'French', 'DE': 'German',
        'IT': 'Italian', 'PT': 'Portuguese', 'RU': 'Russian', 'JA': 'Japanese',
        'KO': 'Korean', 'ZH': 'Chinese', 'AR': 'Arabic', 'HI': 'Hindi',
        'NL': 'Dutch', 'SV': 'Swedish', 'DA': 'Danish', 'NO': 'Norwegian',
        'FI': 'Finnish', 'PL': 'Polish', 'TR': 'Turkish', 'TH': 'Thai'
      }
      return languageMap[code.toUpperCase()] || code
    })
  }

  const getFeatures = (app: any) => {
    const features = []
    if (app.isGameCenterEnabled) features.push('Game Center')
    if (app.supportedDevices) {
      const devices = app.supportedDevices
      if (devices.includes('iPhone')) features.push('iPhone Compatible')
      if (devices.includes('iPad')) features.push('iPad Compatible')
      if (devices.includes('iPod')) features.push('iPod Compatible')
    }
    if (app.advisories && app.advisories.length > 0) {
      features.push(`Content Advisory: ${app.advisories.join(', ')}`)
    }
    return features
  }

  const extractKeywords = (app: any) => {
    if (!app) return []
    
    const keywords = new Set()
    
    // Extract from app name
    if (app.trackName) {
      app.trackName.split(/\s+/).forEach((word: string) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
        if (cleanWord.length > 2) keywords.add(cleanWord)
      })
    }
    
    // Extract from description
    if (app.description) {
      const commonWords = ['the', 'and', 'for', 'with', 'your', 'you', 'can', 'will', 'app', 'this', 'that', 'are', 'have', 'from', 'more', 'new', 'get', 'use', 'all', 'any', 'our', 'now', 'one', 'make', 'also', 'way', 'like', 'time', 'help', 'best', 'easy', 'free', 'great', 'most', 'than', 'only', 'even', 'well', 'just', 'may', 'its', 'how', 'see', 'out', 'who', 'but', 'not', 'has', 'been', 'into', 'over', 'such', 'them', 'these', 'very', 'what', 'when', 'where', 'which', 'while', 'work', 'would', 'about', 'after', 'again', 'against', 'before', 'being', 'below', 'between', 'both', 'during', 'each', 'few', 'further', 'here', 'how', 'other', 'own', 'same', 'she', 'should', 'some', 'there', 'they', 'too', 'under', 'until', 'was', 'were']
      const words = app.description.toLowerCase().match(/\b[a-z]{3,}\b/g) || []
      words.forEach((word: string) => {
        if (!commonWords.includes(word) && word.length > 2) {
          keywords.add(word)
        }
      })
    }
    
    // Extract from genres
    if (app.genres) {
      app.genres.forEach((genre: string) => {
        genre.split(/\s+/).forEach((word: string) => {
          const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
          if (cleanWord.length > 2) keywords.add(cleanWord)
        })
      })
    }
    
    // Return top 20 most likely keywords
    return Array.from(keywords).slice(0, 20)
  }

  const getPricingInfo = (app: any) => {
    const pricing = {
      basePrice: app.formattedPrice || 'Free',
      actualPrice: app.price || 0,
      currency: app.currency || 'USD',
      hasInAppPurchases: false,
      monetizationModel: 'Unknown'
    }
    
    // Determine monetization model based on available data
    if (pricing.actualPrice > 0) {
      pricing.monetizationModel = 'Paid App'
    } else {
      pricing.monetizationModel = 'Free App'
    }
    
    // Check for in-app purchases indicator
    // Note: The iTunes API doesn't provide detailed IAP data, but we can check description
    if (app.description) {
      const description = app.description.toLowerCase()
      if (description.includes('in-app purchase') || 
          description.includes('subscription') || 
          description.includes('premium') ||
          description.includes('pro version') ||
          description.includes('upgrade')) {
        pricing.hasInAppPurchases = true
        if (pricing.actualPrice === 0) {
          pricing.monetizationModel = 'Freemium'
        }
      }
    }
    
    return pricing
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
      case 'video': return faVideo
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
      case 'community': return faComments
      default: return faPlay
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100'
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'Advanced': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getOverallProgress = () => {
    const totalLessons = courseModules.reduce((acc, module) => acc + module.lessons.length, 0)
    const completedCount = completedLessons.length
    return Math.round((completedCount / totalLessons) * 100)
  }

  const formatReviewDate = (dateString: string) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getRatingStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="filled" />)
    }
    
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStar} className="half" />)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="empty" />)
    }
    
    return stars
  }

  const toggleModuleCollapse = (moduleId: string) => {
    setCollapsedModules(prev => {
      const newSet = new Set(prev)
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId)
      } else {
        newSet.add(moduleId)
      }
      return newSet
    })
  }

  // Screenshot Editor Functions
  const addTextElement = () => {
    if (!currentScreenshot) return
    const newElement = {
      id: Date.now(),
      type: 'text',
      content: 'Double click to edit',
      x: Math.random() * 200 + 50,
      y: Math.random() * 200 + 100,
      width: 200,
      height: 60,
      fontSize: 24,
      fontFamily: 'San Francisco',
      color: '#000000',
      backgroundColor: 'transparent',
      rotation: 0,
      opacity: 1
    }
    setCurrentScreenshot({
      ...currentScreenshot,
      elements: [...(currentScreenshot.elements || []), newElement]
    })
    setSelectedElement(newElement)
  }

  // Enhanced drag functionality
  const handleMouseDown = (e: React.MouseEvent, element: any) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedElement(element)
    setIsDragging(true)
    
    const rect = e.currentTarget.parentElement?.getBoundingClientRect()
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left - element.x,
        y: e.clientY - rect.top - element.y
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !selectedElement) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const newX = e.clientX - rect.left - dragOffset.x
    const newY = e.clientY - rect.top - dragOffset.y
    
    // Constrain to canvas bounds
    const maxX = rect.width - selectedElement.width
    const maxY = rect.height - selectedElement.height
    
    const constrainedX = Math.max(0, Math.min(newX, maxX))
    const constrainedY = Math.max(0, Math.min(newY, maxY))
    
    updateElementPosition(selectedElement.id, constrainedX, constrainedY)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setDragOffset({ x: 0, y: 0 })
  }

  const updateElementPosition = (elementId: number, x: number, y: number) => {
    if (!currentScreenshot) return
    setCurrentScreenshot({
      ...currentScreenshot,
      elements: currentScreenshot.elements?.map((el: any) => 
        el.id === elementId ? { ...el, x, y } : el
      ) || []
    })
  }

  const updateElementSize = (elementId: number, width: number, height: number) => {
    if (!currentScreenshot) return
    setCurrentScreenshot({
      ...currentScreenshot,
      elements: currentScreenshot.elements?.map((el: any) => 
        el.id === elementId ? { ...el, width, height } : el
      ) || []
    })
  }

  const duplicateElement = (element: any) => {
    if (!currentScreenshot) return
    const newElement = {
      ...element,
      id: Date.now(),
      x: element.x + 20,
      y: element.y + 20
    }
    setCurrentScreenshot({
      ...currentScreenshot,
      elements: [...(currentScreenshot.elements || []), newElement]
    })
    setSelectedElement(newElement)
  }

  const addImageElement = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e: any) => {
      const file = e.target.files[0]
      if (file && currentScreenshot) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const newElement = {
            id: Date.now(),
            type: 'image',
            src: event.target?.result,
            x: 50,
            y: 200,
            width: 150,
            height: 150
          }
          setCurrentScreenshot({
            ...currentScreenshot,
            elements: [...(currentScreenshot.elements || []), newElement]
          })
        }
        reader.readAsDataURL(file)
      }
    }
    input.click()
  }

  const updateElementContent = (elementId: number, content: string) => {
    if (!currentScreenshot) return
    setCurrentScreenshot({
      ...currentScreenshot,
      elements: currentScreenshot.elements?.map((el: any) => 
        el.id === elementId ? { ...el, content } : el
      ) || []
    })
  }

  const deleteElement = (elementId: number) => {
    if (!currentScreenshot) return
    setCurrentScreenshot({
      ...currentScreenshot,
      elements: currentScreenshot.elements?.filter((el: any) => el.id !== elementId) || []
    })
  }

  const saveScreenshot = () => {
    if (!currentScreenshot) return
    const newScreenshots = [...screenshots]
    const existingIndex = newScreenshots.findIndex(s => s.id === currentScreenshot.id)
    if (existingIndex >= 0) {
      newScreenshots[existingIndex] = currentScreenshot
    } else {
      newScreenshots.push({ ...currentScreenshot, id: Date.now() })
    }
    setScreenshots(newScreenshots)
  }

  const exportScreenshot = async () => {
    if (!currentScreenshot) return
    
    try {
      // Create a canvas element to export the screenshot at high resolution
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Determine if this is a carousel layout
      const isCarousel = currentScreenshot.title?.includes('Carousel')
      
      // Set canvas size based on layout type
      if (isCarousel) {
        canvas.width = 2880  // Wide format for carousel
        canvas.height = 1800
      } else {
        canvas.width = currentScreenshot.width || 1242
        canvas.height = currentScreenshot.height || 2688
      }

      // Calculate scale factors from display size to export size
      const displayWidth = isCarousel ? 600 : 300
      const displayHeight = isCarousel ? 400 : 600
      const scaleX = canvas.width / displayWidth
      const scaleY = canvas.height / displayHeight

      // Fill background
      if (currentScreenshot.background.includes('gradient')) {
        // Handle gradient backgrounds
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, '#667eea')
        gradient.addColorStop(1, '#764ba2')
        ctx.fillStyle = gradient
      } else {
        ctx.fillStyle = currentScreenshot.background
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Process all elements
      currentScreenshot.elements?.forEach((element: any) => {
        if (element.type === 'text') {
          // Handle text elements
          ctx.save()
          ctx.fillStyle = element.color || '#000000'
          ctx.font = `${Math.round(element.fontSize * scaleY)}px ${element.fontFamily || 'Arial'}`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          
          // Scale position and size
          const scaledX = (element.x * scaleX) + (element.width * scaleX) / 2
          const scaledY = (element.y * scaleY) + (element.height * scaleY) / 2
          
          // Add background if specified
          if (element.backgroundColor && element.backgroundColor !== 'transparent') {
            ctx.fillStyle = element.backgroundColor
            ctx.fillRect(
              element.x * scaleX,
              element.y * scaleY,
              element.width * scaleX,
              element.height * scaleY
            )
          }
          
          // Draw text
          ctx.fillStyle = element.color || '#000000'
          
          // Handle multi-line text
          const lines = element.content.split('\n')
          const lineHeight = element.fontSize * scaleY * 1.2
          const startY = scaledY - ((lines.length - 1) * lineHeight) / 2
          
          lines.forEach((line: string, index: number) => {
            ctx.fillText(line, scaledX, startY + (index * lineHeight))
          })
          
          ctx.restore()
          
        } else if (element.type === 'image' && element.src) {
          // Handle image elements - simplified approach
          try {
            const img = document.createElement('img') as HTMLImageElement
            img.crossOrigin = 'anonymous'
            img.onload = () => {
              ctx.save()
              ctx.drawImage(
                img,
                element.x * scaleX,
                element.y * scaleY,
                element.width * scaleX,
                element.height * scaleY
              )
              ctx.restore()
            }
            img.onerror = () => {
              console.warn('Failed to load image:', element.src)
            }
            img.src = element.src
          } catch (error) {
            console.warn('Error processing image:', element.src)
          }
        }
      })

      // Download the high-resolution image
      const link = document.createElement('a')
      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-')
      link.download = `${currentScreenshot.title.replace(/[^a-zA-Z0-9]/g, '_')}_${timestamp}.png`
      link.href = canvas.toDataURL('image/png', 1.0)
      link.click()
      
      // Show success message
      alert(`🎉 Screenshot exported successfully!\nResolution: ${canvas.width}×${canvas.height}px`)
      
    } catch (error) {
      console.error('Export failed:', error)
      alert('❌ Export failed. Please try again.')
    }
  }

  return (
    <div className="dashboard">
      {/* Enhanced Sidebar */}
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <Image 
            src="/bluelogo.png" 
            alt="Apps That Scale" 
            width={36} 
            height={36}
            className="sidebar-logo"
          />
          <div className="sidebar-brand">
            <span className="sidebar-title">Apps That Scale</span>
            <span className="sidebar-subtitle">Pro Dashboard</span>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
            >
              <div className="sidebar-item-content">
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`sidebar-badge ${item.badge === 'NEW' ? 'new' : ''}`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <span>JD</span>
              <div className="user-status"></div>
            </div>
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-level">
                <FontAwesomeIcon icon={faGem} /> Pro Member
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-content">
          {/* Enhanced Overview Dashboard */}
          {activeTab === 'overview' && (
            <div className="dashboard-overview">
              {/* Welcome Header */}
              <div className="dashboard-header">
                <div className="welcome-section">
                  <h2>Welcome back, Builder! 👋</h2>
                  <p>Continue your journey to $10K+ revenue</p>
                </div>
                <div className="dashboard-date">
                  <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="dashboard-grid">
                {/* Recent Activity Card */}
                <div className="dashboard-card recent-activity">
                  <div className="card-header">
                    <h3><FontAwesomeIcon icon={faClock} /> Recent Activity</h3>
                    <span className="card-badge">Today</span>
                  </div>
                  <div className="activity-list">
                    <div className="activity-item completed">
                      <div className="activity-icon">
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                      <div className="activity-content">
                        <h4>Completed: User Research Fundamentals</h4>
                        <span className="activity-time">2 hours ago</span>
                      </div>
                    </div>
                    <div className="activity-item in-progress">
                      <div className="activity-icon">
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                      <div className="activity-content">
                        <h4>Started: Market Validation Workshop</h4>
                        <span className="activity-time">35 minutes remaining</span>
                      </div>
                    </div>
                    <div className="activity-item upcoming">
                      <div className="activity-icon">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </div>
                      <div className="activity-content">
                        <h4>Next: MVP Development Planning</h4>
                        <span className="activity-time">Tomorrow</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="dashboard-card quick-stats">
                  <div className="card-header">
                    <h3><FontAwesomeIcon icon={faChartLine} /> Quick Stats</h3>
                  </div>
                  <div className="stats-list">
                    <div className="stat-item">
                      <div className="stat-value">{completedLessons.length}</div>
                      <div className="stat-label">Lessons Completed</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">12.5h</div>
                      <div className="stat-label">Time Invested</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">4/4</div>
                      <div className="stat-label">Modules Unlocked</div>
                    </div>
                  </div>
                </div>

                {/* Continue Learning */}
                <div className="dashboard-card continue-learning" onClick={() => setActiveTab('learn')}>
                  <div className="card-header">
                    <h3><FontAwesomeIcon icon={faGraduationCap} /> Continue Learning</h3>
                    <FontAwesomeIcon icon={faArrowRight} className="card-arrow" />
                  </div>
                  <div className="learning-content">
                    <div className="lesson-preview">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=150&fit=crop"
                        alt="Next lesson"
                        className="lesson-thumbnail"
                      />
                      <div className="lesson-overlay">
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                    </div>
                    <div className="lesson-details">
                      <h4>User Persona Workshop</h4>
                      <p>Learn to identify and understand your target customers</p>
                      <span className="lesson-duration">15 minutes remaining</span>
                    </div>
                  </div>
                </div>

                {/* Recent Resources */}
                <div className="dashboard-card recent-resources">
                  <div className="card-header">
                    <h3><FontAwesomeIcon icon={faDownload} /> Recent Downloads</h3>
                    <button onClick={() => setActiveTab('resources')} className="view-all-btn">
                      View All
                    </button>
                  </div>
                  <div className="resources-preview">
                    <div className="resource-item">
                      <FontAwesomeIcon icon={faFileAlt} className="resource-icon" />
                      <div className="resource-info">
                        <h4>Business Model Canvas</h4>
                        <span>PDF Template</span>
                      </div>
                    </div>
                    <div className="resource-item">
                      <FontAwesomeIcon icon={faTable} className="resource-icon" />
                      <div className="resource-info">
                        <h4>Market Research Spreadsheet</h4>
                        <span>Excel Template</span>
                      </div>
                    </div>
                    <div className="resource-item">
                      <FontAwesomeIcon icon={faCode} className="resource-icon" />
                      <div className="resource-info">
                        <h4>App Wireframe Kit</h4>
                        <span>Figma File</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="dashboard-card achievements">
                  <div className="card-header">
                    <h3><FontAwesomeIcon icon={faTrophy} /> Achievements</h3>
                  </div>
                  <div className="achievement-grid">
                    <div className="achievement-item earned">
                      <FontAwesomeIcon icon={faRocket} className="achievement-icon" />
                      <div className="achievement-info">
                        <h4>First Steps</h4>
                        <span>Complete first lesson</span>
                      </div>
                    </div>
                    <div className="achievement-item earned">
                      <FontAwesomeIcon icon={faLightbulb} className="achievement-icon" />
                      <div className="achievement-info">
                        <h4>Idea Machine</h4>
                        <span>Generate 5 app ideas</span>
                      </div>
                    </div>
                    <div className="achievement-item locked">
                      <FontAwesomeIcon icon={faGraduationCap} className="achievement-icon" />
                      <div className="achievement-info">
                        <h4>Module Master</h4>
                        <span>Complete a full module</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Community Activity */}
                <div className="dashboard-card community-activity">
                  <div className="card-header">
                    <h3><FontAwesomeIcon icon={faUsers} /> Community</h3>
                    <span className="card-badge">2,500+ members</span>
                  </div>
                  <div className="community-content">
                    <div className="community-item">
                      <div className="member-avatar">
                        <span>JS</span>
                      </div>
                      <div className="community-info">
                        <h4>John shared his first app launch</h4>
                        <span>2 hours ago • 24 reactions</span>
                      </div>
                    </div>
                    <div className="community-item">
                      <div className="member-avatar">
                        <span>SM</span>
                      </div>
                      <div className="community-info">
                        <h4>Sarah hit $5K MRR milestone!</h4>
                        <span>5 hours ago • 89 reactions</span>
                      </div>
                    </div>
                    <button className="join-discussion-btn">
                      Join Discussion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Udemy-Style Course Player */}
          {activeTab === 'learn' && (
            <div className="learn-grid-container">
              {/* Course Header */}
              <div className="learn-grid-header">
                <div className="learn-header-content">
                  <h1>B2C App Development Mastery</h1>
                  <p>Master the complete journey from idea to $10K+ revenue with our comprehensive course</p>
                  <div className="course-stats-grid">
                    <div className="stat-item">
                      <FontAwesomeIcon icon={faGraduationCap} />
                      <span>{courseModules.reduce((total, module) => total + module.lessons.length, 0)} Lessons</span>
                    </div>
                    <div className="stat-item">
                      <FontAwesomeIcon icon={faClock} />
                      <span>16+ Hours</span>
                    </div>
                    <div className="stat-item">
                      <FontAwesomeIcon icon={faTrophy} />
                      <span>{Math.round(getOverallProgress())}% Complete</span>
                    </div>
                    <div className="stat-item">
                      <FontAwesomeIcon icon={faUsers} />
                      <span>2,847 Students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modules Grid */}
              <div className="modules-grid-modern">
                {courseModules.map((module, moduleIndex) => {
                  const isExpanded = !collapsedModules.has(module.id)
                  const completedCount = module.lessons.filter(lesson => completedLessons.includes(lesson.id)).length
                  const totalLessons = module.lessons.length
                  const moduleProgress = Math.round((completedCount / totalLessons) * 100)
                  
                  return (
                    <div key={module.id} className={`module-card-grid ${isExpanded ? 'expanded' : 'collapsed'}`}>
                      {/* Module Header */}
                      <div 
                        className="module-header-grid"
                        onClick={() => toggleModuleCollapse(module.id)}
                      >
                        <div className="module-header-left">
                          <div className={`module-icon-grid bg-gradient-to-br ${module.color}`}>
                            <FontAwesomeIcon icon={module.icon} />
                          </div>
                          <div className="module-info-grid">
                            <div className="module-badge">
                              <span className="module-number">Module {moduleIndex + 1}</span>
                              <span className={`difficulty-badge ${module.difficulty.toLowerCase()}`}>
                                {module.difficulty}
                              </span>
                            </div>
                            <h3>{module.title}</h3>
                            <p className="module-subtitle">{module.subtitle}</p>
                            <p className="module-description-grid">{module.description}</p>
                          </div>
                        </div>
                        
                        <div className="module-header-right">
                          <div className="module-stats-grid">
                            <div className="stat-grid-item">
                              <FontAwesomeIcon icon={faClock} />
                              <span>{module.duration}</span>
                            </div>
                            <div className="stat-grid-item">
                              <FontAwesomeIcon icon={faPlay} />
                              <span>{totalLessons} lessons</span>
                            </div>
                            <div className="stat-grid-item">
                              <FontAwesomeIcon icon={faCheckCircle} />
                              <span>{completedCount}/{totalLessons} done</span>
                            </div>
                          </div>
                          
                          <div className="progress-circle-grid">
                            <svg className="progress-svg-grid" viewBox="0 0 36 36">
                              <circle 
                                className="progress-bg-grid" 
                                cx="18" 
                                cy="18" 
                                r="16"
                              />
                              <circle 
                                className="progress-bar-grid" 
                                cx="18" 
                                cy="18" 
                                r="16"
                                strokeDasharray={`${moduleProgress}, 100`}
                              />
                            </svg>
                            <span className="progress-text-grid">{moduleProgress}%</span>
                          </div>
                          
                          <button className="expand-btn-grid">
                            <FontAwesomeIcon 
                              icon={faChevronDown} 
                              className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Lessons Grid */}
                      {isExpanded && (
                        <div className="lessons-grid-container">
                          <div className="lessons-grid-modern">
                            {module.lessons.map((lesson, lessonIndex) => {
                              const isCompleted = completedLessons.includes(lesson.id)
                              const isLocked = module.progress === 0 && lessonIndex > 2
                              const isNext = !isCompleted && !isLocked && lessonIndex === completedCount
                              
                              return (
                                <div 
                                  key={lesson.id}
                                  className={`lesson-card-grid ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''} ${isNext ? 'next' : ''}`}
                                  onClick={() => !isLocked && toggleLessonComplete(lesson.id)}
                                >
                                  <div className="lesson-thumbnail-grid">
                                    <img 
                                      src={`https://images.unsplash.com/photo-${
                                        lesson.type === 'video' ? '1551288049-bebda4e38f71' :
                                        lesson.type === 'interactive' ? '1460925895917-afdab827c52f' :
                                        lesson.type === 'workshop' ? '1552664730-d307ca884978' :
                                        lesson.type === 'strategy' ? '1454165804606-c3d57bc86b40' :
                                        lesson.type === 'hands-on' ? '1517077304055-6e89660557ea' :
                                        lesson.type === 'technical' ? '1518773553398-650d8d0d8c47' :
                                        lesson.type === 'coding' ? '1461749280684-dccba630e2f6' :
                                        lesson.type === 'advanced' ? '1507003211169-0a1dd7a838e1' :
                                        lesson.type === 'planning' ? '1454165804606-c3d57bc86b40' :
                                        lesson.type === 'community' ? '1522202176988-66273c2fd55f' :
                                        lesson.type === 'business' ? '1554224155-8d04cb21cd6c' :
                                        lesson.type === 'management' ? '1507003211169-0a1dd7a838e1' :
                                        '1551288049-bebda4e38f71'
                                      }?w=400&h=225&fit=crop`}
                                      alt={lesson.title}
                                    />
                                    <div className="lesson-overlay-grid">
                                      <div className="lesson-status-icon-grid">
                                        {isCompleted ? (
                                          <FontAwesomeIcon icon={faCheckCircle} />
                                        ) : isLocked ? (
                                          <FontAwesomeIcon icon={faLock} />
                                        ) : (
                                          <FontAwesomeIcon icon={faPlay} />
                                        )}
                                      </div>
                                      {isNext && <div className="next-indicator">Up Next</div>}
                                    </div>
                                  </div>
                                  
                                  <div className="lesson-content-grid">
                                    <div className="lesson-header-grid">
                                      <h4>{lesson.title}</h4>
                                      <span className={`lesson-type-badge ${lesson.type}`}>
                                        {lesson.type}
                                      </span>
                                    </div>
                                    
                                    <div className="lesson-meta-grid">
                                      <div className="meta-item">
                                        <FontAwesomeIcon icon={faClock} />
                                        <span>{lesson.duration}</span>
                                      </div>
                                      <div className="meta-item">
                                        <FontAwesomeIcon icon={faEye} />
                                        <span>{lesson.views}</span>
                                      </div>
                                      <div className="meta-item">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span>{lesson.likes}</span>
                                      </div>
                                    </div>
                                    
                                    {isLocked && (
                                      <div className="locked-message">
                                        Complete previous lessons to unlock
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* App Research Tab */}
          {activeTab === 'research' && (
            <div className="research-tab-enhanced">
              <div className="research-header">
                <div className="research-title">
                  <h2>🔍 Research the Competition</h2>
                  <p>Analyze any app in the App Store with real-time data and competitive intelligence</p>
                </div>
              </div>

              <div className="search-section">
                <div className="search-form-enhanced">
                  <div className="search-input-wrapper" style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearchInputChange(e.target.value)}
                      onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                      placeholder="Search any app (e.g., Instagram, TikTok, Uber...)"
                      className="search-input-enhanced"
                    />
                    
                    {/* Autocomplete Suggestions */}

                  </div>
                </div>


              </div>

              <div className="research-content">
                {showSuggestions && searchSuggestions.length > 0 ? (
                  <div className="search-suggestions-main">
                    <div className="suggestions-header">
                      <div className="results-title-section">
                        <h3>Search Suggestions ({searchSuggestions.length})</h3>
                        <p>Click on any app to view detailed information</p>
                      </div>
                      <div className="results-controls">
                        <div className="sort-dropdown">
                          <label htmlFor="suggestions-sort-select">Sort by:</label>
                          <select
                            id="suggestions-sort-select"
                            value={sortBy}
                            onChange={(e) => {
                              setSortBy(e.target.value)
                              const sorted = sortResults(searchSuggestions, e.target.value)
                              setSearchSuggestions(sorted)
                            }}
                          >
                            <option value="relevance">Relevance</option>
                            <option value="rating">Highest Rated</option>
                            <option value="reviews">Most Reviews</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="recent">Recently Updated</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="apps-grid">
                      {searchSuggestions.map((app) => (
                        <div 
                          key={app.trackId} 
                          className="app-card-research"
                          onClick={() => selectSuggestion(app)}
                        >
                          <div className="app-icon">
                            <img 
                              src={app.artworkUrl100} 
                              alt={app.trackName}
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAzOEg0MFY0MEgyMFYzOFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIwIDI4SDQwVjMwSDIwVjI4WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMjAgMjJINDBWMjRIMjBWMjJaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yMCAzMkg0MFYzNEgyMFYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
                              }}
                            />
                          </div>
                          
                          <div className="app-info">
                            <h4>{app.trackName}</h4>
                            <p className="app-developer">{app.artistName}</p>
                            <div className="app-meta">
                              <span className="app-category">{app.primaryGenreName}</span>
                              <div className="app-rating">
                                <FontAwesomeIcon icon={faStar} style={{ color: getRatingColor(app.averageUserRating) }} />
                                <span>{app.averageUserRating ? app.averageUserRating.toFixed(1) : 'N/A'}</span>
                              </div>
                              <span className="app-price">{formatPrice(app.price)}</span>
                            </div>
                          </div>
                          
                          <FontAwesomeIcon icon={faArrowRight} className="app-arrow" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedApp ? (
                  <div className="comprehensive-app-detail">
                    <div className="app-header-section">
                      <button 
                        onClick={() => setSelectedApp(null)}
                        className="back-btn"
                      >
                        <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(180deg)' }} />
                        Back to Results
                      </button>
                      
                      <div className="app-main-info">
                        <div className="app-icon-large">
                          <img 
                            src={selectedApp.artworkUrl512 || selectedApp.artworkUrl100} 
                            alt={selectedApp.trackName}
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNSA2NUg2NVY3MEgzNVY2NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTM1IDQ1SDY1VjUwSDM1VjQ1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMzUgMzVINjVWNDBIMzVWMzVaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0zNSA1NUg2NVY2MEgzNVY1NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
                            }}
                          />
                        </div>
                        
                        <div className="app-title-section">
                          <h3>{selectedApp.trackName}</h3>
                          <p className="app-developer">{selectedApp.artistName}</p>
                          <div className="app-meta-row">
                            <span className="app-category">{selectedApp.primaryGenreName}</span>
                            <span className="app-price">{formatPrice(selectedApp.price)}</span>
                            <div className="app-rating">
                              <FontAwesomeIcon icon={faStar} style={{ color: getRatingColor(selectedApp.averageUserRating) }} />
                              <span>{selectedApp.averageUserRating ? selectedApp.averageUserRating.toFixed(1) : 'N/A'}</span>
                              <span className="rating-count">({selectedApp.userRatingCount?.toLocaleString() || 0})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screenshots Section with Device Switcher */}
                    {((selectedApp.screenshotUrls && selectedApp.screenshotUrls.length > 0) || 
                      (selectedApp.ipadScreenshotUrls && selectedApp.ipadScreenshotUrls.length > 0)) && (
                      <div className="app-screenshots-section">
                        <div className="screenshots-header">
                          <h4>
                            <FontAwesomeIcon icon={faImage} /> 
                            Screenshots
                          </h4>
                          <div className="device-switcher">
                            {selectedApp.screenshotUrls && selectedApp.screenshotUrls.length > 0 && (
                              <button 
                                className={`device-btn ${screenshotDevice === 'iphone' ? 'active' : ''}`}
                                onClick={() => setScreenshotDevice('iphone')}
                              >
                                <FontAwesomeIcon icon={faMobile} />
                                iPhone ({selectedApp.screenshotUrls.length})
                              </button>
                            )}
                            {selectedApp.ipadScreenshotUrls && selectedApp.ipadScreenshotUrls.length > 0 && (
                              <button 
                                className={`device-btn ${screenshotDevice === 'ipad' ? 'active' : ''}`}
                                onClick={() => setScreenshotDevice('ipad')}
                              >
                                <FontAwesomeIcon icon={faTabletAlt} />
                                iPad ({selectedApp.ipadScreenshotUrls.length})
                              </button>
                            )}
                          </div>
                        </div>
                        
                        <div className={`screenshots-slider ${screenshotDevice}`}>
                          <div className="screenshots-track">
                            {screenshotDevice === 'iphone' && selectedApp.screenshotUrls && 
                              selectedApp.screenshotUrls.map((screenshot: string, index: number) => (
                                <div key={`iphone-${index}`} className="screenshot-slide">
                                  <img 
                                    src={screenshot} 
                                    alt={`${selectedApp.trackName} iPhone screenshot ${index + 1}`}
                                    className="screenshot-image"
                                    onClick={() => window.open(screenshot, '_blank')}
                                    onLoad={(e) => {
                                      e.currentTarget.style.opacity = '1'
                                    }}
                                    onError={(e) => {
                                      console.log('Failed to load screenshot:', screenshot)
                                      e.currentTarget.style.display = 'none'
                                    }}
                                    style={{ opacity: '0', transition: 'opacity 0.3s ease' }}
                                  />
                                </div>
                              ))
                            }
                            {screenshotDevice === 'ipad' && selectedApp.ipadScreenshotUrls && 
                              selectedApp.ipadScreenshotUrls.map((screenshot: string, index: number) => (
                                <div key={`ipad-${index}`} className="screenshot-slide ipad">
                                  <img 
                                    src={screenshot} 
                                    alt={`${selectedApp.trackName} iPad screenshot ${index + 1}`}
                                    className="screenshot-image"
                                    onClick={() => window.open(screenshot, '_blank')}
                                    onLoad={(e) => {
                                      e.currentTarget.style.opacity = '1'
                                    }}
                                    onError={(e) => {
                                      console.log('Failed to load screenshot:', screenshot)
                                      e.currentTarget.style.display = 'none'
                                    }}
                                    style={{ opacity: '0', transition: 'opacity 0.3s ease' }}
                                  />
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="app-comprehensive-grid">
                      {/* Enhanced Stats */}
                      <div className="app-stats-grid enhanced">
                        <div className="stat-box">
                          <FontAwesomeIcon icon={faDownload} className="stat-icon" />
                          <div className="stat-info">
                            <span className="stat-label">File Size</span>
                            <span className="stat-value">{formatFileSize(selectedApp.fileSizeBytes)}</span>
                          </div>
                        </div>
                        
                        <div className="stat-box">
                          <FontAwesomeIcon icon={faCalendarAlt} className="stat-icon" />
                          <div className="stat-info">
                            <span className="stat-label">Last Updated</span>
                            <span className="stat-value">{formatDate(selectedApp.currentVersionReleaseDate)}</span>
                          </div>
                        </div>
                        
                        <div className="stat-box">
                          <FontAwesomeIcon icon={faCog} className="stat-icon" />
                          <div className="stat-info">
                            <span className="stat-label">Version</span>
                            <span className="stat-value">{selectedApp.version || 'N/A'}</span>
                          </div>
                        </div>
                        
                        <div className="stat-box">
                          <FontAwesomeIcon icon={faUsers} className="stat-icon" />
                          <div className="stat-info">
                            <span className="stat-label">Age Rating</span>
                            <span className="stat-value">{selectedApp.contentAdvisoryRating || selectedApp.trackContentRating || 'N/A'}</span>
                          </div>
                        </div>

                        <div className="stat-box">
                          <FontAwesomeIcon icon={faCalendarPlus} className="stat-icon" />
                          <div className="stat-info">
                            <span className="stat-label">Release Date</span>
                            <span className="stat-value">{formatDate(selectedApp.releaseDate)}</span>
                          </div>
                        </div>

                        <div className="stat-box">
                          <FontAwesomeIcon icon={faGlobe} className="stat-icon" />
                          <div className="stat-info">
                            <span className="stat-label">Bundle ID</span>
                            <span className="stat-value" title={selectedApp.bundleId}>{selectedApp.bundleId ? selectedApp.bundleId.substring(0, 20) + '...' : 'N/A'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Categories & Tags */}
                      <div className="app-categories-section">
                        <h4><FontAwesomeIcon icon={faTags} /> Categories & Genres</h4>
                        <div className="categories-list">
                          {getAppStoreCategories(selectedApp).map((category, index) => (
                            <span key={index} className="category-badge">{category}</span>
                          ))}
                        </div>
                      </div>

                      {/* Supported Languages - Slideshow */}
                      <div className="app-languages-section">
                        <div className="section-header-with-button">
                          <h4><FontAwesomeIcon icon={faLanguage} /> Supported Languages ({getLanguages(selectedApp).length})</h4>
                          <button 
                            className="see-more-btn"
                            onClick={() => openModal('languages')}
                          >
                            <FontAwesomeIcon icon={faExpand} />
                            See More
                          </button>
                        </div>
                        <div className="tags-container">
                          <div className="tags-grid">
                            {getLanguages(selectedApp).slice(0, 8).map((language, index) => (
                              <span key={index} className="language-tag">{language}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Device Compatibility & Features - Slideshow */}
                      <div className="app-features-section">
                        <div className="section-header-with-button">
                          <h4><FontAwesomeIcon icon={faMobile} /> Features & Compatibility</h4>
                          <button 
                            className="see-more-btn"
                            onClick={() => openModal('features')}
                          >
                            <FontAwesomeIcon icon={faExpand} />
                            See More
                          </button>
                        </div>
                        <div className="tags-container">
                          <div className="tags-grid">
                            {getFeatures(selectedApp).slice(0, 6).map((feature, index) => (
                              <span key={index} className="feature-tag">{feature}</span>
                            ))}
                            {selectedApp.supportedDevices && selectedApp.supportedDevices.slice(0, 4).map((device: string, index: number) => (
                              <span key={`device-${index}`} className="device-tag">{device}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Advisories & Content Ratings */}
                      {selectedApp.advisories && selectedApp.advisories.length > 0 && (
                        <div className="app-advisories-section">
                          <h4><FontAwesomeIcon icon={faExclamationTriangle} /> Content Advisories</h4>
                          <div className="advisories-list">
                            {selectedApp.advisories.map((advisory: string, index: number) => (
                              <span key={index} className="advisory-badge">{advisory}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="app-description-section">
                      <h4><FontAwesomeIcon icon={faFileText} /> Description</h4>
                      <div className="app-description">
                        {formatDescription(selectedApp.description).map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    {/* Release Notes */}
                    {selectedApp.releaseNotes && (
                      <div className="app-release-notes-section">
                        <h4><FontAwesomeIcon icon={faClipboardList} /> What's New in Version {selectedApp.version}</h4>
                        <div className="release-notes">
                          {selectedApp.releaseNotes}
                        </div>
                      </div>
                    )}

                    {/* User Reviews Section */}
                    <div className="app-reviews-section">
                      <h4><FontAwesomeIcon icon={faComments} /> User Reviews</h4>
                      
                      <div className="reviews-overview">
                        <div className="rating-summary">
                          <div className="rating-large">
                            <span className="rating-number">{selectedApp.averageUserRating ? selectedApp.averageUserRating.toFixed(1) : 'N/A'}</span>
                            <div className="rating-stars-large">
                              {selectedApp.averageUserRating && getRatingStars(selectedApp.averageUserRating)}
                            </div>
                          </div>
                          <div className="rating-info">
                            <span className="total-ratings">{selectedApp.userRatingCount?.toLocaleString() || 0} ratings</span>
                            <span className="current-version-rating">
                              Current Version: {selectedApp.averageUserRatingForCurrentVersion ? selectedApp.averageUserRatingForCurrentVersion.toFixed(1) : 'N/A'} 
                              ({selectedApp.userRatingCountForCurrentVersion?.toLocaleString() || 0} ratings)
                            </span>
                          </div>
                        </div>
                      </div>

                      {selectedApp.reviewData && selectedApp.reviewData.recentReviews && selectedApp.reviewData.recentReviews.length > 0 ? (
                        <div className="reviews-slider-container">
                          <h5 className="reviews-subtitle">Recent Reviews</h5>
                          <div className="reviews-slider">
                            <div className="reviews-track">
                              {selectedApp.reviewData.recentReviews.map((review: any, index: number) => (
                                <div key={index} className="review-slide">
                                  <div className="review-header">
                                    <div className="review-rating">
                                      {getRatingStars(parseInt(review.rating))}
                                    </div>
                                    <div className="review-meta">
                                      <span className="review-author">{review.author}</span>
                                      <span className="review-date">{formatReviewDate(review.date)}</span>
                                    </div>
                                  </div>
                                  {review.title && (
                                    <div className="review-title">{review.title}</div>
                                  )}
                                  <div className="review-content">{review.content}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="no-reviews">
                          <p>Recent reviews are not available for this app.</p>
                          <p>Check the App Store for the latest user feedback.</p>
                        </div>
                      )}
                    </div>

                    {/* Potential Keywords Section */}
                    <div className="app-keywords-section">
                      <h4><FontAwesomeIcon icon={faTags} /> Potential ASO Keywords</h4>
                      <div className="keywords-grid">
                        {extractKeywords(selectedApp).map((keyword: string, index: number) => (
                          <span key={index} className="keyword-tag">{keyword}</span>
                        ))}
                      </div>
                      <p className="keywords-note">
                        <FontAwesomeIcon icon={faInfoCircle} /> These keywords are extracted from the app's name, description, and categories. Use them for ASO research and optimization.
                      </p>
                    </div>

                    {/* Pricing & Monetization Section */}
                    <div className="app-pricing-section">
                      <h4><FontAwesomeIcon icon={faDollarSign} /> Pricing & Monetization</h4>
                      <div className="pricing-overview">
                        <div className="base-price">
                          <span className="price-label">App Price:</span>
                          <span className="price-value">{getPricingInfo(selectedApp).basePrice}</span>
                        </div>
                        <div className="monetization-model">
                          <span className="price-label">Model:</span>
                          <span className="price-value">{getPricingInfo(selectedApp).monetizationModel}</span>
                        </div>
                        {getPricingInfo(selectedApp).hasInAppPurchases && (
                          <div className="iap-indicator">
                            <span className="price-label">In-App Purchases:</span>
                            <span className="price-value iap-detected">Available</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="pricing-details">
                        <h5><FontAwesomeIcon icon={faInfoCircle} /> Monetization Analysis</h5>
                        <div className="monetization-insights">
                          {getPricingInfo(selectedApp).monetizationModel === 'Paid App' && (
                            <div className="insight-item">
                              <span className="insight-icon">💰</span>
                              <span className="insight-text">One-time purchase app with upfront cost</span>
                            </div>
                          )}
                          {getPricingInfo(selectedApp).monetizationModel === 'Free App' && !getPricingInfo(selectedApp).hasInAppPurchases && (
                            <div className="insight-item">
                              <span className="insight-icon">🆓</span>
                              <span className="insight-text">Completely free app with no detected monetization</span>
                            </div>
                          )}
                          {getPricingInfo(selectedApp).monetizationModel === 'Freemium' && (
                            <div className="insight-item">
                              <span className="insight-icon">🎯</span>
                              <span className="insight-text">Free-to-download with premium features or content available</span>
                            </div>
                          )}
                          {getPricingInfo(selectedApp).hasInAppPurchases && (
                            <div className="insight-item">
                              <span className="insight-icon">🛒</span>
                              <span className="insight-text">Contains in-app purchases or subscriptions (check App Store for details)</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <p className="pricing-note">
                        <FontAwesomeIcon icon={faInfoCircle} /> Pricing data from iTunes API. For detailed subscription/IAP pricing, visit the App Store directly.
                      </p>
                    </div>

                    {/* Technical Information */}
                    <div className="app-technical-info">
                      <h4><FontAwesomeIcon icon={faInfoCircle} /> Technical Information</h4>
                      <div className="info-grid">
                        <div className="info-item">
                          <span className="info-label">Track ID:</span>
                          <span className="info-value">{selectedApp.trackId}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Currency:</span>
                          <span className="info-value">{selectedApp.currency || 'USD'}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Country:</span>
                          <span className="info-value">{selectedApp.country || 'US'}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Wrapper Type:</span>
                          <span className="info-value">{selectedApp.wrapperType || 'software'}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Kind:</span>
                          <span className="info-value">{selectedApp.kind || 'software'}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Minimum OS:</span>
                          <span className="info-value">{selectedApp.minimumOsVersion || 'N/A'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="app-links-section">
                      <h4><FontAwesomeIcon icon={faLink} /> Links & Resources</h4>
                      <div className="app-links">
                        <a 
                          href={selectedApp.trackViewUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="app-link primary"
                        >
                          <FontAwesomeIcon icon={faDownload} />
                          View in App Store
                        </a>
                        <a 
                          href={selectedApp.artistViewUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="app-link secondary"
                        >
                          <FontAwesomeIcon icon={faUser} />
                          Developer Profile
                        </a>
                        {selectedApp.sellerUrl && (
                          <a 
                            href={selectedApp.sellerUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="app-link secondary"
                          >
                            <FontAwesomeIcon icon={faGlobe} />
                            Developer Website
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Other Developer Apps */}
                    {otherDeveloperApps.length > 0 && (
                      <div className="other-developer-apps-section">
                        <h4><FontAwesomeIcon icon={faUser} /> Other Apps by {selectedApp.artistName}</h4>
                        <div className="other-apps-grid">
                          {otherDeveloperApps
                            .filter((app) => app.trackId !== selectedApp.trackId)
                            .map((app) => (
                            <div 
                              key={app.trackId} 
                              className="other-app-card"
                              onClick={() => selectApp(app)}
                            >
                              <div className="other-app-icon">
                                <img 
                                  src={app.artworkUrl100} 
                                  alt={app.trackName}
                                  onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAzOEg0MFY0MEgyMFYzOFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIwIDI4SDQwVjMwSDIwVjI4WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMjAgMjJINDBWMjRIMjBWMjJaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yMCAzMkg0MFYzNEgyMFYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
                                  }}
                                />
                              </div>
                              <div className="other-app-info">
                                <h5>{app.trackName}</h5>
                                <div className="other-app-meta">
                                  <span className="other-app-category">{app.primaryGenreName}</span>
                                  <div className="other-app-rating">
                                    <FontAwesomeIcon icon={faStar} style={{ color: getRatingColor(app.averageUserRating) }} />
                                    <span>{app.averageUserRating ? app.averageUserRating.toFixed(1) : 'N/A'}</span>
                                  </div>
                                  <span className="other-app-price">{formatPrice(app.price)}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}


                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="search-results-enhanced">
                    <div className="results-header">
                      <div className="results-title-section">
                        <h3>Search Results ({searchResults.length})</h3>
                        <p>Click on any app to view detailed information</p>
                      </div>
                      <div className="results-controls">
                        <div className="sort-dropdown">
                          <label htmlFor="sort-select">Sort by:</label>
                          <select
                            id="sort-select"
                            value={sortBy}
                            onChange={(e) => {
                              setSortBy(e.target.value)
                              const sorted = sortResults(searchResults, e.target.value)
                              setSearchResults(sorted)
                            }}
                          >
                            <option value="relevance">Relevance</option>
                            <option value="rating">Highest Rated</option>
                            <option value="reviews">Most Reviews</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="recent">Recently Updated</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="apps-grid">
                      {searchResults.map((app) => (
                        <div 
                          key={app.trackId} 
                          className="app-card-research"
                          onClick={() => selectApp(app)}
                        >
                          <div className="app-icon">
                            <img 
                              src={app.artworkUrl100} 
                              alt={app.trackName}
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAzOEg0MFY0MEgyMFYzOFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIwIDI4SDQwVjMwSDIwVjI4WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMjAgMjJINDBWMjRIMjBWMjJaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yMCAzMkg0MFYzNEgyMFYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
                              }}
                            />
                          </div>
                          
                          <div className="app-info">
                            <h4>{app.trackName}</h4>
                            <p className="app-developer">{app.artistName}</p>
                            <div className="app-meta">
                              <span className="app-category">{app.primaryGenreName}</span>
                              <div className="app-rating">
                                <FontAwesomeIcon icon={faStar} style={{ color: getRatingColor(app.averageUserRating) }} />
                                <span>{app.averageUserRating ? app.averageUserRating.toFixed(1) : 'N/A'}</span>
                              </div>
                              <span className="app-price">{formatPrice(app.price)}</span>
                            </div>
                          </div>
                          
                          <FontAwesomeIcon icon={faArrowRight} className="app-arrow" />
                        </div>
                      ))}
                    </div>
                    
                    {/* View More Button */}
                    <div className="view-more-section">
                      <button
                        onClick={loadMoreResults}
                        disabled={isLoadingMore}
                        className="view-more-btn"
                      >
                        {isLoadingMore ? (
                          <>
                            <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                            Loading more...
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faPlus} />
                            View More Results
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : searchQuery && !isSearching ? (
                  <div className="no-results">
                    {noResultAnimationData ? (
                      <div className="lottie-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                        <Lottie 
                          animationData={noResultAnimationData} 
                          loop={true}
                          style={{ width: '300px', height: '300px' }}
                        />
                      </div>
                    ) : (
                      <FontAwesomeIcon icon={faSearch} className="no-results-icon" />
                    )}
                    <h3>No apps found</h3>
                    <p>Try searching with different keywords or check your spelling</p>
                  </div>
                ) : (
                  <div className="research-placeholder">
                    <div className="placeholder-content">
                      {animationData ? (
                        <div className="lottie-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                          <Lottie 
                            animationData={animationData} 
                            loop={true}
                            style={{ width: '300px', height: '300px' }}
                          />
                        </div>
                      ) : (
                        <FontAwesomeIcon icon={faSearch} className="placeholder-icon" />
                      )}
                      <h3>Discover Any App</h3>
                      <p>Search for any app in the App Store to get detailed insights including ratings, reviews, pricing, and competitive analysis.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="resources-tab">
              <div className="resources-header">
                <h2>📚 Course Resources</h2>
                <p>Download templates, tools, and guides to accelerate your app development journey</p>
              </div>

              <div className="resources-categories">
                <div className="resource-category">
                  <div className="category-header">
                    <FontAwesomeIcon icon={faFileAlt} className="category-icon" />
                    <h3>Templates & Worksheets</h3>
                    <span className="resource-count">8 items</span>
                  </div>
                  <div className="resources-grid">
                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faFileAlt} />
                      </div>
                      <div className="resource-info">
                        <h4>Business Model Canvas</h4>
                        <p>Complete template for planning your app's business model</p>
                        <div className="resource-meta">
                          <span className="file-type">PDF</span>
                          <span className="file-size">2.3 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faTable} />
                      </div>
                      <div className="resource-info">
                        <h4>Market Research Spreadsheet</h4>
                        <p>Comprehensive template for competitor analysis and market sizing</p>
                        <div className="resource-meta">
                          <span className="file-type">Excel</span>
                          <span className="file-size">1.8 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <div className="resource-info">
                        <h4>User Persona Template</h4>
                        <p>Create detailed user personas for your target audience</p>
                        <div className="resource-meta">
                          <span className="file-type">PDF</span>
                          <span className="file-size">1.2 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faChartLine} />
                      </div>
                      <div className="resource-info">
                        <h4>Revenue Projection Calculator</h4>
                        <p>Calculate potential revenue and growth scenarios</p>
                        <div className="resource-meta">
                          <span className="file-type">Excel</span>
                          <span className="file-size">2.1 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="resource-category">
                  <div className="category-header">
                    <FontAwesomeIcon icon={faCode} className="category-icon" />
                    <h3>Design & Development</h3>
                    <span className="resource-count">6 items</span>
                  </div>
                  <div className="resources-grid">
                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faCode} />
                      </div>
                      <div className="resource-info">
                        <h4>App Wireframe Kit</h4>
                        <p>Complete set of mobile app wireframes and components</p>
                        <div className="resource-meta">
                          <span className="file-type">Figma</span>
                          <span className="file-size">15.7 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faPalette} />
                      </div>
                      <div className="resource-info">
                        <h4>UI Design System</h4>
                        <p>Complete design system with colors, typography, and components</p>
                        <div className="resource-meta">
                          <span className="file-type">Sketch</span>
                          <span className="file-size">8.4 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faMobile} />
                      </div>
                      <div className="resource-info">
                        <h4>App Icon Templates</h4>
                        <p>Professional app icon templates for iOS and Android</p>
                        <div className="resource-meta">
                          <span className="file-type">PSD</span>
                          <span className="file-size">12.3 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faCode} />
                      </div>
                      <div className="resource-info">
                        <h4>React Native Starter Kit</h4>
                        <p>Complete React Native boilerplate with common features</p>
                        <div className="resource-meta">
                          <span className="file-type">ZIP</span>
                          <span className="file-size">45.2 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="resource-category">
                  <div className="category-header">
                    <FontAwesomeIcon icon={faRocket} className="category-icon" />
                    <h3>Launch & Marketing</h3>
                    <span className="resource-count">5 items</span>
                  </div>
                  <div className="resources-grid">
                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faList} />
                      </div>
                      <div className="resource-info">
                        <h4>App Store Optimization Checklist</h4>
                        <p>Complete ASO checklist to maximize your app's visibility</p>
                        <div className="resource-meta">
                          <span className="file-type">PDF</span>
                          <span className="file-size">1.5 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faShareAlt} />
                      </div>
                      <div className="resource-info">
                        <h4>Social Media Marketing Kit</h4>
                        <p>Templates and strategies for promoting your app on social media</p>
                        <div className="resource-meta">
                          <span className="file-type">ZIP</span>
                          <span className="file-size">28.9 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="resource-info">
                        <h4>Email Marketing Templates</h4>
                        <p>Pre-launch and post-launch email templates for user engagement</p>
                        <div className="resource-meta">
                          <span className="file-type">HTML</span>
                          <span className="file-size">3.7 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>

                    <div className="resource-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faDollarSign} />
                      </div>
                      <div className="resource-info">
                        <h4>Monetization Strategy Guide</h4>
                        <p>Comprehensive guide to different app monetization models</p>
                        <div className="resource-meta">
                          <span className="file-type">PDF</span>
                          <span className="file-size">4.2 MB</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="resource-category">
                  <div className="category-header">
                    <FontAwesomeIcon icon={faLink} className="category-icon" />
                    <h3>Tools & Links</h3>
                    <span className="resource-count">10 items</span>
                  </div>
                  <div className="resources-grid">
                    <div className="resource-card link-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </div>
                      <div className="resource-info">
                        <h4>Figma for App Design</h4>
                        <p>Free design tool for creating app interfaces</p>
                        <div className="resource-meta">
                          <span className="link-type">External Link</span>
                        </div>
                      </div>
                      <button className="visit-btn">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Visit
                      </button>
                    </div>

                    <div className="resource-card link-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </div>
                      <div className="resource-info">
                        <h4>App Store Connect</h4>
                        <p>Apple's platform for managing your iOS apps</p>
                        <div className="resource-meta">
                          <span className="link-type">External Link</span>
                        </div>
                      </div>
                      <button className="visit-btn">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Visit
                      </button>
                    </div>

                    <div className="resource-card link-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </div>
                      <div className="resource-info">
                        <h4>Google Play Console</h4>
                        <p>Google's platform for publishing Android apps</p>
                        <div className="resource-meta">
                          <span className="link-type">External Link</span>
                        </div>
                      </div>
                      <button className="visit-btn">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Visit
                      </button>
                    </div>

                    <div className="resource-card link-card">
                      <div className="resource-icon">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </div>
                      <div className="resource-info">
                        <h4>Firebase Console</h4>
                        <p>Backend services for mobile app development</p>
                        <div className="resource-meta">
                          <span className="link-type">External Link</span>
                        </div>
                      </div>
                      <button className="visit-btn">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Screenshots Tab */}
          {activeTab === 'screenshots' && (
            <div className="screenshot-editor">
              {/* Top Tab Bar for Screenshots */}
              <div style={{
                background: 'white',
                borderBottom: '1px solid #e1e5e9',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                overflowX: 'auto'
              }}>
                {screenshots.map((screenshot) => (
                  <div 
                    key={screenshot.id}
                    onClick={() => setCurrentScreenshot(screenshot)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      background: currentScreenshot?.id === screenshot.id ? '#f0f8ff' : '#f8f9fa',
                      border: currentScreenshot?.id === screenshot.id ? '2px solid #007AFF' : '1px solid #e1e5e9',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      minWidth: '150px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '28px',
                      background: screenshot.background || '#f0f0f0',
                      borderRadius: '3px',
                      border: '1px solid #ddd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FontAwesomeIcon icon={faMobile} style={{ fontSize: '10px', opacity: 0.6 }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ 
                        fontSize: '13px', 
                        fontWeight: '500', 
                        color: '#1a1a1a',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {screenshot.title}
                      </div>
                      <div style={{ fontSize: '11px', color: '#666' }}>
                        {screenshot.width} × {screenshot.height}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setScreenshots(screenshots.filter(s => s.id !== screenshot.id))
                        if (currentScreenshot?.id === screenshot.id) {
                          setCurrentScreenshot(screenshots.length > 1 ? screenshots.find(s => s.id !== screenshot.id) || null : null)
                        }
                      }}
                      style={{
                        width: '16px',
                        height: '16px',
                        border: 'none',
                        borderRadius: '50%',
                        background: '#ff4444',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '10px'
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Add New Button */}
                <button
                  onClick={() => {
                    const newScreenshot = {
                      id: Date.now(),
                      title: `Canvas ${screenshots.length + 1}`,
                      background: '#ffffff',
                      elements: [],
                      width: 1242,
                      height: 2688
                    }
                    setCurrentScreenshot(newScreenshot)
                    setScreenshots([...screenshots, newScreenshot])
                  }}
                  style={{
                    padding: '8px 16px',
                    border: '2px dashed #007AFF',
                    borderRadius: '8px',
                    background: '#f8fbff',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#007AFF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    minWidth: '120px'
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  New Canvas
                </button>
              </div>

              {/* Main Editor */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '280px 1fr 280px',
                gap: '20px',
                padding: '20px',
                height: 'calc(100vh - 240px)',
                background: '#f8f9fa'
              }}>
                {/* Left Sidebar - Tools */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  overflowY: 'auto'
                }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Add Elements</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <button 
                      onClick={addTextElement}
                      style={{
                        padding: '12px',
                        border: '1px solid #e1e5e9',
                        borderRadius: '8px',
                        background: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '500',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#666'
                      }}
                    >
                      <FontAwesomeIcon icon={faFileText} style={{ fontSize: '16px' }} />
                      Add Text
                    </button>
                    <button 
                      onClick={addImageElement}
                      style={{
                        padding: '12px',
                        border: '1px solid #e1e5e9',
                        borderRadius: '8px',
                        background: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '500',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#666'
                      }}
                    >
                      <FontAwesomeIcon icon={faImage} style={{ fontSize: '16px' }} />
                      Add Image
                    </button>
                  </div>
                </div>

                {/* Main Canvas */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {currentScreenshot ? (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'auto'
                    }}>
                      <div 
                        style={{
                          width: currentScreenshot.title?.includes('Carousel') ? '800px' : '350px',
                          height: currentScreenshot.title?.includes('Carousel') ? '500px' : '650px',
                          maxWidth: '95%',
                          maxHeight: '95%',
                          background: currentScreenshot.background,
                          position: 'relative',
                          border: '2px solid #e1e5e9',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                          cursor: isDragging ? 'grabbing' : 'default'
                        }}
                        onClick={() => setSelectedElement(null)}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                      >
                      {currentScreenshot.elements?.map((element: any) => (
                        <div
                          key={element.id}
                          style={{
                            position: 'absolute',
                            left: element.x,
                            top: element.y,
                            width: element.width,
                            height: element.height,
                            cursor: 'grab',
                            border: selectedElement?.id === element.id ? '2px solid #007AFF' : 'transparent',
                            borderRadius: '4px',
                            zIndex: selectedElement?.id === element.id ? 10 : 1
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedElement(element)
                          }}
                          onMouseDown={(e) => handleMouseDown(e, element)}
                        >
                          {element.type === 'text' && (
                            <div
                              contentEditable
                              suppressContentEditableWarning={true}
                              onBlur={(e) => updateElementContent(element.id, e.target.textContent || '')}
                              style={{
                                color: element.color,
                                fontSize: `${element.fontSize}px`,
                                fontFamily: element.fontFamily,
                                outline: 'none',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '8px',
                                background: element.backgroundColor || 'transparent',
                                textAlign: 'center'
                              }}
                            >
                              {element.content}
                            </div>
                          )}
                          {element.type === 'image' && (
                            <img
                              src={element.src}
                              alt="Element"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '4px'
                              }}
                            />
                          )}
                          
                          {selectedElement?.id === element.id && (
                            <>
                              <div style={{
                                position: 'absolute',
                                top: '-35px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '4px',
                                background: 'rgba(0,0,0,0.8)',
                                padding: '4px',
                                borderRadius: '6px'
                              }}>
                                <button
                                  onClick={() => duplicateElement(element)}
                                  style={{
                                    width: '24px',
                                    height: '24px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    background: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '10px'
                                  }}
                                >
                                  <FontAwesomeIcon icon={faCopy} />
                                </button>
                                <button
                                  onClick={() => {
                                    deleteElement(element.id)
                                    setSelectedElement(null)
                                  }}
                                  style={{
                                    width: '24px',
                                    height: '24px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    background: '#ff4444',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '10px'
                                  }}
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </div>
                              <div style={{
                                position: 'absolute',
                                bottom: '-6px',
                                right: '-6px',
                                width: '12px',
                                height: '12px',
                                background: '#007AFF',
                                border: '2px solid white',
                                borderRadius: '2px',
                                cursor: 'se-resize'
                              }} />
                            </>
                          )}
                        </div>
                      ))}
                      </div>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', color: '#666' }}>
                      <FontAwesomeIcon icon={faMobile} style={{ fontSize: '48px', opacity: 0.3, marginBottom: '16px' }} />
                      <h3 style={{ margin: '0 0 8px 0' }}>Create Your First Canvas</h3>
                      <p style={{ margin: 0 }}>Click "New Canvas" to get started</p>
                    </div>
                  )}
                </div>

                {/* Right Sidebar - Properties */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  overflowY: 'auto'
                }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Properties</h3>
                  
                  {currentScreenshot && (
                    <div>
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Background</h4>
                        <input 
                          type="color" 
                          value={currentScreenshot.background?.includes('gradient') ? '#667eea' : currentScreenshot.background || '#ffffff'}
                          onChange={(e) => setCurrentScreenshot({
                            ...currentScreenshot,
                            background: e.target.value
                          })}
                          style={{
                            width: '100%',
                            height: '40px',
                            border: '1px solid #e1e5e9',
                            borderRadius: '6px',
                            cursor: 'pointer'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Actions</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <button
                            onClick={saveScreenshot}
                            style={{
                              padding: '10px',
                              border: '1px solid #007AFF',
                              borderRadius: '6px',
                              background: '#007AFF',
                              color: 'white',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '500'
                            }}
                          >
                            <FontAwesomeIcon icon={faBookmark} style={{ marginRight: '8px' }} />
                            Save
                          </button>
                          <button
                            onClick={exportScreenshot}
                            style={{
                              padding: '10px',
                              border: '1px solid #e1e5e9',
                              borderRadius: '6px',
                              background: 'white',
                              color: '#666',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '500'
                            }}
                          >
                            <FontAwesomeIcon icon={faDownload} style={{ marginRight: '8px' }} />
                            Export PNG
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Languages/Features */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {modalType === 'languages' ? (
                  <>
                    <FontAwesomeIcon icon={faLanguage} />
                    All Supported Languages ({selectedApp ? getLanguages(selectedApp).length : 0})
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faMobile} />
                    All Features & Compatibility
                  </>
                )}
              </h3>
              <button className="modal-close-btn" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-body">
              {modalType === 'languages' && selectedApp && (
                <div className="modal-masonry-grid">
                  {getLanguages(selectedApp).map((language, index) => (
                    <div key={index} className="modal-tag-item">
                      <span className="modal-tag">{language}</span>
                    </div>
                  ))}
                </div>
              )}
              {modalType === 'features' && selectedApp && (
                <div className="modal-masonry-grid">
                  {getFeatures(selectedApp).map((feature, index) => (
                    <div key={index} className="modal-tag-item">
                      <span className="modal-tag">{feature}</span>
                    </div>
                  ))}
                  {selectedApp.supportedDevices && selectedApp.supportedDevices.map((device: string, index: number) => (
                    <div key={`device-${index}`} className="modal-tag-item">
                      <span className="modal-tag">{device}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard 