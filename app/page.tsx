import React from 'react'
import Navbar from '../components/Navbar'
import WaitlistHero from '../components/WaitlistHero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <WaitlistHero />
      </div>
      <Footer />
    </main>
  )
} 