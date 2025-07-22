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
    <main className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="/toplogo.png" 
            alt="Apps That Scale" 
            className="mx-auto h-12 sm:h-16 w-auto mb-4"
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Join the <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Waitlist</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
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
    </main>
  )
} 