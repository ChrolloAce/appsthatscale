import React from 'react'
import type { Metadata } from 'next'
import WaitlistQuiz from '../../components/WaitlistQuiz'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Join Waitlist - Apps That Scale',
  description: 'Join the Apps That Scale waitlist and get 50% off when we launch! Learn to build profitable B2C applications.',
  keywords: 'join waitlist, apps that scale, B2C app development, early access, discount',
}

export default function JoinWaitlistPage() {
  return (
    <main className="min-h-screen relative bg-[#0a0a0a]">
      {/* Subtle gradient shading overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-60"></div>
      
      {/* Soft grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] bg-[position:-1px_-1px]"></div>
      
      <div className="relative">
        {/* Header with Logo */}
        <header className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <img 
              src="/logo.png" 
              alt="Apps That Scale" 
              className="mx-auto h-10 sm:h-12 w-auto mb-6 opacity-90"
            />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Join the Waitlist
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Get 50% off when we launch and be the first to access our proven framework
            </p>
          </div>
        </header>

        {/* Quiz Section */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <WaitlistQuiz />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
} 