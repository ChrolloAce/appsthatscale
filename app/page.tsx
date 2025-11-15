import React from 'react'
import WaitlistHero from '../components/WaitlistHero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:-1px_-1px]">
      <div className="relative">
        {/* Hero Section */}
        <WaitlistHero />
      </div>
      <Footer />
    </main>
  )
} 