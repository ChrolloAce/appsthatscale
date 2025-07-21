import React from 'react'
import type { Metadata } from 'next'
import ThankYouHero from '../../components/ThankYouHero'
import ThankYouNextSteps from '../../components/ThankYouNextSteps'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Thank You - Apps That Scale',
  description: 'Thank you for joining the Apps That Scale waitlist! Check your email for exclusive early access and get ready to build profitable apps.',
  keywords: 'thank you, apps that scale, waitlist, early access, app development',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative">
        {/* Hero Section */}
        <ThankYouHero />
        
        {/* Next Steps Section */}
        <section className="relative pb-16 pt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ThankYouNextSteps />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
} 