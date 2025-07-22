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
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero Section */}
        <ThankYouHero />
      </div>
      <Footer />
    </main>
  )
} 