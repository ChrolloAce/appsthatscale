import React from 'react'
import WaitlistHero from '../components/WaitlistHero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#0a0a0a]">
      {/* Subtle gradient shading overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-60"></div>
      
      {/* Soft grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] bg-[position:-1px_-1px]"></div>
      
      <div className="relative">
        {/* Hero Section */}
        <WaitlistHero />
      </div>
      <Footer />
    </main>
  )
} 