import React from 'react'
import WaitlistHero from '../components/WaitlistHero'
import WaitlistQuiz from '../components/WaitlistQuiz'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <WaitlistHero />
        
        {/* Quiz Section - More spacing to avoid timer overlap */}
        <section className="relative -mt-16 sm:-mt-20 pb-32 pt-16 sm:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WaitlistQuiz className="relative z-10" />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
} 