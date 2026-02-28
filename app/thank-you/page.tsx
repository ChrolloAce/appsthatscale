import React from 'react'
import type { Metadata } from 'next'
import ThankYouHero from '../../components/ThankYouHero'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Thank You - Apps That Scale',
  description: 'Thank you for joining the Apps That Scale waitlist! Check your email for exclusive early access and get ready to build profitable apps.',
  keywords: 'thank you, apps that scale, waitlist, early access, app development',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen relative bg-[#0a0a0a]">
      {/* Subtle gradient shading overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-60"></div>
      
      {/* Soft grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] bg-[position:-1px_-1px]"></div>
      
      <div className="relative">
        {/* Hero Section */}
        <ThankYouHero />
      </div>
      <Footer />
    </main>
  )
} 