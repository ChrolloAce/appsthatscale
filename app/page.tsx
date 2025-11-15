import React from 'react'
import WaitlistHero from '../components/WaitlistHero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero Section */}
        <WaitlistHero />
      </div>
      <Footer />
    </main>
  )
} 