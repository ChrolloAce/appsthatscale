import React from 'react'
import Navbar from '../components/Navbar'
import WaitlistHero from '../components/WaitlistHero'
import WaitlistQuiz from '../components/WaitlistQuiz'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <WaitlistHero />
        
        {/* Quiz Section */}
        <section className="relative -mt-40 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WaitlistQuiz className="relative z-10" />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
} 