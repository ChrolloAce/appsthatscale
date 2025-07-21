import React from 'react'
import Navbar from '../components/Navbar'
import WaitlistHero from '../components/WaitlistHero'
import WaitlistSignup from '../components/WaitlistSignup'
import WaitlistTestimonials from '../components/WaitlistTestimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative">
        {/* Hero Section with Background */}
        <WaitlistHero 
          onEmailSubmit={() => {}} 
          isSubmitting={false}
        />
        
        {/* Signup Form Section */}
        <section className="relative -mt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WaitlistSignup className="relative z-10" />
          </div>
        </section>
        
        {/* Social Proof Section */}
        <WaitlistTestimonials />
      </div>
      <Footer />
    </main>
  )
} 